import { motion, AnimatePresence } from 'framer-motion'
import './FeedbackBanner.css'

interface FeedbackBannerProps {
  state: 'correct' | 'incorrect' | null
}

export function FeedbackBanner({ state }: FeedbackBannerProps) {
  return (
    <AnimatePresence mode="wait">
      {state && (
        <motion.div
          key={state}
          className={`feedback-banner feedback-banner--${state}`}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          role="status"
        >
          {state === 'correct' ? (
            <>
              <span className="feedback-banner__icon" aria-hidden>✓</span>
              <motion.div
                className="feedback-banner__content"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <strong>Beautiful.</strong>
                <span>That placement felt clear — keep that ease.</span>
              </motion.div>
            </>
          ) : (
            <>
              <span className="feedback-banner__icon feedback-banner__icon--soft" aria-hidden>○</span>
              <motion.div
                className="feedback-banner__content"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <strong>Almost.</strong>
                <span>Let’s reset together — no penalty, just practice.</span>
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
