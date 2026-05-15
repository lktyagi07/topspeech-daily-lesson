import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ResetBreath.css'

interface ResetBreathProps {
  visible: boolean
  onComplete: () => void
}

const BREATH_SECONDS = 3

/** Innovation: gentle recovery after a miss — no lives lost, no red shame. */
export function ResetBreath({ visible, onComplete }: ResetBreathProps) {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale')

  useEffect(() => {
    if (!visible) return

    setPhase('inhale')
    const t1 = setTimeout(() => setPhase('hold'), 1200)
    const t2 = setTimeout(() => setPhase('exhale'), 2000)
    const t3 = setTimeout(onComplete, BREATH_SECONDS * 1000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [visible, onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="reset-breath"
          role="dialog"
          aria-label="Guided reset breath"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="reset-breath__panel"
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            <p className="reset-breath__label">Reset breath</p>
            <h2 className="reset-breath__title">Your voice is safe here</h2>
            <p className="reset-breath__copy">
              A miss doesn’t mean failure — it means your brain is learning. Breathe with me, then we’ll try again.
            </p>

            <div className="reset-breath__orb-wrap">
              <motion.div
                className="reset-breath__orb"
                animate={{
                  scale: phase === 'inhale' ? 1.15 : phase === 'hold' ? 1.15 : 0.85,
                }}
                transition={{ duration: phase === 'exhale' ? 0.8 : 1.2, ease: 'easeInOut' }}
              />
              <motion.div
                className="reset-breath__orb reset-breath__orb--ring"
                animate={{
                  scale: phase === 'inhale' ? 1.35 : phase === 'hold' ? 1.35 : 1,
                  opacity: phase === 'hold' ? 0.5 : 0.25,
                }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </div>

            <p className="reset-breath__phase" aria-live="polite">
              {phase === 'inhale' && 'Breathe in…'}
              {phase === 'hold' && 'Hold gently…'}
              {phase === 'exhale' && 'Release…'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
