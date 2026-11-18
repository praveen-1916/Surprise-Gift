import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MailOpen } from 'lucide-react'
import VintageButton from '../common/VintageButton'
import { welcome, birthday, herName } from '../../config/messages'
import './WelcomeScreen.css'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function WelcomeScreen({ onNext }) {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    if (!opened) return undefined
    const t = setTimeout(onNext, 2900)
    return () => clearTimeout(t)
  }, [opened, onNext])

  const open = () => setOpened(true)

  return (
    <section className="screen welcome">
      <motion.p className="welcome__greeting" variants={fadeUp} initial="hidden" animate="show" custom={0}>
        {welcome.greeting}
      </motion.p>
      <motion.p className="welcome__line" variants={fadeUp} initial="hidden" animate="show" custom={1}>
        {welcome.line}
      </motion.p>

      <motion.div
        className="welcome__stage"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={opened ? { opacity: 1, scale: 1.04, y: 30 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: opened ? 0 : 1.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="envelope"
          animate={opened ? { y: 0, rotate: 0 } : { y: [0, -8, 0], rotate: [-0.6, 0.6, -0.6] }}
          transition={opened ? { duration: 0.4 } : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="envelope__back" />

          <motion.div
            className="envelope__letter"
            initial={false}
            animate={opened ? { y: '-58%' } : { y: '0%' }}
            transition={{ delay: opened ? 1.15 : 0, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="envelope__letter-script">Happy Birthday</span>
            <span className="envelope__letter-name">{herName}</span>
            <Heart size={18} className="envelope__letter-heart" fill="currentColor" strokeWidth={0} />
          </motion.div>

          <div className="envelope__front">
            <span className="envelope__to">{welcome.envelopeTo}</span>
            <span className="envelope__note">{welcome.envelopeNote}</span>
          </div>

          <div className="envelope__stamp" aria-hidden="true">
            <Heart size={20} fill="currentColor" strokeWidth={0} />
          </div>
          <div className="envelope__postmark" aria-hidden="true">
            <span>{birthday.postmark}</span>
          </div>

          <motion.div
            className="envelope__flap"
            initial={false}
            style={{ zIndex: 4 }}
            animate={
              opened ? { rotateX: 180, transitionEnd: { zIndex: 1 } } : { rotateX: 0, zIndex: 4 }
            }
            transition={{ delay: opened ? 0.35 : 0, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          />

          <motion.button
            type="button"
            className="wax-seal"
            onClick={open}
            disabled={opened}
            aria-label="Break the wax seal"
            animate={opened ? { scale: [1, 1.25, 0], opacity: [1, 1, 0], rotate: 25 } : { scale: 1 }}
            whileHover={opened ? undefined : { scale: 1.08, rotate: -6 }}
            whileTap={opened ? undefined : { scale: 0.92 }}
            transition={{ duration: 0.55 }}
          >
            <span className="wax-seal__ring">
              <Heart size={26} fill="currentColor" strokeWidth={0} />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="welcome__cta"
        initial={{ opacity: 0, y: 14 }}
        animate={opened ? { opacity: 0, y: 14 } : { opacity: 1, y: 0 }}
        transition={{ delay: opened ? 0 : 2.4, duration: 0.8 }}
      >
        <VintageButton icon={MailOpen} onClick={open} disabled={opened}>
          {welcome.button}
        </VintageButton>
        <p className="muted-hint">{welcome.hint}</p>
      </motion.div>
    </section>
  )
}
