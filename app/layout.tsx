import React from 'react';
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: 'Website Development & Design Services | Modern Web Solutions',
        template: '%s | AliAtish',
    },
    description:
        'Ali Atish, Web Application design, offers website development and design services specializing in scalable web applications using modern technologies like Next.js, TypeScript, Node.js, and PostgreSQL.',
    keywords: 'Website Development, Full Stack Developer, Web Design Services, Nest.js, Next.js, TypeScript, PostgreSQL, Node.js, scalable web applications, custom web development, modern technologies, UI/UX design, AI/ML, professional web solutions',
    twitter: {
        card: 'summary_large_image',
    },
    openGraph: {
        title: 'Website Development & Design Services | Modern Web Solutions',
        description:
            'Explore professional web development services by Ali Atish. We specialize in building scalable, high-performance web applications using the latest technologies like Next.js, TypeScript, PostgreSQL, and more.',
        url: 'https://aliatish.com',
        siteName: 'Ali Atish | Web Development & Design',
        type: 'website',
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
                {/* Google Tag Manager - Head */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-MP34XP5N');
                        `,
                    }}
                />
            </head>
            <body>
                {/* Google Tag Manager - Body */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MP34XP5N"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>

                {children}
            </body>
        </html>
    );
}
