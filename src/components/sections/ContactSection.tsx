import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FlameAnimation from '../animations/FlameAnimation';
import { useEffect } from 'react';

// Define the form validation schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // In a real implementation, you would send this data to an API
    // For now, we'll simulate a successful submission after a short delay
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 10px rgba(255, 59, 48, 0.3)',
      borderColor: 'rgba(255,59,48,0.5)',
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-black z-0">
        <div 
          className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/50 to-transparent"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Let's Build Something <span className="fire-text">Legendary</span>
            </h2>
            
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to start your project? Reach out to us and let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div 
              className="lg:col-span-2 flex flex-col justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <p className="flex items-center text-white/80">
                    <span className="w-8">📧</span>
                    <span>info@aliatish.com</span>
                  </p>
                  <p className="flex items-center text-white/80">
                    <span className="w-8">📱</span>
                    <span>+1 (555) 123-4567</span>
                  </p>
                  <p className="flex items-center text-white/80">
                    <span className="w-8">📍</span>
                    <span>San Francisco, CA</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <FlameAnimation size="md" className="mx-auto opacity-60" />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3 glass-panel p-8 rounded-xl"
              variants={containerVariants}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6"
                variants={itemVariants}
              >
                Send Us a Message
              </motion.h3>
              
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-green-500/20 text-green-200 border border-green-500/30"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-white/70 mb-2 text-sm">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      } rounded-lg focus:outline-none`}
                      placeholder="Your name"
                      whileFocus="focus"
                      variants={inputVariants}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-white/70 mb-2 text-sm">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } rounded-lg focus:outline-none`}
                      placeholder="Your email"
                      whileFocus="focus"
                      variants={inputVariants}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
                    )}
                  </motion.div>
                </div>
                
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="subject" className="block text-white/70 mb-2 text-sm">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 bg-black/50 border ${
                      errors.subject ? 'border-red-500' : 'border-white/10'
                    } rounded-lg focus:outline-none`}
                    placeholder="What's this about?"
                    whileFocus="focus"
                    variants={inputVariants}
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>
                  )}
                </motion.div>
                
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="message" className="block text-white/70 mb-2 text-sm">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 bg-black/50 border ${
                      errors.message ? 'border-red-500' : 'border-white/10'
                    } rounded-lg resize-none focus:outline-none`}
                    placeholder="Tell us about your project..."
                    whileFocus="focus"
                    variants={inputVariants}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>
                  )}
                </motion.div>
                
                <motion.div 
                  className="text-right"
                  variants={itemVariants}
                >
                  <motion.button
                    type="submit"
                    className="btn-fire"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 