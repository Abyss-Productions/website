import { GameCard } from '../components/GameCard'
import { Reveal } from '../components/Reveal'
import { Stratum } from '../components/Stratum'
import { games } from '../data/games'
import { strata } from '../data/site'
import styles from './Games.module.css'

export function Games() {
  const stratum = strata[1]

  return (
    <Stratum
      id={stratum.id}
      depth={stratum.depth}
      heading="The games"
      intro="Every title starts from one mechanic we could not put down, and ships when that mechanic holds for a hundred runs."
    >
      <ul className={styles.grid}>
        {games.map((game, index) => (
          <Reveal as="li" key={game.id} delay={index * 110} className={styles.item}>
            <GameCard game={game} index={index} />
          </Reveal>
        ))}
      </ul>
    </Stratum>
  )
}
