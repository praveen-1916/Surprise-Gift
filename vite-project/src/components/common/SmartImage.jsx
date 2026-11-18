import { useState } from 'react'
import { Heart } from 'lucide-react'

/**
 * Lazy-loaded image that fades in once decoded,
 * and shows a gentle paper placeholder if the file is missing.
 */
export default function SmartImage({ src, alt, eager = false, className = '' }) {
  const [state, setState] = useState('loading')

  return (
    <div className={`smart-img smart-img--${state} ${className}`}>
      {state === 'error' ? (
        <div className="smart-img__fallback">
          <Heart size={28} strokeWidth={1.4} />
          <span>photo coming soon</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          draggable="false"
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
        />
      )}
    </div>
  )
}
