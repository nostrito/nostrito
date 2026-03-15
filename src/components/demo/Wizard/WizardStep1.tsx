import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import styles from './Wizard.module.css'

type IdentityMode = 'readonly' | 'full'
type SignerType = 'nsec' | 'bunker' | 'new' | null

export default function WizardStep1() {
  const [mode, setMode] = useState<IdentityMode>('readonly')
  const [selectedSigner, setSelectedSigner] = useState<SignerType>(null)

  return (
    <>
      <h3 className={styles.stepTitle}>Your identity</h3>
      <p className={styles.stepSubtitle}>
        Choose how to connect. You can always upgrade later.
      </p>

      <div className={styles.identityOptions}>
        <div
          className={`${styles.identityOption} ${mode === 'readonly' ? styles.identityOptionSelected : ''}`}
          onClick={() => setMode('readonly')}
        >
          <div className={styles.identityOptionTitle}>
            <Icon name="book" size={16} /> Read-only
          </div>
          <div className={styles.identityOptionDesc}>
            Paste your npub. DMs disabled, everything else works.
          </div>
        </div>

        <div
          className={`${styles.identityOption} ${mode === 'full' ? styles.identityOptionSelected : ''}`}
          onClick={() => setMode('full')}
        >
          <div className={styles.identityOptionTitle}><Icon name="key" size={16} /> Full access</div>
          <div className={styles.identityOptionDesc}>
            Connect nsec, NBunker, or Nostr Connect. Unlocks DMs.
          </div>
        </div>
      </div>

      {mode === 'readonly' && (
        <div className={styles.npubInputWrap}>
          <input
            type="text"
            className={styles.npubInput}
            defaultValue="npub1fabri3k7x9d2c8qy5m..."
            placeholder="npub1..."
          />
        </div>
      )}

      {mode === 'full' && (
        <div className={styles.signerOptions}>
          <div
            className={`${styles.signerOption} ${selectedSigner === 'nsec' ? styles.signerOptionSelected : ''}`}
            onClick={() => setSelectedSigner('nsec')}
          >
            <Icon name="key" size={16} /> Paste nsec
          </div>
          <div
            className={`${styles.signerOption} ${selectedSigner === 'bunker' ? styles.signerOptionSelected : ''}`}
            onClick={() => setSelectedSigner('bunker')}
          >
            <Icon name="castle" size={14} /> NBunker / NIP-46
          </div>
          <div
            className={`${styles.signerOption} ${selectedSigner === 'new' ? styles.signerOptionSelected : ''}`}
            onClick={() => setSelectedSigner('new')}
          >
            <Icon name="sparkle" size={14} /> Create new account
          </div>
        </div>
      )}
    </>
  )
}
