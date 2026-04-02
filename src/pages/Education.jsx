import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Award } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { education, certifications } from '../data/education'

export default function Education() {
  return (
    <>
      <SectionHeader
        variant="compact"
        title="Education"
        subtitle="Academic background and qualifications."
      />
      <section className="section-padding-sm">
        <div className="site-container max-w-4xl">
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={`${edu.degree}-${edu.school}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="surface-card p-6 md:p-7"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  {edu.logo && (
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3 md:h-24 md:w-24">
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="flex items-center gap-2 text-xl font-semibold text-[var(--color-text)] md:text-2xl">
                          <GraduationCap size={22} className="text-[var(--color-cyan)]" />
                          {edu.degree}
                        </h3>
                        <p className="mt-2 text-base text-[var(--color-accent)] md:text-lg">{edu.school}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <span className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-sm text-[var(--color-text-muted)]">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]/35">
        <div className="site-container max-w-4xl">
          <SectionHeader
            title="Certifications"
            subtitle="Professional learning and credentials."
          />
          <ul className="space-y-3" role="list">
            {certifications.map((c, i) => (
              <motion.li
                key={`${c.title}-${c.issuer}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06 }}
                className="surface-card flex gap-3 p-4 md:p-5"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-accent)]">
                  <Award size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-[var(--color-text)]">{c.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{c.issuer}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
