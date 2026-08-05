import { MAX_DEPTH, strata } from '../data/site'
import { formatMetres } from '../lib/format'
import styles from './DepthGauge.module.css'

interface Marker {
  id: string
  label: string
  depth: number
}

interface DepthGaugeProps {
  progress: number
  /** Index of the marker held at the reading line. Ignored when unmarked. */
  active?: number
  /**
   * Named depths to stamp on the rail. The front page passes its strata; the
   * text pages pass none and get a bare gauge.
   */
  markers?: readonly Marker[]
}

/**
 * The depth gauge: a fixed rail at the left edge reading out how deep the
 * visitor has gone down the current page.
 */
export function DepthGauge({ progress, active = 0, markers = strata }: DepthGaugeProps) {
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

        {markers.map((marker, index) => {
          const fraction = marker.depth / MAX_DEPTH

          return (
            <div
              key={marker.id}
              className={styles.tick}
              data-passed={index <= active || undefined}
              /* Labels sitting near the foot of the rail have to grow upward,
                 or their vertical text runs off the bottom of the viewport. */
              data-anchor={fraction > 0.75 ? 'end' : undefined}
              style={{ top: `${fraction * 100}%` }}
            >
              <span className={styles.tickLabel}>{marker.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
