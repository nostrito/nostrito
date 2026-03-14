import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  url?: string
  image?: string
  type?: string
  jsonLd?: Record<string, unknown>
}

const DEFAULTS = {
  title: 'nostrito — your personal social network',
  description:
    'a personal social network that lives on your machine. offline-first, always yours.',
  url: 'https://nostrito.com',
  image: 'https://nostrito.com/assets/nostrito-preview.jpg',
  type: 'website',
} as const

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'nostrito',
  url: 'https://nostrito.com',
  logo: 'https://nostrito.com/assets/nostrito-white.svg',
  sameAs: ['https://github.com/nostrito'],
}

const SOFTWARE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'nostrito',
  description: 'a personal social network that lives on your machine. offline-first, always yours.',
  url: 'https://nostrito.com',
  applicationCategory: 'SocialNetworkingApplication',
  operatingSystem: 'macOS',
  license: 'https://opensource.org/licenses/MIT',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  downloadUrl: 'https://github.com/nostrito/nostrito-app/releases/download/v0.1.0/nostrito_0.1.0_aarch64.dmg',
}

export default function SEO({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  url = DEFAULTS.url,
  image = DEFAULTS.image,
  type = DEFAULTS.type,
  jsonLd,
}: SEOProps) {
  const isHome = url === DEFAULTS.url

  const structuredData = jsonLd
    ? [jsonLd]
    : isHome
      ? [ORG_JSON_LD, SOFTWARE_JSON_LD]
      : [{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          description,
          url,
          isPartOf: { '@type': 'WebSite', name: 'nostrito', url: 'https://nostrito.com' },
        }]

  return (
    <Helmet>
      {/* Standard */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

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

      {/* JSON-LD */}
      {structuredData.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  )
}
