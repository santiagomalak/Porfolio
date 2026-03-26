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
    color: 'from-primary-50 to-indigo-50',
    border: 'border-primary-200',
    tag: 'bg-primary-100 text-primary-700',
  },
  {
    name: 'Diplomado en Ciberseguridad',
    institution: 'Universidad Nacional de Córdoba · Mundos E · USIL',
    date: 'Septiembre 2025',
    hours: '200 horas',
    resolution: 'FCEFyN UNC + Universidad San Ignacio de Loyola',
    description: 'Diplomatura dictada por la Facultad de Ciencias Exactas, Físicas y Naturales de la UNC en conjunto con Mundos E y la Universidad San Ignacio de Loyola. Fundamentos y práctica en seguridad informática.',
    color: 'from-red-50 to-orange-50',
    border: 'border-red-200',
    tag: 'bg-red-100 text-red-700',
  },
]

const certifications = [
  {
    category: 'Google',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    labelColor: 'bg-blue-100 text-blue-700',
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
    color: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    labelColor: 'bg-emerald-100 text-emerald-700',
    items: [
      {
        name: 'Python Essentials 1',
        issuer: 'Cisco Networking Academy · Python Institute',
        date: 'Oct 2024',
        detail: 'Fundamentos de Python 3, algoritmos, estructuras',
      },
      {
        name: 'Python Essentials 2',
        issuer: 'Cisco Networking Academy · Python Institute',
        date: 'Oct 2024',
        detail: 'OOP, módulos, aplicaciones avanzadas en Python',
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
    color: 'from-blue-50 to-sky-50',
    border: 'border-sky-200',
    labelColor: 'bg-sky-100 text-sky-700',
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
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
    labelColor: 'bg-purple-100 text-purple-700',
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
    color: 'from-pink-50 to-rose-50',
    border: 'border-pink-200',
    labelColor: 'bg-pink-100 text-pink-700',
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
            <span className="text-primary-700">& Formación</span>
          </h1>
          <p className="text-xl text-gray-600">
            Formación continua en Data Science, programación, IA y desarrollo web — de Google, IBM, Cisco y universidades internacionales.
          </p>
        </motion.div>

        {/* UNC Diplomatura — destacada */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Formación Universitaria</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {universities.map((u) => (
              <div key={u.name} className={`bg-gradient-to-br ${u.color} rounded-2xl border-2 ${u.border} p-8`}>
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${u.tag}`}>
                      Universidad Nacional de Córdoba
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{u.name}</h3>
                    <p className="text-gray-600 font-medium text-sm">{u.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 block">{u.date}</span>
                    <span className="text-sm font-semibold text-gray-700 block mt-1">{u.hours}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">{u.description}</p>
                <p className="text-xs text-gray-400 font-mono">{u.resolution}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Other certifications */}
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center">
            <Award className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Certificaciones internacionales</h2>
        </motion.div>

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
                    <h3 className="font-bold text-gray-900 mb-1 leading-snug">{cert.name}</h3>
                    <p className="text-sm text-gray-500 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 mb-3">{cert.date} · {cert.detail}</p>
                    <div className="flex flex-wrap gap-3">
                      {'verifyUrl' in cert && cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
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
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-600 hover:text-orange-800 transition-colors"
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
