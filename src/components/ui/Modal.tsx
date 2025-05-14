'use client';
import React, { Fragment, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  position?: 'center' | 'top' | 'right' | 'bottom' | 'left';
  variant?: 'default' | 'glass' | 'minimal';
  showCloseButton?: boolean;
  preventClose?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  onAfterClose?: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  size = 'md',
  position = 'center',
  variant = 'default',
  showCloseButton = true,
  preventClose = false,
  children,
  footer,
  closeOnClickOutside = true,
  closeOnEsc = true,
  onAfterClose,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Size classes
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full h-screen sm:h-auto sm:max-h-[90vh]',
  };
  
  // Position variants
  const positionVariants = {
    center: {
      hidden: { opacity: 0, scale: 0.9, y: 0 },
      visible: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.9, y: 0 },
    },
    top: {
      hidden: { opacity: 0, y: '-100%' },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: '-100%' },
    },
    right: {
      hidden: { opacity: 0, x: '100%' },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: '100%' },
    },
    bottom: {
      hidden: { opacity: 0, y: '100%' },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: '100%' },
    },
    left: {
      hidden: { opacity: 0, x: '-100%' },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: '-100%' },
    },
  };
  
  // Variant styles
  const variantStyles = {
    default: 'bg-white border border-neutral-light/20 shadow-xl',
    glass: 'bg-white/80 backdrop-blur-lg border border-neutral-light/10 shadow-xl',
    minimal: 'bg-white shadow-lg',
  };
  
  // Position container classes
  const positionContainerClasses = {
    center: 'flex items-center justify-center p-4',
    top: 'flex items-start justify-center p-4',
    right: 'flex items-center justify-end',
    bottom: 'flex items-end justify-center p-4',
    left: 'flex items-center justify-start',
  };
  
  // Full screen special handling
  const fullScreenPosition = position === 'center' || position === 'top' 
    ? positionContainerClasses[position] 
    : positionContainerClasses.center;
  
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && closeOnEsc && !preventClose) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, closeOnEsc, preventClose]);
  
  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node) && 
        closeOnClickOutside && !preventClose) {
      onClose();
    }
  };
  
  // Handle close with callbacks
  const handleClose = () => {
    if (!preventClose) {
      onClose();
      if (onAfterClose) {
        setTimeout(onAfterClose, 300); // After animation completes
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop overlay */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={handleBackdropClick}
            ></div>
            
            {/* Modal container */}
            <div className={`relative min-h-screen ${size === 'full' ? fullScreenPosition : positionContainerClasses[position]}`}>
              {/* Modal content */}
              <motion.div
                ref={modalRef}
                className={`relative w-full ${size !== 'full' ? sizeClasses[size] : 'w-full sm:max-w-3xl m-0 sm:m-4'} ${variantStyles[variant]} rounded-xl overflow-hidden z-10`}
                variants={positionVariants[position]}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              >
                {/* Header */}
                {(title || showCloseButton) && (
                  <div className="flex items-center justify-between p-5 border-b border-neutral-light/10">
                    {title && (
                      <h3 className="text-lg font-semibold text-neutral">{title}</h3>
                    )}
                    
                    {showCloseButton && (
                      <button
                        type="button"
                        onClick={handleClose}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-neutral/60 hover:text-neutral hover:bg-neutral-light/10 transition-colors"
                        aria-label="Close modal"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    )}
                  </div>
                )}
                
                {/* Body */}
                <div className="p-5 max-h-[calc(80vh-10rem)] overflow-y-auto">
                  {children}
                </div>
                
                {/* Footer */}
                {footer && (
                  <div className="border-t border-neutral-light/10 p-5 bg-neutral-light/5">
                    {footer}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
} 