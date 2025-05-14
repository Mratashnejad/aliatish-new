'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

// Typography variant definitions using class-variance-authority
const typographyVariants = cva('text-neutral-900', {
  variants: {
    variant: {
      h1: 'font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight',
      h2: 'font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight',
      h3: 'font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight',
      h4: 'font-display font-semibold text-xl md:text-2xl tracking-tight',
      h5: 'font-display font-semibold text-lg md:text-xl',
      h6: 'font-display font-semibold text-base md:text-lg',
      subtitle1: 'font-medium text-xl',
      subtitle2: 'font-medium text-lg',
      body1: 'font-normal text-base leading-relaxed',
      body2: 'font-normal text-sm leading-relaxed',
      button: 'font-medium text-base uppercase tracking-wide',
      caption: 'font-normal text-xs',
      overline: 'font-medium text-xs uppercase tracking-widest',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-accent-purple',
      neutral: 'text-neutral-900',
      light: 'text-neutral-600',
      lighter: 'text-neutral-500',
      lightest: 'text-neutral-400',
      white: 'text-white',
      inherit: 'text-inherit',
      gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple',
    },
    transform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      normal: 'normal-case',
    },
    responsive: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'body1',
    weight: 'normal',
    align: 'left',
    color: 'neutral',
    transform: 'normal',
    responsive: true,
  },
});

// Typography props interface
export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  gutterBottom?: boolean;
  truncate?: boolean;
  noWrap?: boolean;
  animate?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = 'body1',
  weight,
  align,
  color,
  transform,
  responsive,
  as,
  gutterBottom = false,
  truncate = false,
  noWrap = false,
  animate = false,
  className = '',
  children,
  ...props
}: TypographyProps) {
  // Define the HTML element to use based on variant or override
  const getElement = () => {
    if (as) return as;
    
    switch (variant) {
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'h4':
        return 'h4';
      case 'h5':
        return 'h5';
      case 'h6':
        return 'h6';
      case 'subtitle1':
      case 'subtitle2':
        return 'h6';
      case 'body1':
      case 'body2':
        return 'p';
      case 'button':
        return 'span';
      case 'caption':
      case 'overline':
        return 'span';
      default:
        return 'p';
    }
  };

  // Combine all classes
  const Element = getElement();
  const allClasses = `
    ${typographyVariants({ variant, weight, align, color, transform, responsive })}
    ${gutterBottom ? 'mb-4' : ''}
    ${truncate ? 'truncate' : ''}
    ${noWrap ? 'whitespace-nowrap' : ''}
    ${className}
  `;

  // Animation properties
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      }
    : {};

  // Return animated or regular component
  return animate ? (
    <motion.div {...animationProps}>
      {React.createElement(Element, { className: allClasses, ...props }, children)}
    </motion.div>
  ) : (
    React.createElement(Element, { className: allClasses, ...props }, children)
  );
} 