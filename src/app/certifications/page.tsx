'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award, GraduationCap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const universities = [
  {
    name: 'Diplomatura en Data Science & Machine Learning',
    institution: 'Universidad Nacional de Córdoba · ICARO',
    date: 'Mayo 2025',
    hours: '250 horas · CRE 10',
    resolution: 'RD-2025-149-E-UNC-DEC#FCEFYN',
    description: 'Diplomatura universitaria de formación continua dictada por ICARO Asociación Civil en conjunto con la Secretaría de Extensión de la Facultad de Ciencias Exactas, Físicas y Naturales de la UNC.',
    verifyUrl: 'https://fcefyn.unc.edu.ar/facultad/secretarias/extension/area-de-formacion-continua/cursos-y-diplomaturas/validador-de-certificados/',
    verifyLabel: 'Validar en UNC (código: DS240502)',
    color: 'from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20',
    border: 'border-primary-200 dark:border-primary-800/50',
    tag: 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400',
  },
  {
    name: 'Diplomado en Ciberseguridad',
    institution: 'Universidad Nacional de Córdoba · Mundos E · USIL',
    date: 'Septiembre 2025',
    hours: '200 horas',
    resolution: 'FCEFyN UNC + Universidad San Ignacio de Loyola',
    description: 'Diplomatura dictada por la Facultad de Ciencias Exactas, Físicas y Naturales de la UNC en conjunto con Mundos E y la Universidad San Ignacio de Loyola. Fundamentos y práctica en seguridad informática.',
    verifyUrl: 'https://certificados.mundose.com/?i=bW9kZT1QREYmcmVjb3JkPTM5eDM1MTMwNTk=',
    color: 'from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20',
    border: 'border-red-200 dark:border-red-800/50',
    tag: 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400',
  },
]

const certifications = [
  {
    category: 'Google',
    color: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30',
    border: 'border-blue-200 dark:border-blue-800/50',
    labelColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400',
    items: [
      {
        name: 'Google IT Support Professional Certificate',
        issuer: 'Google · Coursera',
        date: 'Jun 2025',
        detail: '5 cursos — Redes, SO, Administración, Seguridad',
        verifyUrl: 'https://coursera.org/verify/professional-cert/CC6UAZRJ27PS',
        credlyUrl: 'https://www.credly.com/go/fDZyj55Z',
      },
      {
        name: 'Google AI Essentials',
        issuer: 'Google · Coursera',
        date: 'Ago 2024',
        detail: 'Fundamentos de IA aplicados al trabajo',
        verifyUrl: 'https://coursera.org/verify/YDQQ8Y4T3BRY',
      },
    ],
  },
  {
    category: 'Programación',
    color: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
    border: 'border-emerald-200 dark:border-emerald-800/50',
    labelColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400',
    items: [
      {
        name: 'Python Essentials 1',
        issuer: 'Cisco Networking Academy · Python Institute',
        date: 'Oct 2024',
        detail: 'Fundamentos de Python 3, algoritmos, estructuras',
        credlyUrl: 'https://www.credly.com/badges/2baf7b0f-b071-42f8-b2b6-bfb4be35506c/public_url',
      },
      {
        name: 'Python Essentials 2',
        issuer: 'Cisco Networking Academy · Python Institute',
        date: 'Oct 2024',
        detail: 'OOP, módulos, aplicaciones avanzadas en Python',
        credlyUrl: 'https://www.credly.com/badges/f0060ccf-e241-4295-980d-c27e87433cad/public_url',
      },
      {
        name: 'HTML, CSS & JavaScript for Web Developers',
        issuer: 'Johns Hopkins University · Coursera',
        date: 'Ago 2024',
        detail: 'Desarrollo web moderno — JHU Whiting School of Engineering',
        verifyUrl: 'https://coursera.org/verify/9FYPTMXUPGQW',
      },
    ],
  },
  {
    category: 'IBM',
    color: 'from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/30',
    border: 'border-sky-200 dark:border-sky-800/50',
    labelColor: 'bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-400',
    items: [
      {
        name: 'Web Development Fundamentals',
        issuer: 'IBM SkillsBuild',
        date: 'Oct 2024',
        detail: 'Fundamentos de desarrollo web — badge verificable en Credly',
        credlyUrl: 'https://www.credly.com/go/vG9n3TzJ',
      },
    ],
  },
  {
    category: 'Inteligencia Artificial',
    color: 'from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30',
    border: 'border-purple-200 dark:border-purple-800/50',
    labelColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400',
    items: [
      {
        name: 'Elements of AI',
        issuer: 'University of Helsinki · MinnaLearn',
        date: 'Feb 2025',
        detail: '2 créditos ECTS — curso oficial de la Universidad de Helsinki',
        verifyUrl: 'https://certificates.mooc.fi/validate/yejwluduc8d',
        image: '/cert-elements-of-ai.png',
      },
    ],
  },
  {
    category: 'Diseño & UX',
    color: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30',
    border: 'border-pink-200 dark:border-pink-800/50',
    labelColor: 'bg-pink-100 text-pink-700 dark:bg-pink-950/50 dark:text-pink-400',
    items: [
      {
        name: 'Fundamentos de UX',
        issuer: 'Fundación Telefónica Movistar · Conecta Empleo',
        date: 'Sep 2024',
        detail: '30 horas — Principios de experiencia de usuario',
      },
      {
        name: 'Diseño Web con HTML5 + CSS',
        issuer: 'Fundación Telefónica Movistar · Conecta Empleo',
        date: 'Ago 2024',
        detail: '30 horas — Diseño y maquetación web',
      },
    ],
  },
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary-500">Certificaciones</span>{' '}
            <span className="text-primary-700 dark:text-primary-400">& Formación</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Formación continua en Data Science, programación, IA y desarrollo web — de Google, IBM, Cisco y universidades internacionales.
          </p>
        </motion.div>

        {/* UNC Diplomatura */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1} className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Formación Universitaria</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {universities.map((u) => (
              <div key={u.name} className={`bg-gradient-to-br ${u.color} rounded-2xl border-2 ${u.border} p-8`}>
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${u.tag}`}>
                      Universidad Nacional de Córdoba
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{u.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">{u.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">{u.date}</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 block mt-1">{u.hours}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm">{u.description}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-4">{u.resolution}</p>
                {'verifyUrl' in u && u.verifyUrl && (
                  <a
                    href={u.verifyUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {'verifyLabel' in u && u.verifyLabel ? u.verifyLabel as string : 'Ver certificado'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Other certifications header */}
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center">
            <Award className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Certificaciones internacionales</h2>
        </motion.div>

        {/* Credly banner */}
        <motion.a
          href="https://www.credly.com/users/santiago-aragon-malak"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex items-center justify-between gap-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/50 rounded-2xl px-7 py-5 mb-10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
        >
          <div>
            <p className="font-bold text-gray-900 dark:text-white mb-0.5">Ver todas mis badges verificadas en Credly</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Google IT Support · IBM Web Dev · y más badges verificables</p>
          </div>
          <ExternalLink className="h-5 w-5 text-orange-500 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        <div className="space-y-8">
          {certifications.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} custom={gi * 0.05}
            >
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${group.labelColor}`}>
                {group.category}
              </span>
              <div className="grid md:grid-cols-2 gap-4">
                {group.items.map((cert) => (
                  <div
                    key={cert.name}
                    className={`bg-gradient-to-br ${group.color} rounded-xl border ${group.border} p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                  >
                    {'image' in cert && cert.image && (
                      <img src={cert.image} alt={cert.name} className="w-full rounded-lg mb-4 object-cover" />
                    )}
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 leading-snug">{cert.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">{cert.date} · {cert.detail}</p>
                    <div className="flex flex-wrap gap-3">
                      {'verifyUrl' in cert && cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Verificar
                        </a>
                      )}
                      {'credlyUrl' in cert && cert.credlyUrl && (
                        <a
                          href={cert.credlyUrl as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Ver badge en Credly
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
