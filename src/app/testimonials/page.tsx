"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

// Add a Star interface at the beginning of the file
interface Star {
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
}

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alexandra Chen",
    position: "CTO, Nebula Retail",
    company: "Nebula Retail",
    content: "The e-commerce platform developed by ALIA TISH has revolutionized our online presence. The scalability and performance during peak seasons have been exceptional. We've seen conversion rates soar and customer satisfaction reach new heights.",
    image: "/images/testimonials/alexandra-chen.jpg",
    rating: 5,
    color: "from-violet-600 to-indigo-600",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    position: "Director of Analytics, Orbit Metrics",
    company: "Orbit Metrics",
    content: "The custom analytics dashboard has transformed how we interpret and act on our data. What used to take days now happens in minutes. The intuitive interface makes complex data accessible to everyone in our organization, enabling truly data-driven decision making.",
    image: "/images/testimonials/marcus-johnson.jpg",
    rating: 5,
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    name: "Sophia Patel",
    position: "Operations Manager, Pulsar Technologies",
    company: "Pulsar Technologies",
    content: "The mobile application has streamlined our field operations beyond what we thought possible. The offline functionality and seamless syncing have eliminated paperwork and improved communication with customers. Everyone on our team loves using it.",
    image: "/images/testimonials/sophia-patel.jpg",
    rating: 5,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    name: "Daniel Kim",
    position: "CEO, Astral Ventures",
    company: "Astral Ventures",
    content: "Working with ALIA TISH has been transformative for our business. Their blend of technical expertise and strategic thinking helped us implement solutions that align perfectly with our long-term goals. They're not just developers – they're true partners in our success.",
    image: "/images/testimonials/daniel-kim.jpg",
    rating: 5,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    position: "Marketing Director, Stellar Brands",
    company: "Stellar Brands",
    content: "The integration between our CRM and marketing platforms has revolutionized our campaign effectiveness. We now have real-time insights into performance, allowing us to optimize on the fly. This has significantly increased our ROI on all marketing initiatives.",
    image: "/images/testimonials/elena-rodriguez.jpg",
    rating: 5,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 6,
    name: "Thomas Wright",
    position: "Founder, Quantum Solutions",
    company: "Quantum Solutions",
    content: "ALIA TISH helped us modernize our legacy systems while ensuring business continuity. Their methodical approach to migration and knowledge transfer ensured our team could maintain and extend the new systems with confidence.",
    image: "/images/testimonials/thomas-wright.jpg",
    rating: 5,
    color: "from-purple-500 to-fuchsia-500",
  }
];

export default function Testimonials() {
  const [stars, setStars] = useState<Star[]>([]);
  const [focusedTestimonial, setFocusedTestimonial] = useState<string | null>(null);

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
                Client Experiences
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6">
                <span className="block">Client</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
                  Testimonials
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Discover what our clients have to say about their experiences working with us 
                and the impact of our solutions on their businesses.
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

        {/* Testimonials grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setFocusedTestimonial(testimonial.id.toString())}
                  onMouseLeave={() => setFocusedTestimonial(null)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 h-full">
                    {/* Background glow effect */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                    />
                    
                    {/* Card content */}
                    <div className="flex flex-col h-full">
                      {/* Rating stars */}
                      <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <motion.svg 
                            key={i}
                            xmlns="http://www.w3.org/2000/svg" 
                            className={i < testimonial.rating ? "text-yellow-400 h-4 w-4" : "text-gray-400 h-4 w-4"}
                            viewBox="0 0 20 20" 
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth={i < testimonial.rating ? "0" : "1"}
                            animate={
                              focusedTestimonial === testimonial.id.toString() && i < testimonial.rating 
                                ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } 
                                : {}
                            }
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                      
                      {/* Testimonial content */}
                      <p className="text-gray-300 mb-6 flex-grow italic">&quot;{testimonial.content}&quot;</p>
                      
                      {/* Client info */}
                      <div className="flex items-center mt-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden mr-4">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.color}`}></div>
                        </div>
                        <div>
                          <div className="text-white font-medium">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">{testimonial.position}</div>
                        </div>
                      </div>
                      
                      {/* Orbital particle effect */}
                      {focusedTestimonial === testimonial.id.toString() && (
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
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how our tailored solutions can help your business achieve remarkable results.
                </p>
                <motion.div 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="/contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                    <span className="flex items-center">
                      <span>Start Your Journey</span>
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </a>
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