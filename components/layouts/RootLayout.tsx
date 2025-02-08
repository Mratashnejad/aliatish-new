import FooterBar from '@/components/footer';
import { Providers } from './ThemeProvider';
import Navbar from '@/components/Navbar';
import { NextIntlClientProvider } from 'next-intl';
// import GoogleTagManager from '@magicul/next-google-tag-manager';

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
            <body className="flex flex-col  bg-white dark:bg-zinc-950">
                {/* Google Tag Manager - Body */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MP34XP5N"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>

                <Providers>
                    <NextIntlClientProvider>
                        {showNavbar && <Navbar />}
                        <main className="flex-grow">{children}</main>
                        {showFooter && <FooterBar />}
                    </NextIntlClientProvider>
                </Providers>
            </body>
        </html>
    );
}
