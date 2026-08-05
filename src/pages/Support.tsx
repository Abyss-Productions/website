import { ActionLink } from '../components/Action'
import { games } from '../data/games'
import { site } from '../data/site'
import { Article } from './Article'

export function Support() {
  return (
    <Article
      eyebrow="Help"
      title="Player support"
      meta="Replies within two working days"
      actions={
        <>
          <ActionLink href={`mailto:${site.contact.support}`} variant="solid" arrow>
            Email support
          </ActionLink>
          <ActionLink href="/#signals">Get release news</ActionLink>
        </>
      }
    >
      <p>
        Something broken, a purchase that did not arrive, or a save you want back? Email{' '}
        <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a>. One person reads that
        inbox, so the more of the below you include, the faster this goes.
      </p>

      <h2>What to include</h2>
      <ul>
        <li>
          <strong>Which game</strong> — {games.map((game) => game.title).join(', ')}.
        </li>
        <li>
          <strong>Device and OS version</strong> — for example "Pixel 7a, Android 15".
        </li>
        <li>
          <strong>What happened</strong> — what you did, what you expected, what you got instead.
        </li>
        <li>
          <strong>A screenshot or screen recording</strong> if the problem is visible.
        </li>
        <li>
          <strong>Your order number</strong> for anything to do with a purchase. Google Play emails
          it to you at the time of the transaction.
        </li>
      </ul>

      <h2>Refunds</h2>
      <p>
        Purchases are handled by the store, not by us, so refunds have to go through the store that
        took the payment. On Android, use Google Play's{' '}
        <a
          href="https://support.google.com/googleplay/answer/2479637"
          target="_blank"
          rel="noreferrer noopener"
        >
          refund request form
        </a>
        . On iOS, use{' '}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer noopener">
          reportaproblem.apple.com
        </a>
        . If the store turns you down and you think the fault is ours, write to us and we will look
        at it again.
      </p>

      <h2>Lost progress</h2>
      <p>
        Save data is stored on your device. If you still have the device, do not delete the game
        before contacting us — a save that is still on disk can often be recovered, and one that has
        been uninstalled usually cannot.
      </p>

      <h2>Bugs and feature requests</h2>
      <p>
        Both are welcome at the same address. Reproducible bugs go to the top of the list. If you
        want to see what we are working on next, the mailing list carries one message per release.
      </p>
    </Article>
  )
}
