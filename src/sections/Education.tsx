import { GraduationCap } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import { education } from '../data/education'

// Two equal cards side by side on md+, stacked on mobile. Period, GPA and
// highlights render only when the data has them.
export default function Education() {
  return (
    <Section id="education" title="Education" tone="alt">
      <ul className="grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={index * 0.08} className="h-full">
              <article className="h-full rounded-xl border border-edge bg-surface-card p-6 md:p-8">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-accent ring-1 ring-edge"
                >
                  <GraduationCap className="h-5 w-5" />
                </span>
                {item.period && <p className="mt-5 text-sm font-medium">{item.period}</p>}
                <h3 className="mt-1 text-xl font-semibold text-ink">{item.program}</h3>
                <p className="mt-1 text-ink">
                  {item.institution}
                  {item.gpa ? <span className="text-ink-muted"> · GPA {item.gpa}</span> : null}
                </p>
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-ink-muted">
                    {item.highlights.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
