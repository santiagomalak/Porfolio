/** @type {import('next').NextConfig} */

// Content-Security-Policy, kept as one string so it's easy to read/diff.
//
// script-src / style-src need 'unsafe-inline': next-themes injects a small
// inline <script> to set the theme class before hydration (avoids a flash of
// wrong theme), and the app uses inline `style={{...}}` extensively for
// per-project/per-dashboard accent colors (most concentrated on /dashboards).
// A strict nonce-based CSP would remove both needs, but only by making every
// page dynamically rendered (nonces require reading per-request headers in a
// Server Component, which opts the whole site out of static generation) —
// not a trade worth making for a static portfolio with no auth/user data.
// Every other directive is as strict as the site allows.
// Next.js dev mode's webpack Fast Refresh runtime evaluates code via eval(),
// which only exists for local `next dev` — production builds never need it.
const isDev = process.env.NODE_ENV === 'development'

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://va.vercel-scripts.com",
  // The three live dashboards embedded via <iframe> on /dashboards
  "frame-src https://ecommerce-dashboard-puce.vercel.app https://crypto-dashboard-five-dun.vercel.app https://argentina-macro.vercel.app",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ')

const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        // Site-wide security headers
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: CSP },
        ],
      },
      {
        // Long-lived cache for static images/icons in public/ — they're
        // content-addressed by filename change, not by cache-busting query strings,
        // so it's safe to let browsers/CDN hold onto them for a year.
        source: '/:path*.(png|jpg|jpeg|svg|webp|avif|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
