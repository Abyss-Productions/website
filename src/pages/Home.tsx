import { DepthGauge } from '../components/DepthGauge'
import { strata } from '../data/site'
import { useDescent } from '../hooks/useDescent'
import { Games } from '../sections/Games'
import { Hero } from '../sections/Hero'
import { Signals } from '../sections/Signals'
import { Studio } from '../sections/Studio'

// Module scope so the identity stays stable across renders.
const SECTION_IDS = strata.map((stratum) => stratum.id)

export function Home() {
  const { progress, active } = useDescent(SECTION_IDS)

  return (
    <>
      <DepthGauge progress={progress} active={active} />
      <Hero />
      <Games />
      <Studio />
      <Signals />
    </>
  )
}
