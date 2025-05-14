'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typography from './Typography';

interface TestimonialProps {
  content: string;
  author: {
    name: string;
    title?: string;
    company?: string;
    image?: string;
  };
  rating?: number;
  variant?: 'default' | 'card' | 'minimal' | 'feature';
  animateIn?: boolean;
  className?: string;
}

export default function Testimonial({
  content,
  author,
  rating = 5,
  variant = 'default',
  animateIn = false,
  className = '',
}: TestimonialProps) {
  // Star rating component
  const StarRating = () => (
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill={i < rating ? 'currentColor' : 'none'} 
          className={i < rating ? 'text-yellow-400' : 'text-neutral-300'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );

  // Quote icon
  const QuoteIcon = ({ className = '' }: { className?: string }) => (
    <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 11H6C4.89543 11 4 10.1046 4 9V7C4 5.89543 4.89543 5 6 5H8C9.10457 5 10 5.89543 10 7V11ZM10 11V13C10 15.2091 8.20914 17 6 17H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 11H16C14.8954 11 14 10.1046 14 9V7C14 5.89543 14.8954 5 16 5H18C19.1046 5 20 5.89543 20 7V11ZM20 11V13C20 15.2091 18.2091 17 16 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Different variant styles with improved contrast
  const variantStyles = {
    default: `bg-white p-8 rounded-xl border border-neutral-300/30 shadow-sm`,
    card: `bg-white p-8 rounded-xl border border-neutral-300/30 shadow-lg`,
    minimal: `bg-transparent p-4`,
    feature: `bg-gradient-to-br from-white to-neutral-100 p-8 rounded-xl border border-primary/20 shadow-lg relative overflow-hidden`,
  };

  // Content to render
  const TestimonialContent = () => (
    <div className={`${variantStyles[variant]} ${className}`}>
      {variant === 'feature' && (
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/5 blur-xl"></div>
      )}
      
      {/* Rating stars */}
      {rating > 0 && <StarRating />}
      
      {/* Quote */}
      <div className="relative">
        {variant !== 'minimal' && (
          <QuoteIcon className="absolute -top-3 -left-2 text-primary/20 opacity-60" />
        )}
        
        <Typography
          as="p"
          className={`relative font-medium text-neutral-900 ${variant === 'minimal' ? '' : 'italic'} mb-6 pl-2`}
        >
          {variant !== 'minimal' && (
            <span className="text-primary text-opacity-40 text-3xl font-serif absolute -left-2 -top-3">
              "
            </span>
          )}
          {content}
          {variant !== 'minimal' && (
            <span className="text-primary text-opacity-40 text-3xl font-serif">
              "
            </span>
          )}
        </Typography>
        
        {/* Author */}
        <div className="flex items-center mt-6">
          {author.image && (
            <div className="mr-4 relative">
              <div className="w-12 h-12 rounded-full overflow-hidden relative border border-neutral-200">
                <Image 
                  src={author.image} 
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
              {variant === 'feature' && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
              )}
            </div>
          )}
          
          <div>
            <Typography 
              as="h4"
              className="font-bold text-neutral-900"
            >
              {author.name}
            </Typography>
            
            {(author.title || author.company) && (
              <Typography 
                as="p"
                className="text-xs text-neutral-600"
              >
                {author.title}
                {author.title && author.company && <span> • </span>}
                {author.company}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Wrap with motion if animateIn is true
  if (animateIn) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <TestimonialContent />
      </motion.div>
    );
  }

  return <TestimonialContent />;
} 