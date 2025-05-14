'use client';
import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outlined' | 'minimal';
  fullWidth?: boolean;
  animateIn?: boolean;
  showCount?: boolean;
  clearable?: boolean;
  iconButton?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  variant = 'default',
  fullWidth = true,
  animateIn = false,
  showCount = false,
  clearable = false,
  iconButton,
  className = '',
  id,
  required,
  disabled,
  value = '',
  maxLength,
  onChange,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value as string);
  const [characterCount, setCharacterCount] = useState(
    typeof value === 'string' ? value.length : 0
  );

  // Variant-specific styling with improved contrast
  const variantClasses = {
    default: 'bg-white border border-neutral-600/30 focus:border-primary focus:ring-2 focus:ring-primary/10',
    filled: 'bg-neutral-100 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10',
    outlined: 'bg-transparent border border-neutral-600/30 focus:border-primary focus:ring-2 focus:ring-primary/10',
    minimal: 'bg-transparent border-b border-neutral-600/30 rounded-none focus:border-primary focus:ring-0',
  };

  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

  // Handle value change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    setCharacterCount(newValue.length);
    
    if (onChange) {
      onChange(e);
    }
  };

  // Handle focus state
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    if (onFocus) onFocus(e);
  };

  // Handle blur state
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  // Clear input value
  const handleClear = () => {
    setLocalValue('');
    setCharacterCount(0);
    
    // Create a synthetic event to pass to onChange
    const syntheticEvent = {
      target: { value: '', name: props.name || '' },
    } as React.ChangeEvent<HTMLInputElement>;
    
    if (onChange) {
      onChange(syntheticEvent);
    }
  };

  // Common input classes with improved text contrast
  const inputClasses = `
    block w-full px-4 py-3 rounded-lg text-neutral-900 placeholder:text-neutral-500
    appearance-none transition-all duration-300
    disabled:opacity-60 disabled:cursor-not-allowed
    ${error ? 'border-danger focus:border-danger focus:ring-danger/20' : variantClasses[variant]}
    ${leftIcon ? 'pl-11' : ''}
    ${rightIcon || clearable || iconButton ? 'pr-11' : ''}
    ${className}
  `;

  // Component to render
  const InputComponent = () => (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-auto'}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className={`block text-sm font-medium mb-2 transition-colors ${
            focused ? 'text-primary' : 'text-neutral-800'
          } ${error ? 'text-danger' : ''}`}
        >
          {label}
          {required && <span className="text-danger ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          value={localValue}
          maxLength={maxLength}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">
          {clearable && localValue && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Clear input"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          
          {iconButton && (
            <div className="text-neutral-700">{iconButton}</div>
          )}
          
          {rightIcon && !iconButton && (
            <div className="text-neutral-600">{rightIcon}</div>
          )}
        </div>
      </div>
      
      <div className="mt-1.5 flex justify-between items-center min-h-[1.25rem]">
        {/* Error or helper text */}
        {error ? (
          <p className="text-sm text-danger" id={`${inputId}-error`}>{error}</p>
        ) : helperText ? (
          <p className="text-sm text-neutral-600" id={`${inputId}-helper`}>{helperText}</p>
        ) : <span></span>}
        
        {/* Character count */}
        {showCount && maxLength && (
          <p className={`text-xs ${
            characterCount > maxLength * 0.8 
              ? characterCount >= maxLength 
                ? 'text-danger' 
                : 'text-warning' 
              : 'text-neutral-600'
          }`}>
            {characterCount}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );

  // Wrap with motion if animateIn is true
  if (animateIn) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <InputComponent />
      </motion.div>
    );
  }

  return <InputComponent />;
});

Input.displayName = 'Input';

export default Input; 