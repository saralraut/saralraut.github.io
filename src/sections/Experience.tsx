import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import Tag from '../components/ui/Tag'
import { experience } from '../data/experience'

// A vertical timeline on md+ (a thin line with a dot per role) that collapses
// to simple stacked cards on mobile. Accomplishments render only when the data
// has them: no filler. The dot's ring colour matches this section's
// background (surface-alt) so the dot appears "cut out" of the line.
export default function Experience() {
  return (
    <Section id="experience" title="Experience" tone="alt">
      <ol className="space-y-8 md:ml-2 md:border-l md:border-edge">
        {experience.map((job) => (
          <li key={job.id} className="relative md:pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-9 hidden h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface-alt md:block"
            />
            <Reveal>
              <article className="rounded-xl border border-edge bg-surface-card p-6 md:p-8">
                <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{job.title}</h3>
                    <p className="text-ink">
                      {job.organization}
                      {job.location ? ` · ${job.location}` : ''}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-medium">{job.period}</p>
                </header>

                <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-ink-muted">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {job.accomplishments && job.accomplishments.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {job.accomplishments.map((item) => (
                      <li key={item} className="border-l-2 border-accent pl-4 text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {job.technologies && job.technologies.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <li key={tech}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
