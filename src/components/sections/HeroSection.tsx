'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import of 3D components for better performance
const Flame3D = dynamic(() => import('@/components/3d/Flame3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center"><div className="w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div></div>
});

// Glowing orb component
const OrbGlow = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-72 h-72 rounded-full bg-gradient-to-br from-primary/30 via-accent-purple/20 to-accent/10 blur-3xl animate-pulse-slow ${className}`}></div>
);

// Animated text that reveals letter by letter
const AnimatedTextReveal = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.5 + (index * 0.03),
            ease: [0.22, 1, 0.36, 1]  
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

// Tech stack logos with hover effects
const TechBadge = ({ name, icon }: { name: string, icon: string }) => (
  <motion.div 
    className="flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <span className="mr-1.5">{icon}</span>
    {name}
  </motion.div>
);

// Floating tech stack component
const FloatingTechStack = () => {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "𝌏" },
    { name: "Node.js", icon: "🟢" },
    { name: "GraphQL", icon: "◮" },
    { name: "TailwindCSS", icon: "🌊" },
    { name: "Framer Motion", icon: "🎭" },
    
  ];

  return (
    <motion.div 
      className="absolute bottom-[-30px] right-[-20px] flex flex-wrap gap-2 max-w-xs justify-end z-10 origin-bottom-right"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      {techStack.map((tech, index) => (
        <TechBadge 
          key={tech.name} 
          name={tech.name} 
          icon={tech.icon} 
        />
      ))}
    </motion.div>
  );
};

// Marquee animation for client logos
const LogoMarquee = () => {
  const logos = [
    "Microsoft", "Google", "Adobe", "IBM", "Shopify", "Airbnb", "Spotify", "Samsung"
  ];
  
  return (
    <div className="w-full overflow-hidden relative mt-10">
      <div className="relative flex items-center overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="mx-8 text-neutral/40 font-medium text-lg flex items-center"
            >
              <span className="mr-2 w-1.5 h-1.5 rounded-full bg-primary/40"></span>
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Floating device mockups
const DeviceMockups = () => (
  <motion.div 
    className="absolute right-10 top-32 w-[450px] h-[300px] z-10 hidden lg:block perspective"
    initial={{ opacity: 0, y: 60, x: 60 }}
    animate={{ opacity: 1, y: 0, x: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    {/* Laptop mockup with code */}
    <div className="absolute top-0 right-0 w-[380px] h-[240px] rounded-xl bg-neutral p-4 transform rotate-6 translate-z-10 shadow-2xl border border-white/10">
      <div className="bg-primary/5 rounded-lg p-3 h-full overflow-hidden font-mono text-xs">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-danger"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-warning"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-success"></div>
        </div>
        <div className="text-accent-purple">
          <span className="text-primary">const</span> <span className="text-accent">createExperience</span> = <span className="text-accent-alt">(</span>vision<span className="text-accent-alt">)</span> =&gt; {'{'}<br/>
          &nbsp;&nbsp;<span className="text-success">// Premium web solutions</span><br/>
          &nbsp;&nbsp;<span className="text-primary">return</span> {'{'}
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;performance: <span className="text-accent-alt">'lightning-fast'</span>,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;design: <span className="text-accent-alt">'stunning'</span>,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;experience: <span className="text-accent-alt">'seamless'</span><br/>
          &nbsp;&nbsp;{'}'};
          <br/>
          {'}'};
        </div>
      </div>
    </div>
    
    {/* Phone mockup */}
    <div className="absolute bottom-0 left-0 w-[140px] h-[280px] rounded-[24px] bg-gradient-to-br from-neutral to-neutral-light p-2 transform -rotate-12 translate-z-20 shadow-2xl border-4 border-white/10">
      <div className="bg-primary/10 rounded-[18px] h-full w-full overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-[32px] bg-neutral rounded-t-[18px] flex justify-center items-end pb-1">
          <div className="w-20 h-4 bg-neutral-light rounded-full"></div>
        </div>
        <div className="pt-8 px-2 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-primary mb-2"></div>
          <div className="w-full h-2 bg-white/10 rounded-full mb-2"></div>
          <div className="w-3/4 h-2 bg-white/10 rounded-full mb-4"></div>
          <div className="w-full h-20 bg-white/5 rounded-lg mb-2"></div>
          <div className="w-full h-20 bg-white/5 rounded-lg"></div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Modern 3D circular graph
const CircularMetricGraph = () => (
  <motion.div 
    className="absolute left-12 bottom-32 w-64 h-64 z-10 hidden lg:block"
    initial={{ opacity: 0, y: 40, x: -40, rotate: -15 }}
    animate={{ opacity: 1, y: 0, x: 0, rotate: -15 }}
    transition={{ duration: 0.7, delay: 1 }}
  >
    <div className="relative w-full h-full">
      {/* Circle layers */}
      <div className="absolute inset-0 rounded-full border-4 border-neutral-light/20 backdrop-blur-sm"></div>
      <div className="absolute inset-[15px] rounded-full border-4 border-primary/20 backdrop-blur-sm"></div>
      <div className="absolute inset-[30px] rounded-full border-4 border-accent-purple/20 backdrop-blur-sm"></div>
      <div className="absolute inset-[45px] rounded-full border-4 border-accent/20 backdrop-blur-sm"></div>
      
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-4xl font-bold gradient-text">98%</span>
        <span className="text-sm text-neutral/60">Client satisfaction</span>
      </div>
      
      {/* Animated dots on circles */}
      <motion.div 
        className="absolute w-4 h-4 rounded-full bg-primary"
        animate={{ 
          rotate: 360
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ top: '50%', left: '50%', marginLeft: '-2px', marginTop: '-2px', transformOrigin: 'calc(50% + 96px) calc(50%)' }}
      />
      <motion.div 
        className="absolute w-3 h-3 rounded-full bg-accent-purple"
        animate={{ 
          rotate: -360
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ top: '50%', left: '50%', marginLeft: '-1.5px', marginTop: '-1.5px', transformOrigin: 'calc(50% + 64px) calc(50%)' }}
      />
    </div>
  </motion.div>
);

// Main hero component with enhanced design
export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for depth
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -120]);
  const y2 = useTransform(scrollY, [0, 500], [0, -60]);
  const y3 = useTransform(scrollY, [0, 500], [0, -30]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.92]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Animation triggers
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Calculate spotlight position for hero area
  const spotlightX = mousePosition.x;
  const spotlightY = mousePosition.y;
  
  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center relative overflow-hidden pt-32 pb-20"
    >
      {/* Dynamic spotlight gradient */}
      <motion.div 
        className="absolute pointer-events-none inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${spotlightX}px ${spotlightY}px, rgba(var(--primary), 0.2), transparent 60%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />
      
      {/* Background decorative elements */}
      <OrbGlow className="top-20 right-[10%]" />
      <OrbGlow className="bottom-20 left-[5%] bg-gradient-to-tr from-accent-purple/30 via-primary/20 to-accent/5" />
      <div className="absolute inset-0 dot-pattern opacity-[0.08]"></div>
      
      <motion.div style={{ y: y1, scale }} className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Left content (text) */}
          <motion.div 
            ref={ref}
            className="flex-1 pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top badge */}
            <motion.div 
              className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm px-4 py-1.5 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse mr-2"></span>
              <span className="text-primary font-medium">Next Generation Web Solutions</span>
            </motion.div>
            
            {/* Main headline with animated text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-none tracking-tight mb-6">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  Elevate Your
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-purple to-accent"
                >
                  Digital Empire
                </motion.div>
              </div>
            </h1>
            
            {/* Subtitle with animated reveal */}
            <motion.p 
              className="text-xl text-neutral/80 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Crafting visionary digital experiences with cutting-edge technology, premium design, and performance-driven architecture.
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/contact" className="btn-primary group">
                <span className="inline-flex items-center">
                  Transform Your Business
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </motion.div>
            
            {/* Stats with animated counters */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div>
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-neutral/60">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-sm text-neutral/60">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-neutral/60">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content (3D and visuals) */}
          <motion.div 
            className="flex-1 relative"
            style={{ y: y3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[600px] w-full">
              {/* Central 3D flame */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Flame3D className="w-[300px] h-[300px]" autoRotate size={300} />
              </motion.div>
              
              {/* Glowing ring around 3D element */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border-2 border-primary/30 backdrop-blur-sm z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <div className="absolute inset-0 rounded-full border border-white/10"></div>
              </motion.div>
              
              {/* Orbiting small spheres */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-primary z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                style={{ 
                  x: "-50%", 
                  y: "-50%", 
                }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "190px 50%" }}
                >
                  <motion.div 
                    className="absolute w-4 h-4 rounded-full bg-accent"
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-primary z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                style={{ 
                  x: "-50%", 
                  y: "-50%", 
                }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="w-full h-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "220px 50%" }}
                >
                  <motion.div 
                    className="absolute w-6 h-6 rounded-full bg-accent-purple"
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Floating device mockups */}
              <DeviceMockups />
              
              {/* Floating tech stack */}
              <FloatingTechStack />
              
              {/* Metric Graph */}
              <CircularMetricGraph />
            </div>
          </motion.div>
        </div>
        
        {/* Company logos marquee */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center text-xs font-medium text-neutral/40 mb-6 tracking-widest uppercase">
            TRUSTED BY INDUSTRY LEADERS
          </div>
          <LogoMarquee />
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        style={{ opacity }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="text-neutral/40 text-sm mb-2">Scroll to discover</span>
        <motion.div 
          className="w-8 h-12 border-2 border-neutral/20 rounded-full flex justify-center p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      
      {/* Perspective grid effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 perspective overflow-hidden">
        <motion.div 
          className="w-full h-[400px] bg-gradient-to-b from-transparent to-primary/5 grid grid-cols-12 transform rotateX(60deg) scale(1.5) origin-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-t border-primary/10 h-full"></div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 