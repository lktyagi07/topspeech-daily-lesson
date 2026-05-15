import { AnimatePresence, motion } from 'framer-motion'
import type { Exercise } from '../types/lesson'
import { ProgressBar } from './ProgressBar'
import { WarmupCard } from './exercises/WarmupCard'
import { ListenRepeatCard } from './exercises/ListenRepeatCard'
import { WordSelectCard } from './exercises/WordSelectCard'
import { MirrorModeCard } from './exercises/MirrorModeCard'
import './LessonShell.css'

interface LessonShellProps {
  exercise: Exercise
  exerciseIndex: number
  totalExercises: number
  onExerciseComplete: (correct: boolean) => void
  interactionLocked: boolean
  retryKey: number
}

const slideVariants = {
  enter: { opacity: 0, x: 48, scale: 0.98 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -48, scale: 0.98 },
}

export function LessonShell({
  exercise,
  exerciseIndex,
  totalExercises,
  onExerciseComplete,
  interactionLocked,
  retryKey,
}: LessonShellProps) {
  return (
    <div className="lesson-shell">
      <header className="lesson-shell__header">
        <button type="button" className="lesson-shell__close" aria-label="Exit lesson">
          ✕
        </button>
        <div className="lesson-shell__progress-wrap">
          <ProgressBar current={exerciseIndex} total={totalExercises} />
        </div>
        <span className="lesson-shell__counter" aria-live="polite">
          {exerciseIndex}/{totalExercises}
        </span>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${exercise.id}-${retryKey}`}
          className="lesson-shell__content"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          {exercise.type === 'warmup' && (
            <WarmupCard exercise={exercise} onContinue={() => onExerciseComplete(true)} />
          )}
          {exercise.type === 'listen-repeat' && (
            <ListenRepeatCard
              exercise={exercise}
              onSubmit={onExerciseComplete}
              disabled={interactionLocked}
            />
          )}
          {exercise.type === 'word-select' && (
            <WordSelectCard
              exercise={exercise}
              onSubmit={onExerciseComplete}
              disabled={interactionLocked}
            />
          )}
          {exercise.type === 'mirror-mode' && (
            <MirrorModeCard
              exercise={exercise}
              onSubmit={onExerciseComplete}
              disabled={interactionLocked}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
