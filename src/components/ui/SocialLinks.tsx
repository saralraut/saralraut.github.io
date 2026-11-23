import type { SocialLinks as SocialLinksData } from '../../types/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

const entries = [
  { key: 'github', label: 'GitHub profile', Icon: GithubIcon },
  { key: 'linkedin', label: 'LinkedIn profile', Icon: LinkedinIcon },
] as const

interface SocialLinksProps {
  links: SocialLinksData
  className?: string
}

// Renders an icon link for each profile that has a URL in src/data/profile.ts.
// A missing URL means the icon simply doesn't appear: no dead links.
// Icon-only links have no visible text, so each carries an aria-label.
export default function SocialLinks({ links, className = '' }: SocialLinksProps) {
  const visible = entries.filter(({ key }) => links[key])
  if (visible.length === 0) return null

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {visible.map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={links[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className="grid h-11 w-11 place-items-center rounded-lg border border-edge text-ink-muted transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  )
}
