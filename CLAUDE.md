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
- Two button variants: `LandingButton` (outline style) and `ActionButton` (filled style)
- Styles defined as string constants at top of file
- TypeScript interfaces for props

**Social Buttons** (`facebook-button.tsx`, `instagram-button.tsx`)
- SVG-based icon buttons linking to social media

### Styling Approach

The project combines three styling methods:
1. **Tailwind CSS** - Utility classes for layout and responsive design
2. **Global CSS** - Custom `.heading`, `.green-section`, `.grey-section` classes in `globals.css`
3. **Styled Components** - Available in dependencies but not widely used

Custom color palette:
- Green section background: `#032001`
- Grey section background: `#d5d5d6`
- Heading font: Ayuthaya

### TypeScript Configuration

- Path alias: `@/*` maps to project root
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler (Next.js specific)

## Important Notes

### Contact Form API Endpoint
The contact form posts to `/api/contact` but this API route does not exist yet. When implementing:
- Create `app/api/contact/route.ts`
- Handle POST requests with form data
- Validate reCAPTCHA token server-side
- Process honeypot field for spam detection

### Navigation Routes
Several routes referenced in Navigation component don't exist yet:
- `/contact`
- `/the-stick` (blog)
- `/indigenous`
- `/rights`
- `/zines`

These will need corresponding `app/[route]/page.tsx` files.

### Assets Structure
- `/public/logo/` - TWIG logos (transparent white PNG)
- `/public/photo/` - Photography assets
- `/public/graphic/` - Graphics and prints

### Client vs Server Components
- Most components are client components (`"use client"`) due to interactivity
- Navigation, contact form, and buttons all use client-side features
- Consider server components for static content pages when creating new routes
