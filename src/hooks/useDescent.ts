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

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.documentElement.style.removeProperty('--descent')
    }
  }, [sectionIds])

  return descent
}
