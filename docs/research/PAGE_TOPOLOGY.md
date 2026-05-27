# Roofer — Page Topology

Source: https://roofer.framer.website/?via=framerbite
Doc height: 7587px desktop / viewport 1440x774

## Sections (top to bottom)

| # | Name | Top | Height | Bg | Description |
|---|---|---|---|---|---|
| 0 | Header | 0 | 88 | white | Logo left, nav center (HOME/ABOUT/SERVICES/APPOINTMENT/CONTACT/BLOG), CTA "Book A Free Consultation" right (amber) |
| 1 | Hero | 88 | 859 | gradient stone+tan + overlay | H1 "Roofing Service in West London." 104px, paragraph 20px, 2 CTAs, "1550+ Satisfied Customers" stat |
| 2 | Content-1 (Why choose us) | 947 | 823 | `#F4F4EB` cream | Left: H2 "Reasons to choose our roofing services." + 3 bullet points (Affordable Prices / Expert Engineers / Quality Materials). Right: big image |
| 3 | Services | 1770 | 685 | `#F4F4EB` cream | H2 + intro top-left, "View All Services" link top-right. 6 service cards grid with icons (Free Inspection, Commercial Roofing, Roof Replacement, Solar Panels, Damage Repairs, Roof Renovation). 2 rows x 3 cols |
| 4 | How-it-works | 2455 | 979 | default (light) | Left: big "25 Years of Experience" stat card (dark/amber bg) + 3 images. Right: H2 "Taking care of the roof of your house." + description + 3 numbered steps (1. Solutions, 2. Commercial Services, 3. Supervision) |
| 5 | CTA | 3474 | 886 | dark `#141414` + full-bleed roof image | H2 white "Are you ready to get your roofing service?" + p + "Book A Free Consultation" amber btn |
| 6 | Testimonials | 4360 | 763 | white | H2 "See what our clients say" + intro. Google review cards (star rating + "Chieko Chute - Managing Director" etc.). Google logo (cDioZKgH) + 5 stars |
| 7 | Latest news (Blog) | 5083 | 825 | white | H2 centered "Our latest news" + intro centered. 3 blog cards: Finance/Budget/Management — each with image, category tag, title, date |
| 8 | FAQ | 5907 | 973 | white | H2 centered "Frequently asked questions." + intro. Left: image. Right: 5 accordion items |
| 9 | Footer | 6921 | 706 | dark `#141414` with huge roof image/logo | Tagline paragraph, "Our Services" column (Home/Window/Floor/Office Cleaning — leftover content), "Quick Links" (Home/About/Services/Appointment), contact info (tel/email/address). Large logo bottom |

## Interaction models

- **Header**: static, no sticky observed at desktop
- **Hero**: static image bg, simple fade-in on load (Framer default)
- **Accordion FAQ**: click-driven expand/collapse
- **Service cards**: hover state (card-level)
- **Button hovers**: slight shadow/opacity shift
- **No smooth-scroll library** (no `.lenis`, no `.locomotive-scroll`)

## Assets found

- 36 images (SVG icons + JPG/PNG photos) — all on framerusercontent.com
- Logo: `ErSu0lDVH73VmxPaHDdCKNhteA.svg` (139x50)
- Favicon: `B5YFEI3iTwqQ6uw1vFUPSVGoZo.png`
- Hero bg: `jtCsMyNN1Bz507p4JRtk26iOSA.png` (3876x2586)
- Content-1 img: `X35cosIbFTbHj0jVoH8ZChcxp1Y.jpg` (4096x2731)
- How-it-works 3 imgs: FZtkK4swt3f1cwHBUp9PKWoIw, YgaKaFYWYN4WRjhYhtOpYEgZSnk, F8yQnLxSgV6sGiAZYpzI5Ig8yk
- CTA bg: `tlFFcOfsDQeOVLdn0rGQStmqCsk.png` + `P7264pyjJIDEL91YOP40xlA3fro.png` (roof)
- Google logo + star SVG (testimonials)
- 3 blog cards: 9mSDjPF4BavLLgYkTAMXqvgvfc, eVWl1q9sWNQZc3f1xtIK1SvC9k, NYusHjAPpAzKKlQjM9k2lAe55mY
- FAQ chevron SVG: `sN3Hf3u5TclMEcjtJRndVIZPBA.svg`
- Footer: tlFFcOfsDQeOVLdn0rGQStmqCsk (reused) + huge brand logo 98yMav9J6nGw6CmCxbeLO1jLNOU.svg + qlhIPe0aJp0BkXxx2TdwRpUVo.png

## Breakpoints (from Framer media queries)

- Desktop: `min-width: 1440px`
- Large Desktop: `1200–1439.98px`
- Tablet: `810–1199.98px`
- Mobile: `max-width: 809.98px`

## Notes

- Footer "Our Services" list says "Home Cleaning / Window Cleaning / Floor Cleaning / Office Cleaning" — leftover content from source template. Keep verbatim (faithful clone).
- Similarly FAQ Q1 says "What cleaning services do you offer?" — keep.
- Blog posts titled about finance/budget/investing — keep as-is.
