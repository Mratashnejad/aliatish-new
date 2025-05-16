'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import ServicesSection from '@/components/sections/ServicesSection';

// Additional detailed service information
const detailedServices = [
  {
    title: "Enterprise Web Applications",
    description: "We build custom enterprise-grade applications designed to solve complex business challenges with robust architecture, seamless integrations, and uncompromising security.",
    benefits: [
      "Streamlined business operations",
      "Improved data management",
      "Enhanced customer experience",
      "Increased operational efficiency",
      "Better business intelligence"
    ],
    process: [
      "Discovery & Requirements Analysis",
      "Architecture Design",
      "Development & Testing",
      "Integration & Deployment",
      "Support & Maintenance"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Our e-commerce platforms deliver scalable, conversion-optimized online stores with immersive shopping experiences and frictionless checkout flows tailored to your business needs.",
    benefits: [
      "Increased conversion rates",
      "Mobile-first shopping experiences",
      "Integrated inventory management",
      "Customer retention tools",
      "Multi-channel selling capabilities"
    ],
    process: [
      "Market & Competitor Analysis",
      "UX/UI Design & Prototyping",
      "Platform Development",
      "Payment Gateway Integration",
      "Performance Optimization"
    ]
  },
  {
    title: "Business Intelligence Dashboards",
    description: "Our interactive data visualization platforms transform complex datasets into actionable insights, empowering your business with strategic advantages through data-driven decision making.",
    benefits: [
      "Real-time business insights",
      "Improved decision making",
      "Performance tracking",
      "Trend identification",
      "Cost reduction opportunities"
    ],
    process: [
      "Data Analysis & Requirements",
      "Dashboard Architecture",
      "Visualization Design",
      "Data Integration",
      "Deployment & Training"
    ]
  },
  {
    title: "API Development & Integration",
    description: "We develop robust, scalable APIs that enable seamless communication between systems, unlocking business capabilities and creating new opportunities for growth and innovation.",
    benefits: [
      "System interoperability",
      "Enhanced functionality",
      "Improved efficiency",
      "Future-proof architecture",
      "Third-party integrations"
    ],
    process: [
      "API Design & Planning",
      "Development & Documentation",
      "Testing & Security Implementation",
      "Deployment & Monitoring",
      "Maintenance & Updates"
    ]
  }
];

export default function ServicesPage() {
  const [mainRef, mainInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
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

  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 mix-blend-multiply blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral/80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We transform businesses through innovative digital solutions, 
              delivering exceptional experiences and measurable results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="#service-details"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Explore Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main services section */}
      <ServicesSection />
      
      {/* Detailed services section */}
      <section id="service-details" className="py-24 bg-gradient-to-b from-transparent to-secondary/30" ref={mainRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={mainInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-lg text-neutral/80">
              Our comprehensive approach ensures we deliver solutions that exceed expectations 
              and provide lasting value for your business.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={mainInView ? "visible" : "hidden"}
          >
            {detailedServices.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral/80 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3 text-primary">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-primary">Our Process</h4>
                  <ol className="space-y-2">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Discuss your project
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-neutral/80 mb-10">
              Our team of experts is ready to help you achieve your business goals 
              with custom digital solutions tailored to your needs.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 