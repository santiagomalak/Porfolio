import { headers } from 'next/headers'
import SiteShell from '@/components/SiteShell'
import NotFoundContent from '@/components/NotFoundContent'
import { LOCALE_HEADER, toLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

// Every unknown URL lands here (Next renders the top-level not-found for any
// path no route matches). It lives outside app/[lang] on purpose: on Next 14 a
// notFound() thrown under the [lang] root layout escapes [lang]/not-found.tsx
// and produces an empty error shell. The middleware passes the URL's language
// in a request header, so the 404 still renders in the visitor's language with
// the normal header and footer.
export default function NotFound() {
  const lang = toLocale(headers().get(LOCALE_HEADER) ?? '')
  return (
    <SiteShell lang={lang}>
      <NotFoundContent lang={lang} t={getDictionary(lang).notFound} />
    </SiteShell>
  )
}
