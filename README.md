# Template 14 — Roofer

Pixel-perfect clone of https://roofer.framer.website/

## Stack

- Next.js 16 (app router, `output: "export"`)
- React 19
- Tailwind v4 + custom design tokens in `src/app/globals.css`
- Fonts via `next/font/google`: Plus Jakarta Sans (headings) + Inter (body)

## Sections

1. **Header** — white nav, logo left, 6 links, amber CTA right
2. **Hero** — roof image + gradient overlay, H1 104px, two CTAs, 1550+ stat
3. **Why choose us** — H2 + 3 check bullets left, image right
4. **Services** — 6 cards 3-col grid with icons
5. **How it works** — collage + "25 Years" dark stat card + 3 numbered steps
6. **CTA** — dark background + large roof image
7. **Testimonials** — 3 Google review cards
8. **Blog** — 3 latest-news cards with category tag
9. **FAQ** — image left + accordion right (5 items)
10. **Footer** — dark, 4 columns, huge brand image below

## Design tokens (globals.css)

- `--color-accent: #E1A356` (amber CTA)
- `--color-bg-cream: #F4F4EB`
- `--color-bg-dark: #141414`
- `--color-heading: #34342B`
- `--color-body: #434338`
- `--font-heading: Plus Jakarta Sans`
- `--font-body: Inter`

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Research / audit artifacts

- `docs/research/PAGE_TOPOLOGY.md` — section-by-section map
- `docs/research/BEHAVIORS.md` — interaction + token reference
- `scripts/download-assets.mjs` — re-downloads all 30 assets from framerusercontent
