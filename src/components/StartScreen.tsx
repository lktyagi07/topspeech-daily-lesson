import { motion } from 'framer-motion'
import { LESSON_META } from '../data/lesson'
import './StartScreen.css'

interface StartScreenProps {
  onStart: () => void
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      className="start-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
    >
      <header className="start-screen__header">
        <span className="start-screen__brand">TopSpeech</span>
        <span className="start-screen__program">{LESSON_META.program}</span>
      </header>

      <motion.div
        className="start-screen__hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <p className="start-screen__day">Day {LESSON_META.day}</p>
        <h1 className="start-screen__title">{LESSON_META.title}</h1>
        <p className="start-screen__meta">{LESSON_META.duration} · 5 exercises</p>
      </motion.div>

      <motion.div
        className="start-screen__privacy"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="start-screen__privacy-icon" aria-hidden>🔒</span>
        <p>
          <strong>Private practice.</strong> This is your space — progress stays on your device. No scores shared, no audience.
        </p>
      </motion.div>

      <motion.ul
        className="start-screen__goals"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <li>Warm up your voice gently</li>
        <li>Practice vocalic &ldquo;ar&rdquo; in words</li>
        <li>Check tongue placement in mirror mode</li>
      </motion.ul>

      <motion.button
        type="button"
        className="btn btn--primary start-screen__cta"
        onClick={onStart}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileTap={{ scale: 0.98 }}
      >
        Begin today&apos;s lesson
      </motion.button>
    </motion.div>
  )
}
