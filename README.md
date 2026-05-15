# TopSpeech daily lesson (prototype)

Take-home prototype for TopSpeech Health — a short **Rollr Academy** lesson for R-sound practice. Mobile-first PWA, mocked audio/camera, static lesson content.

**Live:** https://topspeech-daily-lesson.vercel.app  
**Repo:** https://github.com/lktyagi07/topspeech-daily-lesson  
**Stack:** React, TypeScript, Vite, Framer Motion, vite-plugin-pwa

Duolingo audit notes (task 01): [TASK01-DUOLINGO-AUDIT.md](./TASK01-DUOLINGO-AUDIT.md)

---

## Run locally

```bash
npm install
npm run dev
```

Use phone or DevTools ~375×812. Production build:

```bash
npm run build
npm run preview
```

---

## What's in the lesson

5 cards, 4 exercise types:

1. Warmup — settle in, privacy reminder
2. Listen & repeat — speaker + hold-to-record (mocked)
3. Word select — pick the word with a clear R
4. Mirror mode — placement diagram + fake camera view
5. Listen & repeat again

Flow: start screen → cards with segmented progress → complete screen (XP/streak style, but copy is more “you showed up” than “you won”).

---

## Duolingo vs this build

Borrowed from Duolingo: chunked progress bar, one task per card, instant feedback, celebratory end screen.

Did differently on purpose:

- No hearts/lives — wrong answers don’t cost anything
- Warmer miss state (no harsh red game-over vibe)
- **Reset Breath** — 3s breathing overlay after a miss, then retry same card (see below)
- Start screen calls out private / on-device practice
- Mirror + placement content, not just tap games

Full write-up in the audit doc linked above.

---

## Reset Breath

Main product idea for the assignment. Miss an exercise → short overlay (“Your voice is safe here”) with a simple inhale / hold / exhale animation → back to the same card. No streak penalty, no lives.

Duolingo’s loss stuff works for vocab; for speech therapy a bad R often comes with anxiety, so I wanted a pause that feels like regulation before retry, not punishment.

---

## Deploy

Already on Vercel from the GitHub repo. To redeploy from CLI:

```bash
npm run build
npx vercel --prod
```

Or import the repo at [vercel.com](https://vercel.com) — build `npm run build`, output `dist`.

---

## PWA

Service worker ships in production builds. iOS: Safari → Share → Add to Home Screen. Android: install prompt when offered.

---

## Caveats

Prototype only — pronunciation check is `Math.random()`, no real backend or audio analysis. Fine for demonstrating UX; wouldn’t ship as-is.
