'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

// FAQ type
type FAQ = {
  question: string;
  answer: string;
  category: string;
};

// FAQ categories
const categories = [
  'General',
  'Services',
  'Process',
  'Technical',
  'Pricing',
  'Support',
];

// Sample FAQs
const faqs: FAQ[] = [
  // General FAQs
  {
    question: 'What does ALIATISH specialize in?',
    answer: 'ALIATISH specializes in creating exceptional digital experiences and enterprise solutions. Our core services include enterprise web applications, e-commerce solutions, business intelligence dashboards, and API development & integration. We work with businesses of all sizes to transform their digital presence and achieve their business goals.',
    category: 'General',
  },
  {
    question: 'How long has ALIATISH been in business?',
    answer: 'ALIATISH has been providing digital solutions for over 8 years. During this time, we\'ve successfully delivered hundreds of projects for clients across various industries, from startups to enterprise organizations.',
    category: 'General',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work with clients across multiple industries, including finance, healthcare, e-commerce, education, technology, and manufacturing. Our diverse experience allows us to understand the unique challenges and requirements of different business sectors.',
    category: 'General',
  },
  {
    question: 'Where is ALIATISH located?',
    answer: 'Our headquarters is located in San Francisco, California, but we operate as a remote-first company with team members around the world. This allows us to work with clients globally and provide round-the-clock support when needed.',
    category: 'General',
  },
  
  // Services FAQs
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of digital services including: enterprise web application development, e-commerce solutions, business intelligence dashboards, API development and integration, UI/UX design, digital strategy consulting, cloud infrastructure setup and management, and ongoing support and maintenance.',
    category: 'Services',
  },
  {
    question: 'Do you offer web design services?',
    answer: 'Yes, we provide comprehensive web design services as part of our development process. Our team of experienced UI/UX designers creates intuitive, engaging, and visually appealing interfaces that align with your brand identity and business objectives.',
    category: 'Services',
  },
  {
    question: 'Can you help with existing projects or only new ones?',
    answer: 'We work with both new and existing projects. For existing projects, we can provide code audits, performance optimization, feature additions, redesign, or complete overhauls. Were experienced in taking over projects and improving them to meet current standards and business needs.',
    category: 'Services',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of modern technologies. For frontend development, we specialize in React, Next.js, Vue.js, and Angular. For backend, we use Node.js, Python, Java, and PHP. Were also experienced with database technologies like MongoDB, PostgreSQL, MySQL, and cloud services from AWS, Google Cloud, and Azure.',
    category: 'Services',
  },
  
  // Process FAQs
  {
    question: 'What is your development process?',
    answer: 'Our development process typically follows these phases: Discovery & Requirements Analysis, Planning & Architecture Design, Design (UI/UX), Development, Testing & QA, Deployment, and Post-launch Support. We use an agile methodology that allows for flexibility, iteration, and continuous improvement throughout the project.',
    category: 'Process',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months or more. During our initial consultation, well provide a detailed timeline based on your specific requirements.',
    category: 'Process',
  },
  {
    question: 'How do you ensure project quality?',
    answer: 'Quality is ensured through multiple mechanisms: rigorous code reviews, comprehensive automated and manual testing, adherence to industry best practices, continuous integration/continuous deployment (CI/CD) pipelines, regular client feedback sessions, and a dedicated QA team that verifies functionality, performance, and user experience.',
    category: 'Process',
  },
  {
    question: 'How do you communicate during projects?',
    answer: 'We maintain transparent and consistent communication throughout the project lifecycle. We use tools like Slack for day-to-day communication, Jira or Trello for project management, and regular video meetings for updates and presentations. Youll have a dedicated project manager as your main point of contact.',
    category: 'Process',
  },
  
  // Technical FAQs
  {
    question: 'Are your websites responsive and mobile-friendly?',
    answer: 'Yes, all our digital solutions are built with a mobile-first approach, ensuring they work perfectly on all devices and screen sizes. We conduct thorough testing across multiple devices and browsers to ensure consistent performance and user experience.',
    category: 'Technical',
  },
  {
    question: 'How do you handle website security?',
    answer: 'Security is a top priority in all our projects. We implement industry best practices including secure authentication systems, data encryption, regular security updates, protection against common vulnerabilities (OWASP Top 10), and compliance with relevant regulations such as GDPR and CCPA. We also conduct security audits and penetration testing for enterprise solutions.',
    category: 'Technical',
  },
  {
    question: 'Do you provide SEO optimization?',
    answer: 'Yes, we implement SEO best practices in all our web projects. This includes optimized site structure, fast loading times, mobile optimization, semantic HTML, schema markup, and integration with analytics tools. For more advanced SEO needs, we can work with you to develop a comprehensive SEO strategy.',
    category: 'Technical',
  },
  {
    question: 'Can you integrate with third-party systems and APIs?',
    answer: 'Absolutely. We have extensive experience integrating with various third-party systems and APIs, including payment gateways, CRM systems, marketing automation tools, analytics platforms, social media, shipping and logistics systems, and many others. We can also develop custom APIs to facilitate integration between different systems.',
    category: 'Technical',
  },
  
  // Pricing FAQs
  {
    question: 'How much does a project cost?',
    answer: 'Project costs vary based on scope, complexity, and specific requirements. We offer different pricing tiers to accommodate various business needs. For standard projects, we provide fixed-price quotes based on detailed requirements. For more complex projects, we may recommend a time and materials model. Please contact us for a personalized quote.',
    category: 'Pricing',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment options. Typically, we require a deposit to begin work, followed by milestone-based payments throughout the project. For larger projects, we can create a customized payment schedule that aligns with project phases and your budget constraints.',
    category: 'Pricing',
  },
  {
    question: 'Are there any hidden costs?',
    answer: 'No, we believe in transparent pricing. Our proposals clearly outline all costs associated with your project. If there are any potential additional costs (such as third-party services, licenses, or unexpected scope changes), well discuss these with you upfront before proceeding.',
    category: 'Pricing',
  },
  {
    question: 'Do you offer discounts for startups or non-profits?',
    answer: 'We offer special pricing considerations for startups and non-profit organizations. We understand the budget constraints these organizations face and aim to provide accessible solutions while maintaining our quality standards. Please mention your organization type when contacting us.',
    category: 'Pricing',
  },
  
  // Support FAQs
  {
    question: 'What kind of support do you provide after launching a project?',
    answer: 'All our projects include a post-launch support period (typically 30-90 days) to address any issues that may arise. After this period, we offer various ongoing support and maintenance packages to ensure your digital solution continues to perform optimally. These packages can include regular updates, security patches, performance monitoring, content updates, and feature enhancements.',
    category: 'Support',
  },
  {
    question: 'How quickly do you respond to support requests?',
    answer: 'Our standard response time for support requests is within 24 hours during business days. For clients with premium support packages, we offer faster response times and priority handling. In case of critical issues affecting site functionality, we aim to respond and begin resolving the issue as quickly as possible.',
    category: 'Support',
  },
  {
    question: 'Do you provide training for using the systems you build?',
    answer: 'Yes, we provide comprehensive training as part of our project delivery. This includes user documentation, admin guides, and hands-on training sessions to ensure your team is comfortable managing and using the new system. Additional training sessions can be arranged if needed.',
    category: 'Support',
  },
  {
    question: 'Can you help with hosting and domain registration?',
    answer: 'Yes, we can assist with selecting and setting up appropriate hosting solutions and domain registration. Well recommend options based on your specific needs, considering factors like expected traffic, security requirements, and budget. We can either manage these aspects for you or provide guidance if you prefer to manage them internally.',
    category: 'Support',
  },
];

// FAQ Accordion Item component
const FAQItem = ({ 
  faq, 
  isOpen, 
  toggleOpen 
}: { 
  faq: FAQ; 
  isOpen: boolean; 
  toggleOpen: () => void; 
}) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
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
          <p>{faq.answer}</p>
          
          {faq.category === 'Pricing' && (
            <p className="mt-4">
              <Link href="/pricing" className="text-primary hover:underline">
                View our pricing plans
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>{" "}
              for a custom quote.
            </p>
          )}
          
          {faq.category === 'Services' && (
            <p className="mt-4">
              <Link href="/services" className="text-primary hover:underline">
                Learn more about our services
              </Link>
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  // Filter FAQs by category
  const filteredFAQs = faqs.filter(faq => faq.category === activeCategory);
  
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
              Frequently Asked <span className="text-primary">Questions</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral/80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find answers to common questions about our services, processes, and how we can help your business succeed.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category tabs */}
            <div className="mb-12 overflow-x-auto">
              <div className="flex space-x-2 md:justify-center min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenFAQ(null);
                    }}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                      activeCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* FAQ accordion */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              {filteredFAQs.length > 0 ? (
                <div className="p-6 md:p-8">
                  {filteredFAQs.map((faq, index) => (
                    <FAQItem 
                      key={index} 
                      faq={faq} 
                      isOpen={openFAQ === index} 
                      toggleOpen={() => toggleFAQ(index)} 
                    />
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <h3 className="text-xl font-bold mb-2">No FAQs found</h3>
                  <p className="text-neutral/60">
                    We don&apos;t have any FAQs for this category yet. Please check other categories or contact us directly.
                  </p>
                </div>
              )}
            </motion.div>
            
            {/* Search button */}
            <div className="mt-12 text-center">
              <p className="text-neutral/70 mb-4">
                Can't find what you're looking for?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 mt-12 bg-gradient-to-br from-primary/10 to-accent-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-neutral/80 mb-10">
              Let's discuss how we can help your business achieve its digital goals.
              Our team is ready to provide personalized solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Start a Conversation
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 