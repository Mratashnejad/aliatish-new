"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

// Resource categories
const resources = [
  {
    title: "Case Studies",
    description: "Explore how we&apos;ve helped businesses transform their digital presence and achieve stellar results through innovative solutions.",
    icon: "🚀",
    link: "/case-studies",
    color: "from-violet-600 to-indigo-600",
    count: "10+ Studies"
  },
  {
    title: "Testimonials",
    description: "Discover what our clients have to say about their experiences working with us and the impact of our solutions on their businesses.",
    icon: "💬",
    link: "/testimonials",
    color: "from-blue-600 to-cyan-500",
    count: "35+ Reviews"
  },
  {
    title: "Documentation",
    description: "Comprehensive guides, API references, and resources to help you build and integrate with our platform.",
    icon: "📚",
    link: "/docs",
    color: "from-pink-600 to-rose-600",
    count: "100+ Articles"
  },
  {
    title: "FAQ",
    description: "Find answers to commonly asked questions about our services, processes, and technologies.",
    icon: "❓",
    link: "/faq",
    color: "from-emerald-500 to-teal-600",
    count: "50+ Questions"
  }
];

// Add this at the top or near where stars are generated
interface Star {
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
}

export default function Resources() {
  const [stars, setStars] = useState<Star[]>([]);
  const [activeResource, setActiveResource] = useState<string | null>(null);

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
                Knowledge Center
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6">
                <span className="block">Our</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
                  Resources
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Explore our collection of resources designed to help you understand our services, 
                learn from our success stories, and get the most out of our solutions.
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

        {/* Resources grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setActiveResource(resource.title)}
                  onMouseLeave={() => setActiveResource(null)}
                >
                  <Link href={resource.link}>
                    <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full">
                      {/* Background glow effect */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                      />
                      
                      {/* Content */}
                      <div className="flex flex-col h-full">
                        {/* Icon and count */}
                        <div className="flex justify-between items-start mb-6">
                          <div className="text-4xl">{resource.icon}</div>
                          <div className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300">
                            {resource.count}
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                        
                        {/* Description */}
                        <p className="text-gray-300 mb-6 flex-grow">{resource.description}</p>
                        
                        {/* Explore button */}
                        <motion.div
                          className={`inline-flex items-center text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${resource.color}`}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <span>Explore {resource.title}</span>
                          <motion.span
                            className="ml-2"
                            animate={{ 
                              x: activeResource === resource.title ? [0, 3, 0] : 0
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: activeResource === resource.title ? Infinity : 0 
                            }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                        
                        {/* Orbital particle effect */}
                        {activeResource === resource.title && (
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter section */}
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
                  Stay Updated with Our Newsletter
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Subscribe to receive the latest resources, insights, and news from our team.
                </p>
                
                {/* Newsletter form */}
                <div className="max-w-md mx-auto">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-50 blur-sm"></div>
                    <form className="relative flex bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-5 py-3 bg-transparent border-0 text-white focus:outline-none"
                        required
                      />
                      <motion.button
                        type="submit"
                        className="px-5 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Subscribe
                      </motion.button>
                    </form>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
} 