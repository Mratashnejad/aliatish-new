'use client';
import Script from 'next/script';

export default function ServicesStructuredData() {
  // Services collection schema
  const servicesSchema = {
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
            name: 'ALIATISH',
            url: 'https://aliatish.com'
          },
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          serviceOutput: 'Custom enterprise web applications',
          termsOfService: 'https://aliatish.com/terms'
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
            name: 'ALIATISH',
            url: 'https://aliatish.com'
          },
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          serviceOutput: 'Custom e-commerce platforms',
          termsOfService: 'https://aliatish.com/terms'
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
            name: 'ALIATISH',
            url: 'https://aliatish.com'
          },
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          serviceOutput: 'Data visualization dashboards',
          termsOfService: 'https://aliatish.com/terms'
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'API Development & Integration',
          url: 'https://aliatish.com/services/api-integration',
          description: 'Robust, scalable APIs that enable seamless communication between systems and unlock business capabilities.',
          provider: {
            '@type': 'Organization',
            name: 'ALIATISH',
            url: 'https://aliatish.com'
          },
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          serviceOutput: 'Custom API solutions',
          termsOfService: 'https://aliatish.com/terms'
        }
      }
    ]
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
        name: 'Services',
        item: 'https://aliatish.com/services'
      }
    ]
  };

  // FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of web applications can ALIATISH develop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ALIATISH specializes in developing a wide range of web applications including enterprise solutions, e-commerce platforms, business intelligence dashboards, and custom software tailored to specific business needs. Our applications are built with scalability, security, and performance in mind.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does ALIATISH approach e-commerce development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our e-commerce development process begins with a thorough understanding of your business, products, and target audience. We focus on creating intuitive user experiences, optimizing for conversions, implementing secure payment gateways, and ensuring mobile responsiveness. Our solutions include inventory management, marketing tools, and analytics to help grow your online business.'
        }
      },
      {
        '@type': 'Question',
        name: 'What technologies does ALIATISH use for dashboard development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For business intelligence dashboards, we utilize modern technologies like React, D3.js, and Next.js for the frontend, combined with robust backend solutions for data processing. Our dashboards feature real-time data visualization, interactive elements, customizable views, and secure data handling to ensure you get actionable insights from your business data.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can ALIATISH integrate my existing systems with new applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! Our API development and integration services are designed to create seamless connections between your existing systems and new applications. We build custom APIs using RESTful and GraphQL architectures, ensure secure data exchange, and provide comprehensive documentation. Our integration capabilities help unify your technology ecosystem and improve operational efficiency.'
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema)
        }}
      />
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  );
} 