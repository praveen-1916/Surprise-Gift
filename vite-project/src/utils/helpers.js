import { countdown } from '../config/messages'

/** The moment the surprise unlocks (milliseconds). */
export const UNLOCK_MS = new Date(countdown.unlockAt).getTime()

/** True while the birthday hasn't started yet. */
export function isBeforeUnlock() {
  return Date.now() < UNLOCK_MS
}

/** Deterministic pseudo-random number in [0, 1) — keeps renders pure & stable. */
export function seeded(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

/** Build a stable list of random-looking particles. */
export function makeParticles(count, seedOffset = 0) {
  return Array.from({ length: count }, (_, i) => {
    const s = i + seedOffset * 1000
    return {
      id: i,
      r1: seeded(s + 1),
      r2: seeded(s + 2),
      r3: seeded(s + 3),
      r4: seeded(s + 4),
      r5: seeded(s + 5),
    }
  })
}

const preloaded = new Set()

/** Warm the browser cache so photos appear instantly later. */
export function preloadImages(urls) {
  urls.forEach((url) => {
    if (!url || preloaded.has(url)) return
    preloaded.add(url)
    const img = new Image()
    img.decoding = 'async'
    img.src = url
  })
}
