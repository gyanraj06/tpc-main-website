# Trippechalo website v2

Version 2 of company.trippechalo.in. The previous site is in this repo's git history at commit `22dc21a`.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + production build in dist/
```

Deploys the same way as the current site: `vercel.json` rewrites every path to `index.html`.

## Stack

- Vite, React 18, TypeScript, React Router
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling. It runs on GSAP's ticker so ScrollTrigger stays in sync (`src/lib/smooth-scroll.tsx`).
- GSAP ScrollTrigger for scroll-linked motion
- Plain CSS with design tokens in `src/styles/global.css`, plus one stylesheet next to each component
- Archivo (variable width) and Anek Devanagari, from Google Fonts
- EmailJS for the demo form and newsletter. It uses the same service, template and public key as the current site (`src/lib/email.ts`).

## Where things live

| Path | What |
| --- | --- |
| `src/sections/home/*` | Homepage sections in page order (see `src/pages/Home.tsx`) |
| `src/pages/Products.tsx` + `src/data/products.ts` | Product page. Copy lives in the data file. |
| `src/data/nav.ts` | Mega-menu items. Items with no `to` show a "Soon" tag. |
| `src/data/legal/*.json` | Legal copy, taken from the live site |
| `src/lib/links.ts` | External URLs (vendor portal, APK, socials, video) |

## Motion

- First visit in a session: a Devanagari preloader runs, then the hero enters.
- Hero: experience "tickets" travel along an arc. They drift on their own, speed up as you scroll, and can be dragged.
- Scroll-scrubbed text, a pinned four-pillars walkthrough, and parallax on images.
- With `prefers-reduced-motion`, Lenis, the preloader, scrubbing and auto-motion are all turned off.

## Assets

`npm run assets` regenerates the WebP images in `src/assets/img` from the previous site's original assets. To run it, check out commit `22dc21a` next to this repo as `../tpc-main-website`. The Unsplash photos the old site hot-linked are now stored locally (see `scripts/optimize-unsplash.mjs`).
