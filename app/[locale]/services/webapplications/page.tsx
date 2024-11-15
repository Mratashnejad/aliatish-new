'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaShoppingCart,
    FaBriefcase,
    FaRocket,
    FaCrown,
    FaNodeJs,
} from 'react-icons/fa';
import {
   
    SiTypescript,
} from 'react-icons/si';
import { OrderButton } from '@/components/order-button';
import Image from 'next/image';
import Head from 'next/head'; // Import Head from next/head for SEO

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
            {/* SEO Meta Tags */}
            <Head>
                <title>
                    Web Application Development - Ali Atish | Full Stack
                    Developer
                </title>
                <meta
                    name="description"
                    content="Explore web application development services offered by Ali Atish, a Full Stack Developer. We create robust, scalable, and high-performance web applications tailored to your business needs."
                />
                <meta
                    name="keywords"
                    content="Web Application Development, Full Stack Developer, Web Development, Scalable Solutions, Custom Applications, Ali Atish"
                />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Tags for Social Sharing */}
                <meta
                    property="og:title"
                    content="Web Application Development - Ali Atish"
                />
                <meta
                    property="og:description"
                    content="Discover custom web application development services by Ali Atish, providing high-performance, scalable solutions tailored for your business."
                />
                <meta
                    property="og:url"
                    content="https://aliatish.com/services/web-application-development"
                />
                <meta
                    property="og:image"
                    content="https://aliatish.com/images/web-app-dev-preview.jpg" // Update with actual image URL for the section
                />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Web Application Development - Ali Atish"
                />
                <meta
                    name="twitter:description"
                    content="Explore professional web application development services by Ali Atish to build scalable, high-performance applications."
                />
                <meta
                    name="twitter:image"
                    content="https://aliatish.com/images/web-app-dev-preview.jpg" // Update with actual image URL for the section
                />

                {/* Canonical URL to Prevent Duplicate Content */}
                <link
                    rel="canonical"
                    href="https://aliatish.com/services/web-application-development"
                />

                {/* Structured Data for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'http://schema.org',
                        '@type': 'Service',
                        serviceType: 'Web Application Development',
                        provider: {
                            '@type': 'Person',
                            name: 'Ali Atish',
                            url: 'https://aliatish.com',
                            sameAs: [
                                'https://www.linkedin.com/in/aliatish',
                                'https://twitter.com/aliatish',
                            ],
                        },
                        description:
                            'Custom web application development services tailored to business needs with high scalability and performance.',
                        url: 'https://aliatish.com/services/web-application-development',
                    })}
                </script>
            </Head>

            {/* Web Application Development Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="dark:bg-black text-gray-800 dark:text-gray-200 py-16"
            >
                <div>
                    <motion.div
                        className="dark:bg-black py-20 px-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <motion.h3 className="text-6xl font-serif font-extrabold mb-10 text-gray-900 dark:text-yellow-400">
                                Web Application Development
                            </motion.h3>
                            <motion.p
                                className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4"
                                variants={itemVariants}
                            >
                                Web applications are the backbone of modern
                                digital experiences, providing fast, reliable,
                                and scalable solutions. I create robust,
                                high-performance web applications tailored to
                                meet your business&apos;s unique needs, no
                                matter the size or industry.
                            </motion.p>
                            {/* Packages Benefit Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-10">
                                {/* Basic Package */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaBriefcase
                                        className="text-yellow-400 mr-10"
                                        size={80}
                                    />
                                    <div>
                                        <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                            Basic Package: Simple, Effective,
                                            Affordable
                                        </h4>
                                        <p className="text-lg text-gray-300 mb-6">
                                            The Basic package is perfect for
                                            personal portfolios or small
                                            business websites. You get up to 5
                                            pages, responsive design, and basic
                                            SEO optimization. It&apos;s a
                                            cost-effective way to get a
                                            professional online presence without
                                            the heavy cost.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Pro Package */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaRocket
                                        className="text-yellow-500 mr-10"
                                        size={80}
                                    />
                                    <div>
                                        <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                            Pro Package: Boost Your Business
                                            Online
                                        </h4>
                                        <p className="text-lg text-gray-300 mb-6">
                                            With the Pro package, you get up to
                                            10 pages, advanced SEO, CMS
                                            integration, and custom animations.
                                            This package is ideal for growing
                                            businesses that need more advanced
                                            features and customization to stand
                                            out from the competition.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Premium Package */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaCrown
                                        className="text-purple-600 mr-10"
                                        size={80}
                                    />
                                    <div>
                                        <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                            Premium Package: Tailored, Scalable,
                                            High-Performance
                                        </h4>
                                        <p className="text-lg text-gray-300 mb-6">
                                            The Premium package offers unlimited
                                            pages, full customization, advanced
                                            animations, API integration, and
                                            priority support. It&apos;s designed
                                            for businesses that need a
                                            high-performance web application
                                            with enterprise-level features and
                                            scalability.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Online Shop Package */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaShoppingCart
                                        className="text-orange-600 mr-10"
                                        size={100}
                                    />
                                    <div>
                                        <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                            Online Shop Package: Launch Your
                                            E-Commerce Store
                                        </h4>
                                        <p className="text-lg text-gray-300 mb-6">
                                            The Online Shop package provides
                                            everything you need to launch a
                                            functional and modern e-commerce
                                            website. This package includes shop,
                                            product, and admin management pages,
                                            integrated payment gateways, and
                                            user authentication. Ideal for
                                            entrepreneurs looking to get started
                                            in the online retail space.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Companies Using Our Technologies Section */}
                            <motion.div className="py-20">
                                <h4 className="text-4xl font-serif font-semibold mb-10 text-center text-gray-900 dark:text-white">
                                    Companies Using Our Technologies
                                </h4>
                                <div className="flex justify-center space-x-12">
                                    {/* Add luxury brand logos */}
                                    <Image
                                        src="/images/logos/Meta-logo.svg"
                                        width={300}
                                        height={100}
                                        alt="Meta"
                                        className="h-16"
                                    />
                                    <Image
                                        src="/images/logos/Discord-Logo.svg"
                                        width={250}
                                        height={100}
                                        alt="Discord"
                                        className="h-16"
                                    />
                                    <Image
                                        src="/images/logos/Airbnb-Logo.svg"
                                        width={250}
                                        height={100}
                                        alt="Airbnb"
                                        className="h-16"
                                    />
                                </div>
                            </motion.div>

                            {/* Technologies Used Section */}
                            <div className="gap-10 py-20 px-10">
                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-4xl font-serif font-semibold mb-6 text-gray-900 dark:text-white">
                                        <FaNodeJs
                                            className="text-green-600 mr-6"
                                            size={80}
                                        />
                                        Node.js: Fast and Scalable
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        Node.js is ideal for back-end
                                        development, offering fast, scalable,
                                        and efficient handling of server-side
                                        processes.
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-4xl font-serif font-semibold mb-6 text-gray-900 dark:text-white">
                                        <SiTypescript
                                            className="text-blue-600 mr-6"
                                            size={80}
                                        />
                                        TypeScript: Reliable and Bug-Free
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        TypeScript ensures more reliable,
                                        maintainable code with its static
                                        typing, helping prevent bugs and
                                        improving the overall development
                                        experience.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                className="bg-gradient-to-r from-gray-800 to-gray-900 py-20"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6 lg:px-16">
                    <motion.h3 className="text-5xl font-extrabold text-center mb-12 text-gray-100 dark:text-white">
                        Pricing Packages
                    </motion.h3>
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Personal Website Plan */}
                        <motion.div
                            className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-2xl rounded-xl p-8 transform transition-all hover:scale-105"
                            variants={itemVariants}
                        >
                            <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                Personal Website
                            </h4>
                            <p className="text-lg text-gray-300 mb-6">
                                Ideal for personal portfolios, showcasing your
                                resume, and highlighting your social presence.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                <li>Up to 5 Pages</li>
                                <li>Responsive Design</li>
                                <li>Basic SEO Optimization</li>
                                <li>Contact Form Integration</li>
                                <li>Email Support</li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                $290
                            </div>
                            <OrderButton className="bg-blue-600 text-white py-3 px-8 rounded-lg w-full hover:bg-blue-700 transition-all">
                                Choose Package
                            </OrderButton>
                        </motion.div>

                        {/* Online Shop Package */}
                        <motion.div
                            className="bg-gradient-to-b from-yellow-500 to-orange-500 shadow-2xl rounded-xl p-8 transform scale-105 transition-all hover:scale-110"
                            variants={itemVariants}
                        >
                            <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                Online Shop Package
                            </h4>
                            <p className="text-lg text-gray-300 mb-6">
                                Perfect for setting up an online store with
                                essential e-commerce features.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                <li>Shop and Product Details Pages</li>
                                <li>Admin Panel Integration</li>
                                <li>Email Authentication</li>
                                <li>Payment Gateway Integration</li>
                                <li>Inventory Management</li>
                                <li>SEO Optimization</li>
                                <li>Mobile-Friendly Design</li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                $600
                            </div>
                            <OrderButton className="bg-orange-600 text-white py-3 px-8 rounded-lg w-full hover:bg-orange-700 transition-all">
                                Choose Online Shop
                            </OrderButton>
                        </motion.div>

                        {/* Premium Plan */}
                        <motion.div
                            className="bg-gradient-to-b from-purple-700 to-purple-900 shadow-2xl rounded-xl p-8 transform transition-all hover:scale-105"
                            variants={itemVariants}
                        >
                            <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                Premium
                            </h4>
                            <p className="text-lg text-gray-300 mb-6">
                                For businesses requiring a high-performance,
                                custom web application with enterprise-level
                                features.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                <li>Unlimited Pages</li>
                                <li>Full Customization</li>
                                <li>API Integration</li>
                                <li>Advanced Animations</li>
                                <li>Priority Support</li>
                                <li>Web App Security Features</li>
                                <li>Performance Optimization</li>
                                <li>Scalable Architecture</li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                $2900
                            </div>
                            <OrderButton className="bg-purple-800 text-white py-3 px-8 rounded-lg w-full hover:bg-purple-900 transition-all">
                                Choose Premium
                            </OrderButton>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Important Notes */}
            <motion.div
                                className="bg-blue-100 dark:bg-gray-800 p-16 rounded-lg mt-12 border-l-8 border-yellow-500"
                                variants={itemVariants}
                            >
                                <h4 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                                    Important Notes:
                                </h4>
                <ul className="list-none pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-4">
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        All websites are fully responsive, optimized for both
                        desktop and mobile devices.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        SEO, UI/UX Design, and OTP (One-Time Password)
                        Integration are not included.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        Hosting and domain costs are not included.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        Mention any customization options if available.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        Ongoing website maintenance and updates are available at
                        an additional cost.
                    </li>
                </ul>
            </motion.div>
        </>
    );
}
