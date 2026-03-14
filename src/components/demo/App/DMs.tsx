import { useState } from 'react'
import styles from './DMs.module.css'

interface DMConversation {
  name: string
  hop: string
  hopClass: string
  preview: string
  time: string
  unread: boolean
  avatarGradient: string
}

const CONVERSATIONS: DMConversation[] = [
  {
    name: 'fiatjaf',
    hop: '1-hop',
    hopClass: 'hop1',
    preview: 'did you see the mleku post?',
    time: '3m ago',
    unread: true,
    avatarGradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
  },
  {
    name: 'jb55',
    hop: '1-hop',
    hopClass: 'hop1',
    preview: 'notedeck update is huge',
    time: '18m ago',
    unread: false,
    avatarGradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
  },
  {
    name: 'Gigi',
    hop: '1-hop',
    hopClass: 'hop1',
    preview: 'writing something about personal relays',
    time: '1h ago',
    unread: false,
    avatarGradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
  },
  {
    name: 'nvk',
    hop: '2-hop',
    hopClass: 'hop2',
    preview: 'coldcard update shipping soon',
    time: '3h ago',
    unread: false,
    avatarGradient: 'linear-gradient(135deg, #ef4444, #f97316)',
  },
  {
    name: 'ODELL',
    hop: '2-hop',
    hopClass: 'hop2',
    preview: 'podcast next week?',
    time: '5h ago',
    unread: false,
    avatarGradient: 'linear-gradient(135deg, #f97316, #eab308)',
  },
]

export default function DMs() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [selectedHop, setSelectedHop] = useState<string>('')

  const openConversation = (name: string, hop: string) => {
    setSelectedConversation(name)
    setSelectedHop(hop)
  }

  const closeConversation = () => {
    setSelectedConversation(null)
    setSelectedHop('')
  }

  if (selectedConversation) {
    return (
      <>
        <div className={styles.convHeader}>
          <button className={styles.backBtn} onClick={closeConversation}>
            ←
          </button>
          <span className={styles.convName}>{selectedConversation}</span>
          <span className={styles.convHop}>{selectedHop}</span>
          <span className={styles.convEncrypted}>🔒 NIP-44</span>
        </div>
        <div className={styles.messages}>
          <div className={`${styles.dmBubble} ${styles.bubbleTheirs}`}>
            hey, did you see mleku's post about sovereign relay mesh?
          </div>
          <div className={`${styles.dmBubble} ${styles.bubbleMine}`}>
            yeah that was wild. jurisdictional arbitrage in clusters of 5
          </div>
          <div className={`${styles.dmBubble} ${styles.bubbleTheirs}`}>
            exactly what nostrito should support eventually
          </div>
        </div>
      </>
    )
  }

  return (
    <div>
      {CONVERSATIONS.map((conv) => (
        <div
          key={conv.name}
          className={styles.dmItem}
          onClick={() => openConversation(conv.name, conv.hop)}
        >
          <div
            className={styles.dmAvatar}
            style={{ background: conv.avatarGradient }}
          />
          <div className={styles.dmMid}>
            <div className={styles.dmNameRow}>
              <span className={styles.dmName}>{conv.name}</span>
              {conv.unread && <span className={styles.dmUnread} />}
              <span
                className={`${styles.hopBadge} ${conv.hopClass === 'hop1' ? styles.hop1 : styles.hop2}`}
              >
                {conv.hop}
              </span>
            </div>
            <div className={styles.dmPreview}>{conv.preview}</div>
          </div>
          <span className={styles.dmTime}>{conv.time}</span>
        </div>
      ))}
    </div>
  )
}
