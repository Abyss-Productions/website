import { MAX_DEPTH, strata } from '../data/site'
import { formatMetres } from '../lib/format'
import styles from './DepthGauge.module.css'

interface DepthGaugeProps {
  progress: number
  active: number
}

/**
 * The depth gauge: a fixed rail at the left edge reading out how deep the
 * visitor has gone. Sections are strata, and the marker sinks past each one.
 */
export function DepthGauge({ progress, active }: DepthGaugeProps) {
  const depth = progress * MAX_DEPTH

  return (
    <div className={styles.gauge} aria-hidden="true">
      <div className={styles.readout}>
        <span className={styles.value}>−{formatMetres(depth)}</span>
        <span className={styles.unit}>m</span>
      </div>

      <div className={styles.rail}>
        <div className={styles.fill} style={{ scale: `1 ${progress}` }} />
        <div className={styles.marker} style={{ top: `${progress * 100}%` }} />

        {strata.map((stratum, index) => {
          const fraction = stratum.depth / MAX_DEPTH

          return (
            <div
              key={stratum.id}
              className={styles.tick}
              data-passed={index <= active || undefined}
              /* Labels sitting near the foot of the rail have to grow upward,
                 or their vertical text runs off the bottom of the viewport. */
              data-anchor={fraction > 0.75 ? 'end' : undefined}
              style={{ top: `${fraction * 100}%` }}
            >
              <span className={styles.tickLabel}>{stratum.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
