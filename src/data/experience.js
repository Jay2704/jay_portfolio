export const experiences = [
  {
    id: '1',
    role: 'Data Scientist',
    company: 'JPMorgan Chase',
    location: 'New Jersey, USA',
    duration: 'August 2024 – Present',
    achievements: [
      'Collaborated with a cross-functional team of 4 data scientists and 3 ML engineers to build an end-to-end credit risk scoring pipeline using XGBoost and logistic regression on 12M+ loan records ingested via PySpark from AWS S3 and Redshift, helping reduce estimated default exposure by $18M annually and cutting model validation cycle time by 35% through automated MLflow experiment tracking.',
      'Partnered with AML and Compliance stakeholders to develop an NLP-driven alert triage system using fine-tuned BERT and Neo4j knowledge graphs to correlate transaction narratives with entity relationships, reducing false-positive alerts by 41% and saving 1,200+ analyst-hours per quarter; presented findings to leadership across 3 business units.',
      'Worked with engineering and risk teams to architect a real-time fraud detection microservice on AWS Lambda and Kafka, deploying a stacked ensemble of XGBoost and LightGBM that achieved 97.3% AUC and reduced fraud-related charge-offs by $4.2M in the first two quarters after deployment.',
      'Built a transformer-based document intelligence pipeline using LayoutLM and spaCy to extract and classify entities from 500K+ regulatory filings, reducing manual review workload by 60% and improving downstream compliance reporting accuracy to 98.6%.',
      'Developed a portfolio risk analytics module using GARCH volatility forecasting, CVaR, and Sortino Ratio calculations on Snowflake-backed time-series data, enabling risk managers to stress-test $3.2B in assets and reducing report generation time by 80%.',
      'Implemented SHAP- and LIME-based explainability, PSI drift monitoring, and Responsible AI fairness audits across 6 production SageMaker models, improving model governance over an 18-month period and reducing audit remediation time by 45%.',
      'Defined CI/CD pipelines and data governance standards for the data science platform; created reusable MLOps templates adopted by 3 additional teams, reducing new model onboarding time by 40%, while mentoring 2 junior data scientists on best practices.',
    ],
  },
  {
    id: '2',
    role: 'Data Scientist',
    company: 'Capgemini',
    location: 'Bangalore, India',
    duration: 'August 2020 – July 2023',
    achievements: [
      'Developed and deployed a customer churn prediction model for a Tier-1 UK telecommunications client using Random Forest with SMOTE on 8M+ subscriber records, achieving 89% recall and enabling targeted retention campaigns that reduced churn by 22% within 6 months, preserving approximately £4.1M in annual recurring revenue.',
      'Built an end-to-end demand forecasting system for a global FMCG client using an LSTM and ARIMA ensemble on 3 years of POS data across 400+ SKUs, reducing overstock inventory by 18% and improving forecast accuracy (MAPE) from 14.2% to 6.8%, unlocking $2.3M in working capital.',
      'Designed a sentiment analysis and topic modeling pipeline (BERT + LDA) for a European e-commerce platform, processing 2M+ customer support tickets monthly; insights contributed to a 15% reduction in repeat complaints and supported 3 product roadmap decisions over two quarters.',
      'Engineered a PySpark-based ETL pipeline on Azure Synapse, ingesting 50GB+ of data daily from 12 sources, reducing processing latency from 6 hours to 45 minutes and improving data freshness SLAs for 5 downstream BI teams.',
      'Implemented an A/B testing and Bayesian inference framework to evaluate dynamic pricing strategies for a Southeast Asian e-commerce client, delivering statistically significant insights (p < 0.05) that increased average order value by 11% and informed regional pricing decisions.',
      'Optimized SQL queries and Hive partitioning strategies on a Hadoop cluster, reducing monthly reporting runtimes by 67% and lowering annual cloud compute costs by $28K, while ensuring PII compliance across 3 jurisdictions.',
    ],
  },
]
