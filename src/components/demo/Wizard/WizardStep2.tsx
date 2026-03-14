import { type ReactNode, useState } from 'react'
import Icon from '@/components/ui/Icon'
import styles from './Wizard.module.css'

interface RelayInfo {
  name: string
  url: string
  icon: ReactNode
  defaultOn: boolean
}

const RELAYS: RelayInfo[] = [
  { name: 'primal', url: 'wss://relay.primal.net', icon: <Icon name="zap" size={14} />, defaultOn: true },
  { name: 'damus', url: 'wss://relay.damus.io', icon: <Icon name="circle" size={14} color="#a855f7" />, defaultOn: true },
  { name: 'nos', url: 'wss://relay.nos.social', icon: <Icon name="circle" size={14} color="#3b82f6" />, defaultOn: false },
  { name: 'snort', url: 'wss://relay.snort.social', icon: <Icon name="bee" size={14} />, defaultOn: true },
  { name: 'coracle', url: 'wss://relay.coracle.social', icon: <Icon name="shell" size={14} />, defaultOn: false },
  { name: 'nostr.wine', url: 'wss://nostr.wine', icon: <Icon name="wine" size={14} />, defaultOn: false },
  { name: 'amethyst', url: 'wss://relay.amethyst.social', icon: <Icon name="gem" size={14} />, defaultOn: true },
  { name: 'yakihonne', url: 'wss://relay.yakihonne.com', icon: <Icon name="honey" size={14} />, defaultOn: false },
]

export default function WizardStep2() {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(RELAYS.filter((r) => r.defaultOn).map((r) => r.name))
  )

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(name)) {
        next.delete(name)
      } else {
        next.add(name)
      }
      return next
    })
  }

  return (
    <>
      <h3 className={styles.stepTitle}>Connect relays</h3>
      <p className={styles.stepSubtitle}>
        Pick by name. We handle the rest.
      </p>
      <div className={styles.relayGrid}>
        {RELAYS.map((relay) => (
          <div
            key={relay.name}
            className={`${styles.relayCard} ${selected.has(relay.name) ? styles.relayCardOn : ''}`}
            onClick={() => toggle(relay.name)}
          >
            <div className={styles.rcIcon}>{relay.icon}</div>
            <div>
              <div className={styles.rcName}>{relay.name}</div>
              <div className={styles.rcUrl}>{relay.url}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
