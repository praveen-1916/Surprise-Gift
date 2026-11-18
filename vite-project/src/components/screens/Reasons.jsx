import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Gift, Heart } from 'lucide-react'
import ReasonCard from '../reasons/ReasonCard'
import VintageButton from '../common/VintageButton'
import { reasons } from '../../config/reasons'
import { reasonsText } from '../../config/messages'
import './Reasons.css'

export default function Reasons({ onNext }) {
  const [revealed, setRevealed] = useState(() => new Set())
  const allOpen = revealed.size === reasons.length

  const toggle = (id) =>
    setRevealed((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  // Once every card has been opened at least once, the way forward stays unlocked.
  const [unlocked, setUnlocked] = useState(false)
  if (allOpen && !unlocked) setUnlocked(true)

  return (
    <section className="screen reasons">
      <motion.header
        className="screen-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="eyebrow">{reasonsText.eyebrow}</p>
        <h2 className="screen-title">{reasonsText.title}</h2>
        <p className="screen-subtitle">{reasonsText.subtitle}</p>
      </motion.header>

      <div className="reasons__progress" aria-live="polite">
        {reasons.map((r) => (
          <Heart
            key={r.id}
            size={16}
            strokeWidth={1.5}
            className={revealed.has(r.id) ? 'is-on' : ''}
            fill={revealed.has(r.id) ? 'currentColor' : 'none'}
          />
        ))}
        <span className="sr-only">
          {revealed.size} of {reasons.length} opened
        </span>
      </div>

      <div className="reasons__grid">
        {reasons.map((r, i) => (
          <ReasonCard key={r.id} reason={r} index={i} revealed={revealed.has(r.id)} onReveal={toggle} />
        ))}
      </div>

      <div className="screen-footer">
        <AnimatePresence mode="wait">
          {unlocked ? (
            <motion.div
              key="bonus"
              className="reasons__bonus"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="reasons__bonus-text">{reasonsText.bonus}</p>
              <VintageButton icon={Gift} onClick={onNext}>
                {reasonsText.continueLabel}
              </VintageButton>
            </motion.div>
          ) : (
            <motion.p key="hint" className="muted-hint" exit={{ opacity: 0 }}>
              {reasonsText.lockedHint} ({revealed.size}/{reasons.length})
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
