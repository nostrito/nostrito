import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import Icon from '@/components/ui/Icon'
import styles from '@/styles/download.module.css'

const PLATFORMS = [
  {
    icon: <Icon name="apple" size={32} />,
    name: 'macOS',
    description: 'apple silicon. requires macOS 12+.',
    filename: 'nostrito_0.1.0_aarch64.dmg',
    href: 'https://github.com/nostrito/nostrito-app/releases/download/v0.1.0/nostrito_0.1.0_aarch64.dmg',
  },
] as const

export default function DownloadPage() {
  return (
    <div className={styles.page}>
      <SEO
        title="nostrito — download"
        description="download nostrito for mac. your personal social network."
        url="https://nostrito.com/download"
      />

      <nav className={styles.nav}>
        <Link to="/" className={styles.navLogo}>
          <img
            src="/assets/nostrito-white.svg"
            alt="nostrito"
            className={styles.navLogoImg}
          />
          nostrito
        </Link>
        <Link to="/" className={styles.navBack}>
          &larr; back to site
        </Link>
      </nav>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>download nostrito</h1>
          <p>
            your personal social network. a new way to share online.
            <br />
            just install it, open it and start. nothing to set up.
          </p>
        </div>

        <div className={styles.grid}>
          {PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              className={styles.card}
            >
              <div className={styles.cardIcon}>{platform.icon}</div>
              <h2>{platform.name}</h2>
              <p>{platform.description}</p>
              <div className={styles.cardFile}>{platform.filename}</div>
            </a>
          ))}
        </div>

        <div className={styles.alt}>
          <p>
            or build from source:{' '}
            <a
              href="https://github.com/nostrito/nostrito"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/nostrito/nostrito
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
