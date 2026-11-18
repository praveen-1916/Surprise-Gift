import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarHeart, RotateCcw } from 'lucide-react'
import { secretPolaroid } from '../../config/photos'

/** A face-down Polaroid that flips over to reveal a hidden note. */
export default function SecretPolaroid({ index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="secret-polaroid"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.8 }}
    >
      <motion.button
        type="button"
        className="secret-polaroid__inner"
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? 'Flip the photo back' : 'Flip the face-down photo'}
        animate={{ rotateY: flipped ? 180 : 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      >
        <span className="secret-polaroid__face secret-polaroid__face--back">
          <span className="secret-polaroid__scribble">{secretPolaroid.front}</span>
          <RotateCcw size={22} strokeWidth={1.5} />
        </span>
        <span className="secret-polaroid__face secret-polaroid__face--front">
          <span className="secret-polaroid__blank">
            <CalendarHeart size={40} strokeWidth={1.2} />
          </span>
          <span className="polaroid__caption">{secretPolaroid.back}</span>
          <span className="secret-polaroid__note">{secretPolaroid.backNote}</span>
        </span>
      </motion.button>
    </motion.div>
  )
}
