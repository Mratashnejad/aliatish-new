'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the form validation schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

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

// Animated meteor component
const Meteor = ({ delay = 0 }: { delay?: number }) => {
  const angle = Math.random() * 30 - 15; // -15 to 15 degrees
  
  return (
    <motion.div
      className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent z-0"
      style={{
        width: Math.random() * 100 + 50,
        top: `${Math.random() * 50}%`,
        left: '-100px',
        rotate: `${angle}deg`,
        transformOrigin: 'center',
        opacity: 0,
      }}
      animate={{
        left: ['0%', '120%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 1.5 + 0.5,
        repeat: Infinity,
        repeatDelay: Math.random() * 20 + delay,
      }}
    />
  );
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  // Mouse parallax effect for background elements
  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (!sectionRef.current) return;
      
  //     const rect = sectionRef.current.getBoundingClientRect();
  //     const x = e.clientX - rect.left;
  //     const y = e.clientY - rect.top;
      
  //     setMousePosition({ x, y });
  //   };
    
  //   const section = sectionRef.current;
  //   if (section) {
  //     section.addEventListener('mousemove', handleMouseMove);
  //     return () => section.removeEventListener('mousemove', handleMouseMove);
  //   }
  // }, []);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // In a real implementation, you would send this data to an API
    // For now, we'll simulate a successful submission after a short delay
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
      borderColor: 'rgba(139, 92, 246, 0.5)',
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b20] via-[#0d0a25] to-[#1a0e35] z-0">
        {/* Starfield */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 100 }).map((_, i) => {
            const size = Math.random() * 2;
            const color = i % 10 === 0 ? "indigo-300" : i % 8 === 0 ? "purple-300" : "white";
            
            return (
              <CosmicStar
                key={i}
                top={`${Math.random() * 100}%`}
                left={`${Math.random() * 100}%`}
                delay={Math.random() * 5}
                size={size}
                color={color}
              />
            );
          })}
        </div>
        
        {/* Cosmic nebulae */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-900/10 blur-[100px] opacity-40"
          animate={{
            x: mousePosition.x ? mousePosition.x * 0.02 : 0,
            y: mousePosition.y ? mousePosition.y * 0.02 : 0,
          }}
          transition={{ type: 'spring', damping: 20 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-[100px] opacity-30"
          animate={{
            x: mousePosition.x ? -mousePosition.x * 0.01 : 0,
            y: mousePosition.y ? -mousePosition.y * 0.01 : 0,
          }}
          transition={{ type: 'spring', damping: 20 }}
        />
        
        {/* Meteor shower */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Meteor key={i} delay={i * 2} />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              Contact Us
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-5">
              Let's Explore The <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Galaxy</span> Together
            </h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to launch your next project into orbit? Send us a transmission and let's create something extraordinary.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Panel */}
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
            >
              {/* Info Card with Cosmic Design */}
              <motion.div 
                className="p-8 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/60 to-gray-900/30 h-full relative overflow-hidden"
                whileHover={{ boxShadow: '0 0 30px rgba(139, 92, 246, 0.15)' }}
              >
                {/* Cosmic background effect */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-indigo-500/5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl"></div>
                
                <div className="relative">
                  <motion.h3 
                    className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500"
                    variants={itemVariants}
                  >
                    Interstellar Communications
                  </motion.h3>
                  
                  <div className="space-y-8">
                    {/* Email */}
                    <motion.div 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mr-4 backdrop-blur-sm border border-indigo-500/20">
                        <motion.div
                          animate={{
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-medium mb-1">Email</h4>
                        <motion.p 
                          className="text-gray-400 group flex items-center"
                          whileHover={{ color: '#a5b4fc' }}
                        >
                          contact@aliatish.com
                          <motion.span 
                            className="ml-2"
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            ✨
                          </motion.span>
                        </motion.p>
                      </div>
                    </motion.div>
                    
                    {/* Phone */}
                    <motion.div 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mr-4 backdrop-blur-sm border border-violet-500/20">
                        <motion.div
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                        >
                          <svg className="w-5 h-5 text-violet-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C4.96067 21 4.46752 20.5043 4.46752 20.009C4.46752 19.9679 4.46752 19.9268 4.47165 19.8858C4.48962 19.6233 4.5883 19.3181 4.70777 19.0719C4.93736 18.5798 5.3146 18.0305 5.65147 17.5224L5.68466 17.4664C6.10603 16.8233 6.49306 16.233 6.74002 15.7321C6.99491 15.2118 7.13079 14.7146 7.00363 14.2576C6.76442 13.3978 6.10475 12.7274 5.41585 12.1684C4.73786 11.6159 4.02511 11.1411 3.55427 10.7822C3.31837 10.6044 3.12493 10.4474 2.98606 10.3179C2.91652 10.2531 2.86155 10.1963 2.82212 10.1493C2.8025 10.1259 2.77825 10.0973 2.76382 10.0793L2.75376 10.0667C2.12188 9.24544 2.84452 8.02718 3.8681 8.00017C10.0166 7.87666 15.1398 3.97179 16.6348 3.01654C16.9897 2.78666 17.3331 2.56342 17.6214 2.40103C17.9117 2.23742 18.2769 2.03449 18.6653 2.00114C18.9539 1.9751 19.1992 2.05419 19.3711 2.16168C19.5456 2.27068 19.6698 2.4187 19.7645 2.55354C19.9612 2.83137 20.0724 3.18223 20.1888 3.50355C20.4278 4.16095 20.7328 5.01311 20.8395 5.30902C20.9482 5.61027 21 5.74189 21 5.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-medium mb-1">Phone</h4>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                      </div>
                    </motion.div>
                    
                    {/* Location */}
                    <motion.div 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4 backdrop-blur-sm border border-purple-500/20">
                        <motion.div
                          animate={{
                            y: [0, -3, 0],
                          }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        >
                          <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-medium mb-1">Location</h4>
                        <p className="text-gray-400">San Francisco, CA</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Social Constellations */}
                  <motion.div
                    className="mt-12"
                    variants={itemVariants}
                  >
                    <h4 className="text-white text-lg font-medium mb-4">Find Us In The Social Cosmos</h4>
                    <div className="flex space-x-4">
                      {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social, i) => (
                        <motion.a
                          key={social}
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm hover:bg-indigo-500/20 transition-colors border border-white/10 relative group"
                          whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.4)' }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                        >
                          <span className="text-gray-400 group-hover:text-indigo-300 transition-colors">
                            {social.charAt(0)}
                          </span>
                          
                          {/* Cosmic hover glow */}
                          <motion.div 
                            className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100"
                            style={{ 
                              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
                            }}
                            transition={{ duration: 0.2 }}
                          />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form Panel */}
            <motion.div 
              className="lg:col-span-3 relative"
              variants={containerVariants}
            >
              <motion.div 
                className="p-8 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-gray-900/60 to-gray-900/30 relative overflow-hidden"
                whileHover={{ boxShadow: '0 0 30px rgba(139, 92, 246, 0.15)' }}
              >
                {/* Background cosmic effects */}
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>
                
                {/* Orbital path decoration */}
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-indigo-500/10 pointer-events-none"></div>
                <div className="absolute -bottom-60 -left-60 w-[32rem] h-[32rem] rounded-full border border-indigo-500/5 pointer-events-none"></div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500"
                  variants={itemVariants}
                >
                  Send a Transmission
                </motion.h3>
                
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 relative overflow-hidden"
                  >
                    {/* Success message with cosmic particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-green-400"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -10],
                            opacity: [0.6, 0],
                          }}
                          transition={{
                            duration: Math.random() * 2 + 1,
                            repeat: Infinity,
                            repeatDelay: Math.random(),
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="relative z-10 flex items-center">
                      <motion.div 
                        className="w-5 h-5 rounded-full bg-green-500/30 mr-3 flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg className="w-3 h-3 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                      <span>Transmission received! We'll respond across the cosmos shortly.</span>
                    </div>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name field */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-indigo-300 mb-2 text-sm">
                        Name
                      </label>
                      <motion.div className="relative group">
                        <motion.div 
                          className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"
                        />
                        <motion.input
                          type="text"
                          id="name"
                          className={`w-full px-4 py-3 bg-black/20 backdrop-blur-sm border ${
                            errors.name ? 'border-red-500' : 'border-white/10 group-hover:border-indigo-500/50'
                          } rounded-lg focus:outline-none focus:border-indigo-500/50 transition-colors relative`}
                          placeholder="Your name"
                          whileFocus="focus"
                          variants={inputVariants}
                          {...register('name')}
                        />
                      </motion.div>
                      {errors.name && (
                        <p className="mt-1 text-red-400 text-xs">{errors.name.message}</p>
                      )}
                    </motion.div>
                    
                    {/* Email field */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-indigo-300 mb-2 text-sm">
                        Email
                      </label>
                      <motion.div className="relative group">
                        <motion.div 
                          className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"
                        />
                        <motion.input
                          type="email"
                          id="email"
                          className={`w-full px-4 py-3 bg-black/20 backdrop-blur-sm border ${
                            errors.email ? 'border-red-500' : 'border-white/10 group-hover:border-indigo-500/50'
                          } rounded-lg focus:outline-none focus:border-indigo-500/50 transition-colors relative`}
                          placeholder="Your email"
                          whileFocus="focus"
                          variants={inputVariants}
                          {...register('email')}
                        />
                      </motion.div>
                      {errors.email && (
                        <p className="mt-1 text-red-400 text-xs">{errors.email.message}</p>
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Subject field */}
                  <motion.div className="mb-6" variants={itemVariants}>
                    <label htmlFor="subject" className="block text-indigo-300 mb-2 text-sm">
                      Subject
                    </label>
                    <motion.div className="relative group">
                      <motion.div 
                        className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"
                      />
                      <motion.input
                        type="text"
                        id="subject"
                        className={`w-full px-4 py-3 bg-black/20 backdrop-blur-sm border ${
                          errors.subject ? 'border-red-500' : 'border-white/10 group-hover:border-indigo-500/50'
                        } rounded-lg focus:outline-none focus:border-indigo-500/50 transition-colors relative`}
                        placeholder="What's this about?"
                        whileFocus="focus"
                        variants={inputVariants}
                        {...register('subject')}
                      />
                    </motion.div>
                    {errors.subject && (
                      <p className="mt-1 text-red-400 text-xs">{errors.subject.message}</p>
                    )}
                  </motion.div>
                  
                  {/* Message field */}
                  <motion.div className="mb-6" variants={itemVariants}>
                    <label htmlFor="message" className="block text-indigo-300 mb-2 text-sm">
                      Message
                    </label>
                    <motion.div className="relative group">
                      <motion.div 
                        className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"
                      />
                      <motion.textarea
                        id="message"
                        rows={5}
                        className={`w-full px-4 py-3 bg-black/20 backdrop-blur-sm border ${
                          errors.message ? 'border-red-500' : 'border-white/10 group-hover:border-indigo-500/50'
                        } rounded-lg resize-none focus:outline-none focus:border-indigo-500/50 transition-colors relative`}
                        placeholder="Share your vision with us..."
                        whileFocus="focus"
                        variants={inputVariants}
                        {...register('message')}
                      />
                    </motion.div>
                    {errors.message && (
                      <p className="mt-1 text-red-400 text-xs">{errors.message.message}</p>
                    )}
                  </motion.div>
                  
                  {/* Submit button */}
                  <motion.div 
                    className="text-right"
                    variants={itemVariants}
                  >
                    <motion.button
                      type="submit"
                      className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 relative overflow-hidden"
                      disabled={isSubmitting}
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.4), 0 10px 10px -5px rgba(99, 102, 241, 0.2)' 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Launch Message</span>
                            <motion.span 
                              className="ml-2"
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >→</motion.span>
                          </>
                        )}
                      </span>
                      
                      {/* Button cosmic background animation */}
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-full opacity-20"
                        animate={{ 
                          background: [
                            'linear-gradient(90deg, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0) 100%)',
                            'linear-gradient(90deg, rgba(139, 92, 246, 0) 100%, rgba(139, 92, 246, 0.5) 50%, rgba(139, 92, 246, 0) 0%)'
                          ],
                          backgroundSize: ['200% 100%', '200% 100%'],
                          backgroundPosition: ['0% center', '200% center']
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                      />
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 