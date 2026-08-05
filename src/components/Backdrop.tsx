import type { CSSProperties } from 'react'
import styles from './Backdrop.module.css'

/** Deterministic 0–1 spread, so the motes look scattered but never re-roll. */
function jitter(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const MOTES = Array.from({ length: 16 }, (_, i) => {
  const a = jitter(i + 1)
  const b = jitter(i + 7)
  return {
    style: {
      left: `${2 + a * 94}%`,
      width: `${2 + Math.round(b * 2) * 1.2}px`,
      '--drift': `${(a - 0.5) * 5}vw`,
      '--span': `${24 + b * 40}s`,
      '--offset': `${-a * 60}s`,
    } as CSSProperties,
  }
})

/**
 * Fixed atmosphere behind everything: surface light that fades out as the
 * visitor descends, violet pressure that fades in, and slow rising motes.
 * All of it is driven by the --descent variable on <html>, so scrolling costs
 * no React work.
 */
export function Backdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.surface} />
      <div className={styles.pressure} />
      <div className={styles.motes}>
        {MOTES.map((mote, i) => (
          <span key={i} className={styles.mote} style={mote.style} />
        ))}
      </div>
      <div className={styles.grain} />
    </div>
  )
}
