# Festive Flair — Event Design & Decor

A modern, pixel-perfect marketing website for **Festive Flair**, a Chicago-based event design and decor studio specializing in weddings, celebrations, and cultural ceremonies.

## Tech Stack

- **Next.js 16** — App Router, React 19, TypeScript strict
- **Tailwind CSS v4** — oklch design tokens, responsive mobile-first
- **shadcn/ui** — Radix primitives
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:3001`.

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # ESLint check
npm run typecheck  # TypeScript check
npm run check      # lint + typecheck + build
```

## Project Structure

```
src/
  app/              # Next.js App Router
  components/       # Page sections and UI components
  lib/content.ts    # All site copy and data
  types/            # TypeScript interfaces
public/
  images/           # Photos and brand assets
  videos/           # Hero background video
brand_assets/       # Raw source photos from client
```

## Sections

- **Hero** — Full-viewport background video with logo, headline, and WhatsApp CTA
- **Who We Are** — About section with two-column image + text layout
- **Services** — Six service cards (decor, florals, lighting, venue, vendor, setup)
- **Expertise** — Stats (5+ years, 50+ events, 100% 5-star reviews) with event photos
- **Why Choose Us** — Four image cards with overlay text
- **Celebrations** — Full grid of event types served
- **Testimonials** — Client reviews carousel
- **Footer** — Contact, links, social

## Contact

WhatsApp: [+1 (773) 786-1127](https://wa.me/17737861127)
