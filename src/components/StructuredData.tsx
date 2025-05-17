'use client';
import Script from "next/script";

export default function StructuredData() {
  // This structured data will only be rendered on the client
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
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
          description: 'Enterprise web development agency specializing in digital experiences',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'contact@aliatish.com'
          }
        })
      }}
    />
  );
} 