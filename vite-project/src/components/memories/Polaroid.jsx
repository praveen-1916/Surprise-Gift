import { motion } from 'framer-motion'
import SmartImage from '../common/SmartImage'

/** A single Polaroid card. `tilt` is the resting rotation in degrees. */
export default function Polaroid({ photo, index, tilt, onOpen }) {
  return (
    <motion.button
      type="button"
      className="polaroid"
      style={{ '--tilt': `${tilt}deg` }}
      onClick={() => onOpen(index)}
      aria-label={`Open photo: ${photo.caption}`}
      initial={{ opacity: 0, y: 40, rotate: tilt * 2 }}
      animate={{ opacity: 1, y: 0, rotate: tilt }}
      whileHover={{ rotate: 0, y: -10, scale: 1.04, zIndex: 5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18, delay: 0.15 + index * 0.12 }}
    >
      <span className="polaroid__tape" aria-hidden="true" />
      <SmartImage className="polaroid__photo" src={photo.src} alt={photo.caption} eager={index < 2} />
      <span className="polaroid__caption">{photo.caption}</span>
      {photo.date && <span className="polaroid__date">{photo.date}</span>}
    </motion.button>
  )
}
