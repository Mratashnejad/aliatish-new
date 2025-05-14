'use client';
import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Typography from './Typography';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'outlined' | 'raised';
  interactive?: boolean;
  href?: string;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'border' | 'none';
  animateIn?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  iconBefore?: React.ReactNode;
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait';
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Card({
  variant = 'default',
  interactive = false,
  href,
  hoverEffect = 'lift',
  animateIn = false,
  imageSrc,
  imageAlt = '',
  iconBefore,
  aspectRatio = 'auto',
  title,
  subtitle,
  className = '',
  children,
  ...props
}: CardProps) {
  // Base card styling classes
  const baseClasses = "relative rounded-xl overflow-hidden w-full";
  
  // Variant styling
  const variantClasses = {
    default: "bg-white border border-neutral-light/20",
    glass: "bg-white/90 backdrop-blur-md border border-neutral-light/10",
    outlined: "bg-white bg-opacity-50 border border-neutral-light/30",
    raised: "bg-white shadow-md border border-neutral-light/10",
  };
  
  // Hover effect classes
  const hoverClasses = interactive ? {
    lift: "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10",
    glow: "transition-all duration-300 hover:shadow-lg hover:shadow-primary/20",
    scale: "transition-all duration-300 hover:scale-[1.02]",
    border: "transition-all duration-300 hover:border-primary/40",
    none: "",
  } : { lift: "", glow: "", scale: "", border: "", none: "" };
  
  // Aspect ratio classes
  const aspectRatioClasses = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };
  
  // Combined classes
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClasses[hoverEffect]} ${aspectRatioClasses[aspectRatio]} ${className}`;
  
  // Animation variants
  const animations: MotionProps = animateIn ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  } : {};

  // Wrapper component - either a link, motion div, or regular div
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <Link href={href} className={`block ${interactive ? 'cursor-pointer' : ''}`}>
          {children}
        </Link>
      );
    } else if (animateIn) {
      return (
        <motion.div className={cardClasses} {...animations} {...props as any}>
          {children}
        </motion.div>
      );
    } else {
      return (
        <div className={cardClasses} {...props}>
          {children}
        </div>
      );
    }
  };

  return (
    <CardWrapper>
      {imageSrc && (
        <div className={`relative ${aspectRatio !== 'auto' ? aspectRatioClasses[aspectRatio] : 'aspect-video'} overflow-hidden`}>
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          {/* Optional overlay gradient for better text contrast */}
          {interactive && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          )}
        </div>
      )}
      
      <div className="relative">
        {iconBefore && (
          <div className="absolute -top-6 left-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
            {iconBefore}
          </div>
        )}
        
        <div className={`${iconBefore ? 'pt-8' : ''} p-5`}>
          {title && (
            <Typography 
              as="h4"
              className="mb-1 font-display font-semibold text-xl md:text-2xl tracking-tight text-neutral-900"
            >
              {title}
            </Typography>
          )}
          
          {subtitle && (
            <Typography 
              as="p"
              className="mb-3 font-normal text-sm leading-relaxed text-neutral-600"
            >
              {subtitle}
            </Typography>
          )}
          
          {children}
        </div>
      </div>
    </CardWrapper>
  );
} 