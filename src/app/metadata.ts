import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ALIATISH - High-Performance Web Development & Enterprise Digital Solutions',
  description: 'ALIATISH delivers cutting-edge web applications, e-commerce platforms, and data visualization dashboards with cosmic-inspired designs. Transform your business with our enterprise-grade development services.',
  keywords: [
    'custom web development', 
    'enterprise web solutions', 
    'e-commerce platforms', 
    'data visualization dashboards',
    'API development',
    'high-performance web apps', 
    'microservices architecture',
    'React development',
    'Next.js applications',
    'business intelligence tools',
    'digital transformation',
    'enterprise software development'
  ],
  openGraph: {
    type: 'website',
    url: 'https://aliatish.com',
    title: 'ALIATISH - High-Performance Web Development & Enterprise Digital Solutions',
    description: 'ALIATISH delivers cutting-edge web applications, e-commerce platforms, and data visualization dashboards with cosmic-inspired designs. Transform your business with our enterprise-grade development services.',
    images: [
      {
        url: '/images/og/home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ALIATISH - Enterprise Web Solutions',
      },
    ],
    siteName: 'ALIATISH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALIATISH - High-Performance Web Development & Enterprise Solutions',
    description: 'Custom web development with microservices architecture, data visualization dashboards, and e-commerce solutions.',
    images: ['/images/twitter/home-twitter.jpg'],
    creator: '@aliatish',
  },
  alternates: {
    canonical: 'https://aliatish.com',
    languages: {
      'en-US': 'https://aliatish.com',
    },
  },
  applicationName: 'ALIATISH',
  referrer: 'origin-when-cross-origin',
  creator: 'ALIATISH Development Team',
  publisher: 'ALIATISH Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}; 