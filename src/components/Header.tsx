import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { site } from '../data/site'
import styles from './Header.module.css'

const NAV = [
  { label: 'Games', to: '/#games' },
  { label: 'Studio', to: '/#studio' },
  { label: 'Support', to: '/support' },
]

export function Header() {
  const { pathname, hash } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Any navigation closes the panel, browser back and forward included.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, hash])

  // Escape is the expected way out of an open menu.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <>
      {/* Kept outside the header: the header's backdrop-filter makes it a
          containing block for fixed children, and the scrim has to cover the
          whole viewport. */}
      <div
        className={styles.scrim}
        data-open={menuOpen || undefined}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <header className={styles.header}>
        <div className={styles.inner}>
          <Link to="/" className={styles.brand} aria-label={`${site.name} — home`}>
            <img src={logo} alt="" className={styles.mark} width={34} height={37} />
            <span className={styles.wordmark}>
              <span className={styles.word}>Abyss Productions</span>
              <span className={styles.role}>{site.role}</span>
            </span>
          </Link>

          {/* Phone only. Sits before the panel in the DOM so focus moves from
              the toggle into the links it reveals. */}
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.toggleLabel}>{menuOpen ? 'Close' : 'Menu'}</span>
            {/* Three shards of uneven length, cleaved at both ends. They cross
                into a fracture when the panel opens. */}
            <span className={styles.shards} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav
            id="primary-nav"
            className={styles.nav}
            data-open={menuOpen || undefined}
            aria-label="Main"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={styles.link}
                aria-current={pathname === item.to ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
