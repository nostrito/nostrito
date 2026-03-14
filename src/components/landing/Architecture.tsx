import Container from '@/components/ui/Container'
import styles from './Architecture.module.css'

export default function Architecture() {
  return (
    <section id="architecture" className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>built to be invisible.</h2>
          <p>
            a single rust binary. five async components. one SQLite database.
            runs quietly in the background.
          </p>
        </div>
        <pre className={styles.diagram}>
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
        </pre>
      </Container>
    </section>
  )
}
