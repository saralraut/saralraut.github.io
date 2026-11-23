import type { Interest, Video } from '../types/portfolio'

// DRAFT wording, based only on what you told me (you love music, exercise,
// meditation, peace, philosophy and life). Please rewrite each line in your own
// words; specifics (what you play, how you train, thinkers you like) make
// this section feel personal.
export const interests: Interest[] = [
  { icon: 'music', title: 'Music', description: 'A constant source of energy and joy.' },
  {
    icon: 'exercise',
    title: 'Exercise',
    description: 'Staying active keeps me energized and focused.',
  },
  {
    icon: 'meditation',
    title: 'Meditation',
    description: 'A way to stay calm, present, and grounded.',
  },
  {
    icon: 'philosophy',
    title: 'Philosophy',
    description: 'I like thinking about life, peace, and how to live well.',
  },
]

// Videos. YouTube entries with a `youtubeId` play inside the page (after a
// click); everything else is a link card that opens on its own platform.
// The timestamp and tracking parts of the links you sent are removed.
export const videos: Video[] = [
  {
    id: 'truth-youtube',
    platform: 'youtube',
    title: 'The truth that every human being should know not believe',
    url: 'https://www.youtube.com/watch?v=UEQfVecTr68',
    youtubeId: 'UEQfVecTr68',
  },
  {
    id: 'reel-instagram',
    platform: 'instagram',
    title: 'The simple art of being aware',
    url: 'https://www.instagram.com/reel/DTmP3tKkdAy/',
  },
]
