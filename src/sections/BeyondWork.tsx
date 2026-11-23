import { BookOpen, Dumbbell, Flower2, Music } from 'lucide-react'
import type { ComponentType } from 'react'
import Reveal from '../components/ui/Reveal'
import Section from '../components/ui/Section'
import VideoCard from '../components/ui/VideoCard'
import { interests, videos } from '../data/interests'
import type { InterestIcon } from '../types/portfolio'

const icons: Record<InterestIcon, ComponentType<{ className?: string }>> = {
  music: Music,
  exercise: Dumbbell,
  meditation: Flower2,
  philosophy: BookOpen,
}

// The personal side of the portfolio. It sits after the professional
// sections on purpose: a recruiter reads the work first, then meets the
// person. Everything comes from src/data/interests.ts.
export default function BeyondWork() {
  return (
    <Section
      id="beyond-work"
      title="Beyond Work"
      description="What keeps me energized and grounded outside of work."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {interests.map((item, index) => {
          const Icon = icons[item.icon]
          return (
            <li key={item.title}>
              <Reveal delay={index * 0.06} className="h-full">
                <div className="h-full rounded-xl border border-edge bg-surface-card p-6">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-accent ring-1 ring-edge"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2">{item.description}</p>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>

      {videos.length > 0 && (
        <div className="mt-14">
          <Reveal>
            <h3 className="text-2xl font-bold text-ink">Videos</h3>
            <p className="mt-2 max-w-[60ch]">My videos on meditation, philosophy, and life.</p>
          </Reveal>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {videos.map((video, index) => (
              <li key={video.id}>
                <Reveal delay={(index % 2) * 0.08} className="h-full">
                  <VideoCard video={video} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}
