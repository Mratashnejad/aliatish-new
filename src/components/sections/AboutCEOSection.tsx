'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView as useFramerInView } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type Skill = {
  name: string;
  level: number;
  color: string;
  category: 'frontend' | 'backend' | 'devops' | 'database';
  icon?: string;
  orbitalSpeed?: number;
};

type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  color: string;
};

// Skill data with cosmic properties
const skills: Skill[] = [
  { 
    name: 'React / Next.js', 
    level: 95, 
    color: 'from-cyan-500 to-blue-500',
    category: 'frontend',
    orbitalSpeed: 8
  },
  { 
    name: 'TypeScript / JavaScript', 
    level: 90, 
    color: 'from-blue-500 to-indigo-600',
    category: 'frontend',
    orbitalSpeed: 12
  },
  { 
    name: 'Node.js / Express', 
    level: 88, 
    color: 'from-green-500 to-emerald-600',
    category: 'backend',
    orbitalSpeed: 15
  },
  { 
    name: 'GraphQL / REST APIs', 
    level: 85, 
    color: 'from-pink-500 to-rose-600',
    category: 'backend',
    orbitalSpeed: 18
  },
  { 
    name: 'PostgreSQL / Redis', 
    level: 82, 
    color: 'from-indigo-500 to-purple-600',
    category: 'database',
    orbitalSpeed: 20
  },
  { 
    name: 'Docker / DevOps', 
    level: 75, 
    color: 'from-blue-600 to-sky-600',
    category: 'devops',
    orbitalSpeed: 25
  },
];

// Experience with cosmic theme colors
const experiences: Experience[] = [
  {
    year: '2023 - Present',
    title: 'Founder & CEO',
    company: 'ALIATISH',
    description: 'Leading a web development agency focused on creating cutting-edge digital experiences for clients around the world.',
    color: 'from-violet-600 to-indigo-600',
  },
  {
    year: '2020 - 2023',
    title: 'Senior Full-stack Developer',
    company: 'TechCorp Inc.',
    description: 'Led development of enterprise-scale web applications using React, Node.js, and cloud technologies.',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    year: '2017 - 2020',
    title: 'Full-stack Developer',
    company: 'WebSolutions LLC',
    description: 'Designed and built responsive websites and applications for various clients across industries.',
    color: 'from-cyan-600 to-teal-600',
  },
  {
    year: '2013 - 2017',
    title: 'Frontend Developer',
    company: 'DigitalAgency Co.',
    description: 'Specialized in creating interactive user interfaces and responsive designs for client websites.',
    color: 'from-teal-600 to-green-600',
  },
];

// StarField component
const StarField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 100 }).map((_, i) => {
        const size = Math.random() * 2;
        const opacity = Math.random() * 0.7 + 0.1;
        const animationDuration = Math.random() * 5 + 3;
        const color = 
          i % 10 === 0 ? "bg-blue-300" : 
          i % 7 === 0 ? "bg-purple-300" : 
          i % 5 === 0 ? "bg-indigo-300" : 
          "bg-white";
        
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${color}`}
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity,
            }}
            animate={{
              opacity: [opacity, opacity * 0.3, opacity],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

// Orbiting skill component
const OrbitingSkill = ({ skill, index, containerRef }: { 
  skill: Skill; 
  index: number; 
  containerRef: React.RefObject<HTMLDivElement>; 
}) => {
  const skillRef = useRef<HTMLDivElement>(null);
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });
  const orbitRadius = 120 + (index * 15); // Different orbit for each skill
  const orbitSpeed = skill.orbitalSpeed || 20; // Seconds per revolution
  const startAngle = (index * 60) % 360; // Distribute skills around the orbit
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateCenter = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCenterPos({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    };
    
    updateCenter();
    window.addEventListener('resize', updateCenter);
    return () => window.removeEventListener('resize', updateCenter);
  }, [containerRef]);
  
  useEffect(() => {
    if (!skillRef.current || !containerRef.current) return;
    
    let startTime = Date.now();
    let angle = startAngle;
    let animationId: number;
    
    const animate = () => {
      const now = Date.now();
      const elapsedSeconds = (now - startTime) / 1000;
      angle = startAngle + (elapsedSeconds * (360 / orbitSpeed)) % 360;
      
      if (skillRef.current) {
        const radian = angle * (Math.PI / 180);
        const x = centerPos.x + Math.cos(radian) * orbitRadius;
        const y = centerPos.y + Math.sin(radian) * orbitRadius;
        
        skillRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationId);
  }, [centerPos, orbitRadius, orbitSpeed, startAngle]);
  
  return (
    <motion.div
      ref={skillRef}
      className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} shadow-lg flex items-center justify-center cursor-pointer z-10`}
        whileHover={{ scale: 1.1 }}
        style={{
          boxShadow: `0 0 15px 2px rgba(var(--color-primary-rgb), 0.3)`,
        }}
      >
        <div className="text-white text-xs font-semibold text-center">{skill.name.split(' ')[0]}</div>
        
        {/* Hover tooltip */}
        <motion.div
          className="absolute top-full mt-2 bg-gray-900/90 backdrop-blur-sm text-white text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, y: -5 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {skill.name}
          <div className="flex mt-1">
            <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} 
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <span className="ml-1.5">{skill.level}%</span>
          </div>
        </motion.div>
        
        {/* Orbit trail */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-full h-full -z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: orbitSpeed, repeat: Infinity, ease: "linear" }}
        >
          <div 
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b ${skill.color} opacity-60 rounded-full`}
            style={{ filter: 'blur(1px)' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function AboutCEOSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  
  // Cosmos animation refs
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

  return (
    <section id="about-ceo" className="py-20 relative overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b20] via-[#0d0a25] to-[#1a0e35] z-0">
        {/* Starfield */}
        <StarField />
        
        {/* Nebulae */}
        <div 
          ref={nebula1Ref}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-[100px] opacity-40"
        />
        <div 
          ref={nebula2Ref}
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-900/10 blur-[100px] opacity-30"
        />
        
        {/* Cosmic dust */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/20 rounded-full blur-sm"
              style={{
                width: Math.random() * 80 + 20,
                height: Math.random() * 80 + 20,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.1,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
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
          
          {/* Profile and Skills Solar System */}
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
                    <div className="absolute -left-3 -top-3 text-4xl text-indigo-500 opacity-50">"</div>
                    <blockquote className="pl-6 italic text-indigo-200 border-l-2 border-indigo-500/50">
                      The digital universe is ever-expanding. Our mission is to help you navigate its 
                      infinite possibilities and create experiences that shine brighter than the rest.
                    </blockquote>
                    <div className="absolute -right-3 -bottom-3 text-4xl text-indigo-500 opacity-50">"</div>
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
            
            {/* Right side - Skills Solar System */}
            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div ref={skillsContainerRef} className="absolute inset-0 flex items-center justify-center">
                {/* Central Sun */}
                <motion.div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 z-20"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px 5px rgba(253, 224, 71, 0.3)',
                      '0 0 30px 10px rgba(253, 224, 71, 0.4)',
                      '0 0 20px 5px rgba(253, 224, 71, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="absolute inset-0 rounded-full flex items-center justify-center text-white font-bold">
                    <motion.div
                      className="flex flex-col items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-lg">10+</span>
                      <span className="text-xs">YEARS</span>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Orbital paths */}
                {[0, 1, 2, 3, 4, 5].map((_, i) => (
                  <motion.div
                    key={`orbit-${i}`}
                    className="absolute top-1/2 left-1/2 border border-white/5 rounded-full"
                    style={{
                      width: (120 + i * 15) * 2,
                      height: (120 + i * 15) * 2,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  />
                ))}
                
                {/* Orbiting Skills */}
                {skills.map((skill, i) => (
                  <OrbitingSkill 
                    key={skill.name} 
                    skill={skill} 
                    index={i} 
                    containerRef={skillsContainerRef} 
                  />
                ))}
              </div>
              
              {/* Title for the solar system */}
              <motion.div 
                className="absolute bottom-4 inset-x-0 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-1">Technical Expertise</h3>
                <p className="text-sm text-gray-400">My skill constellation, orbiting around years of experience</p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Journey Timeline - Cosmic Path */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
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
                    'linear-gradient(to bottom, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2))',
                    'linear-gradient(to bottom, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.4))',
                    'linear-gradient(to bottom, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2))'
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              
              {/* Timeline events */}
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className={`mb-16 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
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
                      index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                    }`}
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                    style={{
                      background: 'rgba(15, 23, 42, 0.5)',
                    }}
                  >
                    {/* Connector line */}
                    <div 
                      className={`absolute top-1/2 ${index % 2 === 0 ? '-right-12' : '-left-12'} w-12 h-px bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} ${exp.color}`} 
                    />
                    
                    {/* Content */}
                    <div className="mb-2 flex items-center space-x-2">
                      <div className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>{exp.year}</div>
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
                          `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)`
                        ]
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
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%)',
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Cosmic dust particles */}
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-indigo-500"
                  style={{
                    width: Math.random() * 2 + 1,
                    height: Math.random() * 2 + 1,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.3 + 0.1,
                  }}
                  animate={{
                    y: [0, Math.random() > 0.5 ? -20 : 20],
                    x: [0, Math.random() > 0.5 ? -20 : 20],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
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
                Let's collaborate to create digital experiences that are truly out of this world. 
                My expertise is your launchpad to success.
              </p>
              
              <motion.button
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">
                  <span>Start A Project</span>
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >→</motion.span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 