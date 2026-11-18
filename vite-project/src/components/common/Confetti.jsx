import { makeParticles } from '../../utils/helpers'
import './Confetti.css'

const COLORS = ['#7a1f2b', '#c47c84', '#d8a6a6', '#b8935a', '#f3e2c0', '#9a7b62']

/**
 * A one-shot, subtle confetti burst. Re-mount (change `key`) to fire again.
 */
export default function Confetti({ count = 70, seed = 7 }) {
  const pieces = makeParticles(count, seed)
  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p) => {
        const angle = p.r1 * Math.PI * 2
        const dist = 120 + p.r2 * 320
        const style = {
          background: COLORS[Math.floor(p.r3 * COLORS.length)],
          width: 6 + p.r4 * 6,
          height: p.r5 > 0.5 ? 10 + p.r4 * 6 : 6 + p.r4 * 4,
          borderRadius: p.r5 > 0.75 ? '50%' : '2px',
          '--x': `${Math.cos(angle) * dist}px`,
          '--y': `${Math.sin(angle) * dist * 0.6 - 160}px`,
          '--r': `${(p.r2 - 0.5) * 1080}deg`,
          '--d': `${1.6 + p.r3 * 1.6}s`,
          '--delay': `${p.r4 * 0.25}s`,
        }
        return <span key={p.id} className="confetti__piece" style={style} />
      })}
    </div>
  )
}
