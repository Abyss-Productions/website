import type { ReactNode } from 'react'
import { formatMetres } from '../lib/format'
import { Reveal } from './Reveal'
import styles from './Stratum.module.css'

interface StratumProps {
  id: string
  /** Depth in metres, printed above the heading to match the gauge. */
  depth: number
  heading: string
  intro?: string
  children: ReactNode
}

/** One layer of the descent: a section stamped with the depth it sits at. */
export function Stratum({ id, depth, heading, intro, children }: StratumProps) {
  return (
    <section id={id} className={styles.stratum}>
      <div className="shell">
        <Reveal className={styles.head}>
          <p className={`utility ${styles.depth}`}>
            <span className={styles.reading}>−{formatMetres(depth)} m</span>
            <span className={styles.rule} aria-hidden="true" />
          </p>
          <h2 className={`display ${styles.heading}`}>{heading}</h2>
          {intro && <p className={`lede ${styles.intro}`}>{intro}</p>}
        </Reveal>

        {children}
      </div>
    </section>
  )
}
