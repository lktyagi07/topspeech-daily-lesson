import { motion } from 'framer-motion'
import './ProgressBar.css'

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const segments = Array.from({ length: total }, (_, i) => i < current)

  return (
    <motion.div
      className="progress-bar"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`Lesson progress: ${current} of ${total} exercises`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {segments.map((filled, i) => (
        <motion.div
          key={i}
          className={`progress-bar__segment ${filled ? 'progress-bar__segment--filled' : ''}`}
          initial={false}
          animate={{
            scaleY: filled ? 1 : 0.6,
            opacity: filled ? 1 : 0.35,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 28,
            delay: filled && i === current - 1 ? 0 : 0,
          }}
        >
          {filled && (
            <motion.span
              className="progress-bar__glow"
              layoutId={i === current - 1 ? 'progress-glow' : undefined}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
