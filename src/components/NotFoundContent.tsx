'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { localizePath } from '@/i18n/routing'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function NotFoundContent({ lang, t }: { lang: Locale; t: Dictionary['notFound'] }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">

        {/* Big 404 */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="relative mb-8"
        >
          <span className="text-[160px] md:text-[220px] font-black leading-none bg-gradient-to-br from-primary-100 to-secondary-100 bg-clip-text text-transparent select-none">
            404
          </span>
          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-6xl">🔍</span>
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {t.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">{t.subtitle}</p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-10">{t.meta}</p>
        </motion.div>

        {/* Fake terminal */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
          className="bg-gray-900 rounded-2xl p-5 text-left mb-10 font-mono text-sm shadow-xl"
        >
          <div className="flex gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="text-gray-400">$ find / -name <span className="text-yellow-400">&quot;{t.searching}&quot;</span></p>
          <p className="text-red-400 mt-1">find: No such file or directory</p>
          <p className="text-gray-400 mt-2">$ python predict_location.py</p>
          <p className="text-green-400 mt-1">{'>'} {t.prediction}: <span className="text-white">somewhere/in/the/internet</span></p>
          <p className="text-green-400">{'>'} {t.confidence}: <span className="text-red-400">2.3%</span> <span className="text-gray-500">{t.comment}</span></p>
          <p className="text-gray-400 mt-2">$ <span className="animate-pulse">_</span></p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href={localizePath(lang, '/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium shadow-lg shadow-primary-200 hover:scale-[1.02]"
          >
            <Home className="h-4 w-4" />
            {t.home}
          </Link>
          <Link
            href={localizePath(lang, '/data-science')}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-[#1e1e32] text-gray-700 dark:text-gray-300 rounded-xl hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-700 dark:hover:text-primary-400 transition-all font-medium"
          >
            <Search className="h-4 w-4" />
            {t.projects}
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
