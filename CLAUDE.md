# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Read CONSTRAINTS.md before writing code. Do not weaken it to make a change pass.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Run production server
npm run lint      # ESLint via Next.js
```

No test suite is configured.

## Environment

Create `.env.local` with:

```
RESEND_API_KEY=re_<token>
```

Required for the contact form (`/api/contact`) to send emails via Resend.

## Architecture

**Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, Resend (email), Vercel Analytics.

**Routing:** File-based under `src/app/`. Each folder is a route; `page.tsx` is the page component. The only nested route is `/data-science/ivolution` (a case study).

**Content model:** Most content (experience, certifications, tech stack) is hardcoded as TypeScript arrays/objects inside each `page.tsx`. Project data (data-science + web projects) lives in one shared source, `src/data/projects.ts` (typed `Project[]`), imported by `data-science/page.tsx` and `web-projects/page.tsx` — this is the only source of truth for project cards; don't reintroduce per-page copies of project data.

**API route:** `src/app/api/contact/route.ts` handles `POST /api/contact`. It includes IP-based rate limiting (5 req/IP/hour via a `Map`, IP taken from the last `x-forwarded-for` hop or `x-real-ip` — not the spoofable first hop), a hidden honeypot field, control-character stripping + HTML-escaping for injection prevention, and sends mail through Resend. The Resend client is instantiated inside the handler (not at module level) to avoid build-time errors.

**Shared components:** `src/components/` has `Header.tsx` (sticky nav + mobile menu, `'use client'`), `Footer.tsx`, `ProjectCard.tsx` (5 color accent variants, renders via `next/image`), `OpenToWorkBanner.tsx`, `ThemeProvider.tsx`, and `Reveal.tsx` (shared scroll-reveal — an `IntersectionObserver` + CSS transition wrapper used by purely-static pages instead of per-page Framer Motion boilerplate, so those pages can stay Server Components). Pages with real interactivity (contact form, dashboards tabs, the ivolution lightbox) still use Framer Motion / `'use client'` directly — that's legitimate, don't migrate those to `Reveal`.

**Styling:** Tailwind with a custom theme in `tailwind.config.ts` — primary blues (50–900) and secondary purple (`#5B4E8B`). Path alias `@/*` maps to `src/*`.

**Deployment:** Vercel. Base URL is `https://santiagomalak.is-a.dev`. SEO metadata, sitemap, and robots.txt are generated in `src/app/sitemap.ts` and `src/app/robots.ts`.
