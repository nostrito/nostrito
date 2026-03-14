import { useState } from 'react'
import WizardStep1 from './WizardStep1'
import WizardStep2 from './WizardStep2'
import WizardStep3 from './WizardStep3'
import styles from './Wizard.module.css'

interface WizardProps {
  onFinish: () => void
}

export default function Wizard({ onFinish }: WizardProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const goNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className={styles.wizardScreen}>
      <div className={styles.wizardDots}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              i < currentStep
                ? styles.dotDone
                : i === currentStep
                  ? styles.dotActive
                  : ''
            }`}
          />
        ))}
      </div>

      <div
        className={`${styles.wizardStep} ${currentStep === 0 ? styles.wizardStepActive : ''}`}
      >
        <WizardStep1 />
        <div className={styles.wizardBtns}>
          <button className={styles.btnPrimary} onClick={goNext}>
            Next →
          </button>
        </div>
      </div>

      <div
        className={`${styles.wizardStep} ${currentStep === 1 ? styles.wizardStepActive : ''}`}
      >
        <WizardStep2 />
        <div className={styles.wizardBtns}>
          <button className={styles.btnSecondary} onClick={goBack}>
            Back
          </button>
          <button className={styles.btnPrimary} onClick={goNext}>
            Next
          </button>
        </div>
      </div>

      <div
        className={`${styles.wizardStep} ${currentStep === 2 ? styles.wizardStepActive : ''}`}
      >
        <WizardStep3 />
        <div className={styles.wizardBtns}>
          <button className={styles.btnSecondary} onClick={goBack}>
            Back
          </button>
          <button className={styles.btnPrimary} onClick={onFinish}>
            Finish
          </button>
        </div>
      </div>
    </div>
  )
}
