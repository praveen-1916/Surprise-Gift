/**
 * ✍️  ALL THE WORDS LIVE HERE.
 * Edit any text below — the website updates automatically.
 */

export const herName = 'Bujji'

export const birthday = {
  day: 19,
  month: 'November',
  year: 2026,
  postmark: '19 NOV 2026',
}

/* ─── 0a. Countdown (shown before the birthday starts) ─────── */
export const countdown = {
  // The surprise unlocks at this exact moment (India time).
  unlockAt: '2026-11-19T00:00:00+05:30',
  title: `Inka konchem sepu, ${herName}…`,
  subtitle: '19 November, 12:00 AM ki nee surprise open avthundhi.',
  labels: { days: 'rojulu', hours: 'gantalu', minutes: 'nimishalu', seconds: 'seconds' },
  footer: 'Appati varaku wait cheyyi… worth it.',
}

/* ─── 0b. Secret question lock ─────────────────────────────── */
export const lock = {
  title: 'Idhi nee kosam matrame',
  question: 'Nuvvu nannu modatlo emani pilichevi?',
  placeholder: 'nee answer ikkada…',
  button: 'Open cheyyi',
  wrong: 'Kaadhu… malli try cheyyi',
  hint: 'Hint: "th" tho start avthundhi, chinna word',
  // Any of these answers opens the surprise (case and spaces don't matter).
  answers: ['thamudu', 'thammudu', 'tammudu', 'tamudu', 'thamuduu'],
}

/* ─── 1. Secret welcome screen ─────────────────────────────── */
export const welcome = {
  greeting: `Hey ${herName},`,
  line: 'Nee kosam evaro edho special ga ready chesaru...',
  button: 'Nee surprise open cheyyi',
  envelopeTo: `For ${herName}`,
  envelopeNote: 'nuvvu matrame open cheyyali',
  hint: 'psst… wax seal ni kuda tap cheyyochu',
}

/* ─── 2. Personal love letter ──────────────────────────────── */
export const letter = {
  date: '19th November, 2026',
  salutation: `Naa ${herName} ki,`,
  // Tip: avoid emojis inside these paragraphs — the typewriter types them one character at a time.
  paragraphs: [
    'Happy Birthday, Bujji. Modatlo mana madhya unna bond idhi kaadhu. Nuvvu nannu "thamudu" ani pilichevi.',
    'Nenu first time Hyderabad ki interview ki vachinappudu, aa first day ne naa kosam chicken chesav. Nenu neeku cheppakunda interview ki vellipothe, call chesi mari all the best cheppav. Nenu shock ayyanu.',
    'Nenu chala introvert ni, matladalante bayam. Anduke naa room lone undevadni. Naa first job vachaka neeku vodka konipisthe shock ayyav ani tharvatha chepathay. Appudu naaku baa anipinchindhi. Okaroju intlo manam iddarame unnappudu, nuvvu door knock chesi "payasam chesa, thinu" annav. Appudu kuda shock ayyanu.',
    'Appudappudu nee bike vesukellamanedhanivi naa office ki. Ala ala manam baaga close ayipoyam, daily thirigevallam. Appatiki mana bond akka-thammudu laaga undedhi.',
    'Taruvatha nuvvu konni situations face chesav, nee life lo darkest part emo adhi. Appudu ninnu chala daggaraga chusa. Nuvvu emotions ki, bonds ki entha value isthavo appudu ardham ayyindhi. Nuvvu chala deep thoughts loki vellipoyav. Daani nunchi nuvvu bayataki raavadaniki nenu reason kakapovachu, kani somehow I will be one part of that. Aa time lo neetho unnanduku nenu happy, more than you.',
    'Mana iddarame chala sarlu bayataki vellevallam, chala memories unnai. Nenu neeku nachuthanu ani nenu eppudu anukoledhu.',
    'Taruvatha mana journey lo kotha chapter start ayyindhi. Manam vere flat ki shift ayyam. Nuvvu raanu annav, kani nene adiganu "ravachu kadha, naatho undachu kadha" ani. Nuvvu oppukunnav.',
    'Appudu manam inka close ayyam. Mana madhya unna real bond enti anedhi appude bayataki vachindhi, manam okarini okaram istapaduthunnam ani. Mana prema cheppukokundane manam evo evo chesesukunnam. Asalu nuvvu mamulu dhaanivi kaadhu, chilipi dhaanivi.',
    'Taruvatha anni happy memories e. Bayataki vellatam, gudiki vellatam. Inka naa birthday... nenu ippatiki shock lo unna. Aa roju motham nuvvu naathone unnav. Naaku eppudu evaru ala cheyaledhu. Inthavaraku evaru naaku gift ivvaledhu, first gift ichindhi nuvve.',
    'Ee 7 months lo manam chala sarlu godava paddam, aruchukunnam. Kani okka roju kuda aligi matladukokunda unda lemu.',
    'Nuvvu naaku anni ichav, husband ki ichevi anni. Deeniki nenu eppatiki grateful ga untanu. Nuvvante naaku chala istam. I like you more than you think.',
    'Ippudu nee birthday vachindhi. Idhi mana first birthday together. Manam chala daggaraipoyam, naa naughty guntaa.',
    'Finally, I love you. Mana future ela untundho naaku theliyadhu. Manam kalise untama, leka madhyalone ila undipothama, emi theliyadhu. Kani okkati, nenu unnantha kaalam ninnu happy ga chusukunta, manchiga jagrathaga chusukunta. Mana future antha kalise undaali ani korukuntunna.',
  ],
  closing: 'Love you, Bujji',
  signature: 'Your bujju ❤️',
  postscript:
    'P.S. Nee "bujji bujji" matalu, nee chilipi chilipi panulu, naa daggara mathrame unde nee behaviour... avi naaku chala istam.',
  postscriptHint: 'ikkada oka secret undhi…',
  skipHint: 'letter ni tap chesthe motham okesari kanipisthundhi',
  continueLabel: 'Mana memories chuddam',
}

/* ─── 3. Memories screen text (photos are in photos.js) ────── */
export const memoriesText = {
  eyebrow: 'Chapter Two',
  title: 'Our Beautiful Memories',
  subtitle: 'Prathi photo lo oka memory undhi. Edaina photo tap chesi chudu.',
  tapHint: 'photo tap chesthe pedhaga kanipisthundhi',
  seenHint: (seen, total) => `${total} lo ${seen} memories chusav`,
  continueLabel: 'Nuvvu enduku special ante',
}

/* ─── 4. Reasons screen text (cards are in reasons.js) ─────── */
export const reasonsText = {
  eyebrow: 'Chapter Three',
  title: "Reasons Why You're Special",
  subtitle: 'Prathi card lo oka nijam undhi. Okkokkati tap cheyyi.',
  tapLabel: 'tap cheyyi',
  lockedHint: 'Anni cards open chesthe munduku vellochu…',
  bonus: 'Inka cheppalante chala unnai, maatallo cheppalenivi.',
  continueLabel: 'Inkokka vishayam…',
}

/* ─── 5. Final birthday surprise ───────────────────────────── */
export const finale = {
  eyebrow: 'The Last Chapter',
  wishPrompt: `Kallu moosko, oka wish chesko, ${herName}…`,
  wishSub: 'tarvatha candles oodhu (leda okkokka candle tap cheyyi).',
  blowLabel: 'Candles oodhu',
  title: `Happy Birthday, ${herName}`,
  message: [
    'Idhi mana first birthday together. Inka chala birthdays kalisi celebrate cheskovali.',
    'Ee year nee life lo anni happy ga jaragali, nuvvu korukunnavi anni neeku dhorakali.',
    'Em jarigina, nenu nee pakkane untanu.',
  ],
  lastSurpriseLabel: 'Nee last surprise open cheyyi',
  skyLine1: 'Ee aakasam lo enni stars unna,',
  skyLine2: 'naa wish eppudu nuvve.',
  skySignature: `Happy Birthday, naa ${herName}. I love you. ❤️`,
  replayLabel: 'Malli modati nunchi chudu',
}
