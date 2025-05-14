'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  animateIn?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  leftIcon,
  rightIcon,
  isLoading = false,
  isDisabled = false,
  animateIn = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-5 py-2.5 text-base rounded-lg',
    lg: 'px-7 py-3 text-lg rounded-xl',
  };

  // Variant classes with improved contrast
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-accent-purple text-white hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]',
    secondary: 'bg-white border border-neutral-light/30 text-neutral-900 hover:bg-neutral-light/10 active:scale-[0.98]',
    outline: 'bg-transparent border border-neutral-900/30 text-neutral-900 hover:border-primary/70 hover:text-primary active:scale-[0.98]',
    ghost: 'bg-transparent text-neutral-900 hover:bg-neutral-light/20 active:scale-[0.98]',
    link: 'bg-transparent text-primary underline-offset-4 hover:underline p-0'
  };

  // Shared base classes
  const baseClasses = `
    relative inline-flex items-center justify-center
    font-medium transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1
    ${fullWidth ? 'w-full' : ''}
    ${isDisabled || isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}
  `;

  // Combined classes
  const buttonClasses = `
    ${baseClasses} 
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${className}
  `;

  // Loading spinner
  const LoadingSpinner = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  );

  // Animate in props
  const animateProps = animateIn ? {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.3 }
  } : {};

  // If href is provided, render as Link
  if (href) {
    const ButtonContent = () => (
      <div className="flex items-center justify-center">
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        <span className={isLoading ? 'invisible' : ''}>{children}</span>
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
        {isLoading && <LoadingSpinner />}
      </div>
    );

    if (animateIn) {
      return (
        <motion.div {...animateProps}>
          <Link href={href} className={buttonClasses} {...(props as any)}>
            <ButtonContent />
          </Link>
        </motion.div>
      );
    }

    return (
      <Link href={href} className={buttonClasses} {...(props as any)}>
        <ButtonContent />
      </Link>
    );
  }

  // Regular button with optional animation wrapper
  const ButtonContent = () => (
    <button 
      className={buttonClasses} 
      disabled={isDisabled || isLoading} 
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span className={isLoading ? 'invisible' : ''}>{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
      {isLoading && <LoadingSpinner />}
    </button>
  );

  if (animateIn) {
    return (
      <motion.div {...animateProps}>
        <ButtonContent />
      </motion.div>
    );
  }

  return <ButtonContent />;
} 