'use client';
import React from 'react';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-center">Privacy Policy</h1>
            <p className="text-neutral/80 mb-8 text-center">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>
                <p>We collect information you provide directly (such as name, email, and project details) and information automatically collected through cookies and analytics tools.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">2. How We Use Your Information</h2>
                <p>We use your information to provide and improve our services, communicate with you, and personalize your experience. We do not sell your data to third parties.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">3. Cookies & Tracking</h2>
                <p>We use cookies and similar technologies to analyze site traffic and enhance your experience. You can control cookies through your browser settings.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">4. Data Security</h2>
                <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">5. Your Rights</h2>
                <p>You have the right to access, update, or delete your personal information. Contact us at <a href="mailto:contact@aliatish.com" className="text-primary underline">contact@aliatish.com</a> for any privacy-related requests.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-2">6. Changes to This Policy</h2>
                <p>We may update this policy from time to time. We encourage you to review it regularly.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
