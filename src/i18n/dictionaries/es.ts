// Source dictionary. Its shape *is* the Dictionary type: en.ts and pt.ts are
// typed against it, so a missing or extra key fails `tsc`, not production.
// Text inside {braces} is a placeholder filled by `format()`.

const es = {
  meta: {
    siteTitle: 'Santiago Aragon Malak — Analista de Datos',
    siteDescription:
      'Analista de datos. Armo dashboards para la toma de decisiones y trabajo con Python y SQL. En Ivolution Sport Science trabajé con datos de 967 deportistas. Busco puesto junior / semi-senior, remoto o híbrido en Córdoba Capital.',
    ogDescription:
      'Dashboards para tomar decisiones, Python y SQL. También desarrollo full stack y automatización con IA.',
    ogTagline: 'SQL · Python · dbt · Metabase · Power BI',
    ogAvailability: 'Busco puesto en datos · Remoto',
    personDescription:
      'Analista de datos: SQL, Python, dbt y dashboards en Metabase y Power BI. También desarrollo full stack y automatización con IA.',
    about: {
      title: 'Sobre mí',
      description:
        'Analista de datos. Cofundador de Coding Click y ex Data Analytics Engineer en Ivolution Sport Science. Busco puesto en datos, remoto o híbrido en Córdoba Capital.',
    },
    certifications: {
      title: 'Certificaciones & Formación',
      description:
        'Diplomatura universitaria en Data Science & ML (UNC, 250h), Google IT Support Professional, Google AI Essentials, Python Essentials Cisco, IBM SkillsBuild y más.',
    },
    contact: {
      title: 'Contacto',
      description:
        'Busco puesto de Analista de Datos o Analytics Engineer (junior / semi-senior), remoto o presencial / híbrido en Córdoba Capital. También tomo proyectos freelance. Escribime.',
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
      title: 'Tableros de rendimiento deportivo — Ivolution',
      description:
        'Caso de estudio: los dashboards que armé en Ivolution Sport Science para seguir a 967 deportistas de 13 disciplinas, con dbt y Metabase.',
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
      dataScience: 'Datos',
      dashboards: 'Dashboards',
      certifications: 'Certificaciones',
      contact: 'Contacto',
    },
    roleShort: 'Analista de Datos',
    cv: 'CV',
    downloadCv: 'Descargar CV',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
    toggleMenu: 'Abrir o cerrar menú',
    language: 'Idioma',
    rights: 'Todos los derechos reservados.',
    banner: {
      long: 'Busco puesto como Analista de Datos · Remoto o híbrido en Córdoba Capital',
      short: 'Disponible · Remoto',
      cta: 'Contactar',
    },
    backToDataScience: 'Volver a proyectos de datos',
    letsTalk: 'Hablemos de tu proyecto',
    workTogether: {
      title: '¿Hablamos?',
      body: 'Busco mi próximo puesto en datos (junior / semi-senior). Remoto desde cualquier lugar, o presencial / híbrido en Córdoba Capital.',
      cta: 'Escribime',
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
    intro:
      'Tengo experiencia armando dashboards visuales para la toma de decisiones y trabajo mucho con Python y SQL. También tengo base como desarrollador full stack y uso IA para automatizar tareas. Busco un puesto donde pueda aportar y seguir aprendiendo.',
    ctaProjects: 'Ver proyectos',
    heroImageAlt: 'Dashboard de Ivolution con métricas de fuerza de los deportistas, filtros por fecha, deportista y tipo de ejercicio',
    heroCaption: 'Uno de los dashboards que armé en Ivolution Sport Science para que el equipo técnico siguiera el rendimiento de cada deportista.',
    statsCaption: 'Lo que manejé en mi trabajo en Ivolution Sport Science',
    stats: {
      athletes: 'deportistas',
      sports: 'disciplinas deportivas',
      measurements: 'mediciones analizadas',
    },
    featured: {
      title: 'Proyectos destacados',
      subtitle: 'Datos, desarrollo web e IA: trabajo en empresa, para clientes y proyectos propios',
      ivolution: {
        title: 'Tableros de rendimiento deportivo',
        label: 'Trabajo en empresa · 967 deportistas · 13 disciplinas',
        company: 'Ivolution Sport Science · Datos',
        description:
          'Armé los dashboards que usaban entrenadores y preparadores físicos para seguir a 967 deportistas de 13 disciplinas. Ordené los datos de las evaluaciones con dbt y los mostré en Metabase, con avisos que marcan de un vistazo quién está fatigado, quién está normal y quién rinde por encima de lo habitual.',
      },
      coubertin: {
        title: 'Instituto Coubertin — Plataforma de cursos',
        label: 'Proyecto de cliente · En producción',
        company: 'Coding Click · Desarrollo web',
        description:
          'Plataforma de cursos online para un instituto de formación deportiva: los alumnos compran un curso, cursan, rinden evaluaciones y participan en foros, y el instituto administra todo desde un panel. Está en producción y yo me encargo de mantener el sistema y su infraestructura.',
      },
      turnex: {
        title: 'Turnex — Gestión de complejos deportivos',
        label: 'Proyecto de cliente · En etapa de pruebas',
        company: 'Proyecto de cliente · Desarrollo web + SQL',
        description:
          'Sistema para administrar un complejo deportivo: socios, cuotas, reservas de canchas, cobros, caja diaria y acceso con código QR. Lo desarrollé para un cliente y está en etapa de pruebas antes de la entrega.',
      },
      stackadvisor: {
        title: 'StackAdvisor',
        label: 'Proyecto propio · Online',
        company: 'Proyecto personal · Desarrollo web + IA',
        description:
          'Herramienta web que, con un cuestionario corto, recomienda qué tecnologías usar para un proyecto de software y explica por qué. Usa IA (Gemini) para armar un plan de desarrollo a medida.',
      },
      viewCase: 'Ver caso',
      viewProject: 'Ver proyecto',
      viewCode: 'Ver código',
      viewAllFullStack: 'Todos los proyectos de desarrollo',
      viewAllData: 'Todos los proyectos de datos',
    },
    live: {
      kicker: 'En vivo',
      title: 'Dashboards interactivos',
      subtitle: 'Están publicados y funcionando: podés abrirlos y probarlos.',
      viewAll: 'Ver todos',
      ecommerceSub: 'Analicé más de 100.000 pedidos reales de una tienda online de Brasil: quiénes son los mejores clientes, cuántos vuelven a comprar y cómo evolucionan las ventas.',
      cryptoSub: 'Precios de Bitcoin y otras criptomonedas que se actualizan al instante, con avisos cuando hay movimientos fuera de lo normal.',
      argentinaSub: 'Dólar, inflación y riesgo país en un solo lugar, con datos públicos que se actualizan solos.',
    },
    specialties: {
      title: 'Qué hago',
      analytics: {
        title: 'Datos',
        body: 'Junto datos dispersos, los ordeno y los muestro en dashboards que sirven para decidir.',
        items: ['SQL · Python · dbt', 'Metabase · Power BI', 'BigQuery · PostgreSQL', 'pandas · scikit-learn'],
      },
      web: {
        title: 'Desarrollo full stack',
        body: 'Armo aplicaciones web completas, desde la base de datos hasta la pantalla.',
        items: ['React · Next.js · TypeScript', 'Node.js · APIs REST', 'Supabase · PostgreSQL', 'Tailwind CSS · Docker · Vercel'],
      },
      automation: {
        title: 'IA y automatización',
        body: 'Uso IA para automatizar tareas repetitivas y ahorrar tiempo.',
        items: ['n8n · Make · Zapier', 'Claude · Gemini · Groq', 'Flujos automáticos', 'Avisos automáticos'],
      },
    },
    aboutMe: 'Sobre mí',
  },

  about: {
    badge: 'Disponible · Analista de Datos',
    greeting: 'Hola, soy',
    intro:
      'Soy analista de datos. Aprendí a programar por mi cuenta y después hice la Diplomatura en Ciencia de Datos y Machine Learning de la UNC, donde aprendí Python a fondo. En Ivolution Sport Science armé dashboards para que profesionales del deporte tomaran decisiones con datos. También tengo base como desarrollador full stack y uso IA para automatizar tareas.',
    contactMe: 'Contactarme',
    experience: 'Experiencia',
    jobs: {
      codingClick: {
        role: 'Cofundador · Desarrollo web, datos y automatización',
        company: 'Coding Click',
        period: 'Actualidad',
        location: 'Argentina · Remoto',
        summary: 'Cofundé Coding Click, donde hacemos software a medida para pymes: sitios web, sistemas de gestión, dashboards y automatizaciones.',
        bullets: [
          'Desarrollo sitios y sistemas a medida con React/Next.js, Node.js y PostgreSQL/Supabase.',
          'Construí la plataforma de cursos del Instituto Coubertin, que hoy está en producción; me encargo de mantener el sistema y su infraestructura.',
          'Armo automatizaciones y reportes con n8n, Make y APIs para reemplazar tareas manuales.',
          'Participo en todo el proceso de cada proyecto: relevamiento, propuesta, desarrollo, puesta en marcha y mantenimiento.',
        ],
      },
      ivolution: {
        role: 'Data Analytics Engineer',
        company: 'Ivolution Sport Science · Contrato temporal',
        period: 'Abr 2025 — Mar 2026',
        location: 'Argentina · Remoto',
        summary: 'Armaba dashboards con métricas de los deportistas para que los profesionales del deporte tomaran decisiones.',
        bullets: [
          'Armé dashboards en Metabase para seguir a 967 deportistas de 13 disciplinas, con más de 10.000 mediciones.',
          'Ordené y transformé los datos de las evaluaciones con SQL y dbt, para que los dashboards fueran confiables y fáciles de mantener.',
          'Agregué avisos automáticos que comparan cada evaluación con el historial del deportista y marcan si está fatigado, normal o por encima de lo habitual.',
          'Pasé modelos de Metabase a dbt, unifiqué deportistas duplicados entre entornos, hice versiones de los dashboards en español, inglés y portugués, y automaticé tareas con n8n.',
          'Trabajaba por tareas, con una reunión diaria (daily) con el equipo todas las mañanas.',
        ],
      },
    },
    building: 'Qué estoy construyendo',
    online: 'Online',
    stackadvisor: {
      kind: 'Proyecto propio · Desarrollo web + IA',
      body: 'Herramienta web que, con un cuestionario corto, recomienda qué tecnologías usar para un proyecto de software y explica por qué. Usa IA (Gemini) para armar un plan de desarrollo a medida.',
      visit: 'Visitar StackAdvisor',
    },
    jobHunting: {
      title: 'Automatización de búsqueda laboral',
      kind: 'IA y automatización · Uso personal',
      body: 'Un flujo en n8n que junta ofertas de trabajo, las puntúa con IA según mi perfil, me pide aprobación por Telegram, adapta el CV a cada oferta y registra todo en Google Sheets.',
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
        institution: 'Universidad San Ignacio de Loyola (USIL) · dictada por Mundos E',
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
      'De la base de datos a la puesta en marcha: sistemas a medida para clientes, proyectos propios con IA y apps en tiempo real. Next.js, TypeScript, PostgreSQL/Supabase.',
  },

  certifications: {
    titleA: 'Certificaciones',
    titleB: '& Formación',
    intro:
      'Formación continua en Data Science, programación, IA y desarrollo web — de Google, IBM, Cisco y universidades internacionales.',
    university: 'Formación Universitaria',
    international: 'Certificaciones internacionales',
    credlyTitle: 'Ver todas mis badges verificadas en Credly',
    credlyBody: 'Google IT Support · IBM Web Dev · y más badges verificables',
    viewCertificate: 'Ver certificado',
    verify: 'Verificar',
    viewBadge: 'Ver badge en Credly',
    universities: {
      dsml: {
        badge: 'Universidad Nacional de Córdoba',
        name: 'Diplomatura en Data Science & Machine Learning',
        date: 'Mayo 2025',
        hours: '250 horas · CRE 10',
        description:
          'Diplomatura universitaria de formación continua dictada por ICARO Asociación Civil en conjunto con la Secretaría de Extensión de la Facultad de Ciencias Exactas, Físicas y Naturales de la UNC.',
        verifyLabel: 'Validar en UNC (código: DS240502)',
      },
      cyber: {
        badge: 'Universidad San Ignacio de Loyola',
        name: 'Diplomatura en Ciberseguridad',
        date: 'Septiembre 2025',
        hours: '200 horas',
        description:
          'Diplomatura de la Universidad San Ignacio de Loyola (USIL), dictada por Mundos E. Fundamentos y práctica en seguridad informática.',
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
      'Busco puesto en datos (junior / semi-senior): remoto desde cualquier lugar, o presencial / híbrido en Córdoba Capital. También tomo proyectos freelance. Respondo en 24-48 horas.',
    formTitle: 'Mandame un mensaje',
    name: 'Nombre',
    email: 'Email',
    subject: 'Asunto',
    subjectPlaceholder: 'Elegí un asunto',
    subjects: {
      job: 'Oportunidad laboral',
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
      'Proyectos con datos reales, publicados y funcionando: desde análisis de ventas hasta precios en tiempo real.',
    live: 'En vivo',
    items: {
      ecommerce: {
        title: 'Ventas de un e-commerce',
        subtitle: 'Olist Brazil (PT-BR) · 100k+ órdenes · dbt + PostgreSQL',
        description:
          'Pipeline de datos end-to-end con segmentación RFM, cohort retention, revenue trends y seller performance. Datos reales de 93k clientes únicos del mercado brasileño. Interfaz en inglés, español y portugués.',
      },
      crypto: {
        title: 'Criptomonedas en tiempo real',
        subtitle: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
        description:
          'Dashboard en tiempo real con velas TradingView, volumen, 6 timeframes y detección de anomalías por z-score. Feed de trades en vivo.',
      },
      argentina: {
        title: 'Economía argentina',
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
    badge: 'Trabajo en empresa · Abr 2025 — Mar 2026',
    title: 'Tableros de rendimiento deportivo',
    introA: 'Dashboards que armé para seguir a',
    introStrong: '967 deportistas de 13 disciplinas',
    introB:
      '— fútbol, rugby, atletismo, hockey, natación, básquet y más — para que el equipo técnico tomara decisiones con datos. Hechos con SQL, BigQuery, dbt y Metabase.',
    multilingualTag: 'ES/EN/PT',
    stats: {
      athletes: 'deportistas',
      sports: 'disciplinas',
      measurements: 'mediciones registradas',
      languages: 'idiomas (ES/EN/PT)',
    },
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
      'del e-commerce brasileño. PostgreSQL + dbt con 4 capas de modelos, RFM segmentation, cohort retention y revenue trends en SQL puro. CI/CD con GitHub Actions y dashboard publicado.',
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
