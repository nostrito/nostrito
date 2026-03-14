import { useState, useEffect } from 'react'
import Icon from '@/components/ui/Icon'
import styles from './Dashboard.module.css'

const CHART_DATA = [12, 8, 5, 3, 2, 2, 4, 18, 35, 52, 61, 58, 55, 63, 70, 65, 48, 42, 55, 68, 45, 38, 28, 20]
const MAX_BAR = Math.max(...CHART_DATA)
const RATES = ['~2/min', '~3/min', '~4/min', '~3/min']

interface EventCardData {
  name: string
  npub: string
  hop: 1 | 2
  text: string
  zaps: number
  replies: number
  avatarGradient: string
}

const EVENTS: EventCardData[] = [
  {
    name: 'fiatjaf',
    npub: 'npub1fiat...j4f',
    hop: 1,
    text: 'Running your own relay is the most sovereign thing you can do on Nostr.',
    zaps: 47,
    replies: 23,
    avatarGradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    name: 'jb55',
    npub: 'npub1jb55...w9k',
    hop: 1,
    text: 'The social graph IS the infrastructure. Everything else follows.',
    zaps: 31,
    replies: 12,
    avatarGradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
  },
  {
    name: 'ODELL',
    npub: 'npub1odll...x2m',
    hop: 1,
    text: 'Signal, not noise. WoT filtering is the answer.',
    zaps: 89,
    replies: 44,
    avatarGradient: 'linear-gradient(135deg, #f97316, #eab308)',
  },
]

export default function Dashboard() {
  const [eventCount, setEventCount] = useState(12483)
  const [syncRate, setSyncRate] = useState('~3/min')
  const [uptimeMinutes, setUptimeMinutes] = useState(4 * 60 + 23)

  useEffect(() => {
    const eventInterval = setInterval(() => {
      setEventCount((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 4000)

    let rateIdx = 0
    const rateInterval = setInterval(() => {
      rateIdx = (rateIdx + 1) % RATES.length
      setSyncRate(RATES[rateIdx])
    }, 5000)

    const uptimeInterval = setInterval(() => {
      setUptimeMinutes((prev) => prev + 1)
    }, 60000)

    return () => {
      clearInterval(eventInterval)
      clearInterval(rateInterval)
      clearInterval(uptimeInterval)
    }
  }, [])

  const uptimeH = Math.floor(uptimeMinutes / 60)
  const uptimeM = uptimeMinutes % 60

  return (
    <>
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{eventCount.toLocaleString()}</div>
          <div className={styles.statLabel}>Events Synced</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>847</div>
          <div className={styles.statLabel}>WoT Peers</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>1,204</div>
          <div className={styles.statLabel}>Media Cached</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{syncRate}</div>
          <div className={styles.statLabel}>Sync Rate</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            {uptimeH}h {uptimeM}m
          </div>
          <div className={styles.statLabel}>Uptime</div>
        </div>
      </div>

      <div className={styles.activityChart}>
        <div className={styles.chartLabel}>Last 24h activity</div>
        <div className={styles.chartBars}>
          {CHART_DATA.map((val, i) => {
            const height = Math.max(2, (val / MAX_BAR) * 40)
            let barClass = styles.chartBar
            if (i >= 22) {
              barClass = `${styles.chartBar} ${styles.chartBarCurrent}`
            } else if (i >= 20) {
              barClass = `${styles.chartBar} ${styles.chartBarRecent}`
            }
            return (
              <div
                key={i}
                className={barClass}
                style={{ height: `${height}px` }}
              />
            )
          })}
        </div>
      </div>

      <div className={styles.dashMain}>
        <div className={styles.dashEvents}>
          {EVENTS.map((event) => (
            <div className={styles.eventCard} key={event.name}>
              <div className={styles.ecHead}>
                <div
                  className={styles.ecAvatar}
                  style={{ background: event.avatarGradient }}
                />
                <div>
                  <div className={styles.ecName}>{event.name}</div>
                  <div className={styles.ecNpub}>
                    {event.npub}{' '}
                    <span
                      className={`${styles.hopBadge} ${event.hop === 1 ? styles.hop1 : styles.hop2}`}
                    >
                      {event.hop}-hop
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.ecText}>{event.text}</div>
              <div className={styles.ecActions}>
                <span><Icon name="zap" size={14} /> {event.zaps}</span>
                <span><Icon name="chat" size={14} /> {event.replies}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.syncPanel}>
          <div className={styles.syncTitle}>Sync Engine</div>

          <div className={styles.syncTier}>
            <div className={styles.tierHeader}>
              <span className={styles.tierLabel}>Tier 1 — Local</span>
              <span className={styles.tierBadgeFast}>FAST</span>
            </div>
            <div className={styles.tierMeta}>Hit rate: 94%</div>
          </div>

          <div className={styles.syncTier}>
            <div className={styles.tierHeader}>
              <span className={styles.tierLabel}>Tier 2 — WoT Peers</span>
              <span className={styles.peerPulse} />
            </div>
            <div className={styles.tierMeta}>2 active peers</div>
          </div>

          <div className={styles.syncTier}>
            <div className={styles.tierHeader}>
              <span className={styles.tierLabel}>Tier 3 — Relays</span>
            </div>
            <div className={styles.tierRelayList}>
              <div className={styles.tierRelay}>
                <span className={styles.dotGreen}>●</span> primal{' '}
                <span className={styles.tierLatency}>24ms</span>
              </div>
              <div className={styles.tierRelay}>
                <span className={styles.dotGreen}>●</span> damus{' '}
                <span className={styles.tierLatency}>31ms</span>
              </div>
              <div className={styles.tierRelay}>
                <span className={styles.dotGreen}>●</span> nos{' '}
                <span className={styles.tierLatency}>18ms</span>
              </div>
              <div className={styles.tierRelay}>
                <span className={styles.dotGreen}>●</span> snort{' '}
                <span className={styles.tierLatency}>56ms</span>
              </div>
            </div>
          </div>

          <div className={`${styles.syncTier} ${styles.syncTierLast} ${styles.tierIdle}`}>
            <div className={styles.tierHeader}>
              <span className={styles.tierLabel}>Tier 4 — Fallback</span>
            </div>
            <div className={styles.tierMeta}>Idle</div>
          </div>

          <div className={styles.blossomSection}>
            <div className={styles.blossomTitle}><Icon name="blossom" size={14} /> Blossom</div>
            <div className={styles.blossomMeta}>
              3 images, 1 video
              <br />
              cached this hour
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
