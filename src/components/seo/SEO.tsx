import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  url?: string
  image?: string
  type?: string
}

const DEFAULTS = {
  title: 'nostrito — your personal social network',
  description:
    'a personal social network that lives on your machine. WoT-aware, offline-first, always yours.',
  url: 'https://nostrito.com',
  image: 'https://nostrito.com/assets/nostrito-preview.jpg',
  type: 'website',
} as const

export default function SEO({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  url = DEFAULTS.url,
  image = DEFAULTS.image,
  type = DEFAULTS.type,
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="nostrito" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
