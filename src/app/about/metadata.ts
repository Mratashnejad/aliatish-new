import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ALIATISH | Custom Web Development Team',
  description: 'Meet our team of expert developers at ALIATISH, led by founder Ali. We transform businesses through cutting-edge web applications, e-commerce solutions, and data visualization dashboards.',
  keywords: [
    'web development team', 
    'software development company', 
    'enterprise solutions team', 
    'custom software developers',
    'ALIATISH founder',
    'web application experts', 
    'full-stack developers',
    'technology consultants',
    'digital transformation specialists',
  ],
  openGraph: {
    title: 'About ALIATISH | Custom Web Development Team',
    description: 'Meet our team of expert developers at ALIATISH, led by founder Ali. We transform businesses through cutting-edge web applications, e-commerce solutions, and data visualization dashboards.',
    url: 'https://aliatish.com/about',
    siteName: 'ALIATISH',
    images: [
      {
        url: '/images/og/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ALIATISH Development Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ALIATISH | Custom Web Development Team',
    description: 'Meet our team of expert developers specializing in enterprise web applications, e-commerce solutions, and data visualization.',
    images: ['/images/twitter/about-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://aliatish.com/about',
  },
}; 