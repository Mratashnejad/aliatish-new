'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animated cosmic star component
const CosmicStar = ({ delay = 0, size = 2, top, left, color = "white" }: 
  { delay?: number; size?: number; top: string; left: string; color?: string }) => (
  <motion.div
    className={`absolute rounded-full bg-${color}`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      top,
      left,
    }}
    animate={{
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      repeatType: 'reverse',
      delay,
    }}
  />
);

// Cosmic trail component
const CosmicTrail = ({ className }: { className?: string }) => (
  <div className={`absolute opacity-20 ${className}`}>
    {[...Array(20)].map((_, i) => (
      <CosmicStar
        key={i}
        top={`${Math.random() * 100}%`}
        left={`${Math.random() * 100}%`}
        delay={Math.random() * 5}
        size={Math.random() * 2 + 1}
        color={Math.random() > 0.7 ? "purple-400" : "white"}
      />
    ))}
  </div>
);

// Newsletter subscription form with cosmic animation
const CosmicNewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate email
    if (email && /\S+@\S+\.\S+/.test(email)) {
      console.log('Submitted email:', email);
      setSubmitted(true);
      setEmail('');
      
      // Create cosmic animation on submit
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        const particles = 20;
        
        // Create particle explosion
        for (let i = 0; i < particles; i++) {
          const particle = document.createElement('div');
          particle.className = 'absolute rounded-full bg-purple-500';
          particle.style.width = `${Math.random() * 3 + 2}px`;
          particle.style.height = `${Math.random() * 3 + 2}px`;
          particle.style.position = 'absolute';
          particle.style.top = `${rect.height / 2}px`;
          particle.style.left = `${rect.width / 2}px`;
          particle.style.transform = 'translate(-50%, -50%)';
          particle.style.zIndex = '10';
          
          formRef.current.appendChild(particle);
          
          // Animate particle
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 100 + 50;
          const duration = Math.random() * 1000 + 500;
          
          // Animation
          particle.animate(
            [
              { opacity: 1, transform: 'translate(-50%, -50%)' },
              { 
                opacity: 0, 
                transform: `translate(
                  calc(-50% + ${Math.cos(angle) * distance}px), 
                  calc(-50% + ${Math.sin(angle) * distance}px)
                )` 
              }
            ],
            { 
              duration,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
              fill: 'forwards'
            }
          ).onfinish = () => {
            if (formRef.current && formRef.current.contains(particle)) {
              formRef.current.removeChild(particle);
            }
          };
        }
      }
    } else if (inputRef.current) {
      // Add shake animation for invalid email
      inputRef.current.classList.add('shake');
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.classList.remove('shake');
        }
      }, 600);
    }
  };

  return (
    <div className="mt-8 relative">
      {submitted ? (
        <motion.div 
          className="p-4 rounded-lg bg-gradient-to-r from-purple-800/30 to-indigo-800/30 border border-purple-500/30 backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-purple-500"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.3,
                }}
                animate={{
                  y: [0, -20],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          <motion.p 
            className="text-sm text-indigo-300 relative z-10"
            animate={{ 
              color: ['rgb(165, 180, 252)', 'rgb(139, 92, 246)', 'rgb(165, 180, 252)'] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Thank you for joining our cosmic journey! ✨
          </motion.p>
        </motion.div>
      ) : (
        <form 
          ref={formRef}
          onSubmit={handleSubmit} 
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-50 group-hover:opacity-70 blur transition duration-300"></div>
          <div className="relative flex bg-gray-900 rounded-lg">
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-l-lg bg-gray-900 border-0 outline-none transition-all text-sm text-white placeholder-gray-400"
              required
            />
            <motion.button
              type="submit"
              className="px-4 rounded-r-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-indigo-500/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm font-medium">Subscribe</span>
            </motion.button>
          </div>
          
          {/* Cosmic input field animation */}
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
            initial={{ width: '0%' }}
            animate={{ width: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          />
        </form>
      )}
    </div>
  );
};

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Applications', href: '/services#web-applications' },
      { label: 'E-commerce', href: '/services#e-commerce' },
      { label: 'Business Intelligence', href: '/services#business-intelligence' },
      { label: 'API Development', href: '/services#api-development' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Documentation', href: '/docs' },
      { label: 'FAQ', href: '/faq' }
    ]
  }
];

export default function Footer() {
  // Starfield ref for interactivity
  const starfieldRef = useRef<HTMLDivElement>(null);
  
  // Follow mouse effect for stars
  useEffect(() => {
    if (!starfieldRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const stars = starfieldRef.current?.querySelectorAll('.interactive-star');
      if (!stars || !starfieldRef.current) return;
      
      const rect = starfieldRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      stars.forEach((star, index) => {
        const starElem = star as HTMLElement;
        const speed = index % 5 === 0 ? 0.05 : 0.03;
        const x = (mouseX - rect.width / 2) * speed;
        const y = (mouseY - rect.height / 2) * speed;
        
        starElem.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    const starfieldElem = starfieldRef.current;
    starfieldElem.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      starfieldElem.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <footer className="relative overflow-hidden">
      {/* Cosmic background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a25] to-[#080b20]"></div>
      
      {/* Animated starfield that reacts to mouse movement */}
      <div 
        ref={starfieldRef}
        className="absolute inset-0 z-0"
      >
        {/* Main star field - static */}
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 10 === 0 ? 'bg-indigo-300' : i % 15 === 0 ? 'bg-purple-300' : 'bg-white'
            } ${i % 8 === 0 ? 'interactive-star' : ''}`}
            style={{
              width: `${Math.max(1, Math.random() * 2)}px`,
              height: `${Math.max(1, Math.random() * 2)}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.1,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Cosmic dust and nebula effects */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-purple-800/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-indigo-800/10 blur-3xl"></div>
        
        {/* Shooting stars animation */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute h-px bg-white"
            style={{
              width: `${Math.random() * 40 + 40}px`,
              top: `${Math.random() * 70}%`,
              left: '-40px',
              rotate: `${Math.random() * 20 + 15}deg`,
            }}
            animate={{
              left: ['0%', '120%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 15 + 10,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Content with cosmic design */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Company info with cosmic design */}
          <div className="relative">
            <Link href="/" className="inline-block mb-6 relative group">
              <div className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-lg transition-opacity duration-500"></div>
              <div className="relative flex items-center">
                <motion.div 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mr-2 flex items-center justify-center"
                  animate={{ 
                    boxShadow: ['0 0 0px rgba(139, 92, 246, 0.3)', '0 0 20px rgba(139, 92, 246, 0.7)', '0 0 0px rgba(139, 92, 246, 0.3)'] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 via-violet-800 to-purple-900"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
                <span className="font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">ALIA</span>
              </div>
            </Link>
            
            <motion.p 
              className="text-gray-400 mb-6 text-sm relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Specialized enterprise web development agency with 10+ years of experience 
              creating high-performance digital solutions for forward-thinking businesses.
            </motion.p>
            
            <div className="space-y-3 text-sm text-gray-400">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mr-3 text-indigo-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>San Francisco, CA</span>
                {/* Subtle pulse animation */}
                <div className="ml-2 w-1 h-1 rounded-full bg-indigo-400 animate-pulse"></div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mr-3 text-indigo-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 6L12 13L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="relative group">
                  <span className="group-hover:text-indigo-400 transition-colors">contact@aliatish.com</span>
                  {/* Email sparkle animation on hover */}
                  <motion.span 
                    className="absolute -top-1 -right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ rotate: [0, 20, 0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                </span>
              </motion.div>
            </div>
            
            {/* Cosmic newsletter subscription */}
            <CosmicNewsletterForm />
            
            {/* Star trail for separation */}
            <div className="absolute -right-4 top-1/4 bottom-0 w-px">
              <motion.div 
                className="h-full w-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>
          
          {/* Links grid with cosmic styling */}
          {footerLinks.map((column, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <motion.li 
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * j + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-indigo-400 transition-colors text-sm group flex items-center"
                    >
                      <motion.span 
                        className="inline-block w-1 h-1 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              {/* Vertical cosmic dust trail for separation */}
              {i < footerLinks.length - 1 && (
                <div className="absolute -right-4 top-0 bottom-0 w-px hidden lg:block">
                  <motion.div 
                    className="h-full w-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Floating dust particles */}
                  {[...Array(3)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute w-1 h-1 rounded-full bg-indigo-500/40"
                      style={{ left: 0 }}
                      animate={{ 
                        top: ['0%', '100%'],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{
                        duration: 5 + idx * 2,
                        repeat: Infinity,
                        delay: idx * 2,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Cosmic divider */}
        <div className="relative h-px w-full my-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
          
          {/* Shooting stars along divider */}
          <motion.div 
            className="absolute inset-y-0 w-24 h-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
            animate={{ 
              left: ['-10%', '110%'],
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: 3, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatDelay: 5
            }}
          />
          
          <motion.div 
            className="absolute inset-y-0 w-12 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            animate={{ 
              left: ['-10%', '110%'],
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: 2.5, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatDelay: 7,
              delay: 2
            }}
          />
        </div>
        
        {/* Cosmic bottom footer */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center relative z-10">
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="opacity-80">© {new Date().getFullYear()}</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500 font-medium">
              ALIATISH
            </span>
            <span className="opacity-80">. All rights reserved.</span>
          </motion.p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social media links with cosmic animation */}
            {[
              { icon: "github", href: "#" },
              { icon: "twitter", href: "#" },
              { icon: "linkedin", href: "#" },
              { icon: "instagram", href: "#" }
            ].map((social, i) => (
              <motion.a 
                key={social.icon}
                href={social.href}
                className="text-gray-400 hover:text-indigo-400 transition-all relative group"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="sr-only">{social.icon}</span>
                <div className="w-5 h-5 relative">
                  {/* Social icon placeholder */}
                  <div className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-indigo-500/20 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {social.icon.charAt(0).toUpperCase()}
                  </div>
                </div>
                
                {/* Cosmic glow on hover */}
                <motion.div 
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
                  }}
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            ))}
            
            {/* Policy links with cosmic style */}
            <div className="border-l border-gray-800 h-4 mx-2 hidden md:block"></div>
            
            {["Privacy", "Terms"].map((policy, i) => (
              <motion.a 
                key={policy}
                href="#" 
                className="text-gray-400 hover:text-indigo-400 transition-colors text-sm relative group hidden md:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
              >
                {policy}
                <motion.div 
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-indigo-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Cosmic horizon glow at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#10002B]/30 to-transparent overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-indigo-800/30"></div>
        
        {/* Black hole effect at the very bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 rounded-full bg-black/80 blur-3xl opacity-30"></div>
      </div>
    </footer>
  );
}