import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Define interface for tech objects
interface TechNode {
  name: string;
  radius: number;
  size: string;
  color: string;
  glow: string;
  description: string;
  angle?: number;
  orbitalPeriod?: number;
  parent?: string;
  hasRing?: boolean;
  celestialType?: string;
}

// Hero component with cosmic technology ecosystem
const EnhancedHero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Cosmic Tech Ecosystem - realistic astronomical representation
  const techStack: Record<string, TechNode[]> = {
    // Core technology (Sun)
    core: [
      { 
        name: "Node.js", 
        radius: 0, // Center (Sun) 
        size: "w-28 h-28", 
        color: "bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500", 
        glow: "shadow-orange-500/70",
        description: "The core energy source of our system",
        angle: 0,
        orbitalPeriod: 0,
        celestialType: "star"
      }
    ],
    // Inner planets (Mercury, Venus, Earth, Mars)
    primary: [
      { 
        name: "TypeScript", 
        radius: 90, 
        angle: 0, 
        size: "w-8 h-8", 
        color: "bg-gradient-to-br from-slate-300 to-slate-400", 
        glow: "shadow-slate-300/60",
        orbitalPeriod: 8,
        description: "Type-safe planetary navigation",
        celestialType: "rocky planet"
      },
      { 
        name: "React", 
        radius: 130, 
        angle: 45, 
        size: "w-12 h-12", 
        color: "bg-gradient-to-br from-blue-400 to-blue-500", 
        glow: "shadow-blue-400/60",
        orbitalPeriod: 13,
        description: "The component-based blue planet",
        celestialType: "habitable planet"
      },
      { 
        name: "GraphQL", 
        radius: 170, 
        angle: 120, 
        size: "w-10 h-10", 
        color: "bg-gradient-to-br from-red-400 to-red-500", 
        glow: "shadow-red-400/50",
        orbitalPeriod: 25,
        description: "The red planet of precise data queries",
        celestialType: "desert planet"
      },
      { 
        name: "Prisma", 
        radius: 220, 
        angle: 200, 
        size: "w-6 h-6", 
        color: "bg-gradient-to-br from-stone-300 to-stone-400", 
        glow: "shadow-stone-300/50",
        orbitalPeriod: 30,
        description: "The data modeling asteroid",
        celestialType: "dwarf planet"
      }
    ],
    // Gas giants (Jupiter, Saturn)
    infrastructure: [
      { 
        name: "Docker", 
        radius: 280, 
        angle: 10, 
        size: "w-24 h-24", 
        color: "bg-gradient-to-br from-amber-500 to-amber-600", 
        glow: "shadow-amber-500/50",
        orbitalPeriod: 45,
        description: "The containerization gas giant",
        celestialType: "gas giant",
        hasRing: false
      },
      { 
        name: "K8s", 
        radius: 360, 
        angle: 100, 
        size: "w-22 h-22", 
        color: "bg-gradient-to-br from-yellow-700 to-amber-800", 
        glow: "shadow-amber-700/50",
        orbitalPeriod: 70,
        description: "The orchestration ringed planet",
        celestialType: "ringed gas giant",
        hasRing: true
      }
    ],
    // Specialized objects (comets, moons, dwarf planets)
    services: [
      { 
        name: "Kafka", 
        radius: 250, 
        angle: 60, 
        size: "w-6 h-6", 
        color: "bg-gradient-to-br from-emerald-400 to-emerald-500", 
        glow: "shadow-emerald-400/50",
        orbitalPeriod: 37,
        description: "The streaming message comet",
        celestialType: "comet"
      },
      { 
        name: "Redis", 
        radius: 235, 
        angle: 160, 
        size: "w-5 h-5", 
        color: "bg-gradient-to-br from-red-500 to-red-600", 
        glow: "shadow-red-500/70",
        orbitalPeriod: 33,
        description: "The in-memory cosmic cache",
        celestialType: "fast asteroid"
      },
      { 
        name: "Go", 
        radius: 205, 
        angle: 230, 
        size: "w-4 h-4", 
        color: "bg-gradient-to-br from-sky-400 to-sky-500", 
        glow: "shadow-sky-400/70",
        orbitalPeriod: 12,
        description: "The fastest moving object",
        celestialType: "speeding meteor"
      },
      { 
        name: "AI", 
        radius: 400, 
        angle: 280, 
        size: "w-32 h-32", 
        color: "bg-gradient-to-br from-gray-700 via-gray-900 to-black", 
        glow: "shadow-purple-900/70",
        orbitalPeriod: 100,
        description: "The TON 618 supermassive black hole",
        celestialType: "black hole"
      }
    ],
    // Moons (natural satellites)
    design: [
      { 
        name: "Figma", 
        radius: 25, 
        parent: "TypeScript", 
        size: "w-3 h-3", 
        color: "bg-gradient-to-br from-gray-300 to-gray-400", 
        glow: "shadow-gray-300/50",
        orbitalPeriod: 3,
        description: "Design tool moon orbiting TypeScript",
        celestialType: "moon"
      }
    ]
  };

  // All technologies in a flat array for easy rendering
  const allTechnologies = [
    ...techStack.core, 
    ...techStack.primary, 
    ...techStack.infrastructure, 
    ...techStack.services, 
    ...techStack.design
  ];

  // Refs for tech nodes
  const techRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  // Initialize refs array on component mount
  useEffect(() => {
    techRefs.current = techRefs.current.slice(0, allTechnologies.length);
  }, []);

  // Data flow animations between technologies
  const dataFlows = [
    { from: "TypeScript", to: "React", color: "from-slate-400 to-blue-400" },
    { from: "React", to: "GraphQL", color: "from-blue-400 to-red-400" },
    { from: "GraphQL", to: "Prisma", color: "from-red-400 to-stone-400" },
    { from: "Docker", to: "K8s", color: "from-amber-500 to-amber-700" },
    { from: "Node.js", to: "TypeScript", color: "from-yellow-400 to-slate-400" },
    { from: "Kafka", to: "GraphQL", color: "from-emerald-400 to-red-400" },
    { from: "AI", to: "Node.js", color: "from-gray-900 to-yellow-400" }
  ];

  // Animation for tech nodes and data flows with realistic celestial mechanics
  useEffect(() => {
    let frameId: number;
    let time = 0;
    
    const animate = () => {
      // Slower time increment for more realistic cosmic feel
      time += 0.003;
      
      // Animate each technology node
      allTechnologies.forEach((tech, i) => {
        if (!techRefs.current[i]) return;
        
        if (tech.name === "Node.js") {
          // Sun pulsates gently
          const scale = 1 + Math.sin(time * 1.5) * 0.03;
          techRefs.current[i]!.style.transform = `translate(-50%, -50%) scale(${scale})`;
        } else if (tech.name === "Figma") {
          // Find parent technology (TypeScript)
          const parentTech = allTechnologies.find(t => t.name === "TypeScript");
          if (!parentTech) return;
          
          // Calculate parent's position
          const parentOrbitalPeriod = parentTech.orbitalPeriod || 20;
          const parentAngle = (parentTech.angle || 0) * (Math.PI / 180) + time * (2 / parentOrbitalPeriod);
          const parentX = Math.cos(parentAngle) * (parentTech.radius || 100);
          const parentY = Math.sin(parentAngle) * (parentTech.radius || 100);
          
          // Orbit around parent
          const moonAngle = time * 3; // faster orbit around parent
          const moonX = parentX + Math.cos(moonAngle) * 25;
          const moonY = parentY + Math.sin(moonAngle) * 25;
          techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${moonX}px, ${moonY}px)`;
        } else if (tech.celestialType === "black hole") {
          // Special animation for AI as black hole
          const rotationSpeed = 0.5;
          const scale = 1 + Math.sin(time * rotationSpeed) * 0.05;
          const angle = (tech.angle || 0) * (Math.PI / 180) + time * (2 / (tech.orbitalPeriod || 100));
          const x = Math.cos(angle) * (tech.radius || 400);
          const y = Math.sin(angle) * (tech.radius || 400);
          techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`;
          // Apply gravitational distortion effect to surrounding
        } else if (tech.celestialType === "speeding meteor") {
          // Very fast orbit for Go
          const orbitalPeriod = tech.orbitalPeriod || 12;
          const angle = (tech.angle || 0) * (Math.PI / 180) + time * (8 / orbitalPeriod);
          const x = Math.cos(angle) * (tech.radius || 100);
          const y = Math.sin(angle) * (tech.radius || 100);
          techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        } else {
          // Regular orbital motion with realistic speeds based on orbital period
          const orbitalPeriod = tech.orbitalPeriod || 20;
          const speed = 2 / orbitalPeriod; // Adjust speed based on orbital period
          const angle = (tech.angle || 0) * (Math.PI / 180) + time * speed;
          const x = Math.cos(angle) * (tech.radius || 100);
          const y = Math.sin(angle) * (tech.radius || 100);
          techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        }
      });
      
      frameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Deep space background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base space gradient - more realistic cosmic background */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[#080b20] via-[#0d0a25] to-[#1a0e35]"></div>
        
        {/* Cosmic energy field - resembles electromagnetic fields of technology */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Starfield background with more realistic star colors */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 250 }).map((_, i) => {
          // Realistic star colors: white, blue-white, yellow, orange, red
          const starColors = [
            "bg-white", 
            "bg-blue-100", 
            "bg-yellow-100", 
            "bg-amber-200", 
            "bg-red-200"
          ];
          const starColor = starColors[Math.floor(Math.random() * starColors.length)];
          const starSize = Math.random() > 0.97 ? Math.random() * 3 + 1 : Math.max(0.8, Math.random() * 2);
          return (
            <div
              key={i}
              className={`absolute rounded-full ${starColor}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${starSize}px`,
                height: `${starSize}px`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `twinkle ${Math.random() * 5 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          );
        })}
        
        {/* Cosmic dust and nebula effect */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`nebula-${i}`}
            className="absolute rounded-full bg-purple-900/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              filter: "blur(40px)",
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      {/* Grid pattern - representing code structure */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="h-full border-r border-white/10"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="w-full border-b border-white/10"></div>
          ))}
        </div>
      </div>

      {/* Content wrapper */}
      <div className="container max-w-7xl mx-auto z-10 pt-20 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content - Left side */}
          <div className="relative z-10 mt-10 lg:mt-0 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-6 text-sm font-medium text-white"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></div>
              Cosmic Web Architecture
            </motion.div>

            <div className="space-y-4 mb-8">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block">Harmony of </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
                  Code & Cosmos
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Just as the celestial bodies of our universe operate in perfect harmony,
                our tech stack orchestrates a symphony of microservices, data streams, 
                and AI-powered systems to create digital experiences of astronomical precision.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Launch Your Project
              </button>
              <button className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white font-medium text-lg hover:bg-white/20 transition-all duration-300">
                Explore Our Stack
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                  99.9%
                </div>
                <div className="text-sm text-gray-400">System uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  250ms
                </div>
                <div className="text-sm text-gray-400">Response time</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400">
                  10x
                </div>
                <div className="text-sm text-gray-400">Development speed</div>
              </div>
            </motion.div>
          </div>

          {/* Cosmic Technology Ecosystem - Right side */}
          <motion.div
            className="relative order-1 lg:order-2 h-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Tech Ecosystem Container */}
              <div className="relative w-[550px] h-[550px]">
                {/* Orbit paths */}
                {techStack.primary.map((tech, i) => (
                  <div 
                    key={`orbit-${i}`} 
                    className="absolute top-1/2 left-1/2 rounded-full border border-white/5" 
                    style={{
                      width: tech.radius * 2,
                      height: tech.radius * 2,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
                {techStack.infrastructure.map((tech, i) => (
                  <div 
                    key={`orbit-infra-${i}`} 
                    className="absolute top-1/2 left-1/2 rounded-full border border-white/5" 
                    style={{
                      width: tech.radius * 2,
                      height: tech.radius * 2,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
                
                {/* Data flow connections */}
                <div className="absolute top-1/2 left-1/2 w-full h-full">
                  {dataFlows.map((flow, i) => (
                    <motion.div
                      key={`flow-${i}`}
                      className={`absolute w-full h-full opacity-0`}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 2,
                        repeatDelay: dataFlows.length * 2 - 2
                      }}
                    >
                      <div className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${flow.color}`} 
                           style={{
                             filter: "blur(1px)",
                             boxShadow: "0 0 8px rgba(255,255,255,0.8)"
                           }}/>
                    </motion.div>
                  ))}
                </div>
                
                {/* Tech nodes with realistic celestial representation */}
                {allTechnologies.map((tech, i) => (
                  <motion.div
                    key={`tech-${i}`}
                    ref={(el: HTMLDivElement | null) => {
                      techRefs.current[i] = el;
                    }}
                    className={`absolute top-1/2 left-1/2 ${tech.size} rounded-full ${tech.color} ${tech.glow} z-20 flex items-center justify-center`}
                    initial={tech.name === "Node.js" ? { opacity: 0, scale: 0 } : { opacity: 0 }}
                    animate={tech.name === "Node.js" ? { opacity: 1, scale: 1 } : { opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: tech.name === "Node.js" ? 0.3 : 0.3 + (i * 0.1),
                      type: "spring"
                    }}
                    style={{
                      boxShadow: tech.celestialType === "black hole" 
                        ? `0 0 40px 20px var(--tw-shadow-color), 0 0 80px 40px rgba(0,0,0,0.8)` 
                        : `0 0 15px 5px var(--tw-shadow-color)`,
                    }}
                  >
                    {/* Render special effects based on celestial type */}
                    {tech.hasRing && (
                      <div className="absolute w-[130%] h-[30%] rounded-full border-2 border-amber-400/30 -rotate-12"></div>
                    )}
                    
                    {tech.celestialType === "comet" && (
                      <div className="absolute w-[300%] h-[10%] bg-gradient-to-r from-transparent via-emerald-400/30 to-emerald-400/5 -rotate-45 rounded-full" style={{left: '-200%'}}></div>
                    )}
                    
                    {/* Tech name label */}
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                        {tech.name}
                      </div>
                    </div>
                    
                    {/* Hover tooltip with description */}
                    <motion.div 
                      className="absolute opacity-0 pointer-events-none -top-12 left-1/2 transform -translate-x-1/2 w-48 bg-black/80 backdrop-blur-md p-2 rounded-md z-30"
                      whileHover={{ opacity: 1 }}
                    >
                      <p className="text-xs text-white text-center">{tech.description}</p>
                      <p className="text-xs text-gray-400 text-center mt-1">{tech.celestialType}</p>
                    </motion.div>
                  </motion.div>
                ))}
                
                {/* Connecting lines between technologies for microservices architecture */}
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <line x1="45%" y1="45%" x2="55%" y2="55%" 
                        className="stroke-indigo-500/20" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="55%" y1="45%" x2="45%" y2="55%" 
                        className="stroke-indigo-500/20" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="30%" y1="50%" x2="70%" y2="50%" 
                        className="stroke-indigo-500/20" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>

            {/* Technology legend badges */}
            <motion.div
              className="absolute -bottom-6 -right-4 flex flex-wrap gap-2 max-w-xs justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {["Modern Stack", "Microservices", "Type Safety", "Cloud Native", "AI Driven"].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.3)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Code streams - resembling data flow */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden opacity-20">
        <div className="absolute bottom-0 w-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`code-${i}`}
              className="text-[10px] text-green-400 font-mono whitespace-nowrap"
              initial={{ y: 0 }}
              animate={{ y: -500 }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
              style={{
                position: "absolute",
                left: `${20 + i * 20}%`,
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j}>
                  {j % 3 === 0 ? "import { useState } from 'react';" : 
                   j % 3 === 1 ? "function mapData(source) { return transform(source); }" :
                   "const container = new Container(); container.bind(Service);"}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default EnhancedHero;
