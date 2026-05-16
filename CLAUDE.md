# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build + type-check
npm run lint     # ESLint via next lint
```

No test suite. Type errors surface at build time.

## Stack

Next.js 15 App Router · React 19 · TypeScript · Tailwind CSS 3.4 · Framer Motion · next-themes

## Architecture

### Layout shell (`app/layout.tsx`)

```
ThemeProvider (next-themes)
  └── Navbar (fixed, z-50)
  └── PageTransition (AnimatePresence, keyed by pathname)
       └── <main>{children}</main>
  └── Footer
```

All routes live under `app/`. Sections are composed in page files from `components/sections/`.

### Theme system

Dark/light is driven by `next-themes` (`attribute="class"`, `defaultTheme="system"`). The `<html>` tag gets `suppressHydrationWarning`.

CSS variables are in **HSL channel format** in `app/globals.css`:
```css
:root  { --background: 0 0% 100%; }
.dark  { --background: 0 0% 4%;   }
```

Tailwind colors reference them as `hsl(var(--...))`. **Do not use `hsl(var(--...) / <alpha-value>)` in `tailwind.config.ts`** — that form silently breaks every CSS class, including layout utilities. Use Tailwind's built-in slash syntax in markup instead (`bg-foreground/40`), which works because Tailwind emits the correct `rgb()` wrapper.

### SSR safety rule

Any component that:
- reads `window`/`document`
- does trig-based layout (e.g. `RadialOrbitalTimeline` — float precision differs SSR vs client)
- depends on resolved theme (`MeshGradientBackground`, `ThemeToggle`)

must be either wrapped in `dynamic(() => import(...), { ssr: false })` or guarded with a `mounted` state that returns `null` on first render.

### Fonts

Three CSS variables injected in layout:
- `--font-syne` → `font-display` / `font-body` (Tailwind aliases)
- `--font-dm-serif` → `font-serif`
- `--font-jetbrains` → `font-mono`

### Navbar behavior

The "N" logo fades in via Framer Motion only when the `#hero-title` element (the `<span>` wrapping "Novx" in `HeroSection`) is no longer intersecting the viewport. This uses `IntersectionObserver` with `threshold: 0.1`. On pages without a hero, `heroVisible` defaults to `false` (N always visible).

Navbar background fades in scroll-driven over the first 150px using inline styles (`hsl(var(--background) / opacity)` + `backdrop-filter`). No `glass-nav` class is applied dynamically — the class exists in globals.css for reference but the navbar now uses inline styles.

### Key CSS utilities (globals.css)

- `.text-gradient` — linear gradient text using `--gradient-from`/`--gradient-to` vars
- `.glass-nav` — reference class; not used on the live navbar
- `.noise-overlay` — SVG fractalNoise at 1.5% opacity; works on both themes
- `.card-hover` — `translateY(-4px)` + shadow on hover
- `.mesh-blob-*` — CSS animated blobs (still in CSS but hero uses `@paper-design/shaders-react` MeshGradient instead)

### External animated libs

- `@paper-design/shaders-react` — `MeshGradient` component. Accepts `colors: string[]` and `speed: number`. No `backgroundColor` prop — set background via a wrapper `div`.
- `@splinetool/react-spline` — loaded `ssr: false` via `components/ui/splite.tsx`
- `@react-three/fiber` + `three` — used in `components/ui/background-paper-shaders.tsx`
