// app/layout.tsx
import '@/styles/globals.css'; // Ensure global styles are imported
import FooterBar from '@/components/footer'; // Update the path if necessary
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react'; // Ensure this import is correct
import { IntlProvider } from 'next-intl';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (  
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>Personal Web</title>
      </head>
      <body>
        <SessionProvider>
          <Providers>
   
              <Navbar />
              <main>{children}</main>
              <FooterBar />
            
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
