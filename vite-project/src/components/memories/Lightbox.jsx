import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SmartImage from '../common/SmartImage'

/**
 * Full-screen photo preview.
 * Keyboard: ← → to navigate, Esc to close. Touch: swipe left / right.
 */
export default function Lightbox({ photos, index, onClose, onChange }) {
  const open = index !== null
  const photo = open ? photos[index] : null
  const count = photos.length

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % count)
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, count, onClose, onChange])

  const next = (e) => {
    e?.stopPropagation()
    onChange((index + 1) % count)
  }
  const prev = (e) => {
    e?.stopPropagation()
    onChange((index - 1 + count) % count)
  }

  // Portal to <body> so the page-transition transforms never clip the overlay.
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={photo.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close preview">
            <X size={22} />
          </button>

          {count > 1 && (
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous photo">
              <ChevronLeft size={26} />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.figure
              key={photo.id}
              className="lightbox__card"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, rotate: -3, y: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              drag={count > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) next()
                else if (info.offset.x > 70) prev()
              }}
            >
              <SmartImage key={photo.src} className="lightbox__photo" src={photo.src} alt={photo.caption} eager />
              <figcaption>
                <span className="lightbox__caption">{photo.caption}</span>
                {photo.note && <span className="lightbox__note">{photo.note}</span>}
                <span className="lightbox__count">
                  {index + 1} / {count}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {count > 1 && (
            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next photo">
              <ChevronRight size={26} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
