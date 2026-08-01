# Jay Paun — Portfolio

A minimal React portfolio for a Full-Stack Developer & AI Engineer. Built with Vite, React Router, Tailwind CSS, and Framer Motion.

## Stack

- **React** (Vite)
- **React Router DOM** — multi-page routing
- **Tailwind CSS** — styling (v4, PostCSS)
- **Framer Motion** — animations
- **Lucide React** — icons

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/layout/` — Navbar, Footer, Layout
- `src/components/ui/` — Reusable UI (ProjectCard, SkillBadge, SectionHeader, etc.)
- `src/pages/` — Route pages (Home, About, Experience, Projects, Skills, Education, Contact)
- `src/data/` — projects, skills, experience, publications, hero, education, contact, navigation
- `src/hooks/` — useScrollReveal, useActiveSection
- `src/routes/` — Router setup
- `src/styles/` — Global CSS

## Routes

| Path | Page |
|------|------|
| `/` | Home (hero, coding profiles, publication, featured projects) |
| `/about` | About |
| `/experience` | Work experience (timeline) |
| `/projects` | Projects (with category filter) |
| `/projects/:slug` | Project detail |
| `/skills` | Skills by category |
| `/education` | Education & certifications |
| `/contact` | Contact info + form |

## Customization

- **Profile photo:** Replace `src/assets/jay.jpg` with your own image (same path).
- **Hero & about:** Edit `src/data/hero.js` (name, title, summary, badges, CTAs, stats, strengths).
- **Content:** Edit `src/data/` (projects, skills, experience, publications, education, contact, navigation).
- **Theme:** Colors are in `src/index.css` under `@theme` (Tailwind v4).
- **Resume:** Update `resumeUrl` in `src/data/navigation.js`.
