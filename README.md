# Portfolio - Desarrollador Web & Data Scientist

Portfolio profesional que combina proyectos de desarrollo web y ciencia de datos en una sola plataforma.

## Tecnologías

- **Frontend**: Next.js 14, React, TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   ├── web-projects/       # Proyectos de desarrollo web
│   │   ├── data-science/       # Proyectos de data science
│   │   └── contact/            # Página de contacto
│   ├── components/             # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProjectCard.tsx
│   └── styles/                 # Estilos globales
├── public/                     # Assets estáticos
└── package.json
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

## Personalización

### 1. Actualizar información personal

**Footer y Header:**
- Edita `src/components/Footer.tsx` para cambiar tus enlaces sociales
- Edita `src/components/Header.tsx` para modificar el logo y navegación

### 2. Agregar tus proyectos

**Proyectos Web** (`src/app/web-projects/page.tsx`):
```typescript
const webProjects = [
  {
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    tags: ['React', 'Node.js'],
    githubUrl: 'https://github.com/tuusuario/proyecto',
    liveUrl: 'https://proyecto.com',
    type: 'web' as const,
  },
]
```

**Proyectos Data Science** (`src/app/data-science/page.tsx`):
```typescript
const dataScienceProjects = [
  {
    title: 'Tu Análisis',
    description: 'Descripción del análisis',
    tags: ['Python', 'Pandas'],
    githubUrl: 'https://github.com/tuusuario/analisis',
    type: 'datascience' as const,
  },
]
```

### 3. Personalizar colores

Edita `tailwind.config.ts` para cambiar la paleta de colores:
```typescript
colors: {
  primary: {
    // Tus colores personalizados
  }
}
```

### 4. Agregar imágenes a proyectos

Coloca las imágenes en `public/images/` y referéncialas:
```typescript
image: '/images/proyecto-1.png'
```

## Siguientes Pasos

1. **Implementar formulario de contacto**: Integrar EmailJS, Formspree o tu API preferida
2. **Agregar animaciones**: Implementar Framer Motion para transiciones
3. **Blog (opcional)**: Agregar sección de blog con MDX
4. **SEO**: Optimizar metadatos y agregar sitemap
5. **Analytics**: Integrar Google Analytics o alternativa

## Deployment

### Vercel (Recomendado para Next.js)

```bash
npm install -g vercel
vercel
```

### Otras opciones
- Netlify
- Railway
- AWS Amplify

## Comandos

- `npm run dev` - Modo desarrollo
- `npm run build` - Build para producción
- `npm run start` - Ejecutar build de producción
- `npm run lint` - Ejecutar linter

## Licencia

MIT
