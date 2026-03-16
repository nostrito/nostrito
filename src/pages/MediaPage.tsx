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

function DownloadButton({ label, targetRef, filename, width, height, bg }: {
  label: string
  targetRef: React.RefObject<HTMLDivElement | null>
  filename: string
  width: number
  height: number
  bg?: string
}) {
  const handleDownload = useCallback(async () => {
    if (!targetRef.current) return
    const el = targetRef.current
    const scale = width / el.offsetWidth
    const canvas = await html2canvas(el, {
      scale,
      useCORS: true,
      backgroundColor: bg ?? '#ffffff',
      width: el.offsetWidth,
      height: el.offsetHeight,
    })
    // Resize to exact target dimensions if needed
    const out = document.createElement('canvas')
    out.width = width
    out.height = height
    const ctx = out.getContext('2d')!
    ctx.drawImage(canvas, 0, 0, width, height)
    const link = document.createElement('a')
    link.download = `${filename}.png`
    link.href = out.toDataURL('image/png')
    link.click()
  }, [targetRef, filename, width, height, bg])

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
        description="download social media banners, architecture diagrams, and brand assets for sharing nostrito across platforms."
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
            brand assets, architecture diagrams, and social banners — everything
            you need to share nostrito across platforms.
          </p>
        </div>

        {/* ─── Section: Architecture & Technical ─── */}
        <div className={styles.sectionDivider}>
          <h2 className={styles.sectionTitle}>architecture &amp; technical</h2>
          <p className={styles.sectionDesc}>
            diagrams and visuals that explain how nostrito works under the hood.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>architecture diagram · SVG</h2>
          <p className={styles.assetDescription}>
            high-level overview of nostrito's internal architecture — the sync engine,
            Web of Trust engine, SQLite storage, Blossom media server, relay server,
            and how client apps connect. shows the five async components running
            inside a single rust binary.
          </p>
          <div className={styles.bannerOgWrap}>
            <img
              src="/assets/architecture-diagram.svg"
              alt="nostrito architecture diagram — sync engine, WoT engine, SQLite, Blossom storage, relay server, and client connections"
              className={styles.architectureImg}
            />
          </div>
          <div className={styles.bannerActions}>
            <a
              className={styles.btnDownloadLink}
              href="/assets/architecture-diagram.svg"
              download="nostrito-architecture-diagram.svg"
            >
              {downloadIcon}
              download SVG
            </a>
          </div>
        </div>

        {/* Animated Demo */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>animated relay demo · GIF</h2>
          <p className={styles.assetDescription}>
            animated preview showing nostrito's personal relay running locally —
            the nostr mascot in action. useful for blog posts, presentations,
            or social media to show nostrito in motion.
          </p>
          <div className={styles.bannerOgWrap}>
            <img
              src="/assets/nostr-running.gif"
              alt="nostrito animated relay demo"
              className={styles.demoGifImg}
            />
          </div>
          <div className={styles.bannerActions}>
            <a
              className={styles.btnDownloadLink}
              href="/assets/nostr-running.gif"
              download="nostrito-running-demo.gif"
            >
              {downloadIcon}
              download GIF
            </a>
          </div>
        </div>

        {/* ─── Section: Brand Identity ─── */}
        <div className={styles.sectionDivider}>
          <h2 className={styles.sectionTitle}>brand identity</h2>
          <p className={styles.sectionDesc}>
            logos, profile pictures, and wordmarks for consistent branding.
          </p>
        </div>

        {/* Profile Picture */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>profile picture · 512 × 512</h2>
          <p className={styles.assetDescription}>
            standard profile avatar on a white background. use for nostr profiles,
            github accounts, forum avatars, or anywhere a square icon is needed.
          </p>
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
              width={512}
              height={512}
            />
          </div>
        </div>

        {/* Profile Picture Dark */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>profile picture (dark) · 512 × 512</h2>
          <p className={styles.assetDescription}>
            dark variant of the profile avatar — ideal for platforms with dark themes
            or when placed on dark backgrounds.
          </p>
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
              width={512}
              height={512}
              bg="#0a0a0a"
            />
          </div>
        </div>

        {/* Wordmark */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>wordmark · 800 × 200</h2>
          <p className={styles.assetDescription}>
            horizontal logo + name lockup. use in documentation headers,
            readme files, or partner pages where the full brand name should appear
            alongside the icon.
          </p>
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
              width={800}
              height={200}
            />
          </div>
        </div>

        {/* Logo Files */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>logo files</h2>
          <p className={styles.assetDescription}>
            raw SVG logo files for maximum flexibility — scale to any size without
            quality loss. available in black (for light backgrounds) and white
            (for dark backgrounds).
          </p>
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

        {/* ─── Section: Social Media Banners ─── */}
        <div className={styles.sectionDivider}>
          <h2 className={styles.sectionTitle}>social media banners</h2>
          <p className={styles.sectionDesc}>
            ready-to-use banners sized for each platform. download as PNG and upload directly.
          </p>
        </div>

        {/* Twitter/X Header */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>twitter / X header · 1500 × 500</h2>
          <p className={styles.assetDescription}>
            cover image for twitter/X profiles. clean white design with logo on
            the left and tagline on the right — fits the recommended header dimensions.
          </p>
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
              width={1500}
              height={500}
            />
          </div>
        </div>

        {/* Nostr Banner */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>nostr profile banner · 1500 × 500</h2>
          <p className={styles.assetDescription}>
            dark-themed banner designed for nostr client profiles. features a subtle
            purple glow accent and "personal relay" label — matches the aesthetic
            of most nostr clients.
          </p>
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
              width={1500}
              height={500}
              bg="#0a0a0a"
            />
          </div>
        </div>

        {/* Square Post */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>square post · 1080 × 1080</h2>
          <p className={styles.assetDescription}>
            square format for instagram, nostr image posts, or any social feed.
            centered layout with logo, name, tagline, and URL.
          </p>
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
              width={1080}
              height={1080}
            />
          </div>
        </div>

        {/* ─── Section: Developer & Platform ─── */}
        <div className={styles.sectionDivider}>
          <h2 className={styles.sectionTitle}>developer &amp; platform</h2>
          <p className={styles.sectionDesc}>
            assets for github, open graph previews, and developer-facing contexts.
          </p>
        </div>

        {/* GitHub Social Preview */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>
            github social preview · 1280 × 640
          </h2>
          <p className={styles.assetDescription}>
            optimized for github's repository social preview. shows the nostrito
            logo alongside three key features — personal relay, offline-first
            architecture, and open source licensing. appears when the repo is
            shared on social media or in link previews.
          </p>
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
              width={1280}
              height={640}
            />
          </div>
        </div>

        {/* OG Social Preview */}
        <div className={styles.bannerSection}>
          <h2 className={styles.bannerLabel}>
            open graph / social preview · 1200 × 630
          </h2>
          <p className={styles.assetDescription}>
            the default image shown when nostrito.com is shared on any platform
            that supports open graph tags — slack, discord, telegram, imessage,
            etc. pre-rendered in both JPG and SVG formats.
          </p>
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
          <p className={styles.assetDescription}>
            compact badge showing the nostrito logo, name, and default relay
            websocket address. embed in documentation, blog posts, or readmes
            to indicate nostrito relay compatibility.
          </p>
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
              width={800}
              height={200}
            />
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
