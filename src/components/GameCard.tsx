import logo from '../assets/logo.png'
import { statusLabel, type Game } from '../data/games'
import { ActionLink } from './Action'
import styles from './GameCard.module.css'

interface GameCardProps {
  game: Game
  index: number
}

export function GameCard({ game, index }: GameCardProps) {
  const links = [
    game.playStoreUrl && { label: 'Google Play', href: game.playStoreUrl },
    game.appStoreUrl && { label: 'App Store', href: game.appStoreUrl },
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <article className={styles.card} data-status={game.status}>
      <div className={styles.art}>
        {game.art ? (
          <img src={game.art} alt={`Key art for ${game.title}`} className={styles.keyArt} />
        ) : (
          /* No key art yet: a facet lit from a different angle per title. */
          <div className={styles.facet} data-facet={index % 3} aria-hidden="true">
            <img src={logo} alt="" className={styles.ghost} />
          </div>
        )}
        <span className={`utility ${styles.status}`}>{statusLabel[game.status]}</span>
      </div>

      <div className={styles.body}>
        <p className={`utility ${styles.genre}`}>{game.genre}</p>
        <h3 className={`display ${styles.title}`}>{game.title}</h3>
        <p className={styles.blurb}>{game.blurb}</p>

        <footer className={styles.footer}>
          <span className={`utility ${styles.window}`}>{game.window}</span>
          {links.length > 0 && (
            <div className={styles.links}>
              {links.map((link) => (
                <ActionLink key={link.href} href={link.href} external variant="quiet" arrow>
                  {link.label}
                </ActionLink>
              ))}
            </div>
          )}
        </footer>
      </div>
    </article>
  )
}
