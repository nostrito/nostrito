import Container from '@/components/ui/Container'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    title: 'paste your npub',
    description:
      'open nostrito and drop in your public key. it sets up everything — database, relay connections, trust graph.',
  },
  {
    title: 'watch it sync',
    description:
      'nostrito discovers your network, builds your web of trust, and starts pulling events from people you actually follow. track specific profiles to cache their full media history.',
  },
  {
    title: 'use any client',
    description:
      'your favorite nostr app connects to nostrito automatically. your feed with infinite scroll, profile pages with banners and follows — all served from your machine.',
  },
] as const

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>up and running in a minute.</h2>
          <p>no terminal. no config files. just open the app.</p>
        </div>
        <div className={styles.steps}>
          {STEPS.map((step) => (
            <div key={step.title} className={styles.step}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
