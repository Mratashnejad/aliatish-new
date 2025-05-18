'use client';
import Script from 'next/script';

export default function ContactStructuredData() {
  // Contact page structured data
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'ALIATISH',
      url: 'https://aliatish.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-ALIATISH',
        contactType: 'customer service',
        email: 'contact@aliatish.com',
        availableLanguage: ['English']
      }
    },
    description: 'Contact ALIATISH for custom web development services, enterprise solutions, e-commerce platforms, and data visualization dashboards.'
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aliatish.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://aliatish.com/contact'
      }
    ]
  };

  // Organization location schema
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ALIATISH',
    url: 'https://aliatish.com',
    logo: 'https://aliatish.com/logo.png',
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressRegion: 'CA',
        addressLocality: 'San Francisco'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '37.7749',
        longitude: '-122.4194'
      }
    }
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema)
        }}
      />
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <Script
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationSchema)
        }}
      />
    </>
  );
} 