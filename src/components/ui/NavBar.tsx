"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Animated cosmic menu icon
const CosmicMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);
  useEffect(() => {
    if (isOpen) {
      setParticles(generateMenuParticles(5));
    } else {
      setParticles([]);
    }
  }, [isOpen]);
  return (
    <div className="relative w-8 h-8">
      {/* Center cosmic core */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"
        animate={{
          scale: isOpen ? [1, 1.5, 1.2] : 1,
          opacity: isOpen ? [1, 0.8, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Orbiting lines */}
      {[...Array(3)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute top-[50%] left-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
          style={{ width: 24 - i * 4, marginTop: -8 + i * 8 }}
          animate={{
            rotate: isOpen ? 45 : 0,
            width: isOpen ? 18 : 24 - i * 4,
            opacity: isOpen && i === 0 ? 0 : 1,
            x: isOpen ? (i === 1 ? 0 : i === 0 ? 10 : -10) : 0,
          }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        />
      ))}

      {/* Cosmic dust particles */}
      {isOpen &&
        particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-purple-500"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: particle.x, y: particle.y, opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop", delay: i * 0.1 }}
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          />
        ))}
    </div>
  );
};

const NavLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
];

function generateNavStars(count: number) {
  return Array.from({ length: count }).map(() => ({
    width: Math.random() * 2,
    height: Math.random() * 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
}

function generateMenuParticles(count: number) {
  return Array.from({ length: count }).map(() => ({
    x: (Math.random() - 0.5) * 30,
    y: (Math.random() - 0.5) * 30,
  }));
}

function generateStarBgStars(count: number) {
  return Array.from({ length: count }).map(() => ({
    width: Math.random() * 2,
    height: Math.random() * 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
  }));
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const navRef = useRef<HTMLElement>(null);

  // Scroll animations
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(13, 10, 37, 0.85)"]);
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(8px)"]);
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]);

  // Set active link based on path
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setActiveLink(path);
    }
  }, []);

  const [navStars, setNavStars] = useState<any[]>([]);
  useEffect(() => {
    // Only run on client side
    setNavStars(generateNavStars(50));
  }, []);

  // Star field background for navbar
  const StarBackground = () => {
    const [stars, setStars] = useState<any[]>([]);
    useEffect(() => {
      // Only run on client side
      setStars(generateStarBgStars(20));
    }, []);
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.width}px`,
              height: `${star.height}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: star.delay,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-500"
      style={{
        background: navBackground,
        backdropFilter: navBlur,
        borderBottom: `1px solid ${navBorder}`,
      }}
    >
      <StarBackground />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo with cosmic animation */}
          <Link href="/" className="relative z-10 flex items-center">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mr-2 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(139, 92, 246, 0.7)",
                    "0 0 0px rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 via-violet-800 to-purple-900"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <div>
                <span className="font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
                  ALIA
                </span>
                <motion.span
                  className="ml-1 inline-block text-xs text-white opacity-60"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  TISH
                </motion.span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - cosmic style */}
          <nav className="hidden lg:flex items-center">
            <motion.div
              className="flex space-x-8 relative"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Cosmic trail effect */}
              <motion.div
                className="absolute h-px -bottom-1 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500"
                style={{
                  left: "0%",
                  width: "10%",
                  opacity: 0.7,
                  filter: "blur(1px)",
                }}
                animate={{
                  left: ["0%", "90%", "0%"],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              {NavLinks.map((link) => (
                <motion.div
                  key={link.href}
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="px-2 py-2 text-white text-sm font-medium hover:text-primary transition-colors"
                  >
                    {link.label}

                    {/* Active link indicator */}
                    {activeLink === link.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500"
                        layoutId="activeNavIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Hover stars */}
                    <motion.div
                      className="absolute -top-1 -right-2 opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div
                        className="w-1 h-1 rounded-full bg-purple-400 absolute animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-1 h-1 rounded-full bg-indigo-400 absolute -top-1 -right-1 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to action button */}
            <motion.div className="ml-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform">
                <span className="flex items-center">
                  <span>Contact Us</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button with cosmic theme */}
          <motion.button
            className="lg:hidden relative z-10 flex items-center justify-center h-10 w-10 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
          >
            <CosmicMenuIcon isOpen={isOpen} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - cosmic style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden overflow-hidden relative z-20"
          >
            {/* Mobile menu background with cosmic effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a25] to-[#1a0e35] z-0">
              {/* Starfield background */}
              {navStars.map((star, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 2 + "px",
                    height: Math.random() * 2 + "px",
                    top: Math.random() * 100 + "%",
                    left: Math.random() * 100 + "%",
                    opacity: Math.random() * 0.5 + 0.2,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 5,
                  }}
                />
              ))}

              {/* Nebula effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(0, 0, 0, 0) 70%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>

            <div className="container mx-auto px-4 py-6 relative z-10">
              <motion.nav
                className="flex flex-col space-y-3"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.07 } },
                  hidden: {},
                }}
              >
                {NavLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      visible: { opacity: 1, y: 0, x: 0 },
                      hidden: { opacity: 0, y: 20, x: -10 },
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <Link
                      href={link.href}
                      className="py-3 px-4 block text-lg font-medium text-white hover:text-indigo-400 transition-colors group relative overflow-hidden"
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Link text with cosmic hover effect */}
                      <span className="relative z-10 flex items-center">
                        {/* Small orbit indicator */}
                        <motion.span
                          className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 mr-3 opacity-60"
                          animate={{
                            scale: activeLink === link.href ? [1, 1.5, 1] : 1,
                            opacity: activeLink === link.href ? [0.6, 1, 0.6] : 0.6,
                          }}
                          transition={{
                            duration: 2,
                            repeat: activeLink === link.href ? Infinity : 0,
                            repeatType: "reverse",
                          }}
                        />

                        {link.label}

                        {/* Trailing stars on hover */}
                        <motion.span
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ✧
                        </motion.span>
                      </span>

                      {/* Background cosmic trail on hover */}
                      <motion.div
                        className="absolute inset-0 bg-white/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* Contact button */}
                <motion.div
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 },
                  }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="pt-4 px-4"
                >
                  <motion.button
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center">
                      <span>Contact Us</span>
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
