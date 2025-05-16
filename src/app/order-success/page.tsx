import React from 'react';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-primary">Thank You for Your Purchase!</h1>
          <p className="text-lg mb-6">Your order was successful. A confirmation email has been sent to you with your order details.</p>
          <p className="mb-8">You can download your product below or check your email for the download link.</p>
          <Link href="/download/ORDER_ID_PLACEHOLDER" className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
            Download Product
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
} 