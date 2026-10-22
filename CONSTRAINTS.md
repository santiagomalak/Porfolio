# Constraints

Last reviewed: 2026-10-22

This file is the project's quality bar. Read it before writing code. **Do not weaken it to make a change pass** — if a threshold is genuinely wrong, fix the number and say why in the same commit, don't just delete or loosen the check silently.

## Floor (always enforced, no setup required)

- No new suppression comments (`@ts-ignore`, `eslint-disable`) without a linked reason
- No unimplemented stubs (`throw new Error('not implemented')`, empty `catch {}`)
- No skipped or deleted tests without a reason in the commit message
- No secrets in source — `.env.local` stays untracked, never hardcode API keys
- `src/data/projects.ts` is the only source of truth for project-card data (data-science + web-projects) — don't reintroduce per-page copies (see git history 2026-09-17 for why this rule exists: a duplicated cover image and a "300+" vs "967 atletas" text drift both came from data existing in two places)
- No user-visible text hardcoded in components: every string lives in `src/i18n/dictionaries/{es,en,pt}.ts` (or, for project cards, as a per-locale field in `src/data/projects.ts`). `es.ts` defines the `Dictionary` type and the other two are typed against it, so a missing or extra translation key fails `tsc` — don't loosen that typing (no `Partial<Dictionary>`, no `as Dictionary` casts) to get a build through
- Dictionaries are imported only from Server Components; client components receive the slice they need as props (importing `get-dictionary` from a `'use client'` file would ship all three languages to the browser)
- This file does not get weakened to make a change pass

## Enforced with numbers

| Dimension | Rule | Checked by | Runs at | Blocking? |
|---|---|---|---|---|
| Types | Zero TypeScript errors | `tsc --noEmit` | every push/PR (CI) | **Yes** |
| Build | Production build succeeds | `next build` | every push/PR (CI) | **Yes** |
| Translations | Every locale has every key | `tsc --noEmit` (dictionaries typed against `es.ts`) | every push/PR (CI) | **Yes** |
| Dependency vulnerabilities | Nothing at high/critical outside a dated exception | `node scripts/audit-check.mjs` | every push/PR (CI) | **Yes** (since 2026-10-22) |
| Secrets | No findings | `gitleaks` | every push/PR (CI) | **Yes** (since 2026-10-22) |
| Performance | Lighthouse Performance ≥ 90, LCP ≤ 3500ms | `.lighthouserc.json` via Lighthouse CI | every push/PR (CI) | **Yes** (since 2026-10-22) |
| Accessibility | Lighthouse Accessibility ≥ 90 | `.lighthouserc.json` via Lighthouse CI | every push/PR (CI) | **Yes** (since 2026-10-22) |
| Layout shift | CLS ≤ 0.05 | `.lighthouserc.json` via Lighthouse CI | every push/PR (CI) | **Yes** (since 2026-10-22) |

Flipped from warn to blocking on 2026-10-22 (planned for 2026-10-02). The warn period never actually ran in CI — the commits that added it hadn't been pushed — so the flip was validated locally instead: `node scripts/audit-check.mjs` passes, and a local Lighthouse run on 7 routes (both languages' URL shapes) cleared every threshold (table below). Lighthouse runs 3 times per URL (raised from 1 on 2026-10-22 after the first CI run gave a false red) and asserts on the best run; if a run is still red, re-run the job before touching a threshold — don't lower the numbers. The CI sends `Accept-Language: es-AR` as an explicit header (`extraHeaders` in `.lighthouserc.json`): headless Chrome on the runner ignores `--lang`, so without it the middleware redirected every unprefixed URL to `/en/...` and the run measured the redirect hop instead of the page.

`npm audit --audit-level=high` was replaced by `scripts/audit-check.mjs` because the plain command can't express the dated exceptions below: it would be permanently red until the Next 16 migration. The script fails on anything not covered by an exception, and on everything an exception covered once that exception's date passes.

Every row names the command that produces the verdict. A dimension with a number and no command is an aspiration, not a constraint.

## Measured, not yet enforced

Re-measured 2026-10-22 after the i18n change, via `npx lighthouse@12.2.1` against a local production build (`next build && next start`), simulated mobile throttling, Chrome with `--lang=es-AR` so the unprefixed Spanish URLs aren't redirected. (Previous baseline, 2026-09-18, in parentheses.) Production on Vercel's CDN should generally do better than this; these numbers are the floor, not the target.

| Metric | Route | Today | Direction |
|---|---|---|---|
| Performance score | `/` | 95 (96) | must not fall below 90 |
| Performance score | `/en` | 95 | must not fall below 90 |
| Performance score | `/data-science/ivolution` | 94–96 (93) | must not fall below 90 |
| Performance score | `/dashboards` | 96–98 (97) | must not fall below 90 |
| Accessibility score | `/` | 95 (96) | must not fall below 90 |
| Accessibility score | `/data-science/ivolution` | 100 (100) | must not fall below 90 |
| Accessibility score | `/dashboards` | 95 (95) | must not fall below 90 |
| Accessibility score | `/pt/data-science` | 93 | must not fall below 90 |
| LCP | `/` | 2.8–3.0s (2.8s) | must not exceed 3.5s |
| LCP | `/data-science/ivolution` | 2.8–3.0s (3.2s) | must not exceed 3.5s |
| LCP | `/dashboards` | 2.4–2.8s (2.6s) | must not exceed 3.5s |
| CLS | all sampled routes | 0 – 0.001 | must not exceed 0.05 |
| First Load JS (shared) | all routes | 87.3 kB (87.3 kB) | must not grow |
| First Load JS | `/[lang]` (heaviest static page) | 140 kB (141 kB) | must not grow |

LCP fix of 2026-10-22: on every page the LCP element is the hero intro paragraph, and it used to start at `opacity: 0` under a Framer Motion entrance — invisible until React hydrated, which was 2.4–3.7s of "render delay". Above-the-fold entrances are now a CSS animation (`animate-fade-up` in `tailwind.config.ts`), and the `/dashboards` iframe (a whole external app) mounts only after the page's `load` event. Ranges above are 3 runs each via Lighthouse CI. Don't put a JS-driven `initial={{ opacity: 0 }}` on above-the-fold text again; `whileInView` below the fold is fine.

LCP sits above the textbook Core Web Vitals "good" threshold of 2500ms on most sampled routes — treat closing that gap as a real backlog item, not a solved problem. The 3500ms ceiling above is a ratchet (don't regress further), not a target.

Known accessibility debt (pre-existing, not from i18n): `/dashboards` inactive tab buttons are low-contrast, and `ProjectCard` uses `<h3>` directly under the page `<h1>` (heading-order). The dark-mode contrast of `text-secondary-500` headings was fixed on 2026-10-22 with a `dark:text-secondary-400` variant (#9d90d6), along with darker project-card badges; after that, a spot check gave a11y 100 on `/` and `/about` and 98 on `/pt/web-projects`. Use the `dark:` variant on any new `text-secondary-500` text.

## Known exceptions

| ID | Rule | Scope | Reason | Owner | Expires |
|---|---|---|---|---|---|
| E1 | Dependency vulnerabilities | `next`, bundled `postcss` (1 critical, 1 high per `npm audit`) | Fix requires `next@16.3.5`, a major-version jump from 14.2.35 with real App Router breaking-change risk. Needs a dedicated, tested migration — not a drive-by dependency bump. Encoded in `scripts/audit-check.mjs`. Since 2026-10-22 the site runs middleware (i18n), which makes GHSA-3g8h-86w9-wvmq (cached middleware redirects can be poisoned) relevant: mitigated by sending every middleware redirect with `Cache-Control: private, no-store` — the attack requires the 3xx to be cached. | Santiago | 2026-12-01 |
| E2 | `style-src`/`script-src` CSP | site-wide (`next.config.js`) | `'unsafe-inline'` kept for both — see the rationale written inline in `next.config.js`. Removing it needs per-request CSP nonces, which forces every route to dynamic rendering (loses static generation). Not worth the trade for a site with no auth/user data. | Santiago | — (revisit only if the site ever needs dynamic rendering for another reason) |
| E3 | Dependency vulnerabilities | `tailwindcss@3` and its build-time deps (`braces`, `chokidar`, `micromatch`, `fast-glob`, `postcss-nested`, `postcss-selector-parser`) | DoS-class advisories in the CSS build toolchain — devDependencies that only ever process this repo's own source files, never user input, and aren't shipped. Only fix is Tailwind 4, a major migration (config format, class changes). Encoded in `scripts/audit-check.mjs`. | Santiago | 2026-12-01 |

## Escalation level

Currently at level 2 (scripted): the floor is enforced by convention + CI, numbered dimensions run in GitHub Actions (`.github/workflows/ci.yml`) with thresholds in `.lighthouserc.json`. No dedicated constraint-runner tool — revisit if this file grows past what a few CI steps can express.
