import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import styles from './Feed.module.css'

type FilterType = 'all' | 'notes' | 'longform' | 'reposts'

interface FeedEventData {
  type: 'notes' | 'longform' | 'reposts'
  name: string
  npub: string
  hop: 1 | 2
  time: string
  text: string
  replies: number
  reposts: number
  zaps: number
  avatarGradient: string
  isLongform: boolean
  lfTitle?: string
}

const FEED_EVENTS: FeedEventData[] = [
  {
    type: 'notes',
    name: 'fiatjaf',
    npub: 'npub1fiat...j4f',
    hop: 1,
    time: '2m ago',
    text: 'Every relay should be personal. The era of giant public relays is ending.',
    replies: 14,
    reposts: 8,
    zaps: 52,
    avatarGradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    isLongform: false,
  },
  {
    type: 'longform',
    name: 'jb55',
    npub: 'npub1jb55...w9k',
    hop: 1,
    time: '15m ago',
    text: "The web of trust isn't just spam filtering — it's the foundation of a new naming system. Here's how relay discovery through social proximity changes everything...",
    replies: 31,
    reposts: 22,
    zaps: 127,
    avatarGradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    isLongform: true,
    lfTitle: "Why Nostr's Social Graph Will Replace DNS",
  },
  {
    type: 'notes',
    name: 'ODELL',
    npub: 'npub1odll...x2m',
    hop: 1,
    time: '28m ago',
    text: 'Just set up nostrito on my Start9. Sovereign relay running in 45 seconds. This is the way.',
    replies: 37,
    reposts: 19,
    zaps: 203,
    avatarGradient: 'linear-gradient(135deg, #f97316, #eab308)',
    isLongform: false,
  },
  {
    type: 'reposts',
    name: 'Gigi',
    npub: 'npub1gigi...8fk',
    hop: 2,
    time: '1h ago',
    text: 'Reposted: "Running your own relay is the most sovereign thing you can do on Nostr." — fiatjaf',
    replies: 5,
    reposts: 42,
    zaps: 18,
    avatarGradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    isLongform: false,
  },
  {
    type: 'longform',
    name: 'nvk',
    npub: 'npub1nvkk...3pm',
    hop: 1,
    time: '2h ago',
    text: "We've been thinking about relays wrong. They're not servers — they're extensions of your identity. Let me explain why every bitcoiner should run one...",
    replies: 18,
    reposts: 11,
    zaps: 94,
    avatarGradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    isLongform: true,
    lfTitle: 'Personal Relays: The Missing Piece of Nostr Infrastructure',
  },
  {
    type: 'notes',
    name: 'walker',
    npub: 'npub1walk...7rq',
    hop: 1,
    time: '3h ago',
    text: 'WoT depth 2 filters out 99% of spam on my relay. The signal-to-noise ratio is unreal.',
    replies: 9,
    reposts: 6,
    zaps: 41,
    avatarGradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    isLongform: false,
  },
]

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Notes', value: 'notes' },
  { label: 'Long-form', value: 'longform' },
  { label: 'Reposts', value: 'reposts' },
]

export default function Feed() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  return (
    <>
      <div className={styles.filterTabs}>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div>
        {FEED_EVENTS.map((event, i) => {
          const visible =
            activeFilter === 'all' || event.type === activeFilter
          if (!visible) return null

          const hopClass =
            event.hop === 1 ? styles.hop1 : styles.hop2

          if (event.isLongform) {
            return (
              <div
                key={i}
                className={`${styles.feedEvent} ${styles.longform}`}
              >
                <div className={styles.lfHead}>
                  <div
                    className={styles.lfAvatar}
                    style={{ background: event.avatarGradient }}
                  />
                  <span className={styles.feName}>{event.name}</span>
                  <span className={styles.feNpub}>{event.npub}</span>
                  <span className={`${styles.hopBadge} ${hopClass}`}>
                    {event.hop}-hop
                  </span>
                  <span className={styles.feTime}>{event.time}</span>
                </div>
                <div className={styles.lfTitle}>{event.lfTitle}</div>
                <div className={styles.feText}>{event.text}</div>
                <div className={styles.feActions}>
                  <span><Icon name="chat" size={14} /> {event.replies}</span>
                  <span><Icon name="repost" size={14} /> {event.reposts}</span>
                  <span><Icon name="zap" size={14} /> {event.zaps}</span>
                </div>
              </div>
            )
          }

          return (
            <div key={i} className={styles.feedEvent}>
              <div
                className={styles.feAvatar}
                style={{ background: event.avatarGradient }}
              />
              <div className={styles.feBody}>
                <div className={styles.feHead}>
                  <span className={styles.feName}>{event.name}</span>
                  <span className={styles.feNpub}>{event.npub}</span>
                  <span className={`${styles.hopBadge} ${hopClass}`}>
                    {event.hop}-hop
                  </span>
                  <span className={styles.feTime}>{event.time}</span>
                </div>
                <div className={styles.feText}>{event.text}</div>
                <div className={styles.feActions}>
                  <span><Icon name="chat" size={14} /> {event.replies}</span>
                  <span><Icon name="repost" size={14} /> {event.reposts}</span>
                  <span><Icon name="zap" size={14} /> {event.zaps}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
