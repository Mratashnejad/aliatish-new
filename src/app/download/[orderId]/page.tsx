import React from 'react';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import { Pool } from 'pg';
import { notFound } from 'next/navigation';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default async function DownloadPage({ params, searchParams }: any) {
  const { orderId } = params;
  const token = searchParams?.token;
  if (!orderId || !token) return notFound();

  // Look up order in DB
  let order;
  try {
    const { rows } = await pool.query(
      'SELECT * FROM orders WHERE order_id = $1 AND download_token = $2 AND status = $3',
      [orderId, token, 'paid']
    );
    order = rows[0];
  } catch (err) {
    return notFound();
  }
  if (!order) return notFound();

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
          <p className="text-lg mb-6">Thank you for your purchase!</p>
          <a href={fileUrl} className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors" download>
            Download Now
          </a>
          {order.license_key && (
            <div className="mt-8">
              <p className="text-lg font-semibold">Your License Key:</p>
              <div className="text-xl font-mono bg-white/10 rounded-lg p-4 inline-block select-all">{order.license_key}</div>
            </div>
          )}
          {order.saas_status === 'provisioned' && (
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