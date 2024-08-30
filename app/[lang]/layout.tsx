// app/layout.tsx
import '@/styles/globals.css'; // Ensure global styles are imported
import FooterBar from '@/components/footer'; // Update the path if necessary
import { Providers } from '@/app/[lang]/providers';
import NavbarClient from '@/components/navbarClient';
import { SessionProvider } from 'next-auth/react'; // Ensure this import is correct
import Header from '@/components/header';
import { Locale, i18n } from '@/i18n.config'

// Function to generate static params based on locales
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

// Define the RootLayout component with correct typing
export default function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: Locale } }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <title>Personal Web</title>
      </head>
      <body>
        <Header lang={params.lang} />
        <SessionProvider>
          <Providers>
            <NavbarClient lang={params.lang}/>
            <main>{children}</main>
            <FooterBar />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
