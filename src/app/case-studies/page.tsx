"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

// Case study data
const caseStudies = [
  {
    id: "cosmic-ecommerce",
    title: "Cosmic E-commerce Platform",
    client: "Nebula Retail",
    services: ["Web Development", "E-commerce", "Cloud Infrastructure"],
    description: "We built a scalable e-commerce platform for Nebula Retail, resulting in a 45% increase in conversion rate and 30% boost in average order value.",
    image: "/images/case-studies/cosmic-ecommerce.jpg",
    color: "from-violet-600 to-indigo-600",
    challenge: "Create a responsive e-commerce platform that could handle seasonal traffic spikes and provide a seamless shopping experience.",
    results: [
      "45% increase in conversion rate",
      "30% higher average order value",
      "68% reduction in page load time",
      "99.9% uptime during peak seasons"
    ]
  },
  {
    id: "stellar-dashboard",
    title: "Stellar Analytics Dashboard",
    client: "Orbit Metrics",
    services: ["Business Intelligence", "Data Visualization", "API Integration"],
    description: "We developed a custom analytics dashboard that unified disparate data sources and provided real-time insights, increasing operational efficiency by 37%.",
    image: "/images/case-studies/stellar-dashboard.jpg",
    color: "from-blue-600 to-cyan-500",
    challenge: "Unify data from multiple sources and create intuitive visualizations for complex business metrics.",
    results: [
      "37% increase in operational efficiency",
      "Reduced reporting time from days to minutes",
      "95% user satisfaction rating",
      "Enabled data-driven decision making across all departments"
    ]
  },
  {
    id: "quantum-app",
    title: "Quantum Mobile Application",
    client: "Pulsar Technologies",
    services: ["Mobile Development", "UX Design", "Backend Integration"],
    description: "Our team created a cross-platform mobile app that streamlined field operations and customer management, resulting in 52% improved customer satisfaction.",
    image: "/images/case-studies/quantum-app.jpg",
    color: "from-emerald-500 to-teal-600",
    challenge: "Design and develop a cross-platform mobile application that works offline and syncs data seamlessly when connectivity is restored.",
    results: [
      "52% improvement in customer satisfaction",
      "28% reduction in field operation costs",
      "Eliminated 15 hours of weekly paperwork",
      "Enabled offline functionality with seamless syncing"
    ]
  }
];

// Update the Star interface to match the actual star object structure
interface Star {
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
}

export default function CaseStudies() {
  const [stars, setStars] = useState<Star[]>([]);
  const [activeCase, setActiveCase] = useState<string | null>(null);

  useEffect(() => {
    // Generate random stars
    const generateStars = (count: number) => {
      return Array.from({ length: count }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        duration: Math.random() * 3 + 2,
      }));
    };

    setStars(generateStars(100));
  }, []);

  return (
    <>
      <NavBar />
      
      <main className="min-h-screen bg-black overflow-hidden">
        {/* Cosmic background */}
        <div className="fixed inset-0 bg-gradient-to-b from-[#080b20] via-[#0d0a25] to-[#1a0e35] -z-10">
          {/* Starfield */}
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: star.opacity,
              }}
              animate={{
                opacity: [star.opacity, star.opacity * 1.5, star.opacity],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          
          {/* Nebula effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full filter blur-[100px] -z-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-violet-900/20 rounded-full filter blur-[100px] -z-10"></div>
        </div>

        {/* Hero section */}
        <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-6 text-sm font-medium text-white">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></div>
                Our Success Stories
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6">
                <span className="block">Case</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
                  Studies
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Explore how we&apos;ve helped businesses transform their digital presence 
                and achieve stellar results through innovative solutions.
              </p>
              
              {/* Animated orbit line */}
              <div className="relative w-12 h-12 mx-auto mt-16">
                <motion.div
                  className="absolute top-1/2 left-1/2 w-40 h-40 border border-violet-500/30 rounded-full"
                  style={{ x: "-50%", y: "-50%" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-violet-500"
                  style={{ x: "-50%", y: "-50%" }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(139, 92, 246, 0.7)",
                      "0 0 0 10px rgba(139, 92, 246, 0)",
                      "0 0 0 0 rgba(139, 92, 246, 0.7)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case studies grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setActiveCase(study.id)}
                  onMouseLeave={() => setActiveCase(null)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 h-full">
                    {/* Background glow effect */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                    />
                    
                    {/* Card content */}
                    <div className="flex flex-col h-full">
                      {/* Client name */}
                      <div className="text-sm text-gray-400 mb-2">{study.client}</div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-300 mb-6 flex-grow">{study.description}</p>
                      
                      {/* Services */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.services.map((service, i) => (
                          <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                            {service}
                          </span>
                        ))}
                      </div>
                      
                      {/* View case study button */}
                      <Link href={`/case-studies/${study.id}`} className="inline-block">
                        <motion.div
                          className={`px-5 py-2 rounded-lg bg-gradient-to-r ${study.color} text-white font-medium text-sm group-hover:shadow-lg transition-all duration-300`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="flex items-center">
                            <span>View Case Study</span>
                            <motion.span
                              className="ml-2"
                              animate={{ 
                                x: activeCase === study.id ? [0, 3, 0] : 0
                              }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: activeCase === study.id ? Infinity : 0 
                              }}
                            >
                              →
                            </motion.span>
                          </span>
                        </motion.div>
                      </Link>
                      
                      {/* Orbital particle effect */}
                      {activeCase === study.id && (
                        <motion.div
                          className="absolute -top-2 -right-2 w-4 h-4 rounded-full blur-sm"
                          animate={{
                            background: [
                              `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
                              `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
                            ],
                            x: [0, Math.random() * 10 - 5],
                            y: [0, Math.random() * 10 - 5],
                          }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Statistics section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
            >
              {[
                { value: "35+", label: "Clients" },
                { value: "92%", label: "Satisfaction Rate" },
                { value: "120+", label: "Projects Delivered" },
                { value: "10+", label: "Industries Served" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <motion.div
                    className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 mb-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 -z-10"></div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-b from-indigo-900/20 to-purple-900/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 p-10 sm:p-12"
            >
              {/* Orbital animation in background */}
              <div className="absolute inset-0 overflow-hidden -z-10">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-white/10"
                    style={{ 
                      width: `${150 + i * 100}px`, 
                      height: `${150 + i * 100}px`,
                      top: "50%",
                      left: "50%",
                      x: "-50%",
                      y: "-50%",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 30 + i * 10, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Elevate Your Digital Presence?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how our tailored solutions can help your business reach new heights.
                </p>
                <motion.div 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="/contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                    <span className="flex items-center">
                      <span>Start Your Project</span>
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
} 