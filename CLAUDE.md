# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at http://localhost:3000 (polling mode, host exposed)
pnpm build        # Production build → dist/
pnpm preview      # Serve the production build locally
pnpm lint         # Run ESLint across all .js/.jsx files
pnpm deploy       # Build + publish to GitHub Pages via gh-pages
```

## Architecture

This is a **single-page portfolio** (React 19 + Vite 6) with no routing beyond `/`. The entire site renders from `src/Pages/MainPage.jsx`, which orchestrates all sections in a fixed vertical order:

1. **LoadingScreen** — 1.8 s timed overlay, slides out with Framer Motion; unmounts itself after exit animation.
2. **NavBar** — Sticky top nav.
3. **HeroSection** — Full-viewport hero with typewriter subtitle, Framer Motion stagger reveal, GSAP parallax orbs, and Lenis smooth scroll initialized here (RAF loop tied to ScrollTrigger).
4. **ProjectsSection** — Project showcase cards.
5. **AboutSection** — Value-proposition copy.
6. **SkillsSection** — Tech stack grid.
7. **ContactSection** — Primary conversion point: clickable contact cards (WhatsApp / phone / email) + a contact form that POSTs to `/api/contact` (currently a stub — needs a real backend or Formspree/EmailJS integration).
8. **Footer** + **FloatingCTA** — Persistent floating WhatsApp/contact button.

**Section IDs** used for scroll-to navigation: `#hero`, `#projects`, `#contact`.

`isMobile` (breakpoint ≤ 1020 px) is computed once in `MainPage` via `react-responsive` and passed down as a prop to sections that need it.

## Styling

- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `postcss.config.js` needed).
- Global CSS variables and body defaults live in `src/themes.css`; Tailwind is imported there with `@import "tailwindcss"`.
- Design tokens: background `#0A0A0F`, accent teal `#64FFDA`, accent purple `#BD34FE`. Most components use **inline styles** rather than Tailwind classes for fine-grained control.
- Custom font family `Agrandir` is registered in `tailwind.config.js`; font files are in `public/fonts/`. Section headings use `'Syne'` and body copy uses `'DM Sans'` (loaded via Google Fonts or CDN, not bundled).

## Animation stack

| Library | Usage |
|---|---|
| **Framer Motion** | Entrance animations (`whileInView`, stagger variants), `AnimatePresence` for mount/unmount transitions |
| **GSAP + ScrollTrigger** | Parallax effects on hero orbs, scroll-scrub animations |
| **Lenis** (`@studio-freight/lenis`) | Smooth scroll, initialized in `HeroSection` and ticked inside a `requestAnimationFrame` loop alongside `ScrollTrigger.update()` |

## Analytics

GA4 events are fired via `window.gtag(...)` directly (no wrapper). Calls are guarded with `if (window.gtag)` checks. The GA4 script is loaded in `index.html`.

## Contact form

`ContactSection` posts to `/api/contact`. There is no backend — the component currently treats any non-200 response as a demo success. To wire up a real endpoint, replace the `API_ENDPOINT` constant and remove the fallback `console.warn` block.

## Deployment

Deployed to GitHub Pages. `vite.config.js` sets `base: '/'`. Run `pnpm deploy` to publish.
