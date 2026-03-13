import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import PremiumHero from '../components/ui/PremiumHero'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ui/ProjectCard'
import StatCard from '../components/ui/StatCard'
import CTASection from '../components/ui/CTASection'
import { projects } from '../data/projects'
import { heroData, stats, strengths } from '../data/hero'
import { experiences } from '../data/experience'
import { codingProfiles } from '../data/contact'
import profileImg from '../assets/jay.jpg'

export default function Home() {
  const featured = projects.slice(0, 3)
  const experiencePreview = experiences.slice(0, 2)

  return (
    <>
      <PremiumHero profileImage={profileImg} />

      <section className="px-4 py-16 md:px-6 md:py-20" id="featured">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Featured projects"
            subtitle="A selection of recent work across ML, full-stack, and infrastructure."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-5 py-2.5 text-sm font-medium text-[var(--color-accent)] no-underline transition-colors hover:bg-[var(--color-accent)]/20"
            >
              View all projects →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]/50 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="At a glance"
            subtitle="What I focus on and deliver."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Strengths"
            subtitle="How I approach engineering and delivery."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/30"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]/30 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Recent experience"
            subtitle="Roles and impact highlights."
          />
          <ul className="space-y-4">
            {experiencePreview.map((exp, i) => (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to="/experience"
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 no-underline transition-colors hover:border-[var(--color-accent)]/30"
                >
                  <div>
                    <p className="font-medium text-[var(--color-text)]">{exp.role}</p>
                    <p className="text-sm text-[var(--color-accent)]">{exp.company}</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">{exp.duration}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link
              to="/experience"
              className="text-sm font-medium text-[var(--color-accent)] no-underline hover:underline"
            >
              Full experience →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Coding Profiles"
            subtitle="Practice and problem-solving across competitive programming platforms."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {codingProfiles.map(({ label, href, logo, username }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center transition-all hover:border-[var(--color-cyan)]/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.2), transparent)' }}
                  aria-hidden
                />
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3 transition-transform group-hover:scale-105 md:h-24 md:w-24">
                  <img src={logo} alt={label} className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-text)]">{label}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">@{username}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)] transition-colors group-hover:text-[var(--color-accent)]">
                  View Profile <ExternalLink size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <CTASection
            title="Let's build something together"
            subtitle="Open to collaboration, full-time roles, and interesting problems."
            primaryLabel="Get in touch"
            primaryTo="/contact"
            secondaryLabel="View projects"
            secondaryTo="/projects"
          />
        </div>
      </section>
    </>
  )
}
