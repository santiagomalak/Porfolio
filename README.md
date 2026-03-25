# Santiago Aragon — Portfolio

**Data Scientist & Full-Stack Developer**

Portfolio profesional que combina proyectos de desarrollo web y ciencia de datos.

🌐 **Live:** [santiagoaragon.vercel.app](https://santiagoaragon.vercel.app)

---

## Stack

| Categoría | Tecnologías |
|-----------|-------------|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Animaciones | Framer Motion |
| Email | Resend |
| Deploy | Vercel |

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Hero con animaciones, badge de disponibilidad y tech stack pills |
| `/about` | Bio, experiencia en Ivolution, stack tecnológico, filosofía |
| `/web-projects` | StackAdvisor, Wayra Huasi, Portfolio |
| `/data-science` | IBM HR Analytics, Marketing Segmentation, Weather AUS |
| `/contact` | Formulario funcional con Resend, rate limiting y XSS protection |

## Correr localmente

```bash
git clone https://github.com/santiagomalak/Porfolio.git
cd Porfolio
npm install
```

Crear `.env.local`:
```
RESEND_API_KEY=tu_api_key
```

```bash
npm run dev
# → http://localhost:3000
```

## Features

- ✅ Animaciones con Framer Motion (scroll-reveal, hero entrance secuencial)
- ✅ Formulario de contacto funcional con rate limiting (5 req/IP/hora) y sanitización XSS
- ✅ Open Graph + Twitter card metadata completo
- ✅ Favicon SVG con gradiente personalizado
- ✅ Sitemap automático en `/sitemap.xml`
- ✅ Totalmente responsivo (mobile-first)
- ✅ Build estático optimizado (Next.js static generation)

---

Construido por [Santiago Aragon](https://linkedin.com/in/aragonmalak) · [santiagoaragonmalak@gmail.com](mailto:santiagoaragonmalak@gmail.com)
