import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Exercise } from '../../types/lesson'
import '../shared.css'
import './ExerciseCards.css'

interface MirrorModeCardProps {
  exercise: Exercise
  onSubmit: (correct: boolean) => void
  disabled?: boolean
}

export function MirrorModeCard({ exercise, onSubmit, disabled }: MirrorModeCardProps) {
  const [mirrorOn, setMirrorOn] = useState(false)
  const [practiced, setPracticed] = useState(false)

  return (
    <motion.div className="exercise-card">
      <div className="card-surface mirror-card">
        <h2 className="exercise-card__title">{exercise.title}</h2>
        {exercise.subtitle && <p className="exercise-card__subtitle">{exercise.subtitle}</p>}

        <motion.div
          className={`mirror-card__viewport ${mirrorOn ? 'mirror-card__viewport--on' : ''}`}
          layout
        >
          {mirrorOn ? (
            <motion.div
              className="mirror-card__camera-mock"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="mirror-card__face-guide"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <p className="mirror-card__target-word">{exercise.prompt}</p>
              <p className="mirror-card__phonetic">{exercise.phonetic}</p>
            </motion.div>
          ) : (
            <div className="mirror-card__placeholder">
              <span aria-hidden>🪞</span>
              <p>Mirror preview</p>
            </div>
          )}
        </motion.div>

        <div className="mirror-card__diagram" aria-hidden>
          <svg viewBox="0 0 120 80" className="mirror-card__svg">
            <path
              d="M40 55 Q60 25 80 55"
              fill="none"
              stroke="var(--color-primary-light)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="60" cy="48" r="4" fill="var(--color-accent)" />
          </svg>
        </div>

        {exercise.placementTip && (
          <p className="mirror-card__tip">{exercise.placementTip}</p>
        )}

        {!mirrorOn ? (
          <button
            type="button"
            className="btn btn--secondary mirror-card__toggle"
            onClick={() => setMirrorOn(true)}
            disabled={disabled}
          >
            Enable mirror mode
          </button>
        ) : (
          <button
            type="button"
            className="btn btn--primary mirror-card__toggle"
            disabled={disabled || practiced}
            onClick={() => {
              setPracticed(true)
              onSubmit(true)
            }}
          >
            {practiced ? 'Nice work' : 'I practiced the placement'}
          </button>
        )}
      </div>
    </motion.div>
  )
}
