import type { Dictionary } from './es'

const en: Dictionary = {
  meta: {
    siteTitle: 'Santiago Aragon Malak — Hybrid Engineer: Data + Full Stack + AI',
    siteDescription:
      'Hybrid Engineer: Data + Full Stack + AI. I build BigQuery + dbt pipelines, dashboards, React/Next.js applications and automations with n8n + LLMs. 967 athletes monitored in production at Ivolution. Open to remote roles.',
    ogDescription:
      'I model the data, build the interface that consumes it and automate the whole process. BigQuery · dbt · Next.js · n8n + LLMs.',
    ogTagline: 'SQL · Python · BigQuery · dbt · Next.js · n8n + LLMs',
    ogAvailability: 'Open to remote roles',
    personDescription:
      'Hybrid Engineer: Data + Full Stack + AI. SQL, Python, BigQuery, dbt, React/Next.js and automation with n8n + LLMs.',
    about: {
      title: 'About me',
      description:
        'Hybrid Engineer: Data + Full Stack + AI. Founder of Coding Click and former Data Scientist / Analytics Engineer at Ivolution Sport Science (967 athletes monitored). Open to remote roles.',
    },
    certifications: {
      title: 'Certifications & Education',
      description:
        'University diploma in Data Science & ML (UNC, 250h), Google IT Support Professional, Google AI Essentials, Cisco Python Essentials, IBM SkillsBuild and more.',
    },
    contact: {
      title: 'Contact',
      description:
        'Open to junior / mid-level remote roles: Analytics Engineer, Data Analyst, Data Scientist, Full Stack or AI/Automation Engineer. Freelance projects too. Get in touch.',
    },
    dashboards: {
      title: 'Interactive Dashboards',
      description:
        'Production dashboards on real data: E-Commerce Analytics over 100k+ Olist orders with dbt + PostgreSQL, a Crypto Live Dashboard on Binance WebSocket, and an Argentina Macro Dashboard.',
    },
    dataScience: {
      title: 'Data Projects',
      description:
        'Data projects: a monitoring system for 967 athletes at Ivolution (BigQuery + dbt + Metabase), a dbt platform over 100k+ Olist orders, machine learning with scikit-learn and user segmentation.',
    },
    ivolution: {
      title: 'Performance Monitoring System — Ivolution',
      description:
        'Case study: performance analytics system for 967 athletes across 13 sports, built with BigQuery, dbt and Metabase. Dynamic percentile-based alerts, still running after I left.',
    },
    olist: {
      title: 'E-Commerce Data Platform — Olist',
      description:
        'Case study: end-to-end pipeline over 100k+ real Olist orders with PostgreSQL and dbt. RFM segmentation, cohort retention and revenue trends in SQL.',
    },
    performanceMonitor: {
      title: 'Athlete Performance Monitor',
      description:
        'Synthetic dataset of 6,500+ CMJ/IMTP measurements generated in Python, plus a neuromuscular alert system with dynamic p25/p75 thresholds. Privacy-first: zero personal data.',
    },
    webProjects: {
      title: 'Full Stack Projects',
      description:
        'Full stack projects: Instituto Coubertin (custom LMS), Turnex (sports-complex management), StackAdvisor (AI-powered SaaS), the Coding Click website and more. Next.js, TypeScript, Supabase and PostgreSQL.',
    },
  },

  common: {
    nav: {
      home: 'Home',
      about: 'About',
      webProjects: 'Full Stack',
      dataScience: 'Data',
      dashboards: 'Dashboards',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    roleShort: 'Hybrid Engineer',
    roleFull: 'Hybrid Engineer: Data + Full Stack + AI',
    cv: 'CV',
    downloadCv: 'Download CV',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    toggleMenu: 'Open or close menu',
    language: 'Language',
    rights: 'All rights reserved.',
    banner: {
      long: 'Open to remote roles and freelance projects · Córdoba, Argentina',
      short: 'Open to work · Remote',
      cta: 'Get in touch',
    },
    backToDataScience: 'Back to Data projects',
    letsTalk: "Let's talk about your project",
    workTogether: {
      title: 'Shall we work together?',
      body: "I'm looking for junior / mid-level remote roles as an Analytics Engineer, Data Analyst, Data Scientist, Full Stack or AI/Automation Engineer. I also take on freelance automation, dashboard and custom development projects.",
      cta: 'Start a conversation',
    },
  },

  projectCard: {
    code: 'Code',
    notebook: 'Notebook',
    viewDetail: 'View details',
    viewProject: 'View project',
    showCode: 'Show code',
    hideCode: 'Hide code',
  },

  home: {
    availability: 'Open to remote roles and projects',
    heroSubtitle: 'Data + Full Stack + AI',
    intro:
      'I build data systems and software that run in production: BigQuery + dbt pipelines, dashboards, React/Next.js applications and AI automations. I model the data, build the interface that consumes it and automate the whole process.',
    ctaProjects: 'See projects',
    ctaDashboards: 'Live dashboards',
    stats: {
      athletes: { label: 'Athletes monitored', sub: 'Data · Ivolution' },
      orders: { label: 'Orders modeled', sub: 'dbt · Olist' },
      stacks: { label: 'Stacks evaluated', sub: 'StackAdvisor · AI' },
      measurements: { label: 'Measurements', sub: 'BigQuery · Ivolution' },
    },
    featured: {
      title: 'Featured projects',
      subtitle: 'Data, product and automation — in-house, for clients and my own',
      ivolution: {
        label: 'In-house work · 967 athletes · 13 sports',
        company: 'Ivolution Sport Science · Data',
        description:
          'I designed the neuromuscular fatigue monitoring system for 967 athletes across 13 sports from scratch: BigQuery + dbt models, Metabase dashboards and dynamic percentile thresholds (p25/p75) that classify each athlete as FATIGUED / ATTENTION / SUPERCOMPENSATION. The staff’s main decision-making tool, with ES/EN/PT support.',
      },
      coubertin: {
        label: 'Client project · Custom LMS',
        company: 'Coding Click · Full Stack',
        description:
          'A complete learning platform for a sports-education institute: course catalog, Stripe payments with automatic enrollment, a virtual classroom with progress tracking, per-course forums, graded assessments and an admin panel. Auth and data on Supabase with RLS policies. In final testing and content loading.',
      },
      turnex: {
        label: 'Management system · Working demo',
        company: 'Coding Click · Full Stack + SQL',
        description:
          'Management system for sports complexes: members and account balances, fees, court bookings, recurring slots, QR access control, payments, daily cash register and a member portal. PostgreSQL with plain SQL and versioned migrations, role-based access, daily cron jobs, and unit + E2E tests.',
      },
      stackadvisor: {
        label: 'My own SaaS · In production',
        company: 'Personal project · Full Stack + AI',
        description:
          'A questionnaire that evaluates 35 stack combinations and recommends the best fit with a rationale, a 12-week roadmap and a cost estimator. The premium Blueprint uses Gemini to generate the architecture, database schema and a development plan tailored to the project.',
      },
      viewCase: 'Read the case study',
      viewProject: 'View project',
      viewCode: 'View code',
      viewAllFullStack: 'All Full Stack projects',
      viewAllData: 'All Data projects',
    },
    live: {
      kicker: 'Live',
      title: 'Interactive dashboards',
      subtitle: 'Real data, deployed to production — open them and they just work.',
      viewAll: 'See all',
      ecommerceSub: 'Olist Brazil (PT-BR) · 100k+ orders · dbt + PostgreSQL',
      cryptoSub: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
      argentinaSub: 'FX rates · Inflation · Country risk — real-time data',
    },
    specialties: {
      title: 'Areas of expertise',
      analytics: {
        title: 'Data & Analytics',
        body: 'Scattered data → clean models and dashboards people use to make decisions.',
        items: ['SQL · BigQuery · dbt · PostgreSQL', 'Metabase · Power BI', 'Python · pandas · scikit-learn', 'Dynamic alerts · Percentiles'],
      },
      web: {
        title: 'Full Stack',
        body: 'Product ideas → complete apps, from the data model to deployment.',
        items: ['React · Next.js · TypeScript', 'Node.js · REST APIs', 'Supabase · PostgreSQL', 'Tailwind CSS · Docker · Vercel'],
      },
      automation: {
        title: 'AI & Automation',
        body: 'Manual processes → automated workflows with built-in LLMs.',
        items: ['n8n · Make · Zapier', 'Claude API · Gemini · Groq', 'Scraping · AI scoring', 'Telegram API · Alerts'],
      },
    },
    aboutMe: 'About me',
  },

  about: {
    badge: 'Available · Hybrid Engineer: Data + Full Stack + AI',
    greeting: "Hi, I'm",
    intro:
      'I build data systems and software that run in production. A hybrid profile: I model the data, build the interface that consumes it and automate the whole process — SQL, Python, BigQuery and dbt on the data side, React/Next.js and TypeScript on the product side, and n8n + LLMs for automation.',
    contactMe: 'Contact me',
    experience: 'Experience',
    jobs: {
      codingClick: {
        role: 'Founder & Hybrid Engineer — Full Stack, Data & Automation',
        company: 'Coding Click · Independent professional',
        period: 'Sep 2025 — Present',
        location: 'Córdoba, Argentina · Hybrid',
        summary: 'End-to-end software development for small and mid-sized businesses: web, custom systems, data and automation.',
        bullets: [
          'I design and build websites, e-commerce and custom systems with React/Next.js, Node.js and PostgreSQL/Supabase — from landing pages to internal management portals.',
          'Built the custom LMS platform for Instituto Coubertin with Next.js, Supabase and Vercel, with complete product documentation; now in final testing and content loading.',
          'I implement automations and data reporting with n8n, Make and REST APIs: system-to-system sync, automatic alerts and tracking dashboards that replace manual processes.',
          'I own the full project lifecycle: technical discovery, proposal, development, deployment and maintenance.',
        ],
      },
      ivolution: {
        role: 'Data Scientist / Analytics Engineer',
        company: 'Ivolution Sport Science · Fixed-term contract',
        period: 'Apr 2025 — Mar 2026',
        location: 'Argentina · Remote',
        summary: "I designed and built the organization's sports performance analytics system from scratch.",
        bullets: [
          "Built the neuromuscular fatigue monitoring system for 967 athletes across 13 sports with BigQuery, dbt and Metabase, used as the staff's main decision-making tool.",
          'Implemented dynamic percentile thresholds (p25 fatigue / p75 supercompensation) that automatically classify each athlete as FATIGUED / ATTENTION / SUPERCOMPENSATION.',
          'Migrated the CMJ Rebound models from Metabase to dbt, with surrogate keys and athlete deduplication across the production and development environments.',
          'Developed the Return to Play dashboard framework and the multilingual (ES/EN/PT) version of the dashboards; automated system workflows with n8n.',
        ],
      },
    },
    building: "What I'm building",
    stackadvisor: {
      kind: 'SaaS · In production',
      body: 'My own SaaS that solves tech-decision paralysis: a questionnaire evaluates 35 stack combinations and returns the best fit with a rationale, a 12-week roadmap and a cost estimator. The premium Blueprint uses Gemini to generate the architecture, database schema and development plan for the project.',
      visit: 'Visit StackAdvisor',
    },
    jobHunting: {
      kind: 'AI & Automation · Personal use',
      body: 'An n8n pipeline that scrapes job openings, scores them with AI against my profile, asks for approval over Telegram, tailors my CV to each offer and logs everything in Google Sheets — because job hunting can be automated too.',
    },
    stack: 'Tech stack',
    stackCategories: {
      data: 'Data',
      fullstack: 'Full Stack',
      ai: 'AI & Automation',
      security: 'Cybersecurity',
    },
    securitySkills: ['Cloud security', 'Networking', 'Incident management', 'OSINT · Forensics'],
    education: 'Education',
    educationList: {
      upso: {
        title: 'Associate Degree in Programming Technologies',
        institution: 'UPSO (Argentina) · Distance learning',
        period: 'In progress · expected early 2027',
      },
      dsml: {
        title: 'University Diploma in Data Science & Machine Learning',
        institution: 'National University of Córdoba · ICARO',
        period: '2025',
      },
      cyber: {
        title: 'Diploma in Cybersecurity',
        institution: 'National University of Córdoba (FCEFyN)',
        period: '2025',
      },
    },
    allCertifications: 'See all certifications',
    languages: 'Languages',
    languageList: {
      es: { name: 'Spanish', level: 'Native', detail: 'Mother tongue' },
      en: {
        name: 'English',
        level: 'Technical reading',
        detail: 'Fluent reading of documentation and technical material · conversation in progress',
      },
      pt: { name: 'Portuguese', level: 'C1 Advanced', detail: 'Fluent conversation · Technical documentation' },
    },
    philosophy:
      '"The best products are born where data meets engineering. Data tells you what to build. Code lets you build it."',
    philosophyCaption: '— My working philosophy',
    seeProjects: 'See my projects',
  },

  dataScience: {
    titleA: 'Data & Analytics',
    titleB: 'Projects',
    intro:
      'Analytics engineering, machine learning and statistical analysis — from raw data to clean models and actionable insight.',
    githubTitle: 'Jupyter notebooks & more analysis',
    githubBody: 'Browse all my notebooks and data analysis projects on GitHub.',
    githubCta: 'View on GitHub',
  },

  webProjects: {
    titleA: 'Full Stack',
    titleB: 'Projects',
    intro:
      'From data model to deployment: custom systems for clients, my own AI products and real-time apps. Next.js, TypeScript, PostgreSQL/Supabase and LLMs.',
  },

  certifications: {
    titleA: 'Certifications',
    titleB: '& Education',
    intro:
      'Continuous learning in Data Science, programming, AI and web development — from Google, IBM, Cisco and international universities.',
    university: 'University Education',
    universityBadge: 'National University of Córdoba',
    international: 'International certifications',
    credlyTitle: 'See all my verified badges on Credly',
    credlyBody: 'Google IT Support · IBM Web Dev · and more verifiable badges',
    viewCertificate: 'View certificate',
    verify: 'Verify',
    viewBadge: 'View badge on Credly',
    universities: {
      dsml: {
        name: 'University Diploma in Data Science & Machine Learning',
        date: 'May 2025',
        hours: '250 hours · 10 credits',
        description:
          'Continuing-education university diploma taught by ICARO Asociación Civil together with the Extension Office of the Faculty of Exact, Physical and Natural Sciences at UNC (Argentina).',
        verifyLabel: 'Verify at UNC (code: DS240502)',
      },
      cyber: {
        name: 'Diploma in Cybersecurity',
        date: 'September 2025',
        hours: '200 hours',
        description:
          'Diploma taught by the Faculty of Exact, Physical and Natural Sciences at UNC together with Mundos E and Universidad San Ignacio de Loyola. Foundations and hands-on practice in information security.',
        verifyLabel: 'View certificate',
      },
    },
    categories: {
      google: 'Google',
      programming: 'Programming',
      ibm: 'IBM',
      ai: 'Artificial Intelligence',
      design: 'Design & UX',
    },
    certs: {
      itSupport: { date: 'Jun 2025', detail: '5 courses — Networking, OS, System Administration, Security' },
      aiEssentials: { date: 'Aug 2024', detail: 'AI fundamentals applied to everyday work' },
      python1: { date: 'Oct 2024', detail: 'Python 3 fundamentals, algorithms, data structures' },
      python2: { date: 'Oct 2024', detail: 'OOP, modules and advanced Python applications' },
      jhu: { date: 'Aug 2024', detail: 'Modern web development — JHU Whiting School of Engineering' },
      ibmWeb: { date: 'Oct 2024', detail: 'Web development fundamentals — verifiable Credly badge' },
      elementsOfAi: { date: 'Feb 2025', detail: '2 ECTS credits — official University of Helsinki course' },
      ux: { date: 'Sep 2024', detail: '30 hours — User experience principles' },
      webDesign: { date: 'Aug 2024', detail: '30 hours — Web design and layout' },
    },
  },

  contact: {
    title: 'Contact',
    intro: "Have a role or a project in mind? Write to me and let's talk.",
    info: 'Contact information',
    availabilityTitle: 'Availability',
    availabilityBody:
      'Available for remote roles (junior / mid-level) and freelance projects. I reply within 24–48 hours.',
    formTitle: 'Send me a message',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    subjectPlaceholder: 'Choose a subject',
    subjects: {
      job: 'Job opportunity / Remote role',
      fullstack: 'Full Stack project / Custom system',
      data: 'Data project / Dashboards',
      ai: 'AI automation',
      other: 'Other',
    },
    message: 'Message',
    honeypot: 'Leave blank',
    send: 'Send message',
    sending: 'Sending...',
    success: "Message sent! I'll get back to you soon.",
    errors: {
      rate_limited: 'Too many attempts. Please wait a moment and try again.',
      too_large: 'The message is too long.',
      missing_fields: 'All fields are required.',
      invalid_email: 'The email address is not valid.',
      generic: "The message couldn't be sent. Please try again or email me directly.",
    },
  },

  dashboards: {
    kicker: 'Live Projects',
    title: 'Interactive Dashboards',
    intro:
      'Production projects on real data — from data pipelines to real-time streams. Every one of them deployed and working.',
    items: {
      ecommerce: {
        subtitle: 'Olist Brazil (PT-BR) · 100k+ orders · dbt + PostgreSQL',
        description:
          'End-to-end data pipeline with RFM segmentation, cohort retention, revenue trends and seller performance. Real data from 93k unique customers in the Brazilian market. Interface available in English, Spanish and Portuguese.',
      },
      crypto: {
        subtitle: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
        description:
          'Real-time dashboard with TradingView candles, volume, 6 timeframes and z-score anomaly detection. Live trade feed.',
      },
      argentina: {
        subtitle: 'FX rates · Inflation · Country risk — real-time data',
        description:
          'Live exchange rates (official, blue, MEP, CCL, crypto, card), FX gap, historical evolution, monthly and year-over-year inflation (INDEC) and EMBI+ country risk. Polls every 60s.',
      },
    },
    code: 'Code',
    open: 'Open',
    openDashboard: 'Open dashboard',
    bestOnDesktop: 'Best viewed on desktop',
    loading: 'Loading {title}...',
    otherProjects: 'Other projects',
    viewRepo: 'View repo',
    others: {
      platform: {
        title: 'E-Commerce Data Platform',
        desc: 'dbt + PostgreSQL pipeline with 4 model layers over 100k Olist orders',
      },
      argentinaRepo: {
        title: 'Argentina Macro — Repo',
        desc: 'Source code of the macroeconomic dashboard: FX rates, INDEC inflation and country risk.',
      },
    },
  },

  ivolution: {
    badge: 'Production work · Apr 2025 — Mar 2026',
    introA: 'Performance analytics system designed from scratch for',
    introStrong: '967 athletes across 13 sports',
    introB:
      '— football, rugby, athletics, hockey, swimming, basketball and more. Built with SQL, BigQuery, dbt and Metabase. The system is still running after I left.',
    multilingualTag: 'ES/EN/PT',
    stats: {
      athletes: 'athletes monitored',
      sports: 'sports covered',
      measurements: 'recorded measurements',
      active: 'running after I left',
    },
    activeValue: '1+ year',
    screenshotsTitle: 'System screenshots',
    screenshotsHint: 'Click any image to view it full screen.',
    close: 'Close',
    previous: 'Previous',
    next: 'Next',
    enlarge: 'Enlarge: {title}',
    screenshots: {
      dashboard: {
        title: 'Main dashboard — Dynamometer vs IMTP',
        description:
          'Real-time KPIs: MaxForce, RFDA50, RFDA250 and TimMaxForce. Dynamometer vs IMTP comparison with filters by date, athlete, exercise type and institution.',
      },
      forceVelocity: {
        title: 'Force-Velocity Profile',
        description:
          'Correlations between metrics: Max Velocity vs Max Force, Load vs Max Impulse, Velocity vs Max Distance, 1RM by sport. Multidimensional performance analysis.',
      },
      hip: {
        title: 'Hip Stability Report',
        description:
          'Functional ratio analysis using a simple Push-Pull test. Histogram of CMIR/DJ height difference and a time series for longitudinal tracking.',
      },
      comparisons: {
        title: 'v2 CMJ - IMTP II — Moving Average vs Latest Evaluation',
        description:
          'Per-athlete dashboard with a 5-evaluation moving average and dynamic supercompensation/fatigue thresholds. Shows braking RFD (CMJ) and 100ms RFD (IMTP) with the full history and the athlete’s current status.',
      },
      fatigue: {
        title: 'ASH Test - Bilateral CMJ — Neuromuscular Fatigue Control',
        description:
          'Fatigue monitoring with the ASH "I" Test (shoulder) and Bilateral CMJ (lower limbs). Left/right peak force trend compared with the previous day, plus historical series.',
      },
      athletes: {
        title: 'Individual comparisons — Comparison Dashboard',
        description:
          'Side-by-side view of two athletes with gauges for CMJ (Jump Height), IMTP (Peak Force) and Drop Jump (RSI). Compares performance between athletes of the same institution in real time.',
      },
    },
  },

  olist: {
    badge: 'Personal project · Analytics Engineering · End-to-end',
    subtitle: 'Olist Brazil — Real marketplace data',
    introA: 'End-to-end data pipeline over',
    introStrong: '100,000+ real orders',
    introB:
      'from Brazilian e-commerce. PostgreSQL + dbt with 4 model layers, RFM segmentation, cohort retention and revenue trends in pure SQL. CI/CD with GitHub Actions and a dashboard deployed to production.',
    stats: { orders: 'orders analyzed', layers: 'dbt layers', marts: 'analytical marts', ci: 'GitHub Actions' },
    architectureTitle: 'Pipeline architecture',
    architectureIntro: 'The full flow from raw Kaggle data to the production dashboard.',
    nodes: {
      raw: 'Kaggle · Olist Brazil Dataset · 9 relational tables',
      postgres: 'Source database · local Docker',
      intermediate: 'int_orders_enriched · int_seller_performance · business logic',
    },
    modelsTitle: 'dbt model structure',
    modelsIntro: 'Each layer has one clear responsibility. Staging has no joins; intermediate is never exposed to the dashboard.',
    layers: {
      staging: 'Renaming, type casting, deduplication. Single source of truth.',
      intermediate: 'Joins and business logic. Not exposed to the dashboard.',
      marts: 'Final analytical tables. Consumed by the dashboard.',
    },
    sqlTitle: 'SQL — Key models',
    sqlIntro: "The project's three analytical marts. Click to expand the code.",
    snippets: {
      rfm: 'Customer segmentation by Recency, Frequency and Monetary value. NTILE(5) builds quintiles for scoring, then segment logic runs on the combined score.',
      cohort:
        'Monthly customer cohort retention. Uses FIRST_VALUE to anchor each cohort’s initial size and compute the retention rate for every following month.',
      revenue: 'Monthly revenue trends by state and category. Running total via SUM with ROWS BETWEEN and month-over-month delta via LAG.',
    },
    liveDashboard: 'Open live dashboard',
    githubCode: 'Code on GitHub',
  },

  performanceMonitor: {
    badge: 'Demo · Synthetic data · Python + SQL',
    subtitle: 'CMJ · IMTP · Neuromuscular alert system',
    introA: 'Synthetic dataset of',
    introStrong: '~6,500 measurements',
    introB:
      'generated in Python — distributions calibrated against published sport-science norms. On top: an alert system with dynamic percentile thresholds (p25/p75) and longitudinal tracking with a 5-evaluation moving average.',
    whyTitle: 'Why synthetic data?',
    whyBody:
      'Real athlete data contains sensitive health information. Instead of leaving it out or oversimplifying it, I generated fictitious data with the same structure and statistical distributions — IDs hashed at the source, no real name ever stored. The methodology is identical to the real system I built at Ivolution.',
    stats: { athletes: 'generated athletes', sports: 'sports', measurements: 'measurements', months: 'months of data' },
    measurementsValue: '6,500+',
    pipelineTitle: 'Pipeline',
    pipelineIntro: 'From generation to production alerts.',
    nodes: {
      generate: 'Faker · numpy · hashlib — 150 athletes, 6,500+ measurements, 0 PII',
      csv: 'Clean output · hashed athlete_id · ready to load',
      alerts: 'Dynamic p25/p75 thresholds · SUPERCOMPENSATION / ATTENTION / FATIGUED',
      trend: '5-evaluation moving average · % change from baseline',
      dashboardLabel: 'Monitoring dashboard',
      dashboard: 'Real-time neuromuscular status · per-athlete and per-sport views',
    },
    alertsTitle: 'Alert logic',
    alertsIntro: 'Dynamic 90-day window per athlete and exercise type.',
    states: {
      super: {
        label: 'SUPERCOMPENSATION',
        condition: 'metric ≥ p75',
        desc: 'The athlete is above their usual range. Peak performance or positive overreaching.',
      },
      attention: { label: 'ATTENTION', condition: 'p25 < metric < p75', desc: 'Within the normal range. Keep an eye on the trend.' },
      fatigued: {
        label: 'FATIGUED',
        condition: 'metric ≤ p25',
        desc: 'Dropped below the lower quartile. Review training load.',
      },
    },
    codeTitle: 'Code',
    codeIntro: 'Dataset generation and the two main SQL models.',
    snippets: {
      generate: {
        title: 'Dataset generation',
        description:
          'Faker generates fictitious identities that are hashed immediately — no real name ever reaches the CSV. numpy simulates CMJ/IMTP distributions calibrated against published sport-science norms.',
      },
      alerts: {
        title: 'Alert system — Dynamic thresholds',
        description:
          'PERCENTILE_CONT computes p25/p75 per athlete and exercise type over the last 90 days. The latest measurement is compared against that dynamic window to classify neuromuscular status.',
      },
      rolling: {
        title: 'Individual trend — 5-evaluation moving average',
        description:
          'Longitudinal tracking per athlete. A 5-evaluation moving average smooths day-to-day variability and surfaces sustained improvement or decline.',
      },
    },
    scriptOnGithub: 'View script on GitHub',
    realSystem: 'See the real system — Ivolution',
  },

  notFound: {
    title: "This page doesn't exist... or I deleted it by accident",
    subtitle: 'The model predicted you would land here — and it was wrong.',
    meta: 'Error 404 · Route not found · Model accuracy: 0%',
    searching: 'the-page-you-want',
    prediction: 'Prediction',
    confidence: 'Confidence',
    comment: '# not very useful',
    home: 'Back to home',
    projects: 'See projects',
  },
}

export default en
