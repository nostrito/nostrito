import { useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import html2canvas from 'html2canvas'
import SEO from '@/components/seo/SEO'
import styles from '@/styles/media.module.css'

const downloadIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

function DownloadButton({ label, targetRef, filename, scale, bg }: {
  label: string
  targetRef: React.RefObject<HTMLDivElement | null>
  filename: string
  scale: number
  bg?: string
}) {
  const handleDownload = useCallback(async () => {
    if (!targetRef.current) return
    const canvas = await html2canvas(targetRef.current, {
      scale,
      useCORS: true,
      backgroundColor: bg ?? '#ffffff',
    })
    const link = document.createElement('a')
    link.download = `${filename}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }, [targetRef, filename, scale, bg])

  return (
    <button className={styles.btnDownload} onClick={handleDownload}>
      {downloadIcon}
      {label}
    </button>
  )
}

export default function MediaPage() {
  const twitterRef = useRef<HTMLDivElement>(null)
  const squareRef = useRef<HTMLDivElement>(null)
  const githubRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const profileDarkRef = useRef<HTMLDivElement>(null)
  const nostrRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.mediaPage}>
      <SEO
        title="nostrito — media kit"
        description="download social media banners and assets for sharing nostrito across platforms."
        url="https://nostrito.com/media"
      />

      {/* Nav */}
      <nav className={styles.mediaNav}>
        <div className={styles.mediaNavContainer}>
          <Link to="/" className={styles.mediaNavLogo}>
            <img
              src="/assets/nostrito.svg"
              alt="nostrito"
              className={styles.mediaNavLogoImg}
            />
            nostrito
          </Link>
          <Link to="/" className={styles.navLink}>
            &larr; back to site
          </Link>
        </div>
      </nav>

      <div className={styles.container}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1>nostrito — media kit</h1>
          <p>
            download assets and banners for sharing nostrito across platforms.
          </p>
        </div>

        {/* Profile Picture */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>profile picture · 512 × 512</h2>
          <div className={styles.bannerWrapNoBorder}>
            <div ref={profileRef} className={styles.bannerProfile}>
              <img
                src="/assets/nostrito.svg"
                alt="nostrito logo"
                className={styles.bannerProfileImg}
              />
            </div>
          </div>
          <div className={styles.bannerActions}>
            <DownloadButton
              label="download PNG (512×512)"
              targetRef={profileRef}
              filename="nostrito-profile"
              scale={2}
            />
          </div>
        </div>

        {/* Profile Picture Dark */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>profile picture (dark) · 512 × 512</h2>
          <div className={styles.bannerWrapNoBorder}>
            <div ref={profileDarkRef} className={styles.bannerProfileDark}>
              <img
                src="/assets/nostrito-white.svg"
                alt="nostrito logo"
                className={styles.bannerProfileDarkImg}
              />
            </div>
          </div>
          <div className={styles.bannerActions}>
            <DownloadButton
              label="download PNG (512×512)"
              targetRef={profileDarkRef}
              filename="nostrito-profile-dark"
              scale={2}
              bg="#0a0a0a"
            />
          </div>
        </div>

        {/* Wordmark */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>wordmark · 800 × 200</h2>
          <div className={styles.bannerWrapInline}>
            <div ref={wordmarkRef} className={styles.bannerWordmark}>
              <img
                src="/assets/nostrito.svg"
                alt="nostrito logo"
                className={styles.wordmarkImg}
              />
              <div className={styles.wordmarkText}>nostrito</div>
            </div>
          </div>
          <div className={styles.bannerActions}>
            <DownloadButton
              label="download PNG (800×200)"
              targetRef={wordmarkRef}
              filename="nostrito-wordmark"
              scale={2}
            />
          </div>
        </div>

        {/* Twitter/X Header */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>twitter / X header · 1500 × 500</h2>
          <div className={styles.bannerWrap}>
            <div ref={twitterRef} className={styles.bannerTwitter}>
              <div className={styles.logoSide}>
                <img
                  src="/assets/nostrito.svg"
                  alt="nostrito logo"
                  className={styles.logoSideImg}
                />
              </div>
              <div className={styles.textSide}>
                <div className={styles.textSideName}>nostrito</div>
                <div className={styles.textSideTagline}>
                  your personal social network
                </div>
              </div>
              <div className={styles.bannerUrl}>nostrito.com</div>
            </div>
          </div>
          <div className={styles.bannerActions}>
            <DownloadButton
              label="download PNG (1500×500)"
              targetRef={twitterRef}
              filename="nostrito-twitter-header"
              scale={2}
            />
          </div>
        </div>

        {/* Nostr Banner */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>nostr profile banner · 1500 × 500</h2>
          <div className={styles.bannerWrap}>
            <div ref={nostrRef} className={styles.bannerNostr}>
              <div className={styles.nostrLogoSide}>
                <img
                  src="/assets/nostrito-white.svg"
                  alt="nostrito logo"
                  className={styles.nostrLogoImg}
                />
              </div>
              <div className={styles.nostrTextSide}>
                <div className={styles.nostrName}>nostrito</div>
                <div className={styles.nostrTagline}>
                  social media you actually own
                </div>
              </div>
              <div className={styles.nostrAccent}>personal relay</div>
              <div className={styles.nostrUrl}>nostrito.com</div>
            </div>
          </div>
          <div className={styles.bannerActions}>
            <DownloadButton
              label="download PNG (1500×500)"
              targetRef={nostrRef}
              filename="nostrito-nostr-banner"
              scale={2}
              bg="#0a0a0a"
            />
          </div>
        </div>

        {/* Square Post */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>square post · 1080 × 1080</h2>
          <div className={styles.bannerWrapInline}>
            <div ref={squareRef} className={styles.bannerSquare}>
              <img
                src="/assets/nostrito.svg"
                alt="nostrito logo"
                className={styles.bannerSquareImg}
              />
              <div className={styles.bannerSquareName}>nostrito</div>
              <div className={styles.bannerSquareTagline}>
                your personal social network
              </div>
              <div className={styles.bannerSquareUrl}>nostrito.com</div>
            </div>
          </div>
          <div className={styles.bannerActions}>
            <DownloadButton
              label="download PNG (1080×1080)"
              targetRef={squareRef}
              filename="nostrito-square-post"
              scale={2}
            />
          </div>
        </div>

        {/* GitHub Social Preview */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>
            github social preview · 1280 × 640
          </h2>
          <div className={styles.bannerWrapInline}>
            <div ref={githubRef} className={styles.bannerGithub}>
              <div className={styles.githubLeft}>
                <img
                  src="/assets/nostrito.svg"
                  alt="nostrito logo"
                  className={styles.githubLeftImg}
                />
                <div className={styles.githubLeftName}>nostrito</div>
                <div className={styles.githubLeftTagline}>
                  your personal social network
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
                    <strong>personal relay</strong>
                    <span>websocket server on localhost</span>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24">
                      <path d="M18 10h-4V6l-6 7h4v4l6-7z" />
                    </svg>
                  </div>
                  <div className={styles.featureText}>
                    <strong>offline-first</strong>
                    <span>your data, always available</span>
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
                    <strong>open source</strong>
                    <span>MIT licensed · rust</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bannerActions}>
            <DownloadButton
              label="download PNG (1280×640)"
              targetRef={githubRef}
              filename="nostrito-github-preview"
              scale={2}
            />
          </div>
        </div>

        {/* OG Social Preview */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>
            open graph / social preview · 1200 × 630
          </h2>
          <div className={styles.bannerOgWrap}>
            <img
              src="/assets/nostrito-preview.jpg"
              alt="nostrito social preview"
              className={styles.bannerOgImg}
            />
          </div>
          <div className={styles.bannerActions}>
            <a
              className={styles.btnDownloadLink}
              href="/assets/nostrito-preview.jpg"
              download="nostrito-og-preview.jpg"
            >
              {downloadIcon}
              download JPG (1200×630)
            </a>
            <a
              className={styles.btnDownloadLink}
              href="/assets/nostrito-preview.svg"
              download="nostrito-og-preview.svg"
            >
              {downloadIcon}
              download SVG
            </a>
          </div>
        </div>

        {/* Minimal Badge */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>minimal badge · 400 × 100</h2>
          <div className={styles.bannerWrapNoBorder}>
            <div ref={badgeRef} className={styles.bannerBadge}>
              <img
                src="/assets/nostrito.svg"
                alt="nostrito logo"
                className={styles.badgeImg}
              />
              <div className={styles.badgeText}>
                <div className={styles.badgeTextName}>nostrito</div>
                <div className={styles.badgeTextWs}>ws://localhost:4869</div>
              </div>
              <div className={styles.badgeDivider} />
              <div className={styles.badgeLabel}>relay</div>
            </div>
          </div>
          <div className={styles.bannerActions}>
            <DownloadButton
              label="download PNG (800×200)"
              targetRef={badgeRef}
              filename="nostrito-badge"
              scale={2}
            />
          </div>
        </div>

        {/* Raw Logo Downloads */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>logo files</h2>
          <div className={styles.bannerActions}>
            <a
              className={styles.btnDownloadLink}
              href="/assets/nostrito.svg"
              download="nostrito-logo.svg"
            >
              {downloadIcon}
              logo SVG (black)
            </a>
            <a
              className={styles.btnDownloadLink}
              href="/assets/nostrito-white.svg"
              download="nostrito-logo-white.svg"
            >
              {downloadIcon}
              logo SVG (white)
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.pageFooter}>
        <div className={styles.container}>
          <Link to="/">&larr; back to nostrito.com</Link>
        </div>
      </footer>
    </div>
  )
}
