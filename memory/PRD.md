# TrustBridge Counsel — Product Requirements Document

## Original Problem Statement
Premium, emotionally intelligent, luxury-minimalist landing page for **TrustBridge Counsel** — a consultancy practice for conflict resolution, communication strategy, relationship clarity, executive alignment, and emotional de-escalation.

The brand voice: "Luxury advisory meets emotional intelligence." Calm, deeply trustworthy, psychologically safe, elegant, mature, premium, editorial. Avoid SaaS / startup aesthetics, bright gradients, stock corporate imagery.

## User Choices (from kickoff)
- Multi-page routing: Home, About Us, Services, Blogs (placeholder pages OK).
- "Book Consultation" link in navbar scrolls to a contact section at the end of the Home page.
- Hero right-side abstract visual: designer's choice (CSS/SVG abstract).
- Static frontend for now. Client details will eventually be stored in a Google Sheet — link to be provided later by user.

## User Personas
- **Couples / Individuals** seeking structured, neutral help with relationship conflict.
- **Founders & Co-founders** in partnership tension or alignment crises.
- **Boardrooms / Executives** needing communication strategy and de-escalation.
- **Family / Inheritance** disputes seeking dignified resolution paths.

## Core Requirements (static)
- Warm luxury color palette: Deep Espresso `#3B2A24`, Warm Walnut `#5A4034`, Soft Mocha `#8B6B5C`, Sand Beige `#D8C3B0`, Warm Ivory `#F7F2EE`, Muted Gold `#B08D57`.
- Typography: Cormorant Garamond (editorial serif) for headings + Manrope for body.
- Floating glassmorphism navbar with brand "TrustBridge Counsel" + tagline "We listen · We act · We deliver".
- Cinematic hero with oversized editorial headline + abstract SVG visual + 4 trust badges + primary gold CTA.
- "Why TrustBridge Counsel?" section with 3 feature cards (Pattern Awareness, Conflict De-escalation, Conscious Decision-Making).
- Center editorial quote on dark espresso background.
- 6-card Trust Value Grid.
- Contact / consultation request section (id=`contact`) with name / email / phone / subject / message — currently mocked client-side.
- Cinematic deep-espresso footer.

## Implemented (v1 — Dec 2025)
- React + react-router site with routes: `/`, `/about`, `/services`, `/blogs`.
- Components: `Navbar`, `Footer`, `HeroVisual` (SVG abstract), `ScrollToTop`, `PageShell`.
- Sections: `HeroSection`, `WhySection`, `CenterQuote`, `TrustValueGrid`, `ContactSection`.
- Tailwind theme tokens: `espresso`, `walnut`, `mocha`, `sand`, `ivory`, `gold`, `ink`, `cream`.
- Custom animations: `fade-up`, `fade-in`, `drift-slow`, `drift-reverse`.
- Sonner toast confirmation on contact form (success + error states).
- All 14 listed feature checks verified by testing agent — 100% pass.

## Backlog
- **P0** — Wire ContactSection submit to Google Sheets endpoint once user provides the URL/Apps-Script webhook.
- **P0** — Replace About / Services / Blogs `PageShell` placeholders with full editorial content (user will provide).
- **P1** — Add micro-illustrations / SVG plates for the Services page.
- **P1** — Add a small testimonials / case-pattern strip (anonymised) for Home, between TrustValueGrid and ContactSection.
- **P1** — Blog index + MDX article template with reading flow.
- **P2** — Booking calendar embed (Cal.com / Calendly) inside the contact section as an alternative to the form.
- **P2** — SEO: per-route meta tags, OG image, structured data.

## Mocked / Pending
- **MOCKED**: Contact form submit is fully client-side (toast only, no persistence). Pending Google Sheets endpoint from user.
