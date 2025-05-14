'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';

// Newsletter subscription form component
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate email
    if (email && /\S+@\S+\.\S+/.test(email)) {
      console.log('Submitted email:', email);
      setSubmitted(true);
      setEmail('');
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
    <div className="mt-8">
      {submitted ? (
        <div className="p-4 rounded-lg bg-green-800/20 text-green-400">
          <p className="text-sm">Thank you for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <input
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-sm text-white placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all"
          >
            <span className="text-sm font-medium">Subscribe</span>
          </button>
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
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-display font-bold text-2xl">ALIA</span>
            </Link>
            
            <p className="text-gray-400 mb-6 text-sm">
              Specialized enterprise web development agency with 10+ years of experience 
              creating high-performance digital solutions for forward-thinking businesses.
            </p>
            
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                San Francisco, CA
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6L12 13L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                contact@aliatish.com
              </div>
            </div>
            
            {/* Newsletter subscription */}
            <NewsletterForm />
          </div>
          
          {/* Links grid */}
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-bold text-lg mb-4 text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ALIATISH. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}