# M | GÖREN — Rechtsanwaltskanzlei Meral Gören

Bilingual (DE/TR) website for the law office of Meral Gören in Mannheim,
implemented in Next.js from the Claude Design handoff
(`Kanzlei Goeren Landing.dc.html` + `Kanzlei Seite.dc.html`).

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, React 19, TypeScript) |
| Styling | CSS Modules + design tokens in `src/app/globals.css` |
| Palette | Off-white `#fafbfd` and cool grey |
| Fonts | `next/font/google` — Inter Tight (variable) |
| Forms | Route handler at `/api/lead`, SMTP delivery via nodemailer |
| Rendering | Fully static (26 prerendered pages) except the lead endpoint |

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

| Script | |
|---|---|
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm run typecheck` | `tsc --noEmit` |

## Routing and languages

German is the primary language and is served from the root; Turkish and English
live under `/tr` and `/en`. All three are rendered by the same page files under
`src/app/[lang]`, and `src/proxy.ts` maps public URLs onto that internal segment:

| Public URL (DE) | Turkish | English | Internal |
|---|---|---|---|
| `/` | `/tr` | `/en` | `/[lang]` |
| `/blog` | `/tr/blog` | `/en/blog` | `/[lang]/blog` |
| `/blog/<slug>` | `/tr/…` | `/en/…` | `/[lang]/blog/[slug]` |
| `/rechtsgebiete/<slug>` | `/tr/…` | `/en/…` | `/[lang]/rechtsgebiete/[slug]` |
| `/impressum`, `/datenschutz`, `/danke` | `/tr/…` | `/en/…` | `/[lang]/…` |

Adding a fourth language means adding its dictionary and one entry to `LANGS`
in `src/content/types.ts`; routing, the switch, `hreflang` and the sitemap all
derive from that list.

A direct request to `/de/...` is 308-redirected to the unprefixed URL, so every
page has exactly one canonical address. Slugs are intentionally shared across
languages so the DE/TR switch is a one-to-one mapping on every page —
`src/lib/routes.ts` is the only place that knows about URL shapes.

Canonical tags, `hreflang` alternates, Open Graph, `robots.txt`, `sitemap.xml`
and the `LegalService` JSON-LD are all generated from the same content source.

## Design system

The layout follows the structure of the fidacta.ai reference — full-bleed hero,
alternating light and dark bands, centred section openers, hairline cards on an
8px radius, scroll reveals — and the typography follows pitblado.com: a single
grotesque, large headlines set light, everything else carried by weight.

### Colour

Two grounds carry the page. Nothing is pure white; the faint blue cast in
`#fafbfd` is what keeps the light half from glaring.

| Token | | Used for |
|---|---|---|
| `--paper` | `#fafbfd` | page ground and light sections |
| `--paper-deep` | `#eff1f5` | accent band, cards, page heads |
| `--dark` | `#2f3236` | dark sections |
| `--dark-deep` | `#1e2124` | header and footer |
| `--ink` | `#1c1f22` | text on light |
| `--muted` | `#5f6570` | secondary text on light |
| `--accent` | `#041c2c` | secondary brand colour — button fills, header text |
| `--on-dark` / `--on-dark-muted` | `#fafbfd` / `#a2a8b2` | text on dark |

Every text/background pair passes WCAG AA at normal size — the tightest is
5.18:1, muted text on the deeper band. Nothing is hard-coded in a component, so
the whole site re-skins from that one block in `src/app/globals.css`.

### Type

Inter Tight throughout, with hierarchy carried by weight and size rather than a
second family: 400 for body and for the large `.display` / `.h2` headlines, 500
for card titles, links, buttons and the spaced-caps labels, 700 for the
wordmark. Display sizes carry negative tracking, which a grotesque needs above
about 24px.

The reference is set in **Suisse Int'l**, a licensed Swiss Typefaces family that
cannot be redistributed here. Inter Tight is the closest freely licensable
match — the same neo-grotesque skeleton at Suisse's compact widths — and it
ships `latin-ext`, so German umlauts and the Turkish ğ ş İ Ğ Ş all come from the
webfont. If the Kanzlei licenses Suisse, swap `src/app/fonts.ts` for a
`next/font/local` declaration exposing the same `--font-sans-raw` variable;
nothing else changes.

### Wordmark

`GÖREN` set heavy and tightly tracked with a small spaced-caps `RECHT` riding at
cap height — the same typographic device as the Pitblado mark, applied to this
Kanzlei's name. Their own logo is a bespoke, trademarked drawing and is not
reproduced. The mark lives in `src/components/Logo.tsx`; the old `M | GÖREN`
lock-up is gone, and `SITE.shortName` follows it so page titles stay consistent.

### Motion

Section content fades and rises as it scrolls into view via the `.reveal` class.
It is a CSS scroll-driven animation (`animation-timeline: view()`), so it needs
no JavaScript, honours `prefers-reduced-motion`, and degrades to static content
in browsers without view timelines rather than stranding anything at opacity 0.

## Landing-page header and hero

The hero fills the viewport (`100svh`, so mobile browser chrome cannot crop it)
and the header sits **on** it rather than above it: `SiteHeader` carries a
negative bottom margin equal to its own height, which pulls the hero up behind
the bar. It stays `position: sticky` — not `fixed` — so the mobile menu and the
anchor offsets still position against a real element in flow.

The bar is transparent while the page is at the top and fills in with the dark
grey once it scrolls away. A 1px probe element at the document origin drives
that through an `IntersectionObserver`, which is cheaper and smoother than a
scroll listener. It also goes solid whenever the mobile menu is open, so the
white panel reads as attached to something.

A soft top-down gradient sits behind the transparent bar, and the hero carries a
radial pool of shade behind its centred copy, so the type stays legible over
whatever photograph is behind it. The placeholder hero is bright; a properly
toned image can carry less — see `.scrim` in `Hero.module.css`.

Sub-pages use `PageHeader`, which stays solid and in flow: their page head is
light grey, so a transparent bar there would put white text on a pale
background.

## Contact form

The form posts JSON to `/api/lead`, which revalidates every field server-side —
including the consent checkbox, which is a legal requirement (Art. 6(1)(a)
GDPR) — and then sends a notification e-mail. On success the visitor is sent to
`/danke` (`/tr/danke`).

Configure delivery in `.env.local`: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
`SMTP_PASSWORD`, `LEAD_NOTIFY_TO`, `LEAD_NOTIFY_FROM`.

**Without that configuration** the route logs the lead and returns 200 in
development, but returns 503 in production so the visitor sees the error message
and the phone number instead of a confirmation nobody received.

## Before going live

- [ ] **Fill in every `[Platzhalter:` / `[Yer tutucu:` marker** in
      `src/content/de.ts` and `src/content/tr.ts` — e-mail address, chamber
      (Rechtsanwaltskammer), professional indemnity insurer, VAT ID, opening
      hours, the "Über mich" biography, and the blog article bodies. Impressum
      and Datenschutzerklärung must be reviewed by the Kanzlei before
      publication; the drafts here follow § 5 DDG and Art. 13 GDPR but are not
      legal advice.
- [ ] **Replace the placeholder photography.** `public/images/*.jpg` are Freepik
      stock placeholders carried over from the design (626px wide — too small
      for the hero at desktop). Swap in the Kanzlei's own photos and check the
      licence/attribution terms of anything that stays.
- [ ] **Set `NEXT_PUBLIC_SITE_URL`** to the production domain so canonical URLs,
      `hreflang` and the sitemap are correct.
- [ ] **Configure SMTP** (see above) and send a test enquiry end to end.
- [ ] **Add spam protection** to `/api/lead` — rate limiting per IP, plus a
      honeypot or Turnstile. A public lead form for a law office will be
      scraped. This was left out deliberately: the choice of provider is yours.
- [ ] **Wire up analytics behind the consent banner.** The banner already stores
      the decision (`mgoeren-consent-v1`); nothing currently reads it, so hook
      your statistics script to `getConsent()` in `src/lib/consent.ts` and load
      it only for `"all"`.
- [ ] **Add a favicon and an OG image** (`src/app/icon.png`, `opengraph-image.png`).

## Notes on the implementation

Deliberate departures from the prototype, all of them additive:

- **Language is a URL, not a client-side toggle.** The prototype kept the
  language in `localStorage`, which meant one URL served two languages —
  unshareable and invisible to search engines. Each language now has real URLs
  with `hreflang` alternates, matching the alternates the design itself declared.
- **Focus rings use `currentColor`.** The prototype hard-coded a dark ring, which
  is invisible against the dark header and hero.
- **Desktop/mobile switch is a CSS media query** rather than a JS `matchMedia`
  branch, so the header is correct on first paint and without JavaScript.
- **`/danke` is `noindex`** and excluded in `robots.txt`.
- **The visual design is a client-directed redesign** of the handoff prototype:
  fidacta.ai's structure, pitblado.com's typography, an off-white and grey
  palette. The content model, routing, i18n, form and SEO are unchanged from the
  original build. See *Design system* above.
- **TypeScript is pinned to 6.x.** TypeScript 7 works with Next 16, but
  `typescript-eslint` does not support it yet; unpin once it does.

