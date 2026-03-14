import SectionHeader from '../components/ui/SectionHeader'
import SkillCategoryCard from '../components/ui/SkillCategoryCard'
import { skillCategories } from '../data/skills'

const categoryAccents = {
  Languages: {
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
  Frontend: {
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
  Backend: {
    cardBg: 'bg-purple-50',
    cardBorder: 'border-purple-200',
    cardHoverBorder: 'hover:border-purple-300',
    titleClass: 'text-purple-700',
    accentBg: 'bg-purple-100',
    accentText: 'text-purple-700',
    badge: {
      border: 'border-purple-200',
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      hoverBorder: 'hover:border-purple-300',
      hoverBg: 'hover:bg-purple-200/70',
      hoverText: 'hover:text-purple-800',
    },
  },
  'AI / ML': {
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
  'Cloud / DevOps': {
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
  Tools: {
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

export default function Skills() {
  return (
    <>
      <SectionHeader
        variant="compact"
        title="Skills"
        subtitle="Technologies and tools I work with."
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
        </div>
      </section>
    </>
  )
}
