import type { ReactNode } from 'react'
import Container from './Container'
import Reveal from './Reveal'

interface SectionProps {
  /** Anchor id: must match an entry in src/data/navigation.ts */
  id: string
  title: string
  /** Optional one-line intro under the heading */
  description?: string
  /** Alternating background keeps the page rhythmic without divider lines */
  tone?: 'base' | 'alt'
  children: ReactNode
}

// The shared frame of every homepage section: background, spacing, accent
// bar and <h2>. Sections never repeat this markup, so the whole site's
// heading style changes in one place. `aria-labelledby` ties the section
// landmark to its heading for screen readers.
export default function Section({ id, title, description, tone = 'base', children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-20 md:py-24 ${tone === 'alt' ? 'bg-surface-alt' : 'bg-surface'}`}
    >
      <Container>
        <Reveal>
          <div aria-hidden="true" className="h-1 w-10 rounded-full bg-accent" />
          <h2
            id={headingId}
            className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            {title}
          </h2>
          {description && <p className="mt-3 max-w-[60ch] text-lg">{description}</p>}
        </Reveal>
        <div className="mt-10 md:mt-12">{children}</div>
      </Container>
    </section>
  )
}
