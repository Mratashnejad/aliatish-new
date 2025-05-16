'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

const projects = [
  {
    slug: 'ai-dashboard',
    title: 'AI Business Intelligence Dashboard',
    description: 'A real-time dashboard for enterprise analytics powered by AI and machine learning. Features include custom reports, predictive analytics, and data visualization.',
    image: '/images/projects/ai-dashboard.jpg',
    liveDemo: 'https://demo.aliatish.com/ai-dashboard',
    tech: ['React', 'Next.js', 'Node.js', 'AI/ML'],
  },
  {
    slug: 'ecommerce-platform',
    title: 'Next-Gen E-commerce Platform',
    description: 'A scalable, conversion-optimized e-commerce solution for modern retailers. Includes product management, checkout, and analytics.',
    image: '/images/projects/ecommerce.jpg',
    liveDemo: 'https://demo.aliatish.com/ecommerce',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
  },
  {
    slug: 'chrome-extension',
    title: 'Productivity Chrome Extension',
    description: 'A browser extension to boost productivity and automate daily tasks. Available on the Chrome Web Store.',
    image: '/images/projects/chrome-extension.jpg',
    liveDemo: 'https://chrome.google.com/webstore/detail/aliatish-productivity/xxxx',
    tech: ['JavaScript', 'Chrome API'],
  },
  {
    slug: 'custom-crm',
    title: 'Custom CRM Solution',
    description: 'A tailored CRM platform for managing customer relationships and sales pipelines. Features include contact management, sales tracking, and reporting.',
    image: '/images/projects/crm.jpg',
    liveDemo: 'https://demo.aliatish.com/crm',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
];

export default function ProjectSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen">
        <NavBar />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the project you are looking for.</p>
          <Link href="/projects" className="text-primary hover:underline">Back to Projects</Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{project.title}</h1>
            <p className="text-lg text-neutral/80 mb-8">{project.description}</p>
            <div className="w-full h-64 rounded-xl overflow-hidden mb-8 bg-primary/10 flex items-center justify-center">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="mb-8">
              <span className="font-medium text-primary">Tech Stack:</span>
              <ul className="inline-flex flex-wrap gap-3 ml-2">
                {project.tech.map((t, i) => (
                  <li key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-neutral/80">{t}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                Live Demo
              </a>
              <Link href="/projects" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 font-medium transition-colors">
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
