import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PathButton } from '@/components/Path-button';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Web Development Services, UI/UX Design & SEO Services',
    description:
        "Explore Ali Atish's comprehensive web development services, including custom website programming with Next.js & Node.js, UI/UX design with Tailwind CSS, SEO optimization for search engines, and multi-language website development for global reach.",
    keywords:
        'web development, custom website programming, Next.js, Node.js, Nest.js, React.js, PostgreSQL, MongoDB, GraphQL, Redis, API integration, UI/UX design, Tailwind CSS, Figma, Framer, SEO optimization, multi-language websites, international websites, website design, Google Search Console, SEO services, web design services',
};

export default function ServicesPage() {
    const t = useTranslations('ServicesPage');
    const l = useTranslations('linkButtons');
    return (
        <>
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
