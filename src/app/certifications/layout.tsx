import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificaciones & Formación',
  description: 'Diplomatura universitaria en Data Science & ML (UNC, 250h), Google IT Support Professional, Google AI Essentials, Python Essentials Cisco, IBM SkillsBuild y más.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
