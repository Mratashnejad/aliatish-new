'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaArrowRight,
    FaDatabase,
    FaReact,
    FaMobileAlt,
    FaServer,
} from 'react-icons/fa';
import {
    SiGraphql,
    SiPostgresql,
    SiTailwindcss,
    SiRedis,
} from 'react-icons/si';
import { OrderButton } from '@/components/order-button';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            duration: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function WebApplicationsPage() {
    return (
        <>
            {/* Web Application Development Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className=" dark:bg-black text-gray-800 dark:text-gray-200 py-1"
            >
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div 
                        className="dark:bg-gray-900 rounded-lg p-12 flex flex-col lg:flex-row lg:items-start"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="lg:w-2/3" variants={itemVariants}>
                            <motion.h3 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                                Web Application Development
                            </motion.h3>
                            <motion.p 
                                className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                                variants={itemVariants}
                            >
                                Web applications are the backbone of modern
                                digital experiences, providing fast, reliable,
                                and scalable solutions. I create robust,
                                high-performance web applications tailored to
                                meet your business's unique needs.
                            </motion.p>

                            {/* Tech Stack Highlight Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        <FaReact className="text-blue-600 mr-3" /> Built with Next.js
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        Seamlessly integrating server-side
                                        rendering (SSR) and static site
                                        generation (SSG), Next.js enables highly
                                        performant, SEO-friendly applications
                                        that enhance user experience and
                                        visibility.
                                    </p>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        <SiPostgresql className="text-blue-500 mr-3" /> PostgreSQL: Robust & Scalable
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        PostgreSQL ensures data integrity,
                                        scalability, and reliability, providing
                                        a strong foundation for applications
                                        that handle complex queries and
                                        large-scale transactions.
                                    </p>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        <SiTailwindcss className="text-teal-500 mr-3" /> Tailwind CSS for Modern Design
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        With Tailwind CSS, I build sleek,
                                        responsive interfaces optimized for
                                        mobile, tablet, and desktop, focusing on
                                        delivering visually stunning,
                                        user-friendly experiences.
                                    </p>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        <SiRedis className="text-red-600 mr-3" /> Redis: Blazing Fast Caching
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        Redis boosts performance by caching
                                        frequently accessed data, reducing load
                                        times and improving the overall response
                                        time of the web application.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Benefits Section */}
                            <motion.div className="mt-12" variants={itemVariants}>
                                <h4 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                                    Why Choose My Web Application Services
                                </h4>
                                <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-4">
                                    <li className="flex items-start">
                                        <FaMobileAlt className="text-green-600 mr-3" /> High-performance, scalable applications optimized for speed.
                                    </li>
                                    <li className="flex items-start">
                                        <FaServer className="text-yellow-600 mr-3" /> SEO-friendly development to improve online visibility.
                                    </li>
                                    <li className="flex items-start">
                                        <FaMobileAlt className="text-teal-500 mr-3" /> Modern, responsive design tailored for all devices.
                                    </li>
                                    <li className="flex items-start">
                                        <SiGraphql className="text-pink-500 mr-3" /> Efficient data fetching with GraphQL for faster performance.
                                    </li>
                                    <li className="flex items-start">
                                        <FaDatabase className="text-red-600 mr-3" /> Incorporating Redis for enhanced caching and performance.
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-blue-600 mr-3" /> Secure authentication and authorization solutions.
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Pricing Section */}
            <motion.section 
                className="bg-white dark:bg-black py-16"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.h3 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Pricing Plans
                    </motion.h3>
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Basic Plan */}
                        <motion.div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8" variants={itemVariants}>
                            <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Basic
                            </h4>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Perfect for small projects or startups looking
                                to establish their online presence.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-3 mb-6">
                                <li>Up to 5 Pages</li>
                                <li>Responsive Design</li>
                                <li>Basic SEO Optimization</li>
                                <li>Contact Form Integration</li>
                                <li>Email Support</li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                $290
                            </div>
                            <OrderButton className="bg-blue-600 text-white py-3 px-8 rounded-lg w-full hover:bg-blue-700 transition-all">
                                Choose Basic
                            </OrderButton>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8 transform scale-105" variants={itemVariants}>
                            <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Pro
                            </h4>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Ideal for growing businesses looking for more
                                features and customization.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-3 mb-6">
                                <li>Up to 10 Pages</li>
                                <li>Advanced SEO Optimization</li>
                                <li>CMS Integration</li>
                                <li>Custom Animations</li>
                                <li>Email & Chat Support</li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                $900
                            </div>
                            <OrderButton className="bg-teal-500 text-white py-3 px-8 rounded-lg w-full hover:bg-teal-600 transition-all">
                                Choose Pro
                            </OrderButton>
                        </motion.div>

                        {/* Premium Plan */}
                        <motion.div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8" variants={itemVariants}>
                            <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Premium
                            </h4>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Best for businesses that need a fully
                                customized, high-performance application.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-3 mb-6">
                                <li>Unlimited Pages</li>
                                <li>Full Customization</li>
                                <li>API Integration</li>
                                <li>Advanced Animations & Features</li>
                                <li>Priority Support</li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                $2900
                            </div>
                            <OrderButton className="bg-purple-600 text-white py-3 px-8 rounded-lg w-full hover:bg-purple-700 transition-all">
                                Choose Premium
                            </OrderButton>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}
