# Submission Notes — TopSpeech Daily Lesson

## Innovation: Reset Breath (Task 03)

After an incorrect answer, users see a **3-second guided micro-breath** (“Your voice is safe here”) with a pulsing orb (inhale → hold → release). There are **no lives lost** and no punitive red UI — only a calm pause before retrying the same card.

**Why:** Duolingo’s loss-aversion works for language games, but speech therapy touches real vulnerability. SLPs often cue breathing before articulation drills; Reset Breath brings that clinical pattern into the product so a miss feels like regulation + retry, not shame.

---

## Duolingo audit → divergence (Task 01)

**Keep:** segmented progress, one card at a time, immediate feedback, end-of-lesson celebration (XP/streak), clear start → lesson → complete arc.

**Change:** no hearts/lives; warm incorrect copy; private-practice framing on start; mirror-mode for articulation; **Reset Breath** instead of streak punishment; completion copy emphasizes showing up over “winning.”

---

## Deploy & submit

```bash
npm run build
npx vercel login && npx vercel --prod
```
