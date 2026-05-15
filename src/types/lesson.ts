export type ExerciseType = 'listen-repeat' | 'word-select' | 'mirror-mode' | 'warmup'

export interface Exercise {
  id: string
  type: ExerciseType
  title: string
  subtitle?: string
  /** For listen-repeat */
  prompt?: string
  phonetic?: string
  /** For word-select — index of correct option */
  options?: string[]
  correctIndex?: number
  hint?: string
  /** For mirror-mode */
  placementTip?: string
}

export type FeedbackState = 'idle' | 'correct' | 'incorrect' | 'reset-breath'

export type LessonPhase = 'start' | 'lesson' | 'complete'
