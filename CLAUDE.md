# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for **Ones and Zeros**, a Sri Lanka-based enterprise software company. The site is a multi-page static website (vanilla HTML, CSS, JavaScript — no build toolchain or framework).

**The master specification lives in `INSTRUCTIONS.md`.** Read it before making any content, copy, or structural decisions. It defines every page, section, headline, CTA, and design constraint.

## Pages

The site has six pages, each as a separate HTML file:
- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services
- `technologies.html` — Technologies
- `tms.html` — Transport Management System (written as a customer pitch, not a technical page)
- `contact.html` — Contact

Shared assets live in `css/styles.css` and `js/main.js`.

## Running the Site

Open any `.html` file directly in a browser, or use a local server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

No build step, no dependencies to install.

## Design Constraints

- **Brand positioning:** Premium enterprise technology company. Reference style: Microsoft, Stripe, modern B2B SaaS. Avoid freelancer/portfolio/cheap startup aesthetics.
- **Fonts:** Inter (UI) + Instrument Serif (display/italic accents) from Google Fonts.
- **Icons:** Font Awesome 6.
- **Design must communicate:** Trust, enterprise readiness, innovation, technical excellence.
- **Visual language:** Clean, modern, professional, minimal, high-end.
- **Navigation:** Sticky, logo left, "Book Consultation" as primary CTA.
- **Performance:** Mobile-first, responsive, fast-loading, professional animations.

## Placeholders to Fill In

These values are intentionally left as placeholders and must not be invented:

| Placeholder | Location |
|---|---|
| `EMAIL_PLACEHOLDER` | Contact page, footer |
| `WHATSAPP_PLACEHOLDER` | Contact page, footer, TMS page |
| `DEMO_URL` / `DEMO_USERNAME` / `DEMO_PASSWORD` | TMS page live demo section |
| `BROCHURE_PDF_URL` | TMS page product brochure section |

## SEO Requirements

Every page must include: `<meta>` title and description, Open Graph tags, structured data (JSON-LD), and a canonical URL. Target keywords are Sri Lanka-focused (e.g., "Software Company Sri Lanka", "Transport Management System Sri Lanka").
