"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

// Define types
interface Star {
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
}

const teamMembers = [
  {
    name: "Ali Atish",
    role: "Founder & CEO",
    image: "/images/team/ali.jpg",
    bio: "Visionary leader with 10+ years in enterprise web solutions.",
    color: "from-violet-600 to-indigo-600"
  },
  {
    name: "Sogand Akhavan",
    role: "Co-Founder & Creative Director",
    image: "/images/team/sara.jpg",
    bio: "Expert in UI/UX and digital branding.",
    color: "from-pink-500 to-rose-500"
  },
  {
    name: "Marcus Chen",
    role: "CTO",
    image: "/images/team/marcus.jpg", 
    bio: "Technology innovator with expertise in scalable architectures.",
    color: "from-blue-600 to-cyan-500"
  },
];

const values = [
  {
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative approaches to solve complex problems.",
    icon: "💡",
    color: "from-purple-600 to-indigo-600"
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in our work, delivering solutions that exceed expectations.",
    icon: "✨",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients, forming partnerships based on transparency and trust.",
    icon: "🤝",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Growth",
    description: "We continuously evolve, staying ahead of industry trends to help our clients succeed.",
    icon: "📈",
    color: "from-amber-500 to-orange-600"
  }
];

export default function AboutPage() {
  const [stars, setStars] = useState<Star[]>([]);

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
                Our Story
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6">
                <span className="block">About</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
                  ALIA TISH
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                We are passionate about building digital solutions that empower businesses to grow and innovate
                in an ever-evolving technological landscape.
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
        
        {/* Mission and Vision section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-indigo-500/10 filter blur-xl rounded-full"></div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300">
                    To deliver advanced digital experiences and enterprise solutions that drive measurable results for our
                    clients. We aim to transform ideas into powerful digital realities that create lasting impact and value.
                  </p>
                  
                  <motion.div
                    className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-indigo-500/30"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 -mt-4 -ml-4 w-32 h-32 bg-purple-500/10 filter blur-xl rounded-full"></div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300">
                    To be a global leader in digital transformation, known for innovation, quality, and client success.
                    We envision a digital world where technology enhances human potential rather than replacing it.
                  </p>
                  
                  <motion.div
                    className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-purple-500/30"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Story section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 relative overflow-hidden"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
              
              <div className="relative z-10">
                <p className="text-gray-300 mb-4">
                  Founded in 2016, ALIA TISH has grown from a small team of passionate developers into a full-service digital
                  agency serving clients worldwide. Our journey is defined by a relentless pursuit of excellence and a
                  commitment to our clients&apos; success.
                </p>
                <p className="text-gray-300 mb-4">
                  What began as a specialized web development shop quickly evolved to encompass a comprehensive suite of digital
                  services. As we expanded, we never lost sight of our core principles: delivering exceptional quality, embracing
                  innovation, and forming lasting client partnerships.
                </p>
                <p className="text-gray-300">
                  Today, we continue to push boundaries, exploring new technologies and methodologies to create digital experiences
                  that captivate, engage, and drive results. Our story is still being written, and we invite you to be part of it.
                </p>
              </div>
              
              {/* Orbital animation in background */}
              <div className="absolute inset-0 overflow-hidden -z-10">
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-white/5"
                    style={{ 
                      width: `${300 + i * 100}px`, 
                      height: `${300 + i * 100}px`,
                      top: "50%",
                      left: "50%",
                      x: "-50%",
                      y: "-50%",
                    }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ 
                      duration: 40 + i * 20, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Values section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The core principles that guide our approach to every project and client relationship.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 relative group"
                >
                  {/* Background gradient hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/5 -z-10"></div>
        </section>
        
        {/* Team section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The talented individuals behind our innovative solutions and client success stories.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 relative overflow-hidden">
                    {/* Background gradient hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full mb-6 relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.color}`}></div>
                        <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                          {member.image ? (
                            <Image 
                              src={member.image} 
                              alt={member.name} 
                              width={120} 
                              height={120} 
                              className="object-cover w-full h-full"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=404&color=fff&size=128`
                              }}
                            />
                          ) : (
                            <div className="text-4xl text-white">{member.name.charAt(0)}</div>
                          )}
                        </div>
                        
                        {/* Orbital ring animation */}
                        <motion.div
                          className="absolute w-full h-full rounded-full border border-white/20"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className={`text-sm bg-clip-text text-transparent bg-gradient-to-r ${member.color} mb-4`}>
                        {member.role}
                      </p>
                      <p className="text-gray-400 text-sm">{member.bio}</p>
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
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help bring your vision to life with our expertise and innovative solutions.
                </p>
                <motion.div 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="/contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                    <span className="flex items-center">
                      <span>Contact Us</span>
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
