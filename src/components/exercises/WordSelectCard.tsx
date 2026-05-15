import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Exercise } from '../../types/lesson'
import '../shared.css'
import './ExerciseCards.css'

interface WordSelectCardProps {
  exercise: Exercise
  onSubmit: (correct: boolean) => void
  disabled?: boolean
}

export function WordSelectCard({ exercise, onSubmit, disabled }: WordSelectCardProps) {
  const [selected, setSelected] = useState<number | null>(null)

  const options = exercise.options ?? []

  const handleSelect = (index: number) => {
    if (disabled || selected !== null) return
    setSelected(index)
    const correct = index === exercise.correctIndex
    setTimeout(() => onSubmit(correct), 400)
  }

  return (
    <div className="exercise-card">
      <motion.div className="card-surface" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="exercise-card__title">{exercise.title}</h2>
        {exercise.hint && <p className="exercise-card__subtitle">{exercise.hint}</p>}

        <motion.button
          type="button"
          className="word-select__play-all"
          whileTap={{ scale: 0.97 }}
          aria-label="Play all options"
        >
          <span aria-hidden>🔊</span> Hear all options
        </motion.button>

        <motion.div className="word-select__grid" layout>
          {options.map((word, i) => (
            <motion.button
              key={word}
              type="button"
              className={`word-select__option ${selected === i ? 'word-select__option--selected' : ''}`}
              onClick={() => handleSelect(i)}
              disabled={disabled || selected !== null}
              whileTap={{ scale: 0.97 }}
              layout
            >
              {word}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
