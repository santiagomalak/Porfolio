import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function OpenToWorkBanner() {
  return (
    <div className="bg-gradient-to-r from-[#052e16] to-[#064e3b] border-b border-green-800/50 text-green-100 py-2 px-4 flex items-center justify-center gap-3 text-xs font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
      <span className="hidden sm:inline text-green-200">
        Disponible para roles remotos y proyectos freelance · Córdoba, Argentina
      </span>
      <span className="sm:hidden text-green-200">Open to work · Remote</span>
      <Link
        href="/contact"
        className="inline-flex items-center gap-1 font-semibold text-green-300 hover:text-white transition-colors underline underline-offset-2 decoration-green-600 hover:decoration-white"
      >
        Contactar <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  )
}
