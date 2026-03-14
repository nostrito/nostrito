import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import styles from './Wizard.module.css'

export default function WizardStep3() {
  const [othersGB, setOthersGB] = useState(5)
  const [mediaGB, setMediaGB] = useState(2)
  const [mediaTypes, setMediaTypes] = useState({
    images: true,
    videos: true,
    audio: false,
  })
  const [cleanup, setCleanup] = useState<'oldest' | 'least'>('oldest')

  const toggleMediaType = (type: keyof typeof mediaTypes) => {
    setMediaTypes((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  return (
    <>
      <h3 className={styles.stepTitle}>Storage rules</h3>
      <p className={styles.stepSubtitle}>
        Set limits for what your relay keeps.
      </p>
      <div className={styles.storageConfig}>
        <label className={styles.storageLabel}>Your events</label>
        <div className={styles.storageBarLocked}>
          <Icon name="lock" size={14} /> 100% — Always stored. No exceptions.
        </div>

        <label className={styles.storageLabel}>Others' events</label>
        <div className={styles.sliderRow}>
          <input
            type="range"
            min={1}
            max={50}
            value={othersGB}
            onChange={(e) => setOthersGB(Number(e.target.value))}
          />
          <div className={styles.sliderVal}>{othersGB}GB</div>
        </div>

        <label className={styles.storageLabel}>Media storage</label>
        <div className={styles.sliderRow}>
          <input
            type="range"
            min={1}
            max={20}
            value={mediaGB}
            onChange={(e) => setMediaGB(Number(e.target.value))}
          />
          <div className={styles.sliderVal}>{mediaGB}GB</div>
        </div>

        <label className={styles.storageLabel}>Media types</label>
        <div className={styles.toggleGroup}>
          <div
            className={`${styles.togglePill} ${mediaTypes.images ? styles.togglePillOn : ''}`}
            onClick={() => toggleMediaType('images')}
          >
            <Icon name="image" size={14} /> Images
          </div>
          <div
            className={`${styles.togglePill} ${mediaTypes.videos ? styles.togglePillOn : ''}`}
            onClick={() => toggleMediaType('videos')}
          >
            <Icon name="video" size={14} /> Videos
          </div>
          <div
            className={`${styles.togglePill} ${mediaTypes.audio ? styles.togglePillOn : ''}`}
            onClick={() => toggleMediaType('audio')}
          >
            <Icon name="audio" size={14} /> Audio
          </div>
        </div>

        <label className={styles.storageLabel}>Cleanup strategy</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="cleanup"
              checked={cleanup === 'oldest'}
              onChange={() => setCleanup('oldest')}
            />
            Oldest first
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="cleanup"
              checked={cleanup === 'least'}
              onChange={() => setCleanup('least')}
            />
            Least interacted
          </label>
        </div>
      </div>
    </>
  )
}
