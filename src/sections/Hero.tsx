import { ArrowDown } from 'lucide-react'
import { m } from 'motion/react'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import ResumeButton from '../components/ui/ResumeButton'
import SocialLinks from '../components/ui/SocialLinks'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    // `isolate` creates its own stacking context, so the -z-10 background
    // below sits behind the text but never behind the page itself.
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      {/* Decorative background: dot grid + two soft, low-opacity glows.
          aria-hidden because it carries no information. The vertical mask
          fades it out at the top and bottom, so the glows never end in a
          hard edge against the navbar or the next section. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,#000_25%,#000_75%,transparent)]"
      >
        <div className="bg-dot-grid absolute inset-0" />
        <div className="absolute -right-24 top-[8%] h-[28rem] w-[28rem] rounded-full bg-accent-2/15 blur-3xl" />
        <div className="absolute bottom-0 left-[10%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container className="py-20">
        {/* One gentle fade-up on load. MotionConfig (in main.tsx) turns the
            movement off automatically for visitors who prefer reduced motion. */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* The page's single <h1>: name as a label, headline as the
              dominant text. Screen readers read them as one heading. */}
          <h1>
            <span className="block text-lg font-semibold text-accent">{profile.name}</span>
            <span className="mt-4 block max-w-3xl text-balance text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[4rem]">
              {profile.headline}
            </span>
          </h1>

          <p className="mt-6 max-w-[60ch] text-lg">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button to="/#projects">
              Explore My Work
              <ArrowDown className="h-4 w-4" />
            </Button>
            <ResumeButton variant="secondary" />
            <SocialLinks links={profile.links} className="sm:ml-2" />
          </div>
        </m.div>
      </Container>
    </section>
  )
}
