import Container from '@/components/ui/Container'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    title: 'Paste your npub',
    description:
      'Open nostrito and drop in your public key. It sets up everything — database, relay connections, trust graph.',
  },
  {
    title: 'Watch it sync',
    description:
      'nostrito discovers your network, builds your Web of Trust, and starts pulling events from people you actually follow. Track specific profiles to cache their full media history.',
  },
  {
    title: 'Use any client',
    description:
      'Your favorite Nostr app connects to nostrito automatically. Your feed with infinite scroll, profile pages with banners and follows — all served from your machine.',
  },
] as const

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Up and running in a minute.</h2>
          <p>No terminal. No config files. Just open the app.</p>
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
