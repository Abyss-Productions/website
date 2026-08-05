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
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label={`${site.name} — home`}>
          <img src={logo} alt="" className={styles.mark} width={34} height={37} />
          <span className={styles.wordmark}>
            <span className={styles.word}>Abyss Productions</span>
            <span className={styles.role}>{site.role}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={styles.link}
              aria-current={pathname === item.to ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
