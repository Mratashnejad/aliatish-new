'use client';
import React from 'react';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

const projects = [
  {
    slug: 'ai-dashboard',
    title: 'AI Business Intelligence Dashboard',
    description: 'A real-time dashboard for enterprise analytics powered by AI and machine learning.',
    image: '/images/projects/ai-dashboard.jpg',
    liveDemo: 'https://demo.aliatish.com/ai-dashboard',
  },
  {
    slug: 'ecommerce-platform',
    title: 'Next-Gen E-commerce Platform',
    description: 'A scalable, conversion-optimized e-commerce solution for modern retailers.',
    image: '/images/projects/ecommerce.jpg',
    liveDemo: 'https://demo.aliatish.com/ecommerce',
  },
  {
    slug: 'chrome-extension',
    title: 'Productivity Chrome Extension',
    description: 'A browser extension to boost productivity and automate daily tasks.',
    image: '/images/projects/chrome-extension.jpg',
    liveDemo: 'https://chrome.google.com/webstore/detail/aliatish-productivity/xxxx',
  },
  {
    slug: 'custom-crm',
    title: 'Custom CRM Solution',
    description: 'A tailored CRM platform for managing customer relationships and sales pipelines.',
    image: '/images/projects/crm.jpg',
    liveDemo: 'https://demo.aliatish.com/crm',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our <span className="text-primary">Projects</span></h1>
            <p className="text-lg text-neutral/80 mb-10">Explore our portfolio of digital solutions, live demos, and innovative products.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-primary/10 flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-neutral/70 mb-4">{project.description}</p>
                <div className="flex gap-4 mt-auto">
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-primary font-medium hover:underline">
                    View Details
                  </Link>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent font-medium hover:underline">
                    Live Demo
                  </a>
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
