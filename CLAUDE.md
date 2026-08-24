# CLAUDE.md

Guidance for Claude Code (and other AI coding agents) working in this repository.

## Project Overview

A personal portfolio site for **Abhishek Sharma** — a frontend engineer (Angular / TypeScript) positioned as a "high-performance web apps" specialist. The site is a single-page React app that showcases hero/intro, about, projects, experience, contact form, navbar, and footer. Visual style is dark-themed with a teal/cyan accent (`--color-primary: #20b2a6`), glass-morphism cards, soft glows, and reveal animations.

This is a **content + presentation** project — not a backend, library, or framework. Most changes are copy edits, new sections, styling tweaks, or asset swaps.

## Tech Stack

- **Build tool:** Vite 8 (`@vitejs/plugin-react`, `@tailwindcss/vite`)
- **Framework:** React 19 (functional components, hooks — no class components, no router, no state library)
- **Styling:** Tailwind CSS 4 (imported via `@import "tailwindcss"`; config-as-CSS using `@theme` in `src/index.css`)
- **Component libs:** MUI Material / MUI Icons (icons only) + `lucide-react` (icons + a few utilities)
- **Email:** `@emailjs/browser` for the contact form
- **Lint:** ESLint 10 with `@eslint/js`, `react-hooks`, `react-refresh`
- **Module alias:** `@` → `src/` (configured in `vite.config.js`)

## Commands

| Command        | What it does                |
| -------------- | --------------------------- |
| `npm run dev`  | Vite dev server with HMR    |
| `npm run build`| Production build to `dist/` |
| `npm run lint` | ESLint over the project     |
| `npm run preview` | Serve the production build |

Node modules + `dist/` are gitignored. No tests are configured.

## Environment

`.env` holds **public** EmailJS credentials. They are referenced via `import.meta.env.VITE_*` inside `Contact.jsx`. Never commit additional secrets; if a new env var is needed, document it here and prefix with `VITE_`.

```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

## Repository Layout

```
index.html              ← Vite entry; <title>portfolio</title>; loads /src/main.jsx
vite.config.js          ← React + Tailwind plugins, @ → ./src alias
eslint.config.js        ← Flat config, ignores dist/, jsx files
public/                 ← Static assets served at root (hero-bg.jpg, profile photos, /projects/*.png, favicon.svg)
src/
  main.jsx              ← createRoot + <StrictMode>
  App.jsx               ← Layout shell: Navbar, main > sections, Footer
  index.css             ← Tailwind import, @theme tokens, keyframes, .glass/.glow-* component layers
  layout/
    Navbar.jsx          ← Fixed header, mobile drawer (lucide Menu/X), anchor links
    Footer.jsx          ← Logo, section links, social icons (MUI)
  sections/
    Hero.jsx            ← Headline, profile photo, skills marquee, Download CV CTA (AnimatedBorderButton)
    About.jsx           ← Bio + 4 highlight cards (lucide icons)
    Projects.jsx        ← Grid of project cards (image, tags, hover overlay). Currently NOT rendered in App.jsx
    Experience.jsx      ← Alternating timeline with current-role glow dot
    Contact.jsx         ← EmailJS form + contact info card + availability card
  components/
    Button.jsx          ← Primary rounded button (default + size variants)
    AnimatedBorderButton.jsx ← Ghost button with animated SVG stroke border on hover
  assets/               ← Bundled images (hero.png, react.svg, vite.svg)
dist/                   ← Build output (gitignored)
```

### Key conventions in use

- **Two button styles:** `Button` (solid primary) and `AnimatedBorderButton` (ghost with animated border). The border button is used for "Download CV" and "View All Projects" CTAs.
- **Section pattern:** Each section is a top-level `<section id="..." className="py-32 relative overflow-hidden">` containing decorative blur divs (`.bg-primary/5`, `.bg-highlight/5`) behind `relative z-10` content. Follow this pattern when adding new sections.
- **Anchor nav:** `Navbar` and `Footer` link to `#about`, `#projects`, `#experience`, `#contact`. New sections should pick an id and add it to both `navLinks` (in `Navbar.jsx`) and `footerLinks` (in `Footer.jsx`).
- **Reveal animations:** Elements opt in with `animate-fade-in` plus optional `.animation-delay-100`…`800` classes (defined in `src/index.css`). Stagger with `style={{ animationDelay: ...ms }}` when looping over items.
- **Glass cards:** use `className="glass rounded-2xl/3xl p-..."`. Add `glow-border` for a subtle teal outline.
- **Tailwind 4 tokens:** colors are declared in `src/index.css` under `@theme { --color-primary: ... }`. Reference them in classes like `text-primary`, `bg-primary/10`, `border-primary/30`. Do not add a `tailwind.config.js` — Tailwind 4 reads from CSS.

## Common Tasks

### Add a new section

1. Create `src/sections/MySection.jsx` matching the section pattern above.
2. Import and add it to `src/App.jsx` between existing sections.
3. Add a nav entry in `Navbar.jsx` (`navLinks`) and `Footer.jsx` (`footerLinks`) if it should be navigable.

### Update copy / bio / experience

All profile copy lives as JS arrays/objects at the top of each section file (`Hero.jsx`, `About.jsx`, `Experience.jsx`, `Contact.jsx`, `Footer.jsx`, `Navbar.jsx` `Footer.jsx`). Edit in place — no CMS, no data files.

### Swap a project

Projects are a plain array at the top of `Projects.jsx` with `{ title, description, image, tags, link, github }`. Images go in `public/projects/`. Note: `Projects` is currently **commented out** in `App.jsx` — uncomment to show.

### Change the accent color

Primary color is centralized: change `--color-primary` in `src/index.css` `@theme`. Hero's floating dots use the literal hex `#20B2A6` / `#26c4b8` inline — update those if you rebrand.

### Update contact info / resume link

- `Contact.jsx` → `contactInfo` array
- `Hero.jsx` → `resumeLink` constant
- `Footer.jsx` → `socialLinks` and `footerLinks` arrays

## Known Landmines

- **`AnimatedBorderButton` has nested interactive elements:** it wraps an `<a>` inside a `<button>`, which is invalid HTML and can cause hydration/a11y warnings. Use it only when the visible content is one link (e.g., Download CV). It does not accept `href` as a prop — the current `<a>` sits inside.
- **`<input id="email">` is missing:** in `Contact.jsx`, the `<label htmlFor="email">` exists but the `<input>` has no `id="email"` — the `id="name"` input is correct, but the others (email, message) lack matching ids. Easy fix when touching this file.
- **MUI + Tailwind together:** MUI components are used *only as icons* via `@mui/icons-material/*`. Don't import full MUI components for layout — Tailwind classes are the convention here. If you do need a MUI styled component, remember it uses Emotion, not Tailwind.
- **Tailwind 4 quirks:** no `tailwind.config.js`; arbitrary values like `text-[#fff]` work, but theme tokens live in CSS. Adding new colors means editing `@theme`, not JS.
- **No tests, no CI:** don't waste time setting up test infrastructure unless asked.
- **`.env` is committed** with public EmailJS keys. If you rotate, update the local `.env` and any production deployment config together.
- **`Projects` section exists but is disabled** in `App.jsx` — the navbar still links to `#projects`. Either uncomment it in `App.jsx` or remove the link from `navLinks`/`footerLinks` to keep navigation honest.

## Things Explicitly NOT In Scope

- TypeScript migration (project is JSX)
- React Router (single-page, anchor nav only)
- State management libraries
- Backend, API routes, or database
- Tests / CI pipeline
- i18n (the *bio* mentions i18n experience — that's Abhishek's work history, not the site)
