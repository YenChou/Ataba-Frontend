# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.3 frontend application called "ataba-frontend" using React 19, TypeScript, and Tailwind CSS 4. The project follows the App Router architecture and includes Turbopack for faster development builds.

**IMPORTANT**: This project is for rebuilding the Ataba company website. All development must reference the `TODO.md` file for project roadmap, page structure, and development priorities. The website structure and requirements are strictly defined in TODO.md and should not be modified based on legacy code or other sources.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build` (uses Turbopack)
- **Start production server**: `npm start`
- **Lint code**: `npm run lint` (ESLint with Next.js config)

## Architecture

### Directory Structure
- `app/` - Next.js App Router directory containing pages and layouts
  - `layout.tsx` - Root layout with Geist fonts and global styles
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind CSS and CSS custom properties
- `public/` - Static assets (SVG icons for the default Next.js template)

### Styling System
- **CSS Framework**: Tailwind CSS 4 with `@theme inline` configuration
- **CSS Custom Properties**: Uses CSS variables for theming (`--background`, `--foreground`)
- **Dark Mode**: Automatic dark mode support via `prefers-color-scheme`
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`

### TypeScript Configuration
- **Target**: ES2017
- **Module Resolution**: bundler mode
- **Path Mapping**: `@/*` maps to root directory
- **Strict Mode**: Enabled with strict TypeScript settings

### Linting
- ESLint configuration using Next.js core web vitals and TypeScript rules
- Ignores build output directories (`.next/`, `out/`, `build/`)

## Project Requirements

### Development Workflow
1. **Always check TODO.md first** before starting any development work
2. **Follow the exact page structure** defined in TODO.md - do not deviate from specified pages and routes
3. **Reference design guidelines** from https://bestloffice.com/ for professional enterprise styling
4. **Update TODO.md** when completing tasks or discovering new requirements

### Page Structure (Strictly Defined)
```
/ (Home)
├── About Ataba
│   ├── Ataba Factory
│   └── OEM/ODM service
├── Product
│   ├── New Products
│   ├── Handy Calculator
│   ├── Desktop Calculator
│   └── Scientific Calculator
├── News
└── Contact Us
```

### Design Requirements
- **Professional enterprise design** following bestloffice.com reference
- **Responsive design (RWD)** for all devices
- **Clean, corporate aesthetic** with professional color scheme
- **SEO optimization** for business visibility

### Development Priorities
1. Shared components (Header, Footer, Navigation)
2. Individual pages following TODO.md order
3. RWD implementation
4. SEO optimization
5. Testing and validation