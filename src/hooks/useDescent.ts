import { useEffect, useState } from 'react'

interface Descent {
  /** 0 at the top of the page, 1 at the bottom. */
  progress: number
  /** Index of the stratum currently held at the reading line. */
  active: number
}

/**
 * Tracks how far down the page the visitor is, and which section they are in.
 * Also mirrors progress onto <html> as --descent so the background layers can
 * darken without React re-rendering them.
 */
export function useDescent(sectionIds: readonly string[]): Descent {
  const [descent, setDescent] = useState<Descent>({ progress: 0, active: 0 })

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0

      // The reading line sits a third of the way down the viewport: a section
      // counts as current once its top crosses it.
      const readingLine = window.innerHeight * 0.34
      let active = 0
      sectionIds.forEach((id, index) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= readingLine) active = index
      })

      document.documentElement.style.setProperty('--descent', progress.toFixed(4))
      setDescent((prev) =>
        prev.active === active && Math.abs(prev.progress - progress) < 0.001
          ? prev
          : { progress, active },
      )
    }

    /* Coalesce bursts of scroll events into one measurement per frame. This
       replaces any pending frame rather than skipping when one is outstanding —
       a frame requested while the tab is hidden may never run, and skipping
       would then latch the gauge at its last value for good. */
    const schedule = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    // Coming back to a hidden tab, measure straight away: its scroll position
    // may have changed while no frames were being served.
    const onVisibility = () => {
      if (document.visibilityState === 'visible') measure()
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      document.removeEventListener('visibilitychange', onVisibility)
      document.documentElement.style.removeProperty('--descent')
    }
  }, [sectionIds])

  return descent
}
