/**
 * The game catalogue.
 *
 * Color Cargo is a real title. The two entries after it are still placeholders
 * so the layout can be judged with real-shaped content — replace them as the
 * titles firm up.
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
    id: 'color-cargo',
    title: 'Color Cargo',
    genre: 'Colour-matching puzzler',
    blurb:
      'Load each truck with the boxes that match its colour. Only the front box of a column will move, and the handful of holding spots between the grid and the truck are the whole game — fill them with the wrong colour and the level is over.',
    status: 'testing',
    window: 'In testing on Google Play',
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
