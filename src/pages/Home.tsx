import { Games } from '../sections/Games'
import { Hero } from '../sections/Hero'
import { Signals } from '../sections/Signals'
import { Studio } from '../sections/Studio'

/** The descent. The depth gauge that tracks it lives in App, above the routes. */
export function Home() {
  return (
    <>
      <Hero />
      <Games />
      <Studio />
      <Signals />
    </>
  )
}
