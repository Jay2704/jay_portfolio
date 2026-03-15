import { motion } from 'framer-motion'

const deviconMap = {
  Python: 'devicon-python-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  Java: 'devicon-java-plain colored',
  HTML: 'devicon-html5-plain colored',
  CSS: 'devicon-css3-plain colored',
  'Shell Scripting': 'devicon-bash-plain colored',
  'React.js': 'devicon-react-original colored',
  'React Native': 'devicon-react-original colored',
  'HTML/CSS': 'devicon-html5-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-original colored',
  'Node.js': 'devicon-nodejs-plain colored',
  Flask: 'devicon-flask-original colored',
  'REST APIs': 'devicon-fastapi-plain colored',
  Express: 'devicon-express-original colored',
  PyTorch: 'devicon-pytorch-original colored',
  TensorFlow: 'devicon-tensorflow-original colored',
  LangChain: 'devicon-python-plain colored',
  LLaMA: 'devicon-python-plain colored',
  'Hugging Face': 'devicon-python-plain colored',
  'QLoRA/LoRA': 'devicon-python-plain colored',
  OpenCV: 'devicon-opencv-plain colored',
  NLP: 'devicon-python-plain colored',
  Embeddings: 'devicon-numpy-original colored',
  'Prompt Engineering': 'devicon-python-plain colored',
  'Agentic AI': 'devicon-python-plain colored',
  'AWS (EC2, S3, Lambda, SageMaker)': 'devicon-amazonwebservices-original colored',
  Docker: 'devicon-docker-plain colored',
  Jenkins: 'devicon-jenkins-line colored',
  Ansible: 'devicon-ansible-plain colored',
  Prometheus: 'devicon-prometheus-original colored',
  Grafana: 'devicon-grafana-original colored',
  'CI/CD': 'devicon-jenkins-line colored',
  PostgreSQL: 'devicon-postgresql-plain colored',
  MySQL: 'devicon-mysql-original colored',
  MongoDB: 'devicon-mongodb-plain colored',
  'Vector DB': 'devicon-mongodb-plain colored',
  Git: 'devicon-git-plain colored',
  GitHub: 'devicon-github-original colored',
  n8n: 'devicon-nodejs-plain colored',
  JIRA: 'devicon-jira-plain colored',
  Tableau: 'devicon-googlecloud-plain colored',
  'Agile/Scrum': 'devicon-jira-plain colored',
  'System Design': 'devicon-kubernetes-plain colored',
}

export default function SkillBadge({ label, small = false, tone }) {
  const borderClass = tone?.border ?? 'border-[var(--color-border)]'
  const bgClass = tone?.bg ?? 'bg-[#f1f5f9]'
  const textClass = tone?.text ?? 'text-[var(--color-text-muted)]/95'
  const hoverBorderClass = tone?.hoverBorder ?? 'hover:border-[var(--color-border-focus)]'
  const hoverBgClass = tone?.hoverBg ?? 'hover:bg-[#e8eff6]'
  const hoverTextClass = tone?.hoverText ?? 'hover:text-[var(--color-text)]'
  const hoverShadowClass = tone?.hoverShadow ?? 'hover:shadow-sm'
  const iconClass = deviconMap[label]

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-2 rounded-full border font-medium transition-all ${borderClass} ${bgClass} ${textClass} ${hoverBorderClass} ${hoverBgClass} ${hoverTextClass} ${hoverShadowClass} ${
        small ? 'px-3 py-1 text-xs' : 'px-3 py-1.5 text-sm'
      }`}
    >
      {!small && iconClass && <i className={`${iconClass} text-[20px] leading-none`} aria-hidden />}
      {label}
    </motion.span>
  )
}
