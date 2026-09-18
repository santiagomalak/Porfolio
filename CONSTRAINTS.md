# Constraints

Last reviewed: 2026-09-18

This file is the project's quality bar. Read it before writing code. **Do not weaken it to make a change pass** — if a threshold is genuinely wrong, fix the number and say why in the same commit, don't just delete or loosen the check silently.

## Floor (always enforced, no setup required)

- No new suppression comments (`@ts-ignore`, `eslint-disable`) without a linked reason
- No unimplemented stubs (`throw new Error('not implemented')`, empty `catch {}`)
- No skipped or deleted tests without a reason in the commit message
- No secrets in source — `.env.local` stays untracked, never hardcode API keys
- `src/data/projects.ts` is the only source of truth for project-card data (data-science + web-projects) — don't reintroduce per-page copies (see git history 2026-09-17 for why this rule exists: a duplicated cover image and a "300+" vs "967 atletas" text drift both came from data existing in two places)
- This file does not get weakened to make a change pass

## Enforced with numbers

| Dimension | Rule | Checked by | Runs at | Blocking? |
|---|---|---|---|---|
| Types | Zero TypeScript errors | `tsc --noEmit` | every push/PR (CI) | **Yes** |
| Build | Production build succeeds | `next build` | every push/PR (CI) | **Yes** |
| Dependency vulnerabilities | Nothing at high/critical | `npm audit --audit-level=high` | every push/PR (CI) | No — warn until **2026-10-02** |
| Secrets | No findings | `gitleaks` | every push/PR (CI) | No — warn until **2026-10-02** |
| Performance | Lighthouse Performance ≥ 90, LCP ≤ 3500ms | `.lighthouserc.json` via Lighthouse CI | every push/PR (CI) | No — warn until **2026-10-02** |
| Accessibility | Lighthouse Accessibility ≥ 90 | `.lighthouserc.json` via Lighthouse CI | every push/PR (CI) | No — warn until **2026-10-02** |
| Layout shift | CLS ≤ 0.05 | `.lighthouserc.json` via Lighthouse CI | every push/PR (CI) | No — warn until **2026-10-02** |

**On 2026-10-02** (two weeks from when these were added): if the warn-level checks above haven't produced false positives, flip them to blocking —
`npm audit --audit-level=high` (drop the `|| echo` fallback in `.github/workflows/ci.yml`) and change every `"warn"` in `.lighthouserc.json`'s `assert.assertions` to `"error"`.

Every row names the command that produces the verdict. A dimension with a number and no command is an aspiration, not a constraint.

## Measured, not yet enforced

Baseline measured 2026-09-18 via `npx lighthouse` against a local production build (`next build && next start`), simulated mobile throttling. Production on Vercel's CDN should generally do better than this; these numbers are the floor, not the target.

| Metric | Route | Today | Direction |
|---|---|---|---|
| Performance score | `/` | 96 | must not fall below 90 |
| Performance score | `/data-science/ivolution` | 93 | must not fall below 90 |
| Performance score | `/dashboards` | 97 | must not fall below 90 |
| Accessibility score | `/` | 96 | must not fall below 90 |
| Accessibility score | `/data-science/ivolution` | 100 | must not fall below 90 |
| Accessibility score | `/dashboards` | 95 | must not fall below 90 |
| LCP | `/` | 2.8s | must not exceed 3.5s |
| LCP | `/data-science/ivolution` | 3.2s | must not exceed 3.5s |
| LCP | `/dashboards` | 2.6s | must not exceed 3.5s |
| CLS | all three | 0 – 0.026 | must not exceed 0.05 |
| First Load JS (shared) | all routes | 87.3 kB | must not grow |
| First Load JS | `/` (heaviest static page) | 141 kB | must not grow |

LCP sits above the textbook Core Web Vitals "good" threshold of 2500ms on all three sampled routes even after the 2026-09-17 image/Framer-Motion pass — treat closing that gap as a real backlog item, not a solved problem. The 3500ms ceiling above is a ratchet (don't regress further), not a target.

## Known exceptions

| ID | Rule | Scope | Reason | Owner | Expires |
|---|---|---|---|---|---|
| E1 | Dependency vulnerabilities | `next`, bundled `postcss` (1 critical, 1 high per `npm audit`) | Fix requires `next@16.3.5`, a major-version jump from 14.2.35 with real App Router breaking-change risk. Needs a dedicated, tested migration — not a drive-by dependency bump. | Santiago | 2026-12-01 |
| E2 | `style-src`/`script-src` CSP | site-wide (`next.config.js`) | `'unsafe-inline'` kept for both — see the rationale written inline in `next.config.js`. Removing it needs per-request CSP nonces, which forces every route to dynamic rendering (loses static generation). Not worth the trade for a site with no auth/user data. | Santiago | — (revisit only if the site ever needs dynamic rendering for another reason) |

## Escalation level

Currently at level 2 (scripted): the floor is enforced by convention + CI, numbered dimensions run in GitHub Actions (`.github/workflows/ci.yml`) with thresholds in `.lighthouserc.json`. No dedicated constraint-runner tool — revisit if this file grows past what a few CI steps can express.
