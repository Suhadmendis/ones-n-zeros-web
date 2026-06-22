# Build Plan — Ones and Zeros Website

Working breakdown of `INSTRUCTIONS.md` into build batches. Each batch is built and checked off in order before moving to the next. Source of truth for all copy/structure remains `INSTRUCTIONS.md`; this file just sequences the work.

## Brand assets (confirmed, in `assets/`)

- `assets/logo/1.png` — wordmark, dark charcoal on white (use on light backgrounds: nav)
- `assets/logo/2.png` — wordmark, white on charcoal (use on dark backgrounds: footer, dark sections)
- `assets/[UNCHECKED] ONZ Transport - Product Leaflet v1.png` — draft leaflet, used **only** as a color reference, not shown on the site

Palette sampled from the assets above (not invented):

| Token | Hex | Use |
|---|---|---|
| `--color-ink` | `#363B3B` | text, dark sections, footer bg |
| `--color-ink-soft` | `#6B7070` | secondary/muted text |
| `--color-bg` | `#FFFFFF` | page background |
| `--color-bg-subtle` | `#EBEBEB` | alternating section background |
| `--color-border` | `#DCDDDD` | hairlines, card borders |
| `--color-accent` | `#D62833` | primary buttons, links, highlights |
| `--color-accent-dark` | `#B81F29` | accent hover state |
| `--color-accent-tint` | `#FBE7E8` | icon-chip backgrounds |

Fonts: Inter (UI/body) + Instrument Serif (display accent only). Icons: Font Awesome 6.

Placeholders (must stay literal, never invented): `EMAIL_PLACEHOLDER`, `WHATSAPP_PLACEHOLDER`, `PHONE_PLACEHOLDER` (new, added for phone fields not covered by an existing token), `DEMO_URL`, `DEMO_USERNAME`, `DEMO_PASSWORD`, `BROCHURE_PDF_URL`, `SITE_URL_PLACEHOLDER` (new, used in canonical/OG/JSON-LD URLs since no real domain exists anywhere in the spec).

---

## Batch 1 — Design system foundation

- [x] `css/styles.css`: CSS custom properties (palette, type scale, spacing scale, breakpoints)
- [x] Reset/base typography (Inter + Instrument Serif loaded via Google Fonts)
- [x] Core components: `.btn` / `.btn-primary` / `.btn-secondary`, `.card`, `.section` / `.section--alt` / `.section--dark`, container/grid utilities, icon-chip pattern
- [x] Nav (`.site-header`, sticky) and footer (`.site-footer`) component shells

## Batch 2 — `index.html` (Home)

- [x] Nav + Hero ("Enterprise Software Built Around Your Business" + subhead + Book Consultation / Explore Our Solutions)
- [x] Trust section (6 items)
- [x] About Snapshot ("Technology That Solves Real Business Problems" + Learn More → about.html)
- [x] Services Overview (5 cards → services.html anchors)
- [x] Flagship Product Highlight (TMS, dark section, 3 buttons → tms.html / contact.html)
- [x] Security Section ("Your Data Stays Yours" + 6 features)
- [x] Final CTA (Schedule Consultation / Contact Us)
- [x] Footer (canonical version — copied verbatim into all other pages)
- [x] Full SEO `<head>` block (title/description/canonical/OG/JSON-LD)

## Batch 3 — `js/main.js`

- [x] Mobile nav toggle (open/close, aria-expanded, outside-click/Escape close, scroll lock)
- [x] Sticky header scroll-elevation toggle
- [x] Scroll-reveal via IntersectionObserver (+ `prefers-reduced-motion` bypass)
- [x] Smooth-scroll anchor offsets (`scroll-margin-top` for sticky header)
- [x] Consultation form handler (wired once `contact.html` exists in Batch 6)

## Batch 4 — `about.html`, `services.html`, `technologies.html`

- [x] about.html: Hero, Company Story, Mission, Vision, Why Choose Us (6 items)
- [x] services.html: Hero + 5 service detail blocks with anchor IDs
- [x] technologies.html: Hero (capability-focused, no programming languages) + 5 capability cards
- [x] SEO head blocks for each

## Batch 5 — `contact.html`

- [x] Hero ("Let's Build Something Great Together")
- [x] Contact Methods (Phone/Email/WhatsApp/Location)
- [x] Consultation Form (Name, Company, Email, Phone, Industry, Message) + success-state markup
- [x] Wire form handler in `js/main.js`
- [x] SEO head block

## Batch 6 — `tms.html` (flagship, customer-pitch tone)

- [x] Hero (3 buttons)
- [x] Business Problems (8 pain points)
- [x] Solution section
- [x] Features (10 cards)
- [x] Business Benefits (8 items)
- [x] Security section (5 features)
- [x] Live Demo panel (`DEMO_URL`/`DEMO_USERNAME`/`DEMO_PASSWORD`)
- [x] Product Brochure panel (`BROCHURE_PDF_URL`)
- [x] Contact CTA (Book Consultation / WhatsApp Us / Call Us)
- [x] SEO head block + Product/SoftwareApplication JSON-LD

## Batch 7 — Cross-page QA

- [x] Nav active-state correct per page
- [x] Footer byte-identical across all 6 pages
- [x] All placeholder tokens present, literal, nowhere invented
- [x] Every internal link/anchor resolves
- [x] Unique SEO per page verified

## Batch 8 — Verification

- [x] Serve locally, click every nav/footer/CTA link across all 6 pages
- [x] Check mobile (375px) / tablet (768px) / desktop (1280px) layouts
- [x] Check `prefers-reduced-motion` and keyboard focus states
- [x] Confirm logo renders correctly on light vs dark backgrounds

## Batch 9 — Hero/background imagery

- [x] `assets/images/hero-coding.jpg` — B&W photo (people coding on laptops), sourced from `cruip/open-react-template` (`public/images/hero-image-01.jpg`, GPL-3.0). Used with the explicit knowledge/approval of the site owner despite that repo's "don't redistribute the template" clause, since only one image asset is reused here, not the template itself.
- [x] `.hero--photo` modifier (homepage hero only): photo background + dark/accent gradient overlay, text swapped to existing `--color-on-dark` tokens
- [x] Subtle CSS-generated dot-grid pattern added to base `.hero` (light, covers tms.html), `.page-hero` (light, covers about/services/technologies/contact), and `.section--dark` (dark variant, covers the homepage flagship banner) — no further photos needed, zero additional licensing exposure
