import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import styles from '@/styles/media.module.css'

export default function MediaPage() {
  return (
    <div className={styles.mediaPage}>
      <SEO
        title="nostrito — Media Kit"
        description="Download social media banners and assets for sharing nostrito across platforms."
        url="https://nostrito.com/media"
      />

      {/* Nav */}
      <nav className={styles.mediaNav}>
        <div className={styles.mediaNavContainer}>
          <Link to="/" className={styles.mediaNavLogo}>
            <img
              src="/assets/nostrito-white.svg"
              alt="nostrito"
              className={styles.mediaNavLogoImg}
            />
            nostrito
          </Link>
          <Link to="/" className={styles.navLink}>
            &larr; Back to site
          </Link>
        </div>
      </nav>

      <div className={styles.container}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1>nostrito — Media Kit</h1>
          <p>
            Download assets and banners for sharing nostrito across platforms.
          </p>
        </div>

        {/* Twitter/X Header */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>Twitter / X Header · 1500 × 500</h2>
          <div className={styles.bannerWrap}>
            <div className={styles.bannerTwitter}>
              <div className={styles.logoSide}>
                <img
                  src="/assets/nostrito-white.svg"
                  alt="nostrito logo"
                  className={styles.logoSideImg}
                />
              </div>
              <div className={styles.textSide}>
                <div className={styles.textSideName}>nostrito</div>
                <div className={styles.textSideTagline}>
                  your personal nostr relay
                </div>
              </div>
              <div className={styles.bannerUrl}>nostrito.com</div>
            </div>
          </div>
          <div className={styles.bannerNote}>
            Right-click → Save as image, or screenshot at 1500×500 for
            pixel-perfect export.
          </div>
        </div>

        {/* Square Post */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>Square Post · 1080 × 1080</h2>
          <div className={styles.bannerWrapInline}>
            <div className={styles.bannerSquare}>
              <img
                src="/assets/nostrito-white.svg"
                alt="nostrito logo"
                className={styles.bannerSquareImg}
              />
              <div className={styles.bannerSquareName}>nostrito</div>
              <div className={styles.bannerSquareTagline}>
                your personal nostr relay
              </div>
              <div className={styles.bannerSquareUrl}>nostrito.com</div>
            </div>
          </div>
          <div className={styles.bannerNote}>
            Rendered at 540×540. Actual export size: 1080×1080.
          </div>
        </div>

        {/* GitHub Social Preview */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>
            GitHub Social Preview · 1280 × 640
          </h2>
          <div className={styles.bannerWrapInline}>
            <div className={styles.bannerGithub}>
              <div className={styles.githubLeft}>
                <img
                  src="/assets/nostrito-white.svg"
                  alt="nostrito logo"
                  className={styles.githubLeftImg}
                />
                <div className={styles.githubLeftName}>nostrito</div>
                <div className={styles.githubLeftTagline}>
                  your personal nostr relay
                </div>
              </div>
              <div className={styles.githubRight}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <div className={styles.featureText}>
                    <strong>Personal Relay</strong>
                    <span>WebSocket server on localhost</span>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24">
                      <path d="M18 10h-4V6l-6 7h4v4l6-7z" />
                    </svg>
                  </div>
                  <div className={styles.featureText}>
                    <strong>Offline-First</strong>
                    <span>Your data, always available</span>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className={styles.featureText}>
                    <strong>Open Source</strong>
                    <span>MIT licensed · Rust</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bannerNote}>
            Rendered at 640×320. Actual export size: 1280×640.
          </div>
        </div>

        {/* Minimal Badge */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>Minimal Badge · 400 × 100</h2>
          <div className={styles.bannerWrapNoBorder}>
            <div className={styles.bannerBadge}>
              <img
                src="/assets/nostrito-white.svg"
                alt="nostrito logo"
                className={styles.badgeImg}
              />
              <div className={styles.badgeText}>
                <div className={styles.badgeTextName}>nostrito</div>
                <div className={styles.badgeTextWs}>ws://localhost:4869</div>
              </div>
              <div className={styles.badgeDivider} />
              <div className={styles.badgeLabel}>RELAY</div>
            </div>
          </div>
          <div className={styles.bannerNote}>
            Badge-style asset for READMEs and docs.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.pageFooter}>
        <div className={styles.container}>
          <Link to="/">&larr; Back to nostrito.com</Link>
        </div>
      </footer>
    </div>
  )
}
