import type { ReactNode } from 'react'

const variants = {
  default: 'border-edge bg-surface text-ink-muted',
  // Dashed accent outline: visibly different from established skills
  learning: 'border-dashed border-accent/50 text-accent',
} as const

interface TagProps {
  children: ReactNode
  variant?: keyof typeof variants
}

// A small label for a skill or technology. Used in Skills, Experience and
// (later) the project cards.
export default function Tag({ children, variant = 'default' }: TagProps) {
  return (
    <span
      className={`inline-block rounded-md border px-2.5 py-1 text-sm font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
