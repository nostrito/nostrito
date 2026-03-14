import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '@/components/ui/Container'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // close menu on navigation
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

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

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          <li>
            <Link to="/docs">docs</Link>
          </li>
          <li>
            <Link to="/download" className={styles.navCta}>
              download &rarr;
            </Link>
          </li>
        </ul>

        {/* Hamburger button */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </Container>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          <li><Link to="/">home</Link></li>
          <li><Link to="/docs">docs</Link></li>
          <li><Link to="/download" className={styles.drawerCta}>download</Link></li>
        </ul>
        <img
          src="/assets/nostrito-white.svg"
          alt="nostrito"
          className={styles.drawerLogo}
        />
      </div>
    </nav>
  )
}
