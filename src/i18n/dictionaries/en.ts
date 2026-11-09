import type { Dictionary } from './es'

const en: Dictionary = {
  meta: {
    siteTitle: 'Santiago Aragon Malak — Data Analyst',
    siteDescription:
      'Data analyst. I build dashboards that help people make decisions and I work with Python and SQL. At Ivolution Sport Science I worked with data from 967 athletes. Looking for a junior / mid-level role, remote or hybrid in Córdoba, Argentina.',
    ogDescription:
      'Dashboards for decision-making, Python and SQL. Plus full stack development and AI automation.',
    ogTagline: 'SQL · Python · dbt · Metabase · Power BI',
    ogAvailability: 'Looking for a data role · Remote',
    personDescription:
      'Data analyst: SQL, Python, dbt and dashboards in Metabase and Power BI. Also full stack development and AI automation.',
    about: {
      title: 'About me',
      description:
        'Data analyst. Co-founder of Coding Click and former Data Analytics Engineer at Ivolution Sport Science. Looking for a data role, remote or hybrid in Córdoba, Argentina.',
    },
    certifications: {
      title: 'Certifications & Education',
      description:
        'University diploma in Data Science & ML (UNC, 250h), Google IT Support Professional, Google AI Essentials, Cisco Python Essentials, IBM SkillsBuild and more.',
    },
    contact: {
      title: 'Contact',
      description:
        'Looking for a Data Analyst or Analytics Engineer role (junior / mid-level), remote or on-site / hybrid in Córdoba, Argentina. I also take on freelance projects. Get in touch.',
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
      title: 'Athlete Performance Dashboards — Ivolution',
      description:
        'Case study: the dashboards I built at Ivolution Sport Science to track 967 athletes across 13 sports, with dbt and Metabase.',
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
    roleShort: 'Data Analyst',
    cv: 'CV',
    downloadCv: 'Download CV',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    toggleMenu: 'Open or close menu',
    language: 'Language',
    rights: 'All rights reserved.',
    banner: {
      long: 'Looking for a Data Analyst role · Remote, or hybrid in Córdoba, Argentina',
      short: 'Available · Remote',
      cta: 'Get in touch',
    },
    backToDataScience: 'Back to data projects',
    letsTalk: "Let's talk about your project",
    workTogether: {
      title: "Let's talk",
      body: "I'm looking for my next data role (junior / mid-level). Remote from anywhere, or on-site / hybrid in Córdoba, Argentina.",
      freelance: 'I also take on freelance dashboard, automation and web development projects.',
      cta: 'Write to me',
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
    intro:
      "I have experience building visual dashboards that help people make decisions, and I work a lot with Python and SQL. I also have a background as a full stack developer and I use AI to automate tasks. I'm looking for a role where I can contribute and keep learning.",
    ctaProjects: 'See projects',
    heroImageAlt: 'Ivolution dashboard showing athletes’ strength metrics, with filters by date, athlete and exercise type',
    heroCaption: 'One of the dashboards I built at Ivolution Sport Science so the coaching staff could track each athlete’s performance.',
    statsCaption: 'What I worked with at Ivolution Sport Science',
    stats: {
      athletes: 'athletes',
      sports: 'sports',
      measurements: 'measurements analyzed',
    },
    featured: {
      title: 'Featured projects',
      subtitle: 'Data first; web development and AI too. In-house work, client projects and my own.',
      tabsLabel: 'Project type',
      tabs: {
        data: 'Data',
        dev: 'Development',
        ai: 'AI',
      },
      origins: {
        company: 'In-house work',
        client: 'Client project',
        personal: 'Personal project',
      },
      statuses: {
        finished: 'Completed',
        live: 'Online',
        production: 'In production',
        testing: 'In testing',
        demo: 'Demo with fictitious data',
        personalUse: 'Personal use',
      },
      carouselLabel: 'Featured projects',
      slideOf: '{n} of {total}',
      previous: 'Previous project',
      next: 'Next project',
      pause: 'Pause the carousel',
      play: 'Resume the carousel',
      goTo: 'Go to project {n}',
      viewCase: 'Read the case study',
      viewProject: 'View project',
      viewCode: 'View code',
      viewAll: 'See all projects',
    },
    live: {
      kicker: 'Live',
      title: 'Interactive dashboards',
      subtitle: 'They are published and working: you can open them and try them out.',
      viewAll: 'See all',
      ecommerceSub: 'I analyzed 100,000+ real orders from a Brazilian online store: who the best customers are, how many come back to buy again and how sales evolve.',
      cryptoSub: 'Bitcoin and other cryptocurrency prices that update instantly, with alerts when there are unusual moves.',
      argentinaSub: 'The dollar, inflation and country risk in one place, with public data that updates on its own.',
    },
    tools: {
      title: 'Tools I work with',
      subtitle: 'The data tools are the ones I use every day; the rest complement them.',
      data: 'Data',
      complements: 'Complements',
    },
    studies: {
      title: 'Education',
      subtitle: 'University studies, with their certificates.',
      viewCertificate: 'View certificate',
      pending: 'Degree in progress',
      allCertifications: 'See all certifications',
    },
    aboutMe: 'About me',
  },

  education: {
    items: {
      upso: {
        badge: 'Universidad Provincial del Sudoeste (Argentina)',
        title: 'Associate Degree in Programming Technologies',
        institution: 'UPSO (Argentina) · Distance learning',
        period: 'In progress · about 5 courses left · degree in mid-2027',
        hours: '',
        description: 'A distance-learning programming degree. I have about 5 courses left and expect the degree in mid-2027.',
        verifyLabel: '',
      },
      dsml: {
        badge: 'National University of Córdoba',
        title: 'University Diploma in Data Science & Machine Learning',
        institution: 'National University of Córdoba (FCEFyN) · ICARO',
        period: 'May 2025',
        hours: '250 hours · 10 credits',
        description: 'Continuing-education university diploma taught by ICARO Asociación Civil together with the Extension Office of the Faculty of Exact, Physical and Natural Sciences at UNC (Argentina). This is where I learned Python in depth.',
        verifyLabel: 'Verify at UNC (code: DS240502)',
      },
      cyber: {
        badge: 'Universidad San Ignacio de Loyola',
        title: 'Diploma in Cybersecurity',
        institution: 'Universidad San Ignacio de Loyola (USIL) · taught by Mundos E',
        period: 'September 2025',
        hours: '200 hours',
        description: 'Diploma from Universidad San Ignacio de Loyola (USIL), taught by Mundos E. Foundations and hands-on practice in information security.',
        verifyLabel: 'View certificate',
      },
    },
  },

  about: {
    badge: 'Available · Data Analyst',
    greeting: "Hi, I'm",
    intro:
      "I'm a data analyst. I taught myself to code and then completed the University Diploma in Data Science and Machine Learning at UNC (Argentina), where I learned Python in depth. At Ivolution Sport Science I built dashboards that helped sports professionals make data-driven decisions. I also have a background as a full stack developer and I use AI to automate tasks.",
    contactMe: 'Contact me',
    experience: 'Experience',
    jobs: {
      codingClick: {
        role: 'Co-founder · Web development, data and automation',
        company: 'Coding Click',
        period: 'Present',
        location: 'Argentina · Remote',
        summary: 'I co-founded Coding Click, where we build custom software for small businesses: websites, management systems, dashboards and automations.',
        bullets: [
          'I build websites and custom systems with React/Next.js, Node.js and PostgreSQL/Supabase.',
          'I built the course platform for Instituto Coubertin, which is now in production; I maintain the system and its infrastructure.',
          'I set up automations and reports with n8n, Make and APIs to replace manual tasks.',
          'I take part in the whole process of each project: discovery, proposal, development, launch and maintenance.',
        ],
      },
      ivolution: {
        role: 'Data Analytics Engineer',
        company: 'Ivolution Sport Science · Fixed-term contract',
        period: 'Apr 2025 — Mar 2026',
        location: 'Argentina · Remote',
        summary: 'I built dashboards with athlete metrics so sports professionals could make decisions.',
        bullets: [
          'Built dashboards in Metabase to track 967 athletes across 13 sports, with 10,000+ measurements.',
          'Cleaned and transformed the test data with SQL and dbt so the dashboards were reliable and easy to maintain.',
          'Added automatic alerts that compare each test with the athlete’s history and flag whether they are fatigued, in their normal range or above their usual level.',
          'Moved models from Metabase to dbt, merged duplicate athletes across environments, made Spanish, English and Portuguese versions of the dashboards, and automated tasks with n8n.',
          'Worked through assigned tasks, with a daily stand-up with the team every morning.',
        ],
      },
    },
    building: "What I'm building",
    online: 'Online',
    stackadvisor: {
      kind: 'Personal project · Web development + AI',
      body: 'A web tool that asks a short questionnaire, recommends which technologies to use for a software project and explains why. It uses AI (Gemini) to put together a tailored development plan.',
      visit: 'Visit StackAdvisor',
    },
    jobHunting: {
      title: 'Job search automation',
      kind: 'AI and automation · Personal use',
      body: 'An n8n workflow that collects job openings, scores them with AI against my profile, asks for my approval on Telegram, tailors my CV to each offer and logs everything in Google Sheets.',
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
      'From the database to launch: custom systems for clients, my own AI projects and real-time apps. Next.js, TypeScript, PostgreSQL/Supabase.',
  },

  certifications: {
    titleA: 'Certifications',
    titleB: '& Education',
    intro:
      'Continuous learning in Data Science, programming, AI and web development — from Google, IBM, Cisco and international universities.',
    university: 'University Education',
    international: 'International certifications',
    credlyTitle: 'See all my verified badges on Credly',
    credlyBody: 'Google IT Support · IBM Web Dev · and more verifiable badges',
    viewCertificate: 'View certificate',
    verify: 'Verify',
    viewBadge: 'View badge on Credly',
    categories: {
      data: 'Data',
      google: 'Google',
      programming: 'Programming',
      ibm: 'IBM',
      ai: 'Artificial Intelligence',
      design: 'Design & UX',
    },
    certs: {
      datacamp: { date: 'In progress', detail: 'Data Analyst career track' },
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
      "I'm looking for a data role (junior / mid-level): remote from anywhere, or on-site / hybrid in Córdoba, Argentina. I also take on freelance projects. I reply within 24–48 hours.",
    formTitle: 'Send me a message',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    subjectPlaceholder: 'Choose a subject',
    subjects: {
      job: 'Job opportunity',
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
      'Projects on real data, published and working: from sales analysis to real-time prices.',
    live: 'Live',
    items: {
      ecommerce: {
        title: 'E-commerce sales',
        subtitle: 'Olist Brazil (PT-BR) · 100k+ orders · dbt + PostgreSQL',
        description:
          'End-to-end data pipeline with RFM segmentation, cohort retention, revenue trends and seller performance. Real data from 93k unique customers in the Brazilian market. Interface available in English, Spanish and Portuguese.',
      },
      crypto: {
        title: 'Real-time crypto prices',
        subtitle: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
        description:
          'Real-time dashboard with TradingView candles, volume, 6 timeframes and z-score anomaly detection. Live trade feed.',
      },
      argentina: {
        title: "Argentina's economy",
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
    badge: 'In-house work · Apr 2025 — Mar 2026',
    title: 'Athlete performance dashboards',
    introA: 'Dashboards I built to track',
    introStrong: '967 athletes across 13 sports',
    introB:
      '— football, rugby, athletics, hockey, swimming, basketball and more — so the coaching staff could make data-driven decisions. Built with SQL, BigQuery, dbt and Metabase.',
    multilingualTag: 'ES/EN/PT',
    stats: {
      athletes: 'athletes',
      sports: 'sports',
      measurements: 'recorded measurements',
      languages: 'languages (ES/EN/PT)',
    },
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
