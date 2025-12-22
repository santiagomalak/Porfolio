import ProjectCard from '@/components/ProjectCard'

const dataScienceProjects = [
  {
    title: 'IBM HR Analytics',
    description: 'Análisis completo de deserción y rendimiento de empleados usando Random Forest, K-Means clustering y PCA para identificar factores clave que afectan la rotación laboral.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Random Forest', 'PCA'],
    githubUrl: 'https://github.com/santiagomalak/IBM-Proyect',
    type: 'datascience' as const,
  },
  {
    title: 'Segmentación de Usuarios - Marketing',
    description: 'Proyecto de aprendizaje no supervisado para segmentar usuarios de campañas de mailing. Implementa K-Means, análisis de silueta y PCA para optimizar estrategias de marketing personalizadas.',
    tags: ['Python', 'Scikit-learn', 'K-Means', 'PCA', 'Clustering'],
    githubUrl: 'https://github.com/santiagomalak/Datos-de-Mailing',
    type: 'datascience' as const,
  },
  {
    title: 'Preprocesamiento de Datos - Weather AUS',
    description: 'Proyecto educativo enfocado en técnicas de preprocesamiento y limpieza de datos de clima australiano, con énfasis en imputación de valores faltantes usando Scikit-learn.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Data Cleaning'],
    githubUrl: 'https://github.com/santiagomalak/weatherAUS',
    type: 'datascience' as const,
  },
]

export default function DataScience() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary-500">Proyectos de</span>{' '}
            <span className="text-primary-700">Data Science</span>
          </h1>
          <p className="text-xl text-gray-600">
            Soluciones basadas en datos utilizando machine learning, análisis estadístico y visualización.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataScienceProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Sección adicional para notebooks/análisis */}
        <div className="mt-16 bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Jupyter Notebooks & Análisis</h2>
          <p className="text-gray-600 mb-4">
            Explora mis análisis detallados y notebooks interactivos donde profundizo
            en diferentes técnicas de ciencia de datos.
          </p>
          <a
            href="https://github.com/santiagomalak?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            Ver todos mis repositorios en GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}
