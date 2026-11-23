import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import Tag from '../components/ui/Tag'
import { profile } from '../data/profile'

// Story on the left, a scannable "at a glance" card on the right. A recruiter
// skimming for 10 seconds gets location and target roles from the card alone.
// On mobile the card stacks below the text.
export default function About() {
  return (
    <Section id="about" title="About" tone="alt">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
        <Reveal>
          <div className="max-w-[65ch] space-y-5 text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-edge bg-surface-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-ink">At a glance</h3>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-sm font-semibold text-ink">Location</dt>
                <dd className="mt-1">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink">Open to</dt>
                <dd>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {profile.openTo.map((role) => (
                      <li key={role}>
                        <Tag>{role}</Tag>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
