import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { GithubIcon, LinkedinIcon } from '../components/ui/icons'
import Tag from '../components/ui/Tag'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { findProject, hasDetailPage } from '../lib/projects'
import type { ProjectDetails } from '../types/portfolio'
import NotFoundPage from './NotFoundPage'

// The write-up sections, in reading order. A section appears only if the
// project's `details` has text for it, so unfinished projects never show
// empty headings or filler.
const detailSections: { key: keyof ProjectDetails; title: string }[] = [
  { key: 'problem', title: 'The problem' },
  { key: 'approach', title: 'Approach' },
  { key: 'implementation', title: 'Implementation' },
  { key: 'results', title: 'Results' },
  { key: 'lessons', title: 'Lessons learned' },
]

// ONE template for every project. The :slug in the URL picks the data. An
// unknown slug, or a project with nothing to show yet, gets the 404 page.
export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = findProject(slug)
  const visible = project && hasDetailPage(project) ? project : undefined

  useDocumentTitle(visible?.title)

  if (!visible) return <NotFoundPage />

  const { title, category, year, summary, tags, repoUrl, demoUrl, postUrl, image, highlights, details } =
    visible

  return (
    <article className="py-12 md:py-16">
      {/* Container keeps the left edge aligned with the navbar logo; the inner
          div limits the reading width to ~768px (about 70 characters per line).
          Passing max-w-3xl to Container itself does not work: it would fight
          the Container's own max-w-[1100px] and lose. */}
      <Container>
        <div className="max-w-3xl">
        <Link
          to="/#projects"
          className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-ink-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        <header className="mt-6">
          <p className="text-sm font-medium text-accent">
            {category}
            {year ? <span className="text-ink-muted"> · {year}</span> : null}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg">{summary}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>

          {(repoUrl || demoUrl || postUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {repoUrl && (
                <Button href={repoUrl} external>
                  <GithubIcon className="h-4 w-4" />
                  View on GitHub
                </Button>
              )}
              {demoUrl && (
                <Button href={demoUrl} external variant="secondary">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live demo
                </Button>
              )}
              {postUrl && (
                <Button href={postUrl} external variant="secondary">
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn post
                </Button>
              )}
            </div>
          )}
        </header>

        {image && (
          <figure className="mt-10">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full rounded-xl border border-edge"
            />
            {image.caption && (
              <figcaption className="mt-3 text-sm">{image.caption}</figcaption>
            )}
          </figure>
        )}

        {highlights && highlights.length > 0 && (
          <section aria-labelledby="highlights-heading" className="mt-12">
            <h2 id="highlights-heading" className="text-2xl font-bold text-ink">
              Highlights
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-lg marker:text-ink-muted">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {detailSections.map(({ key, title: sectionTitle }) => {
          const text = details?.[key]
          if (!text) return null
          return (
            <section key={key} aria-labelledby={`${key}-heading`} className="mt-12">
              <h2 id={`${key}-heading`} className="text-2xl font-bold text-ink">
                {sectionTitle}
              </h2>
              <p className="mt-4 text-lg">{text}</p>
            </section>
          )
        })}
        </div>
      </Container>
    </article>
  )
}
