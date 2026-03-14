import styles from './WoT.module.css'

interface WoTPeer {
  name: string
  mutuals: number
  depth: 1 | 2
  avatarGradient: string
}

const PEERS: WoTPeer[] = [
  {
    name: 'fiatjaf',
    mutuals: 47,
    depth: 1,
    avatarGradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    name: 'jb55',
    mutuals: 31,
    depth: 1,
    avatarGradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
  },
  {
    name: 'ODELL',
    mutuals: 18,
    depth: 2,
    avatarGradient: 'linear-gradient(135deg, #f97316, #eab308)',
  },
  {
    name: 'Gigi',
    mutuals: 12,
    depth: 2,
    avatarGradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
  },
  {
    name: 'nvk',
    mutuals: 28,
    depth: 1,
    avatarGradient: 'linear-gradient(135deg, #ef4444, #f97316)',
  },
]

export default function WoT() {
  return (
    <>
      <div className={styles.wotHeader}>
        <h3 className={styles.wotTitle}>Your Web of Trust</h3>
        <div className={styles.wotStats}>
          <span>
            <strong>847</strong> trusted
          </span>
          <span>
            1 hop: <strong>312</strong>
          </span>
          <span>
            2 hops: <strong>401</strong>
          </span>
          <span>
            3 hops: <strong>134</strong>
          </span>
        </div>
      </div>

      <div className={styles.wotGraph}>
        <svg viewBox="0 0 260 260">
          <circle cx="130" cy="130" r="120" fill="none" stroke="#1e1e24" strokeWidth="1" />
          <circle cx="130" cy="130" r="80" fill="none" stroke="#1e1e24" strokeWidth="1" />
          <circle cx="130" cy="130" r="40" fill="none" stroke="#1e1e24" strokeWidth="1" />
          <circle cx="130" cy="130" r="8" fill="#7c3aed" />
          {/* hop 1 dots */}
          <circle cx="130" cy="88" r="4" fill="#7c3aed" opacity="0.8" />
          <circle cx="160" cy="98" r="3.5" fill="#7c3aed" opacity="0.7" />
          <circle cx="170" cy="130" r="4" fill="#7c3aed" opacity="0.8" />
          <circle cx="158" cy="160" r="3" fill="#7c3aed" opacity="0.6" />
          <circle cx="130" cy="172" r="4" fill="#7c3aed" opacity="0.8" />
          <circle cx="100" cy="158" r="3.5" fill="#7c3aed" opacity="0.7" />
          <circle cx="90" cy="130" r="4" fill="#7c3aed" opacity="0.8" />
          <circle cx="102" cy="100" r="3" fill="#7c3aed" opacity="0.6" />
          {/* hop 2 dots */}
          <circle cx="130" cy="48" r="3.5" fill="#3b82f6" opacity="0.7" />
          <circle cx="175" cy="62" r="3" fill="#3b82f6" opacity="0.6" />
          <circle cx="200" cy="100" r="3.5" fill="#3b82f6" opacity="0.7" />
          <circle cx="210" cy="140" r="3" fill="#3b82f6" opacity="0.5" />
          <circle cx="195" cy="175" r="3.5" fill="#3b82f6" opacity="0.7" />
          <circle cx="168" cy="198" r="3" fill="#3b82f6" opacity="0.6" />
          <circle cx="130" cy="210" r="3.5" fill="#3b82f6" opacity="0.7" />
          <circle cx="92" cy="198" r="3" fill="#3b82f6" opacity="0.5" />
          <circle cx="65" cy="175" r="3.5" fill="#3b82f6" opacity="0.7" />
          <circle cx="50" cy="140" r="3" fill="#3b82f6" opacity="0.6" />
          <circle cx="58" cy="100" r="3.5" fill="#3b82f6" opacity="0.7" />
          <circle cx="85" cy="62" r="3" fill="#3b82f6" opacity="0.5" />
          {/* hop 3 dots */}
          <circle cx="130" cy="12" r="2.5" fill="#34d399" opacity="0.5" />
          <circle cx="190" cy="25" r="2" fill="#34d399" opacity="0.4" />
          <circle cx="235" cy="75" r="2.5" fill="#34d399" opacity="0.5" />
          <circle cx="248" cy="130" r="2" fill="#34d399" opacity="0.4" />
          <circle cx="235" cy="185" r="2.5" fill="#34d399" opacity="0.5" />
          <circle cx="190" cy="235" r="2" fill="#34d399" opacity="0.4" />
          <circle cx="130" cy="248" r="2.5" fill="#34d399" opacity="0.5" />
          <circle cx="70" cy="235" r="2" fill="#34d399" opacity="0.4" />
          <circle cx="25" cy="185" r="2.5" fill="#34d399" opacity="0.5" />
          <circle cx="12" cy="130" r="2" fill="#34d399" opacity="0.4" />
          <circle cx="25" cy="75" r="2.5" fill="#34d399" opacity="0.5" />
          <circle cx="70" cy="25" r="2" fill="#34d399" opacity="0.4" />
        </svg>
      </div>

      <div className={styles.wotList}>
        {PEERS.map((peer) => (
          <div className={styles.wotItem} key={peer.name}>
            <div
              className={styles.wiAvatar}
              style={{ background: peer.avatarGradient }}
            />
            <div className={styles.wiInfo}>
              <div className={styles.wiName}>{peer.name}</div>
              <div className={styles.wiMeta}>{peer.mutuals} mutual follows</div>
            </div>
            <span
              className={`${styles.wiDepth} ${peer.depth === 1 ? styles.d1 : styles.d2}`}
            >
              Depth {peer.depth}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
