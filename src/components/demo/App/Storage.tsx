import Icon from '@/components/ui/Icon'
import styles from './Storage.module.css'

interface KindData {
  value: string
  label: string
}

const KINDS: KindData[] = [
  { value: '2,847', label: 'Notes' },
  { value: '23', label: 'Long-form' },
  { value: '1,204', label: 'Zaps' },
  { value: '892', label: 'Reposts' },
  { value: '4,521', label: 'Reactions' },
  { value: '156', label: 'DMs' },
  { value: '89 files', label: 'Media' },
]

export default function Storage() {
  return (
    <>
      <div className={styles.usageBarContainer}>
        <h4 className={styles.usageTitle}>Storage Usage — 2.3 GB total</h4>
        <div className={styles.usageBar}>
          <div
            className={`${styles.ubSeg} ${styles.ubPurple}`}
            style={{ width: '47.8%' }}
          >
            1.1 GB
          </div>
          <div
            className={`${styles.ubSeg} ${styles.ubBlue}`}
            style={{ width: '34.8%' }}
          >
            0.8 GB
          </div>
          <div
            className={`${styles.ubSeg} ${styles.ubOrange}`}
            style={{ width: '17.4%' }}
          >
            0.4 GB
          </div>
        </div>
        <div className={styles.usageLegend}>
          <span className={styles.lgPurple}>Your events</span>
          <span className={styles.lgBlue}>Others</span>
          <span className={styles.lgOrange}>Media</span>
        </div>
      </div>

      <div className={styles.kindGrid}>
        {KINDS.map((kind) => (
          <div className={styles.kindCard} key={kind.label}>
            <div className={styles.kindValue}>{kind.value}</div>
            <div className={styles.kindLabel}>{kind.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.mediaGrid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div className={styles.mediaTile} key={i}>
            <Icon name="image" size={16} />
          </div>
        ))}
      </div>
    </>
  )
}
