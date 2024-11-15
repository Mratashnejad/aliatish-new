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
    showNavbar?: boolean;
    showFooter?: boolean; 
}

export default function RootLayout({
    children,
    params: { locale },
    showNavbar = true,
    showFooter = true,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang={locale} suppressHydrationWarning>
          
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
