import FooterBar from '@/components/footer';
import { Providers } from './ThemeProvider';
import Navbar from '@/components/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import GoogleTagManager from '@magicul/next-google-tag-manager';

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
                <GoogleTagManager id="GTM-MP34XP5N" />

                <Providers>
                    <NextIntlClientProvider>
                        {/* Ensure Navbar is always visible */}
                        {showNavbar && <Navbar />}
                        <main className="flex-grow ">{children}</main>
                        {/* Ensure Footer is below content */}
                        {showFooter && <FooterBar />}
                    </NextIntlClientProvider>
                </Providers>
                {/* </SessionProvider> */}
            </body>
        </html>
    );
}
