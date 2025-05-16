import React from 'react';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

export default function OrderFailedPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-red-500">Payment Failed</h1>
          <p className="text-lg mb-6">Unfortunately, your payment could not be processed.</p>
          <p className="mb-8">This may be due to insufficient funds, card issues, or a network error. Please try again or contact support for assistance.</p>
          <div className="flex justify-center gap-4">
            <Link href="/sale" className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              Try Again
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 text-primary font-medium hover:bg-white/20 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 