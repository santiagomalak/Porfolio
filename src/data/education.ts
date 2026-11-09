/**
 * Single source of truth for formal education: the home "Studies" section,
 * About and /certifications all read from here. Translated text (title,
 * institution, period, description…) lives in the dictionary under
 * `education.items[id]`.
 */
export type EducationId = 'upso' | 'dsml' | 'cyber'

export interface Education {
  id: EducationId
  /** Public link to the certificate or its validator. Missing = not issued yet. */
  certificateUrl?: string
  /** Official resolution / record number, shown on /certifications. */
  resolution?: string
  /** Card gradient, border and badge classes. */
  color: string
  border: string
  tag: string
}

// Same order as the CV: the degree in progress first, then the diplomas.
export const education: Education[] = [
  {
    id: 'upso',
    color: 'from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20',
    border: 'border-emerald-200 dark:border-emerald-800/50',
    tag: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400',
  },
  {
    id: 'dsml',
    certificateUrl: 'https://fcefyn.unc.edu.ar/facultad/secretarias/extension/area-de-formacion-continua/cursos-y-diplomaturas/validador-de-certificados/',
    resolution: 'RD-2025-149-E-UNC-DEC#FCEFYN',
    color: 'from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20',
    border: 'border-primary-200 dark:border-primary-800/50',
    tag: 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400',
  },
  {
    id: 'cyber',
    certificateUrl: 'https://certificados.mundose.com/?i=bW9kZT1QREYmcmVjb3JkPTM5eDM1MTMwNTk=',
    color: 'from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20',
    border: 'border-red-200 dark:border-red-800/50',
    tag: 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400',
  },
]
