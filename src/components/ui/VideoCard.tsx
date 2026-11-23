import { ExternalLink, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Video, VideoPlatform } from '../../types/portfolio'

const platformNames: Record<VideoPlatform, string> = {
  youtube: 'YouTube',
  instagram: 'Instagram',
  tiktok: 'TikTok',
}

// One card per video, two behaviours:
//  - YouTube with a youtubeId: "click to load". The page first shows a plain
//    panel with a play button. Only when the visitor clicks does the real
//    player (an iframe) load. This keeps the page fast and avoids sending
//    visitors' data to YouTube just for opening the portfolio. The player
//    uses youtube-nocookie.com, YouTube's privacy-enhanced mode.
//  - Everything else (Instagram, TikTok): a link card that opens the video on
//    its own platform. Their embeds load heavy tracking scripts, so linking
//    is the lighter, safer choice.
export default function VideoCard({ video }: { video: Video }) {
  const { platform, title, url, youtubeId } = video
  const name = platformNames[platform]
  const [playing, setPlaying] = useState(false)
  const frameRef = useRef<HTMLIFrameElement>(null)

  // The play button disappears when clicked, so move keyboard focus into the
  // player; otherwise focus would fall back to the top of the page.
  useEffect(() => {
    if (playing) frameRef.current?.focus()
  }, [playing])

  const canEmbed = platform === 'youtube' && Boolean(youtubeId)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-edge bg-surface-card">
      {canEmbed && playing ? (
        <iframe
          ref={frameRef}
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : canEmbed ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group grid aspect-video w-full place-items-center bg-surface focus-visible:outline-offset-[-4px]"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-surface transition duration-200 group-hover:brightness-110 motion-safe:group-hover:scale-105">
            <Play className="h-7 w-7 translate-x-0.5" aria-hidden="true" />
          </span>
        </button>
      ) : (
        // This big panel is a mouse convenience only: the text link below goes
        // to the same place, so keyboard and screen-reader users skip this one
        // instead of meeting two identical links in a row.
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="group grid aspect-video w-full place-items-center bg-surface"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-surface-card text-accent ring-1 ring-edge transition-colors duration-200 group-hover:ring-accent/60">
            <Play className="h-7 w-7 translate-x-0.5" aria-hidden="true" />
          </span>
        </a>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-medium text-accent">{name}</p>
        <h4 className="mt-1 text-lg font-semibold text-ink">{title}</h4>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch on ${name}: ${title} (opens in a new tab)`}
          className="mt-auto inline-flex min-h-11 items-center gap-2 pt-3 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Watch on {name}
        </a>
      </div>
    </article>
  )
}
