import { motion } from 'framer-motion'
import {
  Bike,
  CookingPot,
  Gift,
  HandHeart,
  Heart,
  Home,
  Infinity as InfinityIcon,
  Moon,
  Smile,
  Soup,
  Sparkles,
  Sun,
} from 'lucide-react'
import { reasonsText } from '../../config/messages'

const ICONS = {
  cooking: CookingPot,
  bowl: Soup,
  bike: Bike,
  gift: Gift,
  smile: Smile,
  care: HandHeart,
  heart: Heart,
  presence: Home,
  sun: Sun,
  infinity: InfinityIcon,
  moon: Moon,
  star: Sparkles,
}

/** A vintage card that flips over to reveal a reason. */
export default function ReasonCard({ reason, index, revealed, onReveal }) {
  const Icon = ICONS[reason.icon] ?? Heart

  return (
    <motion.div
      className="reason"
      initial={{ opacity: 0, y: 40, rotate: index % 2 ? 2 : -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        type="button"
        className="reason__inner"
        onClick={() => onReveal(reason.id)}
        aria-pressed={revealed}
        aria-label={revealed ? `${reason.title}: ${reason.message}` : `Reveal: ${reason.title}`}
        animate={{ rotateY: revealed ? 180 : 0 }}
        whileHover={revealed ? undefined : { y: -6 }}
        transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
      >
        <span className="reason__face reason__face--front">
          <span className="reason__corner reason__corner--tl" />
          <span className="reason__corner reason__corner--br" />
          <span className="reason__number">No. {String(index + 1).padStart(2, '0')}</span>
          <span className="reason__icon">
            <Icon size={30} strokeWidth={1.4} />
          </span>
          <span className="reason__title">{reason.title}</span>
          <span className="reason__tap">{reasonsText.tapLabel}</span>
        </span>

        <span className="reason__face reason__face--back">
          <Heart className="reason__back-heart" size={18} fill="currentColor" strokeWidth={0} />
          <span className="reason__back-title">{reason.title}</span>
          <span className="reason__message">{reason.message}</span>
        </span>
      </motion.button>
    </motion.div>
  )
}
