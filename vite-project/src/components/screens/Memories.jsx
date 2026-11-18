import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Camera } from 'lucide-react'
import Polaroid from '../memories/Polaroid'
import SecretPolaroid from '../memories/SecretPolaroid'
import Lightbox from '../memories/Lightbox'
import VintageButton from '../common/VintageButton'
import { photos } from '../../config/photos'
import { memoriesText } from '../../config/messages'
import './Memories.css'

const TILTS = [-4, 3, -2, 5, -5, 2, -3, 4]

export default function Memories({ onNext }) {
  const [active, setActive] = useState(null)
  const [seen, setSeen] = useState(() => new Set())

  const openPhoto = (i) => {
    setActive(i)
    setSeen((s) => new Set(s).add(i))
  }

  return (
    <section className="screen memories">
      <motion.header
        className="screen-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="eyebrow">{memoriesText.eyebrow}</p>
        <h2 className="screen-title">{memoriesText.title}</h2>
        <p className="screen-subtitle">{memoriesText.subtitle}</p>
        <div className="flourish">
          <Camera size={16} strokeWidth={1.5} />
        </div>
      </motion.header>

      <div className="memories__board">
        {photos.map((p, i) => (
          <Polaroid key={p.id} photo={p} index={i} tilt={TILTS[i % TILTS.length]} onOpen={openPhoto} />
        ))}
        <SecretPolaroid index={photos.length} />
      </div>

      <div className="screen-footer">
        <p className="muted-hint">
          {seen.size === 0 ? memoriesText.tapHint : memoriesText.seenHint(seen.size, photos.length)}
        </p>
        <VintageButton icon={ArrowRight} onClick={onNext}>
          {memoriesText.continueLabel}
        </VintageButton>
      </div>

      <Lightbox photos={photos} index={active} onClose={() => setActive(null)} onChange={openPhoto} />
    </section>
  )
}
