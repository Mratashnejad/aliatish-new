'use client';
import Script from 'next/script';

export default function AboutStructuredData() {
  // About page structured data
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'ALIATISH',
      description: 'Custom web development agency specializing in enterprise solutions, e-commerce platforms, and data visualization dashboards.',
      foundingDate: '2023',
      foundingLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        }
      },
      founder: {
        '@type': 'Person',
        name: 'Ali',
        jobTitle: 'Founder & CEO',
        description: 'With over 10 years in the digital universe, Ali navigates complex technologies to create stellar digital experiences that transcend expectations.'
      }
    }
  };

  // Team schema
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ALIATISH',
    url: 'https://aliatish.com',
    employee: [
      {
        '@type': 'Person',
        name: 'Ali',
        jobTitle: 'Founder & CEO',
        description: 'With over 10 years in the digital universe, Ali navigates complex technologies to create stellar digital experiences that transcend expectations.',
        knowsAbout: ['Web Development', 'Enterprise Solutions', 'Digital Strategy']
      },
      {
        '@type': 'Person',
        name: 'Development Team',
        description: 'Our skilled team of developers, designers, and digital strategists work together to create exceptional web experiences.',
        knowsAbout: ['Full-stack Development', 'UX/UI Design', 'Cloud Infrastructure']
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
        name: 'About',
        item: 'https://aliatish.com/about'
      }
    ]
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema)
        }}
      />
      <Script
        id="team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamSchema)
        }}
      />
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
} 