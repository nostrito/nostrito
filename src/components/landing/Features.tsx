import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
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
    title: 'kith and kin',
    description:
      'check the feeds of the people you decided to follow and the people they follow by default — not the entire network. explore global mode if bored.',
  },
  {
    icon: <Icon name="zap" />,
    iconClass: styles.fiDaemon,
    title: 'track anyone',
    description:
      'pin profiles you care about — their posts, articles and media stay synced on nostrito. also efficiently block!',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>
            everything you need.<br />nothing you don't.
          </h2>
          <p>
            nostrito does one thing well: keeps your social data local, trusted,
            and available.
          </p>
        </motion.div>
        <div className={styles.grid}>
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
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
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
