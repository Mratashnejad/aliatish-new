'use client';
import Script from 'next/script';

export default function HomeStructuredData() {
  // Homepage structured data
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ALIATISH',
    url: 'https://aliatish.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aliatish.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    description: 'ALIATISH delivers cutting-edge web applications, e-commerce platforms, and data visualization dashboards with cosmic-inspired designs.'
  };

  // Business entity schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ALIATISH',
    image: 'https://aliatish.com/logo.png',
    '@id': 'https://aliatish.com',
    url: 'https://aliatish.com',
    telephone: '+1-800-ALIATISH',
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
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://twitter.com/aliatish',
      'https://linkedin.com/company/aliatish',
      'https://github.com/aliatish'
    ],
    priceRange: '$$$',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '37.7749',
        longitude: '-122.4194'
      },
      geoRadius: '50000'
    }
  };

  // Main services offered
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Enterprise Web Applications',
          url: 'https://aliatish.com/services/enterprise-web',
          description: 'Custom enterprise-grade applications with robust architecture, seamless integrations, and uncompromising security.',
          provider: {
            '@type': 'Organization',
            name: 'ALIATISH'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'E-commerce Solutions',
          url: 'https://aliatish.com/services/ecommerce',
          description: 'Scalable, conversion-optimized online stores with immersive shopping experiences and frictionless checkout flows.',
          provider: {
            '@type': 'Organization',
            name: 'ALIATISH'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Business Intelligence Dashboards',
          url: 'https://aliatish.com/services/dashboards',
          description: 'Interactive data visualization platforms transforming complex datasets into actionable insights and strategic advantages.',
          provider: {
            '@type': 'Organization',
            name: 'ALIATISH'
          }
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      <Script
        id="offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerSchema)
        }}
      />
    </>
  );
} 