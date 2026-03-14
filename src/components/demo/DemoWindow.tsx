import { useState, useCallback } from 'react'
import Wizard from './Wizard/Wizard'
import AppMode from './App/AppMode'
import styles from './DemoWindow.module.css'

export default function DemoWindow() {
  const [mode, setMode] = useState<'wizard' | 'app'>('wizard')
  const [appTitle, setAppTitle] = useState('Dashboard')

  const handleFinish = () => {
    setMode('app')
  }

  const handleTitleChange = useCallback((title: string) => {
    setAppTitle(title)
  }, [])

  const windowTitle =
    mode === 'wizard'
      ? 'nostrito — Setup'
      : `nostrito — ${appTitle}`

  return (
    <div className={styles.appWindow}>
      <div className={styles.windowChrome}>
        <div className={`${styles.windowDot} ${styles.dotRed}`} />
        <div className={`${styles.windowDot} ${styles.dotYellow}`} />
        <div className={`${styles.windowDot} ${styles.dotGreen}`} />
        <div className={styles.windowTitle}>{windowTitle}</div>
      </div>
      <div className={styles.windowBody}>
        {mode === 'wizard' ? (
          <Wizard onFinish={handleFinish} />
        ) : (
          <AppMode onTitleChange={handleTitleChange} />
        )}
      </div>
    </div>
  )
}
