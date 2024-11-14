import React from 'react';
import SquishyCard from '@/components/packagesCard';
import Head from 'next/head';

const PackagesPage: React.FC = () => {
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

            <section className="py-28 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Our Services & Flexible Packages
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Web Design Package */}
                        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Website Design
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Create a beautiful, functional website with
                                modern design principles. Tailored to your brand
                                and audience.
                            </p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Starting at $299
                            </p>
                            <ul className="text-gray-700 dark:text-gray-300 mb-4">
                                <li>Responsive Design</li>
                                <li>SEO Optimized</li>
                                <li>Custom Graphics</li>
                                <li>Fast Loading Speed</li>
                            </ul>
                            <div className="mt-auto">
                                <button
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                                    aria-label="Contact Us for More Services"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* SEO Package */}
                        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                SEO Optimization
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Improve your website’s visibility and search
                                engine rankings to attract more traffic.
                            </p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Starting at $499
                            </p>
                            <ul className="text-gray-700 dark:text-gray-300 mb-4">
                                <li>Keyword Research</li>
                                <li>On-Page SEO</li>
                                <li>Link Building</li>
                                <li>Monthly Reports</li>
                            </ul>
                            <div className="mt-auto">
                                <button
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                                    aria-label="Contact Us for More Services"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* Web Application Development */}
                        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Web Application
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Build powerful, scalable web applications with
                                dynamic functionality for your business.
                            </p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Starting at $799
                            </p>
                            <ul className="text-gray-700 dark:text-gray-300 mb-4">
                                <li>Custom Development</li>
                                <li>API Integration</li>
                                <li>Real-time Features</li>
                                <li>Secure Architecture</li>
                            </ul>
                            <div className="mt-auto">
                                <button
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                                    aria-label="Contact Us for More Services"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* UI/UX Design */}
                        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                UI/UX Design
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Enhance user engagement with intuitive
                                interfaces and seamless user experiences.
                            </p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Starting at $399
                            </p>
                            <ul className="text-gray-700 dark:text-gray-300 mb-4">
                                <li>Prototyping</li>
                                <li>Wireframing</li>
                                <li>User Testing</li>
                                <li>Responsive Design</li>
                            </ul>
                            <div className="mt-auto">
                                <button
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                                    aria-label="Contact Us for More Services"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* Multi-language Support */}
                        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Multi-language Support
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Expand your reach by offering your website in
                                multiple languages to cater to global audiences.
                            </p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Starting at $299
                            </p>
                            <ul className="text-gray-700 dark:text-gray-300 mb-4">
                                <li>Translation Services</li>
                                <li>Automatic Language Switching</li>
                                <li>Multi-region SEO</li>
                                <li>Custom Language Packs</li>
                            </ul>
                            <button
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                                aria-label="Get Started with Multi-language Support"
                            >
                                Get Started
                            </button>
                        </div>

                        {/* More Services */}
                        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                And More...
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                If you need something more specific, feel free
                                to reach out for a custom quote.
                            </p>
                            <div className="mt-auto">
                                <button
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                                    aria-label="Contact Us for More Services"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PackagesPage;
