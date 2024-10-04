import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PathButton } from '@/components/Path-button';
import Image from 'next/image';
// import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

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

export default function ServicesPage() {
    const t = useTranslations('ServicesPage');
    return (
        <>
            {/* Introduction to Other Services */}

            {/* Web Application Design Section */}
            <section className="max-w-full dark:bg-gradient-to-r dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div
                        className="dark:bg-black p-8 flex flex-col lg:flex-row lg:items-center justify-between transition-transform transform "
                        // variants={containerVariants}
                        // initial="hidden"
                        // animate="visible"
                    >
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                                {t('title')}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                {t('saasWebApplication.title')}
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 mb-4">
                                {t('saasWebApplication.description')}
                            </p>
                            <p className="text-red-900 dark:text-red-800 mb-4">
                                {t('saasWebApplication.features.feature1')}{' '}
                                {t('saasWebApplication.features.feature2')}{' '}
                                {t('saasWebApplication.features.feature3')}
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            <div
                            // variants={itemVariants}
                            >
                                <Image
                                    src="/images/saas.png"
                                    height={400}
                                    width={400}
                                    alt="SaaS software as a service"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-right mt-6">
                        <PathButton
                            className="inline-flex items-center bg-transparent text-blue-800 dark:text-blue-400 py-3 px-8 rounded-lg hover:text-blue-500 dark:hover:text-blue-300"
                            path="/services/webapplications"
                        >
                            Learn More ... <FaArrowRight className="ml-3" />
                        </PathButton>
                    </div>
                </div>
            </section>

            {/* UI/UX Design Section */}
            <section className="max-w-full bg-white dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div
                        className="dark:bg-black p-8 rounded-lg flex flex-col lg:flex-row lg:items-center justify-between"
                        // initial="hidden"
                        // whileInView={'visible'}
                        // variants={containerVariants}
                        // viewport={{ once: true }}
                    >
                        <div className="lg:w-1/3">
                            <div
                            // initial={{ opacity: 0, scale: 0.8 }}
                            // animate={{ opacity: 1, scale: 1 }}
                            // transition={{ duration: 0.5 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                            >
                                <Image
                                    src="/images/uiux.png"
                                    height={400}
                                    width={400}
                                    alt="UI/UX design"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                                {t('uiuxDesign.title')}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                {t('uiuxDesign.description')}
                            </p>
                            <p className="text-red-900 dark:text-red-800 mb-4">
                                {t('uiuxDesign.features.feature1')}{' '}
                                {t('uiuxDesign.features.feature2')}{' '}
                                {t('uiuxDesign.features.feature3')}{' '}
                            </p>
                        </div>
                    </div>

                    <div className="text-right mt-4">
                        <PathButton
                            className="inline-flex items-center bg-transparent text-blue-800 dark:text-blue-400 py-3 px-8 rounded-lg hover:text-blue-500 dark:hover:text-blue-300"
                            path="/services/design"
                        >
                            Learn More ... <FaArrowRight className="ml-3" />
                        </PathButton>
                    </div>
                </div>
            </section>

            {/* SEO Optimization Section */}
            <section className="max-w-full bg-white dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div
                        className="dark:bg-black p-8 rounded-lg flex flex-col lg:flex-row lg:items-center justify-between"
                        // initial="hidden"
                        // whileInView={'visible'}
                        // variants={containerVariants}
                        // viewport={{ once: true }}
                    >
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                                {t('seoOptimization.title')}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                {t('seoOptimization.description')}
                            </p>
                            <p className="text-red-900 dark:text-red-800 mb-4">
                                {t('seoOptimization.features.feature1')}{' '}
                                {t('seoOptimization.features.feature2')}{' '}
                                {t('seoOptimization.features.feature3')}{' '}
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            <div
                            // initial={{ opacity: 0, scale: 0.8 }}
                            // animate={{ opacity: 1, scale: 1 }}
                            // transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src="/images/seo.png"
                                    height={400}
                                    width={400}
                                    alt="SEO optimization"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-right mt-4">
                        <PathButton
                            className="inline-flex items-center bg-transparent text-blue-800 dark:text-blue-400 py-3 px-8 rounded-lg hover:text-blue-500 dark:hover:text-blue-300"
                            path="/services/seo"
                        >
                            Learn More ... <FaArrowRight className="ml-3" />
                        </PathButton>
                    </div>
                </div>
            </section>
            {/* < section className="max-w-full dark:bg-gradient-to-r dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    < h2
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
                    >
                        Other Services
                    </ h2>
                    < p
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                        className="text-lg text-gray-700 dark:text-gray-400 mb-6 text-center"
                    >
                        we provide a range of specialized services designed to meet your unique needs:
                    </ p>
                    < ul
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-lg text-gray-700 dark:text-gray-400 mb-6 text-center "
                    >
                        <div className=''>✅ Applications for the US Lottery</div>
                        <li>✅ US NEWS Excel files of university rankings</li>
                        <li>✅ Facilitating payments with MasterCard for educational institutions and platforms outside Iran</li>
                        
                    </ ul>
                    
                </div> */}
            <section
                id="ai-ml"
                className="py-16 bg-zinc-50 text-gray-800 dark:bg-black dark:text-white"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Other Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white cursor-pointer">
                            <h3 className="text-2xl font-semibold mb-4">
                                US NEWS EXCEL FILES
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                We Provide all the USA Universities Data by US
                                news Ranks Updated every year
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white cursor-pointer ">
                            <h3 className="text-2xl font-semibold mb-4">
                                USA Lottory Form
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                We providing the fastest and more accurate
                                lottory form for you
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-900 dark:text-white  cursor-pointer">
                            <h3 className="text-2xl font-semibold mb-4">
                                Payment Facilitation
                            </h3>
                            <p className="text-gray-600 dark:text-white">
                                Assist in making payments with MasterCard for
                                educational platforms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="text-right mt-4">
                    <PathButton
                        className="inline-flex items-center bg-transparent text-blue-800 dark:text-blue-400 py-3 px-8 rounded-lg hover:text-blue-500 dark:hover:text-blue-300"
                        path="/services/other"
                    >
                        Learn More ... <FaArrowRight className="ml-3" />
                    </PathButton>
                </div> */}
            </section>
        </>
    );
}
