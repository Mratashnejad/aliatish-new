// components/RootLayout.tsx
import Head from 'next/head'; // Import next/head
import '@/styles/globals.css';
import FooterBar from '@/components/footer'; 
import { Providers } from './ThemeProvider';
import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react'; 
import GoogleOneTap from '@/components/GoogleOneTap';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
  showNavbar: boolean;
  showFooter: boolean;
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex flex-col min-h-screen">
        <SessionProvider>
          <Providers>
            <GoogleOneTap locale={locale} />
            {showNavbar && <Navbar />}
            <main className="flex-grow">
              {children}
            </main> 
            {showFooter && <FooterBar />}
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
