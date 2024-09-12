import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { OrderButton } from '@/components/order-button';
import { FaArrowRight } from 'react-icons/fa';

export default function ServicesPage() {
    const t = useTranslations('ServicesPage');

    return (
        <section className="min-h-screen bg-gray-100 dark:bg-zinc-950 flex flex-col items-center justify-center text-gray-800 dark:text-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
                    {t('title')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Service 1 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Web Design
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Crafting visually stunning and user-friendly websites tailored to your brand and audience.
                        </p>
                        <ul className="list-disc list-inside mb-6">
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-teal-500 mr-2" />
                                Custom Layouts
                            </li>
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-teal-500 mr-2" />
                                Responsive Design
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-teal-500 mr-2" />
                                SEO Optimization
                            </li>
                        </ul>
                    </div>
                    {/* Service 2 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            App Development
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Developing robust and scalable applications that enhance user experience and engagement.
                        </p>
                        <ul className="list-disc list-inside mb-6">
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-teal-500 mr-2" />
                                Cross-Platform Solutions
                            </li>
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-teal-500 mr-2" />
                                API Integration
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-teal-500 mr-2" />
                                User-Centric Design
                            </li>
                        </ul>
                    </div>
                    {/* Service 3 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Digital Marketing
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Leveraging modern marketing techniques to boost your online presence and drive conversions.
                        </p>
                        <ul className="list-disc list-inside mb-6">
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-teal-500 mr-2" />
                                Social Media Management
                            </li>
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-teal-500 mr-2" />
                                Content Creation
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-teal-500 mr-2" />
                                PPC Advertising
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <OrderButton className="flex items-center justify-center bg-orange-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                        Get in Touch <FaArrowRight className="ml-3" />
                    </OrderButton>
                </div>
            </div>
        </section>
    );
}
