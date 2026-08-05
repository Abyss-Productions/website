import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { ActionLink } from '../components/Action'
import { games } from '../data/games'
import { site } from '../data/site'
import styles from './Hero.module.css'

export function Hero() {
  const [entered, setEntered] = useState(false)
  const store = site.stores.googlePlay

  // Hold one frame before starting the entrance, so the sequence is not
  // half-finished by the time the fonts land.
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const unreleased = games.filter((game) => game.status !== 'released')
  const next = unreleased[0] ?? games[0]

  return (
    <section id="surface" className={styles.hero} data-entered={entered || undefined}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={`utility ${styles.eyebrow}`}>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            {site.hero.eyebrow}
          </p>

          <h1 className={`display ${styles.headline}`}>
            <span className={styles.line}>{site.hero.headline[0]}</span>
            <span className={`${styles.line} ${styles.lit}`}>{site.hero.headline[1]}</span>
          </h1>

          <p className={`lede ${styles.lead}`}>{site.hero.lead}</p>

          <div className={styles.actions}>
            {store ? (
              <ActionLink href={store} external variant="solid" arrow>
                Get it on Google Play
              </ActionLink>
            ) : (
              <ActionLink href="#games" variant="solid" arrow>
                See the games
              </ActionLink>
            )}
            <ActionLink href="#signals">Get release news</ActionLink>
          </div>

          <dl className={`utility ${styles.status}`}>
            <div className={styles.statusItem}>
              <dt className={styles.statusLabel}>In production</dt>
              <dd className={styles.statusValue}>
                {unreleased.length} {unreleased.length === 1 ? 'title' : 'titles'}
              </dd>
            </div>
            <div className={styles.statusItem}>
              <dt className={styles.statusLabel}>First platform</dt>
              <dd className={styles.statusValue}>Google Play</dd>
            </div>
            {next && (
              <div className={styles.statusItem}>
                <dt className={styles.statusLabel}>Next up</dt>
                <dd className={styles.statusValue}>
                  {next.title} — {next.window}
                </dd>
              </div>
            )}
          </dl>
        </div>

        <div className={styles.stage}>
          <div className={styles.bloom} aria-hidden="true" />
          <div className={styles.core} aria-hidden="true" />
          <img
            src={logo}
            alt={`${site.name} logo: a formation of teal and violet crystals striking upward`}
            className={styles.shard}
            width={504}
            height={551}
          />
        </div>
      </div>
    </section>
  )
}
