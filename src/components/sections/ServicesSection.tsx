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
  image: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Enterprise Web Applications",
    description: "Custom enterprise-grade applications with robust architecture, seamless integrations, and uncompromising security.",
    icon: "💼",
    color: "from-blue-500/20 to-indigo-500/20",
    image: "/images/services/enterprise-web.jpg",
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
    icon: "🛒",
    color: "from-emerald-500/20 to-teal-500/20",
    image: "/images/services/ecommerce.jpg",
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
    icon: "📊",
    color: "from-purple-500/20 to-violet-500/20",
    image: "/images/services/bi-dashboard.jpg",
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
    icon: "🔄",
    color: "from-amber-500/20 to-orange-500/20",
    image: "/images/services/api-integration.jpg",
    features: [
      "RESTful & GraphQL Architecture",
      "Microservices Implementation",
      "Third-party System Integration",
      "Comprehensive Documentation",
      "Advanced Rate Limiting & Security"
    ]
  }
];

// Interactive service card with hover animations
const ServiceCard = ({ service, isActive, onClick, delay = 0 }: 
  { service: Service; isActive: boolean; onClick: () => void; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + delay }}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
        isActive 
          ? 'border-primary/30 shadow-lg shadow-primary/5 bg-gradient-to-br bg-white' 
          : 'border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm'
      }`}
      onClick={onClick}
    >
      <div className="p-6 relative z-10">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${service.color}`}>
            {service.icon}
          </div>
          <h3 className="ml-4 text-xl font-bold">{service.title}</h3>
        </div>
        
        <p className={`text-sm ${isActive ? 'text-neutral/90' : 'text-neutral/60'} transition-colors duration-300`}>
          {service.description}
        </p>
        
        <div className={`mt-4 flex items-center font-medium text-sm ${isActive ? 'text-primary' : 'text-neutral/50'}`}>
          <span>Learn more</span>
          <motion.span 
            className="ml-2"
            animate={{ x: isActive ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >→</motion.span>
        </div>
      </div>
      
      {/* Gradient overlay on hover */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${service.color} mix-blend-overlay`}
      ></div>
    </motion.div>
  );
};

// Animated feature list with staggered animations
const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <motion.ul className="space-y-3 mt-6">
      {features.map((feature, index) => (
        <motion.li 
          key={index} 
          className="flex items-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 * index }}
        >
          <div className="mr-3 mt-1 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span>{feature}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

// Animated section divider
const SectionDivider = () => (
  <div className="relative h-px w-full my-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    <motion.div 
      className="absolute inset-0 h-px w-1/3 bg-primary"
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
);

// 3D rotating service preview
const ServicePreview3D = ({ service, isActive }: { service: Service; isActive: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-80 rounded-2xl overflow-hidden relative perspective"
    >
      <motion.div 
        className="w-full h-full relative"
        animate={{ 
          rotateX: mousePosition.y * -10,
          rotateY: mousePosition.x * 10,
        }}
        transition={{ type: "spring", damping: 15 }}
      >
        {/* Placeholder for service image */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
          <span className="text-6xl">{service.icon}</span>
        </div>
        
        {/* Service title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
        </div>
        
        {/* Reflective surface */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      </motion.div>
    </div>
  );
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(1);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" id="services" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-[0.07]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 mix-blend-multiply blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent-purple/10 mix-blend-multiply blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center mb-24">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Expertise
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Innovative Solutions</span> for Digital Excellence
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-neutral/70"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leveraging cutting-edge technologies to create scalable, secure, and exceptional digital experiences 
            that transform businesses and drive measurable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Services Grid (Left side) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                service={service}
                isActive={activeService === service.id}
                onClick={() => setActiveService(service.id)}
                delay={index * 0.1}
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
                    className="bg-white shadow-xl rounded-2xl overflow-hidden border border-neutral-light/20"
                  >
                    {/* 3D Preview */}
                    <ServicePreview3D service={service} isActive={activeService === service.id} />
                    
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${service.color}`}>
                          {service.icon}
                        </div>
                        <h3 className="ml-4 text-2xl font-bold">{service.title}</h3>
                      </div>
                      
                      <p className="text-neutral/70 mb-8">{service.description}</p>
                      
                      <h4 className="font-bold mb-4">Key Capabilities</h4>
                      <FeatureList features={service.features} />
                      
                      <motion.div 
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Link href={`/services/${service.id}`} className="btn-primary text-sm">
                          <span className="inline-flex items-center">
                            Explore {service.title}
                            <span className="ml-2">→</span>
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        <SectionDivider />
        
        {/* Testimonial/Stats Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-neutral/5 to-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Clients Choose ALIATISH</h3>
              <p className="text-neutral/70 mb-8">
                Our commitment to excellence and innovation has made us the trusted partner for enterprises 
                seeking transformative digital solutions with measurable business impact.
              </p>
              
              {/* Animated satisfaction score */}
              <div className="flex items-center">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="rgba(var(--neutral-light), 0.2)" 
                      strokeWidth="8"
                    />
                    <motion.circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="rgba(var(--primary), 1)" 
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      animate={{ strokeDashoffset: 283 * (1 - 0.98) }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    />
                    <text 
                      x="50" y="55" 
                      textAnchor="middle" 
                      fontSize="24" 
                      fontWeight="bold"
                      fill="currentColor"
                    >
                      98%
                    </text>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Client Satisfaction</h4>
                  <p className="text-sm text-neutral/60">Based on post-project surveys</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <motion.div 
                    className="text-4xl font-bold gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    250+
                  </motion.div>
                  <div className="text-sm text-neutral/60">Projects Delivered</div>
                </div>
                <div>
                  <motion.div 
                    className="text-4xl font-bold gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    40+
                  </motion.div>
                  <div className="text-sm text-neutral/60">Enterprise Clients</div>
                </div>
                <div>
                  <motion.div 
                    className="text-4xl font-bold gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    12+
                  </motion.div>
                  <div className="text-sm text-neutral/60">Years Experience</div>
                </div>
                <div>
                  <motion.div 
                    className="text-4xl font-bold gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    15M+
                  </motion.div>
                  <div className="text-sm text-neutral/60">Users Served</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 