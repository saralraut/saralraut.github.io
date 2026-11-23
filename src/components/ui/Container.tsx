import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

// Centres content and caps its width so every section lines up on the same
// left edge. Side padding grows from 24px (mobile) to 32px (md and up).
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1100px] px-6 md:px-8 ${className}`}>{children}</div>
  )
}
