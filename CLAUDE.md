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
- `app/layout.tsx` - Root layout with Geist fonts, global Navigation and Footer components
- `app/page.tsx` - Homepage with hero banner, about section, contact form
- `app/components/` - Reusable React components
- `app/globals.css` - Global styles including Tailwind directives and custom classes

### Key Components

**Navigation** (`app/components/Navigation.tsx`)
- Client component with conditional scroll-based styling
- Scroll animation (transparent → dark background) **only on homepage** (`/`)
- All other pages have static black navbar with white text
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
- **Design**: Inline labels via placeholders, white backgrounds on all fields
- Consistent spacing with `mt-4` between field groups
- Clean, modern form styling with focus rings

**Buttons** (`app/components/buttons.tsx`)
- Two button variants: `LinkButton` (outline style) and `ActionButton` (filled style)
- Styles defined as string constants at top of file
- TypeScript interfaces for props
- Used throughout site for CTAs and downloads

**Footer** (`app/components/Footer.tsx`)
- Global footer component included in `app/layout.tsx`
- Appears on all pages across the site
- Contains TWIG logo and contact information
- Inline SVG social media glyphs (Facebook, Instagram) with hover scale effects
- Email link with subtle hover effect
- Black background with white text and icons

**PageHero** (`app/components/PageHero.tsx`)
- Reusable hero section for internal pages
- Props: `title` (string or bilingual object), `subtitle`, `backgroundImage`, `height`
- Supports three heights: "tall", "medium" (default), "short"
- Handles bilingual titles stacked vertically (English above French) when passed as object with `en` and `fr` properties
- Uses fade-in animations
- Gradient fallback background if no image provided

**ContentSection** (`app/components/ContentSection.tsx`)
- Standardizes green/grey/white alternating sections
- Props: `variant` ("green" | "grey" | "white"), `children`
- Encapsulates `.green-section` and `.grey-section` patterns
- Handles padding (`py-12 lg:py-24`) and max-width (`max-w-7xl`) automatically

**PDFCard** (`app/components/PDFCard.tsx`)
- Publication download card with cover image
- Props: `coverImage`, `title`, `titleFr` (optional), `description`, `pdfUrl`, `pdfUrlFr` (optional), `fileSize`, `fileSizeFr` (optional), `maxWidth` (optional, default 500px), `backgroundColor` (optional, default "black")
- Supports bilingual publications with separate French titles and PDFs
- Natural aspect ratio display with `object-contain` to prevent cropping
- Configurable background color fills space around images
- Title and "PDF" / "PDF (FR)" links appear **below the image frame**
- Dark text (`text-gray-900`) for title
- Hover effect with roll-up animation reveals description overlay on cover image
- Cards grow to fill available space up to `maxWidth`
- Dynamic sizing based on volume: single publications display larger, multiple publications in grid
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
- Interface: `Publication` with id, title, titleFr (optional), volume, issue, year, description, coverImage, pdfUrl, pdfUrlFr (optional), fileSize, fileSizeFr (optional), backgroundColor (optional)
- Helper functions: `getPublicationsByVolume()`, `getAllVolumes()`, `getFormattedTitle()`, `getFormattedTitleFr()`
- Programmatic title formatting with issue numbers (e.g., "No. 1: Planters' Rights")
- Supports bilingual publications with separate French titles and PDFs
- Organized by volume: Volume 1 (2021) - 3 publications, Volume 2 (2022) - 2 publications, Volume 3 (2025) - 1 bilingual publication
- 6 publications total across 3 volumes

**`app/data/rightsContent.ts`**
- Contains employment standards data for all provinces
- Interfaces: `ProvinceRights`, `RightsLink`, `EmploymentStandard`
- Bilingual support: intro text in both EN and FR
- Includes government links, NGO resources, and detailed standards
- Helper function: `getProvinceBySlug()`
- Complete content for five provinces: BC, Alberta, Ontario, Saskatchewan, Quebec
- All employment standards verified from official government sources and labour organizations
- Includes current minimum wages (as of 2025), overtime rules, deductions, vacation pay, statutory holidays, and workplace safety information

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
- `/rights/bc` - British Columbia employment standards (full content, updated 2025)
- `/rights/alberta` - Alberta employment standards (full content)
- `/rights/ontario` - Ontario employment standards (full content)
- `/rights/saskatchewan` - Saskatchewan employment standards (full content)
- `/rights/quebec` - Quebec employment standards (full content, entirely in French)
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

### Homepage Hero Header Design
- Full-screen height (`h-screen`) hero banner with background image
- Logo and heading vertically centered (`justify-center`) with slight upward offset (`pb-16`)
- Fade-in animations: logo (`animate-fade-in`), heading (`animate-fade-in-delay`)
- Small bouncing down arrow in bottom-left corner (`bottom-8 left-8`)
- Arrow is minimal size (`w-4 h-4`) and non-intrusive
- Background overlay: `bg-black/10` for subtle darkening

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

### Know Your Rights Implementation
- Comprehensive employment standards information for five Canadian provinces
- Each province page follows consistent template structure:
  - PageHero with province name
  - Back link to rights hub
  - Introduction text (bilingual in data, displayed in appropriate language)
  - Government resources section (grey background, white cards)
  - Non-governmental resources section (green background, white cards)
  - Key employment standards section (grey background, white cards)
  - Contact TWIG call-to-action (green background)
- **Province-specific information:**
  - **British Columbia**: Minimum wage $17.85/hour (June 1, 2025), daily overtime after 8 hours, camp costs up to $25/day, 4% vacation pay, WorkSafeBC contact
  - **Alberta**: Minimum wage $15.00/hour, weekly overtime after 44 hours, lodging/meal deductions specified, no equipment damage deductions
  - **Ontario**: Minimum wage $17.60/hour (October 1, 2025), weekly overtime after 44 hours (not daily), maximum hours require consent, 4-6% vacation pay
  - **Saskatchewan**: Minimum wage $15.35/hour (October 1, 2025, indexed annually), daily/weekly overtime (whichever greater), 3-4 weeks vacation, WorkSafe Saskatchewan
  - **Quebec**: Salaire minimum 16,10 $/heure (1er mai 2025), heures supplémentaires après 40 heures/semaine, 8 jours fériés, 2-3 semaines de vacances, CNESST
- **Quebec page is entirely in French** including all headings, content, and UI elements
- All information verified from official government sources and recognized labour organizations
- Rights hub page (`/rights`) features province selection cards with responsive grid layout
- Data centralized in `app/data/rightsContent.ts` with `getProvinceBySlug()` helper function

### PDF Downloads & Zine Cards
- All PDFs referenced with `/pdfs/` prefix (served from public directory)
- File sizes displayed prominently (some files are 76MB)
- PDFs never auto-load - only downloaded on click
- Cover images displayed with natural aspect ratios using `object-contain` to prevent cropping
- Configurable background color fills space around images (black by default)
- Cards grow to fill available grid space up to configurable maximum width (default 500px)
- Minimum width of 300px ensures readability
- Responsive sizing with Next.js Image component `sizes` attribute
- Title and "PDF" / "PDF (FR)" links positioned below the cover image frame
- Hover effects with roll-up animation reveal descriptions without obscuring covers
- Volume 3 (2025) includes bilingual publications with separate French PDFs
- Zine page displays volumes in descending order (newest to oldest)
- Dynamic grid layouts: single publications centered and large, multiple publications in responsive grids
