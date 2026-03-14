import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import styles from './Features.module.css'

const FEATURES: { icon: ReactNode; iconClass: string; title: string; description: string | null }[] = [
  {
    icon: <Icon name="relay" />,
    iconClass: styles.fiRelay,
    title: 'Your Own Server',
    description:
      'A full WebSocket relay on localhost. Use Damus, Amethyst, or any client with it. Your feed, served from your machine.',
  },
  {
    icon: <Icon name="blossom" />,
    iconClass: styles.fiMedia,
    title: 'Blossom Media Backup',
    description:
      'Every image, video, and file from your network gets backed up locally — automatically. SHA-256 verified. Yours forever, even if the original server disappears.',
  },
  {
    icon: <Icon name="target" />,
    iconClass: styles.fiConfig,
    title: 'Human-Friendly Config',
    description: null,
  },
  {
    icon: <Icon name="lock" />,
    iconClass: styles.fiOffline,
    title: 'Offline Mode',
    description:
      'One toggle to go fully offline — disable all outbound relay sync instantly. Your data stays local, no leaks, no connections. Go dark whenever you want.',
  },
  {
    icon: <Icon name="web" />,
    iconClass: styles.fiWot,
    title: 'Web of Trust Sync',
    description:
      'Computes your trust graph from your follow list. Only fetches events from people you actually trust — not the entire network.',
  },
  {
    icon: <Icon name="zap" />,
    iconClass: styles.fiDaemon,
    title: 'Track Anyone',
    description:
      'Pin profiles you care about — their events, media, and activity stay synced and cached on your machine. Browse their media gallery, see stats, all offline.',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>
            Everything you need.<br />Nothing you don't.
          </h2>
          <p>
            nostrito does one thing well: keeps your Nostr data local, trusted,
            and available.
          </p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={`${styles.icon} ${feature.iconClass}`}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              {feature.description ? (
                <p>{feature.description}</p>
              ) : (
                <p>
                  Choose <code>primal</code>. Choose <code>damus</code>. No
                  URLs, no protocols, no copy-pasting strings from docs. You
                  know the name — nostrito handles the rest.
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
