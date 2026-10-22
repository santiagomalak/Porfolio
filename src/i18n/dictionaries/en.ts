import type { Dictionary } from './es'

const en: Dictionary = {
  meta: {
    siteTitle: 'Santiago Malak — Analytics Engineer & Full-Stack Developer',
    siteDescription:
      'Portfolio of Santiago Malak: Analytics Engineer and Full-Stack Developer. BigQuery, dbt, Metabase, SQL, Python, Next.js. 967 athletes monitored in real production. Available for remote roles.',
    ogDescription:
      'Analytics Engineer with hands-on production experience in BigQuery, dbt and Metabase. 967 athletes monitored in production.',
    ogTagline: 'BigQuery · dbt · Metabase · SQL · Python · Next.js',
    ogAvailability: 'Open to remote roles',
    personDescription: 'Analytics Engineer and Full-Stack Developer. BigQuery, dbt, Metabase, SQL, Python, Next.js.',
    about: {
      title: 'About me',
      description:
        'Analytics Engineer and Full-Stack Developer. Formerly at Ivolution Sport Science — built the performance analytics system for 967 athletes across 13 sports. Currently building StackAdvisor and open to remote roles.',
    },
    certifications: {
      title: 'Certifications & Education',
      description:
        'University diploma in Data Science & ML (UNC, 250h), Google IT Support Professional, Google AI Essentials, Cisco Python Essentials, IBM SkillsBuild and more.',
    },
    contact: {
      title: 'Contact',
      description:
        'Open to remote Analytics Engineer, Data Engineer, Data Scientist or Full-Stack Developer roles, and to freelance projects. Get in touch.',
    },
    dashboards: {
      title: 'Interactive Dashboards',
      description:
        'Production dashboards on real data: E-Commerce Analytics over 100k+ Olist orders with dbt + PostgreSQL, a Crypto Live Dashboard on Binance WebSocket, and an Argentina Macro Dashboard.',
    },
    dataScience: {
      title: 'Data Science & Analytics Engineering',
      description:
        'Data Science and Analytics Engineering projects: a system for 967 athletes at Ivolution, machine learning with Scikit-learn, BigQuery/dbt pipelines and user segmentation.',
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
      title: 'Web Projects',
      description:
        'Web development projects: StackAdvisor (SaaS in production), Crypto Live Dashboard, Wayra Huasi and more. Built with Next.js, TypeScript and TailwindCSS.',
    },
  },

  common: {
    nav: {
      home: 'Home',
      about: 'About',
      webProjects: 'Web Development',
      dataScience: 'Data Science',
      dashboards: 'Dashboards',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    roleShort: 'Analytics Engineer',
    cv: 'CV',
    downloadCv: 'Download CV',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    toggleMenu: 'Open or close menu',
    language: 'Language',
    rights: 'All rights reserved.',
    banner: {
      long: 'Open to remote roles · Analytics Engineer & Full-Stack Developer · Argentina',
      short: 'Open to work · Remote',
      cta: 'Get in touch',
    },
    backToDataScience: 'Back to Data Science',
    letsTalk: "Let's talk about your project",
    workTogether: {
      title: 'Shall we work together?',
      body: "Open to remote Analytics Engineer & Full-Stack Developer roles — and to Data Engineer or Data Scientist roles when the project calls for it. Also available for freelance work: data, web, automation.",
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
    intro:
      'I build data pipelines, analytical models and dashboards that teams actually use to make decisions. BigQuery · dbt · Metabase in real production.',
    ctaData: 'See data projects',
    ctaDashboards: 'Live dashboards',
    stats: {
      athletes: { label: 'Athletes monitored', sub: 'Performance · Ivolution' },
      orders: { label: 'Orders analyzed', sub: 'E-Commerce · Olist' },
      measurements: { label: 'Measurements in BigQuery', sub: 'dbt · SQL · Alerts' },
      stacks: { label: 'Stacks evaluated', sub: 'StackAdvisor · SaaS' },
    },
    featured: {
      title: 'Featured projects',
      subtitle: 'The most relevant parts of my work',
      ivolution: {
        label: 'Production work · 967 athletes · 13 sports',
        company: 'Ivolution Sport Science',
        description:
          '967 athletes monitored across 13 sports — football, rugby, athletics, hockey, swimming and more. Three-state alerts with dynamic percentile thresholds (p25/p75), 10,000+ recorded measurements and ES/EN/PT support. The system is still running after I left — the organization’s main decision-making tool.',
      },
      stackadvisor: {
        label: 'SaaS · In production',
        company: 'Personal project',
        description:
          '13 smart questions → the ideal stack with a detailed rationale + a personalized 12-week roadmap. Custom recommendation engine evaluating 25+ stacks. Built for founders without a CTO and developers making critical architecture decisions.',
      },
      viewProject: 'View project',
      viewAll: 'See all projects',
    },
    live: {
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
        title: 'Analytics Engineering',
        body: 'Data pipelines, analytical models and dashboards that actually get used.',
        items: ['SQL · BigQuery · dbt', 'Metabase · Dashboards', 'Dynamic alerts · Percentiles', 'Python · Pandas'],
      },
      web: {
        title: 'Web Development',
        body: 'Modern web applications from frontend to backend, production-ready.',
        items: ['React · Next.js · TypeScript', 'Node.js · REST APIs', 'Tailwind CSS · Framer Motion', 'Docker · Vercel'],
      },
      automation: {
        title: 'Automation',
        body: 'Automated workflows that remove repetitive work and scale from a single VPS.',
        items: ['n8n · Visual workflows', 'Telegram API · Notifications', 'Scraping · AI scoring', 'Docker · VPS'],
      },
    },
    aboutMe: 'About me',
  },

  about: {
    badge: 'Available · Analytics Engineer & Full-Stack Developer',
    greeting: "Hi, I'm",
    intro:
      "Analytics Engineer & Full-Stack Developer. Currently independent — building my own projects, looking for my next role and turning ideas into real products. I'm at my best where data, product and code meet.",
    contactMe: 'Contact me',
    experience: 'Experience',
    ivolution: {
      role: 'Analytics Engineer / Data Scientist',
      period: 'Apr 2025 — Mar 2026',
      body: "I designed the company's performance analytics system from scratch: BigQuery pipelines, dbt models and Metabase dashboards with dynamic percentile alerts (p25/p75) and multilingual ES/EN/PT support. 967 athletes monitored across 13 sports, 10,000+ recorded measurements. The system is still running after I left — the organization's main decision-making tool.",
    },
    building: "What I'm building",
    stackadvisor: {
      kind: 'SaaS · In production',
      body: 'A platform that solves tech-decision paralysis: 13 smart questions → a recommendation engine evaluating 25+ stacks → a personalized 12-week roadmap. Built for founders without a CTO and developers making critical architecture decisions.',
      visit: 'Visit StackAdvisor',
    },
    jobHunting: {
      kind: 'Automation · In progress',
      status: 'In development',
      body: 'A semi-automated job search system built on n8n: scraping relevant openings, AI-based scoring, an approval checkpoint over Telegram and a CV tailored to each offer. Designed to run autonomously on a VPS — because job hunting can be optimized too.',
      tags: ['n8n', 'Telegram API', 'AI', 'Automation', 'Docker', 'VPS'],
    },
    stack: 'Tech stack',
    stackCategories: { analytics: 'Analytics Engineering', web: 'Web Development' },
    automationSkill: 'n8n · Automation',
    languages: 'Languages',
    languageList: {
      es: { name: 'Spanish', level: 'Native', detail: 'Mother tongue' },
      en: { name: 'English', level: 'Professional', detail: 'Technical reading · Writing · Communication' },
      pt: { name: 'Portuguese', level: 'C1 Advanced', detail: 'Data analysis · Technical documentation' },
    },
    philosophy:
      '"The best products are born where data meets engineering. Data tells you what to build. Code lets you build it."',
    philosophyCaption: '— My working philosophy',
    seeProjects: 'See my projects',
  },

  dataScience: {
    titleA: 'Data Science',
    titleB: 'Projects',
    intro: 'Machine learning, statistical analysis and data pipelines — from raw dataset to actionable insight.',
    githubTitle: 'Jupyter notebooks & more analysis',
    githubBody: 'Browse all my notebooks and data analysis projects on GitHub.',
    githubCta: 'View on GitHub',
  },

  webProjects: {
    titleA: 'Web Development',
    titleB: 'Projects',
    intro: 'Modern web applications built with current technologies and best practices.',
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
    intro: "Have a role or a project in mind? Let's talk about how I can help.",
    info: 'Contact information',
    availabilityTitle: 'Availability',
    availabilityBody:
      'Open to full-time remote roles, freelance projects and collaborations. Response time: 24–48 hours.',
    formTitle: 'Send me a message',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    subjectPlaceholder: 'Choose a subject',
    subjects: {
      job: 'Job opportunity',
      web: 'Web development project',
      datascience: 'Data / Analytics project',
      both: 'Combined project',
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
