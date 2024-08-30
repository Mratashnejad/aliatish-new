import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function PackagesPage() {
    return (
        <section
            id="packages"
            className="w-full min-h-screen py-28 px-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 dark:from-indigo-900 dark:via-purple-800 dark:to-pink-700"
        >
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-white mb-12">Our Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Package 1 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Starter Package</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Ideal for individuals or small projects with essential features and support.
                        </p>
                        <p className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">$299</p>
                        <ul className="list-disc list-inside mb-6">
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-indigo-500 mr-2" />
                                5 Pages Included
                            </li>
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-indigo-500 mr-2" />
                                Basic SEO Setup
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-indigo-500 mr-2" />
                                1 Month Support
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
                        >
                            Get Started
                        </a>
                    </div>
                    {/* Package 2 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Professional Package</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            For growing businesses that need additional features and extended support.
                        </p>
                        <p className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">$599</p>
                        <ul className="list-disc list-inside mb-6">
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-purple-500 mr-2" />
                                10 Pages Included
                            </li>
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-purple-500 mr-2" />
                                Advanced SEO Setup
                            </li>
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-purple-500 mr-2" />
                                3 Months Support
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-purple-500 mr-2" />
                                Blog Integration
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
                        >
                            Choose Plan
                        </a>
                    </div>
                    {/* Package 3 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Premium Package</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            The ultimate package for comprehensive solutions and top-tier support.
                        </p>
                        <p className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">$999</p>
                        <ul className="list-disc list-inside mb-6">
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-pink-500 mr-2" />
                                Unlimited Pages
                            </li>
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-pink-500 mr-2" />
                                Premium SEO Setup
                            </li>
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-pink-500 mr-2" />
                                6 Months Support
                            </li>
                            <li className="flex items-center mb-2">
                                <FaCheckCircle className="text-pink-500 mr-2" />
                                E-commerce Integration
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-pink-500 mr-2" />
                                Custom Features
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-700 transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
