import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { site } from '../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.brand}>
          <img src={logo} alt="" className={styles.mark} width={40} height={44} />
          <div>
            <p className={`display ${styles.name}`}>{site.name}</p>
            <p className={`utility ${styles.seabed}`}>
              Mobile Games Studio
            </p>
          </div>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <Link className={styles.link} to="/#games">
            Games
          </Link>
          <Link className={styles.link} to="/#studio">
            Studio
          </Link>
          <Link className={styles.link} to="/support">
            Support
          </Link>
          <Link className={styles.link} to="/privacy">
            Privacy
          </Link>
        </nav>

        <p className={`utility ${styles.copyright}`}>
          © {new Date().getFullYear()} {site.legal.entity}
        </p>
      </div>
    </footer>
  )
}
