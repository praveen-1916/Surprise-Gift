import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Flower2 } from 'lucide-react'
import Typewriter from '../common/Typewriter'
import VintageButton from '../common/VintageButton'
import { letter } from '../../config/messages'
import './LoveLetter.css'

export default function LoveLetter({ onNext }) {
  const [typed, setTyped] = useState(false)
  const [secret, setSecret] = useState(false)

  return (
    <section className="screen letter-screen">
      <motion.article
        className="letter"
        initial={{ opacity: 0, y: 60, rotateX: 18, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="letter__fold" aria-hidden="true" />

        <p className="letter__date">{letter.date}</p>
        <h2 className="letter__salutation">{letter.salutation}</h2>

        <Typewriter
          className="letter__body"
          paragraphs={letter.paragraphs}
          speed={16}
          onDone={() => setTyped(true)}
        />

        {!typed && <p className="letter__skip">{letter.skipHint}</p>}

        <AnimatePresence>
          {typed && (
            <motion.div
              className="letter__signoff"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="letter__closing">{letter.closing}</p>
              <p className="letter__signature">{letter.signature}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The pressed flower at the bottom of the page hides the secret P.S. */}
        <AnimatePresence>
          {typed && (
            <motion.div
              className="letter__flower-wrap"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                type="button"
                className={`letter__flower ${secret ? 'is-open' : ''}`}
                onClick={() => setSecret((s) => !s)}
                aria-label={secret ? 'Hide the secret note' : 'Reveal a secret note'}
                aria-expanded={secret}
                whileHover={{ rotate: -12, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Flower2 size={34} strokeWidth={1.3} />
              </motion.button>
              {!secret && <span className="letter__flower-hint">{letter.postscriptHint}</span>}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {secret && (
            <motion.p
              className="letter__ps"
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {letter.postscript}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.article>

      <div className="screen-footer">
        <AnimatePresence>
          {typed && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <VintageButton icon={ArrowRight} onClick={onNext}>
                {letter.continueLabel}
              </VintageButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
