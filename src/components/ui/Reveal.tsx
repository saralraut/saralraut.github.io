import type { ReactNode } from 'react'
import { m } from 'motion/react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Seconds to wait before animating; used to stagger sibling cards slightly */
  delay?: number
}

// Fades and lifts its children into place the first time they scroll into
// view. `once: true` means it never replays, and the -80px margin waits until
// the element is clearly on screen. Visitors who prefer reduced motion get no
// movement: MotionConfig in main.tsx handles that globally.
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  )
}
