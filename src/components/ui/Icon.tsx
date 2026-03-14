interface IconProps {
  name: string
  size?: number
  className?: string
  color?: string
}

const icons: Record<string, (p: { size: number; color?: string }) => React.JSX.Element> = {
  relay: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" fill="none" />
      <circle cx="12" cy="9" r="2" fill={color || 'currentColor'} stroke="none" />
      <path d="M4.5 9H2" /><path d="M22 9h-2.5" />
      <path d="M12 2V0" /><path d="M19.1 3.9l1.4-1.4" /><path d="M4.9 3.9L3.5 2.5" />
    </svg>
  ),
  blossom: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2c2 3 2 5 0 7" /><path d="M12 15c-2 2-2 5 0 7" />
      <path d="M2 12c3-2 5-2 7 0" /><path d="M15 12c2 2 5 2 7 0" />
      <path d="M4.9 4.9c2.8.3 4.3 1.8 4.2 4.2" /><path d="M19.1 4.9c-2.8.3-4.3 1.8-4.2 4.2" />
      <path d="M4.9 19.1c2.8-.3 4.3-1.8 4.2-4.2" /><path d="M19.1 19.1c-2.8-.3-4.3-1.8-4.2-4.2" />
    </svg>
  ),
  target: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  lock: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  web: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M12 2a14.5 14.5 0 0 1 0 20" />
      <path d="M2 12h20" /><path d="M5 5l14 14" /><path d="M19 5L5 19" />
    </svg>
  ),
  zap: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || 'currentColor'} stroke="none">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  gamepad: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="3" />
      <path d="M8 9v4" /><path d="M6 11h4" /><circle cx="16" cy="10" r="1" fill={color || 'currentColor'} /><circle cx="18" cy="12" r="1" fill={color || 'currentColor'} />
    </svg>
  ),
  apple: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || 'currentColor'} stroke="none">
      <path d="M18.7 12.4c0-3-2.5-4.5-2.6-4.5.2-.3 1-2.3.4-4-.6.2-2.2 1-3.5 1-1.2 0-2.8-1-3.5-1-.6 1.7.2 3.7.4 4C9.8 7.9 7.3 9.4 7.3 12.4c0 4.5 3 7.6 4.7 7.6.8 0 1.5-.5 2-.5s1.2.5 2 .5c1.7 0 4.7-3.1 4.7-7.6zM14.5 5c.5-.7.8-1.6.7-2.5-.7.1-1.6.5-2.1 1.2-.5.6-.9 1.5-.8 2.4.8 0 1.6-.4 2.2-1.1z" />
    </svg>
  ),
  linux: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || 'currentColor'} stroke="none">
      <path d="M12 2C9.2 2 7 5 7 8.5c0 1.5.3 2.9.8 4L5 16c-.5 1 .2 2 1.2 2h1.4c.5 1.2 2 2 4.4 2s3.9-.8 4.4-2h1.4c1 0 1.7-1 1.2-2l-2.8-3.5c.5-1.1.8-2.5.8-4C17 5 14.8 2 12 2zm-2 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 3h2c0 1-1 2-1 2s-1-1-1-2z" />
    </svg>
  ),
  windows: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || 'currentColor'} stroke="none">
      <path d="M3 12.5h8V21l-8-1.2V12.5zM3 11h8V3L3 4.2V11zM12.5 12.5H21V22l-8.5-1.2v-8.3zM12.5 11H21V2l-8.5 1.2V11z" />
    </svg>
  ),
  onion: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-5 0-8-4-8-10S7 2 12 2s8 4 8 10-3 10-8 10z" />
      <path d="M12 18c-3 0-5-2.5-5-6s2-6 5-6 5 2.5 5 6-2 6-5 6z" />
      <path d="M12 14c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" />
    </svg>
  ),
  handshake: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 11H4" /><path d="M4 11l4-4 3 1 3-3 2 2 4-1" />
      <path d="M4 11l5 5 2-1 2 2 3-3 4 4" />
    </svg>
  ),
  heartbeat: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21C12 21 4 15 4 9a4.5 4.5 0 0 1 8-2.9A4.5 4.5 0 0 1 20 9c0 6-8 12-8 12z" />
      <path d="M3 12h4l2-3 3 6 2-3h7" />
    </svg>
  ),
  refresh: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 3v6h-6" />
    </svg>
  ),
  chat: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  repost: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  ),
  chart: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
    </svg>
  ),
  save: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
    </svg>
  ),
  gear: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  pepper: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || 'currentColor'} stroke="none">
      <path d="M15 2c1 0 2 1 2 2-1 0-2 0-3 1-2 2-3 5-3 8 0 4-2 7-5 9-1 .5-2 0-2-1 0-3 1-5 2-7 0-1-1-2-2-2-1-.5-1-2 0-2 2-1 4 0 5 1 1-3 3-6 5-8 0-1 1-1 1-1z" />
    </svg>
  ),
  book: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  key: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.6 7.6a5.5 5.5 0 1 0-7.8 7.8 5.5 5.5 0 0 0 7.8-7.8zM15 6l-2.3 2.3M17 4l-2.3 2.3" />
    </svg>
  ),
  castle: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V7l4-4v4l4-4v4l4-4v4l4-4v14" /><path d="M4 21h16" />
      <rect x="9" y="14" width="6" height="7" rx="1" />
    </svg>
  ),
  sparkle: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color || 'currentColor'} stroke="none">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
    </svg>
  ),
  plug: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" /><path d="M9 8V3" /><path d="M15 8V3" />
      <rect x="5" y="8" width="14" height="5" rx="2" /><path d="M8 13v2a4 4 0 0 0 8 0v-2" />
    </svg>
  ),
  image: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  video: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="15" height="16" rx="2" /><path d="M17 8l5-3v14l-5-3" />
    </svg>
  ),
  audio: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M19 5a9 9 0 0 1 0 14" />
    </svg>
  ),
  circle: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" fill={color || 'currentColor'} />
    </svg>
  ),
  bee: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="14" rx="5" ry="6" /><path d="M12 8V4" />
      <path d="M9 5l3 3 3-3" /><path d="M8 13h8" /><path d="M8 16h8" />
      <path d="M7 12l-3-2" /><path d="M17 12l3-2" />
    </svg>
  ),
  shell: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-4.4 0-8-3.6-8-8 0-6 8-12 8-12s8 6 8 12c0 4.4-3.6 8-8 8z" />
      <path d="M12 22c-2 0-4-3.6-4-8s2-8 4-8 4 3.6 4 8-2 8-4 8z" />
    </svg>
  ),
  wine: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8l-1.5 7c-.3 1.5-1.5 3-4.5 3s-4.2-1.5-4.5-3L8 2z" />
      <path d="M12 12v7" /><path d="M8 22h8" />
    </svg>
  ),
  gem: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l4 6-10 12L2 9z" /><path d="M2 9h20" /><path d="M12 21L8 9l4-6 4 6z" />
    </svg>
  ),
  honey: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2h4v4h-4z" /><path d="M6 8a6 6 0 0 0 12 0" />
      <path d="M6 8v6c0 3.3 2.7 6 6 6s6-2.7 6-6V8" />
      <path d="M10 14h4" />
    </svg>
  ),
  feed: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" fill={color || 'currentColor'} />
    </svg>
  ),
}

export default function Icon({ name, size = 16, className, color }: IconProps) {
  const renderIcon = icons[name]
  if (!renderIcon) return null
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', verticalAlign: 'middle', lineHeight: 0, flexShrink: 0 }}>
      {renderIcon({ size, color })}
    </span>
  )
}
