'use client'
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const PackagesPage: React.FC = () => {
    // Function to generate the mailto link dynamically
    const createMailtoLink = (subject: string, body: string) => {
        return `mailto:support@aliatish.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
            <Head>
                <title>Our Services & Packages | AliAtish</title>
                <meta
                    name="description"
                    content="Explore our range of flexible packages and services, including Web Design, SEO, Web Development, UI/UX, Multi-language support, and more. Tailored for all types of businesses."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aliatish.com/packages" />
            </Head>

            <section className="py-28 bg-gray-900 dark:bg-black">
                <div className="container mx-auto px-6">
                    {/* Section Title */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-serif font-bold text-center text-white mb-12"
                    >
                        Our Luxurious Services & Flexible Packages
                    </motion.h2>

                    {/* Package Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                        {/* Website Design Package */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-yellow-600 to-orange-500 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <h3 className="text-3xl font-serif font-semibold text-white mb-4">
                                Website Design
                            </h3>
                            <p className="text-gray-200 mb-4">
                                Create a beautiful, functional website with modern design principles. Tailored to your brand and audience.
                            </p>
                            <p className="text-xl font-bold text-white mb-6">
                                Starting at $299
                            </p>
                            <ul className="text-gray-200 mb-4">
                                <li>Responsive Design</li>
                                <li>SEO Optimized</li>
                                <li>Custom Graphics</li>
                                <li>Fast Loading Speed</li>
                            </ul>
                            <div className="mt-auto">
                                <a
                                    href={createMailtoLink(
                                        'Inquiry About Website Design',
                                        'I am interested in your Website Design package, which starts at $299. Here are my requirements:'
                                    )}
                                    className="w-full bg-black text-yellow-500 font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-gray-800 transition duration-200"
                                    aria-label="Contact Us for More Services"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </motion.div>

                        {/* SEO Optimization Package */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-blue-800 to-indigo-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <h3 className="text-3xl font-serif font-semibold text-white mb-4">
                                SEO Optimization
                            </h3>
                            <p className="text-gray-200 mb-4">
                                Improve your website’s visibility and search engine rankings to attract more traffic.
                            </p>
                            <p className="text-xl font-bold text-white mb-6">
                                Starting at $499
                            </p>
                            <ul className="text-gray-200 mb-4">
                                <li>Keyword Research</li>
                                <li>On-Page SEO</li>
                                <li>Link Building</li>
                                <li>Monthly Reports</li>
                            </ul>
                            <div className="mt-auto">
                                <a
                                    href={createMailtoLink(
                                        'Inquiry About SEO Optimization',
                                        'I am interested in your SEO Optimization package, which starts at $499. Here are my website details: '
                                    )}
                                    className="w-full bg-black text-yellow-500 font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-gray-800 transition duration-200"
                                    aria-label="Contact Us for More Services"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </motion.div>

                        {/* Web Application Development */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-purple-800 to-indigo-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <h3 className="text-3xl font-serif font-semibold text-white mb-4">
                                Web Application
                            </h3>
                            <p className="text-gray-200 mb-4">
                                Build powerful, scalable web applications with dynamic functionality for your business.
                            </p>
                            <p className="text-xl font-bold text-white mb-6">
                                Starting at $799
                            </p>
                            <ul className="text-gray-200 mb-4">
                                <li>Custom Development</li>
                                <li>API Integration</li>
                                <li>Real-time Features</li>
                                <li>Secure Architecture</li>
                            </ul>
                            <div className="mt-auto">
                                <a
                                    href={createMailtoLink(
                                        'Inquiry About Web Application Development',
                                        'I am interested in your Web Application Development package, which starts at $799. Here are my application requirements: '
                                    )}
                                    className="w-full bg-black text-yellow-500 font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-gray-800 transition duration-200"
                                    aria-label="Contact Us for More Services"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </motion.div>

                        {/* UI/UX Design */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-pink-600 to-red-500 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <h3 className="text-3xl font-serif font-semibold text-white mb-4">
                                UI/UX Design
                            </h3>
                            <p className="text-gray-200 mb-4">
                                Enhance user engagement with intuitive interfaces and seamless user experiences.
                            </p>
                            <p className="text-xl font-bold text-white mb-6">
                                Starting at $399
                            </p>
                            <ul className="text-gray-200 mb-4">
                                <li>Prototyping</li>
                                <li>Wireframing</li>
                                <li>User Testing</li>
                                <li>Responsive Design</li>
                            </ul>
                            <div className="mt-auto">
                                <a
                                    href={createMailtoLink(
                                        'Inquiry About UI/UX Design',
                                        'I am interested in your UI/UX Design package, which starts at $399. Here are my design requirements: '
                                    )}
                                    className="w-full bg-black text-yellow-500 font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-gray-800 transition duration-200"
                                    aria-label="Contact Us for More Services"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </motion.div>

                        {/* Multi-language Support */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-teal-600 to-green-500 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <h3 className="text-3xl font-serif font-semibold text-white mb-4">
                                Multi-language Support
                            </h3>
                            <p className="text-gray-200 mb-4">
                                Expand your reach by offering your website in multiple languages to cater to global audiences.
                            </p>
                            <p className="text-xl font-bold text-white mb-6">
                                Starting at $299
                            </p>
                            <ul className="text-gray-200 mb-4">
                                <li>Translation Services</li>
                                <li>Automatic Language Switching</li>
                                <li>Multi-region SEO</li>
                                <li>Custom Language Packs</li>
                            </ul>
                            <div className="mt-auto">
                                <a
                                    href={createMailtoLink(
                                        'Inquiry About Multi-language Support',
                                        'I am interested in your Multi-language Support package, which starts at $299. Here are my requirements: '
                                    )}
                                    className="w-full bg-black text-yellow-500 font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-gray-800 transition duration-200"
                                    aria-label="Get Started with Multi-language Support"
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PackagesPage;
