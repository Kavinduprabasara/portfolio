# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** — uses `@import "tailwindcss"` syntax; theme tokens are extended via `@theme inline` in `globals.css`, not a `tailwind.config.js`
- **Framer Motion** for page-transition animations
- **JetBrains Mono** loaded via `next/font/google`, exposed as CSS var `--font-jetbrains-mono`

## Architecture

The site is a single-page app (SPA) with hash-based routing. There are two routes:

- `/` — main portfolio, rendered by `src/components/Portfolio.tsx`
- `/terminal` — interactive ASCII terminal, rendered by `src/app/terminal/page.tsx`

### Main portfolio flow

`page.tsx` → `Portfolio` (client component) → `TerminalWindow` (chrome) + `Nav` + animated section swap via `AnimatePresence`.

`Portfolio.tsx` owns navigation state (`active: SectionId`). Clicking a nav item calls `navigate()`, which updates state and syncs the URL hash via `router.replace`. The six section components live in `src/components/sections/` and are statically instantiated in a `sectionContent` record — only one is shown at a time via Framer Motion's `mode="wait"`.

### Terminal emulator (`/terminal`)

`TerminalEmulator.tsx` maintains a `Line[]` array as display state. Commands are defined in `commands.ts` via `buildCommands()`, which returns a `Record<string, (args) => CommandResult>`. The `kavindu` command converts `/public/kavindu.jpg` to ASCII art using a canvas pixel-sampling approach in `imageToASCII`. The `load` command opens a file picker for user-supplied images.

### Data and types

- `src/data/projects.ts` — array of `Project` objects; the single source of truth for the Projects section and the terminal `projects` command
- `src/types/index.ts` — shared TypeScript interfaces (`Project`)

### Styling conventions

CSS custom properties for the terminal colour palette are defined in `globals.css` (`:root`) and re-exported as Tailwind theme tokens with the `t-` prefix (e.g. `bg-t-bg`, `text-t-green`). Use these tokens in new components rather than raw hex values. Key palette vars: `--terminal-green` (#00ff41), `--terminal-cyan` (#6be4e0), `--terminal-amber` (#ffb86c), `--terminal-bg` (#1e1e1e).

The `.scan-lines` CSS class applies the CRT scanline overlay and `.terminal-glow-wrapper` provides the animated gradient border; apply these at the outermost wrapper level only.
