'use client';
import React from 'react';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

const useCases = [
  {
    title: 'Enterprise Data Visualization',
    description: 'Transform raw data into actionable insights with custom dashboards and analytics tools.',
    exampleProject: 'AI Business Intelligence Dashboard',
    projectSlug: 'ai-dashboard',
  },
  {
    title: 'E-commerce Automation',
    description: 'Automate inventory, order processing, and customer engagement for online stores.',
    exampleProject: 'Next-Gen E-commerce Platform',
    projectSlug: 'ecommerce-platform',
  },
  {
    title: 'Sales Pipeline Management',
    description: 'Streamline sales processes and improve conversion rates with a custom CRM.',
    exampleProject: 'Custom CRM Solution',
    projectSlug: 'custom-crm',
  },
  {
    title: 'Productivity Tools',
    description: 'Enhance team productivity with browser extensions and workflow automation apps.',
    exampleProject: 'Productivity Chrome Extension',
    projectSlug: 'chrome-extension',
  },
];

export default function UseCasePage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Use <span className="text-primary">Cases</span></h1>
            <p className="text-lg text-neutral/80 mb-10">See how our solutions solve real business challenges across industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{useCase.title}</h2>
                <p className="text-neutral/70 mb-4">{useCase.description}</p>
                <div className="mt-auto">
                  <span className="text-primary font-medium">Example:</span>{' '}
                  <Link href={`/projects/${useCase.projectSlug}`} className="hover:underline text-accent">
                    {useCase.exampleProject}
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