import { Mail, MapPin } from 'lucide-react'
import Button from '../components/ui/Button'
import { GithubIcon, LinkedinIcon } from '../components/ui/icons'
import Reveal from '../components/ui/Reveal'
import ResumeButton from '../components/ui/ResumeButton'
import Section from '../components/ui/Section'
import { profile } from '../data/profile'

// No contact form: a form needs a backend (or a third-party service), and a
// non-working form is worse than none. Email is shown as plain, copyable text
// inside the button, which works everywhere. Each link renders only if its
// URL is set in src/data/profile.ts.
export default function Contact() {
  const { email, github, linkedin } = profile.links

  return (
    <Section
      id="contact"
      title="Contact"
      description="I'm open to roles in technical support, IT support, data analytics, and software. Email is the best way to reach me."
      tone="alt"
    >
      <Reveal>
        <div className="flex flex-wrap gap-3">
          {email && (
            <Button href={`mailto:${email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {email}
            </Button>
          )}
          <ResumeButton variant="secondary" />
          {linkedin && (
            <Button href={linkedin} external variant="secondary">
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </Button>
          )}
          {github && (
            <Button href={github} external variant="secondary">
              <GithubIcon className="h-4 w-4" />
              GitHub
            </Button>
          )}
        </div>
        <p className="mt-8 flex items-center gap-2 text-ink">
          <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
          {profile.location}
        </p>
      </Reveal>
    </Section>
  )
}
