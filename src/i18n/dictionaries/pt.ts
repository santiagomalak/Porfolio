import type { Dictionary } from './es'

const pt: Dictionary = {
  meta: {
    siteTitle: 'Santiago Malak — Analytics Engineer & Full-Stack Developer',
    siteDescription:
      'Portfólio de Santiago Malak: Analytics Engineer e Full-Stack Developer. BigQuery, dbt, Metabase, SQL, Python, Next.js. 967 atletas monitorados em produção real. Disponível para vagas remotas.',
    ogDescription:
      'Analytics Engineer com experiência real em BigQuery, dbt e Metabase. 967 atletas monitorados em produção.',
    ogTagline: 'BigQuery · dbt · Metabase · SQL · Python · Next.js',
    ogAvailability: 'Disponível para vagas remotas',
    personDescription: 'Analytics Engineer e Full-Stack Developer. BigQuery, dbt, Metabase, SQL, Python, Next.js.',
    about: {
      title: 'Sobre mim',
      description:
        'Analytics Engineer e Full-Stack Developer. Ex-Ivolution Sport Science — sistema de análise para 967 atletas em 13 esportes. Atualmente construindo o StackAdvisor e aberto a vagas remotas.',
    },
    certifications: {
      title: 'Certificações & Formação',
      description:
        'Diploma universitário em Data Science & ML (UNC, 250h), Google IT Support Professional, Google AI Essentials, Python Essentials da Cisco, IBM SkillsBuild e mais.',
    },
    contact: {
      title: 'Contato',
      description:
        'Aberto a vagas remotas de Analytics Engineer, Data Engineer, Data Scientist ou Full-Stack Developer, e a projetos freelance. Fale comigo.',
    },
    dashboards: {
      title: 'Dashboards interativos',
      description:
        'Dashboards em produção com dados reais: E-Commerce Analytics sobre 100 mil+ pedidos da Olist com dbt + PostgreSQL, Crypto Live Dashboard com WebSocket da Binance e Argentina Macro Dashboard.',
    },
    dataScience: {
      title: 'Data Science & Analytics Engineering',
      description:
        'Projetos de Data Science e Analytics Engineering: sistema para 967 atletas na Ivolution, machine learning com Scikit-learn, pipelines BigQuery/dbt e segmentação de usuários.',
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
      title: 'Projetos Web',
      description:
        'Projetos de desenvolvimento web: StackAdvisor (SaaS em produção), Crypto Live Dashboard, Wayra Huasi e mais. Construídos com Next.js, TypeScript e TailwindCSS.',
    },
  },

  common: {
    nav: {
      home: 'Início',
      about: 'Sobre mim',
      webProjects: 'Desenvolvimento Web',
      dataScience: 'Data Science',
      dashboards: 'Dashboards',
      certifications: 'Certificações',
      contact: 'Contato',
    },
    roleShort: 'Analytics Engineer',
    cv: 'CV',
    downloadCv: 'Baixar CV',
    themeToLight: 'Mudar para modo claro',
    themeToDark: 'Mudar para modo escuro',
    toggleMenu: 'Abrir ou fechar menu',
    language: 'Idioma',
    rights: 'Todos os direitos reservados.',
    banner: {
      long: 'Disponível para vagas remotas · Analytics Engineer & Full-Stack Developer · Argentina',
      short: 'Open to work · Remoto',
      cta: 'Contato',
    },
    backToDataScience: 'Voltar para Data Science',
    letsTalk: 'Vamos conversar sobre seu projeto',
    workTogether: {
      title: 'Vamos trabalhar juntos?',
      body: 'Aberto a vagas remotas de Analytics Engineer & Full-Stack Developer — e de Data Engineer ou Data Scientist quando o projeto pedir. Também disponível para freelance: dados, web, automação.',
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
    intro:
      'Construo pipelines de dados, modelos analíticos e dashboards que as equipes realmente usam para tomar decisões. BigQuery · dbt · Metabase em produção real.',
    ctaData: 'Ver projetos de dados',
    ctaDashboards: 'Dashboards ao vivo',
    stats: {
      athletes: { label: 'Atletas monitorados', sub: 'Performance · Ivolution' },
      orders: { label: 'Pedidos analisados', sub: 'E-Commerce · Olist' },
      measurements: { label: 'Medições no BigQuery', sub: 'dbt · SQL · Alertas' },
      stacks: { label: 'Stacks avaliados', sub: 'StackAdvisor · SaaS' },
    },
    featured: {
      title: 'Projetos em destaque',
      subtitle: 'O mais relevante do meu trabalho',
      ivolution: {
        label: 'Trabalho real · 967 atletas · 13 esportes',
        company: 'Ivolution Sport Science',
        description:
          '967 atletas monitorados em 13 esportes — futebol, rugby, atletismo, hóquei, natação e mais. Alertas de três estados com limiares dinâmicos por percentil (p25/p75), 10.000+ medições registradas e suporte ES/EN/PT. O sistema continua em operação após minha saída — principal ferramenta de decisão da organização.',
      },
      stackadvisor: {
        label: 'SaaS · Em produção',
        company: 'Projeto próprio',
        description:
          '13 perguntas inteligentes → o stack ideal com justificativa detalhada + roadmap personalizado de 12 semanas. Motor de recomendação próprio com 25+ stacks avaliados. Para founders sem CTO e devs tomando decisões de arquitetura críticas.',
      },
      viewProject: 'Ver projeto',
      viewAll: 'Ver todos os projetos',
    },
    live: {
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
        title: 'Analytics Engineering',
        body: 'Pipelines de dados, modelos analíticos e dashboards que são usados de verdade.',
        items: ['SQL · BigQuery · dbt', 'Metabase · Dashboards', 'Alertas dinâmicos · Percentis', 'Python · Pandas'],
      },
      web: {
        title: 'Desenvolvimento Web',
        body: 'Aplicações web modernas do frontend ao backend, prontas para produção.',
        items: ['React · Next.js · TypeScript', 'Node.js · APIs REST', 'Tailwind CSS · Framer Motion', 'Docker · Vercel'],
      },
      automation: {
        title: 'Automação',
        body: 'Fluxos automáticos que eliminam trabalho repetitivo e escalam a partir de um VPS.',
        items: ['n8n · Workflows visuais', 'Telegram API · Notificações', 'Scraping · Scoring com IA', 'Docker · VPS'],
      },
    },
    aboutMe: 'Sobre mim',
  },

  about: {
    badge: 'Disponível · Analytics Engineer & Full-Stack Developer',
    greeting: 'Olá, eu sou',
    intro:
      'Analytics Engineer & Full-Stack Developer. Atualmente independente — construo projetos próprios, busco minha próxima vaga e transformo ideias em produtos reais. Trabalho bem na interseção entre dados, produto e código.',
    contactMe: 'Fale comigo',
    experience: 'Experiência',
    ivolution: {
      role: 'Analytics Engineer / Data Scientist',
      period: 'Abr 2025 — Mar 2026',
      body: 'Projetei do zero o sistema de análise de desempenho da empresa: pipelines no BigQuery, modelos em dbt e dashboards no Metabase com alertas dinâmicos por percentil (p25/p75) e suporte multilíngue ES/EN/PT. 967 atletas monitorados em 13 esportes, 10.000+ medições registradas. O sistema continua em operação após minha saída — principal ferramenta de tomada de decisão da organização.',
    },
    building: 'O que estou construindo',
    stackadvisor: {
      kind: 'SaaS · Em produção',
      body: 'Plataforma que resolve a paralisia na escolha de tecnologia: 13 perguntas inteligentes → motor de recomendação com 25+ stacks avaliados → roadmap personalizado de 12 semanas. Para founders sem CTO e devs tomando decisões de arquitetura críticas.',
      visit: 'Visitar StackAdvisor',
    },
    jobHunting: {
      kind: 'Automação · Em construção',
      status: 'Em desenvolvimento',
      body: 'Sistema semiautomático de busca de emprego com n8n: scraping de vagas relevantes, scoring com IA, checkpoint de aprovação via Telegram e geração de CV adaptado a cada vaga. Pensado para rodar de forma autônoma em um VPS — porque buscar emprego também pode ser otimizado.',
      tags: ['n8n', 'Telegram API', 'IA', 'Automação', 'Docker', 'VPS'],
    },
    stack: 'Stack tecnológico',
    stackCategories: { analytics: 'Analytics Engineering', web: 'Desenvolvimento Web' },
    automationSkill: 'n8n · Automação',
    languages: 'Idiomas',
    languageList: {
      es: { name: 'Espanhol', level: 'Nativo', detail: 'Língua materna' },
      en: { name: 'Inglês', level: 'Profissional', detail: 'Leitura técnica · Escrita · Comunicação' },
      pt: { name: 'Português', level: 'C1 Avançado', detail: 'Análise de dados · Documentação técnica' },
    },
    philosophy:
      '"Os melhores produtos nascem na interseção entre dados e engenharia. Os dados dizem o que construir. O código permite construí-lo."',
    philosophyCaption: '— Minha filosofia de trabalho',
    seeProjects: 'Ver meus projetos',
  },

  dataScience: {
    titleA: 'Projetos de',
    titleB: 'Data Science',
    intro: 'Machine learning, análise estatística e pipelines de dados — do dataset ao insight acionável.',
    githubTitle: 'Jupyter Notebooks & mais análises',
    githubBody: 'Explore todos os meus notebooks e projetos de análise de dados no GitHub.',
    githubCta: 'Ver no GitHub',
  },

  webProjects: {
    titleA: 'Projetos de',
    titleB: 'Desenvolvimento Web',
    intro: 'Aplicações web modernas construídas com tecnologias atuais e boas práticas.',
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
    intro: 'Tem uma vaga ou um projeto em mente? Vamos conversar sobre como posso ajudar.',
    info: 'Informações de contato',
    availabilityTitle: 'Disponibilidade',
    availabilityBody:
      'Aberto a vagas remotas full-time, projetos freelance e colaborações. Tempo de resposta: 24–48 horas.',
    formTitle: 'Envie uma mensagem',
    name: 'Nome',
    email: 'E-mail',
    subject: 'Assunto',
    subjectPlaceholder: 'Escolha um assunto',
    subjects: {
      job: 'Oportunidade de trabalho',
      web: 'Projeto de desenvolvimento web',
      datascience: 'Projeto de dados / analytics',
      both: 'Projeto combinado',
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
    kicker: 'Live Projects',
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
