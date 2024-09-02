import React from 'react';
import '../styles/globals.css';
import {NextIntlClientProvider} from 'next-intl';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
