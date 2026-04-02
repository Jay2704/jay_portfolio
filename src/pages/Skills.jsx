import SectionHeader from '../components/ui/SectionHeader'
import SkillCategoryCard from '../components/ui/SkillCategoryCard'
import { MessageSquareText, Brain, GraduationCap, Users, MessageCircleReply } from 'lucide-react'
import { skillCategories, softSkills } from '../data/skills'

const categoryAccents = {
  'Programming & Querying': {
    cardBg: 'bg-blue-50',
    cardBorder: 'border-blue-200',
    cardHoverBorder: 'hover:border-blue-300',
    titleClass: 'text-blue-700',
    accentBg: 'bg-blue-100',
    accentText: 'text-blue-700',
    badge: {
      border: 'border-blue-200',
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      hoverBorder: 'hover:border-blue-300',
      hoverBg: 'hover:bg-blue-200/70',
      hoverText: 'hover:text-blue-800',
    },
  },
  'Machine Learning & AI': {
    cardBg: 'bg-violet-50',
    cardBorder: 'border-violet-200',
    cardHoverBorder: 'hover:border-violet-300',
    titleClass: 'text-violet-700',
    accentBg: 'bg-violet-100',
    accentText: 'text-violet-700',
    badge: {
      border: 'border-violet-200',
      bg: 'bg-violet-100',
      text: 'text-violet-700',
      hoverBorder: 'hover:border-violet-300',
      hoverBg: 'hover:bg-violet-200/70',
      hoverText: 'hover:text-violet-800',
    },
  },
  'Generative AI & LLMs': {
    cardBg: 'bg-indigo-50',
    cardBorder: 'border-indigo-200',
    cardHoverBorder: 'hover:border-indigo-300',
    titleClass: 'text-indigo-700',
    accentBg: 'bg-indigo-100',
    accentText: 'text-indigo-700',
    badge: {
      border: 'border-indigo-200',
      bg: 'bg-indigo-100',
      text: 'text-indigo-700',
      hoverBorder: 'hover:border-indigo-300',
      hoverBg: 'hover:bg-indigo-200/70',
      hoverText: 'hover:text-indigo-800',
    },
  },
  'NLP & Time Series': {
    cardBg: 'bg-cyan-50',
    cardBorder: 'border-cyan-200',
    cardHoverBorder: 'hover:border-cyan-300',
    titleClass: 'text-cyan-700',
    accentBg: 'bg-cyan-100',
    accentText: 'text-cyan-700',
    badge: {
      border: 'border-cyan-200',
      bg: 'bg-cyan-100',
      text: 'text-cyan-700',
      hoverBorder: 'hover:border-cyan-300',
      hoverBg: 'hover:bg-cyan-200/70',
      hoverText: 'hover:text-cyan-800',
    },
  },
  'Statistical & Quant Modeling': {
    cardBg: 'bg-rose-50',
    cardBorder: 'border-rose-200',
    cardHoverBorder: 'hover:border-rose-300',
    titleClass: 'text-rose-700',
    accentBg: 'bg-rose-100',
    accentText: 'text-rose-700',
    badge: {
      border: 'border-rose-200',
      bg: 'bg-rose-100',
      text: 'text-rose-700',
      hoverBorder: 'hover:border-rose-300',
      hoverBg: 'hover:bg-rose-200/70',
      hoverText: 'hover:text-rose-800',
    },
  },
  'Data Engineering & Big Data': {
    cardBg: 'bg-orange-50',
    cardBorder: 'border-orange-200',
    cardHoverBorder: 'hover:border-orange-300',
    titleClass: 'text-orange-700',
    accentBg: 'bg-orange-100',
    accentText: 'text-orange-700',
    badge: {
      border: 'border-orange-200',
      bg: 'bg-orange-100',
      text: 'text-orange-700',
      hoverBorder: 'hover:border-orange-300',
      hoverBg: 'hover:bg-orange-200/70',
      hoverText: 'hover:text-orange-800',
    },
  },
  'Cloud & MLOps': {
    cardBg: 'bg-emerald-50',
    cardBorder: 'border-emerald-200',
    cardHoverBorder: 'hover:border-emerald-300',
    titleClass: 'text-emerald-700',
    accentBg: 'bg-emerald-100',
    accentText: 'text-emerald-700',
    badge: {
      border: 'border-emerald-200',
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      hoverBorder: 'hover:border-emerald-300',
      hoverBg: 'hover:bg-emerald-200/70',
      hoverText: 'hover:text-emerald-800',
    },
  },
  'Visualization & BI': {
    cardBg: 'bg-sky-50',
    cardBorder: 'border-sky-200',
    cardHoverBorder: 'hover:border-sky-300',
    titleClass: 'text-sky-700',
    accentBg: 'bg-sky-100',
    accentText: 'text-sky-700',
    badge: {
      border: 'border-sky-200',
      bg: 'bg-sky-100',
      text: 'text-sky-700',
      hoverBorder: 'hover:border-sky-300',
      hoverBg: 'hover:bg-sky-200/70',
      hoverText: 'hover:text-sky-800',
    },
  },
  Databases: {
    cardBg: 'bg-green-50',
    cardBorder: 'border-green-200',
    cardHoverBorder: 'hover:border-green-300',
    titleClass: 'text-green-700',
    accentBg: 'bg-green-100',
    accentText: 'text-green-700',
    badge: {
      border: 'border-green-200',
      bg: 'bg-green-100',
      text: 'text-green-700',
      hoverBorder: 'hover:border-green-300',
      hoverBg: 'hover:bg-green-200/70',
      hoverText: 'hover:text-green-800',
    },
  },
  'Model Explainability': {
    cardBg: 'bg-fuchsia-50',
    cardBorder: 'border-fuchsia-200',
    cardHoverBorder: 'hover:border-fuchsia-300',
    titleClass: 'text-fuchsia-700',
    accentBg: 'bg-fuchsia-100',
    accentText: 'text-fuchsia-700',
    badge: {
      border: 'border-fuchsia-200',
      bg: 'bg-fuchsia-100',
      text: 'text-fuchsia-700',
      hoverBorder: 'hover:border-fuchsia-300',
      hoverBg: 'hover:bg-fuchsia-200/70',
      hoverText: 'hover:text-fuchsia-800',
    },
  },
  'Tools & Methodologies': {
    cardBg: 'bg-amber-50',
    cardBorder: 'border-amber-200',
    cardHoverBorder: 'hover:border-amber-300',
    titleClass: 'text-amber-700',
    accentBg: 'bg-amber-100',
    accentText: 'text-amber-700',
    badge: {
      border: 'border-amber-200',
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      hoverBorder: 'hover:border-amber-300',
      hoverBg: 'hover:bg-amber-200/70',
      hoverText: 'hover:text-amber-800',
    },
  },
}

const softSkillIcons = {
  communication: MessageSquareText,
  brain: Brain,
  learning: GraduationCap,
  team: Users,
  feedback: MessageCircleReply,
}

export default function Skills() {
  return (
    <>
      <SectionHeader
        variant="compact"
        title="Skills"
        subtitle="Programming, machine learning, GenAI, data engineering, cloud, and tooling."
      />
      <section className="section-padding-sm">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, i) => (
              <SkillCategoryCard
                key={category.name}
                name={category.name}
                items={category.items}
                index={i}
                accent={categoryAccents[category.name]}
              />
            ))}
          </div>

          <div className="mt-12 md:mt-14">
            <div className="mb-6 text-center">
              <h2 className="font-heading text-2xl font-semibold text-[var(--color-text)] md:text-3xl">
                Soft Skills
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-[var(--color-text-muted)] md:text-base">
                Interpersonal strengths that support strong engineering execution and team impact.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {softSkills.map((skill) => {
                const Icon = softSkillIcons[skill.icon]
                return (
                  <article
                    key={skill.title}
                    className="rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <h3 className="flex items-center gap-2 font-semibold text-gray-800">
                      {Icon && <Icon size={16} className="text-[var(--color-accent)]" aria-hidden />}
                      {skill.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{skill.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
