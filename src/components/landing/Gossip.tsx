import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import styles from './Gossip.module.css'

const GOSSIP_FEATURES: { icon: ReactNode; text: string }[] = [
  {
    icon: <Icon name="onion" />,
    text: 'Tor hidden service — share your relay with trusted friends via .onion address',
  },
  {
    icon: <Icon name="handshake" />,
    text: "Storage pacts — bilateral agreements with WoT peers to store each other's data",
  },
  {
    icon: <Icon name="heartbeat" />,
    text: 'Proof of life — detect if missing events are a discovery issue or something more serious',
  },
  {
    icon: <Icon name="refresh" />,
    text: 'Tiered retrieval — local → peers → gossip → relay fallback',
  },
]

export default function Gossip() {
  return (
    <section id="gossip" className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>
              Future: <em className={styles.gradientText}>Gossip Protocol</em>
            </h2>
            <p>
              Beyond a personal relay. nostrito's roadmap includes
              trust-weighted P2P gossip — turning your relay into a node in a
              resilient network.
            </p>
            <ul className={styles.features}>
              {GOSSIP_FEATURES.map((feature) => (
                <li key={feature.text}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <pre className={styles.visual}>
{'  '}<span className={styles.purple}>You (nostrito)</span>{'\n'}
{'       │\n'}
{'       ├──── '}<span className={styles.green}>Alice (pact peer)</span>{'\n'}
{'       │      stores your events\n'}
{'       │      you store hers\n'}
{'       │\n'}
{'       ├──── '}<span className={styles.blue}>Bob (pact peer)</span>{'\n'}
{'       │      mutual backup\n'}
{'       │      gossip bridge\n'}
{'       │\n'}
{'       └──── '}<span className={styles.accent}>Public Relay</span>{'\n'}
{'              fallback only\n'}
{'              used <5% of reads\n'}
{'\n'}
{'  Your data lives in your\n'}
{'  '}<span className={styles.purple}>trust network</span>{', not on\n'}
{"  someone else's server."}
          </pre>
        </div>
      </Container>
    </section>
  )
}
