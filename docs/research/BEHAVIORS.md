# Roofer — Behaviors Bible

## Global

- **No smooth scroll lib** (`.lenis` / `.locomotive-scroll` absent) — native scroll.
- **Body**: `background: #FFFFFF`, `color: #000`.
- Framer wraps content in responsive variants — breakpoints below.

## Breakpoints

```
@media (min-width: 1440px) { /* XL desktop */ }
@media (min-width: 1200px) and (max-width: 1439.98px) { /* desktop */ }
@media (min-width: 810px) and (max-width: 1199.98px) { /* tablet */ }
@media (max-width: 809.98px) { /* mobile/phone */ }
```

## Design tokens

### Colors
- `--color-bg`: `#FFFFFF`
- `--color-bg-cream`: `#F4F4EB` (rgb 244 244 235) — used for Content-1 / Services sections
- `--color-bg-dark`: `#141414` (rgb 20 20 20) — CTA / footer
- `--color-heading`: `#34342B` (rgb 52 52 43)
- `--color-body`: `#434338` (rgb 67 67 56)
- `--color-muted`: `#ADAD9F` (rgb 173 173 159)
- `--color-accent`: `#E1A356` (rgb 225 163 86) — primary CTA, highlights
- `--color-white`: `#FFFFFF`
- Hero gradient overlay: `linear-gradient(59deg, #939991 0%, #D6D4C7 100%)` (applied OVER hero image)

### Fonts
- Headings: **Plus Jakarta Sans**, weight 700
- Body: **Inter**, weight 400
- Load both via `next/font/google`.

### Typography scale
- H1 (hero): `104px` / `109.2` line-height / `-1px` letter-spacing / weight 700
- H2 (section): `64px` / `73.6` / `-0.5px` / 700 / color `#34342B`
- H3 (stat number like "25"): `80px` / `88` / `-2px` / 700 / white
- H4 (blog card title): `24px` / 700 / Plus Jakarta Sans
- Body-lg (hero/intro): `20px` / `34` Inter 400
- Body (section descriptions): `18px` / `30.6` Inter 400 / color `#434338`

### Layout
- Max content width: `1280px` (some sections extend to `1440px` for full-bleed images)
- Section vertical padding: `84–145px` top/bottom (varies)
- Button radius: `8px`
- Card radius: `8–15px`

## Buttons

**Primary (amber)**
- `background: #E1A356`
- `border-radius: 8px`
- `padding: 26px 30px` (hero) / `14px` (header compact)
- `box-shadow: 0 4px 0 rgba(0,0,0,0.15)` (inset-like lift)
- `color: #FFFFFF` (button label)
- Font weight 500+ inter or similar
- Hover: likely slight shift — observed `transition: all`

**Secondary (ghost)**
- Transparent bg, inherit text color, same padding/radius

## Header (top nav, 88px tall)

- White bg `#FFFFFF`
- Logo 138×50 left
- Nav items center: HOME / ABOUT / SERVICES / APPOINTMENT / CONTACT / BLOG (uppercase, 12px, tracking)
- CTA right: "Book A Free Consultation" (amber pill, padding 14px, 55px tall, rounded 8px)
- Not sticky (default static)

## Accordion (FAQ)

- 5 rows stacked vertically
- Chevron icon `sN3Hf3u5TclMEcjtJRndVIZPBA.svg` right-aligned (18×19)
- Click to expand; first item is open by default (shows answer text)
- Divider between rows (light gray border-bottom)

## Card hovers

- Service cards: inferred hover lift / bg change (Framer default)
- Blog cards: image zoom or opacity

## Responsive behavior summary

- Desktop (1440+): full multi-column layouts as described in topology
- Tablet (810-1199): columns likely collapse to 2
- Mobile (<810): stacks to single column, font sizes reduce (H1 from 104 → ~56px typical Framer)

## Interaction sweep verdict

- No scroll-driven reveal beyond Framer's default intersection-observer fade-in on load (keep simple CSS fade-in with animation on mount).
- No sticky elements confirmed.
- No tabs/pills cycling content.
- FAQ = click-to-expand accordion.
