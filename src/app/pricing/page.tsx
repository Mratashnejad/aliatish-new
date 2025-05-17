'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

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
    answer: 'Project timelines vary depending on scope and complexity. Typical Starter projects can be completed in 4-6 weeks, Professional projects in 8-12 weeks, and Enterprise projects are custom scoped based on requirements. We\'ll provide a detailed timeline during our initial consultation.'
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
      <span className={`text-sm font-medium ${monthly ? 'text-primary' : 'text-neutral/60'}`}>Monthly</span>
      
      <button 
        className="relative w-16 h-8 bg-white/10 rounded-full p-1 transition-colors duration-300"
        onClick={() => setMonthly(!monthly)}
      >
        <div 
          className={`absolute w-6 h-6 bg-primary rounded-full transition-transform duration-300 ${
            monthly ? 'transform translate-x-0' : 'transform translate-x-8'
          }`} 
        />
      </button>
      
      <span className={`text-sm font-medium ${!monthly ? 'text-primary' : 'text-neutral/60'}`}>
        Annual <span className="text-xs text-primary">Save 20%</span>
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
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 h-full flex flex-col ${
        plan.popular 
          ? 'border-primary/30 shadow-lg shadow-primary/10 bg-gradient-to-br from-primary/5 to-white/5 z-10 scale-105' 
          : 'border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm hover:shadow-md hover:shadow-primary/5'
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <div className="text-xs font-bold uppercase py-1 px-4 bg-primary text-white rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-neutral/60 mb-6">{plan.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-display font-bold">{plan.price}</span>
          {plan.price !== 'Custom' && (
            <span className="text-neutral/60 ml-2">one-time</span>
          )}
        </div>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span className="text-neutral/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-8 pt-0">
        <Link
          href={plan.id === 'enterprise' ? '/contact' : '/contact'}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center ${
            plan.popular
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
        >
          {plan.callToAction}
        </Link>
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
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/20 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-neutral/70">{feature.description}</p>
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
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium pr-8">{faq.question}</h3>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-neutral/70">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 mix-blend-multiply blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transparent <span className="text-primary">Pricing</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral/80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Choose the perfect plan for your business needs. 
              All plans include our core features and dedicated support.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Pricing plans section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-neutral/60 mb-4">
              All prices are in USD. Need something more specific?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Contact us for a custom quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Enterprise features section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-lg text-neutral/80">
              Our enterprise solutions are tailored to meet the unique needs of large organizations
              with complex requirements and high standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <EnterpriseFeatureCard 
                key={index} 
                feature={feature} 
                index={index} 
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
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
            
            <div className="mt-12 text-center">
              <p className="text-neutral/70 mb-4">
                Still have questions? We&apos;re always happy to help. If you can&apos;t find what you&apos;re looking for, please contact us directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Contact our sales team
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral/80 mb-10">
              Let's discuss your project and find the perfect solution for your business needs.
              Our team is ready to help you succeed.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 