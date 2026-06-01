'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'

export default function OpenToWorkBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('otw-banner-dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <div className="relative bg-gradient-to-r from-[#052e16] to-[#064e3b] border-b border-green-800/50 text-green-100 py-2 px-4 flex items-center justify-center gap-3 text-xs font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
      <span className="hidden sm:inline text-green-200">
        Disponible para roles remotos · Analytics Engineer · Argentina
      </span>
      <span className="sm:hidden text-green-200">Open to work · Remote</span>
      <Link
        href="/contact"
        className="inline-flex items-center gap-1 font-semibold text-green-300 hover:text-white transition-colors underline underline-offset-2 decoration-green-600 hover:decoration-white"
      >
        Contactar <ArrowRight className="h-3 w-3" />
      </Link>
      <button
        onClick={() => {
          sessionStorage.setItem('otw-banner-dismissed', '1')
          setVisible(false)
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 hover:text-green-200 transition-colors p-0.5"
        aria-label="Cerrar banner"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
