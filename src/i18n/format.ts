// Safe to import from client components: no dictionaries in this module.

/** format('Cargando {title}...', { title: 'X' }) → 'Cargando X...' */
export function format(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => (key in vars ? String(vars[key]) : `{${key}}`))
}
