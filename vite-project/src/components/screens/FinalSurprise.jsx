import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Gift, Heart, Wind } from 'lucide-react'
import Cake from '../finale/Cake'
import StarrySky from '../finale/StarrySky'
import Confetti from '../common/Confetti'
import FloatingHearts from '../common/FloatingHearts'
import VintageButton from '../common/VintageButton'
import { finale, birthday } from '../../config/messages'
import './FinalSurprise.css'

const CANDLES = 5

export default function FinalSurprise({ onReplay }) {
  const [lit, setLit] = useState(() => Array(CANDLES).fill(true))
  const [showSky, setShowSky] = useState(false)
  const celebrating = lit.every((on) => !on)

  const blowOne = (i) => setLit((prev) => prev.map((on, idx) => (idx === i ? false : on)))

  // Blow candles out one after another for a natural "whoosh".
  const blowAll = () => {
    lit.forEach((on, i) => {
      if (on) setTimeout(() => blowOne(i), i * 140)
    })
  }

  return (
    <section className={`screen finale ${celebrating ? 'is-celebrating' : ''}`}>
      {celebrating && <FloatingHearts density={26} intensity="party" seed={5} />}

      <AnimatePresence mode="wait">
        {!celebrating ? (
          <motion.header
            key="wish"
            className="screen-header finale__wish"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">{finale.eyebrow}</p>
            <p className="finale__prompt">{finale.wishPrompt}</p>
            <p className="screen-subtitle">{finale.wishSub}</p>
          </motion.header>
        ) : (
          <motion.header
            key="title"
            className="screen-header finale__header"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">
              {birthday.day} · {birthday.month} · {birthday.year}
            </p>
            <h1 className="finale__title">
              {finale.title}
              <motion.span
                className="finale__title-heart"
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart fill="currentColor" strokeWidth={0} />
              </motion.span>
            </h1>
          </motion.header>
        )}
      </AnimatePresence>

      <div className="finale__cake-wrap">
        {celebrating && <Confetti />}
        <Cake lit={lit} onBlowCandle={blowOne} />
      </div>

      <div className="screen-footer finale__footer">
        <AnimatePresence mode="wait">
          {!celebrating ? (
            <motion.div key="blow" exit={{ opacity: 0, y: 10 }}>
              <VintageButton icon={Wind} onClick={blowAll}>
                {finale.blowLabel}
              </VintageButton>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              className="finale__message"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.9, delayChildren: 1.2 } } }}
            >
              {finale.message.map((line, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
                    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.1 } },
                  }}
                >
                  {line}
                </motion.p>
              ))}
              <motion.div
                className="finale__last"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
                }}
              >
                <VintageButton icon={Gift} onClick={() => setShowSky(true)}>
                  {finale.lastSurpriseLabel}
                </VintageButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>{showSky && <StarrySky onReplay={onReplay} />}</AnimatePresence>
    </section>
  )
}
