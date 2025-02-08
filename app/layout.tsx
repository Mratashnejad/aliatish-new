import React from 'react';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';

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
               
            </head>
            <body>
               <GoogleTagManager gtmId ='GTM-MP34XP5N'/>
                {children}
            </body>
        </html>
    );
}
