# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start development server with hot reload
- `npm run build` - TypeScript compilation + Vite production build
- `npm run preview` - Preview production build locally

**Code Quality:**
- `npm run lint` - ESLint check with TypeScript support
- `npm run typecheck` - TypeScript type checking without emission

**Dependencies:**
- `npm install` - Install all dependencies

## Architecture

This is a React 18 + TypeScript + Vite single-page application for the TPC (Travel Portal Company) main website.

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion + GSAP
- **Icons**: Phosphor React

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Main landing section
│   ├── FeaturesSection.tsx
│   ├── AboutSection.tsx
│   ├── CTASection.tsx  # Call-to-action section
│   └── Footer.tsx
├── pages/              # Empty - single page app
├── assets/             # Static assets
├── App.tsx            # Main app component
├── main.tsx           # React entry point
└── index.css          # Global styles + Tailwind

config files:
├── tailwind.config.js  # Custom theme with brand colors
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript config with strict mode
└── .eslintrc.cjs      # ESLint with React + TypeScript rules
```

### Component Architecture
- **Single Page Layout**: App.tsx renders all sections sequentially
- **Section-based Design**: Each major section is a separate component
- **Animation-heavy**: Uses Framer Motion for page animations and GSAP for advanced effects
- **Mobile-first**: TailwindCSS responsive design

### Brand Theme
Custom TailwindCSS theme with brand colors:
- Primary: `#14140F` (dark)
- Accent Green: `#BEFF50` 
- Accent Bright: `#50FF7D`
- Neutral Beige: `#F5F5EB`
- Neutral Gray: `#D2D2C8`

Custom font family: Beatrice (headings/body), Inter (UI elements)

### Development Notes
- TypeScript strict mode enabled with unused parameter warnings
- ESLint configured for React + TypeScript with auto-refresh rules
- No React.jsx import needed (new JSX transform)
- Vite handles fast refresh automatically