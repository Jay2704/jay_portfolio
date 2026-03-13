import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { education } from '../data/hero'
import { contactInfo } from '../data/contact'
import githubIcon from '../assets/icons/github.svg'
import leetcodeIcon from '../assets/icons/leetcode.svg'
import hackerrankIcon from '../assets/icons/hackerrank.svg'
import kaggleIcon from '../assets/icons/kaggle.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'

export default function About() {
  const backgroundParagraphs = [
    "I’m a Software Engineer and AI researcher with a Master’s in Computer Science from UMBC, specializing in building intelligent systems, cloud infrastructure, and scalable backend platforms.",
    'My work combines machine learning research with production engineering. During my graduate research at UMBC, I developed a multimodal lie-detection system that integrates EEG signals and visual data, achieving 89% classification accuracy using deep learning models.',
    'Previously at Hewlett Packard Enterprise and IBM, I worked on cloud automation and infrastructure tooling, optimizing AWS deployments, automating operational workflows, and building log analysis utilities that improved debugging and observability for enterprise applications.',
  ]

  const approachText =
    'I enjoy working across the stack—from fine-tuning large language models with QLoRA and building AI-powered agents to designing reliable cloud architectures and full-stack applications. My approach to engineering is simple: understand the problem deeply, build iteratively, measure impact, and ship systems that work in the real world.'

  const codingProfiles = [
    { label: 'GitHub', href: contactInfo.github, icon: githubIcon },
    { label: 'LeetCode', href: contactInfo.leetcode, icon: leetcodeIcon },
    { label: 'HackerRank', href: 'https://www.hackerrank.com/Jay2704', icon: hackerrankIcon },
    { label: 'Kaggle', href: 'https://www.kaggle.com/jay2704', icon: kaggleIcon },
    { label: 'LinkedIn', href: contactInfo.linkedIn, icon: linkedinIcon },
  ]

  return (
    <>
      <SectionHeader
        variant="compact"
        title="About"
        subtitle="Background, values, and how I approach engineering and AI systems."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <SectionHeader title="About Me" />
            <div className="space-y-6 text-[var(--color-text-muted)]">
              {backgroundParagraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Coding Profiles
              </h3>
              <div className="mt-4 flex flex-wrap items-center gap-4 md:gap-6">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-2 text-sm text-[var(--color-text-muted)] no-underline transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-text)] hover:shadow-[0_0_20px_var(--color-accent-glow)]"
                  >
                    <img
                      src={profile.icon}
                      alt={`${profile.label} icon`}
                      className="h-6 w-6 transition-transform duration-200 group-hover:scale-110"
                    />
                    <span>{profile.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                <GraduationCap size={18} className="text-[var(--color-cyan)]" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 transition-colors hover:border-[var(--color-accent)]/30"
                  >
                    {edu.logo && (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2">
                        <img
                          src={edu.logo}
                          alt={`${edu.school} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-[var(--color-text)]">{edu.degree}</p>
                      <p className="mt-1 text-sm text-[var(--color-accent)]">{edu.school}</p>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-[var(--color-text-muted)]">
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Approach
              </h3>
              <p className="mt-3 text-[var(--color-text)]">{approachText}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
