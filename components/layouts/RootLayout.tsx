import Head from 'next/head';
import FooterBar from '@/components/footer';
import { Providers } from './ThemeProvider';
import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react';
import GoogleOneTap from '@/components/GoogleOneTap';
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';

interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
    showNavbar?: boolean; // Make optional for flexibility
    showFooter?: boolean; // Make optional for flexibility
}

export default function RootLayout({
    children,
    params: { locale },
    showNavbar = true,
    showFooter = true,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang={locale} suppressHydrationWarning>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"/>

            </Head>
            <body className="flex flex-col  bg-white dark:bg-zinc-950">
                <SessionProvider>
                    <Providers>
                        <GoogleOneTap />
                        <NextIntlClientProvider>
                            {/* Ensure Navbar is always visible */}
                            {showNavbar && <Navbar />}
                            <main className="flex-grow ">{children}</main>
                            {/* Ensure Footer is below content */}
                            {showFooter && <FooterBar />}
                        </NextIntlClientProvider>
                    </Providers>
                </SessionProvider>
            </body>
        </html>
    );
}
