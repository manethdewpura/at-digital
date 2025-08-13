# AT Digital — React + Vite + Tailwind

Live demo: https://at-digital-maneth.netlify.app

Simple, responsive landing page built with React, Vite, and Tailwind CSS. It includes a hero section, two feature sections, an FAQ accordion, a sticky top navigation with a mobile hamburger menu, and a footer.

## Tech stack

- React 19 + React DOM
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`) with custom theme tokens in `src/index.css`
- React Router DOM 7
- React Icons

## Features

- Responsive layout with sticky top navigation and mobile slide-in menu
- Hero with CTA and gradient card
- “Web & Mobile App Development” and “Digital Strategy Consulting” sections
- Accessible FAQ accordion with smooth expand/collapse
- Footer with technologies and services lists

## Getting started

Prerequisites: Node.js 18+ and npm.

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build and preview production output:

```bash
npm run build
npm run preview
```

Run lint:

```bash
npm run lint
```

## Project structure

```
public/            # Static assets (images, logos)
src/
	components/      # Button, FAQCard, Footer, HamburgerMenu, TopNavigation
	pages/           # Home (landing page)
	App.jsx          # Routes
	main.jsx         # App bootstrap + Router
	index.css        # Tailwind import + theme tokens
vite.config.js     # Vite + React + Tailwind plugin
```

## Styling

Tailwind CSS 4 is enabled via `@tailwindcss/vite` in `vite.config.js`. Custom color tokens (e.g., `--color-primary`, `--color-secondary`) are defined inside `@theme` in `src/index.css` and used throughout with Tailwind utility classes.

## Deployment

- Build command: `npm run build`
- Publish directory: `dist`
- Example host: Netlify (live link above)