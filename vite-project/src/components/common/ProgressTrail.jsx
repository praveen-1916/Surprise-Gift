import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import './ProgressTrail.css'

/**
 * A little trail of hearts at the bottom of the screen.
 * Chapters already discovered can be revisited; future ones stay locked.
 */
export default function ProgressTrail({ steps, current, furthest, onSelect }) {
  return (
    <motion.nav
      className="trail"
      aria-label="Chapters"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      {steps.map((s, i) => {
        const unlocked = i <= furthest
        const isCurrent = i === current
        return (
          <button
            key={s.id}
            type="button"
            className={`trail__dot ${isCurrent ? 'is-current' : ''} ${unlocked ? 'is-unlocked' : ''}`}
            onClick={() => unlocked && !isCurrent && onSelect(i)}
            disabled={!unlocked}
            aria-current={isCurrent ? 'step' : undefined}
            aria-label={unlocked ? s.label : 'Not discovered yet'}
            title={unlocked ? s.label : 'Not discovered yet…'}
          >
            <Heart size={isCurrent ? 18 : 13} strokeWidth={1.6} fill={unlocked ? 'currentColor' : 'none'} />
          </button>
        )
      })}
    </motion.nav>
  )
}
