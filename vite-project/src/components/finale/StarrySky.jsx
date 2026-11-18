import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import VintageButton from '../common/VintageButton'
import { makeParticles } from '../../utils/helpers'
import { finale, herName } from '../../config/messages'
import './StarrySky.css'

const HEART_POINTS = 46
const BG_STARS = makeParticles(90, 3)
const SCATTER = makeParticles(HEART_POINTS, 11)

// Classic parametric heart, scaled into a 100×100 viewBox.
const heart = Array.from({ length: HEART_POINTS }, (_, i) => {
  const t = (i / HEART_POINTS) * Math.PI * 2
  const x = 16 * Math.sin(t) ** 3
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
  return { x: 50 + x * 2.4, y: 46 - y * 2.4 }
})

/** The final visual surprise: scattered stars gather into a glowing heart. */
export default function StarrySky({ onReplay }) {
  // Portal to <body> so the fixed night sky covers the whole viewport.
  return createPortal(
    <motion.div
      className="sky"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
    >
      <div className="sky__bg-stars" aria-hidden="true">
        {BG_STARS.map((s) => (
          <span
            key={s.id}
            style={{
              left: `${s.r1 * 100}%`,
              top: `${s.r2 * 100}%`,
              width: 1 + s.r3 * 2.2,
              height: 1 + s.r3 * 2.2,
              animationDelay: `${s.r4 * 4}s`,
              animationDuration: `${2 + s.r5 * 3}s`,
            }}
          />
        ))}
      </div>

      <span className="sky__shooting" aria-hidden="true" />

      <svg className="sky__heart" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id="starGlow">
            <stop offset="0%" stopColor="#fff6e6" />
            <stop offset="60%" stopColor="#f2c6c6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f2c6c6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.path
          d={`M ${heart.map((p) => `${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' L ')} Z`}
          fill="none"
          stroke="rgba(242, 198, 198, 0.35)"
          strokeWidth="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 3.2, duration: 2.4, ease: 'easeInOut' }}
        />

        {heart.map((p, i) => (
          <motion.g
            key={i}
            initial={{
              x: SCATTER[i].r1 * 100 - p.x,
              y: SCATTER[i].r2 * 100 - p.y,
              opacity: 0,
            }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.04, duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <circle cx={p.x} cy={p.y} r="2.2" fill="url(#starGlow)" />
            <circle cx={p.x} cy={p.y} r="0.55" fill="#fffaf0" className="sky__twinkle" style={{ animationDelay: `${(i % 7) * 0.3}s` }} />
          </motion.g>
        ))}

        <motion.text
          x="50"
          y="47"
          textAnchor="middle"
          className="sky__initial"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.2, duration: 1.4 }}
          style={{ transformOrigin: '50px 45px' }}
        >
          {herName}
        </motion.text>
      </svg>

      <div className="sky__text">
        <motion.p
          className="sky__line"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.8, duration: 1.4 }}
        >
          {finale.skyLine1}
        </motion.p>
        <motion.p
          className="sky__line sky__line--strong"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6.2, duration: 1.4 }}
        >
          {finale.skyLine2}
        </motion.p>
        <motion.p
          className="sky__signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.8, duration: 1.6 }}
        >
          {finale.skySignature}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9, duration: 1 }}
        >
          <VintageButton variant="ghost" icon={RotateCcw} onClick={onReplay} className="sky__replay">
            {finale.replayLabel}
          </VintageButton>
        </motion.div>
      </div>
    </motion.div>,
    document.body,
  )
}
