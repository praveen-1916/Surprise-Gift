import { useEffect, useRef, useState } from 'react'

/**
 * Types paragraphs out character by character.
 * The full text is laid out invisibly from the start, so the page never jumps.
 * Clicking / tapping the text reveals everything instantly.
 */
export default function Typewriter({ paragraphs, speed = 26, onDone, className = '' }) {
  const full = paragraphs.join('\n\n')
  const [count, setCount] = useState(0)
  const doneRef = useRef(false)
  const done = count >= full.length

  useEffect(() => {
    if (done) {
      if (!doneRef.current) {
        doneRef.current = true
        onDone?.()
      }
      return undefined
    }
    const prev = full[count - 1]
    let delay = speed
    if (full[count] === '\n') delay = speed * 7
    else if (prev && '.!?—'.includes(prev)) delay = speed * 12
    else if (prev === ',') delay = speed * 6
    const t = setTimeout(() => setCount((c) => c + 1), delay)
    return () => clearTimeout(t)
  }, [count, done, full, speed, onDone])

  // Map the global character index onto each paragraph.
  const blocks = paragraphs.map((p, i) => {
    const start = paragraphs.slice(0, i).reduce((sum, q) => sum + q.length + 2, 0)
    const visible = Math.max(0, Math.min(p.length, count - start))
    return { text: p, visible, active: !done && count >= start && count <= start + p.length }
  })

  return (
    <div
      className={`typewriter ${className}`}
      onClick={() => setCount(full.length)}
      title={done ? undefined : 'Tap to reveal the whole letter'}
    >
      <span className="sr-only">{full}</span>
      {blocks.map((b, i) => (
        <p key={i} aria-hidden="true">
          <span>{b.text.slice(0, b.visible)}</span>
          {b.active && <span className="typewriter__caret" />}
          <span style={{ visibility: 'hidden' }}>{b.text.slice(b.visible)}</span>
        </p>
      ))}
    </div>
  )
}
