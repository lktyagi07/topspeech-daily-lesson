import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { EXERCISES } from './data/lesson'
import type { LessonPhase } from './types/lesson'
import { StartScreen } from './components/StartScreen'
import { LessonShell } from './components/LessonShell'
import { CompleteScreen } from './components/CompleteScreen'
import { FeedbackBanner } from './components/FeedbackBanner'
import { ResetBreath } from './components/ResetBreath'

const XP_PER_EXERCISE = 15
const BASE_STREAK = 7

function App() {
  const [phase, setPhase] = useState<LessonPhase>('start')
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [showResetBreath, setShowResetBreath] = useState(false)
  const [locked, setLocked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [attemptCount, setAttemptCount] = useState(0)
  const [retryKey, setRetryKey] = useState(0)

  const totalExercises = EXERCISES.length
  const currentExercise = EXERCISES[exerciseIndex]

  const advanceLesson = useCallback(() => {
    setFeedback(null)
    setLocked(false)

    if (exerciseIndex + 1 >= totalExercises) {
      setPhase('complete')
    } else {
      setExerciseIndex((i) => i + 1)
    }
  }, [exerciseIndex, totalExercises])

  const handleExerciseComplete = useCallback(
    (correct: boolean) => {
      if (locked) return
      setLocked(true)
      setAttemptCount((n) => n + 1)
      if (correct) setCorrectCount((n) => n + 1)

      setFeedback(correct ? 'correct' : 'incorrect')

      if (correct) {
        setTimeout(advanceLesson, 1200)
      } else {
        setTimeout(() => {
          setFeedback(null)
          setShowResetBreath(true)
        }, 900)
      }
    },
    [locked, advanceLesson],
  )

  const handleResetBreathComplete = useCallback(() => {
    setShowResetBreath(false)
    setLocked(false)
    setRetryKey((k) => k + 1)
  }, [])

  const handleStart = () => {
    setPhase('lesson')
    setExerciseIndex(0)
    setCorrectCount(0)
    setAttemptCount(0)
  }

  const handleRestart = () => {
    setPhase('start')
    setExerciseIndex(0)
    setFeedback(null)
    setShowResetBreath(false)
    setLocked(false)
    setCorrectCount(0)
    setAttemptCount(0)
  }

  const xpEarned = correctCount * XP_PER_EXERCISE + 10
  const accuracy =
    attemptCount > 0 ? Math.round((correctCount / attemptCount) * 100) : 100

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {phase === 'start' && <StartScreen key="start" onStart={handleStart} />}
        {phase === 'lesson' && currentExercise && (
          <LessonShell
            key="lesson"
            exercise={currentExercise}
            exerciseIndex={exerciseIndex + 1}
            totalExercises={totalExercises}
            onExerciseComplete={handleExerciseComplete}
            interactionLocked={locked}
            retryKey={retryKey}
          />
        )}
        {phase === 'complete' && (
          <CompleteScreen
            key="complete"
            xpEarned={xpEarned}
            streak={BASE_STREAK}
            accuracy={accuracy}
            onDone={handleRestart}
          />
        )}
      </AnimatePresence>

      {phase === 'lesson' && <FeedbackBanner state={feedback} />}
      <ResetBreath visible={showResetBreath} onComplete={handleResetBreathComplete} />
    </div>
  )
}

export default App
