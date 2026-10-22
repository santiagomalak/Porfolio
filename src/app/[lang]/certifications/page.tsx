import type { Metadata } from 'next'
import Image from 'next/image'
import { ExternalLink, Award, GraduationCap } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { toLocale } from '@/i18n/config'
import { getDictionary, type Dictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/i18n/metadata'

type Props = { params: { lang: string } }

export function generateMetadata({ params }: Props): Metadata {
  const lang = toLocale(params.lang)
  return pageMetadata(lang, '/certifications', getDictionary(lang).meta.certifications)
}

type CertCopy = Dictionary['certifications']

// Language-neutral data lives here; translated text (names, dates, details)
// is looked up in the dictionary by `id`.
interface University {
  id: keyof CertCopy['universities']
  institution: string
  resolution: string
  verifyUrl?: string
  color: string
  border: string
  tag: string
}

interface Certification {
  id: keyof CertCopy['certs']
  /** Official course title, kept in its original language. */
  name: string
  issuer: string
  verifyUrl?: string
  credlyUrl?: string
  image?: string
}

interface CertificationGroup {
  category: keyof CertCopy['categories']
  color: string
  border: string
  labelColor: string
  items: Certification[]
}

const universities: University[] = [
  {
    id: 'dsml',
    institution: 'Universidad Nacional de Córdoba · ICARO',
    resolution: 'RD-2025-149-E-UNC-DEC#FCEFYN',
    verifyUrl: 'https://fcefyn.unc.edu.ar/facultad/secretarias/extension/area-de-formacion-continua/cursos-y-diplomaturas/validador-de-certificados/',
    color: 'from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20',
    border: 'border-primary-200 dark:border-primary-800/50',
    tag: 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400',
  },
  {
    id: 'cyber',
    institution: 'Universidad Nacional de Córdoba · Mundos E · USIL',
    resolution: 'FCEFyN UNC + Universidad San Ignacio de Loyola',
    verifyUrl: 'https://certificados.mundose.com/?i=bW9kZT1QREYmcmVjb3JkPTM5eDM1MTMwNTk=',
    color: 'from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20',
    border: 'border-red-200 dark:border-red-800/50',
    tag: 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400',
  },
]

const certifications: CertificationGroup[] = [
  {
    category: 'google',
    color: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
    border: 'border-blue-200 dark:border-blue-800/50',
    labelColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400',
    items: [
      {
        id: 'itSupport',
        name: 'Google IT Support Professional Certificate',
        issuer: 'Google · Coursera',
        verifyUrl: 'https://coursera.org/verify/professional-cert/CC6UAZRJ27PS',
        credlyUrl: 'https://www.credly.com/go/fDZyj55Z',
      },
      {
        id: 'aiEssentials',
        name: 'Google AI Essentials',
        issuer: 'Google · Coursera',
        verifyUrl: 'https://coursera.org/verify/YDQQ8Y4T3BRY',
      },
    ],
  },
  {
    category: 'programming',
    color: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
    border: 'border-emerald-200 dark:border-emerald-800/50',
    labelColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400',
    items: [
      {
        id: 'python1',
        name: 'Python Essentials 1',
        issuer: 'Cisco Networking Academy · Python Institute',
        credlyUrl: 'https://www.credly.com/badges/2baf7b0f-b071-42f8-b2b6-bfb4be35506c/public_url',
      },
      {
        id: 'python2',
        name: 'Python Essentials 2',
        issuer: 'Cisco Networking Academy · Python Institute',
        credlyUrl: 'https://www.credly.com/badges/f0060ccf-e241-4295-980d-c27e87433cad/public_url',
      },
      {
        id: 'jhu',
        name: 'HTML, CSS & JavaScript for Web Developers',
        issuer: 'Johns Hopkins University · Coursera',
        verifyUrl: 'https://coursera.org/verify/9FYPTMXUPGQW',
      },
    ],
  },
  {
    category: 'ibm',
    color: 'from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/30',
    border: 'border-sky-200 dark:border-sky-800/50',
    labelColor: 'bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-400',
    items: [
      {
        id: 'ibmWeb',
        name: 'Web Development Fundamentals',
        issuer: 'IBM SkillsBuild',
        credlyUrl: 'https://www.credly.com/go/vG9n3TzJ',
      },
    ],
  },
  {
    category: 'ai',
    color: 'from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30',
    border: 'border-purple-200 dark:border-purple-800/50',
    labelColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400',
    items: [
      {
        id: 'elementsOfAi',
        name: 'Elements of AI',
        issuer: 'University of Helsinki · MinnaLearn',
        verifyUrl: 'https://certificates.mooc.fi/validate/yejwluduc8d',
        image: '/cert-elements-of-ai.png',
      },
    ],
  },
  {
    category: 'design',
    color: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30',
    border: 'border-pink-200 dark:border-pink-800/50',
    labelColor: 'bg-pink-100 text-pink-700 dark:bg-pink-950/50 dark:text-pink-400',
    items: [
      {
        id: 'ux',
        name: 'Fundamentos de UX',
        issuer: 'Fundación Telefónica Movistar · Conecta Empleo',
      },
      {
        id: 'webDesign',
        name: 'Diseño Web con HTML5 + CSS',
        issuer: 'Fundación Telefónica Movistar · Conecta Empleo',
      },
    ],
  },
]

export default function CertificationsPage({ params }: Props) {
  const t = getDictionary(toLocale(params.lang)).certifications

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">

        {/* Header */}
        <Reveal className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary-500 dark:text-secondary-400">{t.titleA}</span>{' '}
            <span className="text-primary-700 dark:text-primary-400">{t.titleB}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{t.intro}</p>
        </Reveal>

        {/* UNC Diplomatura */}
        <Reveal delay={100} className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.university}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {universities.map((u) => {
              const copy = t.universities[u.id]
              return (
              <div key={u.id} className={`bg-gradient-to-br ${u.color} rounded-2xl border-2 ${u.border} p-8`}>
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${u.tag}`}>
                      {t.universityBadge}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{copy.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">{u.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">{copy.date}</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 block mt-1">{copy.hours}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm">{copy.description}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-4">{u.resolution}</p>
                {u.verifyUrl && (
                  <a
                    href={u.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {copy.verifyLabel}
                  </a>
                )}
              </div>
              )
            })}
          </div>
        </Reveal>

        {/* Other certifications header */}
        <Reveal className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center">
            <Award className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.international}</h2>
        </Reveal>

        {/* Credly banner */}
        <Reveal>
          <a
            href="https://www.credly.com/users/santiago-aragon-malak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/50 rounded-2xl px-7 py-5 mb-10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div>
              <p className="font-bold text-gray-900 dark:text-white mb-0.5">{t.credlyTitle}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t.credlyBody}</p>
            </div>
            <ExternalLink className="h-5 w-5 text-orange-500 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>

        <div className="space-y-8">
          {certifications.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 50}>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${group.labelColor}`}>
                {t.categories[group.category]}
              </span>
              <div className="grid md:grid-cols-2 gap-4">
                {group.items.map((cert) => (
                  <div
                    key={cert.id}
                    className={`bg-gradient-to-br ${group.color} rounded-xl border ${group.border} p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                  >
                    {cert.image && (
                      <div className="relative w-full aspect-[3508/2480] rounded-lg mb-4 overflow-hidden">
                        <Image src={cert.image} alt={cert.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 leading-snug">{cert.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">{t.certs[cert.id].date} · {t.certs[cert.id].detail}</p>
                    <div className="flex flex-wrap gap-3">
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {t.verify}
                        </a>
                      )}
                      {cert.credlyUrl && (
                        <a
                          href={cert.credlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {t.viewBadge}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  )
}
