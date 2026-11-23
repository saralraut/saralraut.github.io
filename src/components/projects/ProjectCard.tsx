import { ArrowRight, BrainCircuit, ChartColumn, Layers } from 'lucide-react'
import type { ComponentType } from 'react'
import { Link } from 'react-router'
import { hasDetailPage } from '../../lib/projects'
import type { Project, ProjectCategory } from '../../types/portfolio'
import Tag from '../ui/Tag'
import ProjectLinks from './ProjectLinks'

// Placeholder art for projects with no real screenshot yet: a calm panel with
// the category's icon. It deliberately shows no fake UI or fake charts.
const categoryIcons: Record<ProjectCategory, ComponentType<{ className?: string }>> = {
  'Data Analytics': ChartColumn,
  'AI / ML': BrainCircuit,
  'Full Stack': Layers,
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, category, year, summary, tags, image } = project
  const Icon = categoryIcons[category]
  const detailPage = hasDetailPage(project)

  return (
    // `group` lets the image react to a hover anywhere on the card.
    // motion-safe: the lift only happens if the visitor allows motion.
    // overflow-hidden rounds the image corners, but it also clips anything
    // drawn outside the card, which is why the keyboard focus ring (on the
    // link below) is drawn INSIDE the card edge with a negative offset.
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-edge bg-surface-card transition duration-200 hover:border-accent/50 motion-safe:hover:-translate-y-1">
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="h-44 w-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="grid h-44 place-items-center border-b border-edge bg-surface"
        >
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-surface-card text-accent ring-1 ring-edge transition-colors duration-200 group-hover:ring-accent/50">
            <Icon className="h-8 w-8" />
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-accent">
          {category}
          {year ? <span className="text-ink-muted"> · {year}</span> : null}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3">{summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 pt-6">
          <ProjectLinks project={project} />
          {detailPage && (
            // Stretched link: this <a> is deliberately NOT positioned, so its
            // ::after stretches to the nearest positioned ancestor (the
            // `relative` article) and the whole card becomes clickable. The
            // GitHub / demo / post links are lifted above it with z-10 in
            // ProjectLinks, so they still work on their own.
            <Link
              to={`/projects/${project.slug}`}
              aria-label={`View details: ${title}`}
              className="ml-auto inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-accent"
            >
              View Details
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
