import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Hourglass } from 'lucide-react'
import { countdown } from '../../config/messages'
import { UNLOCK_MS } from '../../utils/helpers'
import './Gate.css'

function split(ms) {
  const s = Math.max(0, Math.floor(ms / 1000))
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}

/** Shown before midnight; calls onNext the moment the birthday begins. */
export default function Countdown({ onNext }) {
  const [now, setNow] = useState(() => Date.now())
  const left = UNLOCK_MS - now

  useEffect(() => {
    if (left <= 0) {
      onNext()
      return undefined
    }
    const t = setTimeout(() => setNow(Date.now()), 1000 - (Date.now() % 1000))
    return () => clearTimeout(t)
  }, [now, left, onNext])

  const parts = split(left)
  const units = ['days', 'hours', 'minutes', 'seconds'].filter((u) => u !== 'days' || parts.days > 0)

  return (
    <section className="screen gate">
      <motion.div
        className="gate__card"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="gate__badge"
          animate={{ rotate: [0, 180, 180, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Hourglass size={26} strokeWidth={1.4} />
        </motion.span>
        <h1 className="gate__title">{countdown.title}</h1>
        <p className="gate__subtitle">{countdown.subtitle}</p>

        <div className="countdown" role="timer" aria-live="off">
          {units.map((u) => (
            <div key={u} className="countdown__unit">
              <span className="countdown__num">{String(parts[u]).padStart(2, '0')}</span>
              <span className="countdown__label">{countdown.labels[u]}</span>
            </div>
          ))}
        </div>

        <p className="gate__footer">
          <Heart size={14} fill="currentColor" strokeWidth={0} /> {countdown.footer}
        </p>
      </motion.div>
    </section>
  )
}
