'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaArrowRight,
    FaDatabase,
    FaReact,
    FaMobileAlt,
    FaServer,
    FaShoppingCart,
    FaBriefcase,
    FaRocket,
    FaCrown,
    FaNodeJs,
} from 'react-icons/fa';
import {
    SiGraphql,
    SiPostgresql,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';
import { OrderButton } from '@/components/order-button';
import Image from 'next/image';

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
                <div>
                    <motion.div
                        className="dark:bg-black py-12 px-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <motion.h3 className="text-5xl font-bold mb-8 text-gray-900 dark:text-yellow-700">
                                Web Application Development
                            </motion.h3>
                            <motion.p
                                className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed px-4"
                                variants={itemVariants}
                            >
                                Web applications are the backbone of modern
                                digital experiences, providing fast, reliable,
                                and scalable solutions. I create robust,
                                high-performance web applications tailored to
                                meet your business's unique needs, no matter the
                                size or industry.
                            </motion.p>
                            {/* Packages Benefit Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-8">
                                {/* Basic Package */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center"
                                >
                                    <FaBriefcase
                                        className="text-blue-600 mr-8"
                                        size={70}
                                    />
                                    <div>
                                        <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                            Basic Package: Simple, Effective,
                                            Affordable
                                        </h4>
                                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                            The Basic package is perfect for
                                            personal portfolios or small
                                            business websites. You get up to 5
                                            pages, responsive design, and basic
                                            SEO optimization. It's a
                                            cost-effective way to get a
                                            professional online presence without
                                            the heavy cost.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Pro Package */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center"
                                >
                                    <FaRocket
                                        className="text-yellow-500 mr-8"
                                        size={70}
                                    />
                                    <div>
                                        <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                            Pro Package: Boost Your Business
                                            Online
                                        </h4>
                                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
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
                                    className="flex items-center"
                                >
                                    <FaCrown
                                        className="text-purple-600 mr-8"
                                        size={70}
                                    />
                                    <div>
                                        <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                            Premium Package: Tailored, Scalable,
                                            High-Performance
                                        </h4>
                                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                            The Premium package offers unlimited
                                            pages, full customization, advanced
                                            animations, API integration, and
                                            priority support. It’s designed for
                                            businesses that need a
                                            high-performance web application
                                            with enterprise-level features and
                                            scalability.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Online Shop Package */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center"
                                >
                                    <FaShoppingCart
                                        className="text-orange-600 mr-8"
                                        size={100}
                                    />
                                    <div>
                                        <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                            Online Shop Package: Launch Your
                                            E-Commerce Store
                                        </h4>
                                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
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
                            <motion.div className="py-12">
                                <h4 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
                                    Companies Using Our Technologies
                                </h4>
                                <div className="flex justify-center space-x-8">
                                    <Image
                                        src="/images/logos/Meta-logo.svg"
                                        width={300}
                                        height={1500}
                                        alt="Company 1"
                                        className="h-12"
                                    />
                                    <Image
                                        src="/images/logos/Discord-Logo.svg"
                                        width={200}
                                        height={200}
                                        alt="Company 2"
                                        className="h-12"
                                    />
                                    <Image
                                        src="/images/logos/Airbnb-Logo.svg"
                                        width={200}
                                        height={200}
                                        alt="Company 3"
                                        className="h-12"
                                    />
                                    <Image
                                        src="/images/logos/Reddit-logo.svg"
                                        width={200}
                                        height={200}
                                        alt="Company 4"
                                        className="h-12"
                                    />
                                    <Image
                                        src="/images/logos/Spotify-logo.svg"
                                        width={200}
                                        height={200}
                                        alt="Company 5"
                                        className="h-12"
                                    />
                                    <Image
                                        src="/images/logos/Netflix-logo.svg"
                                        width={200}
                                        height={200}
                                        alt="Company 6"
                                        className="h-12"
                                    />
                                    <Image
                                        src="/images/logos/instagram-logo.svg"
                                        width={200}
                                        height={200}
                                        alt="Company 7"
                                        className="h-12"
                                    />
                                </div>
                            </motion.div>

                            {/* Technologies Used Section */}
                            <div className="gap-2 py-16 px-8">
                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        <FaNodeJs
                                            className="text-green-600 mr-3"
                                            size={70}
                                        />{' '}
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
                                    <h4 className="flex items-center text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        <SiTypescript
                                            className="text-blue-600 mr-3"
                                            size={70}
                                        />{' '}
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

                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        <FaReact
                                            className="text-blue-600 mr-3"
                                            size={70}
                                        />{' '}
                                        Next.js Powered: Blazing Fast
                                        Performance
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        Next.js delivers high-performance,
                                        SEO-friendly applications through its
                                        seamless integration of SSR and SSG,
                                        making your website lightning fast and
                                        easy to maintain.
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        <SiPostgresql
                                            className="text-blue-500 mr-3"
                                            size={70}
                                        />{' '}
                                        PostgreSQL: Secure and Scalable Database
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        PostgreSQL provides secure and scalable
                                        database solutions, excelling in complex
                                        queries and transactions for your web
                                        applications.
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <h4 className="flex items-center text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        <SiTailwindcss
                                            className="text-teal-500 mr-3"
                                            size={70}
                                        />{' '}
                                        Tailwind CSS: A Modern Approach to
                                        Styling
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        With Tailwind CSS, you have complete
                                        control over your styling, allowing you
                                        to create unique and visually appealing
                                        interfaces that enhance user experience
                                        across all devices.
                                    </p>
                                </motion.div>
                            </div>

                            <motion.div
                                className="py-12 mb-16"
                                variants={itemVariants}
                            >
                                <h4 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                                    Why Choose My Web Application Services
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-green-100 p-6 rounded-lg shadow-lg flex items-center">
                                        <FaMobileAlt
                                            className="text-green-600 mr-4 "
                                            size={70}
                                        />
                                        <p className="text-lg text-gray-700 dark:text-black">
                                            High-performance, scalable
                                            applications optimized for speed.
                                        </p>
                                    </div>
                                    <div className="bg-yellow-100 p-6 rounded-lg shadow-lg flex items-center">
                                        <FaServer
                                            className="text-yellow-600 mr-4"
                                            size={70}
                                        />
                                        <p className="text-lg text-gray-700 dark:text-black">
                                            SEO-friendly development to improve
                                            online visibility.
                                        </p>
                                    </div>
                                    <div className="bg-teal-100 p-6 rounded-lg shadow-lg flex items-center">
                                        <FaMobileAlt
                                            className="text-teal-500 mr-4"
                                            size={70}
                                        />
                                        <p className="text-lg text-gray-700 dark:text-black">
                                            Modern, responsive design tailored
                                            for all devices.
                                        </p>
                                    </div>
                                    <div className="bg-pink-100 p-6 rounded-lg shadow-lg flex items-center">
                                        <SiGraphql
                                            className="text-pink-500 mr-4"
                                            size={70}
                                        />
                                        <p className="text-lg text-gray-700 dark:text-black">
                                            Efficient data fetching with GraphQL
                                            for faster performance.
                                        </p>
                                    </div>
                                    <div className="bg-red-100 p-6 rounded-lg shadow-lg flex items-center">
                                        <FaDatabase
                                            className="text-red-600 mr-4"
                                            size={70}
                                        />
                                        <p className="text-lg text-gray-700 dark:text-black">
                                            Incorporating Redis for enhanced
                                            caching and performance.
                                        </p>
                                    </div>
                                    <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex items-center">
                                        <FaArrowRight
                                            className="text-blue-600 mr-4"
                                            size={70}
                                        />
                                        <p className="text-lg text-gray-700 dark:text-black">
                                            Secure authentication and
                                            authorization solutions.
                                        </p>
                                    </div>
                                </div>
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
                        Pricing Packages
                    </motion.h3>
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Basic Plan */}
                        <motion.div
                            className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8"
                            variants={itemVariants}
                        >
                            <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Personal Website
                            </h4>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Perfect for personal portfolios, showcasing your
                                resume, and offering a great view of your social
                                networks, such as LinkedIn and other job
                                recruitment platforms.{' '}
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-3 mb-6">
                                <li>
                                    Up to 5 Pages: Includes essential sections
                                    like Home, About, Resume, Portfolio, and
                                    Contact.
                                </li>
                                <li>
                                    Responsive Design: Ensures your website
                                    looks great on any device, whether desktop,
                                    tablet, or mobile.
                                </li>
                                <li>
                                    Basic SEO Optimization: Improves your
                                    website’s visibility on search engines,
                                    helping potential employers find you easily.
                                </li>
                                <li>
                                    Contact Form Integration: Allows visitors to
                                    get in touch with you directly through your
                                    website.
                                </li>
                                <li>
                                    Email Support: Receive professional
                                    assistance via email for any issues or
                                    updates related to your website.
                                </li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                $290
                            </div>
                            <OrderButton className="bg-blue-600 text-white py-3 px-8 rounded-lg w-full hover:bg-blue-700 transition-all">
                                Choose Package
                            </OrderButton>
                        </motion.div>

                        <motion.div
                            className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8 transform scale-105"
                            variants={itemVariants}
                        >
                            <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Online Shop Package
                            </h4>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Perfect for setting up an online store with
                                essential features to get started quickly.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-3 mb-6">
                                <li>
                                    Shop, Product Details, Terms & Conditions,
                                    FAQ pages
                                </li>
                                <li>
                                    Admin panel for managing products, orders,
                                    and customers
                                </li>
                                <li>
                                    Email authentication for secure user access
                                </li>
                                <li>Up to 3 products added at launch</li>
                                <li>
                                    Integrated payment gateway (PayPal, Stripe)
                                </li>
                                <li>Inventory management system</li>
                                <li>Customer accounts and order tracking</li>
                                <li>
                                    Mobile-friendly design for optimal user
                                    experience
                                </li>
                                <li>
                                    Basic SEO optimization for product
                                    visibility
                                </li>
                                <li>
                                    Email notifications for orders and inquiries
                                </li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                $600
                            </div>
                            <OrderButton className="bg-orange-500 text-white py-3 px-8 rounded-lg w-full hover:bg-orange-600 transition-all">
                                Choose Online Shop
                            </OrderButton>
                        </motion.div>

                        {/* Premium Plan */}
                        <motion.div
                            className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8"
                            variants={itemVariants}
                        >
                            <h4 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Premium
                            </h4>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Best for businesses that need a fully
                                customized, high-performance web application
                                with enterprise-level features.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-3 mb-6">
                                <li>
                                    Unlimited pages tailored to your business
                                    needs
                                </li>
                                <li>
                                    Full customization to match your brand and
                                    functionality
                                </li>
                                <li>
                                    API integration for seamless connections
                                    with third-party services
                                </li>
                                <li>
                                    Advanced animations and interactive features
                                    for a dynamic user experience
                                </li>
                                <li>
                                    Priority support with faster response times
                                </li>
                                <li>
                                    Web application security features (SSL,
                                    authentication, encryption)
                                </li>
                                <li>
                                    High-performance optimization for faster
                                    load times
                                </li>
                                <li>Scalability to grow with your business</li>
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
            {/* Important Notes Section */}
            <motion.div
                className="bg-blue-50 dark:bg-gray-800 p-16 rounded-lg mt-12 border-l-4 border-blue-400"
                variants={itemVariants}
            >
                <div className="flex items-center mb-4">
                    <i className="fas fa-quote-left text-blue-400 text-4xl mr-3"></i>
                    <h4 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        Important Notes
                    </h4>
                </div>
                <ul className="list-none pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-3">
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-400 before:text-xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        All websites are fully responsive, optimized for both
                        desktop and mobile devices.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-400 before:text-xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        SEO, UI/UX Design, and OTP (One-Time Password)
                        Integration are not included.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-400 before:text-xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        Hosting and domain costs are not included.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-400 before:text-xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        Mention if any customization options are available.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-400 before:text-xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        Ongoing website maintenance and updates are available at
                        an additional cost.
                    </li>
                </ul>
            </motion.div>
        </>
    );
}
