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

- [ ] `css/styles.css`: CSS custom properties (palette, type scale, spacing scale, breakpoints)
- [ ] Reset/base typography (Inter + Instrument Serif loaded via Google Fonts)
- [ ] Core components: `.btn` / `.btn-primary` / `.btn-secondary`, `.card`, `.section` / `.section--alt` / `.section--dark`, container/grid utilities, icon-chip pattern
- [ ] Nav (`.site-header`, sticky) and footer (`.site-footer`) component shells

## Batch 2 — `index.html` (Home)

- [ ] Nav + Hero ("Enterprise Software Built Around Your Business" + subhead + Book Consultation / Explore Our Solutions)
- [ ] Trust section (6 items)
- [ ] About Snapshot ("Technology That Solves Real Business Problems" + Learn More → about.html)
- [ ] Services Overview (5 cards → services.html anchors)
- [ ] Flagship Product Highlight (TMS, dark section, 3 buttons → tms.html / contact.html)
- [ ] Security Section ("Your Data Stays Yours" + 6 features)
- [ ] Final CTA (Schedule Consultation / Contact Us)
- [ ] Footer (canonical version — copied verbatim into all other pages)
- [ ] Full SEO `<head>` block (title/description/canonical/OG/JSON-LD)

## Batch 3 — `js/main.js`

- [ ] Mobile nav toggle (open/close, aria-expanded, outside-click/Escape close, scroll lock)
- [ ] Sticky header scroll-elevation toggle
- [ ] Scroll-reveal via IntersectionObserver (+ `prefers-reduced-motion` bypass)
- [ ] Smooth-scroll anchor offsets (`scroll-margin-top` for sticky header)
- [ ] Consultation form handler (wired once `contact.html` exists in Batch 6)

## Batch 4 — `about.html`, `services.html`, `technologies.html`

- [ ] about.html: Hero, Company Story, Mission, Vision, Why Choose Us (6 items)
- [ ] services.html: Hero + 5 service detail blocks with anchor IDs
- [ ] technologies.html: Hero (capability-focused, no programming languages) + 5 capability cards
- [ ] SEO head blocks for each

## Batch 5 — `contact.html`

- [ ] Hero ("Let's Build Something Great Together")
- [ ] Contact Methods (Phone/Email/WhatsApp/Location)
- [ ] Consultation Form (Name, Company, Email, Phone, Industry, Message) + success-state markup
- [ ] Wire form handler in `js/main.js`
- [ ] SEO head block

## Batch 6 — `tms.html` (flagship, customer-pitch tone)

- [ ] Hero (3 buttons)
- [ ] Business Problems (8 pain points)
- [ ] Solution section
- [ ] Features (10 cards)
- [ ] Business Benefits (8 items)
- [ ] Security section (5 features)
- [ ] Live Demo panel (`DEMO_URL`/`DEMO_USERNAME`/`DEMO_PASSWORD`)
- [ ] Product Brochure panel (`BROCHURE_PDF_URL`)
- [ ] Contact CTA (Book Consultation / WhatsApp Us / Call Us)
- [ ] SEO head block + Product/SoftwareApplication JSON-LD

## Batch 7 — Cross-page QA

- [ ] Nav active-state correct per page
- [ ] Footer byte-identical across all 6 pages
- [ ] All placeholder tokens present, literal, nowhere invented
- [ ] Every internal link/anchor resolves
- [ ] Unique SEO per page verified

## Batch 8 — Verification

- [ ] Serve locally, click every nav/footer/CTA link across all 6 pages
- [ ] Check mobile (375px) / tablet (768px) / desktop (1280px) layouts
- [ ] Check `prefers-reduced-motion` and keyboard focus states
- [ ] Confirm logo renders correctly on light vs dark backgrounds
