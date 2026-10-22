import type { Locale } from '@/i18n/config'
import { localizePath } from '@/i18n/routing'

export interface CodeSnippet {
  language: string
  code: string
}

/** A string that is either language-neutral (a product name) or translated per locale. */
type Text = string | Record<Locale, string>

/** Project as stored here: all languages side by side, one entry per project. */
interface ProjectSource {
  title: Text
  description: Text
  tags: string[]
  highlight?: Text
  image?: string
  githubUrl?: string
  /** External URL, or an internal path without locale prefix ('/data-science/olist'). */
  liveUrl?: string
  notebookUrl?: string
  type: 'web' | 'datascience'
  accentColor?: 'blue' | 'purple' | 'green' | 'orange' | 'teal'
  codeSnippet?: CodeSnippet
}

/** Project resolved for one locale — what ProjectCard renders. */
export interface Project extends Omit<ProjectSource, 'title' | 'description' | 'highlight'> {
  title: string
  description: string
  highlight?: string
}

function text(value: Text, lang: Locale): string {
  return typeof value === 'string' ? value : value[lang]
}

function resolve(p: ProjectSource, lang: Locale): Project {
  return {
    ...p,
    title: text(p.title, lang),
    description: text(p.description, lang),
    highlight: p.highlight === undefined ? undefined : text(p.highlight, lang),
    liveUrl: p.liveUrl?.startsWith('/') ? localizePath(lang, p.liveUrl) : p.liveUrl,
  }
}

export function getDataScienceProjects(lang: Locale): Project[] {
  return dataScienceProjects.map((p) => resolve(p, lang))
}

export function getWebProjects(lang: Locale): Project[] {
  return webProjects.map((p) => resolve(p, lang))
}

const dataScienceProjects: ProjectSource[] = [
  {
    title: 'E-Commerce Data Platform — Olist Brazil',
    description: {
      es: 'Pipeline de datos end-to-end sobre 100k+ órdenes reales del mercado brasileño (Olist). PostgreSQL + dbt con 4 capas de modelos: staging → intermediate → marts. RFM segmentation, cohort retention, revenue trends y seller performance — todo en SQL puro. Análisis y documentación en portugués (C1). CI/CD con GitHub Actions.',
      en: 'End-to-end data pipeline over 100k+ real orders from the Brazilian market (Olist). PostgreSQL + dbt with 4 model layers: staging → intermediate → marts. RFM segmentation, cohort retention, revenue trends and seller performance — all in pure SQL. Analysis and documentation written in Portuguese (C1). CI/CD with GitHub Actions.',
      pt: 'Pipeline de dados end-to-end sobre 100 mil+ pedidos reais do mercado brasileiro (Olist). PostgreSQL + dbt com 4 camadas de modelos: staging → intermediate → marts. Segmentação RFM, retenção por coortes, tendências de receita e desempenho de vendedores — tudo em SQL puro. Análise e documentação em português (C1). CI/CD com GitHub Actions.',
    },
    tags: ['PostgreSQL', 'dbt', 'Python', 'Docker', 'SQL', 'RFM', 'Cohort Analysis', 'GitHub Actions'],
    highlight: {
      es: '100k+ órdenes · Analytics Engineering',
      en: '100k+ orders · Analytics Engineering',
      pt: '100 mil+ pedidos · Analytics Engineering',
    },
    image: '/ds-ecommerce-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/ecommerce-data-platform',
    liveUrl: '/data-science/olist',
    type: 'datascience',
    accentColor: 'orange',
    codeSnippet: {
      language: 'SQL',
      code: `-- mart_rfm_segmentation.sql (dbt model)
WITH rfm_base AS (
  SELECT
    customer_unique_id,
    DATEDIFF('day', MAX(order_purchase_timestamp),
             CURRENT_DATE)                    AS recency,
    COUNT(DISTINCT order_id)                  AS frequency,
    SUM(payment_value)                        AS monetary
  FROM {{ ref('int_orders_enriched') }}
  WHERE order_status = 'delivered'
  GROUP BY 1
),
rfm_scores AS (
  SELECT *,
    NTILE(5) OVER (ORDER BY recency DESC)     AS r_score,
    NTILE(5) OVER (ORDER BY frequency)        AS f_score,
    NTILE(5) OVER (ORDER BY monetary)         AS m_score
  FROM rfm_base
)
SELECT *,
  CASE
    WHEN r_score >= 4 AND f_score >= 4 THEN 'Champions'
    WHEN r_score >= 3 AND f_score >= 3 THEN 'Loyal'
    WHEN r_score >= 4 AND f_score <= 2 THEN 'New Customers'
    WHEN r_score <= 2 AND f_score >= 3 THEN 'At Risk'
    ELSE 'Hibernating'
  END AS segment
FROM rfm_scores`,
    },
  },
  {
    title: 'Athlete Performance Monitor — Demo Dataset',
    description: {
      es: 'Dataset sintético de 6.500+ mediciones CMJ/IMTP generado con Python. Faker + numpy con distribuciones calibradas en literatura de sport science. Sistema de alertas neuromusculares con umbrales dinámicos p25/p75 y media móvil de 5 evaluaciones. IDs hasheados desde el origen — 0 datos personales reales.',
      en: 'Synthetic dataset of 6,500+ CMJ/IMTP measurements generated in Python. Faker + numpy with distributions calibrated against sport-science literature. Neuromuscular alert system with dynamic p25/p75 thresholds and a 5-evaluation moving average. IDs hashed at the source — zero real personal data.',
      pt: 'Dataset sintético de 6.500+ medições CMJ/IMTP gerado em Python. Faker + numpy com distribuições calibradas na literatura de sport science. Sistema de alertas neuromusculares com limiares dinâmicos p25/p75 e média móvel de 5 avaliações. IDs com hash desde a origem — zero dados pessoais reais.',
    },
    tags: ['Python', 'numpy', 'Faker', 'SQL', 'Window Functions', 'Sport Science'],
    highlight: {
      es: '6.500+ mediciones · Privacy-first',
      en: '6,500+ measurements · Privacy-first',
      pt: '6.500+ medições · Privacy-first',
    },
    image: '/ds-athlete-cover.svg',
    liveUrl: '/data-science/performance-monitor',
    type: 'datascience',
    accentColor: 'teal',
    codeSnippet: {
      language: 'Python',
      code: `# Distribuciones calibradas con normas publicadas
SPORTS = {
    "Fútbol":     {"cmj": (42, 6),  "imtp": (1_800, 300)},
    "Rugby":      {"cmj": (45, 7),  "imtp": (2_200, 350)},
    "Atletismo":  {"cmj": (50, 8),  "imtp": (2_000, 300)},
    "Basketball": {"cmj": (55, 8),  "imtp": (1_900, 300)},
}

def hash_id(raw: str) -> str:
    return "ATH" + hashlib.sha256(raw.encode()).hexdigest()[:6].upper()

# Faker genera nombre → se hashea → nombre descartado
raw_name = fake.name()
athlete_id = hash_id(raw_name + sport)  # único, anónimo

# Fatiga modelada como ruido multiplicativo ±7%
fatigue   = float(rng.normal(1.0, 0.07))
jump_h    = max(15.0, base_cmj * fatigue + rng.normal(0, 1.5))
max_force = max(500.0, base_imtp * fatigue + rng.normal(0, 30))`,
    },
  },
  {
    title: 'Performance Monitoring System — Ivolution',
    description: {
      es: '967 atletas monitoreados en 13 deportes. Alertas de tres estados (SUPERCOMPENSACIÓN / ATENCIÓN / FATIGADO) con umbrales dinámicos por percentil (p25/p75), 10.000+ mediciones registradas y soporte multilingüe ES/EN/PT. El sistema continúa operativo tras mi salida — herramienta principal de decisiones de la organización.',
      en: '967 athletes monitored across 13 sports. Three-state alerts (SUPERCOMPENSATION / ATTENTION / FATIGUED) with dynamic percentile thresholds (p25/p75), 10,000+ recorded measurements and multilingual ES/EN/PT support. The system is still running after I left — the organization\'s main decision-making tool.',
      pt: '967 atletas monitorados em 13 esportes. Alertas de três estados (SUPERCOMPENSAÇÃO / ATENÇÃO / FADIGADO) com limiares dinâmicos por percentil (p25/p75), 10.000+ medições registradas e suporte multilíngue ES/EN/PT. O sistema continua em operação após minha saída — principal ferramenta de decisão da organização.',
    },
    tags: ['SQL', 'BigQuery', 'dbt', 'Metabase', 'Python', 'Analytics Engineering'],
    highlight: {
      es: '967 atletas · 13 deportes',
      en: '967 athletes · 13 sports',
      pt: '967 atletas · 13 esportes',
    },
    image: '/ivolution-dashboard.png',
    liveUrl: '/data-science/ivolution',
    type: 'datascience',
    accentColor: 'blue',
    codeSnippet: {
      language: 'SQL',
      code: `-- athlete_fatigue_alerts.sql (BigQuery + dbt)
WITH athlete_baseline AS (
  SELECT
    athlete_id,
    exercise_type,
    PERCENTILE_CONT(max_force, 0.25)
      OVER (PARTITION BY athlete_id, exercise_type) AS p25,
    PERCENTILE_CONT(max_force, 0.75)
      OVER (PARTITION BY athlete_id, exercise_type) AS p75
  FROM {{ ref('stg_measurements') }}
  WHERE eval_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY)
),
latest_eval AS (
  SELECT DISTINCT ON (athlete_id, exercise_type)
    athlete_id, exercise_type, max_force, eval_date
  FROM {{ ref('stg_measurements') }}
  ORDER BY athlete_id, exercise_type, eval_date DESC
)
SELECT
  l.athlete_id,
  l.exercise_type,
  l.max_force,
  b.p25, b.p75,
  CASE
    WHEN l.max_force >= b.p75 THEN 'SUPERCOMPENSACIÓN'
    WHEN l.max_force <= b.p25 THEN 'FATIGADO'
    ELSE 'ATENCIÓN'
  END AS estado
FROM latest_eval l
JOIN athlete_baseline b USING (athlete_id, exercise_type)`,
    },
  },
  {
    title: {
      es: 'Segmentación de Usuarios — Email Marketing',
      en: 'User Segmentation — Email Marketing',
      pt: 'Segmentação de Usuários — Email Marketing',
    },
    description: {
      es: 'Segmentación no supervisada sobre 212.292 registros reales de campañas de mailing. Aplica K-Means y MiniBatchKMeans con análisis de Silhouette Score para determinar el k óptimo (6 segmentos). Reducción dimensional con PCA para visualización. Output: archivo Excel con asignación de cluster y recomendaciones de estrategia personalizadas por segmento.',
      en: 'Unsupervised segmentation over 212,292 real records from mailing campaigns. Applies K-Means and MiniBatchKMeans with Silhouette Score analysis to find the optimal k (6 segments). PCA dimensionality reduction for visualization. Output: an Excel file with cluster assignments and tailored strategy recommendations per segment.',
      pt: 'Segmentação não supervisionada sobre 212.292 registros reais de campanhas de e-mail. Aplica K-Means e MiniBatchKMeans com análise de Silhouette Score para encontrar o k ideal (6 segmentos). Redução de dimensionalidade com PCA para visualização. Saída: arquivo Excel com a atribuição de cluster e recomendações de estratégia personalizadas por segmento.',
    },
    tags: ['Python', 'K-Means', 'PCA', 'Silhouette Score', 'Scikit-learn', 'Clustering'],
    highlight: {
      es: '212.292 usuarios · 6 segmentos',
      en: '212,292 users · 6 segments',
      pt: '212.292 usuários · 6 segmentos',
    },
    image: '/ds-mailing-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/Datos-de-Mailing',
    notebookUrl: 'https://github.com/santiagomalak/Datos-de-Mailing/blob/master/Clustering%20de%20Usuarios%20a%20partir%20de%20Datos%20de%20Mailing.ipynb',
    type: 'datascience',
    accentColor: 'purple',
    codeSnippet: {
      language: 'Python',
      code: `from sklearn.cluster import MiniBatchKMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
import pandas as pd

scaler = StandardScaler()
X_scaled = scaler.fit_transform(df[features])

# Silhouette analysis to find optimal k
scores = {}
for k in range(2, 11):
    model = MiniBatchKMeans(n_clusters=k, random_state=42)
    labels = model.fit_predict(X_scaled)
    scores[k] = silhouette_score(X_scaled, labels, sample_size=5000)

optimal_k = max(scores, key=scores.get)  # k=6

final_model = MiniBatchKMeans(n_clusters=optimal_k, random_state=42)
df['cluster'] = final_model.fit_predict(X_scaled)

# Cluster profiling
profile = df.groupby('cluster')[features].mean()
profile['size'] = df['cluster'].value_counts()`,
    },
  },
  {
    title: {
      es: 'IBM HR Analytics — Predicción de Deserción',
      en: 'IBM HR Analytics — Attrition Prediction',
      pt: 'IBM HR Analytics — Previsão de Turnover',
    },
    description: {
      es: 'Análisis end-to-end sobre el dataset oficial de IBM con 1.470 empleados. Identifica los factores con mayor impacto en la rotación laboral mediante Random Forest con matriz de confusión y métricas de clasificación. Segmentación con K-Means y visualización de clusters con PCA. Genera insights accionables para reducir el churn de RR.HH.',
      en: 'End-to-end analysis of IBM\'s official dataset of 1,470 employees. Identifies the factors with the biggest impact on employee attrition using Random Forest with a confusion matrix and classification metrics. K-Means segmentation and PCA cluster visualization. Produces actionable insights to reduce HR churn.',
      pt: 'Análise end-to-end do dataset oficial da IBM com 1.470 funcionários. Identifica os fatores de maior impacto na rotatividade usando Random Forest com matriz de confusão e métricas de classificação. Segmentação com K-Means e visualização de clusters com PCA. Gera insights acionáveis para reduzir o churn de RH.',
    },
    tags: ['Python', 'Random Forest', 'K-Means', 'PCA', 'Scikit-learn', 'Seaborn'],
    highlight: {
      es: '1.470 empleados',
      en: '1,470 employees',
      pt: '1.470 funcionários',
    },
    image: '/ds-ibm-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/IBM-Proyect',
    notebookUrl: 'https://github.com/santiagomalak/IBM-Proyect/blob/master/IBM-Proyect.ipynb',
    type: 'datascience',
    accentColor: 'blue',
    codeSnippet: {
      language: 'Python',
      code: `from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
import pandas as pd

X = df.drop(columns=['Attrition'])
y = df['Attrition'].map({'Yes': 1, 'No': 0})

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

rf = RandomForestClassifier(
    n_estimators=200,
    class_weight='balanced',
    random_state=42
)
rf.fit(X_train, y_train)

print(classification_report(y_test, rf.predict(X_test)))

# Top drivers of attrition
importances = pd.Series(
    rf.feature_importances_, index=X.columns
).sort_values(ascending=False)
# OverTime, MonthlyIncome, Age top 3`,
    },
  },
  {
    title: 'NLP & Sentiment Analysis — Yelp Reviews',
    description: {
      es: 'Pipeline completo de Procesamiento de Lenguaje Natural sobre 27.290 reseñas reales de Yelp (2005–2015). Análisis de sentimiento con TextBlob, Topic Modeling con LDA (5 temas: restaurantes, hotelería, retail, comida casual, cocinas especiales) y clustering semántico con K-Means sobre matriz TF-IDF. Insight clave: las reseñas más largas tienen sentimiento más negativo.',
      en: 'Full Natural Language Processing pipeline over 27,290 real Yelp reviews (2005–2015). Sentiment analysis with TextBlob, topic modeling with LDA (5 topics: restaurants, hospitality, retail, casual dining, specialty cuisines) and semantic clustering with K-Means on a TF-IDF matrix. Key insight: longer reviews skew more negative.',
      pt: 'Pipeline completo de Processamento de Linguagem Natural sobre 27.290 avaliações reais do Yelp (2005–2015). Análise de sentimento com TextBlob, topic modeling com LDA (5 temas: restaurantes, hotelaria, varejo, comida casual, cozinhas especiais) e clustering semântico com K-Means sobre matriz TF-IDF. Insight principal: avaliações mais longas tendem a ser mais negativas.',
    },
    tags: ['Python', 'NLTK', 'TextBlob', 'TF-IDF', 'LDA', 'K-Means', 'WordCloud'],
    highlight: {
      es: '27.290 reseñas',
      en: '27,290 reviews',
      pt: '27.290 avaliações',
    },
    image: '/ds-nlp-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/NLP-Yelp',
    notebookUrl: 'https://github.com/santiagomalak/NLP-Yelp/blob/main/NLP.ipynb',
    type: 'datascience',
    accentColor: 'purple',
    codeSnippet: {
      language: 'Python',
      code: `from textblob import TextBlob
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import LatentDirichletAllocation

# Sentiment analysis
df['sentiment'] = df['text'].apply(
    lambda x: TextBlob(x).sentiment.polarity
)
df['label'] = pd.cut(df['sentiment'],
    bins=[-1, -0.1, 0.1, 1],
    labels=['negative', 'neutral', 'positive']
)

# Topic modeling with LDA
vectorizer = TfidfVectorizer(max_features=5000, stop_words='english')
X = vectorizer.fit_transform(df['text_clean'])

lda = LatentDirichletAllocation(n_components=5, random_state=42)
lda.fit(X)

# Key insight: longer reviews → more negative sentiment
# corr(len(text), sentiment) = -0.18`,
    },
  },
  {
    title: {
      es: 'Pipeline de Preprocesamiento — Weather AUS',
      en: 'Preprocessing Pipeline — Weather AUS',
      pt: 'Pipeline de Pré-processamento — Weather AUS',
    },
    description: {
      es: 'Pipeline robusto sobre el dataset climático de Australia de Kaggle. Imputación estratégica de valores faltantes, encoding de variables categóricas, feature engineering y estandarización con StandardScaler. Base sólida y reproducible lista para cualquier modelo de clasificación de lluvia.',
      en: 'A robust pipeline over Kaggle\'s Australian weather dataset. Strategic imputation of missing values, categorical encoding, feature engineering and standardization with StandardScaler. A solid, reproducible base ready for any rain classification model.',
      pt: 'Pipeline robusto sobre o dataset climático da Austrália do Kaggle. Imputação estratégica de valores ausentes, encoding de variáveis categóricas, feature engineering e padronização com StandardScaler. Base sólida e reproduzível, pronta para qualquer modelo de classificação de chuva.',
    },
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering', 'Data Cleaning'],
    highlight: {
      es: 'Dataset Kaggle',
      en: 'Kaggle dataset',
      pt: 'Dataset Kaggle',
    },
    image: '/ds-weather-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/weatherAUS',
    notebookUrl: 'https://github.com/santiagomalak/weatherAUS/blob/master/weatherAUS.ipynb',
    type: 'datascience',
    accentColor: 'teal',
    codeSnippet: {
      language: 'Python',
      code: `from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.compose import ColumnTransformer

num_pipeline = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler()),
])
cat_pipeline = Pipeline([
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('encoder', LabelEncoder()),
])

preprocessor = ColumnTransformer([
    ('num', num_pipeline, numerical_cols),
    ('cat', cat_pipeline, categorical_cols),
])

X_train_processed = preprocessor.fit_transform(X_train)
X_test_processed  = preprocessor.transform(X_test)
# Ready for any classifier — no leakage`,
    },
  },
  {
    title: 'House Price Prediction — Kaggle',
    description: {
      es: 'Modelo de regresión sobre el dataset clásico de Kaggle con más de 80 features de propiedades residenciales. Pipeline completo: EDA, imputación de nulos, encoding, feature selection y modelado. Competencia clásica de regresión supervisada con variable objetivo SalePrice.',
      en: 'Regression model on the classic Kaggle dataset with 80+ features of residential properties. Full pipeline: EDA, null imputation, encoding, feature selection and modeling. A classic supervised regression competition with SalePrice as the target.',
      pt: 'Modelo de regressão sobre o clássico dataset do Kaggle com mais de 80 features de imóveis residenciais. Pipeline completo: EDA, imputação de nulos, encoding, seleção de features e modelagem. Competição clássica de regressão supervisionada com SalePrice como variável alvo.',
    },
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Regresión', 'Feature Engineering', 'EDA'],
    highlight: {
      es: '80+ variables · R² 0,84',
      en: '80+ features · R² 0.84',
      pt: '80+ variáveis · R² 0,84',
    },
    image: '/ds-house-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/House-Price-Kaggle',
    notebookUrl: 'https://github.com/santiagomalak/House-Price-Kaggle/blob/main/SPRINT%202A.ipynb',
    type: 'datascience',
    accentColor: 'green',
    codeSnippet: {
      language: 'Python',
      code: `import numpy as np
from sklearn.linear_model import Ridge
from sklearn.model_selection import cross_val_score

# Feature engineering
df['TotalSF']      = df['TotalBsmtSF'] + df['1stFlrSF'] + df['2ndFlrSF']
df['HouseAge']     = df['YrSold'] - df['YearBuilt']
df['RemodAge']     = df['YrSold'] - df['YearRemodAdd']
df['HasGarage']    = (df['GarageArea'] > 0).astype(int)
df['HasPool']      = (df['PoolArea'] > 0).astype(int)

# Log-transform skewed target
y_log = np.log1p(df['SalePrice'])

# Ridge regression with CV
model = Ridge(alpha=10)
scores = cross_val_score(model, X, y_log, cv=5, scoring='r2')
print(f"CV R² mean: {scores.mean():.4f}")  # ~0.84`,
    },
  },
  {
    title: 'Spotify Music Analysis — EDA',
    description: {
      es: 'Análisis exploratorio sobre 2.000 canciones de Spotify (1998–2020) con 59 géneros musicales. Correlación entre features de audio: danceability, energy, valence, tempo, instrumentalness. Visualizaciones de tendencias de popularidad por género y evolución temporal de las características musicales.',
      en: 'Exploratory analysis of 2,000 Spotify songs (1998–2020) across 59 genres. Correlation between audio features: danceability, energy, valence, tempo, instrumentalness. Visualizations of popularity trends by genre and how musical characteristics evolve over time.',
      pt: 'Análise exploratória de 2.000 músicas do Spotify (1998–2020) com 59 gêneros musicais. Correlação entre features de áudio: danceability, energy, valence, tempo, instrumentalness. Visualizações de tendências de popularidade por gênero e da evolução temporal das características musicais.',
    },
    tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'EDA', 'Correlación'],
    highlight: {
      es: '2.000 canciones · 59 géneros',
      en: '2,000 songs · 59 genres',
      pt: '2.000 músicas · 59 gêneros',
    },
    image: '/ds-spotify-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/Spotify-EDA',
    notebookUrl: 'https://github.com/santiagomalak/Spotify-EDA/blob/main/analysis.ipynb',
    type: 'datascience',
    accentColor: 'green',
    codeSnippet: {
      language: 'Python',
      code: `import seaborn as sns
import matplotlib.pyplot as plt

audio_features = [
    'danceability', 'energy', 'valence',
    'tempo', 'instrumentalness', 'acousticness'
]

# Correlation heatmap
corr = df[audio_features + ['popularity']].corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0)

# Popularity trend by decade
df['decade'] = (df['year'] // 10) * 10
trend = df.groupby('decade')['popularity'].mean()

# Key findings:
# energy ↑ → valence ↑ (r=0.39)
# instrumentalness ↑ → popularity ↓ (r=-0.28)
# acousticness ↑ over 2010–2020 (+12%)`,
    },
  },
]

const webProjects: ProjectSource[] = [
  {
    title: {
      es: 'Instituto Coubertin — Plataforma LMS',
      en: 'Instituto Coubertin — LMS Platform',
      pt: 'Instituto Coubertin — Plataforma LMS',
    },
    description: {
      es: 'Plataforma educativa a medida para un instituto de formación deportiva (proyecto de cliente vía Coding Click). Catálogo con buscador y filtros, compra con Stripe e inscripción automática, aula virtual con progreso, foro por curso, evaluaciones con nota y devolución, y panel de administración con estadísticas. Supabase para auth, base de datos con RLS y storage. En etapa final de testing y carga de contenido.',
      en: 'Custom learning platform for a sports-education institute (client project through Coding Click). Searchable, filterable catalog, Stripe checkout with automatic enrollment, a virtual classroom with progress tracking, per-course forums, graded assessments with feedback, and an admin panel with statistics. Supabase for auth, an RLS-protected database and storage. In final testing and content loading.',
      pt: 'Plataforma educacional sob medida para um instituto de formação esportiva (projeto de cliente via Coding Click). Catálogo com busca e filtros, compra com Stripe e matrícula automática, sala de aula virtual com progresso, fórum por curso, avaliações com nota e feedback, e painel de administração com estatísticas. Supabase para auth, banco de dados com RLS e storage. Em fase final de testes e carga de conteúdo.',
    },
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Stripe', 'Resend', 'Vercel'],
    highlight: {
      es: 'Cliente · Live',
      en: 'Client · Live',
      pt: 'Cliente · Live',
    },
    image: '/project-coubertin.svg',
    liveUrl: 'https://institutocoubertin.com',
    type: 'web',
    accentColor: 'orange',
  },
  {
    title: {
      es: 'Turnex — Gestión de complejos deportivos',
      en: 'Turnex — Sports-complex management',
      pt: 'Turnex — Gestão de complexos esportivos',
    },
    description: {
      es: 'Sistema de gestión para complejos deportivos: socios y cuentas corrientes, cuotas, reservas de canchas, turnos fijos, control de acceso con carnet QR, cobros, caja diaria y portal del socio. PostgreSQL con SQL directo (sin ORM) y migraciones versionadas, roles por perfil (admin, recepción, cobranzas, socio), cron diario idempotente y tests con Vitest + Playwright. Demo funcional con datos ficticios.',
      en: 'Management system for sports complexes: members and account balances, fees, court bookings, recurring slots, QR membership-card access control, payments, a daily cash register and a member portal. PostgreSQL with plain SQL (no ORM) and versioned migrations, role-based access (admin, front desk, billing, member), an idempotent daily cron job and tests with Vitest + Playwright. Working demo with fictitious data.',
      pt: 'Sistema de gestão para complexos esportivos: sócios e contas correntes, mensalidades, reservas de quadras, horários fixos, controle de acesso com carteirinha QR, cobranças, caixa diário e portal do sócio. PostgreSQL com SQL direto (sem ORM) e migrações versionadas, perfis de acesso (admin, recepção, cobrança, sócio), cron diário idempotente e testes com Vitest + Playwright. Demo funcional com dados fictícios.',
    },
    tags: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'SQL', 'Supabase Auth', 'Zod', 'Vitest', 'Playwright'],
    highlight: {
      es: 'Demo funcional',
      en: 'Working demo',
      pt: 'Demo funcional',
    },
    image: '/project-turnex.svg',
    githubUrl: 'https://github.com/santiagomalak/Turnex',
    type: 'web',
    accentColor: 'green',
  },
  {
    title: 'StackAdvisor',
    description: {
      es: 'SaaS propia: un cuestionario evalúa 35 combinaciones de stacks y recomienda el óptimo con justificación, roadmap de 12 semanas y estimador de costos. El Blueprint premium usa Gemini para generar arquitectura, base de datos, plan semana a semana y prompts para desarrollar con IA. Pensado para developers independientes y founders latinoamericanos.',
      en: 'My own SaaS: a questionnaire evaluates 35 stack combinations and recommends the best fit with a rationale, a 12-week roadmap and a cost estimator. The premium Blueprint uses Gemini to generate the architecture, database, a week-by-week plan and prompts for building with AI. Built for independent developers and Latin American founders.',
      pt: 'SaaS própria: um questionário avalia 35 combinações de stacks e recomenda a ideal com justificativa, roadmap de 12 semanas e estimador de custos. O Blueprint premium usa o Gemini para gerar arquitetura, banco de dados, plano semana a semana e prompts para desenvolver com IA. Pensado para devs independentes e founders latino-americanos.',
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini', 'Decision Engine', 'SaaS'],
    highlight: {
      es: 'En producción',
      en: 'In production',
      pt: 'Em produção',
    },
    image: '/project-stackadvisor.png',
    githubUrl: 'https://github.com/santiagomalak/stackadvisor-',
    liveUrl: 'https://stackadvisor-nu.vercel.app',
    type: 'web',
    accentColor: 'purple',
  },
  {
    title: {
      es: 'Coding Click — Sitio de la agencia',
      en: 'Coding Click — Agency website',
      pt: 'Coding Click — Site da agência',
    },
    description: {
      es: 'Sitio de Coding Click, mi marca de desarrollo para PYMEs: web, sistemas a medida, data y automatización. Multi-página en React + Vite con escena 3D con física (Three.js + cannon-es), motion con GSAP y Lenis, y un recomendador interactivo que sugiere el pack según las necesidades del cliente.',
      en: 'Website for Coding Click, my development brand for small businesses: web, custom systems, data and automation. A multi-page React + Vite site with a physics-driven 3D scene (Three.js + cannon-es), GSAP and Lenis motion, and an interactive recommender that suggests a package based on the client’s needs.',
      pt: 'Site da Coding Click, minha marca de desenvolvimento para pequenas e médias empresas: web, sistemas sob medida, dados e automação. Multi-página em React + Vite com cena 3D com física (Three.js + cannon-es), animações com GSAP e Lenis, e um recomendador interativo que sugere o pacote conforme as necessidades do cliente.',
    },
    tags: ['React', 'TypeScript', 'Vite', 'Three.js', 'GSAP', 'Tailwind CSS'],
    highlight: 'Live',
    image: '/project-codingclick.svg',
    githubUrl: 'https://github.com/santiagomalak/Coding-Click',
    liveUrl: 'https://coding-click.vercel.app',
    type: 'web',
    accentColor: 'teal',
  },
  {
    title: 'Crypto Live Dashboard',
    description: {
      es: 'Dashboard en tiempo real conectado a Binance WebSocket: velas, volumen, 6 timeframes (1m→1d) y detección de anomalías por z-score sobre retornos de precio. Feed de trades en vivo con color buy/sell. BTC · ETH · SOL · BNB · XRP. Sin API key — datos 100% públicos.',
      en: 'Real-time dashboard connected to the Binance WebSocket: candles, volume, 6 timeframes (1m→1d) and z-score anomaly detection on price returns. Live trade feed with buy/sell coloring. BTC · ETH · SOL · BNB · XRP. No API key — 100% public data.',
      pt: 'Dashboard em tempo real conectado ao WebSocket da Binance: candles, volume, 6 timeframes (1m→1d) e detecção de anomalias por z-score sobre os retornos de preço. Feed de trades ao vivo com cores de compra/venda. BTC · ETH · SOL · BNB · XRP. Sem API key — dados 100% públicos.',
    },
    tags: ['Next.js', 'WebSocket', 'Binance API', 'lightweight-charts', 'Zustand', 'Z-score'],
    highlight: {
      es: 'Tiempo real · LIVE',
      en: 'Real-time · LIVE',
      pt: 'Tempo real · LIVE',
    },
    image: '/crypto-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/crypto-dashboard',
    liveUrl: 'https://crypto-dashboard-five-dun.vercel.app',
    type: 'web',
    accentColor: 'purple',
  },
  {
    title: {
      es: 'FreelanceOS — Propuestas con IA',
      en: 'FreelanceOS — AI-written proposals',
      pt: 'FreelanceOS — Propostas com IA',
    },
    description: {
      es: 'App en React que genera propuestas freelance personalizadas a partir del brief del cliente usando LLMs. La migré de Claude a Groq + Llama 3.3 70B para reducir el costo de inferencia sin perder calidad en la salida.',
      en: 'A React app that generates tailored freelance proposals from the client’s brief using LLMs. I migrated it from Claude to Groq + Llama 3.3 70B to cut inference costs without losing output quality.',
      pt: 'App em React que gera propostas freelance personalizadas a partir do briefing do cliente usando LLMs. Migrei de Claude para Groq + Llama 3.3 70B para reduzir o custo de inferência sem perder qualidade na saída.',
    },
    tags: ['React', 'LLMs', 'Groq', 'Llama 3.3 70B', 'Prompt Engineering'],
    highlight: {
      es: 'IA aplicada',
      en: 'Applied AI',
      pt: 'IA aplicada',
    },
    image: '/project-freelanceos.svg',
    githubUrl: 'https://github.com/santiagomalak/freelance-os',
    type: 'web',
    accentColor: 'blue',
  },
  {
    title: {
      es: 'Wayra Huasi — Plataforma de Alquiler',
      en: 'Wayra Huasi — Rental Platform',
      pt: 'Wayra Huasi — Plataforma de Aluguel',
    },
    description: {
      es: 'Sitio web completo para complejo de departamentos amueblados en Córdoba, Argentina. Galería interactiva de unidades, sección de amenities, mapa de ubicación y sistema de reservas con contacto directo vía WhatsApp. Diseño responsivo optimizado para conversión.',
      en: 'Complete website for a furnished-apartment complex in Córdoba, Argentina. Interactive unit gallery, amenities section, location map and a booking flow with direct WhatsApp contact. Responsive design optimized for conversion.',
      pt: 'Site completo para um complexo de apartamentos mobiliados em Córdoba, Argentina. Galeria interativa das unidades, seção de comodidades, mapa de localização e sistema de reservas com contato direto via WhatsApp. Design responsivo otimizado para conversão.',
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'WhatsApp API'],
    highlight: 'Live',
    image: '/project-wayrahuasi.png',
    githubUrl: 'https://github.com/santiagomalak/Servicios---Tu-Complejo',
    liveUrl: 'https://resplendent-kangaroo-a8dbd3.netlify.app/',
    type: 'web',
    accentColor: 'green',
  },
]
