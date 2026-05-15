import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Exercise } from '../../types/lesson'
import '../shared.css'
import './ExerciseCards.css'

interface ListenRepeatCardProps {
  exercise: Exercise
  onSubmit: (correct: boolean) => void
  disabled?: boolean
}

export function ListenRepeatCard({ exercise, onSubmit, disabled }: ListenRepeatCardProps) {
  const [played, setPlayed] = useState(false)
  const [recording, setRecording] = useState(false)
  const [recorded, setRecorded] = useState(false)

  const handlePlay = () => {
    setPlayed(true)
  }

  const handleRecordStart = () => {
    if (!played || disabled) return
    setRecording(true)
  }

  const handleRecordEnd = () => {
    if (!recording) return
    setRecording(false)
    setRecorded(true)
  }

  const handleCheck = () => {
    const correct = Math.random() > 0.35
    onSubmit(correct)
  }

  return (
    <div className="exercise-card">
      <motion.div
        className="card-surface listen-card"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="exercise-card__title">{exercise.title}</h2>
        {exercise.subtitle && <p className="exercise-card__subtitle">{exercise.subtitle}</p>}

        <div className="listen-card__word-block">
          <motion.button
            type="button"
            className={`listen-card__play ${played ? 'listen-card__play--done' : ''}`}
            onClick={handlePlay}
            whileTap={{ scale: 0.94 }}
            aria-label={`Play pronunciation of ${exercise.prompt}`}
          >
            <span className="listen-card__play-icon" aria-hidden>
              {played ? '♪' : '▶'}
            </span>
          </motion.button>
          <p className="listen-card__word">{exercise.prompt}</p>
          {exercise.phonetic && <p className="listen-card__phonetic">{exercise.phonetic}</p>}
        </div>

        <motion.button
          type="button"
          className={`listen-card__mic ${recording ? 'listen-card__mic--active' : ''} ${recorded ? 'listen-card__mic--done' : ''}`}
          disabled={!played || disabled}
          onPointerDown={handleRecordStart}
          onPointerUp={handleRecordEnd}
          onPointerLeave={handleRecordEnd}
          whileTap={played ? { scale: 0.96 } : undefined}
          aria-label="Hold to record your pronunciation"
        >
          <span className="listen-card__mic-ring" aria-hidden />
          <span className="listen-card__mic-icon" aria-hidden>
            {recording ? '●' : recorded ? '✓' : '🎤'}
          </span>
          <span className="listen-card__mic-label">
            {!played ? 'Listen first' : recording ? 'Recording…' : recorded ? 'Recorded' : 'Hold to speak'}
          </span>
        </motion.button>

        <button
          type="button"
          className="btn btn--primary listen-card__check"
          disabled={!recorded || disabled}
          onClick={handleCheck}
        >
          Check my pronunciation
        </button>
      </motion.div>
    </div>
  )
}
