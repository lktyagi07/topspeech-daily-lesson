import type { Exercise } from '../types/lesson'

export const LESSON_META = {
  day: 12,
  title: 'Vocalic R — "ar"',
  duration: '4 min',
  program: 'Rhotacism · Rollr Academy',
}

export const EXERCISES: Exercise[] = [
  {
    id: 'warmup',
    type: 'warmup',
    title: 'Settle in',
    subtitle: 'A quiet moment before we practice. Find a private spot — no one needs to hear you right now.',
  },
  {
    id: 'listen-1',
    type: 'listen-repeat',
    title: 'Listen & repeat',
    prompt: 'car',
    phonetic: '/kɑːr/',
    subtitle: 'Tap the speaker, then hold the mic and say it at your pace.',
  },
  {
    id: 'select-1',
    type: 'word-select',
    title: 'Which has a clear R?',
    options: ['ca', 'car', 'cah', 'kah'],
    correctIndex: 1,
    hint: 'Listen for the curled tongue at the end.',
  },
  {
    id: 'mirror-1',
    type: 'mirror-mode',
    title: 'Mirror check',
    subtitle: 'Turn on your camera or imagine looking in a mirror.',
    placementTip:
      'Tip of tongue points up and slightly back — not touching the roof. Lips relaxed, jaw slightly open.',
    prompt: 'star',
    phonetic: '/stɑːr/',
  },
  {
    id: 'listen-2',
    type: 'listen-repeat',
    title: 'Listen & repeat',
    prompt: 'hard',
    phonetic: '/hɑːrd/',
    subtitle: 'Blend the R smoothly — don’t rush the middle sound.',
  },
]

export const MOCK_CORRECT_CHANCE = 0.72
