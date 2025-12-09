# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for the Tree Workers' Industrial Group (T.W.I.G.), a grassroots advocacy organization for workers in the silviculture industry. The site uses the App Router architecture with TypeScript, React 19, Tailwind CSS, and styled-components.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Development server runs at `http://localhost:3000`.

## Architecture

### App Router Structure
The project uses Next.js 15's App Router:
- `app/layout.tsx` - Root layout with Geist fonts, global Navigation component
- `app/page.tsx` - Homepage with hero banner, about section, contact form
- `app/components/` - Reusable React components
- `app/globals.css` - Global styles including Tailwind directives and custom classes

### Key Components

**Navigation** (`app/components/Navigation.tsx`)
- Client component with scroll-based styling (transparent → dark background)
- Mobile hamburger menu with click-outside-to-close behavior
- Fixed positioning with z-index management
- Uses refs for menu/button DOM access
- Navigation items defined in `navItems` array

**Contact Form** (`app/components/contact-form.tsx`)
- Client component using `react-hook-form` for form handling
- Google reCAPTCHA v3 integration via `react-google-recaptcha-v3`
- Honeypot field (`_gotcha`) for spam prevention
- Submits to `/api/contact` endpoint (not yet implemented)
- Shows confirmation message on successful submission

**Buttons** (`app/components/buttons.tsx`)
- Two button variants: `LinkButton` (outline style) and `ActionButton` (filled style)
- Styles defined as string constants at top of file
- TypeScript interfaces for props
- Used throughout site for CTAs and downloads

**Social Buttons** (`facebook-button.tsx`, `instagram-button.tsx`)
- SVG-based icon buttons linking to social media

**PageHero** (`app/components/PageHero.tsx`)
- Reusable hero section for internal pages
- Props: `title` (string or bilingual object), `subtitle`, `backgroundImage`, `height`
- Supports three heights: "tall", "medium" (default), "short"
- Handles bilingual titles with inline display (e.g., "Contact / Contactez-nous")
- Uses fade-in animations
- Gradient fallback background if no image provided

**ContentSection** (`app/components/ContentSection.tsx`)
- Standardizes green/grey/white alternating sections
- Props: `variant` ("green" | "grey" | "white"), `children`
- Encapsulates `.green-section` and `.grey-section` patterns
- Handles padding (`py-12 lg:py-24`) and max-width (`max-w-7xl`) automatically

**PDFCard** (`app/components/PDFCard.tsx`)
- Publication download card with cover image
- Props: `coverImage`, `title`, `description`, `pdfUrl`, `fileSize`
- Hover effect reveals description overlay
- Download button using `LinkButton` component
- Used on Zines and Indigenous pages

**BlogPostCard** (`app/components/BlogPostCard.tsx`)
- Blog post preview card for feed page
- Props: `title`, `date`, `excerpt`, `slug`, `featuredImage`
- Links to individual post route via `/the-stick/[slug]`
- Hover effects on image (scale) and title (color change)
- Automatic date formatting

### Styling Approach

The project combines three styling methods:
1. **Tailwind CSS v4** - Utility classes for layout and responsive design
2. **Global CSS** - Custom `.heading`, `.green-section`, `.grey-section` classes in `globals.css`
3. **Styled Components** - Available in dependencies but not widely used

Custom color palette:
- Green section background: `#032001`
- Grey section background: `#d5d5d6`
- Heading font: Ayuthaya

#### Tailwind CSS v4 Configuration

**Important:** This project uses Tailwind CSS v4 with CSS-based configuration:

- **No JavaScript config file** - The `tailwind.config.ts` file has been removed
- **CSS-based configuration** - All Tailwind configuration is in `app/globals.css` using the `@theme` directive
- **PostCSS plugin** - Uses `@tailwindcss/postcss` instead of `tailwindcss` in `postcss.config.mjs`
- **Import syntax** - Uses `@import "tailwindcss"` instead of `@tailwind` directives

**Custom animations** defined in `@theme` block:
- `animate-fade-in` - Logo fade-in animation (1s ease-in)
- `animate-fade-in-delay` - Heading fade-in with delay (1.3s ease-in)

**Opacity utilities** use the `/0` syntax:
- ✅ `bg-white/0` (correct)
- ❌ `bg-opacity-0` (deprecated, don't use)

**CSS variable colors** registered in `@theme`:
- `--color-background` and `--color-foreground` mapped to CSS variables

### TypeScript Configuration

- Path alias: `@/*` maps to project root
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler (Next.js specific)

## Data Files Structure

The site uses TypeScript data files for centralized content management:

**`app/data/blogPosts.ts`**
- Contains all blog post content for The Stick
- Interface: `BlogPost` with slug, title, date, author, excerpt, content, featuredImage
- Content stored as HTML strings for rich formatting
- 4 posts currently: Storming the Kingdom, TWIG history, Treehab, Coast Range petition
- Used by both feed page and dynamic `[slug]` routes

**`app/data/publications.ts`**
- Contains all Fireweed publication metadata
- Interface: `Publication` with id, title, volume, issue, year, description, coverImage, pdfUrl, fileSize
- Helper functions: `getPublicationsByVolume()`, `getAllVolumes()`
- Organized by volume (1: 2021, 2: 2022)
- 5 publications total

**`app/data/rightsContent.ts`**
- Contains employment standards data for all provinces
- Interfaces: `ProvinceRights`, `RightsLink`, `EmploymentStandard`
- Bilingual support: intro text in both EN and FR
- Includes government links, NGO resources, and detailed standards
- Helper function: `getProvinceBySlug()`
- BC and Alberta have full content; Quebec is placeholder

## Important Notes

### Contact Form API Endpoint
The contact form posts to `/api/contact` but this API route does not exist yet. When implementing:
- Create `app/api/contact/route.ts`
- Handle POST requests with form data
- Validate reCAPTCHA token server-side
- Process honeypot field for spam detection

### Navigation Routes
All navigation routes are now implemented:
- `/` - Homepage (existing)
- `/contact` - Contact page with bilingual contact info and social media links
- `/the-stick` - Blog feed page with 4 blog posts
- `/the-stick/[slug]` - Dynamic routes for individual blog posts (SSG)
- `/indigenous` - Indigenous Solidarity page with PDF resource
- `/rights` - Know Your Rights hub page with province selector
- `/rights/bc` - British Columbia employment standards (full content)
- `/rights/alberta` - Alberta employment standards (full content)
- `/rights/quebec` - Quebec placeholder (bilingual, awaiting contributions)
- `/zines` - Fireweed publications page with all PDFs and covers

### Assets Structure
- `/public/logo/` - TWIG logos (transparent white PNG)
- `/public/photo/` - Photography assets (misty mountains, etc.)
- `/public/graphic/` - Graphics and prints
- `/public/pdfs/` - Downloadable publications (7 PDFs: Fireweed series, Indigenous Solidarity, guides)
- `/public/covers/` - Publication cover images for PDFCard components
- `/public/blog/` - Blog post featured images

**Note**: Original source assets remain in `/art-assets/` directory (not in public)

### Client vs Server Components
- Navigation and contact form are client components (`"use client"`) due to interactivity
- Most page components are server components (no "use client" directive)
- Reusable components (PageHero, ContentSection, PDFCard, BlogPostCard) are server components
- Individual blog post pages (`[slug]/page.tsx`) are async server components using Next.js 15's Promise-based params
- Button components don't require "use client" as they're simple link/button elements

### Bilingual Content Pattern
The site uses **inline bilingual content** (not a language toggle):
- Both English and French text appear in the same section
- Pattern: English content → separator `* * * En français * * *` → French content
- PageHero component accepts bilingual titles: `{ en: "Contact", fr: "Contactez-nous" }`
- Data files (rightsContent.ts) use objects with `en` and `fr` properties
- Maintains consistency with existing homepage approach

### Blog Implementation
- **Static generation (SSG)**: Blog posts use `generateStaticParams()` for build-time generation
- **Dynamic routing**: `/the-stick/[slug]` pattern with Next.js 15 async params
- **Content storage**: HTML strings in TypeScript data file (simple, no markdown processing needed)
- **Date formatting**: Uses native `toLocaleDateString()` for consistent formatting
- **Prose styling**: Uses Tailwind prose classes with custom font family for headings

### PDF Downloads
- All PDFs referenced with `/pdfs/` prefix (served from public directory)
- File sizes displayed prominently (some files are 76MB)
- PDFs never auto-load - only downloaded on click
- Cover images use aspect ratio 3:4 for consistency
- Hover effects reveal descriptions without obscuring covers
