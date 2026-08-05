import { Reveal } from '../components/Reveal'
import { Stratum } from '../components/Stratum'
import { site, strata } from '../data/site'
import styles from './Studio.module.css'

export function Studio() {
  const stratum = strata[2]
  const facts = site.studio.facts.filter((fact) => fact.value)

  return (
    <Stratum id={stratum.id} depth={stratum.depth} heading={site.studio.heading}>
      <div className={styles.layout}>
        <Reveal className={styles.prose}>
          {site.studio.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? styles.opening : undefined}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={140} className={styles.spec}>
          <p className={`utility ${styles.specTitle}`}>Studio record</p>
          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt className={`utility ${styles.factLabel}`}>{fact.label}</dt>
                <dd className={`utility ${styles.factValue}`}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Stratum>
  )
}
