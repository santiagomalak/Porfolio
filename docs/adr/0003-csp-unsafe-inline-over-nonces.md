# 3. CSP keeps `'unsafe-inline'` rather than moving to per-request nonces

Date: 2026-09-18

## Status

Accepted

## Context

The site shipped with no `Content-Security-Policy` at all. Adding one runs into two first-party sources of inline content:

- `next-themes` (`ThemeProvider`, `attribute="class"`) injects a small inline `<script>` before hydration to avoid a flash of the wrong theme.
- Inline `style={{...}}` attributes are used extensively for per-project and per-dashboard accent colors (heaviest on `/dashboards`, also `ProjectCard`, `Header`, certifications).

A strict CSP normally addresses inline `<script>` tags with a per-request cryptographic nonce, and `next-themes` even supports a `nonce` prop for exactly this. But reading the nonce in a Server Component requires calling `headers()` from `next/headers`, which forces that route (and everything under it, since `layout.tsx` wraps every page) out of Next's static generation and into per-request dynamic rendering. Before this change, `next build` prerendered every route as static HTML (`○ (Static)`); a nonce-based CSP would flip that to `ƒ (Dynamic)` site-wide.

There is no equivalent nonce mechanism for inline `style=""` attributes at all — removing those requires migrating off inline styles to CSS custom properties or a nonced `<style>` block, a much larger refactor than this pass covered.

## Decision

Ship the CSP with `'unsafe-inline'` on both `script-src` and `style-src`, and make every other directive (`frame-src`, `connect-src`, `object-src`, `base-uri`, `form-action`, `frame-ancestors`) as strict as the site allows. Tested in `Content-Security-Policy-Report-Only` mode against every route before flipping to the enforcing header — see the `next.config.js` commit from 2026-09-18 for what that testing caught (dev-mode `eval()`, missing `frame-src` entries for the three embedded dashboards).

## Consequences

- This CSP does not stop inline-script-based XSS. Given there's no known injection vector in the app today (no unescaped user input reaches HTML; the one `dangerouslySetInnerHTML` use is a static, hardcoded JSON-LD block) and no auth/user data, that's an accepted trade against losing static generation.
- If the site ever needs dynamic rendering for an unrelated reason (auth, personalization, A/B testing), revisit this decision — the cost of adding nonces at that point is much lower, since the static-generation trade-off is already gone.
- Don't add new inline `<script>` tags with non-static content; the JSON-LD block in `layout.tsx` is the one sanctioned exception because its content is a hardcoded object, never user input.
