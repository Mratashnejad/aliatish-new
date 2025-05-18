import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import PaddleLoader from '@/components/PaddleLoader';
import StructuredData from '@/components/StructuredData';

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
    template: '%s | ALIATISH - Custom Web Development & Enterprise Solutions',
    default: 'ALIATISH - High-Performance Web Apps & Enterprise Digital Solutions',
  },
  description:
    "ALIATISH delivers high-performance web applications, e-commerce solutions, and data visualization dashboards with cosmic-inspired designs. Transform your business with our enterprise-grade development services.",
  keywords: [
    "custom web development", 
    "enterprise solutions", 
    "digital experiences", 
    "microservices architecture", 
    "data visualization", 
    "e-commerce platforms", 
    "real-time dashboards", 
    "API development", 
    "React", 
    "Next.js", 
    "business intelligence", 
    "cloud infrastructure",
    "scalable applications",
    "UI/UX design"
  ],
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
    title: 'ALIATISH - High-Performance Web Apps & Enterprise Digital Solutions',
    description: 'ALIATISH delivers high-performance web applications, e-commerce solutions, and data visualization dashboards with cosmic-inspired designs. Transform your business with our enterprise-grade development services.',
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
    title: 'ALIATISH - High-Performance Web Apps & Enterprise Solutions',
    description: 'Custom web development with microservices architecture, data visualization dashboards, and e-commerce solutions for modern businesses',
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
  alternates: {
    canonical: 'https://aliatish.com',
    languages: {
      'en-US': 'https://aliatish.com',
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual code when available
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
        
        {/* Force reduced motion for stability */}
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            :root {
              scroll-behavior: auto;
            }
          }
        `}</style>
      </head>
      <body suppressHydrationWarning className="antialiased mac-desktop font-chicago min-h-screen overflow-y-auto">
        {children}
        <PaddleLoader />
        <StructuredData />
      </body>
    </html>
  );
}
