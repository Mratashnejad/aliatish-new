'use client';
import React from 'react';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-center">Terms of Service</h1>
            <p className="text-neutral/80 mb-8 text-center">Please read these terms carefully before using our website or services.</p>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
                <p>By accessing or using our website, you agree to be bound by these terms and all applicable laws and regulations.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">2. Use of Services</h2>
                <p>You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services to violate any laws or infringe on the rights of others.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">3. Intellectual Property</h2>
                <p>All content, trademarks, and intellectual property on this site are owned by ALIATISH or its licensors. You may not use, reproduce, or distribute any content without permission.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">4. Limitation of Liability</h2>
                <p>We are not liable for any damages arising from your use of our website or services. Our liability is limited to the maximum extent permitted by law.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">5. Changes to Terms</h2>
                <p>We may update these terms at any time. Continued use of our website constitutes acceptance of the revised terms.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">6. Contact</h2>
                <p>If you have any questions about these terms, please contact us at <a href="mailto:contact@aliatish.com" className="text-primary underline">contact@aliatish.com</a>.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
