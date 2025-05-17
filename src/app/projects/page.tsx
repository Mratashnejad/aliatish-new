'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';

// Define types for our data structures
interface ProjectResult {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveDemo: string;
  categories: string[];
  technologies: string[];
  results: string[];
}

interface Category {
  id: string;
  name: string;
}

interface CaseStudy {
  projectSlug: string;
  client: string;
  challenge: string;
  approach: string;
  solution: string;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
}

interface Star {
  size: number;
  top: number;
  left: number;
  opacity: number;
  animationDuration: number;
}

// Project categories
const categories: Category[] = [
  { id: 'all', name: 'All Projects' },
  { id: 'enterprise', name: 'Enterprise' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'analytics', name: 'Analytics' },
  { id: 'integration', name: 'API & Integration' }
];

// Expanded project data
const projects: ProjectResult[] = [
  {
    slug: 'ai-dashboard',
    title: 'AI Business Intelligence Dashboard',
    description: 'A real-time analytics platform for enterprise decision-making powered by AI and machine learning, providing actionable insights from complex datasets.',
    longDescription: 'We created a sophisticated business intelligence platform that transforms raw data into visualized insights. The dashboard features real-time KPI tracking, predictive analytics, and customizable reporting to drive strategic decisions.',
    image: '/images/projects/ai-dashboard.jpg',
    liveDemo: 'https://demo.aliatish.com/ai-dashboard',
    categories: ['analytics', 'enterprise'],
    technologies: ['React', 'Node.js', 'TensorFlow', 'AWS'],
    results: [
      '42% improvement in decision-making speed',
      '$1.2M cost savings identified',
      '98% user adoption rate'
    ]
  },
  {
    slug: 'ecommerce-platform',
    title: 'Next-Gen E-commerce Platform',
    description: 'A high-performance, conversion-optimized e-commerce solution built for modern retailers with personalized shopping experiences.',
    longDescription: 'This comprehensive e-commerce solution features an intuitive shopping experience with AI-powered product recommendations, seamless checkout, and robust inventory management. The mobile-first design ensures excellent performance across all devices.',
    image: '/images/projects/ecommerce.jpg',
    liveDemo: 'https://demo.aliatish.com/ecommerce',
    categories: ['ecommerce'],
    technologies: ['Next.js', 'GraphQL', 'Shopify API', 'Stripe'],
    results: [
      '112% increase in mobile conversions',
      '24% higher average order value',
      '67% reduction in cart abandonment'
    ]
  },
  {
    slug: 'chrome-extension',
    title: 'Productivity Chrome Extension',
    description: 'A browser extension designed to boost productivity and automate repetitive tasks for knowledge workers and business professionals.',
    longDescription: 'This powerful browser extension helps users automate routine tasks, organize their workflow, and stay focused. Features include intelligent email sorting, meeting scheduling, and task prioritization using machine learning algorithms.',
    image: '/images/projects/chrome-extension.jpg',
    liveDemo: 'https://chrome.google.com/webstore/detail/aliatish-productivity/xxxx',
    categories: ['integration'],
    technologies: ['JavaScript', 'Chrome API', 'Firebase', 'Node.js'],
    results: [
      '3.2 hours saved per week per user',
      '4.8/5 star rating on Chrome Web Store',
      '50,000+ active installations'
    ]
  },
  {
    slug: 'custom-crm',
    title: 'Enterprise CRM Solution',
    description: 'A tailored customer relationship management platform designed for complex business workflows and seamless integration with existing systems.',
    longDescription: 'This enterprise-grade CRM solution provides comprehensive customer management, sales pipeline tracking, and marketing automation. The system integrates seamlessly with existing business tools and offers extensive customization options.',
    image: '/images/projects/crm.jpg',
    liveDemo: 'https://demo.aliatish.com/crm',
    categories: ['enterprise', 'integration'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    results: [
      '35% increase in customer retention',
      '28% higher sales team productivity',
      '52% faster onboarding process'
    ]
  },
  {
    slug: 'healthcare-platform',
    title: 'Healthcare Management Platform',
    description: 'A secure, HIPAA-compliant healthcare management solution that streamlines patient care, administrative tasks, and medical record management.',
    longDescription: 'This comprehensive healthcare platform enables medical facilities to manage patient records, appointments, billing, and care plans through a unified interface. The system prioritizes security and compliance while improving operational efficiency.',
    image: '/images/projects/healthcare.jpg',
    liveDemo: 'https://demo.aliatish.com/healthcare',
    categories: ['enterprise', 'integration'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    results: [
      '40% reduction in administrative workload',
      '62% improvement in appointment scheduling efficiency',
      '99.99% system uptime'
    ]
  },
  {
    slug: 'fintech-app',
    title: 'Financial Technology Application',
    description: 'A secure, user-friendly financial management application that helps users track expenses, manage investments, and plan for financial goals.',
    longDescription: 'This innovative fintech solution provides users with powerful tools for personal and business financial management. Features include expense tracking, investment portfolio management, financial goal planning, and AI-powered insights.',
    image: '/images/projects/fintech.jpg',
    liveDemo: 'https://demo.aliatish.com/fintech',
    categories: ['enterprise', 'analytics'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Plaid API'],
    results: [
      '78% of users report improved financial habits',
      '$850 average annual savings per user',
      '4.7/5 app store rating'
    ]
  }
];

// Case studies for featured projects
const caseStudies: CaseStudy[] = [
  {
    projectSlug: 'ai-dashboard',
    client: 'Global Financial Services Inc.',
    challenge: 'The client needed to transform vast amounts of financial data into actionable insights to improve decision-making and maintain competitive advantage.',
    approach: 'We developed a custom AI-powered dashboard that processed and visualized complex datasets, providing real-time insights and predictive analytics.',
    solution: 'The final solution features intuitive data visualization, machine learning algorithms for prediction, and customizable reporting tools - all optimized for speed and usability.',
    testimonial: {
      quote: "The AI dashboard transformed our decision-making process. We're now able to identify trends and opportunities faster than ever before.",
      author: "Sarah Johnson",
      position: "CTO, Global Financial Services Inc."
    }
  },
  {
    projectSlug: 'ecommerce-platform',
    client: 'Fashion Forward Retail',
    challenge: 'The client was struggling with poor mobile conversion rates and high cart abandonment on their legacy e-commerce platform.',
    approach: 'We built a mobile-first e-commerce solution with a focus on user experience, personalization, and checkout optimization.',
    solution: 'The platform features AI-powered product recommendations, one-tap checkout, real-time inventory management, and a responsive design that works flawlessly across all devices.',
    testimonial: {
      quote: "Since launching our new e-commerce platform, mobile conversions have increased by 112% and our average order value is up 24%. The ROI has been exceptional.",
      author: "Michael Chen",
      position: "CEO, Fashion Forward Retail"
    }
  }
];

export default function ProjectsPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentProjects, setCurrentProjects] = useState<ProjectResult[]>(projects);
  const [stars, setStars] = useState<Star[]>([]);

  // Handle category selection
  useEffect(() => {
    if (activeCategory === 'all') {
      setCurrentProjects(projects);
    } else {
      setCurrentProjects(projects.filter(project => project.categories.includes(activeCategory)));
    }
  }, [activeCategory]);

  // Generate cosmic background
  useEffect(() => {
    setStars(Array.from({ length: 50 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.1,
      animationDuration: Math.random() * 4 + 2
    })));
  }, []);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // SEO metadata
  const pageTitle = "Our Projects & Case Studies | ALIATISH";
  const pageDescription = "Explore our portfolio of successful digital projects including enterprise applications, e-commerce solutions, analytics dashboards, and API integrations.";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#080b20] via-[#0d0a25] to-[#1a0e35]">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="web projects, portfolio, case studies, enterprise applications, e-commerce solutions, business intelligence, API integration" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      
      <NavBar />
      
      {/* Hero section with cosmic theme */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Cosmic background elements */}
        <div className="absolute inset-0 z-0">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: star.opacity,
                animation: `twinkle ${star.animationDuration}s ease-in-out infinite`
              }}
            />
          ))}
          
          {/* Nebula effects */}
          <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/20 mix-blend-multiply blur-[100px]"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/20 mix-blend-multiply blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 font-medium text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                Our Portfolio
              </span>
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Success</span> Stories
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our portfolio of innovative digital solutions, successful client projects, and measurable business outcomes.
            </motion.p>
            
            {/* Category filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
          
          {/* Projects grid */}
          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {currentProjects.map((project, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full group hover:border-indigo-500/30 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={250} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Project categories */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.categories.map((cat) => (
                      <span 
                        key={cat} 
                        className="px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs font-medium text-white"
                      >
                        {categories.find(c => c.id === cat)?.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  
                  {/* Technologies used */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 rounded-full bg-indigo-900/30 text-xs font-medium text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <Link 
                      href={`/projects/${project.slug}`} 
                      className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
                    >
                      View Case Study
                      <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                    
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors"
                    >
                      Live Demo
                      <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured case studies */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a25]/50 to-[#1a0e35]/50 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Case Studies</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Dive deeper into how we&apos;ve helped businesses overcome challenges and achieve significant results.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => {
              const project = projects.find(p => p.slug === study.projectSlug);
              
              // Skip if project not found
              if (!project) return null;
              
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300">Client: {study.client}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-400">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Approach</h4>
                      <p className="text-gray-400">{study.approach}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-400">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start text-gray-400">
                            <span className="text-indigo-400 mr-2">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="mt-8 p-6 bg-indigo-900/20 rounded-xl border border-indigo-500/20">
                      <div className="mb-3">
                        <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10,8H6A2,2,0,0,0,4,10V14a2,2,0,0,0,2,2h4V8h4V4H10ZM22,8H18A2,2,0,0,0,16,10V14a2,2,0,0,0,2,2h4V8h4V4H22Z" />
                        </svg>
                      </div>
                      <p className="text-gray-300 mb-4 italic">{study.testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="mr-3">
                          <h5 className="font-semibold text-white">{study.testimonial.author}</h5>
                          <p className="text-sm text-gray-400">{study.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                      >
                        <span className="flex items-center">
                          View Full Case Study
                          <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <div className="absolute inset-0 z-0">
          {/* Animated cosmic particles */}
          {stars.slice(0, 20).map((star, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-indigo-400"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
              }}
              animate={{
                y: [0, -50],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: star.animationDuration,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Build</span> Your Success Story?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let&apos;s discuss how we can help your business achieve exceptional results with custom digital solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  Start Your Project
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
              
              <Link 
                href="/services"
                className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
