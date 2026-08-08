/*
 * IMPORTANT — read before you publish.
 *
 * This is a working draft, not legal advice. Google Play and the App Store both
 * require a privacy policy URL, and both require it to match what your app
 * actually does. Before submitting a build:
 *
 *   1. Delete anything below that your games do not do.
 *   2. Name every SDK you ship (analytics, crash reporting, ads, attribution)
 *      in the "Services we rely on" section.
 *   3. Make sure it agrees with your Play Console Data safety form and your
 *      App Store privacy questions.
 *   4. Have someone qualified check it if you take payments or collect accounts.
 */

import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { Article } from './Article'

export function Privacy() {
  return (
    <Article
      eyebrow="Legal"
      title="Privacy policy"
      meta={`Last updated ${site.legal.privacyUpdated}`}
    >
      <p>
        This policy covers the games and the website published by {site.legal.entity}. It explains
        what the apps collect, why, and who else can see it. Plain summary:{' '}
        <strong>we do not want your personal data and we collect as little as we can.</strong>
      </p>

      <h2>Policies for individual games</h2>
      <p>
        A game that ships advertising or in-app purchases collects more than this page describes, so
        it carries its own policy. Where the two disagree, the game's own policy is the one that
        governs that game.
      </p>
      <ul>
        <li>
          <Link to="/privacy/color-cargo">Color Cargo</Link> — ad-supported, with optional in-app
          purchases.
        </li>
      </ul>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Nothing you have to hand over to play.</strong> Our games do not require an
          account, an email address, or a sign-in to play single-player content.
        </li>
        <li>
          <strong>Diagnostics.</strong> If a game crashes, we may receive a report containing the
          device model, operating system version, the game version, and the technical state at the
          moment of the crash. These reports are not tied to your identity.
        </li>
        <li>
          <strong>Anonymous gameplay statistics.</strong> Aggregate counts — for example how far
          players get before quitting a level — so we can balance the game. These are counts, not
          profiles.
        </li>
        <li>
          <strong>What you send us.</strong> If you email support or fill in a form on this site, we
          hold your message and address for as long as it takes to deal with it.
        </li>
      </ul>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell personal data for money.</li>
        <li>We do not share data with data brokers.</li>
        <li>We do not ask for contacts, photos, or precise location.</li>
        <li>
          We do not run advertising in a game unless that game's own policy says so and its store
          listing declares it.
        </li>
      </ul>

      <h2>Services we rely on</h2>
      <p>
        Some parts of the games and this site are run by other companies, and they handle data under
        their own policies:
      </p>
      <ul>
        <li>
          <strong>Google Play services</strong> — distribution, updates, in-app purchases and, where
          a game uses them, achievements and leaderboards.
        </li>
        <li>
          <strong>Apple App Store</strong> — the same, on iOS.
        </li>
        <li>
          <strong>Crash and analytics providers</strong> — named in each game's store listing under
          Data safety.
        </li>
        <li>
          <strong>Advertising partners</strong> — only in games that show ads, and named in that
          game's own policy.
        </li>
      </ul>

      <h2>Children</h2>
      <p>
        Our games are not directed at children under 13. We do not knowingly collect personal data
        from them. If you believe a child has sent us personal data, write to{' '}
        <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a> and we will delete it.
      </p>

      <h2>Keeping and deleting data</h2>
      <p>
        Save data for our games lives on your device, and in your platform's own cloud backup if you
        have that switched on. Deleting the app removes the local copy. Diagnostics and aggregate
        statistics are kept no longer than 24 months. To ask what we hold about you, or to have it
        deleted, email <a href={`mailto:${site.contact.support}`}>{site.contact.support}</a> — we
        answer within 30 days.
      </p>

      <h2>Changes</h2>
      <p>
        When this policy changes, the date at the top changes with it. Substantive changes will also
        be noted in the release notes of the affected game.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy go to{' '}
        <a href={`mailto:${site.contact.general}`}>{site.contact.general}</a>.
      </p>
    </Article>
  )
}
