"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

// Company sections
const companySections = [
  {
    title: "About Us",
    description: "Learn about our company&apos;s story, mission, values, and the team behind our innovative solutions.",
    icon: "🏢",
    link: "/about",
    color: "from-purple-600 to-indigo-600",
    image: "/images/company/about-us.jpg"
  },
  {
    title: "Careers",
    description: "Join our team of passionate individuals and help us shape the future of digital experiences.",
    icon: "💼",
    link: "/careers",
    color: "from-blue-600 to-cyan-500",
    image: "/images/company/careers.jpg"
  },
  {
    title: "Blog",
    description: "Explore our latest insights, industry trends, and technology updates from our expert team.",
    icon: "📝",
    link: "/blog",
    color: "from-pink-600 to-rose-600",
    image: "/images/company/blog.jpg"
  },
  {
    title: "Contact",
    description: "Get in touch with our team for inquiries, support, or to discuss your next project.",
    icon: "📞",
    link: "/contact",
    color: "from-emerald-500 to-teal-600",
    image: "/images/company/contact.jpg"
  }
];

// Team members data
const teamMembers = [
  {
    name: "Alia Tishman",
    position: "Founder & CEO",
    image: "/images/team/alia-tishman.jpg",
    color: "from-indigo-600 to-violet-600",
    quote: "Innovation happens at the intersection of technology and human experience."
  },
  {
    name: "Marcus Chen",
    position: "CTO",
    image: "/images/team/marcus-chen.jpg",
    color: "from-blue-600 to-cyan-500",
    quote: "We build solutions that adapt to the future while solving today&apos;s challenges."
  },
  {
    name: "Elena Rodriguez",
    position: "Creative Director",
    image: "/images/team/elena-rodriguez.jpg",
    color: "from-pink-600 to-rose-600",
    quote: "Great design is invisible - it simply enables users to achieve their goals effortlessly."
  }
];

// Add this at the top or near where stars are generated
interface Star {
  top: number;
  left: number;
  delay: number;
  size: number;
  color: string;
}

export default function Company() {
  const [stars, setStars] = useState<Star[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
                Our Identity
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6">
                <span className="block">Our</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
                  Company
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                We&apos;re a team of dedicated innovators passionate about creating digital experiences 
                that transform businesses and delight users.
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

        {/* Company sections grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setActiveSection(section.title)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <Link href={section.link}>
                    <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full">
                      {/* Background glow effect */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                      />
                      
                      {/* Content */}
                      <div className="flex flex-col h-full">
                        {/* Icon */}
                        <div className="text-4xl mb-6">{section.icon}</div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                        
                        {/* Description */}
                        <p className="text-gray-300 mb-6 flex-grow">{section.description}</p>
                        
                        {/* Explore button */}
                        <motion.div
                          className={`inline-flex items-center text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${section.color}`}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <span>Explore {section.title}</span>
                          <motion.span
                            className="ml-2"
                            animate={{ 
                              x: activeSection === section.title ? [0, 3, 0] : 0
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: activeSection === section.title ? Infinity : 0 
                            }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                        
                        {/* Orbital particle effect */}
                        {activeSection === section.title && (
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
        
        {/* Leadership Team section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Meet the visionaries guiding our company&apos;s journey through the digital universe.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative group"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden relative">
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Member photo placeholder */}
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <div className={`absolute inset-0 opacity-30 bg-gradient-to-r ${member.color}`}></div>
                      <div className="absolute inset-0 flex items-center justify-center text-5xl">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                    
                    {/* Member info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                      <p className={`text-sm bg-clip-text text-transparent bg-gradient-to-r ${member.color} mb-4`}>
                        {member.position}
                      </p>
                      
                      <p className="text-gray-400 italic text-sm">&quot;{member.quote}&quot;</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent -z-10"></div>
        </section>
        
        {/* Vision section */}
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
                  Our Vision
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  We envision a world where technology seamlessly enhances human potential, 
                  creating digital experiences that inspire, connect, and transform.
                </p>
                <motion.div 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="/about" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                    <span className="flex items-center">
                      <span>Learn More About Us</span>
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