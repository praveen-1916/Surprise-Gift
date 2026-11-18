import { motion } from 'framer-motion'
import './Cake.css'

/**
 * A hand-built CSS birthday cake.
 * `lit` is an array of booleans, one per candle. Tap a candle to blow it out.
 */
export default function Cake({ lit, onBlowCandle }) {
  return (
    <motion.div
      className="cake"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cake__candles">
        {lit.map((on, i) => (
          <button
            key={i}
            type="button"
            className={`candle ${on ? 'is-lit' : 'is-out'}`}
            onClick={() => onBlowCandle(i)}
            disabled={!on}
            aria-label={on ? `Blow out candle ${i + 1}` : `Candle ${i + 1} is out`}
          >
            <span className="candle__glow" />
            <span className="candle__flame" />
            <span className="candle__smoke" />
            <span className="candle__wick" />
            <span className="candle__stick" />
          </button>
        ))}
      </div>

      <div className="cake__tier cake__tier--top">
        <span className="cake__drip" />
        <span className="cake__dots" />
      </div>
      <div className="cake__tier cake__tier--bottom">
        <span className="cake__drip" />
        <span className="cake__lace" />
      </div>
      <div className="cake__plate" />
    </motion.div>
  )
}
