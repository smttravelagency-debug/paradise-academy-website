# The Paradise Academy — Public Website

A production-quality public website for **The Paradise Academy** (run by Paradise
Foundation, Rasikpur, Murutia, Nadia, West Bengal), built with React, TypeScript,
Tailwind CSS, and Vite.

This is the **first build pass** of the full School Management System brief:
the public-facing website, including the online admission form. The admin
dashboard, backend APIs, and database (students, attendance, exams, fees,
hostel, transport, etc.) are intentionally **not** included yet — see
"Roadmap" below for how this connects to the rest of the system.

## Design

- **Palette**: Academy Blue (`#1D4E89`) and white, as specified, with a deep
  ink navy for text/footer, a sky-blue accent, and a warm marigold accent used
  sparingly for admission CTAs — a nod to the trust's identity without
  overusing color.
- **Type**: Fraunces (display) for headlines, Inter (body), and Noto Sans
  Bengali for the bilingual labels used throughout (the school teaches in
  both languages, so the site reflects that).
- **Signature motif — the "copybook" rule**: a muted red margin line with
  faint ruled horizontal lines, borrowed from the exercise books every
  student actually writes in. It appears in the hero, footer, and as section
  dividers — a concrete, specific visual idea rather than a generic gradient
  hero.
- Glassmorphism cards, scroll-triggered stat counters, and motion that
  respects `prefers-reduced-motion`.

## Pages included

Home, About, Academics, Admissions (with full online application form),
Faculty, Gallery, Notice Board, Hostel, Careers, Contact — matching the
"Public Website Module" section of the brief.

## Getting started

```bash
npm install
npm run dev      # starts the dev server at http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build locally
```

## What's real vs. placeholder right now

- **Real**: full responsive layout, routing, content structure, form
  validation (admission form, careers form, contact form), accessibility
  basics (focus rings, reduced motion, semantic headings).
- **Placeholder, by design, until the backend exists**:
  - Forms currently validate and show a success state in the browser only.
    They do not yet persist data anywhere.
  - Gallery uses labeled placeholder tiles instead of real photos — there
    are no real photographs of the school to use, and stock photos
    pretending to be the school would be misleading. Replace these via the
    planned CMS media manager.
  - "Download Prospectus" and notice "Download" buttons point at files
    (`/prospectus.pdf`, etc.) that don't exist yet — drop the real PDFs into
    `/public` once available.
  - Map embed uses a generic Google Maps query for the address; replace with
    the exact pinned coordinates once available.

## Roadmap (rest of the original brief)

This frontend is structured so the following can be added without a rewrite:

1. **Backend API** (Node.js/Express + PostgreSQL) — admission submissions,
   contact/career form submissions, notices, gallery media, fee structure
   should all move from `src/data/schoolData.ts` into real API calls.
2. **Auth + RBAC** — JWT-based login for Admin/Principal/Teacher/Parent/
   Student, gating a separate `/admin` app or route tree.
3. **Admin dashboard** — student records, attendance, exams/marks, fees,
   hostel, transport, library, reports — as a second, role-gated app that
   consumes the same design tokens (`tailwind.config.ts`) for visual
   consistency.
4. **File storage** — wire the admission form's file inputs to actual
   upload endpoints (S3-compatible or local disk).
5. **CMS** — turn `schoolData.ts` content (notices, news, gallery, faculty)
   into database-backed, admin-editable content.

## Project structure

```
src/
  components/
    layout/      Header, Footer, Layout, PageHero
    ui/          Button, Card, Badge, Form fields, SectionHeading, StatCounter
  data/
    schoolData.ts   Single source of truth for current site content
  lib/
    utils.ts     cn() class merge helper, date formatting
  pages/         One file per route
```
