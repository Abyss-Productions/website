import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Backdrop } from './components/Backdrop'
import { DepthGauge } from './components/DepthGauge'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { site, strata } from './data/site'
import { useDescent } from './hooks/useDescent'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Privacy } from './pages/Privacy'
import { Support } from './pages/Support'

const TITLES: Record<string, string> = {
  '/': `${site.name} — ${site.role}`,
  '/support': `Player support — ${site.name}`,
  '/privacy': `Privacy policy — ${site.name}`,
}

// Module scope, so each identity is stable across renders.
const HOME_SECTIONS = strata.map((stratum) => stratum.id)
const NO_SECTIONS: readonly string[] = []
const NO_MARKERS = [] as const

/**
 * Puts the viewport where the visitor expects it after a route change, and
 * keeps the document title in step. Without this, a client-side router lands
 * every new page at whatever scroll position the last one was left at.
 */
function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] ?? `Not found — ${site.name}`

    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // The gauge tracks every page. Only the front page has named strata to stamp
  // on the rail; elsewhere it reads as a plain descent.
  const { progress, active } = useDescent(isHome ? HOME_SECTIONS : NO_SECTIONS)

  return (
    <>
      <Backdrop />
      <RouteEffects />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <DepthGauge progress={progress} active={active} markers={isHome ? strata : NO_MARKERS} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
