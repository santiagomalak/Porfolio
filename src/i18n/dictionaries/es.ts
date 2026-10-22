// Source dictionary. Its shape *is* the Dictionary type: en.ts and pt.ts are
// typed against it, so a missing or extra key fails `tsc`, not production.
// Text inside {braces} is a placeholder filled by `format()`.

const es = {
  meta: {
    siteTitle: 'Santiago Aragon Malak — Hybrid Engineer: Data + Full Stack + IA',
    siteDescription:
      'Hybrid Engineer: Data + Full Stack + IA. Construyo pipelines en BigQuery + dbt, dashboards, aplicaciones React/Next.js y automatizaciones con n8n + LLMs. 967 atletas monitoreados en producción en Ivolution. Abierto a roles remotos.',
    ogDescription:
      'Modelo los datos, construyo la interfaz que los consume y automatizo el proceso completo. BigQuery · dbt · Next.js · n8n + LLMs.',
    ogTagline: 'SQL · Python · BigQuery · dbt · Next.js · n8n + LLMs',
    ogAvailability: 'Disponible para roles remotos',
    personDescription:
      'Hybrid Engineer: Data + Full Stack + IA. SQL, Python, BigQuery, dbt, React/Next.js y automatización con n8n + LLMs.',
    about: {
      title: 'Sobre mí',
      description:
        'Hybrid Engineer: Data + Full Stack + IA. Founder de Coding Click y ex Data Scientist / Analytics Engineer en Ivolution Sport Science (967 atletas monitoreados). Abierto a roles remotos.',
    },
    certifications: {
      title: 'Certificaciones & Formación',
      description:
        'Diplomatura universitaria en Data Science & ML (UNC, 250h), Google IT Support Professional, Google AI Essentials, Python Essentials Cisco, IBM SkillsBuild y más.',
    },
    contact: {
      title: 'Contacto',
      description:
        'Abierto a roles remotos junior / semi-senior: Analytics Engineer, Data Analyst, Data Scientist, Full Stack o AI/Automation Engineer. También proyectos freelance. Escribime.',
    },
    dashboards: {
      title: 'Dashboards interactivos',
      description:
        'Dashboards productivos con datos reales: E-Commerce Analytics sobre 100k+ órdenes Olist con dbt + PostgreSQL, Crypto Live Dashboard con WebSocket Binance y Argentina Macro Dashboard.',
    },
    dataScience: {
      title: 'Proyectos de Data',
      description:
        'Proyectos de datos: sistema de monitoreo para 967 atletas en Ivolution (BigQuery + dbt + Metabase), plataforma dbt sobre 100k+ órdenes Olist, machine learning con scikit-learn y segmentación de usuarios.',
    },
    ivolution: {
      title: 'Performance Monitoring System — Ivolution',
      description:
        'Caso de estudio: sistema de análisis de rendimiento para 967 atletas en 13 deportes con BigQuery, dbt y Metabase. Alertas dinámicas por percentil, operativo tras mi salida.',
    },
    olist: {
      title: 'E-Commerce Data Platform — Olist',
      description:
        'Caso de estudio: pipeline end-to-end sobre 100k+ órdenes reales de Olist con PostgreSQL y dbt. Segmentación RFM, retención por cohortes y tendencias de revenue en SQL.',
    },
    performanceMonitor: {
      title: 'Athlete Performance Monitor',
      description:
        'Dataset sintético de 6.500+ mediciones CMJ/IMTP generado con Python y sistema de alertas neuromusculares con umbrales dinámicos p25/p75. Privacy-first: 0 datos personales.',
    },
    webProjects: {
      title: 'Proyectos Full Stack',
      description:
        'Proyectos full stack: Instituto Coubertin (LMS a medida), Turnex (gestión de complejos deportivos), StackAdvisor (SaaS con IA), sitio de Coding Click y más. Next.js, TypeScript, Supabase y PostgreSQL.',
    },
  },

  common: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      webProjects: 'Full Stack',
      dataScience: 'Data',
      dashboards: 'Dashboards',
      certifications: 'Certificaciones',
      contact: 'Contacto',
    },
    roleShort: 'Hybrid Engineer',
    roleFull: 'Hybrid Engineer: Data + Full Stack + IA',
    cv: 'CV',
    downloadCv: 'Descargar CV',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
    toggleMenu: 'Abrir o cerrar menú',
    language: 'Idioma',
    rights: 'Todos los derechos reservados.',
    banner: {
      long: 'Disponible para roles remotos y proyectos freelance · Córdoba, Argentina',
      short: 'Open to work · Remoto',
      cta: 'Contactar',
    },
    backToDataScience: 'Volver a proyectos de Data',
    letsTalk: 'Hablemos de tu proyecto',
    workTogether: {
      title: '¿Trabajamos juntos?',
      body: 'Busco roles remotos junior / semi-senior como Analytics Engineer, Data Analyst, Data Scientist, Full Stack o AI/Automation Engineer. También tomo proyectos freelance de automatización, dashboards y desarrollo a medida.',
      cta: 'Iniciar conversación',
    },
  },

  projectCard: {
    code: 'Código',
    notebook: 'Notebook',
    viewDetail: 'Ver detalle',
    viewProject: 'Ver proyecto',
    showCode: 'Ver código',
    hideCode: 'Ocultar código',
  },

  home: {
    availability: 'Abierto a roles remotos y proyectos',
    heroSubtitle: 'Data + Full Stack + IA',
    intro:
      'Construyo sistemas de datos y software que se usan en producción: pipelines en BigQuery + dbt, dashboards, aplicaciones React/Next.js y automatizaciones con IA. Modelo los datos, construyo la interfaz que los consume y automatizo el proceso completo.',
    ctaProjects: 'Ver proyectos',
    ctaDashboards: 'Dashboards live',
    stats: {
      athletes: { label: 'Atletas monitoreados', sub: 'Data · Ivolution' },
      orders: { label: 'Órdenes modeladas', sub: 'dbt · Olist' },
      stacks: { label: 'Stacks evaluados', sub: 'StackAdvisor · IA' },
      measurements: { label: 'Mediciones', sub: 'BigQuery · Ivolution' },
    },
    featured: {
      title: 'Proyectos destacados',
      subtitle: 'Datos, producto y automatización — en empresa, con clientes y propios',
      ivolution: {
        label: 'Trabajo en empresa · 967 atletas · 13 deportes',
        company: 'Ivolution Sport Science · Data',
        description:
          'Diseñé desde cero el sistema de monitoreo de fatiga neuromuscular para 967 atletas de 13 deportes: modelos en BigQuery + dbt, dashboards en Metabase y umbrales dinámicos por percentil (p25/p75) que clasifican a cada atleta en FATIGADO / ATENCIÓN / SUPERCOMPENSACIÓN. Herramienta principal de decisión del staff, con soporte ES/EN/PT.',
      },
      coubertin: {
        label: 'Proyecto de cliente · LMS a medida',
        company: 'Coding Click · Full Stack',
        description:
          'Plataforma educativa completa para un instituto de formación deportiva: catálogo de cursos, pagos con Stripe e inscripción automática, aula virtual con progreso, foro por curso, evaluaciones con corrección y panel de administración. Auth y datos en Supabase con políticas RLS. En etapa final de testing y carga de contenido.',
      },
      turnex: {
        label: 'Sistema de gestión · Demo funcional',
        company: 'Coding Click · Full Stack + SQL',
        description:
          'Sistema de gestión para complejos deportivos: socios y cuentas corrientes, cuotas, reservas de canchas, turnos fijos, control de acceso con QR, cobros, caja diaria y portal del socio. PostgreSQL con SQL directo y migraciones versionadas, roles por perfil, tareas diarias con cron y tests unitarios + E2E.',
      },
      stackadvisor: {
        label: 'SaaS propia · En producción',
        company: 'Proyecto propio · Full Stack + IA',
        description:
          'Cuestionario que evalúa 35 combinaciones de stacks y recomienda el óptimo con justificación, roadmap de 12 semanas y estimador de costos. El Blueprint premium usa Gemini para generar arquitectura, esquema de base de datos y plan de desarrollo a medida del proyecto.',
      },
      viewCase: 'Ver caso',
      viewProject: 'Ver proyecto',
      viewCode: 'Ver código',
      viewAllFullStack: 'Todos los proyectos Full Stack',
      viewAllData: 'Todos los proyectos de Data',
    },
    live: {
      kicker: 'En vivo',
      title: 'Dashboards interactivos',
      subtitle: 'Datos reales, deployados en producción — abrís y funcionan.',
      viewAll: 'Ver todos',
      ecommerceSub: 'Olist Brazil (PT-BR) · 100k+ órdenes · dbt + PostgreSQL',
      cryptoSub: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
      argentinaSub: 'Dólar · Inflación · Riesgo País — datos en tiempo real',
    },
    specialties: {
      title: 'Áreas de especialización',
      analytics: {
        title: 'Data & Analytics',
        body: 'Datos dispersos → modelos limpios y dashboards que se usan para decidir.',
        items: ['SQL · BigQuery · dbt · PostgreSQL', 'Metabase · Power BI', 'Python · pandas · scikit-learn', 'Alertas dinámicas · Percentiles'],
      },
      web: {
        title: 'Full Stack',
        body: 'Ideas de producto → apps completas, del modelo de datos al deploy.',
        items: ['React · Next.js · TypeScript', 'Node.js · APIs REST', 'Supabase · PostgreSQL', 'Tailwind CSS · Docker · Vercel'],
      },
      automation: {
        title: 'IA & Automatización',
        body: 'Procesos manuales → flujos automáticos con LLMs integrados.',
        items: ['n8n · Make · Zapier', 'Claude API · Gemini · Groq', 'Scraping · Scoring con IA', 'Telegram API · Alertas'],
      },
    },
    aboutMe: 'Sobre mí',
  },

  about: {
    badge: 'Disponible · Hybrid Engineer: Data + Full Stack + IA',
    greeting: 'Hola, soy',
    intro:
      'Construyo sistemas de datos y software que se usan en producción. Perfil híbrido: modelo los datos, construyo la interfaz que los consume y automatizo el proceso completo — con SQL, Python, BigQuery y dbt del lado de datos, React/Next.js y TypeScript del lado de producto, y n8n + LLMs para automatizar.',
    contactMe: 'Contactarme',
    experience: 'Experiencia',
    jobs: {
      codingClick: {
        role: 'Founder & Hybrid Engineer — Full Stack, Data & Automation',
        company: 'Coding Click · Profesional independiente',
        period: 'Sep 2025 — Actualidad',
        location: 'Córdoba, Argentina · Híbrido',
        summary: 'Desarrollo de software end-to-end para PYMEs: web, sistemas a medida, data y automatización.',
        bullets: [
          'Diseño y desarrollo sitios, e-commerce y sistemas a medida con React/Next.js, Node.js y PostgreSQL/Supabase — desde landing pages hasta portales internos de gestión.',
          'Construí la plataforma LMS a medida del Instituto Coubertin con Next.js, Supabase y Vercel, con documentación de producto completa; en etapa final de testing y carga de contenido.',
          'Implemento automatizaciones y reporting de datos con n8n, Make y APIs REST: sincronización entre sistemas, alertas automáticas y dashboards de seguimiento que reemplazan procesos manuales.',
          'Manejo el ciclo completo de cada proyecto: relevamiento técnico, propuesta, desarrollo, despliegue y mantenimiento.',
        ],
      },
      ivolution: {
        role: 'Data Scientist / Analytics Engineer',
        company: 'Ivolution Sport Science · Contrato temporal',
        period: 'Abr 2025 — Mar 2026',
        location: 'Argentina · Remoto',
        summary: 'Diseñé e implementé desde cero el sistema de análisis de rendimiento deportivo de la organización.',
        bullets: [
          'Construí el sistema de monitoreo de fatiga neuromuscular para 967 atletas de 13 deportes con BigQuery, dbt y Metabase, usado como herramienta principal de decisión del staff.',
          'Implementé umbrales dinámicos por percentil (p25 fatiga / p75 supercompensación) que clasifican automáticamente a cada atleta en FATIGADO / ATENCIÓN / SUPERCOMPENSACIÓN.',
          'Migré los modelos de CMJ Rebound de Metabase a dbt, con surrogate keys y deduplicación de atletas entre los entornos de producción y desarrollo.',
          'Desarrollé el framework de dashboard Return to Play y la versión multilingüe (ES/EN/PT) de los dashboards; automaticé flujos del sistema con n8n.',
        ],
      },
    },
    building: 'Qué estoy construyendo',
    stackadvisor: {
      kind: 'SaaS · En producción',
      body: 'SaaS propia que resuelve la parálisis de decisión tecnológica: un cuestionario evalúa 35 combinaciones de stacks y devuelve el óptimo con justificación, roadmap de 12 semanas y estimador de costos. El Blueprint premium genera con Gemini la arquitectura, el esquema de base de datos y el plan de desarrollo del proyecto.',
      visit: 'Visitar StackAdvisor',
    },
    jobHunting: {
      kind: 'IA & Automatización · Uso personal',
      body: 'Pipeline en n8n que scrapea vacantes, las puntúa con IA según mi perfil, pide aprobación por Telegram, adapta el CV a cada oferta y registra todo en Google Sheets — porque buscar trabajo también se puede automatizar.',
    },
    stack: 'Stack tecnológico',
    stackCategories: {
      data: 'Datos',
      fullstack: 'Full Stack',
      ai: 'IA & Automatización',
      security: 'Ciberseguridad',
    },
    securitySkills: ['Seguridad en la nube', 'Redes', 'Gestión de incidentes', 'OSINT · Forense'],
    education: 'Formación',
    educationList: {
      upso: {
        title: 'Tecnicatura en Tecnologías de la Programación',
        institution: 'UPSO · Modalidad a distancia',
        period: 'En curso · título previsto a inicios de 2027',
      },
      dsml: {
        title: 'Diplomatura en Data Science & Machine Learning',
        institution: 'Universidad Nacional de Córdoba · ICARO',
        period: '2025',
      },
      cyber: {
        title: 'Diplomatura en Ciberseguridad',
        institution: 'Universidad Nacional de Córdoba (FCEFyN)',
        period: '2025',
      },
    },
    allCertifications: 'Ver todas las certificaciones',
    languages: 'Idiomas',
    languageList: {
      es: { name: 'Español', level: 'Nativo', detail: 'Lengua materna' },
      en: {
        name: 'Inglés',
        level: 'Lectura técnica',
        detail: 'Documentación y lectura técnica fluida · conversación en desarrollo',
      },
      pt: { name: 'Portugués', level: 'C1 Avanzado', detail: 'Conversación fluida · Documentación técnica' },
    },
    philosophy:
      '"Los mejores productos nacen en la intersección de datos e ingeniería. Los datos te dicen qué construir. El código te deja construirlo."',
    philosophyCaption: '— Mi filosofía de trabajo',
    seeProjects: 'Ver mis proyectos',
  },

  dataScience: {
    titleA: 'Proyectos de',
    titleB: 'Data & Analytics',
    intro:
      'Analytics engineering, machine learning y análisis estadístico — del dato crudo al modelo limpio y al insight accionable.',
    githubTitle: 'Jupyter Notebooks & más análisis',
    githubBody: 'Explorá todos mis notebooks y proyectos de análisis de datos en GitHub.',
    githubCta: 'Ver en GitHub',
  },

  webProjects: {
    titleA: 'Proyectos',
    titleB: 'Full Stack',
    intro:
      'Del modelo de datos al deploy: sistemas a medida para clientes, productos propios con IA y apps en tiempo real. Next.js, TypeScript, PostgreSQL/Supabase y LLMs.',
  },

  certifications: {
    titleA: 'Certificaciones',
    titleB: '& Formación',
    intro:
      'Formación continua en Data Science, programación, IA y desarrollo web — de Google, IBM, Cisco y universidades internacionales.',
    university: 'Formación Universitaria',
    universityBadge: 'Universidad Nacional de Córdoba',
    international: 'Certificaciones internacionales',
    credlyTitle: 'Ver todas mis badges verificadas en Credly',
    credlyBody: 'Google IT Support · IBM Web Dev · y más badges verificables',
    viewCertificate: 'Ver certificado',
    verify: 'Verificar',
    viewBadge: 'Ver badge en Credly',
    universities: {
      dsml: {
        name: 'Diplomatura en Data Science & Machine Learning',
        date: 'Mayo 2025',
        hours: '250 horas · CRE 10',
        description:
          'Diplomatura universitaria de formación continua dictada por ICARO Asociación Civil en conjunto con la Secretaría de Extensión de la Facultad de Ciencias Exactas, Físicas y Naturales de la UNC.',
        verifyLabel: 'Validar en UNC (código: DS240502)',
      },
      cyber: {
        name: 'Diplomado en Ciberseguridad',
        date: 'Septiembre 2025',
        hours: '200 horas',
        description:
          'Diplomatura dictada por la Facultad de Ciencias Exactas, Físicas y Naturales de la UNC en conjunto con Mundos E y la Universidad San Ignacio de Loyola. Fundamentos y práctica en seguridad informática.',
        verifyLabel: 'Ver certificado',
      },
    },
    categories: {
      google: 'Google',
      programming: 'Programación',
      ibm: 'IBM',
      ai: 'Inteligencia Artificial',
      design: 'Diseño & UX',
    },
    certs: {
      itSupport: { date: 'Jun 2025', detail: '5 cursos — Redes, SO, Administración, Seguridad' },
      aiEssentials: { date: 'Ago 2024', detail: 'Fundamentos de IA aplicados al trabajo' },
      python1: { date: 'Oct 2024', detail: 'Fundamentos de Python 3, algoritmos, estructuras' },
      python2: { date: 'Oct 2024', detail: 'OOP, módulos, aplicaciones avanzadas en Python' },
      jhu: { date: 'Ago 2024', detail: 'Desarrollo web moderno — JHU Whiting School of Engineering' },
      ibmWeb: { date: 'Oct 2024', detail: 'Fundamentos de desarrollo web — badge verificable en Credly' },
      elementsOfAi: { date: 'Feb 2025', detail: '2 créditos ECTS — curso oficial de la Universidad de Helsinki' },
      ux: { date: 'Sep 2024', detail: '30 horas — Principios de experiencia de usuario' },
      webDesign: { date: 'Ago 2024', detail: '30 horas — Diseño y maquetación web' },
    },
  },

  contact: {
    title: 'Contacto',
    intro: '¿Tenés un rol o un proyecto en mente? Escribime y lo conversamos.',
    info: 'Información de contacto',
    availabilityTitle: 'Disponibilidad',
    availabilityBody:
      'Disponible para roles remotos (junior / semi-senior) y proyectos freelance. Respondo en 24-48 horas.',
    formTitle: 'Mandame un mensaje',
    name: 'Nombre',
    email: 'Email',
    subject: 'Asunto',
    subjectPlaceholder: 'Elegí un asunto',
    subjects: {
      job: 'Oportunidad laboral / Rol remoto',
      fullstack: 'Proyecto Full Stack / Sistema a medida',
      data: 'Proyecto de Data / Dashboards',
      ai: 'Automatización con IA',
      other: 'Otro',
    },
    message: 'Mensaje',
    honeypot: 'Dejar en blanco',
    send: 'Enviar mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje enviado! Te respondo pronto.',
    errors: {
      rate_limited: 'Demasiados intentos. Esperá un momento y volvé a probar.',
      too_large: 'El mensaje es demasiado largo.',
      missing_fields: 'Todos los campos son obligatorios.',
      invalid_email: 'El formato del email no es válido.',
      generic: 'No se pudo enviar el mensaje. Probá de nuevo o escribime por email.',
    },
  },

  dashboards: {
    kicker: 'Proyectos en vivo',
    title: 'Dashboards interactivos',
    intro:
      'Proyectos productivos con datos reales — desde pipelines de datos hasta streams en tiempo real. Cada uno deployado y funcional.',
    items: {
      ecommerce: {
        subtitle: 'Olist Brazil (PT-BR) · 100k+ órdenes · dbt + PostgreSQL',
        description:
          'Pipeline de datos end-to-end con segmentación RFM, cohort retention, revenue trends y seller performance. Datos reales de 93k clientes únicos del mercado brasileño. Interfaz en inglés, español y portugués.',
      },
      crypto: {
        subtitle: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
        description:
          'Dashboard en tiempo real con velas TradingView, volumen, 6 timeframes y detección de anomalías por z-score. Feed de trades en vivo.',
      },
      argentina: {
        subtitle: 'Dólar · Inflación · Riesgo País — datos en tiempo real',
        description:
          'Tipos de cambio en vivo (oficial, blue, MEP, CCL, cripto, tarjeta), brecha cambiaria, evolución histórica, inflación mensual e interanual (INDEC) y riesgo país EMBI+. Polling cada 60s.',
      },
    },
    code: 'Código',
    open: 'Abrir',
    openDashboard: 'Abrir dashboard',
    bestOnDesktop: 'Mejor experiencia en desktop',
    loading: 'Cargando {title}...',
    otherProjects: 'Otros proyectos',
    viewRepo: 'Ver repo',
    others: {
      platform: {
        title: 'E-Commerce Data Platform',
        desc: 'Pipeline dbt + PostgreSQL con 4 capas de modelos sobre 100k órdenes Olist',
      },
      argentinaRepo: {
        title: 'Argentina Macro — Repo',
        desc: 'Código fuente del dashboard macroeconómico: dólar, inflación INDEC y riesgo país.',
      },
    },
  },

  ivolution: {
    badge: 'Trabajo real · Abr 2025 — Mar 2026',
    introA: 'Sistema de análisis de rendimiento diseñado de cero para',
    introStrong: '967 atletas en 13 deportes',
    introB:
      '— fútbol, rugby, atletismo, hockey, natación, basketball y más. Construido con SQL, BigQuery, dbt y Metabase. El sistema continúa operativo tras mi salida.',
    multilingualTag: 'ES/EN/PT',
    stats: {
      athletes: 'atletas monitoreados',
      sports: 'deportes cubiertos',
      measurements: 'mediciones registradas',
      active: 'activo post-salida',
    },
    activeValue: '1+ año',
    screenshotsTitle: 'Capturas del sistema',
    screenshotsHint: 'Hacé click en cualquier imagen para verla en pantalla completa.',
    close: 'Cerrar',
    previous: 'Anterior',
    next: 'Siguiente',
    enlarge: 'Ampliar: {title}',
    screenshots: {
      dashboard: {
        title: 'Dashboard principal — Dinamómetro vs IMTP',
        description:
          'KPIs en tiempo real: MaxForce, RFDA50, RFDA250 y TimMaxForce. Comparativa entre dinamómetro e IMTP con filtros por fecha, atleta, tipo de ejercicio e institución.',
      },
      forceVelocity: {
        title: 'Perfil Fuerza-Velocidad',
        description:
          'Correlaciones entre métricas: Velocidad Max vs Fuerza Max, Carga vs Impulso Max, Velocidad vs Distancia Max, 1RM vs deporte. Análisis multidimensional de rendimiento.',
      },
      hip: {
        title: 'Reporte de Estabilidad de Cadera',
        description:
          'Análisis de ratios funcionales mediante el Push Pull simple. Histograma de diferencia altura CMIR/DJ y serie temporal para seguimiento longitudinal.',
      },
      comparisons: {
        title: 'v2 CMJ - IMTP II — Media Móvil vs Última Evaluación',
        description:
          'Dashboard individual con media móvil de 5 evaluaciones y umbrales dinámicos de supercompensación/fatiga. Muestra RFD de frenado (CMJ) y RFD en 100ms (IMTP) con serie histórica completa y estado del atleta en tiempo real.',
      },
      fatigue: {
        title: 'ASH Test - CMJ Bilateral — Control de Fatiga Neuromuscular',
        description:
          'Monitoreo de fatiga con ASH "I" Test (hombro) y CMJ Bilateral (miembros inferiores). Tendencia de fuerza pico izquierda/derecha con comparativa vs día anterior y serie histórica.',
      },
      athletes: {
        title: 'Comparaciones individuales — Dashboard Comparativo',
        description:
          'Vista side-by-side entre dos atletas con gauges para CMJ (Altura de Salto), IMTP (Fuerza Pico) y Drop Jump (RSI). Permite comparar rendimiento entre atletas de la misma institución en tiempo real.',
      },
    },
  },

  olist: {
    badge: 'Proyecto propio · Analytics Engineering · End-to-end',
    subtitle: 'Olist Brazil — Mercado real',
    introA: 'Pipeline de datos end-to-end sobre',
    introStrong: '100.000+ órdenes reales',
    introB:
      'del e-commerce brasileño. PostgreSQL + dbt con 4 capas de modelos, RFM segmentation, cohort retention y revenue trends en SQL puro. CI/CD con GitHub Actions y dashboard deployado en producción.',
    stats: { orders: 'órdenes analizadas', layers: 'capas dbt', marts: 'marts analíticos', ci: 'GitHub Actions' },
    architectureTitle: 'Arquitectura del pipeline',
    architectureIntro: 'Flujo completo desde datos crudos de Kaggle hasta el dashboard en producción.',
    nodes: {
      raw: 'Kaggle · Olist Brazil Dataset · 9 tablas relacionales',
      postgres: 'Base de datos origen · Docker local',
      intermediate: 'int_orders_enriched · int_seller_performance · lógica de negocio',
    },
    modelsTitle: 'Estructura de modelos dbt',
    modelsIntro: 'Cada capa tiene una responsabilidad clara. Staging no tiene joins; intermediate no expone al dashboard.',
    layers: {
      staging: 'Renombrado, casteo de tipos, deduplicación. Fuente única de verdad.',
      intermediate: 'Joins y lógica de negocio. No expuesto al dashboard.',
      marts: 'Tablas analíticas finales. Consumidas por el dashboard.',
    },
    sqlTitle: 'SQL — Modelos clave',
    sqlIntro: 'Los tres marts analíticos del proyecto. Hacé click para expandir el código.',
    snippets: {
      rfm: 'Segmentación de clientes por Recencia, Frecuencia y Valor monetario. NTILE(5) crea quintiles para scoring, luego lógica de segmentos sobre el score combinado.',
      cohort:
        'Retención mensual de cohortes de clientes. Usa FIRST_VALUE para anclar el tamaño inicial de cada cohorte y calcular el porcentaje de retención en cada mes posterior.',
      revenue: 'Tendencias de revenue mensual por estado y categoría. SUM running total con ROWS BETWEEN y cálculo de delta MoM via LAG.',
    },
    liveDashboard: 'Ver dashboard en vivo',
    githubCode: 'Código en GitHub',
  },

  performanceMonitor: {
    badge: 'Demo · Datos sintéticos · Python + SQL',
    subtitle: 'CMJ · IMTP · Sistema de alertas neuromusculares',
    introA: 'Dataset sintético de',
    introStrong: '~6.500 mediciones',
    introB:
      'generado con Python — distribuciones calibradas con normas publicadas en literatura de sport science. Encima: sistema de alertas con umbrales dinámicos por percentil (p25/p75) y seguimiento longitudinal con media móvil de 5 evaluaciones.',
    whyTitle: '¿Por qué datos sintéticos?',
    whyBody:
      'Los datos reales de atletas contienen información de salud sensible. En lugar de omitirlos o simplificarlos, generé datos ficticios con la misma estructura y distribuciones estadísticas — IDs hasheados desde el origen, ningún nombre real almacenado. La metodología es idéntica al sistema real construido en Ivolution.',
    stats: { athletes: 'atletas generados', sports: 'deportes', measurements: 'mediciones', months: 'meses de datos' },
    measurementsValue: '6.500+',
    pipelineTitle: 'Pipeline',
    pipelineIntro: 'Desde generación hasta alertas en producción.',
    nodes: {
      generate: 'Faker · numpy · hashlib — 150 atletas, 6.500+ mediciones, 0 PII',
      csv: 'Salida limpia · athlete_id hasheado · listo para cargar',
      alerts: 'Umbrales p25/p75 dinámicos · SUPERCOMPENSACIÓN / ATENCIÓN / FATIGADO',
      trend: 'Media móvil 5 evaluaciones · % cambio desde baseline',
      dashboardLabel: 'Dashboard de monitoreo',
      dashboard: 'Estado neuromuscular en tiempo real · vista por atleta y por deporte',
    },
    alertsTitle: 'Lógica de alertas',
    alertsIntro: 'Ventana dinámica de 90 días por atleta y tipo de ejercicio.',
    states: {
      super: {
        label: 'SUPERCOMPENSACIÓN',
        condition: 'métrica ≥ p75',
        desc: 'El atleta supera su rango habitual. Pico de rendimiento o sobreentrenamiento positivo.',
      },
      attention: { label: 'ATENCIÓN', condition: 'p25 < métrica < p75', desc: 'Dentro del rango normal. Monitorear tendencia.' },
      fatigued: {
        label: 'FATIGADO',
        condition: 'métrica ≤ p25',
        desc: 'Caída por debajo del cuartil inferior. Revisar carga de entrenamiento.',
      },
    },
    codeTitle: 'Código',
    codeIntro: 'Generación del dataset y los dos modelos SQL principales.',
    snippets: {
      generate: {
        title: 'Generación del dataset',
        description:
          'Faker genera identidades ficticias que se hashean inmediatamente — ningún nombre real llega al CSV. numpy simula distribuciones CMJ/IMTP calibradas con normas publicadas en literatura de sport science.',
      },
      alerts: {
        title: 'Sistema de alertas — Umbrales dinámicos',
        description:
          'PERCENTILE_CONT calcula p25/p75 por atleta y tipo de ejercicio sobre los últimos 90 días. La última medición se compara con esa ventana dinámica para clasificar el estado neuromuscular.',
      },
      rolling: {
        title: 'Tendencia individual — Media móvil 5 evaluaciones',
        description:
          'Seguimiento longitudinal por atleta. Media móvil de 5 evaluaciones para suavizar variabilidad del día. Detecta tendencias de mejora o deterioro sostenido.',
      },
    },
    scriptOnGithub: 'Ver script en GitHub',
    realSystem: 'Ver el sistema real — Ivolution',
  },

  notFound: {
    title: 'Esta página no existe... o la borré yo sin querer',
    subtitle: 'El modelo predijo que estarías aquí — pero se equivocó.',
    meta: 'Error 404 · Ruta no encontrada · Accuracy del modelo: 0%',
    searching: 'pagina-que-buscas',
    prediction: 'Predicción',
    confidence: 'Confianza',
    comment: '# no muy útil',
    home: 'Volver al inicio',
    projects: 'Ver proyectos',
  },
}

export type Dictionary = typeof es
export default es
