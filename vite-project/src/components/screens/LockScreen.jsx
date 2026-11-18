import { useState } from 'react'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { KeyRound, LockKeyhole } from 'lucide-react'
import VintageButton from '../common/VintageButton'
import { lock } from '../../config/messages'
import './Gate.css'

const normalize = (s) => s.toLowerCase().replace(/[^a-z]/g, '')
const ACCEPTED = new Set(lock.answers.map(normalize))

/** A secret question only she knows the answer to. */
export default function LockScreen({ onNext }) {
  const [value, setValue] = useState('')
  const [tries, setTries] = useState(0)
  const [wrong, setWrong] = useState(false)
  const [opening, setOpening] = useState(false)
  const controls = useAnimationControls()

  const submit = (e) => {
    e.preventDefault()
    if (opening) return
    if (ACCEPTED.has(normalize(value))) {
      setWrong(false)
      setOpening(true)
      setTimeout(onNext, 900)
      return
    }
    setTries((t) => t + 1)
    setWrong(true)
    controls.start({ x: [0, -12, 12, -8, 8, -4, 0], transition: { duration: 0.5 } })
  }

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
          animate={opening ? { rotate: [0, -20, 0], scale: [1, 1.2, 0] } : {}}
          transition={{ duration: 0.8 }}
        >
          {opening ? <KeyRound size={26} strokeWidth={1.4} /> : <LockKeyhole size={26} strokeWidth={1.4} />}
        </motion.span>
        <h1 className="gate__title">{lock.title}</h1>
        <p className="gate__question">{lock.question}</p>

        <motion.form className="gate__form" onSubmit={submit} animate={controls}>
          <input
            className={`gate__input ${wrong ? 'is-wrong' : ''}`}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              setWrong(false)
            }}
            placeholder={lock.placeholder}
            aria-label={lock.question}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            autoFocus
          />
          <VintageButton type="submit" icon={KeyRound} disabled={!value.trim() || opening}>
            {lock.button}
          </VintageButton>
        </motion.form>

        <div className="gate__feedback" aria-live="polite">
          <AnimatePresence mode="wait">
            {wrong && (
              <motion.p
                key={`w${tries}`}
                className="gate__wrong"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {lock.wrong}
              </motion.p>
            )}
          </AnimatePresence>
          {tries >= 2 && <p className="gate__hint">{lock.hint}</p>}
        </div>
      </motion.div>
    </section>
  )
}
