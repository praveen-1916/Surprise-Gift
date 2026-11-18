import { Heart } from 'lucide-react'
import { makeParticles } from '../../utils/helpers'
import './FloatingHearts.css'

const KINDS = ['heart', 'rose', 'petal', 'heart', 'petal']
const COLORS = ['#c47c84', '#d8a6a6', '#7a1f2b', '#b8935a', '#e6b8b8']

/**
 * Ambient floating hearts, roses and petals.
 * Pure CSS animation — cheap to render, GPU-friendly.
 * density: number of particles. intensity: 'soft' | 'party'
 */
export default function FloatingHearts({ density = 14, intensity = 'soft', seed = 1 }) {
  const items = makeParticles(density, seed)

  return (
    <div className={`floaters floaters--${intensity}`} aria-hidden="true">
      {items.map((p) => {
        const kind = KINDS[Math.floor(p.r1 * KINDS.length)]
        const size = intensity === 'party' ? 14 + p.r2 * 26 : 10 + p.r2 * 16
        const style = {
          left: `${p.r3 * 100}%`,
          '--dur': `${(intensity === 'party' ? 7 : 14) + p.r4 * 10}s`,
          '--delay': `${-p.r5 * 20}s`,
          '--drift': `${(p.r1 - 0.5) * 120}px`,
          '--spin': `${(p.r2 - 0.5) * 540}deg`,
          '--op': intensity === 'party' ? 0.85 : 0.35 + p.r3 * 0.25,
          color: COLORS[Math.floor(p.r4 * COLORS.length)],
          fontSize: size,
        }
        return (
          <span key={p.id} className={`floater floater--${kind}`} style={style}>
            {kind === 'heart' && <Heart size={size} fill="currentColor" strokeWidth={0} />}
            {kind === 'rose' && '🌹'}
            {kind === 'petal' && <i />}
          </span>
        )
      })}
    </div>
  )
}
