import type { Dictionary } from './es'

const pt: Dictionary = {
  meta: {
    siteTitle: 'Santiago Aragon Malak — Analista de Dados',
    siteDescription:
      'Analista de dados. Crio dashboards para a tomada de decisões e trabalho com Python e SQL. Na Ivolution Sport Science trabalhei com dados de 967 atletas. Procuro vaga júnior / pleno, remota ou híbrida em Córdoba (Argentina).',
    ogDescription:
      'Dashboards para tomar decisões, Python e SQL. Também desenvolvimento full stack e automação com IA.',
    ogTagline: 'SQL · Python · dbt · Metabase · Power BI',
    ogAvailability: 'Procuro vaga em dados · Remoto',
    personDescription:
      'Analista de dados: SQL, Python, dbt e dashboards no Metabase e no Power BI. Também desenvolvimento full stack e automação com IA.',
    about: {
      title: 'Sobre mim',
      description:
        'Analista de dados. Cofundador da Coding Click e ex-Data Analytics Engineer na Ivolution Sport Science. Procuro vaga em dados, remota ou híbrida em Córdoba (Argentina).',
    },
    certifications: {
      title: 'Certificações & Formação',
      description:
        'Diploma universitário em Data Science & ML (UNC, 250h), Google IT Support Professional, Google AI Essentials, Python Essentials da Cisco, IBM SkillsBuild e mais.',
    },
    contact: {
      title: 'Contato',
      description:
        'Procuro vaga de Analista de Dados ou Analytics Engineer (júnior / pleno), remota ou presencial / híbrida em Córdoba (Argentina). Também aceito projetos freelance. Fale comigo.',
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
      title: 'Dashboards de desempenho esportivo — Ivolution',
      description:
        'Estudo de caso: os dashboards que criei na Ivolution Sport Science para acompanhar 967 atletas de 13 esportes, com dbt e Metabase.',
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
    roleShort: 'Analista de Dados',
    cv: 'CV',
    downloadCv: 'Baixar CV',
    themeToLight: 'Mudar para modo claro',
    themeToDark: 'Mudar para modo escuro',
    toggleMenu: 'Abrir ou fechar menu',
    language: 'Idioma',
    rights: 'Todos os direitos reservados.',
    banner: {
      long: 'Procuro vaga de Analista de Dados · Remoto ou híbrido em Córdoba (Argentina)',
      short: 'Disponível · Remoto',
      cta: 'Contato',
    },
    backToDataScience: 'Voltar aos projetos de dados',
    letsTalk: 'Vamos conversar sobre seu projeto',
    workTogether: {
      title: 'Vamos conversar?',
      body: 'Procuro minha próxima vaga em dados (júnior / pleno). Remoto de qualquer lugar, ou presencial / híbrido em Córdoba (Argentina).',
      cta: 'Fale comigo',
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
    intro:
      'Tenho experiência criando dashboards visuais para a tomada de decisões e trabalho muito com Python e SQL. Também tenho base como desenvolvedor full stack e uso IA para automatizar tarefas. Procuro uma vaga onde eu possa contribuir e continuar aprendendo.',
    ctaProjects: 'Ver projetos',
    heroImageAlt: 'Dashboard da Ivolution com métricas de força dos atletas, filtros por data, atleta e tipo de exercício',
    heroCaption: 'Um dos dashboards que criei na Ivolution Sport Science para a equipe técnica acompanhar o desempenho de cada atleta.',
    statsCaption: 'O que trabalhei na Ivolution Sport Science',
    stats: {
      athletes: 'atletas',
      sports: 'modalidades esportivas',
      measurements: 'medições analisadas',
    },
    featured: {
      title: 'Projetos em destaque',
      subtitle: 'Dados, desenvolvimento web e IA: trabalho em empresa, para clientes e projetos próprios',
      ivolution: {
        title: 'Dashboards de desempenho esportivo',
        label: 'Trabalho em empresa · 967 atletas · 13 esportes',
        company: 'Ivolution Sport Science · Dados',
        description:
          'Criei os dashboards que treinadores e preparadores físicos usavam para acompanhar 967 atletas de 13 esportes. Organizei os dados das avaliações com dbt e mostrei no Metabase, com alertas que indicam de relance quem está fadigado, quem está normal e quem está rendendo acima do habitual.',
      },
      coubertin: {
        title: 'Instituto Coubertin — Plataforma de cursos',
        label: 'Projeto de cliente · Em produção',
        company: 'Coding Click · Desenvolvimento web',
        description:
          'Plataforma de cursos online para um instituto de formação esportiva: os alunos compram um curso, assistem às aulas, fazem avaliações e participam de fóruns, e o instituto administra tudo por um painel. Está em produção e eu cuido da manutenção do sistema e da infraestrutura.',
      },
      turnex: {
        title: 'Turnex — Gestão de complexos esportivos',
        label: 'Projeto de cliente · Em fase de testes',
        company: 'Projeto de cliente · Desenvolvimento web + SQL',
        description:
          'Sistema para administrar um complexo esportivo: sócios, mensalidades, reservas de quadras, cobranças, caixa diário e acesso com QR code. Desenvolvi para um cliente e está em fase de testes antes da entrega.',
      },
      stackadvisor: {
        title: 'StackAdvisor',
        label: 'Projeto próprio · Online',
        company: 'Projeto pessoal · Desenvolvimento web + IA',
        description:
          'Ferramenta web que, com um questionário curto, recomenda quais tecnologias usar em um projeto de software e explica o porquê. Usa IA (Gemini) para montar um plano de desenvolvimento sob medida.',
      },
      viewCase: 'Ver estudo de caso',
      viewProject: 'Ver projeto',
      viewCode: 'Ver código',
      viewAllFullStack: 'Todos os projetos de desenvolvimento',
      viewAllData: 'Todos os projetos de dados',
    },
    live: {
      kicker: 'Ao vivo',
      title: 'Dashboards interativos',
      subtitle: 'Estão publicados e funcionando: dá para abrir e testar.',
      viewAll: 'Ver todos',
      ecommerceSub: 'Analisei mais de 100 mil pedidos reais de uma loja online do Brasil: quem são os melhores clientes, quantos voltam a comprar e como as vendas evoluem.',
      cryptoSub: 'Preços do Bitcoin e de outras criptomoedas que se atualizam na hora, com alertas quando há movimentos fora do normal.',
      argentinaSub: 'Dólar, inflação e risco-país em um só lugar, com dados públicos que se atualizam sozinhos.',
    },
    specialties: {
      title: 'O que eu faço',
      analytics: {
        title: 'Dados',
        body: 'Reúno dados dispersos, organizo e mostro em dashboards que ajudam a decidir.',
        items: ['SQL · Python · dbt', 'Metabase · Power BI', 'BigQuery · PostgreSQL', 'pandas · scikit-learn'],
      },
      web: {
        title: 'Desenvolvimento full stack',
        body: 'Crio aplicações web completas, do banco de dados à tela.',
        items: ['React · Next.js · TypeScript', 'Node.js · APIs REST', 'Supabase · PostgreSQL', 'Tailwind CSS · Docker · Vercel'],
      },
      automation: {
        title: 'IA e automação',
        body: 'Uso IA para automatizar tarefas repetitivas e ganhar tempo.',
        items: ['n8n · Make · Zapier', 'Claude · Gemini · Groq', 'Fluxos automáticos', 'Alertas automáticos'],
      },
    },
    aboutMe: 'Sobre mim',
  },

  about: {
    badge: 'Disponível · Analista de Dados',
    greeting: 'Olá, eu sou',
    intro:
      'Sou analista de dados. Aprendi a programar por conta própria e depois fiz o Diploma universitário em Ciência de Dados e Machine Learning da UNC (Argentina), onde aprendi Python a fundo. Na Ivolution Sport Science criei dashboards para que profissionais do esporte tomassem decisões com dados. Também tenho base como desenvolvedor full stack e uso IA para automatizar tarefas.',
    contactMe: 'Fale comigo',
    experience: 'Experiência',
    jobs: {
      codingClick: {
        role: 'Cofundador · Desenvolvimento web, dados e automação',
        company: 'Coding Click',
        period: 'Atual',
        location: 'Argentina · Remoto',
        summary: 'Cofundei a Coding Click, onde fazemos software sob medida para pequenas e médias empresas: sites, sistemas de gestão, dashboards e automações.',
        bullets: [
          'Desenvolvo sites e sistemas sob medida com React/Next.js, Node.js e PostgreSQL/Supabase.',
          'Construí a plataforma de cursos do Instituto Coubertin, que hoje está em produção; cuido da manutenção do sistema e da infraestrutura.',
          'Crio automações e relatórios com n8n, Make e APIs para substituir tarefas manuais.',
          'Participo de todo o processo de cada projeto: levantamento, proposta, desenvolvimento, lançamento e manutenção.',
        ],
      },
      ivolution: {
        role: 'Data Analytics Engineer',
        company: 'Ivolution Sport Science · Contrato temporário',
        period: 'Abr 2025 — Mar 2026',
        location: 'Argentina · Remoto',
        summary: 'Criava dashboards com métricas dos atletas para que os profissionais do esporte tomassem decisões.',
        bullets: [
          'Criei dashboards no Metabase para acompanhar 967 atletas de 13 esportes, com mais de 10.000 medições.',
          'Organizei e transformei os dados das avaliações com SQL e dbt, para que os dashboards fossem confiáveis e fáceis de manter.',
          'Adicionei alertas automáticos que comparam cada avaliação com o histórico do atleta e indicam se ele está fadigado, normal ou acima do habitual.',
          'Passei modelos do Metabase para o dbt, unifiquei atletas duplicados entre ambientes, fiz versões dos dashboards em espanhol, inglês e português e automatizei tarefas com n8n.',
          'Trabalhava por tarefas, com uma reunião diária (daily) com a equipe todas as manhãs.',
        ],
      },
    },
    building: 'O que estou construindo',
    online: 'Online',
    stackadvisor: {
      kind: 'Projeto próprio · Desenvolvimento web + IA',
      body: 'Ferramenta web que, com um questionário curto, recomenda quais tecnologias usar em um projeto de software e explica o porquê. Usa IA (Gemini) para montar um plano de desenvolvimento sob medida.',
      visit: 'Visitar StackAdvisor',
    },
    jobHunting: {
      title: 'Automação da busca de emprego',
      kind: 'IA e automação · Uso pessoal',
      body: 'Um fluxo em n8n que reúne vagas, pontua cada uma com IA de acordo com meu perfil, pede minha aprovação pelo Telegram, adapta o CV a cada oferta e registra tudo no Google Sheets.',
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
        institution: 'Universidad San Ignacio de Loyola (USIL) · ministrado pela Mundos E',
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
      'Do banco de dados ao lançamento: sistemas sob medida para clientes, projetos próprios com IA e apps em tempo real. Next.js, TypeScript, PostgreSQL/Supabase.',
  },

  certifications: {
    titleA: 'Certificações',
    titleB: '& Formação',
    intro:
      'Formação contínua em Data Science, programação, IA e desenvolvimento web — do Google, IBM, Cisco e universidades internacionais.',
    university: 'Formação universitária',
    international: 'Certificações internacionais',
    credlyTitle: 'Ver todas as minhas badges verificadas no Credly',
    credlyBody: 'Google IT Support · IBM Web Dev · e mais badges verificáveis',
    viewCertificate: 'Ver certificado',
    verify: 'Verificar',
    viewBadge: 'Ver badge no Credly',
    universities: {
      dsml: {
        badge: 'Universidade Nacional de Córdoba',
        name: 'Diploma universitário em Data Science & Machine Learning',
        date: 'Maio 2025',
        hours: '250 horas · 10 créditos',
        description:
          'Diploma universitário de formação continuada ministrado pela ICARO Asociación Civil em conjunto com a Secretaria de Extensão da Faculdade de Ciências Exatas, Físicas e Naturais da UNC (Argentina).',
        verifyLabel: 'Validar na UNC (código: DS240502)',
      },
      cyber: {
        badge: 'Universidad San Ignacio de Loyola',
        name: 'Diploma em Cibersegurança',
        date: 'Setembro 2025',
        hours: '200 horas',
        description:
          'Diploma da Universidad San Ignacio de Loyola (USIL), ministrado pela Mundos E. Fundamentos e prática em segurança da informação.',
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
      'Procuro vaga em dados (júnior / pleno): remota de qualquer lugar, ou presencial / híbrida em Córdoba (Argentina). Também aceito projetos freelance. Respondo em 24–48 horas.',
    formTitle: 'Envie uma mensagem',
    name: 'Nome',
    email: 'E-mail',
    subject: 'Assunto',
    subjectPlaceholder: 'Escolha um assunto',
    subjects: {
      job: 'Oportunidade de trabalho',
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
      'Projetos com dados reais, publicados e funcionando: de análise de vendas a preços em tempo real.',
    live: 'Ao vivo',
    items: {
      ecommerce: {
        title: 'Vendas de um e-commerce',
        subtitle: 'Olist Brasil (PT-BR) · 100 mil+ pedidos · dbt + PostgreSQL',
        description:
          'Pipeline de dados end-to-end com segmentação RFM, retenção por coortes, tendências de receita e desempenho de vendedores. Dados reais de 93 mil clientes únicos do mercado brasileiro. Interface em inglês, espanhol e português.',
      },
      crypto: {
        title: 'Criptomoedas em tempo real',
        subtitle: 'BTC · ETH · SOL · BNB · XRP — Binance WebSocket',
        description:
          'Dashboard em tempo real com candles TradingView, volume, 6 timeframes e detecção de anomalias por z-score. Feed de trades ao vivo.',
      },
      argentina: {
        title: 'Economia argentina',
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
    badge: 'Trabalho em empresa · Abr 2025 — Mar 2026',
    title: 'Dashboards de desempenho esportivo',
    introA: 'Dashboards que criei para acompanhar',
    introStrong: '967 atletas de 13 esportes',
    introB:
      '— futebol, rugby, atletismo, hóquei, natação, basquete e mais — para que a equipe técnica tomasse decisões com dados. Feitos com SQL, BigQuery, dbt e Metabase.',
    multilingualTag: 'ES/EN/PT',
    stats: {
      athletes: 'atletas',
      sports: 'esportes',
      measurements: 'medições registradas',
      languages: 'idiomas (ES/EN/PT)',
    },
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
