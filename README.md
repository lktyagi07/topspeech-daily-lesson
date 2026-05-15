# TopSpeech Health — Daily Lesson Prototype

A PWA prototype of the **Rollr Academy** daily lesson flow for rhotacism (R-sound) practice. Built as a take-home assignment demonstrating interaction craft, clinical warmth, and speech-therapy-specific UX.

**Live demo:** _(run `scripts/deploy.sh` — see Deploy below)_  
**Repo:** https://github.com/lktyagi07/topspeech-daily-lesson  
**Stack:** React · TypeScript · Vite · Framer Motion · vite-plugin-pwa

---

## Quick start

```bash
npm install
npm run dev
```

Open on your phone or use DevTools mobile emulation (375×812 recommended).

```bash
npm run build
npm run preview
```

---

## Design choices

### Duolingo audit → deliberate divergence

| Keep (from Duolingo) | Change (for speech therapy) |
|----------------------|-----------------------------|
| Segmented progress bar that advances per step | No hearts/lives — mistakes are learning, not punishment |
| Card-by-card focus, one task at a time | Softer incorrect feedback (warm copy, no harsh red shake) |
| Immediate feedback after each attempt | **Reset Breath** overlay after a miss (see innovation) |
| Celebration + streak/XP at lesson end | Copy emphasizes courage & consistency, not “winning” |
| Clear lesson bookends (start → exercises → complete) | **Private practice** reassurance on start screen |

### Visual language

- **Fraunces + DM Sans** — clinical credibility with warmth (not game-cartoon fonts)
- **Teal/sage primary** — trust and calm; **coral accent** — reward moments without casino energy
- Mobile-first, `100dvh`, safe-area insets for notched phones
- Spring-based card transitions (slide + scale) between exercises

### Exercise types (5 cards, 4 types)

1. **Warmup** — privacy + settling-in before speaking
2. **Listen & repeat** — tap speaker, hold-to-record (mocked), check pronunciation
3. **Word select** — which option has a clear R?
4. **Mirror mode** — tongue placement diagram + camera mock viewport
5. **Listen & repeat** — second production exercise

---

## Innovation: Reset Breath

**What:** After an incorrect answer, instead of losing a life or showing punitive UI, a 3-second **guided micro-breath** overlay appears (“Your voice is safe here”) with an animated orb (inhale → hold → release). The user returns to the same card to retry — no progress penalty.

**Why:** Speech practice touches a real vulnerability. Duolingo’s loss-aversion model motivates language learners but can increase shame for adults working on R sounds alone. Reset Breath reframes a miss as regulation + retry, not failure — aligned with how SLPs often coach breathing before articulation drills.

---

## Deploy (Vercel)

```bash
npm run build
npx vercel --prod
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) with build command `npm run build` and output directory `dist`.

---

## PWA install

The app registers a service worker in production builds. On iOS Safari: Share → Add to Home Screen. On Android Chrome: Install app prompt.

---



