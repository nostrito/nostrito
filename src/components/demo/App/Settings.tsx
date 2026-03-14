import { useState, type ReactNode } from 'react'
import Icon from '@/components/ui/Icon'
import styles from './Settings.module.css'

type SettingsTab =
  | 'identity'
  | 'relays'
  | 'yourstorage'
  | 'othersstorage'
  | 'wot'
  | 'advanced'

const TABS: { label: string; value: SettingsTab }[] = [
  { label: 'Identity', value: 'identity' },
  { label: 'Relays', value: 'relays' },
  { label: 'Your Storage', value: 'yourstorage' },
  { label: "Others' Storage", value: 'othersstorage' },
  { label: 'WoT', value: 'wot' },
  { label: 'Advanced', value: 'advanced' },
]

interface RelayData {
  name: string
  url: string
  icon: ReactNode
  defaultOn: boolean
}

const RELAYS: RelayData[] = [
  { name: 'primal', url: 'wss://relay.primal.net', icon: <Icon name="zap" size={14} />, defaultOn: true },
  { name: 'damus', url: 'wss://relay.damus.io', icon: <Icon name="circle" size={14} color="#a855f7" />, defaultOn: true },
  { name: 'nos', url: 'wss://relay.nos.social', icon: <Icon name="circle" size={14} color="#3b82f6" />, defaultOn: false },
  { name: 'snort', url: 'wss://relay.snort.social', icon: <Icon name="bee" size={14} />, defaultOn: true },
  { name: 'coracle', url: 'wss://relay.coracle.social', icon: <Icon name="shell" size={14} />, defaultOn: false },
  { name: 'nostr.wine', url: 'wss://nostr.wine', icon: <Icon name="wine" size={14} />, defaultOn: false },
  { name: 'amethyst', url: 'wss://relay.amethyst.social', icon: <Icon name="gem" size={14} />, defaultOn: true },
  { name: 'yakihonne', url: 'wss://relay.yakihonne.com', icon: <Icon name="honey" size={14} />, defaultOn: false },
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('identity')

  // Relay toggles
  const [relayState, setRelayState] = useState<Record<string, boolean>>(
    Object.fromEntries(RELAYS.map((r) => [r.name, r.defaultOn]))
  )

  // Your Storage toggles
  const [yourKinds, setYourKinds] = useState<Record<string, boolean>>({
    Notes: true,
    Contacts: true,
    DMs: true,
    Reactions: true,
    Reposts: true,
    Zaps: true,
    'Long-form': true,
    Media: true,
  })

  // Others' Storage
  const [depthPills, setDepthPills] = useState<Record<string, boolean>>({
    '1 hop': true,
    '2 hops': true,
    '3 hops': false,
  })
  const [othersQuota, setOthersQuota] = useState(5)
  const [othersKinds, setOthersKinds] = useState<Record<string, boolean>>({
    Notes: true,
    'Long-form': true,
    Reactions: true,
    Reposts: true,
    Zaps: true,
    DMs: false,
    Media: true,
    Audio: false,
  })

  // WoT settings
  const [wotDepth, setWotDepth] = useState(3)
  const [wotInterval, setWotInterval] = useState('24h')

  // Advanced
  const [autoStart, setAutoStart] = useState(true)
  const [logLevel, setLogLevel] = useState('info')

  const toggleRelay = (name: string) => {
    setRelayState((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const toggleYourKind = (kind: string) => {
    setYourKinds((prev) => ({ ...prev, [kind]: !prev[kind] }))
  }

  const toggleDepthPill = (pill: string) => {
    setDepthPills((prev) => ({ ...prev, [pill]: !prev[pill] }))
  }

  const toggleOthersKind = (kind: string) => {
    setOthersKinds((prev) => ({ ...prev, [kind]: !prev[kind] }))
  }

  return (
    <>
      <div className={styles.settingsTabs}>
        {TABS.map((tab) => (
          <button
            key={tab.value}
            className={`${styles.tabBtn} ${activeTab === tab.value ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Identity */}
      <div
        className={`${styles.settingsPanel} ${activeTab === 'identity' ? styles.settingsPanelActive : ''}`}
      >
        <div className={styles.sLabel}>Public Key</div>
        <div className={styles.sField}>
          <input
            type="text"
            defaultValue="npub1fabri3k7x9d2c8qy5m..."
            readOnly
            style={{ opacity: 0.7 }}
          />
          <button
            className={`${styles.sFieldBtn} ${styles.sFieldBtnDisabled}`}
            disabled
          >
            Change npub
          </button>
        </div>

        <div className={styles.sLabel}>Signing Mode</div>
        <div className={styles.signingModeBox}>
          <div className={styles.signingModeTitle}><Icon name="lock" size={14} /> Read-only mode</div>
          <div className={styles.signingModeDesc}>
            DMs disabled. Connect a signer to unlock.
          </div>
        </div>

        <div className={styles.sLabel}>Connect Signer</div>
        <div className={styles.signerConnectList}>
          <div className={`${styles.sField} ${styles.sFieldClickable}`}>
            <span className={styles.sFieldLabel}><Icon name="key" size={14} /> Paste nsec</span>
            <span className={styles.sFieldMeta}>Full access</span>
          </div>
          <div className={`${styles.sField} ${styles.sFieldClickable}`}>
            <span className={styles.sFieldLabel}><Icon name="castle" size={14} /> NBunker</span>
            <span className={styles.sFieldMeta}>Remote signer</span>
          </div>
          <div className={`${styles.sField} ${styles.sFieldClickable}`}>
            <span className={styles.sFieldLabel}><Icon name="plug" size={14} /> Nostr Connect</span>
            <span className={styles.sFieldMeta}>NIP-46</span>
          </div>
          <div className={`${styles.sField} ${styles.sFieldClickable}`}>
            <span className={styles.sFieldLabel}><Icon name="sparkle" size={14} /> Create new account</span>
            <span className={styles.sFieldMeta}>Generate nsec</span>
          </div>
        </div>
      </div>

      {/* Relays */}
      <div
        className={`${styles.settingsPanel} ${activeTab === 'relays' ? styles.settingsPanelActive : ''}`}
      >
        <div className={styles.sLabel}>Connected Relays</div>
        <div className={styles.relayGrid}>
          {RELAYS.map((relay) => (
            <div
              key={relay.name}
              className={`${styles.relayCard} ${relayState[relay.name] ? styles.relayCardOn : ''}`}
              onClick={() => toggleRelay(relay.name)}
            >
              <div className={styles.rcIcon}>{relay.icon}</div>
              <div>
                <div className={styles.rcName}>{relay.name}</div>
                <div className={styles.rcUrl}>{relay.url}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Storage */}
      <div
        className={`${styles.settingsPanel} ${activeTab === 'yourstorage' ? styles.settingsPanelActive : ''}`}
      >
        <div className={styles.sLabel}>Event kinds to store</div>
        <div className={styles.kindToggleGrid}>
          <div className={styles.kindToggleItem}>
            <span className={styles.ktiLabel}>Metadata</span>
            <span className={styles.ktiLocked}><Icon name="lock" size={14} /> Required</span>
          </div>
          {Object.entries(yourKinds).map(([kind, on]) => (
            <div className={styles.kindToggleItem} key={kind}>
              <span className={styles.ktiLabel}>{kind}</span>
              <button
                className={`${styles.toggleSwitch} ${on ? styles.toggleSwitchOn : ''}`}
                onClick={() => toggleYourKind(kind)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Others' Storage */}
      <div
        className={`${styles.settingsPanel} ${activeTab === 'othersstorage' ? styles.settingsPanelActive : ''}`}
      >
        <div className={styles.sLabel}>WoT depth to store</div>
        <div className={styles.depthPills}>
          {Object.entries(depthPills).map(([pill, on]) => (
            <div
              key={pill}
              className={`${styles.dp} ${on ? styles.dpOn : ''}`}
              onClick={() => toggleDepthPill(pill)}
            >
              {pill}
            </div>
          ))}
        </div>

        <div className={styles.sLabel}>Storage quota</div>
        <div className={styles.sliderRow}>
          <input
            type="range"
            min={1}
            max={50}
            value={othersQuota}
            onChange={(e) => setOthersQuota(Number(e.target.value))}
          />
          <div className={styles.sliderVal}>{othersQuota}GB</div>
        </div>

        <div className={styles.sLabel}>Event kinds</div>
        <div className={styles.compactKindGrid}>
          {Object.entries(othersKinds).map(([kind, on]) => (
            <div className={styles.compactKindItem} key={kind}>
              <span>{kind}</span>
              <button
                className={`${styles.toggleSwitch} ${on ? styles.toggleSwitchOn : ''}`}
                onClick={() => toggleOthersKind(kind)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* WoT */}
      <div
        className={`${styles.settingsPanel} ${activeTab === 'wot' ? styles.settingsPanelActive : ''}`}
      >
        <div className={styles.sLabel}>Trust depth</div>
        <div className={styles.sliderRow}>
          <input
            type="range"
            min={1}
            max={4}
            value={wotDepth}
            onChange={(e) => setWotDepth(Number(e.target.value))}
          />
          <div className={styles.sliderVal}>{wotDepth} hops</div>
        </div>

        <div className={styles.sLabel}>Refresh interval</div>
        <div className={styles.intervalBtns}>
          {['1h', '6h', '24h'].map((interval) => (
            <button
              key={interval}
              className={`${styles.intervalBtn} ${wotInterval === interval ? styles.intervalBtnActive : ''}`}
              onClick={() => setWotInterval(interval)}
            >
              {interval}
            </button>
          ))}
        </div>

        <div className={styles.sLabel}>Pubkeys per depth</div>
        <div className={styles.wotDepthCounts}>
          <div className={styles.wdc}>
            <div className={styles.wdcValue}>312</div>
            <div className={styles.wdcLabel}>1 hop</div>
          </div>
          <div className={styles.wdc}>
            <div className={styles.wdcValue}>401</div>
            <div className={styles.wdcLabel}>2 hops</div>
          </div>
          <div className={styles.wdc}>
            <div className={styles.wdcValue}>134</div>
            <div className={styles.wdcLabel}>3 hops</div>
          </div>
          <div className={styles.wdc}>
            <div className={styles.wdcValue}>0</div>
            <div className={styles.wdcLabel}>4 hops</div>
          </div>
        </div>
      </div>

      {/* Advanced */}
      <div
        className={`${styles.settingsPanel} ${activeTab === 'advanced' ? styles.settingsPanelActive : ''}`}
      >
        <div className={styles.sLabel}>Port</div>
        <div className={styles.sField}>
          <input type="number" defaultValue={4869} />
        </div>

        <div className={styles.sLabel}>Auto-start on boot</div>
        <div className={styles.sField}>
          <span style={{ flex: 1 }}>Start nostrito when system boots</span>
          <button
            className={`${styles.toggleSwitch} ${autoStart ? styles.toggleSwitchOn : ''}`}
            onClick={() => setAutoStart(!autoStart)}
          />
        </div>

        <div className={styles.sLabel}>Log level</div>
        <div className={styles.sField}>
          <select value={logLevel} onChange={(e) => setLogLevel(e.target.value)}>
            <option value="info">info</option>
            <option value="debug">debug</option>
            <option value="error">error</option>
          </select>
        </div>
      </div>
    </>
  )
}
