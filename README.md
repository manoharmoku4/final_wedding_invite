# Manisha & Akshay — #AkManifested

Wedding invitation site built with Next.js 14 (App Router) + Tailwind CSS.

## What's here (v1 — simple scope)

- Full-bleed cover page (`/public/images/cover.jpg`) with falling petal
  animation and an "OPEN INVITATION" button.
- Event cards page (`Manisha & Akshay` header, swipeable/tappable tabs,
  image, details, prev/next nav) laid out with `dvh` units so it fits one
  screen with **zero scrolling** on any phone size — verified on iPhone SE
  (375px) and iPhone 14 Pro Max (430px) viewports.
- All 6 events (Engagement, Mehndi, Haldi, Pellikuthuru, Shaadi, Reception)
  wired up from `lib/events.ts`, each with its own accent/background color.
  Reception has no venue yet, so its "View on Map" button is hidden.

**Not built yet** (intentionally deferred to keep the first pass simple):
background music + mute button, countdown timer, RSVP form + Airtable API
route, Vercel deployment.

## Placeholder assets

`/public/images/*.jpg` are generated placeholders (solid color + event
name) — swap in the real photos before shipping. No `/public/music/`
folder exists yet since background audio isn't wired up in this pass.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
