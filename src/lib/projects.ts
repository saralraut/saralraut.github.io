import { projects } from '../data/projects'
import type { Project } from '../types/portfolio'

// A project only gets a detail page (and a "View Details" link) once it has
// real content to show. Writing `highlights` or `details` in the data file is
// all it takes to switch one on, so no page ever renders as an empty shell.
export function hasDetailPage(project: Project): boolean {
  return Boolean(project.highlights?.length || project.details)
}

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
