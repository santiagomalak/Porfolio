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
    title: 'Performance Monitoring System — Ivolution',
    description: 'Sistema de análisis de rendimiento diseñado de cero para más de 300 personas — atletas, profesionales de la salud y equipos completos. Alertas de tres estados (SUPERCOMPENSACIÓN / ATENCIÓN / FATIGADO) con umbrales dinámicos por percentil (p25/p75), ventanas móviles de evaluación y soporte multilingüe ES/EN/PT. Hoy es la herramienta principal de toma de decisiones de la organización.',
    tags: ['SQL', 'BigQuery', 'dbt', 'Metabase', 'Python', 'Analytics Engineering'],
    highlight: '+300 usuarios',
    image: '/ivolution-dashboard.png',
    liveUrl: '/data-science/ivolution',
    type: 'datascience' as const,
    accentColor: 'blue' as const,
  },
  {
    title: 'Segmentación de Usuarios — Email Marketing',
    description: 'Segmentación no supervisada sobre 212.292 registros reales de campañas de mailing. Aplica K-Means y MiniBatchKMeans con análisis de Silhouette Score para determinar el k óptimo (6 segmentos). Reducción dimensional con PCA para visualización. Output: archivo Excel con asignación de cluster y recomendaciones de estrategia personalizadas por segmento.',
    tags: ['Python', 'K-Means', 'PCA', 'Silhouette Score', 'Scikit-learn', 'Clustering'],
    highlight: '212.292 usuarios · 6 segmentos',
    image: '/ds-mailing-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/Datos-de-Mailing',
    type: 'datascience' as const,
    accentColor: 'purple' as const,
  },
  {
    title: 'IBM HR Analytics — Predicción de Deserción',
    description: 'Análisis end-to-end sobre el dataset oficial de IBM con 1.470 empleados. Identifica los factores con mayor impacto en la rotación laboral mediante Random Forest con matriz de confusión y métricas de clasificación. Segmentación con K-Means y visualización de clusters con PCA. Genera insights accionables para reducir el churn de RR.HH.',
    tags: ['Python', 'Random Forest', 'K-Means', 'PCA', 'Scikit-learn', 'Seaborn'],
    highlight: '1.470 empleados',
    image: '/ds-ibm-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/IBM-Proyect',
    type: 'datascience' as const,
    accentColor: 'blue' as const,
  },
  {
    title: 'NLP & Sentiment Analysis — Yelp Reviews',
    description: 'Pipeline completo de Procesamiento de Lenguaje Natural sobre 27.290 reseñas reales de Yelp (2005–2015). Análisis de sentimiento con TextBlob, Topic Modeling con LDA (5 temas: restaurantes, hotelería, retail, comida casual, cocinas especiales) y clustering semántico con K-Means sobre matriz TF-IDF. Insight clave: las reseñas más largas tienen sentimiento más negativo.',
    tags: ['Python', 'NLTK', 'TextBlob', 'TF-IDF', 'LDA', 'K-Means', 'WordCloud'],
    highlight: '27.290 reseñas',
    image: '/ds-nlp-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/NLP-Yelp',
    type: 'datascience' as const,
    accentColor: 'purple' as const,
  },
  {
    title: 'Pipeline de Preprocesamiento — Weather AUS',
    description: 'Pipeline robusto sobre el dataset climático de Australia de Kaggle. Imputación estratégica de valores faltantes, encoding de variables categóricas, feature engineering y estandarización con StandardScaler. Base sólida y reproducible lista para cualquier modelo de clasificación de lluvia.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering', 'Data Cleaning'],
    highlight: 'Dataset Kaggle',
    image: '/ds-weather-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/weatherAUS',
    type: 'datascience' as const,
    accentColor: 'teal' as const,
  },
  {
    title: 'House Price Prediction — Kaggle',
    description: 'Modelo de regresión sobre el dataset clásico de Kaggle con más de 80 features de propiedades residenciales. Pipeline completo: EDA, imputación de nulos, encoding, feature selection y modelado. Competencia clásica de regresión supervisada con variable objetivo SalePrice.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Regresión', 'Feature Engineering', 'EDA'],
    highlight: '80+ variables · 84% accuracy',
    image: '/ds-house-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/House-Price-Kaggle',
    type: 'datascience' as const,
    accentColor: 'green' as const,
  },
  {
    title: 'Spotify Music Analysis — EDA',
    description: 'Análisis exploratorio sobre 2.000 canciones de Spotify (1998–2020) con 59 géneros musicales. Correlación entre features de audio: danceability, energy, valence, tempo, instrumentalness. Visualizaciones de tendencias de popularidad por género y evolución temporal de las características musicales.',
    tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'EDA', 'Correlación'],
    highlight: '2.000 canciones · 59 géneros',
    image: '/ds-spotify-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/Spotify-EDA',
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
