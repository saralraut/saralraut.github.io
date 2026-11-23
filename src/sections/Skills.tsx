import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import Tag from '../components/ui/Tag'
import { currentlyLearning, skillGroups } from '../data/skills'

// Plain tags, deliberately no progress bars or percentages: self-rated bars
// ("Python 85%") can't be defended in an interview, while a list of tools you
// actually use can. Technologies still being learned sit in their own block.
export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="What I work with, grouped by area. Technologies I'm still building experience with are listed separately."
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <li key={group.title}>
            {/* Small stagger, capped so late cards never feel slow */}
            <Reveal delay={Math.min(index, 3) * 0.06} className="h-full">
              <div className="h-full rounded-xl border border-edge bg-surface-card p-6">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {currentlyLearning.length > 0 && (
        <Reveal className="mt-8">
          <div className="rounded-xl border border-dashed border-accent/40 p-6">
            <h3 className="text-lg font-semibold text-ink">Currently learning</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {currentlyLearning.map((skill) => (
                <li key={skill}>
                  <Tag variant="learning">{skill}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}
    </Section>
  )
}
