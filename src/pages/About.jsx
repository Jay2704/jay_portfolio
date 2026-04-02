import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import { contactInfo } from '../data/contact'
import { heroData } from '../data/hero'
import githubIcon from '../assets/icons/github.svg'
import leetcodeIcon from '../assets/leetcode.png'
import codeforcesIcon from '../assets/codeforces.png'
import codechefIcon from '../assets/codechef.avif'
import linkedinIcon from '../assets/icons/linkedin.svg'

export default function About() {
  const codingProfiles = [
    { label: 'GitHub', href: contactInfo.github, icon: githubIcon },
    { label: 'LeetCode', href: contactInfo.leetcode, icon: leetcodeIcon },
    { label: 'Codeforces', href: contactInfo.codeforces, icon: codeforcesIcon },
    { label: 'CodeChef', href: contactInfo.codechef, icon: codechefIcon },
    { label: 'LinkedIn', href: contactInfo.linkedIn, icon: linkedinIcon },
  ]

  return (
    <>
      <SectionHeader
        variant="compact"
        title="About"
        subtitle="Professional summary and coding profiles."
      />
      <section className="section-padding">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10"
          >
            <div className="max-w-2xl lg:pr-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
                Professional summary
              </h2>
              <p className="mt-6 max-w-prose text-[var(--color-text-muted)] leading-7">
                {heroData.summary}
              </p>
            </div>

            <div className="surface-card p-5 md:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Coding Profiles
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card surface-card-hover flex h-32 flex-col items-center justify-center gap-3 p-4 text-center no-underline"
                  >
                    <img
                      src={profile.icon}
                      alt={`${profile.label} icon`}
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text)]">
                      {profile.label}
                    </span>
                  </a>
                ))}
              </div>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Worked With
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="flex min-h-14 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-3 text-center">
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    JPMorgan Chase
                  </span>
                </div>
                <div className="flex min-h-14 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-3 text-center">
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    Capgemini
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
