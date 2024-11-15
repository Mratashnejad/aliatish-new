import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PathButton } from '@/components/Path-button';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function ServicesPage() {
    const t = useTranslations('ServicesPage');
    const l = useTranslations('linkButtons');
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Services - Ali Atish | Full Stack Developer</title>
                <meta
                    name="description"
                    content="Explore the services offered by Ali Atish, a Full Stack Developer, including web application design, UI/UX design, and SEO optimization."
                />
                <meta
                    name="keywords"
                    content="Web Application Design, UI/UX Design, SEO Optimization, Full Stack Developer, Ali Atish"
                />
                <meta name="robots" content="index, follow" />
                {/* Open Graph Tags for Social Sharing */}
                <meta
                    property="og:title"
                    content="Services Offered by Ali Atish"
                />
                <meta
                    property="og:description"
                    content="Discover professional services including web application development, UI/UX design, and SEO optimization tailored to your needs."
                />
                <meta
                    property="og:url"
                    content="https://aliatish.com/services"
                />
                <meta
                    property="og:image"
                    content="https://aliatish.com/images/services-preview.jpg"
                />{' '}
                {/* Update with actual image URL */}
                <meta property="og:type" content="website" />
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Services Offered by Ali Atish"
                />
                <meta
                    name="twitter:description"
                    content="Professional services including web application design, UI/UX, and SEO optimization."
                />
                <meta
                    name="twitter:image"
                    content="https://aliatish.com/images/services-preview.jpg"
                />{' '}
                {/* Update with actual image URL */}
                {/* Canonical URL to Prevent Duplicate Content */}
                <link rel="canonical" href="https://aliatish.com/services" />
                {/* Structured Data for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'http://schema.org',
                        '@type': 'Service',
                        serviceType: 'Web Development Services',
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
                            'Explore services like web application development, UI/UX design, and SEO optimization.',
                        url: 'https://aliatish.com/services',
                    })}
                </script>
            </Head>

            {/* Web Application Design Section */}
            <section className="max-w-full dark:bg-gradient-to-r dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div className="dark:bg-black p-8 flex flex-col lg:flex-row lg:items-center justify-between transition-transform transform ">
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
                                {t('saasWebApplication.features.feature1')}
                                {', '}
                                {t('saasWebApplication.features.feature2')}
                                {', '}
                                {t('saasWebApplication.features.feature3')}
                                {', '}
                                {t('saasWebApplication.features.feature4')}
                                {', '}
                                {t('saasWebApplication.features.feature5')}
                                {', '}
                                {t('saasWebApplication.features.feature6')}
                                {', '}
                                {t('saasWebApplication.features.feature7')}
                                {', '}
                                {t('saasWebApplication.features.feature8')}
                                {', '}
                                {t('saasWebApplication.features.feature9')}
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            <div>
                                <Image
                                    src="/images/Programming.webp"
                                    height={400}
                                    width={400}
                                    alt="AliAiths - Website Programming - Web development"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-right mt-6">
                        <PathButton
                            className="inline-flex items-center bg-transparent text-blue-800 dark:text-blue-400 py-3 px-8 rounded-lg hover:text-blue-500 dark:hover:text-blue-300"
                            path="/services/webapplications"
                        >
                            {l('linbuttonText')}
                            <FaArrowRight className="ml-3" />
                        </PathButton>
                    </div>
                </div>
            </section>

            {/* UI/UX Design Section */}
            <section className="max-w-full bg-white dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div className="dark:bg-black p-8 rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="lg:w-1/3">
                            <div>
                                <Image
                                    src="/images/uiux.webp"
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
                                {t('uiuxDesign.features.feature1')}
                                {', '}
                                {t('uiuxDesign.features.feature2')}
                                {', '}
                                {t('uiuxDesign.features.feature3')}
                                {', '}
                                {t('uiuxDesign.features.feature4')}
                                {', '}
                                {t('uiuxDesign.features.feature5')}
                                {', '}
                                {t('uiuxDesign.features.feature6')}
                                {', '}
                                {t('uiuxDesign.features.feature7')}
                                {', '}
                                {t('uiuxDesign.features.feature8')}
                                {', '}
                                {t('uiuxDesign.features.feature9')}{' '}
                            </p>
                        </div>
                    </div>

                    <div className="text-right mt-4">
                        <PathButton
                            className="inline-flex items-center bg-transparent text-blue-800 dark:text-blue-400 py-3 px-8 rounded-lg hover:text-blue-500 dark:hover:text-blue-300"
                            path="/services/design"
                        >
                            {l('linbuttonText')}
                            <FaArrowRight className="ml-3" />
                        </PathButton>
                    </div>
                </div>
            </section>

            {/* SEO Optimization Section */}
            <section className="max-w-full bg-white dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div className="dark:bg-black p-8 rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                                {t('seoOptimization.title')}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                {t('seoOptimization.description')}
                            </p>
                            <p className="text-red-900 dark:text-red-800 mb-4">
                                {t('seoOptimization.features.feature1')}
                                {', '}
                                {t('seoOptimization.features.feature2')}
                                {', '}
                                {t('seoOptimization.features.feature3')}
                                {', '}
                                {t('seoOptimization.features.feature4')}
                                {', '}
                                {t('seoOptimization.features.feature5')}
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            <div>
                                <Image
                                    src="/images/seo.webp"
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
                            {l('linbuttonText')}
                            <FaArrowRight className="ml-3" />
                        </PathButton>
                    </div>
                </div>
            </section>

            {/* Multi Language Section */}
            <section className="max-w-full bg-white dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div className="dark:bg-black p-8 rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="lg:w-1/3">
                            <div>
                                <Image
                                    src="/images/Multilang.webp"
                                    height={400}
                                    width={400}
                                    alt="Multi Language Website Development"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                                {t('multiLanguage.title')}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                {t('multiLanguage.description')}
                            </p>
                            <p className="text-red-900 dark:text-red-800 mb-4">
                                {t('multiLanguage.features.feature1')}
                                {', '}
                                {t('multiLanguage.features.feature2')}
                                {', '}
                                {t('multiLanguage.features.feature3')}
                                {', '}
                                {t('multiLanguage.features.feature4')}
                                {', '}
                                {t('multiLanguage.features.feature5')}
                                {', '}
                                {t('multiLanguage.features.feature6')}
                                {', '}
                                {t('multiLanguage.features.feature7')}
                                {', '}
                                {t('multiLanguage.features.feature8')}
                                {', '}
                                {t('multiLanguage.features.feature9')}{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
