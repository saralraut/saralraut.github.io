import type { ReactNode } from 'react'
import { Link } from 'react-router'

const variants = {
  primary: 'bg-accent text-surface hover:brightness-110',
  secondary: 'border border-edge text-ink hover:border-accent hover:text-accent',
} as const

const sizes = {
  md: 'min-h-11 px-5', // 44px tall: comfortable touch target
  sm: 'min-h-10 px-4',
} as const

export type ButtonVariant = keyof typeof variants
export type ButtonSize = keyof typeof sizes

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

/** Navigates inside the app (including to a #section) via the router. */
interface RouterButtonProps extends BaseProps {
  to: string
}

/** A plain link: files such as the resume PDF, or other websites. */
interface AnchorButtonProps extends BaseProps {
  href: string
  /** `true` downloads under the file's own name; a string sets the saved file name */
  download?: boolean | string
  /** Opens in a new tab (safely) for links that leave this site */
  external?: boolean
}

// One button look, two behaviours. A button that navigates is semantically a
// link, so this renders <a> (never <button>) in both cases, which keeps
// keyboard and screen-reader behaviour correct.
export default function Button(props: RouterButtonProps | AnchorButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition duration-200 ${sizes[size]} ${variants[variant]} ${className}`

  if ('to' in props) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={props.href}
      download={props.download}
      {...(props.external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={classes}
    >
      {children}
      {props.external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
