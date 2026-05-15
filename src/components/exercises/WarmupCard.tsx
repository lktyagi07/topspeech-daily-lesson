import { motion } from 'framer-motion'
import type { Exercise } from '../../types/lesson'
import '../shared.css'
import './ExerciseCards.css'

interface WarmupCardProps {
  exercise: Exercise
  onContinue: () => void
}

export function WarmupCard({ exercise, onContinue }: WarmupCardProps) {
  return (
    <div className="exercise-card">
      <div className="card-surface warmup-card">
        <h2 className="exercise-card__title">{exercise.title}</h2>
        <p className="exercise-card__subtitle">{exercise.subtitle}</p>

        <motion.div
          className="warmup-card__pulse"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />

        <p className="warmup-card__hint">When you&apos;re ready, tap continue.</p>
        <button type="button" className="btn btn--primary warmup-card__btn" onClick={onContinue}>
          I&apos;m ready
        </button>
      </div>
    </div>
  )
}
