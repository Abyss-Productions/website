/**
 * The game catalogue.
 *
 * The three entries below are placeholders so the layout can be judged with
 * real-shaped content — replace them with your titles.
 *
 * status:
 *   'development' — announced, not playable yet
 *   'testing'     — open or closed test build available
 *   'released'    — live on at least one store
 *
 * Add key art at src/assets/games/<file>.png and import it, or leave `art`
 * undefined and the card renders a generated crystal facet instead.
 */

export type GameStatus = 'development' | 'testing' | 'released'

export interface Game {
  id: string
  title: string
  genre: string
  blurb: string
  status: GameStatus
  /** Shown next to the status pill, e.g. 'Winter 2026' or 'Out now'. */
  window: string
  playStoreUrl?: string
  appStoreUrl?: string
  /** Optional imported image. */
  art?: string
}

export const games: Game[] = [
  {
    id: 'shardfall',
    title: 'Shardfall',
    genre: 'Roguelite deck-builder',
    blurb:
      'Descend a fracturing crystal shelf one room at a time. Every card you keep makes the shelf less stable, so the deck that gets you deepest is the one that nearly kills you.',
    status: 'development',
    window: 'Winter 2026',
  },
  {
    id: 'deepline',
    title: 'Deepline',
    genre: 'One-thumb endless diver',
    blurb:
      'Hold to sink, release to rise, and read the current before it reads you. Runs last ninety seconds and the leaderboard resets every Sunday.',
    status: 'testing',
    window: 'Open test on Google Play',
  },
  {
    id: 'ashwake',
    title: 'Ashwake',
    genre: 'Turn-based tactics',
    blurb:
      'Six survivors, one lantern, and a grid that goes dark at the end of every turn. You plan in the light and commit in the black.',
    status: 'development',
    window: '2027',
  },
]

export const statusLabel: Record<GameStatus, string> = {
  development: 'In development',
  testing: 'In testing',
  released: 'Out now',
}
