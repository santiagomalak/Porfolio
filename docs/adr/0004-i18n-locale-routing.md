# 4. i18n with locale-segment routing, hand-written dictionaries and no i18n library

Date: 2026-10-22

## Status

Accepted

## Context

The site was Spanish-only, with all copy hardcoded in each `page.tsx`. Santiago is looking for remote roles, so recruiters reading English (and Portuguese, a language he works in) need a native version of every page. He asked for "automatic translation" into English, Portuguese and Spanish; we agreed that meant *automatic language selection*, not machine translation at runtime.

Options considered:

- **Runtime machine translation (Google Translate widget or similar).** Fastest to add, but it loads a third-party script (breaks the CSP from ADR 0003 or forces loosening it), translates technical terms badly ("dbt", "marts", "p25"), shifts layout after load, and search engines never index the translated versions. Rejected.
- **`next-intl` (or similar library).** Well supported, but its client provider adds JavaScript to every page, and `CONSTRAINTS.md` says shared First Load JS must not grow. For three languages and ~10 routes, what it gives over plain typed objects is little more than message formatting we barely need.
- **Locale segment + typed dictionaries, no library.** The pattern from the Next.js i18n guide. Chosen.

## Decision

- Routes live under `src/app/[lang]/`, statically generated for `es`, `en`, `pt` (`generateStaticParams`).
- **Spanish stays at the unprefixed URLs** (`/about`); English and Portuguese are prefixed (`/en/about`, `/pt/about`). This was Santiago's call: existing links and search results keep working unchanged. `src/middleware.ts` rewrites unprefixed paths to `/es/...` internally and 308-redirects `/es/...` to the unprefixed URL, so each Spanish page has exactly one public URL.
- **Automatic selection:** on an unprefixed URL, a visitor with no `NEXT_LOCALE` cookie whose `Accept-Language` prefers English or Portuguese gets a 307 to `/en` or `/pt`, and the cookie is set. The header's language switcher writes the cookie before navigating (with a plain `<a>`, not a prefetching `<Link>`), so an explicit choice always beats the browser setting. Requests without `Accept-Language` (most crawlers) get Spanish. Explicit `/en/...` and `/pt/...` URLs are never redirected.
- **Text** lives in `src/i18n/dictionaries/{es,en,pt}.ts`. `es.ts` defines the `Dictionary` type and the other two are typed against it, so a missing key fails `tsc` in CI. Translations are written by hand (drafted with AI assistance and reviewed), not generated at runtime. Project-card copy stays in `src/data/projects.ts` as per-locale fields, which keeps ADR 0001's single source of truth.
- **Dictionaries are read only in Server Components;** client components (`HomeView`, `ContactForm`, the case-study views, `Header`) receive the slice they need as props, so the browser never downloads the other languages.
- **SEO:** each page emits `canonical` + `hreflang` alternates (`es`, `en`, `pt`, `x-default` → Spanish), the sitemap lists every page in every language with alternates, and `<html lang>` matches the route.
- The contact API returns stable error *codes* that the form translates, and the email says which language the visitor used.

## Consequences

- Shared First Load JS unchanged (87.3 kB); the heaviest page went from 141 to 140 kB. All pages remain `● (SSG)`. Middleware adds ~27 kB on the edge (not shipped to browsers).
- **Next 14 quirks we had to work around**, worth knowing before touching routing:
  - `notFound()` thrown under the `[lang]` layout is not caught by `[lang]/not-found.tsx`; it escapes to an empty `__next_error__` shell. So there's a pass-through `app/layout.tsx` plus a top-level `app/not-found.tsx`, which renders the localized 404 using the language the middleware passes in the `x-site-locale` request header. Unknown page URLs get a fully server-rendered localized 404 with the normal header and footer.
  - `dynamicParams = false` in the `[lang]` layout isn't applied to the page below it in production builds, so the layout also calls `notFound()` for invalid languages. Single-segment URLs with a dot (`/missing.pdf`) skip the middleware and hit that path. They return a correct 404 status, but the HTML is the error shell, with the 404 rendered on the client. Acceptable for mistyped file URLs; revisit after the Next 16 upgrade.
  - The `next/og` image route (`/og/[lang]`) runs on the Edge runtime instead of being prerendered: `@vercel/og`'s Node build crashes on Windows in Next 14 (`fileURLToPath`), which broke local builds. Its responses are `immutable` for a year, so each language is rendered once per deployment.
- Middleware redirects send `Cache-Control: private, no-store` and `Vary: Accept-Language, Cookie`. That's correct for per-visitor responses, and it neutralizes GHSA-3g8h-86w9-wvmq on Next 14 (see E1 in `CONSTRAINTS.md`).
- Adding a page means: add the route under `app/[lang]/`, add its path to `routes` in `src/i18n/routing.ts` (sitemap), add its strings to all three dictionaries, and use `pageMetadata()` for metadata.
- Adding a language means: add it to `locales` in `src/i18n/config.ts`, add a dictionary typed as `Dictionary`, and add per-locale fields in `projects.ts`. TypeScript flags every place that's missing.
