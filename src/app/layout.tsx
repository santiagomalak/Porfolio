import type { Metadata } from 'next'

// The real layout (<html lang>, header, footer) is components/SiteShell.tsx,
// rendered by app/[lang]/layout.tsx and app/not-found.tsx, because <html lang>
// depends on the language. Next still needs a top-level layout to anchor the
// global 404 on, so this one just passes children through.
export const metadata: Metadata = {
  title: 'Santiago Aragon Malak',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
