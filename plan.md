# Harpreet Kaur Invitations — Portfolio Site

A single-page elegant luxury portfolio with sticky nav, anchor scrolling between sections, plus a dedicated `/portfolio-item/$id` placeholder pattern if needed later. Built on the existing TanStack Start + Tailwind v4 + shadcn stack.

## Design system (src/styles.css)
Update tokens to brand palette (converted to oklch):
- background: Ivory #FDFBF8
- foreground: Charcoal #2E2E2E
- primary: Champagne Gold #D4AF37
- secondary: Dusty Rose #D8A7B1
- accent: Sage Green #A8B5A2
- Soft shadows, larger radius (rounded-2xl), glassmorphism utility (backdrop-blur + ivory/60)

Fonts via `<link>` in `__root.tsx` head:
- Playfair Display (headings) → `--font-display`
- Poppins (body) → `--font-sans`

Add fade-in / float keyframes utilities for floral illustrations and scroll reveals (using Tailwind v4 `@theme` + intersection-observer hook).

## Routes
- `src/routes/index.tsx` — single landing page composed of section components, with anchor links (#about, #portfolio, etc.)
- Update `__root.tsx` head: fonts, site title "Harpreet Kaur Invitations — Custom Invitation Designer", meta description, og tags.

## Components (src/components/site/)
- `Navbar.tsx` — sticky transparent → ivory-on-scroll, smooth scroll to sections, mobile sheet menu
- `Hero.tsx` — full-height, background invitation mockup image (generated), floral SVG floaters, headline + sub + 2 CTAs
- `About.tsx` — portrait placeholder (generated), bio, specialty list with check icons
- `Portfolio.tsx` — category filter chips (All/Wedding/Housewarming/Digital/Custom), card grid with hover scale + image lightbox (shadcn Dialog), 7 sample projects with generated images
- `Services.tsx` — 4 glass cards with icons (Lucide)
- `WhyChooseMe.tsx` — 6-item icon grid
- `Stats.tsx` — animated counters using IntersectionObserver + requestAnimationFrame
- `Testimonials.tsx` — 3 cards, star ratings
- `Process.tsx` — vertical/horizontal timeline with 5 steps
- `Contact.tsx` — form (name, email, phone, event type select, message) with zod + react-hook-form validation; "submit" shows success toast (no backend wired — note in code). Contact info block + social icons.
- `Footer.tsx` — quick links, socials, copyright
- `FloatingWhatsApp.tsx` — fixed bottom-right button, `wa.me/64214875593`
- `BackToTop.tsx` — appears after scroll
- `FloralAccent.tsx` — reusable SVG floral decoration

## Image assets
Generate with imagegen (fast tier, jpg) and upload via lovable-assets:
1. Hero background — elegant wedding invitation flat-lay
2. Portrait placeholder for About
3. 7 portfolio mockups (wedding, traditional wedding, minimal wedding, housewarming, floral housewarming, digital/phone mockup, premium suite)

## Interactions
- Smooth scroll via CSS `scroll-behavior: smooth` on html
- Framer Motion (`motion` is not installed yet — install `motion` package) for fade/slide reveals, hero floaters, hover scale
- Lucide React for all icons (already available)
- Form validation with zod (already used in stack)

## SEO
- Per-page head meta + JSON-LD `LocalBusiness` schema in index route head
- Single H1 ("Beautiful Invitations Designed with Love"), semantic sections
- Alt text on every image, lazy loading
- Canonical `/` (relative)

## Packages to install
- `motion` (Framer Motion successor)
- `react-hook-form`, `@hookform/resolvers`, `zod` (verify; install any missing)

## Technical notes
- Stack is TanStack Start (not Next.js as brief suggests) — single-page sections with anchor nav fit the brief; user-facing experience matches.
- No backend submission for the form in v1; surfaces success toast. Can wire Lovable Cloud later if desired.
- All copy, palette, fonts exactly per brief.

## Out of scope (v1)
- Real backend for contact form (toast only)
- CMS for portfolio (hardcoded data file `src/data/portfolio.ts`)
- Blog / individual project detail pages
