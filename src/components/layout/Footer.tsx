import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import styles from './Footer.module.css'

const FOOTER_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/nostrito/nostrito',
    external: true,
  },
  {
    label: 'Docs',
    href: '/docs',
    external: false,
  },
  {
    label: 'Spec',
    href: 'https://github.com/nostrito/nostrito/blob/main/SPEC.md',
    external: true,
  },
  {
    label: 'MIT License',
    href: 'https://github.com/nostrito/nostrito/blob/main/LICENSE',
    external: true,
  },
] as const

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerLinks}>
          {FOOTER_LINKS.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ) : (
              <Link key={label} to={href}>
                {label}
              </Link>
            ),
          )}
        </div>
        <p className={styles.tagline}>
          <img
            src="/assets/nostrito-white.svg"
            alt="nostrito"
            className={styles.taglineLogo}
          />
          nostrito — your relay, your data, your rules.
        </p>
      </Container>
    </footer>
  )
}
