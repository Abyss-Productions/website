/**
 * All site copy, links and contact details live here.
 * Edit this file to change the site — you should not need to touch the components.
 * Leave a link as an empty string ('') and the site hides the button that uses it.
 */

export const site = {
  name: "Abyss Productions",
  shortName: "Abyss Productions",
  role: "Mobile games studio",
  domain: "https://abyss.productions",
  description:
    "Abyss Productions is an independent studio making mobile games for Android and iOS.",

  hero: {
    eyebrow: "Independent studio — Android and iOS",
    // Rendered as two display lines.
    headline: ["Small games,", "crushing depth"],
    lead: "We build handheld games you can finish on a bus ride and still think about that night. First titles land on Google Play, then the App Store.",
  },

  studio: {
    heading: "The studio",
    // Each paragraph becomes its own block of text.
    paragraphs: [
      "Abyss Productions is a small independent team. We build every game in-house — design, art, code, sound — which keeps the loop between an idea and a playable build measured in days rather than quarters.",
      "We only ship mechanics we still want to play after a hundred runs. That rules out most of what mobile has settled for: no energy timers, no interruption ads, no pay-to-skip. If a game needs a wallet to stay fun, it is not finished.",
      "Everything starts on Android, where we can test in the open and iterate fast, then comes to iOS once the build holds up.",
    ],
    // Studio facts. Any row with an empty value is left out.
    facts: [
      { label: "Founded", value: "2026" },
      { label: "Team", value: "Independent" },
      { label: "Platforms", value: "Android, iOS" },
      { label: "Engine", value: "Unity" },
      { label: "Based", value: "" },
    ],
  },

  signals: {
    heading: "Signals",
    lead: "One message per release. No drip campaigns, no partner mail.",
    // Optional. Paste a form endpoint from Buttondown, Formspree, Mailchimp etc.
    // Leave empty and the form opens the visitor's mail app addressed to you instead.
    newsletterEndpoint: "",
  },

  contact: {
    general: "hello@abyssproductions.com",
    support: "support@abyssproductions.com",
    press: "press@abyssproductions.com",
    // Printed in the game privacy policies and handed to Google Play as the
    // data-deletion contact, so this address has to stay monitored.
    privacy: "ahmadghani44452@gmail.com",
  },

  // Storefronts. Fill these in as each listing goes live.
  stores: {
    googlePlay: "",
    appStore: "",
  },

  // Social links. Empty entries are hidden.
  social: [
    { label: "Discord", href: "" },
    { label: "YouTube", href: "" },
    { label: "X", href: "" },
    { label: "Instagram", href: "" },
  ],

  legal: {
    entity: "Abyss Productions",
    privacyUpdated: "5 August 2026",
    // Per-game policies carry their own date. Bump it whenever the policy for
    // that game changes — the store listing is checked against it.
    colorCargoUpdated: "8 August 2026",
  },
};

/**
 * The page is a descent. Each stratum is one section, tagged with the depth
 * shown on the gauge at the left edge as you scroll past it.
 */
export const strata = [
  { id: "surface", label: "Surface", depth: 0 },
  { id: "games", label: "The games", depth: 640 },
  { id: "studio", label: "The studio", depth: 2180 },
  { id: "signals", label: "Signals", depth: 4206 },
] as const;

export const MAX_DEPTH = strata[strata.length - 1].depth;
