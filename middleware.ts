// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ir', 'hy'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/en/:path*', '/ir/:path*', '/hy/:path*'],
};
  