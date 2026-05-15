# Task 01 — Duolingo Lesson UX Audit & Divergence

*30–45 min observation notes, applied to TopSpeech’s speech-therapy context.*

---

## What Duolingo does well (key UX decisions)

1. **Segmented progress bar** — The lesson bar fills in discrete chunks (one segment per exercise), not a vague percentage. You always know how much is left and each step feels like a small win.

2. **One card, one job** — Each screen has a single focus (listen, tap, speak, match). Transitions slide the next card in so momentum never breaks.

3. **Immediate feedback loop** — Correct: green banner + quick advance. Wrong: clear “not quite” state, often with the right answer shown, then retry or continue. Feedback is fast and tied to the action you just took.

4. **Loss aversion for retention** — Hearts/lives, streaks, XP, and end-of-lesson celebration create urgency to finish and return tomorrow. The lesson end screen is a reward moment (stats, streak flame, “continue”).

5. **Low friction start** — You’re in the lesson quickly; the path from open app → first exercise is short.

---

## What I would keep for TopSpeech (speech therapy)

- **Segmented progress** — Still satisfying to advance; maps well to “4–6 exercises per day” clinical structure.
- **Card-by-card flow** — Reduces cognitive load when someone is already self-conscious about speaking.
- **Immediate feedback** — Users need to know if placement/production was on track (even when mocked in a prototype).
- **Lesson bookends** — Clear start (what today is about), middle (exercises), end (celebration + reason to return).
- **End-screen rewards** — Streak/XP-style moments support habit without requiring perfection.

---

## What I would change (and why)

1. **Remove hearts / life loss** — In speech therapy, a “wrong” sound is often muscle memory and anxiety, not laziness. Losing lives can feel like punishment for a vulnerability. TopSpeech should allow unlimited retries on the same card.

2. **Soften incorrect feedback** — Duolingo leans red, buzzer, “wrong.” For adults fixing R-sounds alone, copy and color should be warm and normalizing (“Almost — let’s try again”) rather than game-over energy.

3. **Add regulation before retry** — Duolingo moves straight to the next attempt or deducts a heart. Speech work benefits from a brief reset (breathing, grounding). This became **Reset Breath** in the prototype.

4. **Lead with privacy and safety** — Language learners don’t worry who hears them fail. Speech clients often do. The start screen should explicitly say practice is private, on-device, and judgment-free.

5. **Include articulation-specific modalities** — Mirror mode, placement diagrams, and phonetic cues matter more than generic tap-the-picture exercises. Duolingo’s patterns are a shell; the card content must be clinical.

---

## Summary (3–5 bullets for submission)

- **Keep:** segmented progress, single-task cards, instant feedback, and a celebratory lesson-complete screen with streak/XP-style motivation.
- **Change:** drop life/hearts mechanics; use gentle incorrect states; add a short calming reset before retry; foreground private practice on the start screen.
- **Add:** mirror/placement exercises and SLP-aligned copy — not just gamified quizzes.
- **Why:** Users are working through a real vulnerability; the product should feel like a supportive clinic session, not a game that punishes failure.
- **Result in prototype:** Duolingo’s *structure* (daily loop, progress, rewards) with TopSpeech’s *tone* (warmth, Reset Breath, no shame).
