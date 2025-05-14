import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type FlameAnimationProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function FlameAnimation({ className = '', size = 'md' }: FlameAnimationProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Determine size classes
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96',
  }[size];

  // Flame animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Create multiple flame particles
  const flameParticles = Array(5).fill(null).map((_, i) => {
    const isCenter = i === 0;
    
    const getAnimationProps = () => {
      if (isCenter) {
        return {
          y: [0, -10, 0],
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        };
      }
      
      const xVariation = i % 2 === 0 ? 5 : -5;
      return {
        x: [0, xVariation, 0],
        y: [0, -15, 0],
        scale: [0.9, 1, 0.9],
        opacity: [0.7, 0.9, 0.7],
      };
    };
    
    return (
      <motion.div
        key={i}
        className={`absolute ${isCenter ? 'bottom-0 left-1/2 transform -translate-x-1/2' : ''} 
                   ${!isCenter ? `bottom-${i * 2} left-${50 + (i - 2) * 10}` : ''}`}
        style={{
          bottom: isCenter ? 0 : `${i * 5}%`,
          left: isCenter ? '50%' : `${50 + (i - 2) * 8}%`,
          transform: isCenter ? 'translateX(-50%)' : 'translateX(-50%)',
          width: isCenter ? '60%' : `${40 + (i * 5)}%`,
          height: isCenter ? '70%' : `${50 + (i * 5)}%`,
          zIndex: isCenter ? 10 : 10 - i,
        }}
        animate={getAnimationProps()}
        transition={{
          duration: 2 + (i * 0.5),
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      >
        <div 
          className={`h-full w-full rounded-full rounded-b-none bg-gradient-to-t 
                    ${isCenter 
                      ? 'from-red-600 via-orange-500 to-yellow-300 opacity-90' 
                      : 'from-red-500 via-orange-400 to-transparent opacity-70'}`}
          style={{
            filter: `blur(${isCenter ? 8 : 12}px)`,
          }}
        />
      </motion.div>
    );
  });

  return (
    <motion.div
      ref={ref}
      className={`relative ${sizeClasses} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {flameParticles}
    </motion.div>
  );
} 