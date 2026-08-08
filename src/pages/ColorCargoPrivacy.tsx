/*
 * Privacy policy for Color Cargo — the URL submitted to Google Play Console.
 *
 * Two rules govern edits to this file:
 *
 *   1. It has to describe what the shipped build actually does. Play rejects a
 *      policy that disagrees with the Data safety form, and a policy that
 *      promises a feature the game does not have is worse than no policy.
 *   2. Section 11 (children) must match the target-audience and COPPA answers
 *      in Play Console and the LevelPlay dashboard. It currently says the Game
 *      is NOT directed to children under 13.
 *
 * Facts this document is built on. If any of them stops being true, the policy
 * is wrong and has to be rewritten before the next release:
 *
 *   — Android only, distributed through Google Play. No iOS build, so no Apple
 *     App Store and no Apple Inc. as a data recipient.
 *   — No server of ours, anywhere. Nothing the Game holds is transmitted to us,
 *     which is why section 12 cannot promise to delete data on request — there
 *     is none to delete. Purchases are validated and restored by Google Play
 *     Billing on the device, not by a backend of ours.
 *   — No account and no sign-in. Google Play Games Services is not integrated.
 *   — Third-party SDKs: Google Play Billing, Unity LevelPlay (ironSource),
 *     Unity Ads, Unity Gaming Services. Adding one means editing section 4.
 *
 * The #data-deletion heading below is the anchor given to Play Console in the
 * data deletion URL field. Do not rename it.
 *
 * Version pinning: the closing line names the build this policy was written
 * against. Bump it whenever the Game's third-party software or data handling
 * changes.
 */

import { ActionLink } from '../components/Action'
import { site } from '../data/site'
import { Article } from './Article'

const PRIVACY_MAILTO = `mailto:${site.contact.privacy}?subject=Color%20Cargo%20%E2%80%94%20data%20request`

export function ColorCargoPrivacy() {
  return (
    <Article
      eyebrow="Legal — Color Cargo"
      title="Privacy policy"
      meta={`Effective ${site.legal.colorCargoUpdated} — last updated ${site.legal.colorCargoUpdated}`}
      actions={
        <>
          <ActionLink href={PRIVACY_MAILTO} variant="solid" arrow>
            Email us about your data
          </ActionLink>
          <ActionLink href="/privacy">Studio-wide policy</ActionLink>
        </>
      }
    >
      <h2>1. Who we are</h2>
      <p>
        Color Cargo ("the Game", "we", "us") is a mobile puzzle game published by {site.legal.entity}{' '}
        for Android through Google Play, under the package name{' '}
        <strong>com.abyssproductions.colorcargo</strong>. This policy explains what information the
        Game handles, why, and what choices you have. It applies only to the Game — not to any other
        product, and not to any third-party service you reach from it, each of which has its own
        policy.
      </p>
      <p>
        Questions or requests: <a href={PRIVACY_MAILTO}>{site.contact.privacy}</a>.
      </p>

      <h2>2. The short version</h2>
      <ul>
        <li>
          There is no account and no sign-in. We do not ask for your name, email address, phone
          number, or any similar personal detail.
        </li>
        <li>
          <strong>We operate no server.</strong> Your progress stays on your device and is never
          transmitted to us.
        </li>
        <li>
          The Game shows advertising and sells optional in-app purchases. Both involve third parties
          that receive limited technical information — see <a href="#third-parties">section 4</a>.
        </li>
        <li>
          We do not collect payment card details. Purchases are handled entirely by Google Play.
        </li>
        <li>
          You can remove everything the Game holds by uninstalling it — see{' '}
          <a href="#data-deletion">section 12</a>.
        </li>
      </ul>

      <h2>3. Information stored only on your device</h2>
      <p>
        The following is written to your device's local app storage. It is not transmitted to us, and
        we have no ability to read it:
      </p>
      <ul>
        <li>Your coin balance, and whether you have purchased ad removal</li>
        <li>Level progress and which abilities you have unlocked</li>
        <li>Remaining hearts and the time at which they next refill</li>
        <li>Sound, music and vibration preferences</li>
        <li>The timestamp controlling when the free-coins reward becomes available again</li>
      </ul>
      <p>
        Uninstalling the Game removes this data. Because it is local, it does not transfer to a new
        device unless Android's own backup feature restores it — which is controlled by your device
        settings and your Google account, not by us.
      </p>

      <h2 id="third-parties">4. Information collected by third parties</h2>
      <p>
        The Game includes software from the companies below. They may collect limited technical
        information from your device when you play. We do not receive it in a form that identifies
        you.
      </p>
      <ul>
        <li>
          <strong>Google Play Billing</strong> — processing in-app purchases. Purchase and
          transaction records are held by Google.
        </li>
        <li>
          <strong>Unity LevelPlay (ironSource) and Unity Ads</strong> — showing and measuring
          advertising. Advertising ID, device and network details, ad interaction and performance
          data.
        </li>
        <li>
          <strong>Unity Gaming Services</strong> — running the Game and supporting in-app purchases.
          Device and diagnostic information.
        </li>
      </ul>
      <p>
        <strong>Advertising ID.</strong> The Game's advertising partners collect your device's
        Advertising ID, a resettable identifier provided by Android. It is used to select and measure
        advertisements, to limit how often the same advertisement is shown, and to detect ad fraud. We
        do not combine it with any other information about you.
      </p>
      <p>
        <strong>IP address and approximate location.</strong> Delivering an advertisement requires a
        network connection, so our advertising partners receive your IP address and may derive an
        approximate location from it at country or region level. This is not precise location, and the
        Game holds no location permission of any kind — see{' '}
        <a href="#not-collected">section 5</a>.
      </p>
      <p>
        <strong>Device, app and diagnostic information.</strong> Device model, manufacturer, operating
        system version, language, screen size and available memory, together with the Game's version
        and session events, are used for compatibility, ad formatting, and identifying and fixing
        faults.
      </p>
      <p>
        These partners act as independent controllers of the information they collect, under their own
        policies:{' '}
        <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noreferrer noopener">
          Unity Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://developers.is.com/ironsource-mobile/air/privacy-policy/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Unity LevelPlay / ironSource Privacy Policy
        </a>
        . Beyond the companies named above, we share information with nobody — no data brokers, and no
        third party for their own marketing. We would disclose information where we are legally
        required to, or to protect our rights or safety, and if {site.legal.entity} were acquired or
        merged this policy would carry over to the successor.
      </p>

      <h2 id="not-collected">5. What the Game does not collect</h2>
      <p>The Game requests no permission to access, and does not collect, any of the following:</p>
      <ul>
        <li>Your precise location — the Game holds no location permission of any kind</li>
        <li>Your contacts, calendar, photos, videos, audio files or documents</li>
        <li>Your camera or microphone</li>
        <li>Your name, email address, phone number or postal address</li>
        <li>
          Any payment card or bank detail — see <a href="#purchases">section 6</a>
        </li>
      </ul>

      <h2 id="purchases">6. Purchases</h2>
      <p>
        In-app purchases — coin packs and an ad-free upgrade — are handled entirely by Google Play. You
        enter your payment details with Google, never with us, and we never see or store your card
        number or any other payment credential. The Game learns only that a purchase completed
        successfully, so that it can deliver what you bought. Because we operate no server, no record
        of your purchases is transmitted to us, and restoring a purchase is done by Google Play
        Billing on your device rather than by us.
      </p>
      <p>
        Refunds are governed by Google Play's refund policy and the terms you accepted with Google.
      </p>

      <h2>7. Advertising and your choices</h2>
      <p>
        The Game is free and supported by advertising. It shows <strong>interstitial ads</strong>{' '}
        between levels, and <strong>rewarded ads</strong> — optional videos you choose to watch in
        exchange for coins, hearts, ability charges, or continuing after a failed level. A rewarded ad
        is never shown without you tapping a button first.
      </p>
      <p>
        Purchasing ad removal, or any coin pack that includes it, stops the advertisements shown
        between levels. Optional rewarded videos remain available if you choose to watch one.
      </p>
      <p>You can limit advertising tracking at any time from your device, without uninstalling:</p>
      <ul>
        <li>
          <strong>Reset your Advertising ID</strong> — Settings › Google › All services › Ads
        </li>
        <li>
          <strong>Delete your Advertising ID, or opt out of personalised advertising</strong> — the
          same screen
        </li>
      </ul>
      <p>
        Opting out does not remove advertising. It means the advertisements you see are less relevant
        to you.
      </p>

      <h2>8. How this information is used</h2>
      <p>We and the partners named in section 4 use the information described above to:</p>
      <ul>
        <li>operate the Game and keep your progress on your device;</li>
        <li>deliver, format, cap, and measure advertising;</li>
        <li>deliver in-app purchases;</li>
        <li>identify and fix faults, and improve stability and performance;</li>
        <li>detect and prevent fraud, abuse, and invalid ad activity;</li>
        <li>comply with legal obligations.</li>
      </ul>
      <p>We do not sell your personal information for money.</p>

      <h2>9. Legal bases (EEA, UK and Switzerland)</h2>
      <p>Where the GDPR or UK GDPR applies, we rely on:</p>
      <ul>
        <li>
          <strong>Consent</strong> — for personalised advertising. You may withdraw it at any time
          using the device settings in section 7.
        </li>
        <li>
          <strong>Contract</strong> — to deliver the Game and any purchases you make.
        </li>
        <li>
          <strong>Legitimate interests</strong> — for security, fraud prevention, non-personalised
          advertising measurement, and improving the Game.
        </li>
      </ul>

      <h2>10. International transfers and retention</h2>
      <p>
        The third parties named in section 4 operate internationally and may process information in
        countries other than your own, including the United States, under their own safeguards and
        privacy policies. Where required, transfers out of the EEA or UK rely on appropriate
        safeguards such as the European Commission's Standard Contractual Clauses.
      </p>
      <p>
        Information stored on your device is retained until you uninstall the Game or clear its data.
        We hold nothing ourselves, so we retain nothing. Retention of information held by our
        advertising and payment partners is governed by those partners.
      </p>

      <h2>11. Children</h2>
      <p>
        The Game is intended for players aged 13 and over, and is not directed at children under 13 —
        or under 16 in the EEA and UK. We do not knowingly collect information from children. If you
        believe a child has provided information to us, contact us at{' '}
        <a href={PRIVACY_MAILTO}>{site.contact.privacy}</a> and we will act on it.
      </p>

      <h2 id="data-deletion">12. Deleting your data</h2>
      <p>
        The Game has no account, and we operate no server, so everything the Game holds about you is
        on your own device and under your control.
      </p>
      <ul>
        <li>
          <strong>Uninstall the Game, or clear its data</strong> from Android's app settings. Either
          one erases all locally stored progress, coins, hearts, abilities, and settings. This is
          permanent and cannot be undone, and it does not refund purchases.
        </li>
        <li>
          <strong>Reset or delete your Advertising ID</strong> using the device settings in section 7.
          Uninstalling the Game does not remove data already held by advertising partners — that has
          to be done through the device controls and the partners' own policies.
        </li>
        <li>
          <strong>Ask us.</strong> Email <a href={PRIVACY_MAILTO}>{site.contact.privacy}</a> with the
          subject "Color Cargo — data deletion request". We will confirm what is held and help you
          reach the right partner where the information sits with them rather than with us. We
          acknowledge requests within 7 days and complete what is within our power within 30 days.
        </li>
      </ul>
      <p>
        Purchase records held by Google are part of your Google account, not ours, and are managed
        through Google Play.
      </p>

      <h2>13. Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete or restrict the
        use of information about you, to data portability, to object to certain processing, and to
        withdraw consent. Because the Game holds no account and nothing identifying you reaches us,
        the practical routes are the three in <a href="#data-deletion">section 12</a>. Requests
        concerning information held by our advertising partners should also be directed to them, since
        they act as independent controllers of it.
      </p>
      <p>
        <strong>California residents (CCPA/CPRA).</strong> You may request disclosure of the
        categories of personal information collected and the categories of third parties it is shared
        with, request deletion, and opt out of "sharing" for cross-context behavioural advertising. We
        do not sell personal information for money. To opt out of personalised advertising, use the
        device controls in section 7. We will not discriminate against you for exercising your rights.
      </p>
      <p>
        You also have the right to complain to your local data protection authority.
      </p>

      <h2>14. Security</h2>
      <p>
        Information transmitted by the Game and the services it includes is sent over encrypted
        connections (HTTPS/TLS). No method of transmission or storage is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>15. Changes to this policy</h2>
      <p>
        We may update this policy as the Game changes. The effective date at the top will be revised,
        and material changes will be reflected in the version published at the policy address listed
        on our Google Play store listing. Continuing to play after an update means you accept the
        revised policy.
      </p>

      <h2>16. Contact</h2>
      <p>
        {site.legal.entity} — <a href={PRIVACY_MAILTO}>{site.contact.privacy}</a>.
      </p>
      <p>
        This policy describes the Color Cargo Android build with version name 1.0 (version code 1). It
        is reviewed whenever the Game's third-party software or data handling changes.
      </p>
    </Article>
  )
}
