import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import WelcomeScreen from './components/screens/WelcomeScreen'
import LoveLetter from './components/screens/LoveLetter'
import Memories from './components/screens/Memories'
import Reasons from './components/screens/Reasons'
import FinalSurprise from './components/screens/FinalSurprise'
import Countdown from './components/screens/Countdown'
import LockScreen from './components/screens/LockScreen'
import FloatingHearts from './components/common/FloatingHearts'
import ProgressTrail from './components/common/ProgressTrail'
import { photos } from './config/photos'
import { isBeforeUnlock, preloadImages } from './utils/helpers'

const STEPS = [
  { id: 'welcome', label: 'The envelope', Component: WelcomeScreen },
  { id: 'letter', label: 'The letter', Component: LoveLetter },
  { id: 'memories', label: 'Our memories', Component: Memories },
  { id: 'reasons', label: 'Why you are special', Component: Reasons },
  { id: 'finale', label: 'Your birthday', Component: FinalSurprise },
]

const pageVariants = {
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  enter: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    // A leftover filter would trap position:fixed children, so clear it.
    transitionEnd: { filter: 'none' },
  },
  exit: { opacity: 0, y: -24, filter: 'blur(6px)', transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } },
}

const UNLOCK_KEY = 'bujji-unlocked'

function readUnlocked() {
  try {
    return sessionStorage.getItem(UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

// Before midnight she sees a countdown, then the secret question, then the story.
// Add ?preview to the URL to skip the countdown while testing.
function initialGate() {
  const preview = new URLSearchParams(window.location.search).has('preview')
  if (isBeforeUnlock() && !preview) return 'countdown'
  return readUnlocked() ? 'open' : 'lock'
}

export default function App() {
  const [gate, setGate] = useState(initialGate)
  const [step, setStep] = useState(0)
  const [furthest, setFurthest] = useState(0)

  const goTo = (i) => {
    setStep(i)
    setFurthest((f) => Math.max(f, i))
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  const next = () => goTo(Math.min(step + 1, STEPS.length - 1))
  const replay = () => {
    setStep(0)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  // Quietly warm up the photos while she reads the letter.
  useEffect(() => {
    if (step === 1) preloadImages(photos.map((p) => p.src))
  }, [step])

  const unlock = () => {
    try {
      sessionStorage.setItem(UNLOCK_KEY, '1')
    } catch {
      /* private mode — she'll just answer again next time */
    }
    setGate('open')
  }
  const countdownDone = () => setGate(readUnlocked() ? 'open' : 'lock')

  const isOpen = gate === 'open'
  const { Component, id } = isOpen
    ? STEPS[step]
    : gate === 'countdown'
      ? { Component: Countdown, id: 'countdown' }
      : { Component: LockScreen, id: 'lock' }
  const onNext = isOpen ? next : gate === 'countdown' ? countdownDone : unlock

  return (
    <MotionConfig reducedMotion="user">
      {!(isOpen && step === STEPS.length - 1) && <FloatingHearts density={12} seed={1} />}

      <main className="app">
        <AnimatePresence mode="wait">
          <motion.div key={id} variants={pageVariants} initial="initial" animate="enter" exit="exit">
            <Component onNext={onNext} onReplay={replay} />
          </motion.div>
        </AnimatePresence>
      </main>

      {isOpen && step > 0 && (
        <ProgressTrail steps={STEPS} current={step} furthest={furthest} onSelect={goTo} />
      )}
    </MotionConfig>
  )
}
