import { ImageResponse } from 'next/og'
import { SITE_NAME, isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

// Social preview image (1200×630 PNG), one per language. Replaces
// public/og-image.svg: LinkedIn, X and WhatsApp don't render SVG previews, so
// shared links showed no image at all.
//
// Edge runtime rather than build-time static generation: on Next 14 the Node
// build of @vercel/og crashes on Windows (fileURLToPath on a drive path), which
// would break local `npm run build`. ImageResponse sets a one-year immutable
// Cache-Control, so each language is rendered once and then served from the CDN.
export const runtime = 'edge'

export function GET(_req: Request, { params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return new Response('Not found', { status: 404 })
  const dict = getDictionary(params.lang)
  const t = dict.meta

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #f5f6fb 0%, #ebedf6 100%)',
          color: '#1a1a2e',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #3d4d82 0%, #5B4E8B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            SA
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 22px',
              borderRadius: 999,
              background: '#dcfce7',
              color: '#166534',
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, background: '#22c55e' }} />
            {t.ogAvailability}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{SITE_NAME}</div>
          <div style={{ fontSize: 44, fontWeight: 600, color: '#3d4d82', marginTop: 8 }}>
            {dict.common.roleFull}
          </div>
          <div style={{ fontSize: 30, color: '#6b7280', marginTop: 24 }}>{t.ogTagline}</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#5B4E8B' }}>
          <span>santiagomalak.is-a.dev</span>
          <span>github.com/santiagomalak</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
