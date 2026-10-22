import type { Dictionary } from './es'

const pt: Dictionary = {
  meta: {
    siteTitle: 'Santiago Aragon Malak — Hybrid Engineer: Data + Full Stack + IA',
    siteDescription:
      'Hybrid Engineer: Data + Full Stack + IA. Construo pipelines em BigQuery + dbt, dashboards, aplicações React/Next.js e automações com n8n + LLMs. 967 atletas monitorados em produção na Ivolution. Aberto a vagas remotas.',
    ogDescription:
      'Modelo os dados, construo a interface que os consome e automatizo o processo completo. BigQuery · dbt · Next.js · n8n + LLMs.',
    ogTagline: 'SQL · Python · BigQuery · dbt · Next.js · n8n + LLMs',
    ogAvailability: 'Disponível para vagas remotas',
    personDescription:
      'Hybrid Engineer: Data + Full Stack + IA. SQL, Python, BigQuery, dbt, React/Next.js e automação com n8n + LLMs.',
    about: {
      title: 'Sobre mim',
      description:
        'Hybrid Engineer: Data + Full Stack + IA. Founder da Coding Click e ex-Data Scientist / Analytics Engineer na Ivolution Sport Science (967 atletas monitorados). Aberto a vagas remotas.',
    },
    certifications: {
      title: 'Certificações & Formação',
      description:
        'Diploma universitário em Data Science & ML (UNC, 250h), Google IT Support Professional, Google AI Essentials, Python Essentials da Cisco, IBM SkillsBuild e mais.',
    },
    contact: {
      title: 'Contato',
      description:
        'Aberto a vagas remotas júnior / pleno: Analytics Engineer, Data Analyst, Data Scientist, Full Stack ou AI/Automation Engineer. Também projetos freelance. Fale comigo.',
    },
    dashboards: {
      title: 'Dashboards interativos',
      description:
        'Dashboards em produção com dados reais: E-Commerce Analytics sobre 100 mil+ pedidos da Olist com dbt + PostgreSQL, Crypto Live Dashboard com WebSocket da Binance e Argentina Macro Dashboard.',
    },
    dataScience: {
      title: 'Projetos de Dados',
      description:
        'Projetos de dados: sistema de monitoramento para 967 atletas na Ivolution (BigQuery + dbt + Metabase), plataforma dbt sobre 100 mil+ pedidos da Olist, machine learning com scikit-learn e segmentação de usuários.',
    },
    ivolution: {
      title: 'Performance Monitoring System — Ivolution',
      description:
        'Estudo de caso: sistema de análise de desempenho para 967 atletas em 13 esportes com BigQuery, dbt e Metabase. Alertas dinâmicos por percentil, ainda em operação após minha saída.',
    },
    olist: {
      title: 'E-Commerce Data Platform — Olist',
      description:
        'Estudo de caso: pipeline end-to-end sobre 100 mil+ pedidos reais da Olist com PostgreSQL e dbt. Segmentação RFM, retenção por coortes e tendências de receita em SQL.',
    },
    performanceMonitor: {
      title: 'Athlete Performance Monitor',
      description:
        'Dataset sintético de 6.500+ medições CMJ/IMTP gerado em Python e sistema de alertas neuromusculares com limiares dinâmicos p25/p75. Privacy-first: zero dados pessoais.',
    },
    webProjects: {
      title: 'Projetos Full Stack',
      description:
        'Projetos full stack: Instituto Coubertin (LMS sob medida), Turnex (gestão de complexos esportivos), StackAdvisor (SaaS com IA), site da Coding Click e mais. Next.js, TypeScript, Supabase e PostgreSQL.',
    },
  },

  common: {
    nav: {
      home: 'Início',
      about: 'Sobre mim',
      webProjects: 'Full Stack',
      dataScience: 'Dados',
      dashboards: 'Dashboards',
      certifications: 'Certificações',
      contact: 'Contato',
    },
    roleShort: 'Hybrid Engineer',
    roleFull: 'Hybrid Engineer: Data + Full Stack + IA',
    cv: 'CV',
    downloadCv: 'Baixar CV',
    themeToLight: 'Mudar para modo claro',
    themeToDark: 'Mudar para modo escuro',
    toggleMenu: 'Abrir ou fechar menu',
    language: 'Idioma',
    rights: 'Todos os direitos reservados.',
    banner: {
      long: 'Disponível para vagas remotas e projetos freelance · Córdoba, Argentina',
      short: 'Open to work · Remoto',
      cta: 'Contato',
    },
    backToDataScience: 'Voltar aos projetos de dados',
    letsTalk: 'Vamos conversar sobre seu projeto',
    workTogether: {
      title: 'Vamos trabalhar juntos?',
      body: 'Busco vagas remotas júnior / pleno como Analytics Engineer, Data Analyst, Data Scientist, Full Stack ou AI/Automation Engineer. Também aceito projetos freelance de automação, dashboards e desenvolvimento sob medida.',
      cta: 'Iniciar conversa',
    },
  },

  projectCard: {
    code: 'Código',
    notebook: 'Notebook',
    viewDetail: 'Ver detalhes',
    viewProject: 'Ver projeto',
    showCode: 'Ver código',
    hideCode: 'Ocultar código',
  },

  home: {
    availability: 'Aberto a vagas remotas e projetos',
    heroSubtitle: 'Data + Full Stack + IA',
    intro:
      'Construo sistemas de dados e software que rodam em produção: pipelines em BigQuery + dbt, dashboards, aplicações React/Next.js e automações com IA. Modelo os dados, construo a interface que os consome e automatizo o processo completo.',
    ctaProjects: 'Ver projetos',
    ctaDashboards: 'Dashboards ao vivo',
    stats: {
      athletes: { label: 'Atletas monitorados', sub: 'Data · Ivolution' },
      orders: { label: 'Pedidos modelados', sub: 'dbt · Olist' },
      stacks: { label: 'Stacks avaliados', sub: 'StackAdvisor · IA' },
      measurements: { label: 'Medições', sub: 'BigQuery · Ivolution' },
    },
    featured: {
      title: 'Projetos em destaque',
      subtitle: 'Dados, produto e automação — em empresa, para clientes e próprios',
      ivolution: {
        label: 'Trabalho em empresa · 967 atletas · 13 esportes',
        company: 'Ivolution Sport Science · Data',
        description:
          'Projetei do zero o sistema de monitoramento de fadiga neuromuscular para 967 atletas de 13 esportes: modelos em BigQuery + dbt, dashboards no Metabase e limiares dinâmicos por percentil (p25/p75) que classificam cada atleta como FADIGADO / ATENÇÃO / SUPERCOMPENSAÇÃO. Principal ferramenta de decisão da equipe técnica, com suporte ES/EN/PT.',
      },
      coubertin: {
        label: 'Projeto de cliente · LMS sob medida',
        company: 'Coding Click · Full Stack',
        description:
          'Plataforma educacional completa para um instituto de formação esportiva: catálogo de cursos, pagamentos com Stripe e matrícula automática, sala de aula virtual com progresso, fórum por curso, avaliações com correção e painel de administração. Auth e dados no Supabase com políticas RLS. Em fase final de testes e carga de conteúdo.',
      },
      turnex: {
        label: 'Sistema de gestão · Demo funcional',
        company: 'Coding Click · Full Stack + SQL',
        description:
          'Sistema de gestão para complexos esportivos: sócios e contas correntes, mensalidades, reservas de quadras, horários fixos, controle de acesso com QR, cobranças, caixa diário e portal do sócio. PostgreSQL com SQL direto e migrações versionadas, perfis de acesso, tarefas diárias com cron e testes unitários + E2E.',
      },
      stackadvisor: {
        label: 'SaaS própria · Em produção',
        company: 'Projeto próprio · Full Stack + IA',
        description:
          'Questionário que avalia 35 combinações de stacks e recomenda a ideal com justificativa, roadmap de 12 semanas e estimador de custos. O Blueprint premium usa o Gemini para gerar arquitetura, esquema de banco de dados e plano de desenvolvimento sob medida para o projeto.',
      },
      viewCase: 'Ver estudo de caso',
      viewProject: 'Ver projeto',
      viewCode: 'Ver código',
      viewAllFullStack: 'Todos os projetos Full Stack',
      viewAllData: 'Todos os projetos de dados',
    },
    live: {
      kicker: 'Ao vivo',
      title: 'Dashboards interativos',
      subtitle: 'Dados reais, em produção — é só abrir e funcionam.',
      viewAll: 'Ver todos',
      ecommerceSub: 'Olist Brasil (PT-BR) · 100 mil+ pedidos · dbt + PostgreSQL',
      cryptoSub: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
      argentinaSub: 'Câmbio · Inflação · Risco-país — dados em tempo real',
    },
    specialties: {
      title: 'Áreas de especialização',
      analytics: {
        title: 'Data & Analytics',
        body: 'Dados dispersos → modelos limpos e dashboards usados para decidir.',
        items: ['SQL · BigQuery · dbt · PostgreSQL', 'Metabase · Power BI', 'Python · pandas · scikit-learn', 'Alertas dinâmicos · Percentis'],
      },
      web: {
        title: 'Full Stack',
        body: 'Ideias de produto → apps completos, do modelo de dados ao deploy.',
        items: ['React · Next.js · TypeScript', 'Node.js · APIs REST', 'Supabase · PostgreSQL', 'Tailwind CSS · Docker · Vercel'],
      },
      automation: {
        title: 'IA & Automação',
        body: 'Processos manuais → fluxos automáticos com LLMs integrados.',
        items: ['n8n · Make · Zapier', 'Claude API · Gemini · Groq', 'Scraping · Scoring com IA', 'Telegram API · Alertas'],
      },
    },
    aboutMe: 'Sobre mim',
  },

  about: {
    badge: 'Disponível · Hybrid Engineer: Data + Full Stack + IA',
    greeting: 'Olá, eu sou',
    intro:
      'Construo sistemas de dados e software que rodam em produção. Perfil híbrido: modelo os dados, construo a interface que os consome e automatizo o processo completo — com SQL, Python, BigQuery e dbt do lado dos dados, React/Next.js e TypeScript do lado do produto, e n8n + LLMs para automatizar.',
    contactMe: 'Fale comigo',
    experience: 'Experiência',
    jobs: {
      codingClick: {
        role: 'Founder & Hybrid Engineer — Full Stack, Data & Automation',
        company: 'Coding Click · Profissional independente',
        period: 'Set 2025 — Atual',
        location: 'Córdoba, Argentina · Híbrido',
        summary: 'Desenvolvimento de software end-to-end para pequenas e médias empresas: web, sistemas sob medida, dados e automação.',
        bullets: [
          'Projeto e desenvolvo sites, e-commerce e sistemas sob medida com React/Next.js, Node.js e PostgreSQL/Supabase — de landing pages a portais internos de gestão.',
          'Construí a plataforma LMS sob medida do Instituto Coubertin com Next.js, Supabase e Vercel, com documentação de produto completa; em fase final de testes e carga de conteúdo.',
          'Implemento automações e relatórios de dados com n8n, Make e APIs REST: sincronização entre sistemas, alertas automáticos e dashboards de acompanhamento que substituem processos manuais.',
          'Conduzo o ciclo completo de cada projeto: levantamento técnico, proposta, desenvolvimento, implantação e manutenção.',
        ],
      },
      ivolution: {
        role: 'Data Scientist / Analytics Engineer',
        company: 'Ivolution Sport Science · Contrato temporário',
        period: 'Abr 2025 — Mar 2026',
        location: 'Argentina · Remoto',
        summary: 'Projetei e implementei do zero o sistema de análise de desempenho esportivo da organização.',
        bullets: [
          'Construí o sistema de monitoramento de fadiga neuromuscular para 967 atletas de 13 esportes com BigQuery, dbt e Metabase, usado como principal ferramenta de decisão da equipe técnica.',
          'Implementei limiares dinâmicos por percentil (p25 fadiga / p75 supercompensação) que classificam automaticamente cada atleta como FADIGADO / ATENÇÃO / SUPERCOMPENSAÇÃO.',
          'Migrei os modelos de CMJ Rebound do Metabase para o dbt, com surrogate keys e deduplicação de atletas entre os ambientes de produção e desenvolvimento.',
          'Desenvolvi o framework de dashboard Return to Play e a versão multilíngue (ES/EN/PT) dos dashboards; automatizei fluxos do sistema com n8n.',
        ],
      },
    },
    building: 'O que estou construindo',
    stackadvisor: {
      kind: 'SaaS · Em produção',
      body: 'SaaS própria que resolve a paralisia na escolha de tecnologia: um questionário avalia 35 combinações de stacks e devolve a ideal com justificativa, roadmap de 12 semanas e estimador de custos. O Blueprint premium gera com o Gemini a arquitetura, o esquema de banco de dados e o plano de desenvolvimento do projeto.',
      visit: 'Visitar StackAdvisor',
    },
    jobHunting: {
      kind: 'IA & Automação · Uso pessoal',
      body: 'Pipeline em n8n que coleta vagas, pontua cada uma com IA de acordo com meu perfil, pede aprovação pelo Telegram, adapta o CV a cada oferta e registra tudo no Google Sheets — porque buscar emprego também pode ser automatizado.',
    },
    stack: 'Stack tecnológico',
    stackCategories: {
      data: 'Dados',
      fullstack: 'Full Stack',
      ai: 'IA & Automação',
      security: 'Cibersegurança',
    },
    securitySkills: ['Segurança na nuvem', 'Redes', 'Gestão de incidentes', 'OSINT · Forense'],
    education: 'Formação',
    educationList: {
      upso: {
        title: 'Curso Técnico em Tecnologias da Programação',
        institution: 'UPSO (Argentina) · Ensino a distância',
        period: 'Em andamento · conclusão prevista no início de 2027',
      },
      dsml: {
        title: 'Diploma universitário em Data Science & Machine Learning',
        institution: 'Universidade Nacional de Córdoba · ICARO',
        period: '2025',
      },
      cyber: {
        title: 'Diploma em Cibersegurança',
        institution: 'Universidade Nacional de Córdoba (FCEFyN)',
        period: '2025',
      },
    },
    allCertifications: 'Ver todas as certificações',
    languages: 'Idiomas',
    languageList: {
      es: { name: 'Espanhol', level: 'Nativo', detail: 'Língua materna' },
      en: {
        name: 'Inglês',
        level: 'Leitura técnica',
        detail: 'Leitura fluente de documentação e material técnico · conversação em desenvolvimento',
      },
      pt: { name: 'Português', level: 'C1 Avançado', detail: 'Conversação fluente · Documentação técnica' },
    },
    philosophy:
      '"Os melhores produtos nascem na interseção entre dados e engenharia. Os dados dizem o que construir. O código permite construí-lo."',
    philosophyCaption: '— Minha filosofia de trabalho',
    seeProjects: 'Ver meus projetos',
  },

  dataScience: {
    titleA: 'Projetos de',
    titleB: 'Data & Analytics',
    intro:
      'Analytics engineering, machine learning e análise estatística — do dado bruto ao modelo limpo e ao insight acionável.',
    githubTitle: 'Jupyter Notebooks & mais análises',
    githubBody: 'Explore todos os meus notebooks e projetos de análise de dados no GitHub.',
    githubCta: 'Ver no GitHub',
  },

  webProjects: {
    titleA: 'Projetos',
    titleB: 'Full Stack',
    intro:
      'Do modelo de dados ao deploy: sistemas sob medida para clientes, produtos próprios com IA e apps em tempo real. Next.js, TypeScript, PostgreSQL/Supabase e LLMs.',
  },

  certifications: {
    titleA: 'Certificações',
    titleB: '& Formação',
    intro:
      'Formação contínua em Data Science, programação, IA e desenvolvimento web — do Google, IBM, Cisco e universidades internacionais.',
    university: 'Formação universitária',
    universityBadge: 'Universidade Nacional de Córdoba',
    international: 'Certificações internacionais',
    credlyTitle: 'Ver todas as minhas badges verificadas no Credly',
    credlyBody: 'Google IT Support · IBM Web Dev · e mais badges verificáveis',
    viewCertificate: 'Ver certificado',
    verify: 'Verificar',
    viewBadge: 'Ver badge no Credly',
    universities: {
      dsml: {
        name: 'Diploma universitário em Data Science & Machine Learning',
        date: 'Maio 2025',
        hours: '250 horas · 10 créditos',
        description:
          'Diploma universitário de formação continuada ministrado pela ICARO Asociación Civil em conjunto com a Secretaria de Extensão da Faculdade de Ciências Exatas, Físicas e Naturais da UNC (Argentina).',
        verifyLabel: 'Validar na UNC (código: DS240502)',
      },
      cyber: {
        name: 'Diploma em Cibersegurança',
        date: 'Setembro 2025',
        hours: '200 horas',
        description:
          'Diploma ministrado pela Faculdade de Ciências Exatas, Físicas e Naturais da UNC em conjunto com a Mundos E e a Universidad San Ignacio de Loyola. Fundamentos e prática em segurança da informação.',
        verifyLabel: 'Ver certificado',
      },
    },
    categories: {
      google: 'Google',
      programming: 'Programação',
      ibm: 'IBM',
      ai: 'Inteligência Artificial',
      design: 'Design & UX',
    },
    certs: {
      itSupport: { date: 'Jun 2025', detail: '5 cursos — Redes, SO, Administração, Segurança' },
      aiEssentials: { date: 'Ago 2024', detail: 'Fundamentos de IA aplicados ao trabalho' },
      python1: { date: 'Out 2024', detail: 'Fundamentos de Python 3, algoritmos, estruturas de dados' },
      python2: { date: 'Out 2024', detail: 'POO, módulos e aplicações avançadas em Python' },
      jhu: { date: 'Ago 2024', detail: 'Desenvolvimento web moderno — JHU Whiting School of Engineering' },
      ibmWeb: { date: 'Out 2024', detail: 'Fundamentos de desenvolvimento web — badge verificável no Credly' },
      elementsOfAi: { date: 'Fev 2025', detail: '2 créditos ECTS — curso oficial da Universidade de Helsinque' },
      ux: { date: 'Set 2024', detail: '30 horas — Princípios de experiência do usuário' },
      webDesign: { date: 'Ago 2024', detail: '30 horas — Design e diagramação web' },
    },
  },

  contact: {
    title: 'Contato',
    intro: 'Tem uma vaga ou um projeto em mente? Me escreva e conversamos.',
    info: 'Informações de contato',
    availabilityTitle: 'Disponibilidade',
    availabilityBody:
      'Disponível para vagas remotas (júnior / pleno) e projetos freelance. Respondo em 24–48 horas.',
    formTitle: 'Envie uma mensagem',
    name: 'Nome',
    email: 'E-mail',
    subject: 'Assunto',
    subjectPlaceholder: 'Escolha um assunto',
    subjects: {
      job: 'Oportunidade de trabalho / Vaga remota',
      fullstack: 'Projeto Full Stack / Sistema sob medida',
      data: 'Projeto de dados / Dashboards',
      ai: 'Automação com IA',
      other: 'Outro',
    },
    message: 'Mensagem',
    honeypot: 'Deixe em branco',
    send: 'Enviar mensagem',
    sending: 'Enviando...',
    success: 'Mensagem enviada! Respondo em breve.',
    errors: {
      rate_limited: 'Muitas tentativas. Aguarde um momento e tente novamente.',
      too_large: 'A mensagem é longa demais.',
      missing_fields: 'Todos os campos são obrigatórios.',
      invalid_email: 'O formato do e-mail não é válido.',
      generic: 'Não foi possível enviar a mensagem. Tente novamente ou me escreva por e-mail.',
    },
  },

  dashboards: {
    kicker: 'Projetos ao vivo',
    title: 'Dashboards interativos',
    intro:
      'Projetos em produção com dados reais — de pipelines de dados a streams em tempo real. Todos publicados e funcionando.',
    items: {
      ecommerce: {
        subtitle: 'Olist Brasil (PT-BR) · 100 mil+ pedidos · dbt + PostgreSQL',
        description:
          'Pipeline de dados end-to-end com segmentação RFM, retenção por coortes, tendências de receita e desempenho de vendedores. Dados reais de 93 mil clientes únicos do mercado brasileiro. Interface em inglês, espanhol e português.',
      },
      crypto: {
        subtitle: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
        description:
          'Dashboard em tempo real com candles TradingView, volume, 6 timeframes e detecção de anomalias por z-score. Feed de trades ao vivo.',
      },
      argentina: {
        subtitle: 'Câmbio · Inflação · Risco-país — dados em tempo real',
        description:
          'Cotações ao vivo (oficial, blue, MEP, CCL, cripto, cartão), diferença cambial, evolução histórica, inflação mensal e anual (INDEC) e risco-país EMBI+. Atualização a cada 60s.',
      },
    },
    code: 'Código',
    open: 'Abrir',
    openDashboard: 'Abrir dashboard',
    bestOnDesktop: 'Melhor experiência no desktop',
    loading: 'Carregando {title}...',
    otherProjects: 'Outros projetos',
    viewRepo: 'Ver repo',
    others: {
      platform: {
        title: 'E-Commerce Data Platform',
        desc: 'Pipeline dbt + PostgreSQL com 4 camadas de modelos sobre 100 mil pedidos da Olist',
      },
      argentinaRepo: {
        title: 'Argentina Macro — Repo',
        desc: 'Código-fonte do dashboard macroeconômico: câmbio, inflação do INDEC e risco-país.',
      },
    },
  },

  ivolution: {
    badge: 'Trabalho real · Abr 2025 — Mar 2026',
    introA: 'Sistema de análise de desempenho projetado do zero para',
    introStrong: '967 atletas em 13 esportes',
    introB:
      '— futebol, rugby, atletismo, hóquei, natação, basquete e mais. Construído com SQL, BigQuery, dbt e Metabase. O sistema continua em operação após minha saída.',
    multilingualTag: 'ES/EN/PT',
    stats: {
      athletes: 'atletas monitorados',
      sports: 'esportes cobertos',
      measurements: 'medições registradas',
      active: 'ativo após minha saída',
    },
    activeValue: '1+ ano',
    screenshotsTitle: 'Capturas do sistema',
    screenshotsHint: 'Clique em qualquer imagem para vê-la em tela cheia.',
    close: 'Fechar',
    previous: 'Anterior',
    next: 'Próxima',
    enlarge: 'Ampliar: {title}',
    screenshots: {
      dashboard: {
        title: 'Dashboard principal — Dinamômetro vs IMTP',
        description:
          'KPIs em tempo real: MaxForce, RFDA50, RFDA250 e TimMaxForce. Comparativo entre dinamômetro e IMTP com filtros por data, atleta, tipo de exercício e instituição.',
      },
      forceVelocity: {
        title: 'Perfil Força-Velocidade',
        description:
          'Correlações entre métricas: Velocidade Máx vs Força Máx, Carga vs Impulso Máx, Velocidade vs Distância Máx, 1RM por esporte. Análise multidimensional de desempenho.',
      },
      hip: {
        title: 'Relatório de Estabilidade do Quadril',
        description:
          'Análise de razões funcionais com o teste Push-Pull simples. Histograma da diferença de altura CMIR/DJ e série temporal para acompanhamento longitudinal.',
      },
      comparisons: {
        title: 'v2 CMJ - IMTP II — Média Móvel vs Última Avaliação',
        description:
          'Dashboard individual com média móvel de 5 avaliações e limiares dinâmicos de supercompensação/fadiga. Mostra o RFD de frenagem (CMJ) e o RFD em 100ms (IMTP) com a série histórica completa e o estado atual do atleta.',
      },
      fatigue: {
        title: 'ASH Test - CMJ Bilateral — Controle de Fadiga Neuromuscular',
        description:
          'Monitoramento de fadiga com o ASH "I" Test (ombro) e CMJ Bilateral (membros inferiores). Tendência de força de pico esquerda/direita comparada com o dia anterior e série histórica.',
      },
      athletes: {
        title: 'Comparações individuais — Dashboard Comparativo',
        description:
          'Visão lado a lado de dois atletas com gauges de CMJ (Altura do Salto), IMTP (Força de Pico) e Drop Jump (RSI). Compara o desempenho entre atletas da mesma instituição em tempo real.',
      },
    },
  },

  olist: {
    badge: 'Projeto próprio · Analytics Engineering · End-to-end',
    subtitle: 'Olist Brasil — Dados reais de marketplace',
    introA: 'Pipeline de dados end-to-end sobre',
    introStrong: '100.000+ pedidos reais',
    introB:
      'do e-commerce brasileiro. PostgreSQL + dbt com 4 camadas de modelos, segmentação RFM, retenção por coortes e tendências de receita em SQL puro. CI/CD com GitHub Actions e dashboard publicado em produção.',
    stats: { orders: 'pedidos analisados', layers: 'camadas dbt', marts: 'marts analíticos', ci: 'GitHub Actions' },
    architectureTitle: 'Arquitetura do pipeline',
    architectureIntro: 'Fluxo completo dos dados brutos do Kaggle até o dashboard em produção.',
    nodes: {
      raw: 'Kaggle · Olist Brazil Dataset · 9 tabelas relacionais',
      postgres: 'Banco de dados de origem · Docker local',
      intermediate: 'int_orders_enriched · int_seller_performance · lógica de negócio',
    },
    modelsTitle: 'Estrutura de modelos dbt',
    modelsIntro: 'Cada camada tem uma responsabilidade clara. Staging não tem joins; intermediate não é exposto ao dashboard.',
    layers: {
      staging: 'Renomeação, conversão de tipos, deduplicação. Fonte única da verdade.',
      intermediate: 'Joins e lógica de negócio. Não exposto ao dashboard.',
      marts: 'Tabelas analíticas finais. Consumidas pelo dashboard.',
    },
    sqlTitle: 'SQL — Modelos principais',
    sqlIntro: 'Os três marts analíticos do projeto. Clique para expandir o código.',
    snippets: {
      rfm: 'Segmentação de clientes por Recência, Frequência e Valor monetário. NTILE(5) cria quintis para o scoring e depois a lógica de segmentos roda sobre o score combinado.',
      cohort:
        'Retenção mensal de coortes de clientes. Usa FIRST_VALUE para fixar o tamanho inicial de cada coorte e calcular a taxa de retenção em cada mês seguinte.',
      revenue: 'Tendências de receita mensal por estado e categoria. Total acumulado com SUM e ROWS BETWEEN, e variação mês a mês via LAG.',
    },
    liveDashboard: 'Ver dashboard ao vivo',
    githubCode: 'Código no GitHub',
  },

  performanceMonitor: {
    badge: 'Demo · Dados sintéticos · Python + SQL',
    subtitle: 'CMJ · IMTP · Sistema de alertas neuromusculares',
    introA: 'Dataset sintético de',
    introStrong: '~6.500 medições',
    introB:
      'gerado em Python — distribuições calibradas com normas publicadas na literatura de sport science. Por cima: sistema de alertas com limiares dinâmicos por percentil (p25/p75) e acompanhamento longitudinal com média móvel de 5 avaliações.',
    whyTitle: 'Por que dados sintéticos?',
    whyBody:
      'Dados reais de atletas contêm informações de saúde sensíveis. Em vez de omiti-los ou simplificá-los, gerei dados fictícios com a mesma estrutura e as mesmas distribuições estatísticas — IDs com hash desde a origem, nenhum nome real armazenado. A metodologia é idêntica à do sistema real que construí na Ivolution.',
    stats: { athletes: 'atletas gerados', sports: 'esportes', measurements: 'medições', months: 'meses de dados' },
    measurementsValue: '6.500+',
    pipelineTitle: 'Pipeline',
    pipelineIntro: 'Da geração até os alertas em produção.',
    nodes: {
      generate: 'Faker · numpy · hashlib — 150 atletas, 6.500+ medições, 0 PII',
      csv: 'Saída limpa · athlete_id com hash · pronto para carregar',
      alerts: 'Limiares dinâmicos p25/p75 · SUPERCOMPENSAÇÃO / ATENÇÃO / FADIGADO',
      trend: 'Média móvel de 5 avaliações · % de variação desde a baseline',
      dashboardLabel: 'Dashboard de monitoramento',
      dashboard: 'Estado neuromuscular em tempo real · visão por atleta e por esporte',
    },
    alertsTitle: 'Lógica de alertas',
    alertsIntro: 'Janela dinâmica de 90 dias por atleta e tipo de exercício.',
    states: {
      super: {
        label: 'SUPERCOMPENSAÇÃO',
        condition: 'métrica ≥ p75',
        desc: 'O atleta supera sua faixa habitual. Pico de desempenho ou overreaching positivo.',
      },
      attention: { label: 'ATENÇÃO', condition: 'p25 < métrica < p75', desc: 'Dentro da faixa normal. Acompanhar a tendência.' },
      fatigued: {
        label: 'FADIGADO',
        condition: 'métrica ≤ p25',
        desc: 'Queda abaixo do quartil inferior. Revisar a carga de treino.',
      },
    },
    codeTitle: 'Código',
    codeIntro: 'Geração do dataset e os dois modelos SQL principais.',
    snippets: {
      generate: {
        title: 'Geração do dataset',
        description:
          'O Faker gera identidades fictícias que recebem hash imediatamente — nenhum nome real chega ao CSV. O numpy simula distribuições CMJ/IMTP calibradas com normas publicadas na literatura de sport science.',
      },
      alerts: {
        title: 'Sistema de alertas — Limiares dinâmicos',
        description:
          'PERCENTILE_CONT calcula p25/p75 por atleta e tipo de exercício nos últimos 90 dias. A última medição é comparada com essa janela dinâmica para classificar o estado neuromuscular.',
      },
      rolling: {
        title: 'Tendência individual — Média móvel de 5 avaliações',
        description:
          'Acompanhamento longitudinal por atleta. A média móvel de 5 avaliações suaviza a variabilidade do dia e revela tendências sustentadas de melhora ou queda.',
      },
    },
    scriptOnGithub: 'Ver script no GitHub',
    realSystem: 'Ver o sistema real — Ivolution',
  },

  notFound: {
    title: 'Esta página não existe... ou eu apaguei sem querer',
    subtitle: 'O modelo previu que você estaria aqui — mas errou.',
    meta: 'Erro 404 · Rota não encontrada · Accuracy do modelo: 0%',
    searching: 'pagina-que-voce-busca',
    prediction: 'Previsão',
    confidence: 'Confiança',
    comment: '# não muito útil',
    home: 'Voltar ao início',
    projects: 'Ver projetos',
  },
}

export default pt
