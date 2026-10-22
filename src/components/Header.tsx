'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { useTheme } from 'next-themes'
import { LOCALE_COOKIE, SITE_NAME, localeLabels, locales, type Locale } from '@/i18n/config'
import { localizePath, stripLocale } from '@/i18n/routing'
import type { Dictionary } from '@/i18n/get-dictionary'

type CommonCopy = Dictionary['common']

function ThemeToggle({ t }: { t: CommonCopy }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-9 h-9" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg text-gray-500 hover:text-primary-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-primary-400 dark:hover:bg-[#1e1e32] transition-all"
      aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}

// Plain <a> on purpose: a full navigation guarantees the cookie is written
// before the middleware sees the request (a prefetching <Link> could hit the
// middleware first and get redirected back by browser-language detection).
function LanguageSwitcher({ lang, label, onNavigate }: { lang: Locale; label: string; onNavigate?: () => void }) {
  const pathname = usePathname()
  const basePath = stripLocale(pathname)

  return (
    <div role="group" aria-label={label} className="flex items-center rounded-lg border border-gray-200 dark:border-[#1e1e32] p-0.5">
      {locales.map((l) => {
        const active = l === lang
        return (
          <a
            key={l}
            href={localizePath(l, basePath)}
            hrefLang={l}
            lang={l}
            aria-current={active ? 'true' : undefined}
            title={localeLabels[l].name}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`
              onNavigate?.()
            }}
            className={`px-2 py-1 rounded-md text-xs font-semibold transition-colors ${
              active
                ? 'bg-primary-600 text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400'
            }`}
          >
            {localeLabels[l].short}
          </a>
        )
      })}
    </div>
  )
}

export default function Header({ lang, t, cvHref }: { lang: Locale; t: CommonCopy; cvHref: string }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/web-projects', label: t.nav.webProjects },
    { href: '/data-science', label: t.nav.dataScience },
    { href: '/dashboards', label: t.nav.dashboards },
    { href: '/certifications', label: t.nav.certifications },
    { href: '/contact', label: t.nav.contact },
  ].map((link) => ({ ...link, href: localizePath(lang, link.href) }))

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#1e1e32] bg-white/95 dark:bg-[#080810]/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-[#080810]/80 shadow-sm dark:shadow-none">
      <nav className="max-w-6xl mx-auto px-4 xl:px-0 h-16 flex items-center justify-between gap-3 lg:gap-6">

        {/* Logo */}
        <Link
          href={localizePath(lang, '/')}
          aria-label={`${SITE_NAME} — ${t.roleShort}`}
          className="flex items-center gap-3 group min-w-0"
          onClick={closeMobileMenu}
        >
          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center shadow-md group-hover:shadow-primary-300/60 group-hover:scale-105 transition-all duration-200">
            <span className="text-white font-bold text-sm tracking-tight select-none">SA</span>
          </div>
          {/* Hidden between lg and xl: there the full nav + language switcher need the room. */}
          <div className="flex lg:hidden xl:flex flex-col gap-0.5 whitespace-nowrap min-w-0">
            <span className="font-semibold text-[15px] leading-tight text-gray-900 dark:text-white tracking-tight truncate">{SITE_NAME}</span>
            <span className="text-xs leading-tight text-gray-500 dark:text-gray-400">{t.roleShort}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 shrink-0">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-2 xl:px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                    pathname === link.href
                      ? 'text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-[#1e1e32]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-2 pl-2 border-l border-gray-200 dark:border-[#1e1e32] flex items-center gap-1">
            <a
              href={cvHref}
              download
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-primary-700 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
              aria-label={t.downloadCv}
            >
              <Download className="w-4 h-4" />
              CV
            </a>
            <LanguageSwitcher lang={lang} label={t.language} />
            <ThemeToggle t={t} />
          </div>
        </div>

        {/* Mobile: CV + toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-1 shrink-0">
          <a
            href={cvHref}
            download
            className="flex items-center gap-1.5 px-2 sm:px-3 py-2 rounded-lg text-sm font-medium text-primary-700 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
            aria-label={t.downloadCv}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-semibold">CV</span>
          </a>
          <ThemeToggle t={t} />
          <button
            className="p-2 hover:bg-gray-100 dark:hover:bg-[#1e1e32] rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t.toggleMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-gray-200 dark:border-[#1e1e32] bg-white dark:bg-[#080810]">
          <ul className="container mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1e1e32] hover:text-primary-700 dark:hover:text-primary-400'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100 dark:border-[#1e1e32]">
              <a
                href={cvHref}
                download
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                onClick={closeMobileMenu}
              >
                <Download className="w-4 h-4" />
                {t.downloadCv}
              </a>
            </li>
            <li className="pt-2 flex items-center justify-between px-4">
              <span className="text-xs text-gray-500 dark:text-gray-400">{t.language}</span>
              <LanguageSwitcher lang={lang} label={t.language} onNavigate={closeMobileMenu} />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
