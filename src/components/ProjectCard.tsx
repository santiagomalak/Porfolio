import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  type: 'web' | 'datascience'
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  type
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-primary-100 to-blue-100 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary-300">
            {type === 'web' ? '🌐' : '📊'}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Código</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Ver proyecto</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
