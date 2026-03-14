import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import styles from './Gossip.module.css'

const GOZZIP_FEATURES: { icon: ReactNode; text: string }[] = [
  {
    icon: <Icon name="onion" />,
    text: 'tor hidden service — share your relay with trusted friends via .onion address',
  },
  {
    icon: <Icon name="handshake" />,
    text: "storage pacts — bilateral agreements with WoT peers to store each other's data",
  },
  {
    icon: <Icon name="heartbeat" />,
    text: 'proof of life — detect if missing events are a discovery issue or something more serious',
  },
  {
    icon: <Icon name="refresh" />,
    text: 'tiered retrieval — local → peers → gozzip → relay fallback',
  },
]

export default function Gossip() {
  return (
    <section id="gossip" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>
              future: <em className={styles.gradientText}><a href="https://gozzip.org" target="_blank" rel="noopener noreferrer">gozzip protocol</a></em>
            </h2>
            <p>
              beyond a personal relay. nostrito's roadmap includes
              trust-weighted P2P gozzip — turning your relay into a node in a
              resilient network.
            </p>
            <ul className={styles.features}>
              {GOZZIP_FEATURES.map((feature) => (
                <li key={feature.text}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <pre className={styles.visual}>
{'  '}<span className={styles.purple}>you (nostrito)</span>{'\n'}
{'       │\n'}
{'       ├──── '}<span className={styles.green}>alice (pact peer)</span>{'\n'}
{'       │      stores your events\n'}
{'       │      you store hers\n'}
{'       │\n'}
{'       ├──── '}<span className={styles.blue}>bob (pact peer)</span>{'\n'}
{'       │      mutual backup\n'}
{'       │      gozzip bridge\n'}
{'       │\n'}
{'       └──── '}<span className={styles.accent}>public relay</span>{'\n'}
{'              fallback only\n'}
{'              used <5% of reads\n'}
{'\n'}
{'  your data lives in your\n'}
{'  '}<span className={styles.purple}>trust network</span>{', not on\n'}
{"  someone else's server."}
          </pre>
        </div>
      </Container>
    </section>
  )
}
