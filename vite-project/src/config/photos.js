/**
 * 📸  YOUR PHOTOS LIVE HERE.
 *
 * The site uses the resized copies in  /public/photos/web/  (fast to load).
 * Your original photos in /public/photos/ are untouched.
 *
 * To add or swap a photo:
 *   1. Put the image in  /public/photos/web/  (resize to ~1200px tall, under ~300 KB)
 *   2. Add / change an entry below:  src: '/photos/web/your-file.jpg'
 *   3. Write the caption, date and note.
 *
 * The order here is the order on the page. Add or remove entries freely.
 */

export const photos = [
  {
    id: 'chai-days',
    src: '/photos/web/01.jpg',
    caption: 'Chai & samosa days',
    date: 'February 2026',
    note: 'Mana story modalaina rojulu.',
  },
  {
    id: 'outing',
    src: '/photos/web/02.jpg',
    caption: 'Mana outing',
    date: 'March 2026',
    note: 'Nuvvu pakkana unte ye place aina special e.',
  },
  {
    id: 'little-devils',
    src: '/photos/web/03.jpg',
    caption: 'Iddaru chilipi devils',
    date: 'March 2026',
    note: 'Bayataki cute, lopala devils.',
  },
  {
    id: 'sleepy-call',
    src: '/photos/web/04.jpg',
    caption: 'Video call lo nidrapoyina Bujji',
    date: 'April 2026',
    note: 'Nidrapoyina kuda nuvvu cute e.',
  },
  {
    id: 'temple',
    src: '/photos/web/05.jpg',
    caption: 'Gudi lo manam',
    date: 'April 2026',
    note: 'Devudi daggara kuda nee pakkane.',
  },
  {
    id: 'footsteps',
    src: '/photos/web/06.jpg',
    caption: 'Mana adugulu',
    date: 'May 2026',
    note: 'Kalisi vese prathi adugu naaku istam.',
  },
  {
    id: 'close-selfie',
    src: '/photos/web/07.jpg',
    caption: 'Close ga, cute ga',
    date: 'July 2026',
    note: 'Nee thala naa bhujam meeda, anthe chalu.',
  },
  {
    id: 'flowers',
    src: '/photos/web/08.jpg',
    caption: 'Poola madhya manam',
    date: 'July 2026',
    note: 'Aa poolakanna nuvve andamga unnav.',
  },
  {
    id: 'hills',
    src: '/photos/web/09.jpg',
    caption: 'Konda meeda manam',
    date: 'July 2026',
    note: 'Mana trip lo best moments lo okati.',
  },
  {
    id: 'trip',
    src: '/photos/web/10.jpg',
    caption: 'Trip memories',
    date: 'July 2026',
    note: 'Malli malli vellalanipinche trip.',
  },
  {
    id: 'smiles',
    src: '/photos/web/11.jpg',
    caption: 'Mana navvulu',
    date: 'October 2026',
    note: 'Nee navvu naaku chala istam.',
  },
  {
    id: 'game-night',
    src: '/photos/web/12.jpg',
    caption: 'Jenga night',
    date: 'October 2026',
    note: 'Game night lo mana fun.',
  },
  {
    id: 'hearts',
    src: '/photos/web/13.jpg',
    caption: 'Hearts filter, real feelings',
    date: 'October 2026',
    note: 'Filter lo hearts, manasulo nuvvu.',
  },
  {
    id: 'saree',
    src: '/photos/web/14.jpg',
    caption: 'Saree lo naa Bujji',
    date: 'October 2026',
    note: 'Saree lo chala andamga unnav.',
  },
  {
    id: 'pout',
    src: '/photos/web/15.jpg',
    caption: 'Pout queen',
    date: 'Mana memories',
    note: 'Ee moothi naaku chala istam.',
  },
  {
    id: 'naughty',
    src: '/photos/web/16.jpg',
    caption: 'Naa naughty guntaa',
    date: 'Mana memories',
    note: 'Chilipi panulu, chilipi Bujji.',
  },
]

/** The face-down Polaroid at the end of the gallery — a hidden surprise. */
export const secretPolaroid = {
  front: 'Ee photo ni flip cheyyi…',
  back: 'Mana next memory',
  backNote: 'Inka theeyaledhu… kalisi theeddam. 🎂',
}
