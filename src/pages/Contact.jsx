import { motion } from 'framer-motion'
import { Mail, Copy, Check, MapPin, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import { contactInfo, socialLinks, codingProfiles } from '../data/contact'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent('Portfolio Inquiry')}&body=${encodeURIComponent('Hello Jay,\n\nI found your portfolio and would like to connect.\n\n')}`

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <SectionHeader
        variant="compact"
        title="Contact"
        subtitle="Get in touch for collaboration or opportunities."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center md:p-12"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10">
              <Mail size={28} className="text-[var(--color-cyan)]" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text)]">
              Let's Connect
            </h3>
            <p className="mx-auto mt-3 max-w-md text-[var(--color-text-muted)]">
              I'm open to collaboration, full-time roles, and interesting problems. 
              Feel free to reach out via email.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={mailtoLink}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-cyan)]/50 px-6 py-3.5 text-sm font-semibold text-[var(--color-text)] no-underline transition-all hover:border-[var(--color-cyan)] hover:bg-[var(--color-cyan)]/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(59,130,246,0.08))',
                }}
              >
                <Mail size={18} className="transition-transform group-hover:scale-110" />
                Email Me
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-3.5 text-sm font-medium text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)]/50 hover:text-[var(--color-text)] sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            <p className="mt-6 text-sm text-[var(--color-text-muted)]">
              or email me directly at{' '}
              <a
                href={mailtoLink}
                className="font-medium text-[var(--color-cyan)] no-underline hover:underline"
              >
                {contactInfo.email}
              </a>
            </p>
          </motion.div>

          {/* Coding Profiles Section */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-12"
          >
            <h4 className="mb-8 text-center text-lg font-semibold text-[var(--color-text)]">
              Coding Profiles
            </h4>
            <div className="grid gap-6 sm:grid-cols-3">
              {codingProfiles.map(({ label, href, logo, username }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center transition-all hover:border-[var(--color-cyan)]/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                    style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.2), transparent)' }}
                    aria-hidden
                  />
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 transition-transform group-hover:scale-105 md:h-28 md:w-28">
                    <img src={logo} alt={label} className="h-full w-full object-contain" />
                  </div>
                  <h5 className="mt-5 text-lg font-semibold text-[var(--color-text)]">{label}</h5>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">@{username}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)] transition-colors group-hover:text-[var(--color-accent)]">
                    View Profile <ExternalLink size={14} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h4 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Connect with me
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map(({ label, href, logo }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2 transition-transform group-hover:scale-110">
                    <img src={logo} alt={label} className="h-full w-full object-contain" />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 flex justify-center"
          >
            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3">
              <MapPin size={18} className="text-[var(--color-accent)]" />
              <span className="text-sm text-[var(--color-text-muted)]">{contactInfo.location}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
