import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import styles from './Nav.module.css'

const ANCHOR_LINKS = [
  { label: 'features', href: '#features' },
  { label: 'how it works', href: '#how' },
  { label: 'demo', href: '#demo' },
  { label: 'architecture', href: '#architecture' },
  { label: 'gozzip', href: '#gossip' },
] as const

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <img
            src="/assets/nostrito-white.svg"
            alt="nostrito"
            className={styles.logoImg}
          />
          nostrito
        </Link>
        <ul className={styles.navLinks}>
          {ANCHOR_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <Link to="/docs">docs</Link>
          </li>
          <li>
            <Link to="/media">media kit</Link>
          </li>
          <li>
            <a
              href="https://github.com/nostrito/nostrito"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navCta}
            >
              github &rarr;
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  )
}
