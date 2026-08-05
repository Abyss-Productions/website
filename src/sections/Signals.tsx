import { useState } from 'react'
import { ActionButton, ActionLink } from '../components/Action'
import { Reveal } from '../components/Reveal'
import { Stratum } from '../components/Stratum'
import { site, strata } from '../data/site'
import styles from './Signals.module.css'

type FormState = 'idle' | 'sending' | 'done' | 'error'

export function Signals() {
  const stratum = strata[3]
  const endpoint = site.signals.newsletterEndpoint
  const [email, setEmail] = useState('')
  const [state, setState] = useState<FormState>('idle')

  const social = site.social.filter((entry) => entry.href)

  async function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error(String(response.status))
      setState('done')
      setEmail('')
    } catch {
      setState('error')
    }
  }

  return (
    <Stratum
      id={stratum.id}
      depth={stratum.depth}
      heading={site.signals.heading}
      intro={site.signals.lead}
    >
      <div className={styles.layout}>
        <Reveal className={styles.subscribe}>
          {endpoint ? (
            state === 'done' ? (
              <p className={styles.confirmed}>
                You are on the list. Next message goes out when a build does.
              </p>
            ) : (
              <form className={styles.form} onSubmit={subscribe}>
                <label className={`utility ${styles.label}`} htmlFor="signal-email">
                  Email address
                </label>
                <div className={styles.field}>
                  <input
                    id="signal-email"
                    className={styles.input}
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      if (state === 'error') setState('idle')
                    }}
                    aria-describedby={state === 'error' ? 'signal-error' : undefined}
                  />
                  <ActionButton type="submit" variant="solid" disabled={state === 'sending'}>
                    {state === 'sending' ? 'Sending' : 'Sign up'}
                  </ActionButton>
                </div>
                {state === 'error' && (
                  <p id="signal-error" className={styles.error} role="alert">
                    That did not go through. Check the address and try again, or mail{' '}
                    <a className={styles.inlineLink} href={`mailto:${site.contact.general}`}>
                      {site.contact.general}
                    </a>
                    .
                  </p>
                )}
              </form>
            )
          ) : (
            /* No mailing-list endpoint configured yet — send people to the inbox. */
            <div className={styles.form}>
              <p className={styles.fallback}>
                The mailing list opens with the first store listing. Until then, mail us and we
                will put you on it by hand.
              </p>
              <ActionLink
                href={`mailto:${site.contact.general}?subject=Release%20news`}
                variant="solid"
                className={styles.fallbackAction}
                arrow
              >
                Ask for release news
              </ActionLink>
            </div>
          )}
        </Reveal>

        <Reveal delay={140} className={styles.directory}>
          <dl className={styles.contacts}>
            <div className={styles.contact}>
              <dt className={`utility ${styles.contactLabel}`}>General</dt>
              <dd>
                <a className={styles.mail} href={`mailto:${site.contact.general}`}>
                  {site.contact.general}
                </a>
              </dd>
            </div>
            <div className={styles.contact}>
              <dt className={`utility ${styles.contactLabel}`}>Player support</dt>
              <dd>
                <a className={styles.mail} href={`mailto:${site.contact.support}`}>
                  {site.contact.support}
                </a>
              </dd>
            </div>
            <div className={styles.contact}>
              <dt className={`utility ${styles.contactLabel}`}>Press and creators</dt>
              <dd>
                <a className={styles.mail} href={`mailto:${site.contact.press}`}>
                  {site.contact.press}
                </a>
              </dd>
            </div>
          </dl>

          {social.length > 0 && (
            <ul className={styles.social}>
              {social.map((entry) => (
                <li key={entry.label}>
                  <ActionLink href={entry.href} external variant="quiet" arrow>
                    {entry.label}
                  </ActionLink>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </div>
    </Stratum>
  )
}
