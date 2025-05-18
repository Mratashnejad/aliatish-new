'use client';
import Script from "next/script";

export default function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ALIATISH',
    url: 'https://aliatish.com',
    logo: 'https://aliatish.com/logo.png',
    sameAs: [
      'https://twitter.com/aliatish',
      'https://linkedin.com/company/aliatish',
      'https://github.com/aliatish',
    ],
    description: 'Enterprise web development agency specializing in high-performance applications, microservices architecture, and digital experiences',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@aliatish.com',
      availableLanguage: ['English']
    },
    foundingDate: '2023',
    founders: [
      {
        '@type': 'Person',
        name: 'Ali',
        jobTitle: 'Founder & CEO'
      }
    ]
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ALIATISH',
    url: 'https://aliatish.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aliatish.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  // Service offerings
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development',
    provider: {
      '@type': 'Organization',
      name: 'ALIATISH'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Enterprise Web Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Web Applications',
            description: 'Custom enterprise-grade applications with robust architecture, seamless integrations, and uncompromising security.',
            url: 'https://aliatish.com/services/enterprise-web'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Solutions',
            description: 'Scalable, conversion-optimized online stores with immersive shopping experiences and frictionless checkout flows.',
            url: 'https://aliatish.com/services/ecommerce'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Intelligence Dashboards',
            description: 'Interactive data visualization platforms transforming complex datasets into actionable insights and strategic advantages.',
            url: 'https://aliatish.com/services/dashboards'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'API Development & Integration',
            description: 'Robust, scalable APIs that enable seamless communication between systems and unlock business capabilities.',
            url: 'https://aliatish.com/services/api-integration'
          }
        }
      ]
    }
  };

  // FAQs for better SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does ALIATISH offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ALIATISH specializes in enterprise web applications, e-commerce solutions, business intelligence dashboards, and API development & integration.'
        }
      },
      {
        '@type': 'Question',
        name: 'What technologies does ALIATISH use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use cutting-edge technologies including React, Next.js, TypeScript, Node.js, GraphQL, and modern cloud infrastructure to deliver high-performance digital solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does ALIATISH approach web development projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We approach each project with a focus on scalability, performance, and user experience. Our development process includes microservices architecture, real-time data processing, and seamless integrations to create digital experiences that exceed expectations.'
        }
      }
    ]
  };

  // Breadcrumb Schema for homepage
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aliatish.com'
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
} 