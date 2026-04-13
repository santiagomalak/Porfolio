# Santiago Malak — Portfolio

**Data Scientist & Full-Stack Developer**

Portfolio profesional con proyectos de desarrollo web, dashboards interactivos y ciencia de datos.

Live: [santiagomalak.is-a.dev](https://santiagomalak.is-a.dev)

---

## Stack

| Categoria | Tecnologias |
|-----------|-------------|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Animaciones | Framer Motion |
| Email | Resend |
| Deploy | Vercel |

## Paginas

| Ruta | Descripcion |
|------|-------------|
| `/` | Hero con animaciones, live projects, tech stack pills |
| `/about` | Bio, experiencia en Ivolution, stack tecnologico, filosofia |
| `/web-projects` | StackAdvisor, Ivolution, Crypto Dashboard, Portfolio |
| `/dashboards` | Argentina Macro, Crypto Live, E-Commerce Analytics (iframes interactivos) |
| `/data-science` | IBM HR Analytics, Marketing Segmentation, Weather AUS |
| `/certifications` | Certificaciones y cursos |
| `/contact` | Formulario funcional con Resend, rate limiting y proteccion XSS |

## Proyectos live

| Proyecto | Stack | URL |
|----------|-------|-----|
| Argentina Macro Dashboard | Next.js, dolarapi, INDEC, Recharts | [argentina-macro.vercel.app](https://argentina-macro.vercel.app) |
| Crypto Live Dashboard | Next.js, WebSocket, Binance API, lightweight-charts | [crypto-dashboard-five-dun.vercel.app](https://crypto-dashboard-five-dun.vercel.app) |
| E-Commerce Analytics | Next.js, PostgreSQL, dbt, Recharts | [ecommerce-dashboard-puce.vercel.app](https://ecommerce-dashboard-puce.vercel.app) |
| StackAdvisor | Next.js, OpenAI | En portfolio |

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

- Animaciones con Framer Motion (scroll-reveal, hero entrance secuencial)
- Formulario de contacto funcional con rate limiting (5 req/IP/hora) y sanitizacion XSS
- Dashboards con iframe embed + fallback mobile con boton externo
- Open Graph + Twitter card metadata completo en todas las paginas
- Favicon SVG con gradiente personalizado
- Sitemap automatico en `/sitemap.xml`
- Totalmente responsivo (mobile-first)

---

Construido por [Santiago Malak](https://linkedin.com/in/aragonmalak) · [santiagoaragonmalak@gmail.com](mailto:santiagoaragonmalak@gmail.com)
