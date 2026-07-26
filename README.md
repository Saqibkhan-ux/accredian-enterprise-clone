# Accredian Enterprise — Partial Clone

A partial clone of [enterprise.accredian.com](https://enterprise.accredian.com/),
built with Next.js (App Router) + TypeScript + Tailwind CSS, as a portfolio piece.

## Stack

- **Next.js 14** (App Router, Server + Client Components)
- **TypeScript**, strict mode
- **Tailwind CSS** with a custom design-token theme (see `tailwind.config.ts`)
- **`next/font/google`** for self-hosted, zero-layout-shift font loading
- A mock API route (`app/api/demo-request/route.ts`) backing the demo-request form

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx          # fonts, metadata
  page.tsx             # assembles all sections
  globals.css          # base styles, design tokens, motion/focus rules
  api/demo-request/    # mock lead-capture endpoint
components/
  Navbar.tsx            Hero.tsx           TrustBar.tsx
  Process.tsx           Features.tsx       Stats.tsx
  Testimonials.tsx       DemoForm.tsx       Footer.tsx
  Ledger.tsx            # signature "transcript/dashboard" card, reused in Hero
  Reveal.tsx            # scroll-triggered fade-up wrapper
lib/
  data.ts               # all copy/content, typed and centralized
```

## Design notes

The reference site sells enterprise L&D built on two ideas: academic
credibility (IIT/IIM co-designed curriculum) and operational proof (live ROI
dashboards). The design leans into both at once:

- **Palette** — ink navy (`#0B1220`), warm paper background (`#F7F6F2`),
  a brass/gold accent (`#C89B3C`) standing in for a credential seal, and a
  muted teal (`#2F6F5E`) used sparingly for data emphasis.
- **Type** — Newsreader (serif, for headlines — academic gravitas without
  going full "diploma"), Inter (body), IBM Plex Mono (stats, eyebrows,
  labels — gives the numbers a dashboard/data feel).
- **Signature element** — the `Ledger` component: a card styled like a
  hybrid academic transcript and live analytics readout (hairline rules,
  tabular mono figures, a gold corner "seal"). It appears in the hero and
  is echoed by the dark stats section, tying credentialing + analytics into
  one recurring visual motif instead of a generic stat-card grid.
- **Numbered steps** are used only in the Process section, because that
  content is a genuine sequence (assess → design → launch → measure).

## Wiring up the form for real

`app/api/demo-request/route.ts` currently validates input and echoes a
confirmation. To go live, replace the body of the `POST` handler with a call
to your CRM/webhook (HubSpot, Salesforce, a Slack webhook, etc.) — the
client-side form in `components/DemoForm.tsx` doesn't need to change.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required for the current mock API.
4. Deploy — Vercel builds with `npm run build` and serves it automatically.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```
