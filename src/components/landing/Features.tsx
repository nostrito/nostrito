import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import styles from './Features.module.css'

const FEATURES: { icon: ReactNode; iconClass: string; title: string; description: string | null }[] = [
  {
    icon: <Icon name="relay" />,
    iconClass: styles.fiRelay,
    title: 'your own server',
    description:
      'fully local, everything happens in your computer. lightweight and customizable. keep it simple, or make it difficult as you want.',
  },
  {
    icon: <Icon name="blossom" />,
    iconClass: styles.fiMedia,
    title: 'media backup',
    description:
      'every image, video, and file that you post gets backed up locally — automatically. yours forever, even if the original server disappears.',
  },
  {
    icon: <Icon name="target" />,
    iconClass: styles.fiConfig,
    title: 'human-friendly config',
    description:
      'choose social network clients by name, and connect with your friends\' social networks via link. you know the name — nostrito handles the rest.',
  },
  {
    icon: <Icon name="lock" />,
    iconClass: styles.fiOffline,
    title: 'offline mode',
    description:
      'one toggle to go fully offline — disable all communications instantly. your data stays local, no leaks, no connections. go dark whenever you want.',
  },
  {
    icon: <Icon name="web" />,
    iconClass: styles.fiWot,
    title: 'web of trust sync',
    description:
      'computes your trust graph from your follow list. only fetches events from people you actually trust — not the entire network.',
  },
  {
    icon: <Icon name="zap" />,
    iconClass: styles.fiDaemon,
    title: 'track anyone',
    description:
      'pin profiles you care about — their events, media, and activity stay synced and cached on your machine. browse their media gallery, see stats, all offline.',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>
            everything you need.<br />nothing you don't.
          </h2>
          <p>
            nostrito does one thing well: keeps your social data local, trusted,
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
                  choose <code>primal</code>. choose <code>damus</code>. no
                  URLs, no protocols, no copy-pasting strings from docs. you
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
