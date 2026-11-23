import ProjectCard from '../components/projects/ProjectCard'
import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import { projects } from '../data/projects'

// Maps the data array onto cards. Adding a project means adding one object in
// src/data/projects.ts; nothing here changes. Two columns (not three) so that
// four projects form a balanced 2x2 and each card has room to breathe.
export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Data, machine learning, and full-stack work. Cards link to details and code where available."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Reveal delay={(index % 2) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
