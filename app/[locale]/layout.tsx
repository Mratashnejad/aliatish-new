// app/layout.tsx
import '@/styles/globals.css';
import FooterBar from '@/components/footer'; 
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react'; 
import GoogleOneTap from '@/components/GoogleOneTap';

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
              <GoogleOneTap locale = {locale}/>
              <Navbar />
              <main>{children}</main>
              <FooterBar />
            
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
