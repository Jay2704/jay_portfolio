import pp1 from '../assets/pp1.png'
import pp2 from '../assets/pp2.png'
import pp3 from '../assets/pp3.png'
import pp4 from '../assets/pp4.png'
import pp5 from '../assets/pp5.png'
import pp6 from '../assets/pp6.png'

export const projectCategories = ['AI / ML', 'Full Stack', 'Developer Tools']

export const projects = [
  {
    slug: 'multimodal-lie-detection',
    title: 'Multimodal Lie Detection System',
    description: 'Research project combining EEG signals and visual data for lie detection with 89% accuracy, applicable to healthcare and HCI.',
    category: 'AI / ML',
    image: pp5,
    techStack: ['Python', 'PyTorch', 'EEG Processing', 'Computer Vision', 'Deep Learning'],
    githubUrl: 'https://github.com/Jay2704',
    demoUrl: null,
    overview: 'A cutting-edge multimodal classification system that fuses EEG brainwave signals with visual facial data to detect deception with 89% accuracy. This research project explores the intersection of neuroscience and computer vision for applications in healthcare diagnostics and human-computer interaction.',
    problem: 'Traditional lie detection methods rely on single modalities like polygraphs or facial analysis alone, which suffer from inconsistent accuracy across different subjects and contexts. Single-modality systems often miss subtle physiological cues that could improve detection reliability, limiting their practical applications in security, healthcare, and legal settings.',
    solution: 'Developed a multimodal deep learning system that simultaneously processes EEG signals and visual data (facial micro-expressions) to capture complementary physiological indicators of deception. The fusion architecture combines temporal EEG patterns with spatial visual features, achieving 89% classification accuracy across diverse test subjects—significantly outperforming single-modality baselines.',
    architecture: 'The system uses a dual-stream architecture: (1) A 1D CNN-LSTM network processes time-series EEG data to extract temporal brainwave patterns, (2) A VGG-based CNN analyzes facial video frames for micro-expression features. Both streams feed into a multimodal fusion layer that learns cross-modal correlations. The entire pipeline is built with PyTorch, with custom data augmentation expanding training data by 4x.',
    features: [
      '89% lie detection accuracy across diverse subjects',
      'Multimodal fusion of EEG and visual data streams',
      '4x data augmentation for robust generalization',
      'Real-time inference capability for live applications',
      'Applicable to healthcare screening and HCI research',
      'Research paper currently under peer review',
    ],
    challenges: 'The primary challenge was synchronizing EEG signals with video frames at millisecond precision, as temporal misalignment significantly degraded fusion performance. Additionally, engineering robust preprocessing pipelines to handle noisy EEG data and varying lighting conditions in video required extensive signal processing optimization. Balancing model complexity with inference speed for potential real-time applications also required careful architecture tuning.',
  },
  {
    slug: 'ai-log-agent',
    title: 'AI Debugging Agents System (Agentic AI)',
    description:
      'Engineered a production-grade multi-agent debugging system using LLaMA 3 fine-tuned with LoRA, Neo4j Knowledge Graphs, LangChain RAG pipelines, and a Vector Database (FAISS) to automate root-cause analysis from JIRA tickets and distributed log data across a 50K+ line codebase.',
    category: 'AI / ML',
    image: pp1,
    techStack: ['Python', 'GraphRAG', 'LLaMA', 'Neo4j', 'LangChain', 'Docker'],
    githubUrl: 'https://github.com/Jay2704',
    demoUrl: null,
    overview:
      'Engineered a production-grade multi-agent debugging system using LLaMA 3 fine-tuned with LoRA, Neo4j Knowledge Graphs, LangChain RAG pipelines, and a Vector Database (FAISS) to automate root-cause analysis from JIRA tickets and distributed log data across a 50K+ line codebase.',
    problem:
      'P1/P2 incidents across microservices and large monorepos force engineers to manually connect JIRA context, noisy logs, and code navigation—slowing MTTR and burning senior time. Single LLM prompts or static parsers cannot reliably trace failures through dependencies, historical tickets, and similar stack traces at scale.',
    solution:
      'Shipped an Agentic AI workflow: LoRA-adapted LLaMA 3 reasons over LangChain RAG (FAISS) and GraphRAG-style retrieval backed by Neo4j, ingesting JIRA and distributed logs to propose root causes and fixes with auditable chains. Containerised services (Docker) keep retrieval, graph, and model endpoints reproducible in production.',
    architecture:
      'Python services coordinate specialised agents (ingestion, parsing, vector search, graph expansion, codebase navigation, synthesis). Embeddings land in FAISS; entities and relationships feed Neo4j for structured hops alongside unstructured log similarity. LangChain orchestrates tool calls and memory; the stack runs containerised for consistent deploys.',
    features: [
      'Formulated a 7-agent Agentic AI workflow (JIRA ingestion, log parsing, vector similarity search, codebase navigation, fix synthesis) that reduced mean time-to-resolution for P1/P2 incidents by 55% equivalent to recovering 18 engineering-hours per week while producing traceable reasoning chains auditable by senior engineers.',
    ],
    challenges:
      'Keeping graph schema and chunking aligned with how engineers actually search code—without exploding Neo4j size—required iteration. Balancing latency across seven agents versus depth of analysis needed careful batching and caching. Ensuring every suggested fix carried enough trace context for senior review meant structured logging and replayable prompts, not only model fluency.',
  },
  {
    slug: 'astrovoyages',
    title: 'AstroVoyages – GenAI Astrology Platform',
    description: 'Built an AI-assisted astrology platform integrating LLMs for personalized insights, deployed across web and mobile.',
    category: 'Full Stack',
    image: pp2,
    techStack: ['React Native', 'Node.js', 'Azure', 'LLMs', 'GenAI'],
    githubUrl: 'https://github.com/Jay2704',
    demoUrl: null,
    overview: 'A full-stack AI-powered astrology platform that delivers personalized astrological insights using large language models. The application provides adaptive predictions based on user context and birth chart data, deployed seamlessly across both web and mobile platforms using React Native and Azure cloud infrastructure.',
    problem: 'Traditional astrology applications offer generic, static horoscopes that fail to resonate with users seeking personalized guidance. These apps lack the intelligence to adapt predictions based on individual user contexts, life events, or ongoing situations, resulting in low engagement and user dissatisfaction.',
    solution: 'Integrated large language models to generate dynamic, contextually aware astrological readings that consider user birth charts, current planetary positions, and personal context provided by users. The LLM synthesizes astrological knowledge with conversational AI to deliver insights that feel genuinely personalized and relevant to each user\'s unique situation.',
    architecture: 'React Native powers the cross-platform frontend for iOS, Android, and web with a unified codebase. The Node.js backend handles user authentication, birth chart calculations, and orchestrates LLM API calls. Azure cloud provides scalable infrastructure including Azure Functions for serverless inference, Cosmos DB for user data, and Azure OpenAI Service for LLM integration.',
    features: [
      'AI-driven personalized astrological insights',
      'Multi-device deployment (iOS, Android, Web)',
      'Real-time birth chart calculations',
      'Contextual predictions based on user input',
      'Interactive conversational UI for follow-up questions',
      'Error detection and fallback for GenAI outputs',
      'User preference learning for improved predictions',
      'Daily, weekly, and monthly horoscope generation',
    ],
    challenges: 'Ensuring LLM output consistency and reliability was a major challenge—the model occasionally generated contradictory or factually incorrect astrological information. Implemented a multi-layer validation system with error detection workflows to catch and correct problematic outputs. Balancing response latency with insight quality required optimizing prompt engineering and implementing intelligent caching strategies.',
  },
  {
    slug: 'brain-tumor-detection',
    title:
      'Transformer-Based Medical Image Classification | PyTorch, CNN, Vision Transformer, Flask, React',
    description:
      'Deep learning MRI classification combining CNN feature extraction and Vision Transformer attention in PyTorch; full-stack Flask + React clinical decision-support app with quantization and ONNX.',
    category: 'AI / ML',
    image: pp4,
    techStack: ['PyTorch', 'CNN', 'Vision Transformer', 'Flask', 'React', 'ONNX'],
    githubUrl: 'https://github.com/Jay2704/brain_tumor_detection',
    demoUrl: 'https://jay2704.github.io/brain_tumor_detection/',
    overview:
      'A transformer-based medical image classification system for brain MRI: CNN backbones supply spatial features, Vision Transformer layers model long-range dependencies, and the stack is trained end-to-end in PyTorch. The model is deployed behind a Flask API and a React UI as a clinical decision-support tool, with optimisation for latency and integration paths toward hospital workflows.',
    problem:
      'Radiologists need fast, reliable support when triaging brain MRI volumes, but generic CNN-only pipelines can miss global context while heavy transformers alone can be costly to run in clinical settings. Deploying research models into a usable web stack—with acceptable latency, traceability, and safeguards for sensitive imaging data—remains a barrier to adoption.',
    solution:
      'Built a hybrid CNN + Vision Transformer classifier in PyTorch on a 3,000-image MRI dataset spanning four classes (Glioma, Meningioma, Pituitary, None), reaching 94% accuracy. Reduced inference latency by 35% through quantisation and ONNX export. Wrapped inference in a Flask + React application delivering sub-2-second outputs, with design choices aimed at HIPAA-aligned handling and future PACS integration.',
    architecture:
      'PyTorch implements CNN feature extraction fused with ViT-style attention for slice- or image-level classification. Training uses standard medical-imaging augmentation; exported ONNX models support efficient deployment. Flask serves the inference API; React provides the operator-facing workflow. The architecture separates inference from storage so hospital systems can attach storage and identity policies appropriate to their environment.',
    features: [
      'Built a deep learning MRI classification system combining CNN feature extraction and Vision Transformer attention mechanisms in PyTorch, achieving 94% accuracy across 4 tumour classes (Glioma, Meningioma, Pituitary, None) on a 3,000-image dataset; optimised inference latency by 35% via model quantisation and ONNX export.',
      'Deployed as a full-stack clinical decision-support web app (Flask + React) with sub-2-second diagnostic output; architecture supports HIPAA-aligned data handling and is designed for integration with hospital PACS systems.',
    ],
    challenges:
      'Balancing ViT expressiveness with latency budgets required quantisation and ONNX deployment testing across hardware targets. Medical datasets needed careful splits to avoid leakage across slices from the same patient. Aligning the prototype with HIPAA-oriented practices and PACS-oriented integration points meant keeping clear boundaries between inference, audit logs, and image storage—areas that continue to evolve with deployment context.',
  },
  {
    slug: 'pybot-chatbot',
    title: 'PyBot – Machine Learning Chatbot',
    description: 'ML-powered chatbot using NLP techniques, improving intent recognition accuracy by 25% with containerized deployment.',
    category: 'AI / ML',
    image: pp3,
    techStack: ['Python', 'TensorFlow', 'NLP', 'Docker'],
    githubUrl: 'https://github.com/Jay2704/pybot_NLP',
    demoUrl: null,
    overview: 'A machine learning-powered conversational chatbot built with TensorFlow and NLP techniques that achieves 25% improved intent recognition accuracy compared to baseline models. The chatbot is containerized using Docker for consistent, portable deployment across different environments with minimal configuration.',
    problem: 'Basic rule-based chatbots struggle with understanding user intent when queries are phrased differently than expected patterns. They require extensive manual rule writing and fail to generalize to novel phrasings. Additionally, deploying chatbots across different environments often leads to dependency conflicts and inconsistent behavior.',
    solution: 'Built an ML-based chatbot using TensorFlow that learns intent patterns from training data rather than relying on hand-crafted rules. The NLP pipeline includes tokenization, embedding, and a neural network classifier that generalizes to varied query phrasings. Docker containerization ensures the chatbot runs identically across development, staging, and production environments.',
    architecture: 'The chatbot uses a TensorFlow Sequential model with an embedding layer, LSTM for sequence understanding, and dense layers for intent classification. Preprocessing includes NLTK-based tokenization, lemmatization, and custom entity extraction. The entire application is packaged in a Docker container with all dependencies, exposing a REST API for integration with frontend applications or messaging platforms.',
    features: [
      '25% improved intent recognition accuracy',
      'TensorFlow-based neural network classifier',
      'NLP preprocessing with tokenization and lemmatization',
      'Docker containerized for portable deployment',
      'Cross-platform consistency (dev, staging, production)',
      'REST API for easy integration',
      'Reduced deployment errors through containerization',
      'Extensible architecture for adding new intents',
    ],
    challenges: 'Optimizing the NLP pipeline to handle diverse query patterns—including typos, slang, and incomplete sentences—required extensive feature engineering and model tuning. Balancing model complexity with inference latency was important for real-time chat applications. Additionally, designing a training data collection and labeling workflow that could scale as new intents were added posed ongoing operational challenges.',
  },
  {
    slug: 'llama-finetune-qlora',
    title:
      'LLM Fine-Tuning & RAG Pipeline Engineering (GenAI Platform) | Python, LoRA/QLoRA, LangChain, FAISS, FastAPI',
    description:
      'QLoRA fine-tuning of LLaMA 2 7B on a 50K-record domain dataset with LangChain RAG over FAISS, FastAPI deployment, and evaluation pipelines—serving 500+ MAU at 99.2% uptime.',
    category: 'AI / ML',
    image: pp6,
    techStack: ['Python', 'QLoRA', 'LLaMA 2', 'LangChain', 'FAISS', 'FastAPI'],
    githubUrl: 'https://github.com/Jay2704',
    demoUrl: null,
    overview:
      'A GenAI platform stack that combines parameter-efficient LLM fine-tuning with retrieval-augmented generation: LLaMA 2 7B adapted with QLoRA on proprietary domain data, exposed through FastAPI, with LangChain orchestrating retrieval against a FAISS vector store. Prompting, evaluation, and serving are treated as one system rather than isolated scripts.',
    problem:
      'Base LLMs hallucinate on niche domains and drift from organisational facts; naive fine-tuning alone does not ground answers in curated knowledge, and production GenAI needs reliable APIs, retrieval, and quality measurement—not only training loss curves.',
    solution:
      'Fine-tuned LLaMA 2 7B with QLoRA on a 50K-record proprietary dataset, cutting hallucination rate by 38% on held-out domain benchmarks versus the base model. Paired the adapter with a LangChain RAG layer over FAISS and shipped inference behind FastAPI. Added structured prompt patterns and automated eval (ROUGE, BERTScore, human preference) to tighten iteration loops, reaching 500+ monthly active users at 99.2% uptime.',
    architecture:
      'Training uses the Hugging Face / PEFT stack for QLoRA adapters; documents and chunks are embedded into FAISS for similarity search. LangChain chains handle retrieval, prompt assembly, and optional structured outputs. FastAPI wraps model and retriever endpoints for a clear service boundary suitable for client apps and monitoring.',
    features: [
      'Architected and fine-tuned a domain-specific LLM (LLaMA 2 7B) using QLoRA on a 50K-record proprietary dataset, reducing hallucination rate by 38% versus the base model on held-out domain benchmarks; deployed via FastAPI with a LangChain RAG orchestration layer backed by a FAISS Vector Database.',
      'Implemented Prompt Engineering best practices (chain-of-thought, few-shot, structured output schemas) and automated evaluation pipelines (ROUGE, BERTScore, human preference scoring) to iteratively improve model output quality; system served 500+ monthly active users with 99.2% uptime.',
    ],
    challenges:
      'Aligning retrieval chunking and embedding choices with domain jargon was critical for RAG quality; evaluation required balancing automatic metrics with human rubrics so improvements generalised. Operating FastAPI + vector DB + GPU inference under uptime SLAs meant health checks, backoff, and capacity planning—not only model accuracy.',
  },
]
