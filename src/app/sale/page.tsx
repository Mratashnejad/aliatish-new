'use client';
import React from 'react';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import PaddleLoader from '@/components/PaddleLoader';

const products = [
  {
    slug: 'chrome-extension',
    name: 'Productivity Chrome Extension',
    description: 'Boost your productivity with our Chrome extension. Automate tasks, block distractions, and track your work time.',
    image: '/images/projects/chrome-extension.jpg',
    price: 'Free',
    buyLink: 'https://chrome.google.com/webstore/detail/aliatish-productivity/xxxx',
    type: 'Extension',
    paddleProductId: '' // No Paddle ID needed for free product
  },
  {
    slug: 'crm-saas',
    name: 'Custom CRM SaaS',
    description: 'A powerful CRM platform for small businesses. Manage leads, sales, and customer relationships in one place.',
    image: '/images/projects/crm.jpg',
    price: '$19/mo',
    buyLink: 'https://demo.aliatish.com/crm',
    type: 'SaaS',
    paddleProductId: process.env.NEXT_PUBLIC_PADDLE_CRM_PRODUCT_ID || '12345' // Replace with your actual product ID from Paddle
  },
  {
    slug: 'ai-dashboard',
    name: 'AI Business Intelligence Dashboard',
    description: 'Advanced analytics and reporting for enterprises. Try the live demo or contact us for a custom solution.',
    image: '/images/projects/ai-dashboard.jpg',
    price: 'Contact Us',
    buyLink: '/contact',
    type: 'Enterprise',
    paddleProductId: process.env.NEXT_PUBLIC_PADDLE_DASHBOARD_PRODUCT_ID || '67890' // Replace with your actual product ID from Paddle
  },
];

// Paddle Integration: Replace the placeholders below with your actual Paddle Vendor ID and Product IDs from your Paddle dashboard.
// See: https://developer.paddle.com/ for more info.

export default function SalePage() {
  const [customerEmail, setCustomerEmail] = React.useState('');

  const handlePaddleCheckout = (productId: string, productSlug: string) => {
    if (typeof window !== 'undefined' && window.Paddle) {
      // Determine if we're using Paddle Classic or Paddle Billing
      const isPaddleBilling = process.env.NEXT_PUBLIC_PADDLE_BILLING === 'true';
      
      if (!isPaddleBilling && window.Paddle.Checkout) {
        // Paddle Classic implementation
        window.Paddle.Checkout.open({
          product: productId,
          passthrough: JSON.stringify({ productSlug, email: customerEmail }),
          successCallback: () => {
            window.location.href = '/order-success';
          },
          closeCallback: () => {},
        });
      } else if (isPaddleBilling && window.Paddle.Checkout) {
        // Paddle Billing implementation
        window.Paddle.Checkout.open({
          items: [{ priceId: productId, quantity: 1 }],
          passthrough: JSON.stringify({ productSlug, email: customerEmail }),
          successCallback: () => {
            window.location.href = '/order-success';
          },
          closeCallback: () => {},
        });
      }
    }
  };

  return (
    <main className="min-h-screen">
      <NavBar />
      <PaddleLoader />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Products <span className="text-primary">For Sale</span></h1>
            <p className="text-lg text-neutral/80 mb-10">Explore our ready-to-use digital products, browser extensions, and SaaS solutions.</p>
            <div className="max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Your email (optional)"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                onChange={(e) => setCustomerEmail(e.target.value)}
                value={customerEmail}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-primary/10 flex items-center justify-center">
                  <Image src={product.image} alt={product.name} className="w-full h-full object-cover" width={192} height={192} />
                </div>
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-neutral/70 mb-4">{product.description}</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{product.type}</span>
                  <span className="px-3 py-1 bg-white/10 text-neutral/80 rounded-full text-sm font-medium">{product.price}</span>
                </div>
                <div className="flex gap-4 mt-auto">
                  {product.price !== 'Free' && product.price !== 'Contact Us' ? (
                    <button
                      className="inline-flex items-center text-primary font-medium hover:underline"
                      onClick={() => handlePaddleCheckout(product.paddleProductId, product.slug)}
                    >
                      Buy with Card
                    </button>
                  ) : (
                    <a href={product.buyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-medium hover:underline">
                      {product.price === 'Contact Us' ? 'Contact Sales' : 'Get Product'}
                    </a>
                  )}
                  <Link href={`/projects/${product.slug}`} className="inline-flex items-center text-accent font-medium hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 