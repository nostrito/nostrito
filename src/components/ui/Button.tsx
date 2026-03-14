import type { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className,
  onClick,
}: ButtonProps) {
  const classNames = [
    styles.btn,
    variant === 'primary' ? styles.btnPrimary : styles.btnSecondary,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classNames}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}
