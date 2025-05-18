import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Web Development & Digital Services | ALIATISH',
  description: 'Transform your business with our high-performance web applications, e-commerce solutions, data visualization dashboards, and API integration services. Discover how our custom development solutions can drive your digital success.',
  keywords: [
    'enterprise web applications', 
    'e-commerce development', 
    'business intelligence dashboards', 
    'API development',
    'system integration',
    'digital transformation', 
    'microservices architecture',
    'custom software development',
    'high-performance web apps',
    'real-time data visualization'
  ],
  openGraph: {
    title: 'Enterprise Web Development & Digital Services | ALIATISH',
    description: 'Transform your business with our high-performance web applications, e-commerce solutions, data visualization dashboards, and API integration services. Discover how our custom development solutions can drive your digital success.',
    url: 'https://aliatish.com/services',
    siteName: 'ALIATISH',
    images: [
      {
        url: '/images/og/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ALIATISH Web Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Web Development & Digital Services | ALIATISH',
    description: 'Custom web applications, e-commerce platforms, data dashboards, and API integration services for modern businesses.',
    images: ['/images/twitter/services-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://aliatish.com/services',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}; 