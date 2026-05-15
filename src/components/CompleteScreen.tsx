import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CompleteScreen.css'

interface CompleteScreenProps {
  xpEarned: number
  streak: number
  accuracy: number
  onDone: () => void
}

export function CompleteScreen({ xpEarned, streak, accuracy, onDone }: CompleteScreenProps) {
  const [xpDisplay, setXpDisplay] = useState(0)

  useEffect(() => {
    const steps = 24
    const increment = xpEarned / steps
    let current = 0
    const id = setInterval(() => {
      current += increment
      if (current >= xpEarned) {
        setXpDisplay(xpEarned)
        clearInterval(id)
      } else {
        setXpDisplay(Math.floor(current))
      }
    }, 40)
    return () => clearInterval(id)
  }, [xpEarned])

  return (
    <motion.div
      className="complete-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="complete-screen__confetti"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        aria-hidden
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="complete-screen__particle"
            style={{
              left: `${8 + (i * 7) % 84}%`,
              background: i % 2 ? 'var(--color-accent)' : 'var(--color-primary-light)',
            }}
            initial={{ y: -20, opacity: 0, rotate: 0 }}
            animate={{
              y: [0, 120 + (i % 3) * 40],
              opacity: [0, 1, 0],
              rotate: (i % 2 ? 1 : -1) * (180 + i * 30),
            }}
            transition={{ duration: 1.8, delay: 0.1 + i * 0.06, ease: 'easeOut' }}
          />
        ))}
      </motion.div>

      <motion.div
        className="complete-screen__badge"
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.15 }}
      >
        <span className="complete-screen__check" aria-hidden>✓</span>
      </motion.div>

      <motion.h1
        className="complete-screen__title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Lesson complete
      </motion.h1>
      <motion.p
        className="complete-screen__subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        You showed up for your voice today. That matters more than a perfect score.
      </motion.p>

      <motion.div
        className="complete-screen__stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <motion.div
          className="complete-screen__stat complete-screen__stat--xp"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.6 }}
        >
          <span className="complete-screen__stat-value">+{xpDisplay}</span>
          <span className="complete-screen__stat-label">XP earned</span>
        </motion.div>

        <div className="complete-screen__stat">
          <span className="complete-screen__stat-value complete-screen__stat-value--streak">
            🔥 {streak}
          </span>
          <span className="complete-screen__stat-label">day streak</span>
        </div>

        <div className="complete-screen__stat">
          <span className="complete-screen__stat-value">{accuracy}%</span>
          <span className="complete-screen__stat-label">accuracy</span>
        </div>
      </motion.div>

      <motion.div
        className="complete-screen__tomorrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        <p className="complete-screen__tomorrow-label">Tomorrow</p>
        <p className="complete-screen__tomorrow-title">Blends: &ldquo;tr&rdquo; &amp; &ldquo;dr&rdquo;</p>
        <p className="complete-screen__tomorrow-time">Unlocks in 14h · same 4-min flow</p>
      </motion.div>

      <motion.button
        type="button"
        className="btn btn--primary complete-screen__cta"
        onClick={onDone}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        whileTap={{ scale: 0.98 }}
      >
        Done for today
      </motion.button>
    </motion.div>
  )
}
