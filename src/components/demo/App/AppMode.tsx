import { useState, useEffect, type ReactNode } from 'react'
import Dashboard from './Dashboard'
import Feed from './Feed'
import DMs from './DMs'
import WoT from './WoT'
import Storage from './Storage'
import Settings from './Settings'
import Icon from '@/components/ui/Icon'
import styles from './AppMode.module.css'

type Page = 'dashboard' | 'feed' | 'dms' | 'wot' | 'storage' | 'settings'

interface NavItem {
  icon: ReactNode
  label: string
  page: Page
}

const NAV_ITEMS: NavItem[] = [
  { icon: <Icon name="chart" size={16} />, label: 'Dashboard', page: 'dashboard' },
  { icon: <Icon name="feed" size={16} />, label: 'Feed', page: 'feed' },
  { icon: <Icon name="chat" size={16} />, label: 'DMs', page: 'dms' },
  { icon: <Icon name="web" size={16} />, label: 'WoT', page: 'wot' },
  { icon: <Icon name="save" size={16} />, label: 'Storage', page: 'storage' },
  { icon: <Icon name="gear" size={16} />, label: 'Settings', page: 'settings' },
]

const PAGE_TITLES: Record<Page, string> = {
  dashboard: 'Dashboard',
  feed: 'Feed',
  dms: 'DMs',
  wot: 'WoT',
  storage: 'Storage',
  settings: 'Settings',
}

interface AppModeProps {
  onTitleChange: (title: string) => void
}

export default function AppMode({ onTitleChange }: AppModeProps) {
  const [activePage, setActivePage] = useState<Page>('dashboard')

  useEffect(() => {
    onTitleChange(PAGE_TITLES[activePage])
  }, [activePage, onTitleChange])

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />
      case 'feed':
        return <Feed />
      case 'dms':
        return <DMs />
      case 'wot':
        return <WoT />
      case 'storage':
        return <Storage />
      case 'settings':
        return <Settings />
    }
  }

  return (
    <div className={styles.appLayout}>
      <div className={styles.appSidebar}>
        <div className={styles.sidebarLogo}>
          <Icon name="pepper" size={18} /> <span className={styles.logoText}>nostrito</span>
        </div>
        <nav className={styles.sidebarNav}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              className={`${styles.navItem} ${activePage === item.page ? styles.navItemActive : ''}`}
              onClick={() => setActivePage(item.page)}
            >
              {item.icon}{' '}
              <span className={styles.navItemText}>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className={styles.sidebarStatus}>
          <div className={styles.pulse} />
          <span className={styles.statusText}>Live</span>
        </div>
      </div>
      <div className={styles.appContent}>{renderPage()}</div>
    </div>
  )
}
