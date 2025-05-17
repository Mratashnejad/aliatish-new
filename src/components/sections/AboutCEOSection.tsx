"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView as useFramerInView } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  color: string;
};

// CEO tech powers visualized through cosmic elements
const techPowers = [
  { 
    name: 'Technical Vision', 
    value: 95,
    
    flux: 0.8, // Energy flux value
    position: { x: 0.6, y: 0.25 }
  },
  { 
    name: 'Leadership', 
    value: 92,
    
    flux: 0.75,
    position: { x: 0.7, y: 0.6 }
  },
  { 
    name: 'Innovation', 
    value: 90,
    
    flux: 0.7, 
    position: { x: 0.25, y: 0.3 }
  },
  { 
    name: 'Problem Solving', 
    value: 88,
   
    flux: 0.65,
    position: { x: 0.3, y: 0.7 }
  },
  { 
    name: 'Client Relations', 
    value: 85,
    flux: 0.6,
    position: { x: 0.5, y: 0.8 }
  }
];

// Experience with cosmic theme colors
const experiences: Experience[] = [
  {
    year: "2023 - Present",
    title: "Founder & CEO",
    company: "ALIATISH",
    description:
      "Leading a web development agency focused on creating cutting-edge digital experiences for clients around the world.",
    color: "from-violet-600 to-indigo-600",
  },
  {
    year: "2020 - 2023",
    title: "Senior Full-stack Developer",
    company: "TechCorp Inc.",
    description: "Led development of enterprise-scale web applications using React, Node.js, and cloud technologies.",
    color: "from-blue-600 to-cyan-600",
  },
  {
    year: "2017 - 2020",
    title: "Full-stack Developer",
    company: "WebSolutions LLC",
    description: "Designed and built responsive websites and applications for various clients across industries.",
    color: "from-cyan-600 to-teal-600",
  },
  {
    year: "2013 - 2017",
    title: "Frontend Developer",
    company: "DigitalAgency Co.",
    description: "Specialized in creating interactive user interfaces and responsive designs for client websites.",
    color: "from-teal-600 to-green-600",
  },
];

// Use a seeded random function to ensure consistency between server and client
function createSeededRandom(seed = 1) {
  return function() {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
}

// Create initial empty states
const INITIAL_SECTION_STARS: any[] = [];
const INITIAL_STREAMS: any[] = [];

// Utility to generate random star data for section background
function generateSectionStars(count: number, getRandom: () => number) {
  return Array.from({ length: count }).map(() => ({
    size: getRandom() * 2,
    opacity: getRandom() * 0.7 + 0.1,
    top: getRandom() * 100,
    left: getRandom() * 100,
    duration: getRandom() * 4 + 2,
  }));
}

// Utility to generate random stream data for CosmicTechNexus
function generateStreams(count: number, getRandom: () => number) {
  return Array.from({ length: count }).map(() => ({
    angle: getRandom() * Math.PI * 2,
    length: getRandom() * 30 + 100,
    duration: getRandom() * 5 + 5,
  }));
}

// Cosmic Tech Wormhole Visualization
const CosmicTechNexus = () => {
  // const [radius, setRadius] = useState(150); // Default value for SSR
  // const [stars, setStars] = useState<unknown[]>([]);

  // Code fragments floating in space - tech related phrases and symbols
  // const techFragments = [
  //   '01011', 'function()', 'API', 'async', 'import', 'export',
  //   'React', 'Node', 'Cloud', '<div>', 'useState', '.then()',
  //   'container', 'render', 'npm', 'build', 'deploy', 'git',
  //   'interface', 'extends', 'class', 'return', 'export default'
  // ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* The cosmic wormhole/portal - positioned in the center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer energy field */}
        <div 
          className="absolute w-full h-full max-w-[600px] max-h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, rgba(79, 70, 229, 0.1) 40%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        
        {/* Inner energy field with pulsing animation */}
        <motion.div 
          className="absolute w-3/4 h-3/4 max-w-[450px] max-h-[450px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(224, 231, 255, 0.1) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 80%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Wormhole entrance - the portal */}
        <motion.div 
          className="absolute w-1/2 h-1/2 max-w-[350px] max-h-[350px]"
          style={{
            background: 'linear-gradient(135deg, rgba(224, 231, 255, 0.05) 0%, rgba(99, 102, 241, 0.02) 50%, rgba(79, 70, 229, 0.05) 100%)',
            boxShadow: '0 0 100px 20px rgba(139, 92, 246, 0.2)',
            transform: 'perspective(1000px) rotateX(70deg)',
          }}
          animate={{
            rotateZ: 360
          }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          {/* Portal inner energy rings */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute inset-0 rounded-full border-2 border-indigo-500/10"
              style={{
                width: `${100 - i * 15}%`,
                height: `${100 - i * 15}%`,
                left: `${i * 7.5}%`,
                top: `${i * 7.5}%`,
              }}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                rotate: { duration: 30 + i * 10, repeat: Infinity, ease: "linear" },
                opacity: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}
        </motion.div>
        
        {/* Tech data streams - energy beams emanating from the portal */}
        {generateStreams(8, createSeededRandom()).map((stream, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute origin-center h-[1px] bg-gradient-to-r from-indigo-500/50 via-violet-500/50 to-transparent"
            style={{
              width: `${stream.length}%`,
              transformOrigin: 'center left',
              transform: `rotate(${stream.angle}rad) translateX(60px)`,
              opacity: 0.6,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              width: [`${stream.length - 20}%`, `${stream.length}%`, `${stream.length - 20}%`],
            }}
            transition={{
              duration: stream.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Floating tech fragments */}
      {/* {techFragments.map((fragment, i) => {
        const scale = Math.random() * 0.5 + 0.8;
        const speed = Math.random() * 60 + 60; // Orbit speed
        const distance = Math.random() * 35 + 25; // Distance from center (25-60%)
        const startAngle = Math.random() * Math.PI * 2;
        
        return (
          <motion.div
            key={`frag-${i}`}
            className="absolute font-mono text-xs text-indigo-300/70 whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2 font-semibold tracking-wider"
            style={{
              left: '50%',
              top: '50%',
              textShadow: '0 0 10px rgba(79, 70, 229, 0.5)',
            }}
            animate={{
              x: [
                Math.cos(startAngle) * (distance * 3),
                Math.cos(startAngle + Math.PI) * (distance * 3),
                Math.cos(startAngle + Math.PI * 2) * (distance * 3),
              ],
              y: [
                Math.sin(startAngle) * (distance * 2),
                Math.sin(startAngle + Math.PI) * (distance * 2),
                Math.sin(startAngle + Math.PI * 2) * (distance * 2),
              ],
              opacity: [0.4, 0.7, 0.4],
              scale: [scale, scale * 1.1, scale],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          >
            {fragment}
          </motion.div>
        );
      })} */}
      
      {/* Tech power indicators floating around the wormhole */}
      {techPowers.map((power, i) => {
        // const radius = Math.min(window.innerWidth, window.innerHeight) * 0.25; // Moved to state
        
        return (
          <motion.div
            key={`power-${i}`}
            className="absolute z-20"
            style={{
              left: `${power.position.x * 100}%`,
              top: `${power.position.y * 100}%`,
            }}
            initial={{ opacity: 0, x: 0 }}
            animate={{ 
              opacity: 1,
              x: [0, 5, 0, -5, 0],
              y: [0, -5, 0, 5, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: i * 0.2 },
              x: { duration: 15 + i * 5, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 20 + i * 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Tech power node */}
            <div className="flex items-center">
              {/* Power icon with energy flux */}
              <motion.div 
                className="flex items-center justify-center w-10 h-10 mr-3 bg-gradient-to-br from-indigo-900/80 to-violet-800/80 backdrop-blur-sm rounded-lg shadow-lg"
                style={{ boxShadow: `0 0 20px rgba(139, 92, 246, ${power.flux * 0.3})` }}
                animate={{
                  boxShadow: [
                    `0 0 15px rgba(139, 92, 246, ${power.flux * 0.2})`,
                    `0 0 25px rgba(139, 92, 246, ${power.flux * 0.4})`,
                    `0 0 15px rgba(139, 92, 246, ${power.flux * 0.2})`,
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* <div className="text-lg">{power.icon}</div> */}
                
                {/* Flux indicator - tech energy level */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-indigo-600"
                  style={{ opacity: power.flux, width: `${power.value}%` }}
                />
              </motion.div>
              
              {/* Tech power details */}
              <div 
                className="bg-indigo-900/20 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-indigo-500/20"
                style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
              >
                <div className="text-white text-sm font-medium">
                  {power.name}
                </div>
                <div className="text-indigo-300 text-xs">
                  Energy: {power.value}%
                </div>
              </div>
            </div>
            
            {/* Connection to the wormhole - energy tether */}
            <div 
              className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent w-full transform -translate-y-1/2 z-[-1]"
              style={{ 
                width: Math.max(Math.abs(power.position.x - 0.5) * 300, 100),
                transformOrigin: power.position.x > 0.5 ? 'left center' : 'right center',
                transform: `translateY(-50%) rotate(${Math.atan2(
                  power.position.y - 0.5,
                  power.position.x - 0.5
                ) * (180 / Math.PI)}deg)`
              }}
            />
          </motion.div>
        );
      })}
      
      {/* Ali at the center of the tech wormhole */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Energy field around Ali */}
          <motion.div 
            className="absolute -inset-5 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(99, 102, 241, 0.2) 40%, transparent 70%)',
              filter: 'blur(5px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Aura effect */}
          <div 
            className="absolute -inset-10 opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            }}
          />
          
          {/* Central avatar */}
          <div className="w-full h-full rounded-lg overflow-hidden transform rotate-45 bg-gradient-to-br from-indigo-600 to-purple-700 border border-indigo-300/30">
            <div className="w-full h-full flex items-center justify-center transform -rotate-45 text-white text-2xl font-bold">
              A
            </div>
          </div>
          
          {/* Energy particles around Ali */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const distance = 30; // Distance from center
            
            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-indigo-400 rounded-full"
                style={{
                  left: Math.cos(angle) * distance + '50%',
                  top: Math.sin(angle) * distance + '50%',
                  boxShadow: '0 0 5px rgba(139, 92, 246, 0.8)',
                }}
                animate={{
                  x: [0, Math.cos(angle) * 10, 0, Math.cos(angle + Math.PI) * 10, 0],
                  y: [0, Math.sin(angle) * 10, 0, Math.sin(angle + Math.PI) * 10, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default function AboutCEOSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();
  
  // Cosmos animation refs for background elements
  const nebula1Ref = useRef<HTMLDivElement>(null);
  const nebula2Ref = useRef<HTMLDivElement>(null);
  
  // Mouse parallax effect for nebulae
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!nebula1Ref.current || !nebula2Ref.current) return;
      
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;
      
      nebula1Ref.current.style.transform = `translate(${moveX * -2}px, ${moveY * -2}px)`;
      nebula2Ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [stars, setStars] = useState<unknown[]>([]);
  useEffect(() => {
    setStars(generateSectionStars(200, createSeededRandom()));
  }, []);

  // Add state for CTA portal particles
  const [ctaParticles, setCtaParticles] = useState<unknown[]>([]);
  useEffect(() => {
    // Generate 20 random particles for the CTA portal
    setCtaParticles(Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.3 + 0.1,
      y: Math.random() > 0.5 ? -20 : 20,
      x: Math.random() > 0.5 ? -20 : 20,
      duration: Math.random() * 5 + 5,
    })));
  }, []);

  return (
    <section id="about-ceo" className="py-20 relative overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0a0a20] to-[#130c35] z-0">
        {/* Star field background */}
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: star.size,
                height: star.size,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: star.opacity,
              }}
              animate={{
                opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
        
        {/* Distant nebulae */}
        <div 
          ref={nebula1Ref}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-[100px] opacity-40"
        />
        <div 
          ref={nebula2Ref}
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-900/10 blur-[100px] opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-6 text-sm font-medium text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-violet-400 mr-2 animate-pulse"></div>
              About The Founder
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-5">
              Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Ali</span>, Our Cosmic Navigator
            </h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              With over 10 years in the digital universe, Ali navigates complex technologies to create 
              stellar digital experiences that transcend expectations.
            </motion.p>
          </motion.div>
          
          {/* Profile and TechNexus Wormhole */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Left side - Profile */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-full bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur-sm">
                {/* Profile content with cosmic elements */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl"></div>
                
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 blur"></div>
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
                        <div className="w-full h-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white">
                          A
                        </div>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-white mb-1">Ali</h3>
                      <p className="text-indigo-300">Founder & CEO</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-300">
                    <p>
                      As the founder of ALIATISH, I combine technical expertise with a passion for creating 
                      digital experiences that transcend the ordinary.
                    </p>
                    <p>
                      My journey in web development began over a decade ago, exploring the vast universe of 
                      technologies and honing my skills across the entire development spectrum.
                    </p>
                    <p>
                      I believe in pushing boundaries and embracing the newest technologies to help businesses 
                      achieve their cosmic potential in the digital realm.
                    </p>
                  </div>
                  
                  {/* Cosmic quote */}
                  <div className="mt-8 relative">
                    <div className="absolute -left-3 -top-3 text-4xl text-indigo-500 opacity-50">&quot;</div>
                    <blockquote className="pl-6 italic text-indigo-200 border-l-2 border-indigo-500/50">
                      The digital universe is ever-expanding. Our mission is to help you navigate its 
                      infinite possibilities and create experiences that shine brighter than the rest.
                    </blockquote>
                    <div className="absolute -right-3 -bottom-3 text-4xl text-indigo-500 opacity-50">&quot;</div>
                  </div>
                </div>
                
                {/* Cosmic background effects */}
                <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
                    animate={{ 
                      opacity: [0.2, 0.5, 0.2],
                      backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Cosmic Tech Wormhole */}
            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* The cosmic tech wormhole is directly placed without a container */}
              <CosmicTechNexus />
              
              {/* Title for the visualization */}
              <motion.div 
                className="absolute bottom-4 inset-x-0 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-1">Interstellar Tech Nexus</h3>
                <p className="text-sm text-gray-400">Gateway to digital innovation and technological mastery</p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Journey Timeline - Cosmic Path */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 inline-block">
                Interstellar Journey
              </h3>
              <p className="text-gray-400 mt-2">My voyage through the digital cosmos</p>
            </div>

            {/* Cosmic Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Central timeline - cosmic stream */}
              <motion.div
                className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/20 via-purple-500/40 to-indigo-500/20 transform -translate-x-1/2"
                animate={{
                  background: [
                    "linear-gradient(to bottom, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2))",
                    "linear-gradient(to bottom, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.4))",
                    "linear-gradient(to bottom, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2))",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              {/* Timeline events */}
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`mb-16 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 w-5 h-5 -translate-x-1/2 rounded-full z-10 bg-black border-2 border-indigo-500 flex items-center justify-center">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-indigo-400"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Content box */}
                  <motion.div
                    className={`w-5/12 py-4 px-6 rounded-xl backdrop-blur-sm border border-white/10 relative ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    style={{
                      background: "rgba(15, 23, 42, 0.5)",
                    }}
                  >
                    {/* Connector line */}
                    <div
                      className={`absolute top-1/2 ${index % 2 === 0 ? "-right-12" : "-left-12"} w-12 h-px bg-gradient-to-${index % 2 === 0 ? "r" : "l"} ${exp.color}`}
                    />

                    {/* Content */}
                    <div className="mb-2 flex items-center space-x-2">
                      <div
                        className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}
                      >
                        {exp.year}
                      </div>
                      <div className="h-px flex-grow bg-white/10"></div>
                    </div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <div className="text-indigo-300 text-sm mb-2">{exp.company}</div>
                    <p className="text-gray-400 text-sm">{exp.description}</p>

                    {/* Cosmic dust effect */}
                    <motion.div
                      className="absolute -inset-px rounded-xl opacity-0 hover:opacity-100 pointer-events-none transition-opacity"
                      animate={{
                        background: [
                          `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)`,
                          `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)`,
                          `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)`,
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to action - Cosmic portal */}
          <motion.div
            className="max-w-3xl mx-auto text-center relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/10 py-12 px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background cosmic portal effect */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-indigo-900/20"></div>
              <motion.div
                className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%)",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Cosmic dust particles */}
              {ctaParticles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-indigo-500"
                  style={{
                    width: particle.width,
                    height: particle.height,
                    top: `${particle.top}%`,
                    left: `${particle.left}%`,
                    opacity: particle.opacity,
                  }}
                  animate={{
                    y: [0, particle.y],
                    x: [0, particle.x],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Begin Your Cosmic Journey?</h3>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Let&apos;s collaborate to create digital experiences that are truly out of this world. My expertise is your
                launchpad to success.
              </p>

              <motion.button
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">
                  <span>Start A Project</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
