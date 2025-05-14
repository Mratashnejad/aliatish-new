'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig, useScroll, useTransform } from 'framer-motion';

// Simple menu icon component
const IconMenu = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-6 h-6">
    <motion.span 
      className="absolute top-[7px] left-0 h-[2px] bg-current rounded-full"
      initial={{ width: 24 }}
      animate={{ 
        width: isOpen ? 0 : 24,
        opacity: isOpen ? 0 : 1,
        left: isOpen ? 12 : 0
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span 
      className="absolute top-[14px] left-0 h-[2px] w-6 bg-current rounded-full"
      animate={{ 
        rotate: isOpen ? 45 : 0,
        width: isOpen ? 24 : 16
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span 
      className="absolute top-[14px] left-0 h-[2px] w-6 bg-current rounded-full"
      animate={{ 
        rotate: isOpen ? -45 : 0
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span 
      className="absolute top-[21px] left-0 h-[2px] bg-current rounded-full"
      initial={{ width: 16 }}
      animate={{ 
        width: isOpen ? 0 : 16,
        opacity: isOpen ? 0 : 1,
        left: isOpen ? 8 : 0
      }}
      transition={{ duration: 0.3 }}
    />
  </div>
);

const NavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled 
          ? 'rgba(0, 0, 0, 0.98)' 
          : 'rgb(0, 0, 0)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.2)' : 'none',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-display font-bold text-2xl text-white">ALIA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex space-x-8">
              {NavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2 text-white text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden flex items-center justify-center h-10 w-10 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
          >
            <IconMenu isOpen={isOpen} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden overflow-hidden border-t border-gray-800"
            style={{
              background: 'rgba(0, 0, 0, 0.95)',
            }}
          >
            <div className="container mx-auto px-4 py-6">
              <motion.nav 
                className="flex flex-col space-y-3"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.07 } },
                  hidden: {}
                }}
              >
                {NavLinks.map((link) => (
                  <motion.div 
                    key={link.href}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 20 }
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="py-3 px-4 block text-lg font-medium text-white hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
