import FooterBar from '@/components/footer';
import { Providers } from '@/components/layouts/ThemeProvider';
import Navbar from '@/components/Navbar';
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
    showNavbar = true,
    showFooter = true,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className="flex flex-col  bg-white dark:bg-zinc-950">
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
