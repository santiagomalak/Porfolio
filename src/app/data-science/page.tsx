'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const dataScienceProjects = [
  {
    title: 'E-Commerce Data Platform — Olist Brazil',
    description: 'Pipeline de datos end-to-end sobre 100k+ órdenes reales del mercado brasileño (Olist). PostgreSQL + dbt con 4 capas de modelos: staging → intermediate → marts. RFM segmentation, cohort retention, revenue trends y seller performance — todo en SQL puro. Análisis y documentación en portugués (C1). CI/CD con GitHub Actions.',
    tags: ['PostgreSQL', 'dbt', 'Python', 'Docker', 'SQL', 'RFM', 'Cohort Analysis', 'GitHub Actions'],
    highlight: '100k+ órdenes · Analytics Engineering',
    image: '/ds-ecommerce-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/ecommerce-data-platform',
    liveUrl: 'https://ecommerce-dashboard-puce.vercel.app',
    type: 'datascience' as const,
    accentColor: 'orange' as const,
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
    title: 'Performance Monitoring System — Ivolution',
    description: '967 atletas monitoreados en 13 deportes. Alertas de tres estados (SUPERCOMPENSACIÓN / ATENCIÓN / FATIGADO) con umbrales dinámicos por percentil (p25/p75), 10.000+ mediciones registradas y soporte multilingüe ES/EN/PT. El sistema continúa operativo tras mi salida — herramienta principal de decisiones de la organización.',
    tags: ['SQL', 'BigQuery', 'dbt', 'Metabase', 'Python', 'Analytics Engineering'],
    highlight: '967 atletas · 13 deportes',
    image: '/ivolution-dashboard.png',
    liveUrl: '/data-science/ivolution',
    type: 'datascience' as const,
    accentColor: 'blue' as const,
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
    title: 'Segmentación de Usuarios — Email Marketing',
    description: 'Segmentación no supervisada sobre 212.292 registros reales de campañas de mailing. Aplica K-Means y MiniBatchKMeans con análisis de Silhouette Score para determinar el k óptimo (6 segmentos). Reducción dimensional con PCA para visualización. Output: archivo Excel con asignación de cluster y recomendaciones de estrategia personalizadas por segmento.',
    tags: ['Python', 'K-Means', 'PCA', 'Silhouette Score', 'Scikit-learn', 'Clustering'],
    highlight: '212.292 usuarios · 6 segmentos',
    image: '/ds-mailing-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/Datos-de-Mailing',
    notebookUrl: 'https://github.com/santiagomalak/Datos-de-Mailing/blob/master/Clustering%20de%20Usuarios%20a%20partir%20de%20Datos%20de%20Mailing.ipynb',
    type: 'datascience' as const,
    accentColor: 'purple' as const,
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
    title: 'IBM HR Analytics — Predicción de Deserción',
    description: 'Análisis end-to-end sobre el dataset oficial de IBM con 1.470 empleados. Identifica los factores con mayor impacto en la rotación laboral mediante Random Forest con matriz de confusión y métricas de clasificación. Segmentación con K-Means y visualización de clusters con PCA. Genera insights accionables para reducir el churn de RR.HH.',
    tags: ['Python', 'Random Forest', 'K-Means', 'PCA', 'Scikit-learn', 'Seaborn'],
    highlight: '1.470 empleados',
    image: '/ds-ibm-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/IBM-Proyect',
    notebookUrl: 'https://github.com/santiagomalak/IBM-Proyect/blob/master/IBM-Proyect.ipynb',
    type: 'datascience' as const,
    accentColor: 'blue' as const,
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
    description: 'Pipeline completo de Procesamiento de Lenguaje Natural sobre 27.290 reseñas reales de Yelp (2005–2015). Análisis de sentimiento con TextBlob, Topic Modeling con LDA (5 temas: restaurantes, hotelería, retail, comida casual, cocinas especiales) y clustering semántico con K-Means sobre matriz TF-IDF. Insight clave: las reseñas más largas tienen sentimiento más negativo.',
    tags: ['Python', 'NLTK', 'TextBlob', 'TF-IDF', 'LDA', 'K-Means', 'WordCloud'],
    highlight: '27.290 reseñas',
    image: '/ds-nlp-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/NLP-Yelp',
    notebookUrl: 'https://github.com/santiagomalak/NLP-Yelp/blob/main/NLP.ipynb',
    type: 'datascience' as const,
    accentColor: 'purple' as const,
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
    title: 'Pipeline de Preprocesamiento — Weather AUS',
    description: 'Pipeline robusto sobre el dataset climático de Australia de Kaggle. Imputación estratégica de valores faltantes, encoding de variables categóricas, feature engineering y estandarización con StandardScaler. Base sólida y reproducible lista para cualquier modelo de clasificación de lluvia.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering', 'Data Cleaning'],
    highlight: 'Dataset Kaggle',
    image: '/ds-weather-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/weatherAUS',
    notebookUrl: 'https://github.com/santiagomalak/weatherAUS/blob/master/weatherAUS.ipynb',
    type: 'datascience' as const,
    accentColor: 'teal' as const,
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
    description: 'Modelo de regresión sobre el dataset clásico de Kaggle con más de 80 features de propiedades residenciales. Pipeline completo: EDA, imputación de nulos, encoding, feature selection y modelado. Competencia clásica de regresión supervisada con variable objetivo SalePrice.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Regresión', 'Feature Engineering', 'EDA'],
    highlight: '80+ variables · 84% accuracy',
    image: '/ds-house-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/House-Price-Kaggle',
    notebookUrl: 'https://github.com/santiagomalak/House-Price-Kaggle/blob/main/SPRINT%202A.ipynb',
    type: 'datascience' as const,
    accentColor: 'green' as const,
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
    description: 'Análisis exploratorio sobre 2.000 canciones de Spotify (1998–2020) con 59 géneros musicales. Correlación entre features de audio: danceability, energy, valence, tempo, instrumentalness. Visualizaciones de tendencias de popularidad por género y evolución temporal de las características musicales.',
    tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'EDA', 'Correlación'],
    highlight: '2.000 canciones · 59 géneros',
    image: '/ds-spotify-cover.svg',
    githubUrl: 'https://github.com/santiagomalak/Spotify-EDA',
    notebookUrl: 'https://github.com/santiagomalak/Spotify-EDA/blob/main/analysis.ipynb',
    type: 'datascience' as const,
    accentColor: 'green' as const,
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

export default function DataScience() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary-500">Proyectos de</span>{' '}
            <span className="text-primary-700">Data Science</span>
          </h1>
          <p className="text-xl text-gray-600">
            Machine learning, análisis estadístico y pipelines de datos — del dataset al insight accionable.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {dataScienceProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={index * 0.1}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} custom={0}
          className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Jupyter Notebooks & más análisis</h2>
            <p className="text-gray-600 text-sm">
              Explorá todos mis notebooks y proyectos de análisis de datos en GitHub.
            </p>
          </div>
          <a
            href="https://github.com/santiagomalak?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-medium whitespace-nowrap shadow-lg shadow-primary-200 hover:scale-[1.02]"
          >
            Ver en GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </div>
  )
}
