# 2. `<Reveal>` instead of Framer Motion on purely static pages

Date: 2026-09-17

## Status

Accepted

## Context

`about`, `certifications`, `web-projects`, and the `data-science` index page had zero real interactivity (no state, no event handlers beyond plain links) but were marked `'use client'` and imported `framer-motion` solely to fade elements in on scroll. Each page also hand-copied its own `fadeUp`/`fadeIn` variant objects, and the copies had already drifted (`y: 24` vs `y: 28` vs `y: 20`) — the same kind of duplication that caused the bugs in ADR 0001, applied to animation config instead of content.

## Decision

Added `src/components/Reveal.tsx`, a small client component using `IntersectionObserver` + a CSS transition (`.reveal` / `.reveal-visible` in `globals.css`) instead of Framer Motion. The four pages above dropped `'use client'` entirely and are Server Components now, importing `<Reveal>` as a leaf client component where they need the fade-in.

Pages with genuine interactivity — the contact form, the dashboards tab switcher, the ivolution screenshot lightbox (`AnimatePresence`) — keep Framer Motion and `'use client'`. That's not an inconsistency to "fix"; it's the actual dividing line this ADR draws.

`Reveal` also has a scroll-event fallback (not just the `IntersectionObserver` alone): a synthetic fast scroll during testing was able to move an element from below the viewport to above it between two observed frames without the observer ever firing, leaving it stuck at `opacity: 0` permanently. The fallback checks `getBoundingClientRect()` on scroll and reveals anything already passed. It also respects `prefers-reduced-motion` (the Framer Motion version didn't).

## Consequences

- `First Load JS` dropped meaningfully on the four converted routes (e.g. `/about` and `/certifications` went from needing the Framer Motion runtime to not needing it at all) — visible in `next build`'s route size table.
- If a future page needs real scroll-triggered choreography (staggering, spring physics, gesture-driven animation), that's a legitimate reason to reach for Framer Motion again — `Reveal` is intentionally a one-trick fade-up, not a replacement for Framer Motion everywhere.
- Don't add `fadeUp`/`fadeIn` variant objects to new static pages — use `<Reveal delay={...}>` instead.
