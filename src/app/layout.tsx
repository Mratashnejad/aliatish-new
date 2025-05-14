import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";

// Inter with variable weight for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// Outfit for display/headings
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// Space Grotesk as a backup/alternate font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
  colorScheme: "light dark"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aliatish.com"),
  title: {
    template: '%s | ALIATISH - Enterprise Web Solutions',
    default: 'ALIATISH - Advanced Digital Experiences & Enterprise Solutions',
  },
  description:
    "Transform your digital presence with ALIATISH, a premier web development agency specializing in enterprise solutions, e-commerce platforms, and custom digital experiences.",
  keywords: ["web development", "enterprise solutions", "digital experiences", "custom software", "e-commerce", "web design", "UI/UX", "business intelligence", "API development", "React", "Next.js"],
  authors: [{ name: "ALIATISH Development Team" }],
  creator: "ALIATISH",
  publisher: "ALIATISH Technologies",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliatish.com',
    siteName: 'ALIATISH',
    title: 'ALIATISH - Advanced Digital Experiences & Enterprise Solutions',
    description: 'Transform your digital presence with ALIATISH, a premier web development agency specializing in enterprise solutions, e-commerce platforms, and custom digital experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ALIATISH - Enterprise Web Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALIATISH - Advanced Digital Experiences',
    description: 'Transform your digital presence with ALIATISH, a premier web development agency',
    images: ['/twitter-image.jpg'],
    creator: '@aliatish',
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
  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="antialiased text-neutral bg-secondary min-h-screen noise-bg overflow-y-auto">
        {children}
        
        {/* Structured data for rich results */}
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
      </body>
    </html>
  );
}
