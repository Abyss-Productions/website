import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Action.module.css'

type Variant = 'solid' | 'outline' | 'quiet'

interface Shared {
  children: ReactNode
  variant?: Variant
  /** Adds a trailing arrow that nudges on hover. */
  arrow?: boolean
  className?: string
}

interface AsLink extends Shared {
  href: string
  external?: boolean
}

type AsButton = Shared & ButtonHTMLAttributes<HTMLButtonElement>

function classes(variant: Variant, className?: string) {
  return [styles.action, variant !== 'outline' && styles[variant], className]
    .filter(Boolean)
    .join(' ')
}

const Arrow = () => (
  <svg className={styles.arrow} width="13" height="9" viewBox="0 0 13 9" aria-hidden="true">
    <path
      d="M0 4.5h11M7.5 1l3.5 3.5L7.5 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
)

/** Anchor styled as an action. Set `external` for links that leave the site. */
export function ActionLink({ children, href, external, variant = 'outline', arrow, className }: AsLink) {
  return (
    <a
      href={href}
      className={classes(variant, className)}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
      {arrow && <Arrow />}
    </a>
  )
}

/** Button styled as an action, for anything that does not navigate. */
export function ActionButton({ children, variant = 'outline', arrow, className, ...rest }: AsButton) {
  return (
    <button className={classes(variant, className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  )
}
