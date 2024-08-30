// app/layout.tsx
import '@/styles/globals.css'; // Ensure global styles are imported
import FooterBar from '@/components/footer'; // Update the path if necessary
import { Providers } from '@/app/providers';
import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react'; // Ensure this import is correct

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
