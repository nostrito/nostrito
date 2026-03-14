import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import styles from './Architecture.module.css'

export default function Architecture() {
  return (
    <section id="architecture" className={styles.section}>
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>built to be invisible.</h2>
          <p>
            a single rust binary. five async components. one SQLite database.
            runs quietly in the background.
          </p>
        </motion.div>
        <motion.pre
          className={styles.diagram}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
<span className={styles.label}>Nostr Network</span>                          <span className={styles.label}>Your Machine</span>{'\n'}
{'\n'}
{'┌─────────────────┐               ┌──────────────────────────────────┐\n'}
{'│                 │               │        '}<span className={styles.accent}>nostrito daemon</span>{'            │\n'}
{'│  '}<span className={styles.blue}>primal</span>{'         │◄──────────────│                                  │\n'}
{'│  '}<span className={styles.blue}>damus</span>{'          │    sync       │  '}<span className={styles.green}>Sync Engine</span>{'  ──►  '}<span className={styles.purple}>WoT Engine</span>{'   │\n'}
{'│  '}<span className={styles.blue}>nos</span>{'            │               │       │                          │\n'}
{'│  '}<span className={styles.blue}>snort</span>{'          │               │       ▼                          │\n'}
{'│                 │               │  '}<span className={styles.accent}>SQLite</span>{'  ◄──  '}<span className={styles.green}>Blossom Storage</span>{'  │\n'}
{'└─────────────────┘               │       │                          │\n'}
{'                                  │       ▼                          │\n'}
{'                                  │  '}<span className={styles.accent}>Relay Server</span>{'                   │\n'}
{'                                  │  wss://localhost:4869             │\n'}
{'                                  └───────────┬──────────────────────┘\n'}
{'                                              │\n'}
{'                                  ┌───────────▼──────────────────────┐\n'}
{'                                  │  '}<span className={styles.label}>Damus / Amethyst / any client</span>{'   │\n'}
{'                                  └──────────────────────────────────┘'}
        </motion.pre>
      </Container>
    </section>
  )
}
