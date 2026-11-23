// The "shape" of all portfolio content. Data files in src/data must match
// these types, so TypeScript catches typos and missing fields at build time.
// Fields marked `?` are optional: if you leave them out, the UI simply omits
// that piece instead of showing filler. This keeps the site honest.

export interface SocialLinks {
  github?: string
  linkedin?: string
  email?: string
}

export interface Profile {
  name: string
  headline: string
  intro: string
  /** One string per paragraph, shown in the About section */
  about: string[]
  /** Role types you are open to, shown in the About quick-facts card */
  openTo: string[]
  location: string
  /** File name inside /public, e.g. "resume.pdf" */
  resumePath: string
  /** Name the file gets when a visitor saves it, e.g. "Saral_Raut_Resume.pdf" */
  resumeDownloadName: string
  links: SocialLinks
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Experience {
  id: string
  title: string
  organization: string
  location?: string
  /** Free text, e.g. "Jan 2022 – Mar 2024" */
  period: string
  responsibilities: string[]
  /** Only include accomplishments you can verify */
  accomplishments?: string[]
  technologies?: string[]
}

export interface Education {
  id: string
  institution: string
  program: string
  period?: string
  location?: string
  /** Shown as "GPA 4.10". Remove the field to hide it. */
  gpa?: string
  /** Short factual bullets, e.g. relevant coursework */
  highlights?: string[]
}

export type InterestIcon = 'music' | 'exercise' | 'meditation' | 'philosophy'

export interface Interest {
  title: string
  description: string
  /** Picks the icon in the Beyond Work section */
  icon: InterestIcon
}

export type VideoPlatform = 'youtube' | 'instagram' | 'tiktok'

export interface Video {
  id: string
  platform: VideoPlatform
  title: string
  /** The public link to the video on its own platform */
  url: string
  /** YouTube only: the video id, which enables the click-to-load player */
  youtubeId?: string
}

/** Each field is optional; the detail page renders only what exists. */
export interface ProjectDetails {
  problem?: string
  approach?: string
  implementation?: string
  results?: string
  lessons?: string
}

/** Drives the card's label and placeholder icon. Add a value here and in ProjectCard's icon map. */
export type ProjectCategory = 'Data Analytics' | 'AI / ML' | 'Full Stack'

export interface ProjectImage {
  /** Import the file from src/assets/images, e.g. `import shot from '../assets/images/x.png'` */
  src: string
  /** Describe what the image shows, for screen readers */
  alt: string
  /** Optional visible caption, shown under the image on the detail page */
  caption?: string
  /** Pixel size of the file. Lets the browser reserve space before it loads (no layout jump). */
  width?: number
  height?: number
}

export interface Project {
  /** Used in the URL: /projects/<slug> */
  slug: string
  title: string
  category: ProjectCategory
  /** Free text, e.g. "2026" or "2024–2025" */
  year?: string
  /** Short description shown on the card */
  summary: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
  /** A LinkedIn post (or similar write-up) about the project */
  postUrl?: string
  /** Real screenshot only. Omit until you have one; a neutral placeholder is shown instead. */
  image?: ProjectImage
  /** Verified bullet points, e.g. taken from your resume */
  highlights?: string[]
  /** Longer write-up, shown on the detail page. Each field is optional. */
  details?: ProjectDetails
}
