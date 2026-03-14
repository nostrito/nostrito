import { useEffect, useState, useCallback } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import styles from './Hero.module.css'

interface Runner {
  id: number
  size: number
  duration: number
}

let nextId = 0

function spawnRunner(): Runner {
  const roll = Math.random()
  let size: number
  if (roll < 0.6) {
    size = 18 + Math.random() * 16 // 18–34px (small)
  } else if (roll < 0.9) {
    size = 36 + Math.random() * 18 // 36–54px (mid)
  } else {
    size = 56 + Math.random() * 24 // 56–80px (big)
  }
  const duration = 12 + Math.random() * 18 // 12–30s
  return { id: nextId++, size, duration }
}

export default function Hero() {
  const [runners, setRunners] = useState<Runner[]>(() => [spawnRunner()])

  const removeRunner = useCallback((id: number) => {
    setRunners(prev => prev.filter(r => r.id !== id))
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // initial delay before first ostrich
    const initialTimeout = setTimeout(() => {
      setRunners([spawnRunner()])
      // then keep spawning at random intervals
      const spawn = () => {
        const delay = 1500 + Math.random() * 3500 // 1.5–5s between spawns
        return setTimeout(() => {
          setRunners(prev => [...prev, spawnRunner()])
          timerId = spawn()
        }, delay)
      }
      let timerId = spawn()
      cleanupRef.current = () => clearTimeout(timerId)
    }, 2500)

    const cleanupRef = { current: () => {} }
    return () => {
      clearTimeout(initialTimeout)
      cleanupRef.current()
    }
  }, [])

  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.tagline}>
          your personal<br />social network.
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.subtitleLead}>a new way to <strong>be</strong> online.</span>
        </p>
        <div className={styles.ctas}>
          <Button variant="secondary" href="#demo">
            <span className={styles.btnIcon}><Icon name="gamepad" size={16} /></span> demo
          </Button>
          <Button variant="primary" href="/download">
            <span className={styles.btnIcon}><Icon name="apple" size={16} /></span> download
          </Button>
        </div>
      </Container>

      <div className={styles.paradeTrack} aria-hidden="true">
        {runners.map(r => (
          <img
            key={r.id}
            src="/assets/nostr-running.gif"
            alt=""
            className={styles.runner}
            style={{ width: r.size, animationDuration: `${r.duration}s` }}
            onAnimationEnd={() => removeRunner(r.id)}
          />
        ))}
      </div>
    </section>
  )
}
