"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

// Documentation categories and articles
const documentationData = [
  {
    category: "Getting Started",
    icon: "🚀",
    color: "from-purple-600 to-indigo-600",
    articles: [
      { title: "Platform Overview", slug: "platform-overview", readTime: "5 min read" },
      { title: "Account Setup", slug: "account-setup", readTime: "3 min read" },
      { title: "Quick Start Guide", slug: "quick-start-guide", readTime: "8 min read" },
      { title: "System Requirements", slug: "system-requirements", readTime: "4 min read" }
    ]
  },
  {
    category: "API Integration",
    icon: "⚙️",
    color: "from-blue-600 to-cyan-500",
    articles: [
      { title: "Authentication", slug: "api-authentication", readTime: "6 min read" },
      { title: "Endpoints Reference", slug: "endpoints-reference", readTime: "15 min read" },
      { title: "Rate Limits", slug: "rate-limits", readTime: "4 min read" },
      { title: "Webhooks", slug: "webhooks", readTime: "7 min read" }
    ]
  },
  {
    category: "Customization",
    icon: "🎨",
    color: "from-pink-600 to-rose-500",
    articles: [
      { title: "Theme Configuration", slug: "theme-configuration", readTime: "5 min read" },
      { title: "Custom Components", slug: "custom-components", readTime: "8 min read" },
      { title: "UI Guidelines", slug: "ui-guidelines", readTime: "6 min read" },
      { title: "Localization", slug: "localization", readTime: "7 min read" }
    ]
  },
  {
    category: "Data Management",
    icon: "📊",
    color: "from-emerald-500 to-teal-600",
    articles: [
      { title: "Data Models", slug: "data-models", readTime: "9 min read" },
      { title: "Import/Export", slug: "import-export", readTime: "6 min read" },
      { title: "Backups", slug: "backups", readTime: "4 min read" },
      { title: "Security Best Practices", slug: "security-best-practices", readTime: "10 min read" }
    ]
  },
  {
    category: "Troubleshooting",
    icon: "🔍",
    color: "from-amber-500 to-orange-600",
    articles: [
      { title: "Common Issues", slug: "common-issues", readTime: "8 min read" },
      { title: "Error Codes", slug: "error-codes", readTime: "5 min read" },
      { title: "Performance Optimization", slug: "performance-optimization", readTime: "7 min read" },
      { title: "Support Channels", slug: "support-channels", readTime: "3 min read" }
    ]
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

// Interactive documentation page
export default function Documentation() {
  const [stars, setStars] = useState<Star[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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

  // Filter articles based on search query
  const filteredDocumentation = documentationData
    .map(category => ({
      ...category,
      articles: category.articles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.articles.length > 0);

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
                Resources Hub
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6">
                <span className="block">Technical</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
                  Documentation
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Comprehensive guides, API references, and resources to help you build and integrate with our platform.
              </p>

              {/* Search bar */}
              <div className="max-w-xl mx-auto mt-10 relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-50 blur-sm"></div>
                  <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <input
                      type="text"
                      placeholder="Search documentation..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-5 py-3 bg-transparent border-0 text-white focus:outline-none"
                    />
                    <div className="px-4">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ 
                          scale: searchQuery ? [1, 1.1, 1] : 1,
                          rotate: searchQuery ? [0, 5, 0, -5, 0] : 0 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </motion.svg>
                    </div>
                  </div>
                </div>
                
                {/* Animated orbit indicator */}
                <motion.div
                  className="absolute top-1/2 right-0 -mr-20 w-16 h-16 rounded-full border border-purple-500/20"
                  style={{ y: "-50%" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-purple-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDocumentation.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div
                    className={`h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden relative group`}
                    onMouseEnter={() => setActiveCategory(category.category)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Category header */}
                    <div className={`px-6 py-5 border-b border-white/10 flex items-center`}>
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                    </div>
                    
                    {/* Article list */}
                    <div className="p-6">
                      <ul className="space-y-4">
                        {category.articles.map((article) => (
                          <motion.li
                            key={article.slug}
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          >
                            <Link href={`/docs/${article.slug}`} className="block">
                              <div className="flex justify-between items-center group/article">
                                <span className="text-white group-hover/article:text-indigo-400 transition-colors">
                                  {article.title}
                                </span>
                                <div className="flex items-center text-gray-500">
                                  <span className="text-xs">{article.readTime}</span>
                                  <motion.span
                                    className="ml-2 opacity-0 group-hover/article:opacity-100 transition-opacity"
                                    animate={
                                      activeCategory === category.category
                                        ? { x: [0, 4, 0] }
                                        : {}
                                    }
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                  >
                                    →
                                  </motion.span>
                                </div>
                              </div>
                              {/* Animated underline on hover */}
                              <motion.div
                                className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent mt-1"
                                initial={{ scaleX: 0, opacity: 0 }}
                                whileHover={{ scaleX: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Resources section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our collection of resources to enhance your development experience.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sample Projects",
                  description: "Explore working examples to jumpstart your development.",
                  icon: "📁",
                  href: "/docs/sample-projects",
                  color: "from-purple-600 to-indigo-600",
                },
                {
                  title: "Video Tutorials",
                  description: "Watch step-by-step guides for visual learning.",
                  icon: "🎬",
                  href: "/docs/video-tutorials",
                  color: "from-pink-600 to-rose-600",
                },
                {
                  title: "Community Forum",
                  description: "Connect with other developers and share insights.",
                  icon: "💬",
                  href: "/docs/community",
                  color: "from-blue-600 to-cyan-600",
                }
              ].map((resource, i) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative group"
                  whileHover={{ y: -5 }}
                >
                  <Link href={resource.href}>
                    <div className="h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center relative overflow-hidden">
                      {/* Background glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      {/* Resource content */}
                      <div className="relative z-10">
                        <div className="text-3xl mb-4">{resource.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                        <p className="text-gray-400 mb-4">{resource.description}</p>
                        
                        <motion.div
                          className="inline-flex items-center text-indigo-400 text-sm"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="mr-1">Explore</span>
                          <span>→</span>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent -z-10"></div>
        </section>
        
        {/* Help section */}
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
                  Need Additional Support?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our support team is ready to help you with any questions or challenges.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div 
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 w-full sm:w-auto">
                      <span className="flex items-center">
                        <span>Contact Support</span>
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
                  <motion.div 
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/faq" className="px-8 py-4 rounded-lg bg-white/10 text-white font-medium text-lg hover:bg-white/15 transition-all duration-300 w-full sm:w-auto">
                      <span className="flex items-center">
                        <span>View FAQ</span>
                      </span>
                    </Link>
                  </motion.div>
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