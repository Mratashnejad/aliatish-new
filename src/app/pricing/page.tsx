'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import Head from 'next/head';

// Pricing plan type
type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceId: string;
  features: string[];
  popular: boolean;
  callToAction: string;
};

// Enterprise feature type
type EnterpriseFeature = {
  icon: string;
  title: string;
  description: string;
};

// FAQ type
type FAQ = {
  question: string;
  answer: string;
};

// Client type
type Star = {
  size: number;
  top: number;
  left: number;
  opacity: number;
  animationDuration: number;
};

// Sample pricing plans
const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses just getting started with their digital presence.',
    price: '$2,500',
    priceId: 'price_starter',
    features: [
      'Basic website (up to 5 pages)',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'Google Analytics integration',
      '1 month of support',
      'Training session (2 hours)',
    ],
    popular: false,
    callToAction: 'Get Started'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses that need more features and customization.',
    price: '$6,500',
    priceId: 'price_professional',
    features: [
      'Premium website (up to 10 pages)',
      'Mobile responsive design',
      'Contact form & newsletter integration',
      'Advanced SEO setup',
      'Google Analytics & Tag Manager',
      'Blog or news section',
      'Social media integration',
      'Custom animations',
      '3 months of support',
      'Training sessions (4 hours)',
    ],
    popular: true,
    callToAction: 'Most Popular'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Comprehensive solution for businesses with complex digital needs.',
    price: 'Custom',
    priceId: 'price_enterprise',
    features: [
      'Custom enterprise solution',
      'Unlimited pages and features',
      'Advanced integrations',
      'Custom functionality',
      'E-commerce capabilities',
      'Advanced security features',
      'Load balancing & scaling',
      'Performance optimization',
      '12 months of priority support',
      'Dedicated account manager',
      'Extended training program',
    ],
    popular: false,
    callToAction: 'Contact Us'
  }
];

// Enterprise features
const enterpriseFeatures: EnterpriseFeature[] = [
  {
    icon: '🔒',
    title: 'Enterprise-grade Security',
    description: 'Advanced security protocols, compliance with industry standards, and regular security audits to protect your data and systems.'
  },
  {
    icon: '⚡',
    title: 'High Performance & Scalability',
    description: 'Optimized infrastructure designed to handle large traffic volumes and scale with your business needs.'
  },
  {
    icon: '🔄',
    title: 'Custom Integrations',
    description: 'Seamless integration with your existing systems, including CRM, ERP, payment gateways, and other business tools.'
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Comprehensive data analysis and reporting tools to help you make informed business decisions.'
  },
  {
    icon: '🛠️',
    title: 'Dedicated Support',
    description: 'Priority support with a dedicated account manager and technical team available to address your needs.'
  },
  {
    icon: '🔍',
    title: 'Tailored Solutions',
    description: 'Customized digital solutions designed specifically for your unique business requirements and challenges.'
  }
];

// FAQs
const faqs: FAQ[] = [
  {
    question: 'How long does it take to complete a project?',
    answer: 'Project timelines vary depending on scope and complexity. Typical Starter projects can be completed in 4-6 weeks, Professional projects in 8-12 weeks, and Enterprise projects are custom scoped based on requirements. We&apos;ll provide a detailed timeline during our initial consultation.'
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes, all our packages include a support period after launch. Starter packages include 1 month, Professional packages include 3 months, and Enterprise packages include 12 months of priority support. We also offer extended support plans for all clients.'
  },
  {
    question: 'Can I upgrade my package later?',
    answer: 'Absolutely! We design our solutions to be scalable and can upgrade your package as your business grows. Well work with you to ensure a smooth transition and minimal disruption to your operations.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit cards, bank transfers, and PayPal. For Enterprise projects, we offer flexible payment schedules based on project milestones.'
  },
  {
    question: 'Do you provide content for the website?',
    answer: 'While we dont create content directly, we provide guidance on content strategy and can recommend trusted partners for content creation. Well work with your existing content or collaborate with your team to ensure your messaging is clear and effective.'
  },
  {
    question: 'How do you handle revisions during the development process?',
    answer: 'We follow an iterative development approach with regular check-ins and feedback sessions. Each package includes a specific number of revision rounds, and we work closely with you to ensure the final product meets your expectations.'
  }
];

// Custom price toggle button
const PriceToggle = ({ 
  monthly, 
  setMonthly 
}: { 
  monthly: boolean; 
  setMonthly: (monthly: boolean) => void; 
}) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      <span className={`text-sm font-medium ${monthly ? 'text-indigo-400' : 'text-white/60'}`}>Monthly</span>
      
      <button 
        className="relative w-16 h-8 bg-white/10 rounded-full p-1 backdrop-blur-sm transition-colors duration-300"
        onClick={() => setMonthly(!monthly)}
      >
        <div 
          className={`absolute w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg transition-transform duration-300 ${
            monthly ? 'transform translate-x-0' : 'transform translate-x-8'
          }`} 
        />
      </button>
      
      <span className={`text-sm font-medium ${!monthly ? 'text-indigo-400' : 'text-white/60'}`}>
        Annual <span className="text-xs text-indigo-300 ml-1 px-1.5 py-0.5 rounded-full bg-indigo-900/50">Save 20%</span>
      </span>
    </div>
  );
};

// Pricing card component
const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className={`relative z-10 rounded-2xl backdrop-blur-sm border overflow-hidden flex flex-col h-full ${
        plan.popular 
          ? 'bg-gradient-to-b from-indigo-900/40 to-purple-900/40 border-indigo-500/30' 
          : 'bg-white/5 border-white/10 hover:border-indigo-500/20'
      } transition-all duration-300`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm py-1.5 text-center">
          Most Popular Choice
        </div>
      )}
      
      <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-300 mb-4">{plan.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          {plan.id !== 'enterprise' && <span className="text-gray-400 ml-2">one-time payment</span>}
        </div>
        
        <Link 
          href={plan.id === 'enterprise' ? '/contact' : `/checkout?plan=${plan.priceId}`}
          className={`block w-full py-3 px-6 rounded-lg text-center font-medium mb-8 ${
            plan.popular
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/30'
              : 'bg-white/10 text-white hover:bg-white/20'
          } transition-all duration-300`}
        >
          {plan.id === 'enterprise' ? 'Contact Us' : 'Get Started'}
        </Link>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">What&apos;s included:</h4>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05) }}
              >
                <span className="text-indigo-400 mr-3 mt-0.5">✓</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// Enterprise feature card
const EnterpriseFeatureCard = ({ feature, index }: { feature: EnterpriseFeature; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-indigo-500/20 transition-all duration-300"
    >
      <div className="flex items-start">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-2xl mr-4">
          {feature.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// FAQ accordion item
const FAQItem = ({ faq, index, isOpen, toggleOpen }: { 
  faq: FAQ; 
  index: number;
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-0"
    >
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-white">{faq.question}</h3>
        <span className={`text-indigo-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3.33333V12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'hidden' : ''}/>
            <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginBottom: isOpen ? 24 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-400 pb-6">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default function PricingPage() {
  const [monthly, setMonthly] = useState(true);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [stars, setStars] = useState<Star[]>([]);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Generate cosmic background
  useEffect(() => {
    setStars(Array.from({ length: 70 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.1,
      animationDuration: Math.random() * 4 + 2
    })));
  }, []);
  
  // SEO metadata
  const pageTitle = "Pricing & Packages | ALIATISH Digital Solutions";
  const pageDescription = "Explore our transparent pricing plans for enterprise web applications, e-commerce solutions, and digital services. Find the right package for your business needs.";
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#080b20] via-[#0d0a25] to-[#1a0e35]">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="web development pricing, enterprise application costs, e-commerce pricing, digital services packages" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Cosmic background elements */}
        <div className="absolute inset-0 z-0">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                opacity: star.opacity,
                animation: `twinkle ${star.animationDuration}s ease-in-out infinite`
              }}
            />
          ))}
          
          {/* Nebula effects */}
          <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/20 mix-blend-multiply blur-[100px]"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/20 mix-blend-multiply blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 font-medium text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                Simple & Transparent Pricing
              </span>
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Invest in Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Digital Growth</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Choose the perfect package for your business needs. All plans include our exceptional support and expertise.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <PriceToggle monthly={monthly} setMonthly={setMonthly} />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-300">
              Need a custom plan? <Link href="/contact" className="text-indigo-400 hover:underline">Contact us</Link> for a personalized quote.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Enterprise Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a25]/50 to-[#1a0e35]/50 z-0"></div>
        
        {/* Cosmic nebula */}
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Enterprise-Grade <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Features</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Enterprise solution offers premium features designed for businesses with complex digital needs.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {enterpriseFeatures.map((feature, index) => (
              <EnterpriseFeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                <span className="flex items-center">
                  Schedule Enterprise Consultation
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Questions</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, please contact us.
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="divide-y divide-white/10">
                {faqs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    faq={faq} 
                    index={index} 
                    isOpen={openFAQ === index} 
                    toggleOpen={() => toggleFAQ(index)} 
                  />
                ))}
              </div>
            </div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-gray-300 mb-6">
                Still have questions? We&apos;re here to help.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <div className="absolute inset-0 z-0">
          {/* Animated cosmic particles */}
          {stars.slice(0, 20).map((star, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-indigo-400"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
              }}
              animate={{
                y: [0, -50],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: star.animationDuration,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-display font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">Transform</span> Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Take the first step towards digital excellence with ALIATISH. Our team is ready to help you achieve your business goals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  Schedule a Free Consultation
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
              
              <Link 
                href="/projects"
                className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 