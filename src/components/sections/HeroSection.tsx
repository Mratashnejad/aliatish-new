import React, { useState, useEffect, useRef, useMemo } from "react";
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
  rotationPeriod?: number;  // Rotation period (Earth days equivalent)
  parent?: string;
  hasRing?: boolean;
  celestialType?: string;
  eccentricity?: number;    // Orbital eccentricity (0=circle, >0=ellipse)
  inclination?: number;     // Orbital inclination (degrees)
  semiMajorAxis?: number;   // Semi-major axis for elliptical orbits
  mass?: number;            // Mass (relative to sun = 1)
  realColor?: string;       // Scientifically accurate color
  accretionRate?: number;   // For black holes, accretion rate
}

// Types for star and nebula
type Star = {
  color: string;
  size: number;
  top: number;
  left: number;
  opacity: number;
  animation: string;
  animationDelay: string;
};
type Nebula = {
  top: number;
  left: number;
  width: number;
  height: number;
};

// Hero component with cosmic technology ecosystem
const EnhancedHero = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [nebulae, setNebulae] = useState<Nebula[]>([]);

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      // setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Only generate random data on client-side
    // Use consistent seed to ensure consistent rendering
    const seededRandom = createSeededRandom(42);
    setStars(generateStarsData(120, seededRandom));
    setNebulae(generateNebulaeData(3, seededRandom));
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
  const techStack: Record<string, TechNode[]> = useMemo(() => ({
    core: [
      { 
        name: "Node.js", 
        radius: 0, // Center (Sun) 
        size: "w-28 h-28", 
        color: "bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500",
        realColor: "#FFF4EA", // G-type star color 
        glow: "shadow-orange-500/70",
        description: "The core energy source of our system",
        angle: 0,
        orbitalPeriod: 0,
        rotationPeriod: 27, // Sun's rotation period in Earth days
        mass: 1.0, // 1 solar mass
        celestialType: "star"
      }
    ],
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
        name: "Next.js", 
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
      },
      { 
        name: "Kafka", 
        radius: 250, 
        angle: 60, 
        size: "w-6 h-6", 
        color: "bg-gradient-to-br from-emerald-400 to-emerald-500",
        realColor: "#9CECD9", // Comet coma color 
        glow: "shadow-emerald-400/50",
        orbitalPeriod: 37,
        eccentricity: 0.85, // Very eccentric orbit
        inclination: 45, // High inclination
        semiMajorAxis: 15, // AU
        rotationPeriod: 0.5, // Fast rotation
        mass: 0.00001, // Tiny
        description: "The streaming message comet",
        celestialType: "comet"
      },
    ],
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
        realColor: "#EAC78F", // Saturn-like color 
        glow: "shadow-amber-700/50",
        orbitalPeriod: 70,
        eccentricity: 0.057, // Saturn eccentricity
        inclination: 2.5, // Saturn inclination
        semiMajorAxis: 9.58, // AU
        rotationPeriod: 0.44, // Fast rotation (10.7h)
        mass: 95.2, // Saturn
        description: "The orchestration ringed planet",
        celestialType: "ringed gas giant",
        hasRing: true
      }
    ],
    services: [
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
        realColor: "#59B9FF", // Bright blue glow 
        glow: "shadow-sky-400/70",
        orbitalPeriod: 12,
        eccentricity: 0.22, // Elliptical orbit
        inclination: 25, // Inclined orbit
        semiMajorAxis: 1.8, // AU
        rotationPeriod: 0.1, // Extremely fast rotation
        mass: 0.000001, // Tiny
        description: "The fastest moving object",
        celestialType: "speeding meteor"
      },
      { 
        name: "AI", 
        radius: 400, 
        angle: 280, 
        size: "w-32 h-32", 
        color: "bg-gradient-to-br from-gray-700 via-gray-900 to-black",
        realColor: "#000000", // Black hole 
        glow: "shadow-purple-900/70",
        orbitalPeriod: 100,
        description: "The TON 618 supermassive black hole",
        celestialType: "black hole",
        mass: 1000000, // Supermassive black hole (millions of solar masses)
        eccentricity: 0.01, // Nearly circular
        inclination: 0, // Aligned with system
        semiMajorAxis: 50, // Far from system center
        accretionRate: 0.5 // Solar masses per year
      }
    ],
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
  }), []);

  // All technologies in a flat array for easy rendering
  const allTechnologies = useMemo(() => [
    ...techStack.core, 
    ...techStack.primary, 
    ...techStack.infrastructure, 
    ...techStack.services,
    ...techStack.design
  ], [techStack]);

  // Refs for tech nodes
  const techRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  // Initialize refs array on component mount
  useEffect(() => {
    techRefs.current = techRefs.current.slice(0, allTechnologies.length);
  }, [allTechnologies.length]);

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

  // Refs for black hole and system
  const blackHoleRef = useRef<HTMLDivElement | null>(null);

  // Animation for tech nodes and data flows with realistic celestial mechanics
  useEffect(() => {
    let frameId: number;
    let time = 0;
    let blackHolePos = {x: 0, y: 0};
    let blackHoleObj: TechNode | null = null;
    
    // Initialize refs array
    techRefs.current = techRefs.current.slice(0, allTechnologies.length);
    
    // Find the black hole object
    for (const tech of allTechnologies) {
      if (tech.celestialType === "black hole") {
        blackHoleObj = tech;
        break;
      }
    }
    
    // Assign completely random angles to all objects every time the component mounts
    allTechnologies.forEach(tech => {
      if (tech.name !== "Node.js") {
        // Completely random starting position between 0-360 degrees
        tech.angle = Math.random() * 360;
      }
    });
    
    const animate = () => {
      // Increase time increment for faster movement
      time += 0.005; // Increased from 0.002 for more noticeable movement
      
      // Store positions for interaction calculations
      const positions: Record<string, {x: number, y: number}> = {};
      
      // Animate each technology node
      allTechnologies.forEach((tech, i) => {
        if (!techRefs.current[i]) return;
        
        // Calculate position based on celestial type
        if (tech.name === "Node.js") {
          // Sun pulsates gently with fader effect
          const scale = 1 + Math.sin(time * 1.5) * 0.03;
          // Fader sun effect
          if (!techRefs.current[i]!.querySelector('.tech-core')) {
            const coreElement = document.createElement('div');
            coreElement.className = 'absolute w-full h-full rounded-full tech-core';
            coreElement.style.background = 'radial-gradient(circle, rgba(255,193,7,0.4) 0%, rgba(255,152,0,0.2) 50%, rgba(255,87,34,0.1) 100%)';
            coreElement.style.filter = 'blur(8px)'; // More blur, less opacity
            techRefs.current[i]!.appendChild(coreElement);
          }
          techRefs.current[i]!.style.transform = `translate(-50%, -50%) scale(${scale})`;
          
          // Solar flare effect
          if (Math.random() < 0.005) { // Increased chance for more activity
            const flare = document.createElement('div');
            flare.className = 'absolute w-16 h-16 bg-orange-500/50 rounded-full animate-ping';
            flare.style.filter = 'blur(8px)';
            techRefs.current[i]?.appendChild(flare);
            
            setTimeout(() => {
              if (techRefs.current[i]?.contains(flare)) {
                techRefs.current[i]?.removeChild(flare);
              }
            }, 1000);
          }
          
          positions[tech.name] = {x: 0, y: 0};
        } else if (tech.name === "Kafka") {
          // Render Kafka as a normal orbiting object (not a comet)
          const orbitalPeriod = tech.orbitalPeriod || 37;
          const speed = (2 / orbitalPeriod) * 2;
          const angle = (tech.angle || 0) * (Math.PI / 180) + time * speed;
          const x = Math.cos(angle) * (tech.radius || 250);
          const y = Math.sin(angle) * (tech.radius || 250);
          ensureTechLabel(techRefs.current[i], tech.name);
          techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
          positions[tech.name] = {x, y};
        } else if (tech.name === "Figma") {
          // Find parent technology (TypeScript)
          const parentTech = allTechnologies.find(t => t.name === "TypeScript");
          if (!parentTech || !positions[parentTech.name]) return;
          
          // Get parent's position
          const parentPos = positions[parentTech.name];
          
          // Orbit around parent with realistic parameters
          const moonAngle = time * (2 * Math.PI / (tech.orbitalPeriod || 3)) * 2; // Faster orbit
          const moonX = parentPos.x + Math.cos(moonAngle) * 25;
          const moonY = parentPos.y + Math.sin(moonAngle) * 25;
          
          // Apply inclination
          const inclinationFactor = Math.sin(moonAngle) * 0.1;
          
          // Make sure label is always preserved
          ensureTechLabel(techRefs.current[i], tech.name);
          
          techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${moonX}px, ${moonY}px) scale(${1 + inclinationFactor})`;
          
          positions[tech.name] = {x: moonX, y: moonY};
        } else if (tech.celestialType === "black hole") {
          // Special animation for AI as black hole
          const orbitalPeriod = tech.orbitalPeriod || 100;
          const angle = (tech.angle || 0) * (Math.PI / 180) + time * (2 / orbitalPeriod) * 2; // Faster orbit
          const x = Math.cos(angle) * (tech.radius || 400);
          const y = Math.sin(angle) * (tech.radius || 400);
          
          // Store black hole position for relativistic effects
          blackHolePos = {x, y};
          blackHoleRef.current = techRefs.current[i];
          
          // Ensure the label is visible
          ensureTechLabel(techRefs.current[i], tech.name, true); // Pass true for AI
          
          techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
          
          // Create realistic accretion disk effect
          if (Math.floor(time * 10) % 15 === 0 && blackHoleRef.current) { // More frequent updates
            createAccretionDisk(
              blackHoleRef.current, 
              1000000, 
              0.5
            );
          }
          
          positions[tech.name] = {x, y};
        } else if (tech.celestialType === "ai satellite") {
          // AI libraries orbiting the black hole
          if (!positions["AI"]) return;
          
          const parentPos = positions["AI"];
          const orbitalPeriod = tech.orbitalPeriod || 25;
          const angle = (tech.angle || 0) * (Math.PI / 180) + time * (2 * Math.PI / orbitalPeriod) * 1.5; // Faster orbit
          
          // Calculate orbit around the black hole with some vertical oscillation
          const radius = tech.radius || 450;
          const x = parentPos.x + Math.cos(angle) * (radius - 400);
          const y = parentPos.y + Math.sin(angle) * (radius - 400) * 0.7; // Elliptical orbit
          
          // Ensure tech label is always visible
          ensureTechLabel(techRefs.current[i], tech.name);
          
          // Apply relativistic effects - stronger for AI satellites
          if (blackHoleObj && blackHoleRef.current) {
            const newPos = applyRelativisticEffects(
              techRefs.current[i],
              blackHoleRef.current,
              1000000,
              blackHolePos,
              {x, y}
            );
            
            if (newPos) {
              techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${newPos.x}px, ${newPos.y}px)`;
              positions[tech.name] = newPos;
            } else {
              techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
              positions[tech.name] = {x, y};
            }
          } else {
            techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
            positions[tech.name] = {x, y};
          }
        } else if (tech.celestialType === "comet") {
          // Comet with tail that follows orbital path
          const orbitalPeriod = tech.orbitalPeriod || 37;
          const eccentricity = 0.85;
          const semiMajorAxis = 15;
          // Remove inclination for Kafka
          const inclination = tech.name === "Kafka" ? 0 : 45;
          // Calculate position with orbital mechanics (faster movement)
          const { x, y } = calculateOrbitalPosition(
            time * 1.5, // Faster orbit 
            semiMajorAxis * 20,
            eccentricity,
            orbitalPeriod,
            inclination,
            (tech.angle || 0) * (Math.PI / 180),
            0,
            30
          );
          
          // Clear existing content except label
          if (techRefs.current[i]) {
            // Keep the label
            const label = techRefs.current[i]!.querySelector('.tech-label');
            techRefs.current[i]!.innerHTML = '';
            if (label) techRefs.current[i]!.appendChild(label);
            else ensureTechLabel(techRefs.current[i], tech.name);
          }
          
          // Create comet tail
          const distance = Math.sqrt(x * x + y * y);
          const tailLength = Math.max(20, 150 - distance / 5);
          const angle = Math.atan2(y, x);
          
          const tail = document.createElement('div');
          tail.className = 'absolute';
          tail.style.width = `${tailLength}px`;
          tail.style.height = '10px';
          tail.style.top = '50%';
          tail.style.left = '50%';
          tail.style.transform = `translate(-25%, -50%) rotate(${angle + Math.PI}rad)`;
          tail.style.background = 'linear-gradient(to left, rgba(150,255,200,0.7) 0%, rgba(150,255,200,0.3) 70%, transparent 100%)';
          tail.style.filter = 'blur(3px)';
          
          // Create coma (glowing head)
          const coma = document.createElement('div');
          coma.className = 'absolute rounded-full bg-emerald-300/50';
          coma.style.width = '200%';
          coma.style.height = '200%';
          coma.style.top = '50%';
          coma.style.left = '50%';
          coma.style.transform = 'translate(-50%, -50%)';
          coma.style.filter = 'blur(4px)';
          
          techRefs.current[i]?.appendChild(tail);
          techRefs.current[i]?.appendChild(coma);
          
          // Apply relativistic effects if close to black hole
          if (blackHoleObj && blackHoleRef.current) {
            const newPos = applyRelativisticEffects(
              techRefs.current[i],
              blackHoleRef.current,
              1000000,
              blackHolePos,
              {x, y}
            );
            
            if (newPos) {
              positions[tech.name] = newPos;
            } else {
              techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
              positions[tech.name] = {x, y};
            }
          } else {
            techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
            positions[tech.name] = {x, y};
          }
        } else if (tech.celestialType === "speeding meteor") {
          // Very fast orbit for Go with elliptical orbit
          const orbitalPeriod = tech.orbitalPeriod || 12;
          
          // Use orbital mechanics for elliptical orbit (faster movement)
          const { x, y } = calculateOrbitalPosition(
            time * 2, // Faster orbit
            180, // Semi-major axis
            0.22, // Eccentricity
            orbitalPeriod,
            25, // Inclination
            (tech.angle || 0) * (Math.PI / 180)
          );
          
          // Clear existing content except label
          if (techRefs.current[i]) {
            // Keep the label
            const label = techRefs.current[i]!.querySelector('.tech-label');
            techRefs.current[i]!.innerHTML = '';
            if (label) techRefs.current[i]!.appendChild(label);
            else ensureTechLabel(techRefs.current[i], tech.name);
          }
          
          // Apply meteor trail effect
          const trail = document.createElement('div');
          trail.className = 'absolute rounded-full bg-sky-400/30';
          trail.style.width = '100%';
          trail.style.height = '100%';
          trail.style.filter = 'blur(3px)';
          
          const trailLong = document.createElement('div');
          trailLong.className = 'absolute bg-gradient-to-r from-sky-400/60 to-transparent';
          trailLong.style.width = '30px';
          trailLong.style.height = '2px';
          trailLong.style.top = '50%';
          trailLong.style.right = '100%';
          trailLong.style.transform = 'translateY(-50%)';
          
          if (techRefs.current[i]) {
            techRefs.current[i]!.appendChild(trail);
            techRefs.current[i]!.appendChild(trailLong);
          }
          
          // Calculate angle for direction of motion
          const angle = Math.atan2(y, x);
          
          // Apply relativistic effects if close to black hole
          if (blackHoleObj && blackHoleRef.current) {
            const newPos = applyRelativisticEffects(
              techRefs.current[i],
              blackHoleRef.current,
              1000000,
              blackHolePos,
              {x, y}
            );
            
            if (newPos) {
              techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${newPos.x}px, ${newPos.y}px) rotateZ(${angle * (180 / Math.PI)}deg)`;
              positions[tech.name] = newPos;
            } else {
              techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotateZ(${angle * (180 / Math.PI)}deg)`;
              positions[tech.name] = {x, y};
            }
          } else {
            techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotateZ(${angle * (180 / Math.PI)}deg)`;
            positions[tech.name] = {x, y};
          }
        } else {
          // Regular orbital motion with realistic speeds based on orbital period
          const orbitalPeriod = tech.orbitalPeriod || 20;
          const speed = (2 / orbitalPeriod) * 2; // Faster orbit speed
          const angle = (tech.angle || 0) * (Math.PI / 180) + time * speed;
          const x = Math.cos(angle) * (tech.radius || 100);
          const y = Math.sin(angle) * (tech.radius || 100);
          
          // Ensure the label is present
          ensureTechLabel(techRefs.current[i], tech.name);
          
          // Apply ring system for gas giants
          if (tech.hasRing && !techRefs.current[i]!.querySelector('.ring-system')) {
            const ring = document.createElement('div');
            ring.className = 'absolute ring-system';
            ring.style.width = '220%';
            ring.style.height = '30%';
            ring.style.borderRadius = '50%';
            ring.style.border = '2px solid rgba(255, 236, 179, 0.6)';
            ring.style.top = '50%';
            ring.style.left = '50%';
            ring.style.transform = 'translate(-50%, -50%) rotateX(75deg)';
            ring.style.boxShadow = 'inset 0 0 20px rgba(255, 236, 179, 0.3)';
            techRefs.current[i]!.appendChild(ring);
          }
          
          // Apply relativistic effects if close to black hole
          if (blackHoleObj && blackHoleRef.current) {
            const newPos = applyRelativisticEffects(
              techRefs.current[i],
              blackHoleRef.current,
              1000000,
              blackHolePos,
              {x, y}
            );
            
            if (newPos) {
              techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${newPos.x}px, ${newPos.y}px)`;
              positions[tech.name] = newPos;
            } else {
              techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
              positions[tech.name] = {x, y};
            }
          } else {
            techRefs.current[i]!.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
            positions[tech.name] = {x, y};
          }
        }
      });
      
      frameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [allTechnologies]);

  // Function to ensure tech label is always present and visible
  function ensureTechLabel(element: HTMLDivElement | null, techName: string, isAI = false) {
    if (!element) return;
    
    // Check if label already exists
    if (!element.querySelector('.tech-label')) {
      const labelElement = document.createElement('div');
      labelElement.className = 'absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap tech-label pointer-events-none';
      
      const labelContent = document.createElement('div');
      labelContent.className = isAI
        ? 'bg-black/60 backdrop-blur-sm px-3 py-2 rounded text-base font-extrabold text-white shadow-lg'
        : 'bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-xs text-white';
      labelContent.textContent = techName;
      if (isAI) {
        labelContent.style.textShadow = '0 0 8px #fff, 0 0 16px #a855f7, 0 0 24px #a855f7';
      }
      labelElement.appendChild(labelContent);
      element.appendChild(labelElement);
    }
  }

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
        {stars.map((star, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${star.color}`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animation: star.animation,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
        
        {/* Cosmic dust and nebula effect */}
        {nebulae.map((nebula, i) => (
          <div
            key={`nebula-${i}`}
            className="absolute rounded-full bg-purple-900/10"
            style={{
              top: `${nebula.top}%`,
              left: `${nebula.left}%`,
              width: `${nebula.width}px`,
              height: `${nebula.height}px`,
              filter: "blur(40px)",
              opacity: 0.1
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

      {/* Keyframes for black hole effects */}
      <style jsx global>{`
        @keyframes ping {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes supernova {
          0% {
            transform: translate(-50%, -50%) scale(0.1);
            opacity: 0.9;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      `}</style>

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

// Restore utility functions needed by the component

// Use a seeded random function to ensure consistency between server and client
function createSeededRandom(seed = 1) {
  return function() {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
}

function generateStarsData(count: number, getRandom: () => number) {
  return Array.from({ length: count }).map(() => {
    const starColors = [
      "bg-white",
      "bg-blue-100",
      "bg-yellow-100",
      "bg-amber-200",
      "bg-red-200"
    ];
    return {
      color: starColors[Math.floor(getRandom() * starColors.length)],
      size: getRandom() > 0.97 ? getRandom() * 3 + 1 : Math.max(0.8, getRandom() * 2),
      top: getRandom() * 100,
      left: getRandom() * 100,
      opacity: getRandom() * 0.8 + 0.2,
      animation: `twinkle ${getRandom() * 5 + 5}s ease-in-out infinite`,
      animationDelay: `${getRandom() * 5}s`
    };
  });
}

function generateNebulaeData(count: number, getRandom: () => number) {
  return Array.from({ length: count }).map(() => ({
    top: getRandom() * 100,
    left: getRandom() * 100,
    width: getRandom() * 200 + 100,
    height: getRandom() * 200 + 100
  }));
}

function createAccretionDisk(
  blackHoleElement: HTMLDivElement,
  mass: number,
  accretionRate: number = 0.1 // Solar masses per year
): void {
  if (!blackHoleElement) return;
  // Clear existing content except label
  const label = blackHoleElement.querySelector('.tech-label');
  blackHoleElement.innerHTML = '';
  if (label) blackHoleElement.appendChild(label);
  // Create event horizon (black hole itself)
  const eventHorizon = document.createElement('div');
  eventHorizon.className = 'absolute rounded-full bg-black';
  eventHorizon.style.width = '100%';
  eventHorizon.style.height = '100%';
  eventHorizon.style.top = '50%';
  eventHorizon.style.left = '50%';
  eventHorizon.style.transform = 'translate(-50%, -50%)';
  eventHorizon.style.boxShadow = '0 0 20px rgba(0,0,0,0.8)';
  blackHoleElement.appendChild(eventHorizon);
  // Remove the shiny/glow circle inside the black hole (do not add any inner glowing div)
  // Create shadow (light-capturing region)
  const shadow = document.createElement('div');
  shadow.className = 'absolute rounded-full';
  shadow.style.width = '150%';
  shadow.style.height = '150%';
  shadow.style.top = '50%';
  shadow.style.left = '50%';
  shadow.style.transform = 'translate(-50%, -50%)';
  shadow.style.background = 'radial-gradient(circle, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0) 70%)';
  blackHoleElement.appendChild(shadow);
  // Create fewer rings for a less busy accretion disk
  const ringCount = 4; // Reduced from 8
  for (let i = 0; i < ringCount; i++) {
    const sizeRatio = 1.2 + i * 0.4;
    const brightness = Math.min(1, Math.max(0.3, 0.8 - i * 0.1));
    const disk = document.createElement('div');
    disk.className = 'absolute rounded-full';
    disk.style.width = `${100 * sizeRatio}%`;
    disk.style.height = `${35 * sizeRatio}%`;
    disk.style.top = '50%';
    disk.style.left = '50%';
    disk.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
    disk.style.border = `1px solid ${i < 2 ? '#60a5fa' : '#f97316'}`;
    disk.style.opacity = `${brightness * 0.8}`;
    disk.style.boxShadow = `0 0 ${brightness * 10}px ${i < 2 ? '#60a5fa' : '#f97316'}`;
    blackHoleElement.appendChild(disk);
    // Add disk material
    const material = document.createElement('div');
    material.className = 'absolute';
    material.style.width = `${100 * sizeRatio}%`;
    material.style.height = `${Math.max(1, 30 * sizeRatio * (1 - i/ringCount))}%`;
    material.style.top = '50%';
    material.style.left = '50%';
    material.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
    material.style.background = `linear-gradient(90deg, transparent 20%, ${i < 2 ? 'rgba(96, 165, 250, 0.4)' : 'rgba(249, 115, 22, 0.4)'} 50%, transparent 80%)`;
    material.style.filter = 'blur(3px)';
    blackHoleElement.appendChild(material);
  }
  // Fewer relativistic jets
  if (accretionRate > 0.05) {
    const jetLength = Math.min(200, 30 + mass * 0.01); // Shorter jets
    const jetOpacity = Math.min(0.5, accretionRate); // Less visible
    for (let pole = 0; pole < 2; pole++) {
      const jet = document.createElement('div');
      jet.className = 'absolute';
      jet.style.width = '3px';
      jet.style.height = `${jetLength}px`;
      jet.style.left = '50%';
      if (pole === 0) {
        jet.style.top = '0%';
        jet.style.transform = 'translate(-50%, -100%)';
        jet.style.background = 'linear-gradient(to top, rgba(120,180,255,0.5) 0%, rgba(180,100,255,0.2) 70%, transparent 100%)';
      } else {
        jet.style.bottom = '0%';
        jet.style.transform = 'translate(-50%, 100%)';
        jet.style.background = 'linear-gradient(to bottom, rgba(120,180,255,0.5) 0%, rgba(180,100,255,0.2) 70%, transparent 100%)';
      }
      jet.style.filter = 'blur(2px)';
      jet.style.opacity = jetOpacity.toString();
      blackHoleElement.appendChild(jet);
    }
  }
  // Gravitational lensing effect
  const lensingEffect = document.createElement('div');
  lensingEffect.className = 'absolute rounded-full';
  lensingEffect.style.width = '250%';
  lensingEffect.style.height = '250%';
  lensingEffect.style.top = '50%';
  lensingEffect.style.left = '50%';
  lensingEffect.style.transform = 'translate(-50%, -50%)';
  lensingEffect.style.background = 'radial-gradient(circle, rgba(0,0,0,0) 30%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0) 70%)';
  lensingEffect.style.pointerEvents = 'none';
  blackHoleElement.appendChild(lensingEffect);
}

function calculateOrbitalPosition(
  time: number, 
  semiMajorAxis: number, 
  eccentricity: number, 
  orbitalPeriod: number, 
  inclination: number, 
  initialAngle: number,
  longitudeOfAscendingNode: number = 0,
  argumentOfPeriapsis: number = 0
): { x: number, y: number } {
  // Mean anomaly (position in orbit as a function of time)
  const M = (time * 2 * Math.PI / orbitalPeriod + initialAngle) % (2 * Math.PI);
  // Eccentric anomaly (solve Kepler's equation)
  let E = M;
  const maxIterations = 10;
  const tolerance = 1e-8;
  // Newton-Raphson iteration for better precision
  for (let i = 0; i < maxIterations; i++) {
    const deltaE = (E - eccentricity * Math.sin(E) - M) / (1 - eccentricity * Math.cos(E));
    E -= deltaE;
    if (Math.abs(deltaE) < tolerance) break;
  }
  // True anomaly (angle from focus to orbiting body)
  const cosv = (Math.cos(E) - eccentricity) / (1 - eccentricity * Math.cos(E));
  const sinv = (Math.sqrt(1 - eccentricity * eccentricity) * Math.sin(E)) / (1 - eccentricity * Math.cos(E));
  // const trueAnomaly = Math.atan2(sinv, cosv); // Unused
  // Heliocentric distance
  const distance = semiMajorAxis * (1 - eccentricity * Math.cos(E));
  // Position in orbital plane
  const xOrbit = distance * cosv;
  const yOrbit = distance * sinv;
  // Convert inclination and other angles to radians
  const inclinationRad = inclination * (Math.PI / 180);
  const lonAscNodeRad = longitudeOfAscendingNode * (Math.PI / 180);
  const argPeriapsisRad = argumentOfPeriapsis * (Math.PI / 180);
  // 3D position after orbital elements rotation
  // First rotate by argument of periapsis in orbital plane
  const xOrbit2 = xOrbit * Math.cos(argPeriapsisRad) - yOrbit * Math.sin(argPeriapsisRad);
  const yOrbit2 = xOrbit * Math.sin(argPeriapsisRad) + yOrbit * Math.cos(argPeriapsisRad);
  // Then account for inclination
  const x = xOrbit2 * Math.cos(lonAscNodeRad) - yOrbit2 * Math.cos(inclinationRad) * Math.sin(lonAscNodeRad);
  const y = xOrbit2 * Math.sin(lonAscNodeRad) + yOrbit2 * Math.cos(inclinationRad) * Math.cos(lonAscNodeRad);
  return { x, y };
}

function applyRelativisticEffects(
  element: HTMLDivElement | null, 
  blackHoleElement: HTMLDivElement | null,
  blackHoleMass: number,
  blackHolePosition: {x: number, y: number},
  objectPosition: {x: number, y: number}
): {x: number, y: number} | undefined {
  if (!element || !blackHoleElement) return undefined;
  // Calculate distance to black hole
  const dx = objectPosition.x - blackHolePosition.x;
  const dy = objectPosition.y - blackHolePosition.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  // Calculate event horizon (scaled for visualization)
  const eventHorizon = Math.max(5, blackHoleMass / 100000) * 5;
  // Visual effects only when close enough to black hole
  if (distance < eventHorizon * 10) {
    // Calculate pull factor (stronger closer to event horizon)
    let pullFactor = 1.0;
    let newX = objectPosition.x;
    let newY = objectPosition.y;
    if (distance < eventHorizon * 5) {
      // Objects get pulled toward the black hole
      pullFactor = Math.max(0, 1 - (eventHorizon * 2) / distance);
      newX = blackHolePosition.x + dx * pullFactor;
      newY = blackHolePosition.y + dy * pullFactor;
      // If inside event horizon, object disappears
      if (distance < eventHorizon) {
        element.style.opacity = "0";
        // Create absorption effect animation
        const absorptionEffect = document.createElement('div');
        absorptionEffect.className = 'absolute bg-white rounded-full animate-pulse';
        absorptionEffect.style.width = '5px';
        absorptionEffect.style.height = '5px';
        absorptionEffect.style.top = '50%';
        absorptionEffect.style.left = '50%';
        absorptionEffect.style.transform = 'translate(-50%, -50%)';
        absorptionEffect.style.animation = 'ping 1s cubic-bezier(0, 0, 0.2, 1) forwards';
        blackHoleElement.appendChild(absorptionEffect);
        // Remove the effect after animation
        setTimeout(() => {
          if (blackHoleElement.contains(absorptionEffect)) {
            blackHoleElement.removeChild(absorptionEffect);
          }
        }, 1000);
        return blackHolePosition;
      }
    }
    // Apply visual stretching effects based on distance
    const distanceRatio = Math.max(0.1, Math.min(1, eventHorizon * 3 / distance));
    const radialComponent = Math.atan2(dy, dx); // Angle from black hole to object
    // Calculate tangential and radial scaling
    const tangentialScale = 1 + distanceRatio; // Stretch perpendicular to radius
    const radialScale = 1 / (1 + distanceRatio); // Compress along radius
    // Apply visual effects
    if (distance < eventHorizon * 5) {
      // Apply visual distortion
      element.style.transform = `translate(-50%, -50%) translate(${newX}px, ${newY}px)`;
      // Add stretching effect
      element.style.transform += ` rotate(${radialComponent}rad) scale(${radialScale}, ${tangentialScale}) rotate(${-radialComponent}rad)`;
      // Apply color shift based on distance
      const blueshift = Math.max(0.8, 1 - distanceRatio * 0.5);
      element.style.filter = `hue-rotate(${(blueshift - 1) * -50}deg) saturate(${Math.max(1, 1/blueshift * 1.2)})`;
      return {x: newX, y: newY};
    }
  }
  return objectPosition;
}

export default EnhancedHero;
