import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { localizePath } from '@/i18n/routing'

export default function OpenToWorkBanner({ lang, t }: { lang: Locale; t: Dictionary['common']['banner'] }) {
  return (
    <div className="bg-gradient-to-r from-[#052e16] to-[#064e3b] border-b border-green-800/50 text-green-100 py-2 px-4 flex items-center justify-center gap-3 text-xs font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
      <span className="hidden sm:inline text-green-200">
        {t.long}
      </span>
      <span className="sm:hidden text-green-200">{t.short}</span>
      <Link
        href={localizePath(lang, '/contact')}
        className="inline-flex items-center gap-1 font-semibold text-green-300 hover:text-white transition-colors underline underline-offset-2 decoration-green-600 hover:decoration-white"
      >
        {t.cta} <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  )
}
