// components/RootLayout.tsx
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
  showFooter:boolean;
}

export default function RootLayout({
  children,
  params: { locale },
  showNavbar = true,
  showFooter = true,
}: Readonly<RootLayoutProps>) {
  return (  
    <html lang={locale} suppressHydrationWarning>

      <body>
        <SessionProvider> 
          <Providers>
            <GoogleOneTap locale={locale} />
            {showNavbar && <Navbar />}
            <main>{children}</main>
            {showFooter && <FooterBar />}
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
