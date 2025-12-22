import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background-alt">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            © {currentYear} Santiago Aragon Malak. Todos los derechos reservados.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/santiagomalak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aragonmalak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:santiagoaragonmalak@gmail.com"
              className="text-gray-600 hover:text-primary-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
