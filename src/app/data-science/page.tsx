'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const dataScienceProjects = [
  {
    title: 'IBM HR Analytics — Predicción de Deserción',
    description: 'Análisis end-to-end sobre dataset real de IBM con +1.400 empleados. Identifica los factores con mayor impacto en la rotación laboral usando Random Forest, K-Means clustering y PCA. Genera insights accionables para reducir churn en equipos de RR.HH.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'K-Means', 'PCA', 'Seaborn'],
    highlight: '+1.400 registros',
    githubUrl: 'https://github.com/santiagomalak/IBM-Proyect',
    type: 'datascience' as const,
    accentColor: 'blue' as const,
  },
  {
    title: 'Segmentación de Usuarios — Email Marketing',
    description: 'Sistema de segmentación no supervisada para campañas de mailing. Aplica K-Means con análisis de silueta para encontrar el k óptimo y reducción dimensional con PCA. El output permite personalizar estrategias por segmento con criterio estadístico sólido.',
    tags: ['Python', 'K-Means', 'PCA', 'Scikit-learn', 'Pandas', 'Clustering'],
    highlight: 'Segmentación óptima',
    githubUrl: 'https://github.com/santiagomalak/Datos-de-Mailing',
    type: 'datascience' as const,
    accentColor: 'purple' as const,
  },
  {
    title: 'Pipeline de Preprocesamiento — Weather AUS',
    description: 'Pipeline completo sobre datos climáticos de Australia. Imputación de valores faltantes, encoding de variables categóricas, feature engineering y estandarización. Base robusta lista para cualquier modelo de predicción de lluvia sobre el dataset original de Kaggle.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering', 'Data Cleaning'],
    highlight: 'Dataset Kaggle',
    githubUrl: 'https://github.com/santiagomalak/weatherAUS',
    type: 'datascience' as const,
    accentColor: 'teal' as const,
  },
  {
    title: 'Analytics Dashboard — Performance',
    description: 'Dashboard web full-stack para visualización de métricas de rendimiento en tiempo real. REST API en Node.js con frontend interactivo en Chart.js, containerizado con Docker para facilitar el deploy en cualquier entorno.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Docker', 'REST API'],
    highlight: 'Full-stack',
    type: 'datascience' as const,
    accentColor: 'green' as const,
  },
]

export default function DataScience() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary-500">Proyectos de</span>{' '}
            <span className="text-primary-700">Data Science</span>
          </h1>
          <p className="text-xl text-gray-600">
            Machine learning, análisis estadístico y pipelines de datos — del dataset al insight accionable.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {dataScienceProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={index * 0.1}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} custom={0}
          className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Jupyter Notebooks & más análisis</h2>
            <p className="text-gray-600 text-sm">
              Explorá todos mis notebooks y proyectos de análisis de datos en GitHub.
            </p>
          </div>
          <a
            href="https://github.com/santiagomalak?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium whitespace-nowrap shadow-lg shadow-primary-200 hover:scale-[1.02]"
          >
            Ver en GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </div>
  )
}
