import React, { lazy, Suspense } from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const ProjectsTab = lazy(() => import('@/components/HomeTabs/projectTab'));
const ResumeTab = lazy(() => import('@/components/HomeTabs/resumeTab'));
const PricingTab = lazy(() => import('@/components/HomeTabs/pricingTab'));
const ContactForm = lazy(() => import('@/components/HomeTabs/contactFrom'));

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen py-16 px-6 z-10 w-full bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="relative z-10 text-center mt-16 px-6">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span className="block">{page.homePage.heroSection.title}</span>
            <span className="block">Digital Presence</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            {page.homePage.heroSection.subtitle}
          </p>
          <a
            href={page.homePage.heroSection.cta.href}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition"
          >
            {page.homePage.heroSection.cta.text}
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsTab />
      </Suspense>

      {/* Resume Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <ResumeTab />
      </Suspense>

      {/* Pricing Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <PricingTab />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
