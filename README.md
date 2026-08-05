# Abyss Productions — website

Dark-mode marketing site for the studio and its mobile games. React + Vite, client-side only
(no server rendering).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, then bundle into dist/
npm run preview  # serve the built output
npm run lint
```

## Where to edit things

Nearly everything you will want to change is content, and content lives in two files. You should
not need to open a component to update the site.

| I want to change… | Edit |
| --- | --- |
| Headline, studio text, contact addresses, store links, social links | `src/data/site.ts` |
| The game list — titles, genres, blurbs, status, store links, key art | `src/data/games.ts` |
| Colours, fonts, spacing, type scale | `src/styles/tokens.css` |
| Privacy policy wording | `src/pages/Privacy.tsx` |
| Support page wording | `src/pages/Support.tsx` |
| Page title, description, social card tags | `index.html` |

Links in `site.ts` that are left as empty strings hide their own button, so you can fill in the
Google Play and App Store URLs as each listing goes live and nothing breaks in the meantime.

### Adding key art to a game card

Drop the image in `src/assets/games/`, then import it in `src/data/games.ts`:

```ts
import shardfallArt from '../assets/games/shardfall.png'
// …
{ id: 'shardfall', /* … */ art: shardfallArt }
```

Without `art`, the card renders a generated crystal facet instead, cropped differently per card.

### Mailing list

The sign-up form in the Signals section needs somewhere to post. Paste an endpoint from Buttondown,
Formspree, Mailchimp or similar into `site.signals.newsletterEndpoint` and the form appears. While
it is empty, the section shows a mail-us button instead of a form that silently does nothing.

## Design

The site is built as a descent. A depth gauge is fixed to the left edge and reads out how far down
the visitor has scrolled; on the front page each section is a stratum stamped with its own depth,
and the background fades from surface light to violet pressure as you go. Depths are set in `strata`
in `src/data/site.ts` — the gauge, the section headers and the footer all read from it.

The gauge lives in `App.tsx`, above the routes, so it tracks every page. Its labelled ticks are a
prop: the front page passes `strata`, and the text pages pass none, which leaves a bare rail with
the readout, fill and marker. Below 900px it collapses to a progress hairline across the top.

- **Colour** is sampled from the logo: teal crystal (`--shard`), indigo-violet depths, magenta
  arcs for live states, and one warm core (`--core`) used only behind the hero.
- **Type** is Anybody for display (its width axis is what gives the headings their pressed-outward
  look), Familjen Grotesk for body, Martian Mono for depth readouts and labels.
- Motion respects `prefers-reduced-motion`; the entrance sequence, motes and scroll reveals all
  stand down.

Two CSS notes worth keeping in mind:

- The ambient backdrop is a fixed layer at `z-index: 0`, so any new top-level content block needs to
  be positioned (`main` is, in `global.css`) or it will paint underneath it.
- The `.display`, `.utility` and `.lede` helpers in `global.css` are wrapped in `:where()` so they
  carry no specificity. They are defaults that component styles refine, and elements routinely carry
  both — `className={`utility ${styles.eyebrow}`}`. Without `:where()` the helper is a single-class
  selector in a stylesheet the bundler emits *after* every CSS Module, so it silently wins every
  property the two share. Keep new declarations in those blocks inside the `:where()`.

## Deploying

The build output in `dist/` is static. Because routing is client-side, the host has to serve
`index.html` for unknown paths or a hard refresh of `/privacy` will 404:

- **Netlify / Cloudflare Pages** — `public/_redirects` is already set up.
- **Vercel** — `vercel.json` is already set up.
- **GitHub Pages / plain nginx** — add your own rewrite to `index.html`.

Before going live, replace the placeholder domain `abyssproductions.com` in `index.html`
(`og:url`, `og:image`), `public/robots.txt` and `public/sitemap.xml`.

## Store listing checklist

Google Play requires a public privacy policy URL, and the App Store requires the same plus a
support contact. Those are `/privacy` and `/support`.

`src/pages/Privacy.tsx` is a **working draft, not legal advice** — it opens with a comment listing
what to check. It has to match what your games actually do and agree with your Play Console Data
safety form before you submit a build.
