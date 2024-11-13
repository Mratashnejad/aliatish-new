'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaChartLine, FaUserCheck } from 'react-icons/fa';
import Head from 'next/head'; // Import Head from next/head for SEO

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function SEOService() {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>
                    SEO Optimization - Ali Atish | Full Stack Developer
                </title>
                <meta
                    name="description"
                    content="Enhance your website's visibility with Ali Atish's SEO optimization services. From fast page load times to user-centric strategies, boost your site's organic traffic and search engine rankings."
                />
                <meta
                    name="keywords"
                    content="SEO Optimization, Search Engine Optimization, Web Development, Organic Traffic, SEO Best Practices, Fast Load Times, User-Centric Strategies, Ali Atish"
                />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Tags for Social Sharing */}
                <meta
                    property="og:title"
                    content="SEO Optimization Services by Ali Atish"
                />
                <meta
                    property="og:description"
                    content="Discover professional SEO optimization services by Ali Atish, enhancing page speed, content structure, and more to improve search engine rankings and drive organic traffic."
                />
                <meta
                    property="og:url"
                    content="https://aliatish.com/services/seo-optimization"
                />
                <meta
                    property="og:image"
                    content="https://aliatish.com/images/seo-optimization-preview.jpg" // Replace with actual image URL
                />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="SEO Optimization - Ali Atish"
                />
                <meta
                    name="twitter:description"
                    content="Boost your website's performance with SEO optimization services by Ali Atish. Enhance load times, content structure, and more for better search engine rankings."
                />
                <meta
                    name="twitter:image"
                    content="https://aliatish.com/images/seo-optimization-preview.jpg" // Replace with actual image URL
                />

                {/* Canonical URL to Prevent Duplicate Content */}
                <link
                    rel="canonical"
                    href="https://aliatish.com/services/seo-optimization"
                />

                {/* Structured Data for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'http://schema.org',
                        '@type': 'Service',
                        serviceType: 'SEO Optimization',
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
                            'Improve search engine rankings and drive organic traffic with professional SEO optimization services from Ali Atish.',
                        url: 'https://aliatish.com/services/seo-optimization',
                    })}
                </script>
            </Head>

            <motion.section
                initial="hidden"
                animate="visible"
                className="dark:bg-black text-gray-800 dark:text-gray-200 py-1"
            >
                <div>
                    <motion.div
                        className="dark:bg-black py-12 px-8"
                        variants={containerVariants}
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl font-bold mb-8 text-gray-900 dark:text-yellow-700 text-center"
                        >
                            SEO Optimization
                        </motion.h1>
                        <motion.p
                            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center px-4"
                            variants={itemVariants}
                        >
                            I implement best SEO practices, including fast page
                            load times, well-structured content, and optimized
                            Next.js configurations, to enhance visibility and
                            drive organic traffic.
                        </motion.p>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col items-center text-center"
                            >
                                <FaRocket
                                    size={50}
                                    className="text-blue-500 mb-2"
                                />
                                <p className="text-lg font-medium">
                                    Fast Load Times
                                </p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col items-center text-center"
                            >
                                <FaCode
                                    size={50}
                                    className="text-blue-500 mb-2"
                                />
                                <p className="text-lg font-medium">
                                    Well-Structured Content
                                </p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col items-center text-center"
                            >
                                <FaChartLine
                                    size={50}
                                    className="text-blue-500 mb-2"
                                />
                                <p className="text-lg font-medium">
                                    Optimized Analytics
                                </p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col items-center text-center"
                            >
                                <FaUserCheck
                                    size={50}
                                    className="text-blue-500 mb-2"
                                />
                                <p className="text-lg font-medium">
                                    User-Centric Strategies
                                </p>
                            </motion.div>
                        </div>

                        <h2 className="text-2xl font-semibold mb-2 text-center">
                            Why SEO Matters
                        </h2>
                        <motion.p
                            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center px-4"
                            variants={itemVariants}
                        >
                            SEO is crucial for enhancing the visibility of your
                            website in search engines. By optimizing various
                            aspects of your site, you not only improve your
                            rankings but also enhance user experience, leading
                            to higher engagement and conversion rates.
                            Implementing effective SEO strategies ensures that
                            your target audience can find you easily, thereby
                            driving organic traffic and achieving your business
                            goals.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}
