import React from 'react';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import { Metadata, ResolvingMetadata } from 'next';

interface Order {
  product_slug: string;
  license_key?: string;
  saas_status?: 'pending' | 'provisioned' | 'failed';
}

type Props = {
  params: { orderId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams: _searchParams }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { orderId } = params;
  return {
    title: `Download - Order #${orderId}`,
  }
}

export default function DownloadPage({ params, searchParams: _searchParams }: Props) {
  const { orderId } = params;
  const _token = _searchParams.token;

  // This would normally fetch from the server, but for now we'll mock the order
  // In production, you would make a fetch request to your API
  const order: Order = {
    product_slug: 'chrome-extension',
    license_key: 'XXXX-YYYY-ZZZZ-AAAA',
    saas_status: 'provisioned'
  };

  // Map product_slug to file URL
  const PRODUCT_FILES: Record<string, string> = {
    'crm-saas': 'https://yourdomain.com/files/crm-saas.zip',
    'chrome-extension': 'https://yourdomain.com/files/chrome-extension.zip',
    'ai-dashboard': 'https://yourdomain.com/files/ai-dashboard.zip',
  };
  const fileUrl = PRODUCT_FILES[order.product_slug] || '#';

  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-primary">Download Your Product</h1>
          <p className="text-lg mb-6">Thank you for your purchase! <span className="text-sm text-gray-400">Order #{orderId}</span></p>
          <a href={fileUrl} className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors" download>
            Download Now
          </a>
          {order?.license_key && (
            <div className="mt-8">
              <p className="text-lg font-semibold">Your License Key:</p>
              <div className="text-xl font-mono bg-white/10 rounded-lg p-4 inline-block select-all">{order.license_key}</div>
            </div>
          )}
          {order?.saas_status === 'provisioned' && (
            <div className="mt-8">
              <p className="text-lg font-semibold text-primary">Your SaaS account has been provisioned. Please check your email for login details.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
} 