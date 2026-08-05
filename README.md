# Jay Paun — Portfolio

Personal portfolio for a **Full-Stack Developer & AI Engineer**. Showcases experience, projects, skills, education, and peer-reviewed research.

**Live repo:** [github.com/Jay2704/jay_portfolio](https://github.com/Jay2704/jay_portfolio)

## Highlights

- A.I. Researcher at the Brain–Machine Interface Lab (UMBC)
- Software Engineer experience at HPE and IBM
- Co-authored paper in *Sensors* (MDPI): [EEG classification with CNN–Transformer & Inception](https://www.mdpi.com/1424-8220/26/14/4636)
- Projects across AI/ML, full-stack apps, and developer tools

## Stack

- **React 19** + **Vite 8**
- **React Router DOM** — multi-page routing
- **Tailwind CSS v4** — styling (PostCSS)
- **Framer Motion** — animations
- **Lucide React** — icons
- **Vercel** — SPA rewrites for client-side routing

## Setup

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build
npm run preview  # preview production build
npm run lint     # ESLint
```

## Project structure

```
src/
  components/layout/   # Navbar, Footer, Layout
  components/ui/       # Cards, badges, hero, timeline, etc.
  data/                # Content (edit these to update the site)
  hooks/               # useScrollReveal, useActiveSection
  pages/               # Route pages
  routes/              # Router setup
  styles/              # Global CSS
```

### Content files (`src/data/`)

| File | Purpose |
|------|---------|
| `hero.js` | Name, title, summary, badges, stats, strengths |
| `experience.js` | Work experience timeline |
| `projects.js` | Projects + detail pages |
| `skills.js` | Skill categories + soft skills |
| `publications.js` | Paper publication(s) |
| `education.js` | Degrees + certifications |
| `contact.js` | Contact info + coding profiles |
| `navigation.js` | Nav links + resume URL |

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero, coding profiles, publication, featured projects |
| `/about` | Professional summary + coding profiles |
| `/experience` | Work experience timeline |
| `/projects` | Projects with category filter |
| `/projects/:slug` | Project detail |
| `/skills` | Skills by category |
| `/education` | Education & certifications |
| `/contact` | Contact info + form |

## Customization

- **Profile photo:** `src/assets/jay.jpg`
- **Theme colors:** `src/index.css` (`@theme` / CSS variables)
- **Resume link:** `resumeUrl` in `src/data/navigation.js`
- **All copy:** files under `src/data/`

## Maintenance

- Update portfolio content in `src/data/` before changing page components.
- Run `npm run lint` after content or component changes.
- Run `npm run build` before deploying to confirm the Vite bundle compiles.
- Keep `vercel.json` in place so direct visits to nested routes load the SPA correctly.
