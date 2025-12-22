'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Code2, Database } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/web-projects', label: 'Desarrollo Web' },
    { href: '/data-science', label: 'Data Science' },
    { href: '/contact', label: 'Contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <Code2 className="h-6 w-6 text-primary-700" />
            <Database className="h-6 w-6 text-secondary-500 -ml-2" />
          </div>
          <span className="font-bold text-xl">Santiago Aragon</span>
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-700 ${
                  pathname === link.href
                    ? 'text-primary-700'
                    : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button - implementar después si es necesario */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
