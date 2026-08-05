import { Link } from 'react-router-dom'
import { ActionLink } from '../components/Action'
import { site } from '../data/site'
import { Article } from './Article'

export function NotFound() {
  return (
    <Article
      eyebrow="Off the map"
      title="Nothing at this depth"
      meta="Error 404"
      actions={
        <>
          <ActionLink href="/" variant="solid" arrow>
            Return to the surface
          </ActionLink>
          <ActionLink href={`mailto:${site.contact.general}`}>Report a broken link</ActionLink>
        </>
      }
    >
      <p>
        This address does not lead anywhere on {site.name}. It may have moved, or the link that
        brought you here may have been mistyped.
      </p>
      <p>
        From here you can go back to the <Link to="/">front page</Link>, look at{' '}
        <Link to="/#games">the games</Link>, or ask us where you meant to end up.
      </p>
    </Article>
  )
}
