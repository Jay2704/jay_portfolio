import { motion } from 'framer-motion'

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative">
      <div
        className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)]/30 via-[var(--color-border)] to-transparent md:left-[27px]"
        aria-hidden
      />
      <ul className="space-y-8" role="list">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="relative flex gap-6 pl-16 md:pl-20"
          >
            <motion.div
              className="absolute left-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-lg md:h-14 md:w-14"
              whileHover={{ scale: 1.05 }}
            >
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="h-3 w-3 rounded-full bg-[var(--color-accent)]" />
              )}
            </motion.div>
            <div className="flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/30 hover:shadow-[0_0_30px_var(--color-accent-glow)]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">{exp.role}</h3>
                  <p className="mt-1 text-[var(--color-accent)]">{exp.company}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{exp.location}</p>
                </div>
                <span className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                  {exp.duration}
                </span>
              </div>
              <ul className="mt-5 space-y-2 border-t border-[var(--color-border)] pt-4">
                {exp.achievements.map((a, j) => (
                  <li key={j} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
