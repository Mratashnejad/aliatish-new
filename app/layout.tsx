import React from 'react';
import '../styles/globals.css';
import type { Metadata } from 'next';
import Script from 'next/script'; // Import the Script component for loading external scripts

export const metadata: Metadata = {
    title: {
        default: 'Website Development & Design Services | Modern Web Solutions',
        template: '%s | AliAtish', // This ensures each page's title will follow the default format with page-specific titles
    },
    description:
        'Ali Atish, Web Application design, offers website development and design services specializing in scalable web applications using modern technologies like Next.js, TypeScript, Node.js, and PostgreSQL.',
    keywords: 'Website Development, Full Stack Developer, Web Design Services,Nest.js Next.js, TypeScript, PostgreSQL, Node.js, scalable web applications, custom web development, modern technologies, UI/UX design, AI/ML, professional web solutions',
    twitter: {
        card: 'summary_large_image', // Optimized for sharing on Twitter with rich media
    },
    openGraph: {
        title: 'Website Development & Design Services | Modern Web Solutions', // Open Graph metadata for social sharing
        description:
            'Explore professional web development services by Ali Atish. We specialize in building scalable, high-performance web applications using the latest technologies like Next.js, TypeScript, PostgreSQL, and more.',
        url: 'https://aliatish.com', // Add your site URL to make the metadata complete for social platforms
        siteName: 'Ali Atish | Web Development & Design',
        type: 'website', // Indicating that this is a website for social media links
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Google Tag Manager (Gtag) */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-EP7M3G5G7Z"
                    strategy="afterInteractive"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-EP7M3G5G7Z');
                        `,
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
