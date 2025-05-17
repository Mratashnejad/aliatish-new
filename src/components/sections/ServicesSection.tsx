'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
  gradient: string;
  image: string;
  orbitSpeed?: number;
};

const services: Service[] = [
  {
    id: 1,
    title: "Enterprise Web Applications",
    description: "Custom enterprise-grade applications with robust architecture, seamless integrations, and uncompromising security.",
    icon: "🌌",
    color: "from-blue-500/20 to-indigo-500/20",
    gradient: "from-blue-500 to-indigo-600",
    image: "/images/services/enterprise-web.jpg",
    orbitSpeed: 20,
    features: [
      "Microservices Architecture",
      "Real-time Data Processing",
      "Secure Authentication Systems",
      "Seamless Third-party Integrations",
      "High Availability Infrastructure"
    ]
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Scalable, conversion-optimized online stores with immersive shopping experiences and frictionless checkout flows.",
    icon: "🪐",
    color: "from-emerald-500/20 to-teal-500/20",
    gradient: "from-emerald-500 to-teal-600",
    image: "/images/services/ecommerce.jpg",
    orbitSpeed: 25,
    features: [
      "Personalized Shopping Experiences",
      "Advanced Product Visualization",
      "Multi-channel Sales Integration",
      "Secure Payment Processing",
      "Dynamic Pricing Optimization"
    ]
  },
  {
    id: 3,
    title: "Business Intelligence Dashboards",
    description: "Interactive data visualization platforms transforming complex datasets into actionable insights and strategic advantages.",
    icon: "✨",
    color: "from-purple-500/20 to-violet-500/20",
    gradient: "from-purple-500 to-violet-600",
    image: "/images/services/bi-dashboard.jpg",
    orbitSpeed: 18,
    features: [
      "Real-time Data Visualization",
      "Predictive Analytics Algorithms",
      "Custom Reporting Engines",
      "Interactive Data Exploration",
      "Cross-platform Accessibility"
    ]
  },
  {
    id: 4,
    title: "API Development & Integration",
    description: "Robust, scalable APIs that enable seamless communication between systems and unlock business capabilities.",
    icon: "🚀",
    color: "from-amber-500/20 to-orange-500/20",
    gradient: "from-amber-500 to-orange-600",
    image: "/images/services/api-integration.jpg",
    orbitSpeed: 30,
    features: [
      "RESTful & GraphQL Architecture",
      "Microservices Implementation",
      "Third-party System Integration",
      "Comprehensive Documentation",
      "Advanced Rate Limiting & Security"
    ]
  }
];

// Cosmic orbit animation component
const OrbitalPath = ({ radius, opacity = 0.1, duration = 20 }: { radius: number; opacity?: number; duration?: number }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
    style={{ 
      width: radius * 2, 
      height: radius * 2, 
      opacity,
      transform: 'translate(-50%, -50%)' 
    }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  />
);

// Use a seeded random function to ensure consistency between server and client
function createSeededRandom(seed = 1) {
  return function() {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
}

// Create initial empty states
const INITIAL_PARTICLES: any[] = [];
const INITIAL_CARD_PARTICLES: any[] = [];
const INITIAL_PREVIEW_STARS: any[] = [];

function generateStarsData(count: number, colorFn?: (i: number) => string) {
  return Array.from({ length: count }).map((_, i) => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    size: Math.random() * 2 + 1,
    color: colorFn ? colorFn(i) : (Math.random() > 0.7 ? "bg-white" : "bg-white/70"),
  }));
}

function generateParticlesData(count: number, getRandom: () => number) {
  return Array.from({ length: count }).map(() => ({
    top: getRandom() * 100,
    left: getRandom() * 100,
    y: getRandom() > 0.5 ? -40 : 40,
    x: getRandom() > 0.5 ? -40 : 40,
    duration: getRandom() * 3 + 2,
    repeatDelay: getRandom() * 2,
  }));
}

// Animated star component for background
const Star = ({ delay = 0, size = 1.5, top, left, color = "bg-white" }: { 
  delay?: number; size?: number; top: string; left: string; color?: string 
}) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{
      width: size,
      height: size,
      top,
      left,
    }}
    animate={{
      opacity: [0.1, 0.8, 0.1],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
      delay,
    }}
  />
);

function generateCardParticles(count: number, getRandom: () => number) {
  return Array.from({ length: count }).map(() => ({
    width: getRandom() * 4 + 2,
    height: getRandom() * 4 + 2,
    top: getRandom() * 100,
    left: getRandom() * 100,
    blur: 1,
    y: -getRandom() * 10 - 5,
    duration: getRandom() * 2 + 3,
    delay: getRandom() * 2,
  }));
}

// Cosmic service card with orbital animations
const CosmicServiceCard = ({ 
  service, 
  isActive, 
  onClick, 
  delay = 0,
  index,
  mousePosition
}: { 
  service: Service; 
  isActive: boolean; 
  onClick: () => void; 
  delay?: number;
  index: number;
  mousePosition: { x: number; y: number };
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [localPosition, setLocalPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<any[]>([]);

  // Calculate parallax effect based on mouse position
  useEffect(() => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (mousePosition.x - centerX) / 20;
    const deltaY = (mousePosition.y - centerY) / 20;
    
    setLocalPosition({ x: deltaX * (index % 2 === 0 ? 1 : -0.7), y: deltaY * (index % 2 === 0 ? 0.7 : -1) });
  }, [mousePosition, index]);

  useEffect(() => {
    const seededRandom = createSeededRandom(24);
    setParticles(generateCardParticles(8, seededRandom));
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        x: localPosition.x,
      }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2 + delay,
        x: { duration: 0.5, ease: "easeOut" },
        y: { duration: 0.5, ease: "easeOut" },
      }}
      whileHover={{ scale: 1.03, z: 10 }}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ${
        isActive 
          ? 'shadow-lg shadow-indigo-500/10 border border-indigo-500/30' 
          : 'border border-white/10 hover:border-white/30'
      }`}
      onClick={onClick}
    >
      {/* Orbital animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} backdrop-blur-sm opacity-${isActive ? '30' : '10'}`}>
        {/* Cosmic dust particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white/20"
            style={{
              width: particle.width,
              height: particle.height,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              filter: `blur(${particle.blur}px)`,
            }}
            animate={{
              y: [0, particle.y],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${service.gradient} shadow-lg relative overflow-hidden`}>
            {/* Cosmic icon with glow */}
            <motion.div 
              className="absolute inset-0 opacity-50"
              animate={{ 
                boxShadow: [
                  'inset 0 0 15px rgba(255, 255, 255, 0.3)', 
                  'inset 0 0 30px rgba(255, 255, 255, 0.5)', 
                  'inset 0 0 15px rgba(255, 255, 255, 0.3)'
                ] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="relative z-10">{service.icon}</span>
          </div>
          <h3 className="ml-4 text-xl font-bold text-white">{service.title}</h3>
        </div>
        
        <p className={`text-sm ${isActive ? 'text-gray-200' : 'text-gray-400'} transition-colors duration-300`}>
          {service.description}
        </p>
        
        <div className={`mt-4 flex items-center font-medium text-sm ${isActive ? 'text-indigo-400' : 'text-gray-400'}`}>
          <span>Explore service</span>
          <motion.span 
            className="ml-2"
            animate={{ x: isActive ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >→</motion.span>
        </div>
      </div>
      
      {/* Cosmic glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent pointer-events-none"
        style={{ filter: 'blur(20px)' }}
      />
    </motion.div>
  );
};

// Animated feature list with cosmic animation
const CosmicFeatureList = ({ features }: { features: string[] }) => {
  return (
    <motion.ul className="space-y-4 mt-6">
      {features.map((feature, index) => (
        <motion.li 
          key={index} 
          className="flex items-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 * index }}
        >
          <div className="mr-3 mt-1 text-indigo-400">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
          <span className="text-gray-300">{feature}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

// Cosmic service preview with 3D effect
const CosmicServicePreview = ({ service, isActive }: { service: Service; isActive: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [previewStars, setPreviewStars] = useState<any[]>([]);
  const [previewParticles, setPreviewParticles] = useState<any[]>([]);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    const seededRandom = createSeededRandom(36);
    setPreviewStars(generatePreviewStars(20, seededRandom));
    setPreviewParticles(generatePreviewParticles(12, seededRandom));
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-80 rounded-2xl overflow-hidden relative perspective"
    >
      <motion.div 
        className="w-full h-full relative"
        animate={{ 
          rotateX: mousePosition.y * -15,
          rotateY: mousePosition.x * 15,
        }}
        transition={{ type: "spring", damping: 15 }}
      >
        {/* Cosmic gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center overflow-hidden`}>
          {/* Star field background */}
          <div className="absolute inset-0">
            {previewStars.map((star, i) => (
              <Star
                key={i}
                top={`${star.top}%`}
                left={`${star.left}%`}
                delay={star.delay}
                size={star.size}
                color={star.color}
              />
            ))}
          </div>
          
          {/* Central cosmic icon */}
          <motion.div
            className="text-8xl"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: service.orbitSpeed || 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {service.icon}
          </motion.div>
          
          {/* Orbital rings */}
          {[1, 2, 3].map((_, i) => (
            <OrbitalPath 
              key={`orbit-${i}`} 
              radius={60 + i * 30} 
              opacity={0.2 - i * 0.05} 
              duration={(service.orbitSpeed || 20) + i * 5}
            />
          ))}
          
          {/* Cosmic dust particles */}
          {previewParticles.map((particle, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white/80"
              style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
              }}
              animate={{
                y: [0, particle.y],
                x: [0, particle.x],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatDelay: particle.repeatDelay,
              }}
            />
          ))}
        </div>
        
        {/* Service title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
        </div>
      </motion.div>
    </div>
  );
};

function generatePreviewStars(count: number, getRandom: () => number) {
  return Array.from({ length: count }).map(() => ({
    top: getRandom() * 100,
    left: getRandom() * 100,
    delay: getRandom() * 5,
    size: getRandom() * 2 + 1,
    color: getRandom() > 0.7 ? "bg-white" : "bg-white/70",
  }));
}

function generatePreviewParticles(count: number, getRandom: () => number) {
  return Array.from({ length: count }).map(() => ({
    top: getRandom() * 100,
    left: getRandom() * 100,
    y: getRandom() > 0.5 ? -40 : 40,
    x: getRandom() > 0.5 ? -40 : 40,
    duration: getRandom() * 3 + 2,
    repeatDelay: getRandom() * 2,
  }));
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track mouse position for parallax effect
  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };
    
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [bgStars, setBgStars] = useState<any[]>([]);
  const [bgParticles, setBgParticles] = useState<any[]>([]);
  const [sectionStars, setSectionStars] = useState<any[]>([]);
  useEffect(() => {
    const seededRandom = createSeededRandom(42);
    setBgStars(generateStarsData(40, (i) => seededRandom() > 0.8 ? "bg-indigo-300" : "bg-white/50"));
    setBgParticles(generateParticlesData(12, seededRandom));
    setSectionStars(generateStarsData(30, (i) => seededRandom() > 0.8 ? "bg-indigo-300" : "bg-white/50"));
  }, []);

  return (
    <section 
      className="relative overflow-hidden py-24 lg:py-32" 
      id="services" 
      ref={(el) => {
        if (el) {
          // @ts-ignore - combine refs
          ref(el);
          sectionRef.current = el;
        }
      }}
    >
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b20] via-[#0d0a25] to-[#1a0e35] z-0">
        {/* Star field background */}
        <div className="absolute inset-0">
          {bgStars.map((star, i) => (
            <Star
              key={i}
              top={`${star.top}%`}
              left={`${star.left}%`}
              delay={star.delay}
              size={star.size}
              color={star.color}
            />
          ))}
        </div>
        
        {/* Cosmic nebulae */}
        <motion.div 
          className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-indigo-500/10 blur-[100px] opacity-40"
          animate={{
            x: mousePosition.x ? mousePosition.x * 0.01 : 0,
            y: mousePosition.y ? mousePosition.y * 0.01 : 0,
          }}
          transition={{ type: 'spring', damping: 50 }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-purple-500/10 blur-[100px] opacity-30"
          animate={{
            x: mousePosition.x ? -mousePosition.x * 0.005 : 0,
            y: mousePosition.y ? -mousePosition.y * 0.005 : 0,
          }}
          transition={{ type: 'spring', damping: 50 }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-24">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-indigo-400 border border-indigo-500/20 font-medium text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></div>
              Our Expertise
            </div>
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Interstellar Solutions</span> for Digital Voyagers
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Navigating the digital cosmos with cutting-edge technologies to create scalable, secure, and 
            extraordinary experiences that propel your business beyond the known universe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Services Grid (Left side) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <CosmicServiceCard 
                key={service.id}
                service={service}
                isActive={activeService === service.id}
                onClick={() => setActiveService(service.id)}
                delay={index * 0.1}
                index={index}
                mousePosition={mousePosition}
              />
            ))}
          </div>
          
          {/* Active Service Details (Right side) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              {services.map(service => (
                activeService === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden border border-white/10 relative"
                  >
                    {/* Cosmic service preview */}
                    <CosmicServicePreview service={service} isActive={activeService === service.id} />
                    
                    <div className="p-8 relative">
                      {/* Background cosmos effect */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {sectionStars.map((star, i) => (
                          <Star
                            key={i}
                            top={`${star.top}%`}
                            left={`${star.left}%`}
                            delay={star.delay}
                            size={star.size}
                            color={star.color}
                          />
                        ))}
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${service.gradient}`}>
                            <span>{service.icon}</span>
                          </div>
                          <h3 className="ml-4 text-2xl font-bold text-white">{service.title}</h3>
                        </div>
                        
                        <p className="text-gray-300 mb-8">{service.description}</p>
                        
                        <h4 className="font-bold text-white mb-4">Cosmic Capabilities</h4>
                        <CosmicFeatureList features={service.features} />
                        
                        <motion.div 
                          className="mt-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Link 
                            href={`/services/${service.id}`} 
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex items-center justify-center w-full md:w-auto hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden group"
                          >
                            <span className="relative z-10 flex items-center">
                              <span>Explore {service.title}</span>
                              <motion.span 
                                className="ml-2"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >→</motion.span>
                            </span>
                            
                            {/* Button animation */}
                            <motion.div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              animate={{ 
                                background: [
                                  'linear-gradient(90deg, rgba(99, 102, 241, 0) 0%, rgba(109, 40, 217, 0.3) 50%, rgba(99, 102, 241, 0) 100%)',
                                  'linear-gradient(90deg, rgba(99, 102, 241, 0) 100%, rgba(109, 40, 217, 0.3) 50%, rgba(99, 102, 241, 0) 0%)'
                                ],
                                backgroundSize: ['200% 100%', '200% 100%'],
                                backgroundPosition: ['0% center', '200% center']
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Cosmic divider */}
        <div className="relative h-px w-full my-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
          <motion.div 
            className="absolute inset-0 h-px w-1/3 bg-indigo-400"
            animate={{ 
              x: ["0%", "300%"],
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: 3, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
        
        {/* Testimonial/Stats Section with cosmic design */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-gray-900/40 to-indigo-900/10 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Cosmic background effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl backdrop-filter-blur-3xl"></div>
          
          {/* Star field */}
          <div className="absolute inset-0 overflow-hidden">
            {sectionStars.map((star, i) => (
              <Star
                key={i}
                top={`${star.top}%`}
                left={`${star.left}%`}
                delay={star.delay}
                size={star.size}
                color={star.color}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Why Clients Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">ALIATISH</span></h3>
              <p className="text-gray-300 mb-8">
                Our commitment to excellence and innovation has made us the trusted partner for enterprises 
                seeking transformative digital solutions with measurable business impact.
              </p>
              
              {/* Animated satisfaction score */}
              <div className="flex items-center">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="rgba(255, 255, 255, 0.1)" 
                      strokeWidth="8"
                    />
                    <motion.circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="url(#circleGradient)" 
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      animate={{ strokeDashoffset: 283 * (1 - 0.98) }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    />
                    <defs>
                      <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    <text 
                      x="50" y="55" 
                      textAnchor="middle" 
                      fontSize="24" 
                      fontWeight="bold"
                      fill="white"
                    >
                      98%
                    </text>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Client Satisfaction</h4>
                  <p className="text-sm text-gray-400">Based on post-project surveys</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <motion.div 
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    250+
                  </motion.div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div>
                  <motion.div 
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    40+
                  </motion.div>
                  <div className="text-sm text-gray-400">Enterprise Clients</div>
                </div>
                <div>
                  <motion.div 
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    12+
                  </motion.div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <motion.div 
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    15M+
                  </motion.div>
                  <div className="text-sm text-gray-400">Users Served</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 