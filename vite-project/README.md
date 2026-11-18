# A Little World for Bujji ❤️

An interactive birthday surprise, built with React + Vite, Framer Motion and Lucide icons.

## Run it

```bash
npm install
npm run dev       # open the printed localhost URL
npm run build     # production build in /dist (deploy anywhere static: Netlify, Vercel, GitHub Pages)
```

## The journey

1. **The envelope**: a sealed vintage envelope. Tap the wax seal or the button to open it.
2. **The letter**: a handwritten letter that types itself (tap it to show everything at once).
   *Hidden:* tap the little pressed flower in the corner to find a secret P.S.
3. **Our memories**: Polaroids with tape. Tap one for a full-screen view (arrow keys, swipe, Esc).
   *Hidden:* the face-down Polaroid at the end flips over.
4. **Reasons you're special**: vintage cards that flip open. A bonus line and the way forward appear only after every card is opened.
5. **The birthday**: make a wish, then blow out the candles (all at once, or tap each one). Confetti, floating hearts and roses, and the birthday message follow.
   *Final surprise:* a night sky where the stars gather into a heart around her name.

The heart trail at the bottom lets her go back to chapters she has already seen. Chapters she hasn't reached yet stay locked.

## Personalise it (no code needed)

| What | File |
| --- | --- |
| Every message, the letter, titles, button labels | `src/config/messages.js` |
| Photos, captions, dates, notes, the secret Polaroid | `src/config/photos.js` |
| The "reasons" cards | `src/config/reasons.js` |

**Using your own photos:** copy them into `public/photos/`, then set `src: '/photos/your-file.jpg'` in `photos.js`.
If a photo fails to load, a soft "photo coming soon" frame appears instead of a broken image.

## Structure

```
src/
  config/        messages.js, photos.js, reasons.js   ← edit these
  components/
    screens/     WelcomeScreen, LoveLetter, Memories, Reasons, FinalSurprise
    common/      VintageButton, Typewriter, FloatingHearts, Confetti, SmartImage, ProgressTrail
    memories/    Polaroid, SecretPolaroid, Lightbox
    reasons/     ReasonCard
    finale/      Cake, StarrySky
  utils/helpers.js
```
