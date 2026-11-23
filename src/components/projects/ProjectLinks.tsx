import { ExternalLink } from 'lucide-react'
import type { Project } from '../../types/portfolio'
import { GithubIcon, LinkedinIcon } from '../ui/icons'

interface ProjectLinksProps {
  project: Pick<Project, 'title' | 'repoUrl' | 'demoUrl' | 'postUrl'>
}

const linkClass =
  'inline-flex min-h-11 items-center gap-2 rounded-md px-1 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-accent'

// The small external links on a card: GitHub, live demo, LinkedIn post. Each
// one renders only if its URL exists in the data, so there are never dead
// links. The project title is part of the accessible name, because several
// cards on one page would otherwise all say just "GitHub".
export default function ProjectLinks({ project }: ProjectLinksProps) {
  const { title, repoUrl, demoUrl, postUrl } = project
  if (!repoUrl && !demoUrl && !postUrl) return null

  return (
    // relative z-10: sits above the card's stretched "View Details" link
    <ul className="relative z-10 flex flex-wrap items-center gap-x-4">
      {repoUrl && (
        <li>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} on GitHub (opens in a new tab)`}
            className={linkClass}
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </li>
      )}
      {demoUrl && (
        <li>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo (opens in a new tab)`}
            className={linkClass}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live demo
          </a>
        </li>
      )}
      {postUrl && (
        <li>
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} LinkedIn post (opens in a new tab)`}
            className={linkClass}
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn post
          </a>
        </li>
      )}
    </ul>
  )
}
