import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Tools Platform - Discover Powerful AI Tools',
  description: 'Explore a comprehensive collection of AI tools for productivity, creativity, and automation. Download and use the best AI tools available.',
  keywords: 'AI tools, artificial intelligence, productivity tools, automation, machine learning tools',
  authors: [{ name: 'AI Tools Platform' }],
  creator: 'AI Tools Platform',
  publisher: 'AI Tools Platform',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aitoolsplatform.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Tools Platform - Discover Powerful AI Tools',
    description: 'Explore a comprehensive collection of AI tools for productivity, creativity, and automation.',
    url: 'https://aitoolsplatform.com',
    siteName: 'AI Tools Platform',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Tools Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Platform - Discover Powerful AI Tools',
    description: 'Explore a comprehensive collection of AI tools for productivity, creativity, and automation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AI Tools Platform",
              "description": "Explore a comprehensive collection of AI tools for productivity, creativity, and automation.",
              "url": "https://aitoolsplatform.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://aitoolsplatform.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
