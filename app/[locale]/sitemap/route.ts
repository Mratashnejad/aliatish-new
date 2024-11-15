// app/api/sitemap/route.ts
import { NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';

const routes = [
    '/',
    '/about',
    '/auth/sign-in',
    '/auth/auth-success',
    '/auth/auth-error',
    '/blog',
    '/dashboard',
    '/order',
    '/order/success',
    '/packages',
    '/services',
    '/services/design',
    '/services/other',
    '/services/seo',
    '/services/webapplications',
    '/shop',
    '/terms',
    '/privacy',
    '/career',
    
];

export async function GET(req:any) {
    const url = new URL(req.url);
    const defaultLocale = 'en';
    const locales = ['en', 'ir', 'hy'];
    
    const sitemapStream = new SitemapStream({ hostname: `https://aliatish.com` });

    // Generate URLs for each locale
    locales.forEach(locale => {
        routes.forEach(route => {
            sitemapStream.write({ url: `/${locale}${route}`, changefreq: 'daily', priority: 0.7 });
        });
    });

    sitemapStream.end();

    const sitemapOutput = await streamToPromise(sitemapStream).then(data => data.toString());

    return new Response(sitemapOutput, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
