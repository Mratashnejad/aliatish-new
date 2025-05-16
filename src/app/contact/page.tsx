'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.enum(['enterprise', 'ecommerce', 'dashboard', 'api', 'other'], {
    errorMap: () => ({ message: 'Please select a project type' }),
  }),
  budget: z.enum(['10k-25k', '25k-50k', '50k-100k', '100k+'], {
    errorMap: () => ({ message: 'Please select a budget range' }),
  }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      projectType: 'other',
      budget: '25k-50k'
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Handle form submission (in a real app, you would send this to your backend)
    console.log('Form submitted:', data);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 mix-blend-multiply blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Let's <span className="text-primary">Connect</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral/80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a project in mind? We'd love to hear from you. 
              Fill out the form below and we'll get back to you as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact form section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sticky top-24"
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-2">Email Us</h3>
                    <a href="mailto:contact@aliatish.com" className="text-neutral/80 hover:text-primary transition-colors">
                      contact@aliatish.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-2">Call Us</h3>
                    <a href="tel:+1234567890" className="text-neutral/80 hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-2">Office Location</h3>
                    <address className="text-neutral/80 not-italic">
                      123 Innovation Avenue<br />
                      Tech District<br />
                      San Francisco, CA 94103
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-2">Working Hours</h3>
                    <p className="text-neutral/80">
                      Monday - Friday: 9AM - 6PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-neutral/80 hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </a>
                      <a href="#" className="text-neutral/80 hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-1.863-.607-3.493-1.126-5.839-1.126-1.286 0-2.845.236-4.602.701v-.389c.774-.27 1.624-.951 1.624-1.854 0-.546-.142-1.084-.278-1.608-.137-.525-.268-1.018-.268-1.513 0-1.047.703-2.081 2.01-2.081 1.15 0 1.703.903 1.703 1.912 0 1.235-.753 2.65-2.247 4.511.137.018.295.023.468.023 2.666 0 4.721-2.149 4.721-4.885 0-2.708-2.084-4.893-4.722-4.893-2.637 0-4.721 2.185-4.721 4.893 0 2.912 2.136 5.042 5.004 5.042 1.793 0 3.062-.553 3.933-1.076l.435.593z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-neutral/80 hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Contact form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-neutral/80">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          placeholder="Your full name"
                          {...register('name')}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      
                      {/* Email field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          placeholder="Your email address"
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                      
                      {/* Phone field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Your phone number"
                          {...register('phone')}
                        />
                      </div>
                      
                      {/* Company field */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Your company name"
                          {...register('company')}
                        />
                      </div>
                      
                      {/* Project type field */}
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                          Project Type <span className="text-primary">*</span>
                        </label>
                        <select
                          id="projectType"
                          className={`w-full px-4 py-3 bg-white/5 border ${errors.projectType ? 'border-red-500' : 'border-white/10'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          {...register('projectType')}
                        >
                          <option value="enterprise">Enterprise Web Application</option>
                          <option value="ecommerce">E-commerce Solution</option>
                          <option value="dashboard">Business Intelligence Dashboard</option>
                          <option value="api">API Development & Integration</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.projectType && (
                          <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
                        )}
                      </div>
                      
                      {/* Budget field */}
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Budget Range <span className="text-primary">*</span>
                        </label>
                        <select
                          id="budget"
                          className={`w-full px-4 py-3 bg-white/5 border ${errors.budget ? 'border-red-500' : 'border-white/10'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          {...register('budget')}
                        >
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k+">$100,000+</option>
                        </select>
                        {errors.budget && (
                          <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Message field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="Tell us about your project"
                        {...register('message')}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>
                    
                    {/* Submit button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : 'Send Message'}
                      </button>
                    </div>
                    
                    <p className="text-sm text-neutral/60 text-center">
                      By submitting this form, you agree to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden h-96 bg-white/5 border border-white/10">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-purple/5"></div>
              <p className="text-lg font-medium text-neutral/60">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

import Link from 'next/link'; 