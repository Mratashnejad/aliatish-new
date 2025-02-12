'use client';

import { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useLocale } from 'next-intl';

interface GoogleResponse {
  credential: string;
}

export default function GoogleOneTap() {
  const locale = useLocale();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically load Google One Tap library
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            callback: async (response: GoogleResponse) => {
              await signIn('google', {
                id_token: response.credential,
                redirectTo: '/dashboard',
              });
            },
            cancel_on_tap_outside: false,
          });

          window.google.accounts.id.prompt();
        }
      };
      document.head.appendChild(script);
    }
  }, [locale]);

  return null;
}
