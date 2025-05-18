'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import ServicesSection from '@/components/sections/ServicesSection';
import Head from 'next/head';
import Image from 'next/image';

// Additional detailed service information
const detailedServices = [
  {
    title: "Enterprise Web Applications",
    description: "We build custom enterprise-grade applications designed to solve complex business challenges with robust architecture, seamless integrations, and uncompromising security.",
    icon: "🚀",
    color: "from-blue-500 to-indigo-600",
    benefits: [
      "Streamlined business operations and workflow automation",
      "Improved data management and real-time analytics",
      "Enhanced customer experience with personalized interfaces",
      "Increased operational efficiency and cost reduction",
      "Better business intelligence for informed decision-making"
    ],
    process: [
      "Discovery & Requirements Analysis - We deeply understand your business needs",
      "Architecture Design - Creating scalable, secure foundations",
      "Development & Testing - Iterative building with continuous quality assurance",
      "Integration & Deployment - Seamless connection with your existing systems",
      "Support & Maintenance - Ongoing optimization and improvements"
    ],
    caseStudy: {
      client: "Global Manufacturing Corp",
      challenge: "Legacy systems causing inefficiencies and data silos",
      solution: "Custom ERP solution with integrated analytics dashboard",
      result: "37% increase in operational efficiency, 25% cost reduction"
    }
  },
  {
    title: "E-commerce Solutions",
    description: "Our e-commerce platforms deliver scalable, conversion-optimized online stores with immersive shopping experiences and frictionless checkout flows tailored to your business needs.",
    icon: "🛒",
    color: "from-emerald-500 to-teal-600",
    benefits: [
      "Increased conversion rates through optimized user journeys",
      "Mobile-first shopping experiences for the modern consumer",
      "Integrated inventory management across all sales channels",
      "Customer retention tools including loyalty programs and personalization",
      "Multi-channel selling capabilities (marketplaces, social, mobile)"
    ],
    process: [
      "Market & Competitor Analysis - Understanding your unique position",
      "UX/UI Design & Prototyping - Creating intuitive shopping experiences",
      "Platform Development - Building with scalability in mind",
      "Payment Gateway Integration - Secure, flexible payment options",
      "Performance Optimization - Maximum speed and conversion rates"
    ],
    caseStudy: {
      client: "Boutique Fashion Retailer",
      challenge: "Struggling with cart abandonment and mobile conversions",
      solution: "Custom e-commerce platform with AI-powered recommendations",
      result: "112% increase in mobile conversions, 24% higher AOV"
    }
  },
  {
    title: "Business Intelligence Dashboards",
    description: "Our interactive data visualization platforms transform complex datasets into actionable insights, empowering your business with strategic advantages through data-driven decision making.",
    icon: "📊",
    color: "from-purple-500 to-violet-600",
    benefits: [
      "Real-time business insights accessible from anywhere",
      "Improved decision making with visualized KPIs and metrics",
      "Performance tracking across all business units",
      "Trend identification and predictive analytics",
      "Cost reduction opportunities through data-driven efficiency"
    ],
    process: [
      "Data Analysis & Requirements - Identifying key metrics and sources",
      "Dashboard Architecture - Designing for clarity and usability",
      "Visualization Design - Creating intuitive charts and graphs",
      "Data Integration - Connecting multiple sources seamlessly",
      "Deployment & Training - Ensuring your team maximizes value"
    ],
    caseStudy: {
      client: "Financial Services Provider",
      challenge: "Unable to leverage data for strategic decision-making",
      solution: "Custom BI dashboard with predictive analytics",
      result: "42% faster decision-making process, $1.2M in cost savings"
    }
  },
  {
    title: "API Development & Integration",
    description: "We develop robust, scalable APIs that enable seamless communication between systems, unlocking business capabilities and creating new opportunities for growth and innovation.",
    icon: "🔄",
    color: "from-amber-500 to-orange-600",
    benefits: [
      "System interoperability across your entire tech stack",
      "Enhanced functionality through third-party integrations",
      "Improved efficiency with automated data exchange",
      "Future-proof architecture supporting business evolution",
      "New revenue streams through API monetization"
    ],
    process: [
      "API Design & Planning - Creating robust, secure blueprints",
      "Development & Documentation - Building with industry best practices",
      "Testing & Security Implementation - Ensuring reliability and protection",
      "Deployment & Monitoring - Tracking performance and usage",
      "Maintenance & Updates - Keeping your APIs competitive"
    ],
    caseStudy: {
      client: "Healthcare Technology Platform",
      challenge: "Disconnected systems causing data inconsistencies",
      solution: "Unified API gateway with HIPAA-compliant security",
      result: "85% reduction in data errors, 3x faster integrations"
    }
  }
];

// Technology stack we use
const technologies = [
  { name: "React", icon: "/images/tech/react.svg" },
  { name: "Next.js", icon: "/images/tech/nextjs.svg" },
  { name: "Node.js", icon: "/images/tech/nodejs.svg" },
  { name: "TypeScript", icon: "/images/tech/typescript.svg" },
  { name: "GraphQL", icon: "/images/tech/graphql.svg" },
  { name: "AWS", icon: "/images/tech/aws.svg" },
  { name: "Docker", icon: "/images/tech/docker.svg" },
  { name: "Kubernetes", icon: "/images/tech/kubernetes.svg" }
];

// Testimonials
const testimonials = [
  {
    quote: "ALIATISH transformed our business with their custom enterprise solution. Their team delivered beyond our expectations, and the ROI has been extraordinary.",
    author: "Sarah Johnson",
    position: "CTO, Global Innovations Inc.",
    image: "/images/testimonials/sarah-j.jpg"
  },
  {
    quote: "The e-commerce platform ALIATISH built for us has completely revolutionized our online sales. Mobile conversions are up 112%, and we've seen a 24% increase in average order value.",
    author: "Michael Chen",
    position: "CEO, Fashion Forward",
    image: "/images/testimonials/michael-c.jpg"
  }
];

// Add this at the top or near where stars are generated
interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
  color: string;
}

export default function ServicesPage() {
  const [mainRef, mainInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [techRef, techInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialRef, testimonialInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeService, setActiveService] = useState(0);
  
  // Change useState<any[]> to useState<Star[]>
  const [stars, setStars] = useState<Star[]>([]);
  
  useEffect(() => {
    // Generate stars for cosmic background
    const colors = [
      'rgba(255,255,255,0.8)',
      'rgba(180,180,255,0.7)',
      'rgba(200,200,255,0.6)'
    ];
    setStars(Array.from({ length: 50 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)]
    })));
  }, []);
  
  // SEO metadata
  const pageTitle = "Enterprise Web Solutions & Digital Services | ALIATISH";
  const pageDescription = "Transform your business with our custom enterprise web applications, e-commerce solutions, business intelligence dashboards and API integration services.";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#080b20] via-[#0d0a25] to-[#1a0e35]">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="enterprise web applications, e-commerce solutions, business intelligence dashboards, API development, digital transformation" />
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
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                background: star.color,
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                delay: star.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          
          {/* Nebula effects */}
          <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/20 mix-blend-multiply blur-[100px]"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/20 mix-blend-multiply blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 font-medium text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                Digital Solutions for Business Growth
              </span>
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Enterprise <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Digital Services</span> That Deliver Results
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We transform businesses through innovative digital solutions, 
              delivering exceptional experiences and measurable ROI.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#service-details"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  Explore Our Services
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
                href="/contact"
                className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main services section */}
      <ServicesSection />
      
      {/* Detailed services section with case studies */}
      <section id="service-details" className="py-24 relative overflow-hidden" ref={mainRef}>
        {/* Cosmic background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a25]/50 to-[#1a0e35]/50 z-0"></div>
        
        {/* Cosmic nebula */}
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={mainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              How We Deliver <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Excellence</span>
            </h2>
            <p className="text-lg text-gray-300">
              Our comprehensive approach ensures we deliver solutions that exceed expectations 
              and provide lasting value for your business.
            </p>
          </motion.div>
          
          {/* Service tabs */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {detailedServices.map((service, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeService === index 
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  onClick={() => setActiveService(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <span className="flex items-center">
                    <span className="mr-2">{service.icon}</span>
                    {service.title}
                  </span>
                </motion.button>
              ))}
            </div>
            
            {/* Active service details */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={mainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              key={activeService}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Service details */}
                <div className="lg:col-span-7 p-8 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${detailedServices[activeService].color} text-white text-2xl mb-6`}>
                      {detailedServices[activeService].icon}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{detailedServices[activeService].title}</h3>
                    <p className="text-gray-300 mb-6">{detailedServices[activeService].description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Key Benefits</h4>
                      <ul className="space-y-3">
                        {detailedServices[activeService].benefits.map((benefit, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mr-3">
                              ✓
                            </span>
                            <span className="text-gray-300">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Our Process</h4>
                      <ol className="space-y-3">
                        {detailedServices[activeService].process.map((step, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 + (0.1 * i) }}
                          >
                            <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${detailedServices[activeService].color} text-white flex items-center justify-center text-sm mr-3`}>
                              {i + 1}
                            </span>
                            <span className="text-gray-300">{step}</span>
                          </motion.li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="mt-8">
                      <Link 
                        href="/contact"
                        className={`inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r ${detailedServices[activeService].color} text-white font-medium hover:shadow-lg transition-all duration-300`}
                      >
                        <span className="flex items-center">
                          Discuss Your Project
                          <motion.span
                            className="ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </div>
                
                {/* Case study */}
                <div className={`lg:col-span-5 bg-gradient-to-br ${detailedServices[activeService].color} p-8 md:p-10 flex flex-col justify-center`}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-xl font-bold mb-6 text-white flex items-center">
                      <span className="mr-2">✨</span> Success Story
                    </h4>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="mb-4">
                        <h5 className="font-semibold text-white mb-1">Client</h5>
                        <p className="text-white/80">{detailedServices[activeService].caseStudy.client}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-white mb-1">Challenge</h5>
                        <p className="text-white/80">{detailedServices[activeService].caseStudy.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-white mb-1">Solution</h5>
                        <p className="text-white/80">{detailedServices[activeService].caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-white mb-1">Results</h5>
                        <p className="text-white/80">{detailedServices[activeService].caseStudy.result}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Link 
                        href={`/projects`}
                        className="inline-flex items-center text-white font-medium hover:underline"
                      >
                        <span>View all case studies</span>
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Technology stack section */}
      <section className="py-24 relative overflow-hidden" ref={techRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Technology</span> Stack
            </h2>
            <p className="text-lg text-gray-300">
              We leverage cutting-edge technologies to build scalable, performant, and secure solutions.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="w-20 h-20 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 hover:border-indigo-500/50 transition-all duration-300 group">
                    <Image src={tech.icon} alt={tech.name} width={48} height={48} className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden" ref={testimonialRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a25]/50 to-[#1a0e35]/50 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Clients</span> Say
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10,8H6A2,2,0,0,0,4,10V14a2,2,0,0,0,2,2h4V8h4V4H10ZM22,8H18A2,2,0,0,0,16,10V14a2,2,0,0,0,2,2h4V8h4V4H22Z" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-300 mb-6 flex-grow">{testimonial.quote}</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src={testimonial.image} alt={testimonial.author} width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
                duration: 3,
                delay: star.delay,
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
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Transform</span> Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our team of experts is ready to help you achieve your business goals 
              with custom digital solutions tailored to your unique needs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                <span className="flex items-center">
                  Schedule a Free Consultation
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 