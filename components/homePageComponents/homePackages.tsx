import React from 'react';
import Head from 'next/head';
import { FaDesktop, FaCogs, FaRocket, FaMobileAlt, FaLanguage, FaPaintBrush, FaTools } from 'react-icons/fa';

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
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Custom Website Design */}
                        <div className="bg-gray-800 text-white border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-80">
                            <FaDesktop className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Custom Website Design</h3>
                            <p className="mb-4">Contact us for pricing</p>
                            <ul className="mb-4">
                                <li>Custom Coding and Order Modules</li>
                                <li>WebOne Content Management System</li>
                                <li>Customization and Upgrade Options</li>
                                <li>Easy Content Management Without Technical Knowledge</li>
                                <li>Suitable for All Businesses</li>
                                <li>Free NVME Hosting and Support</li>
                                <li>Unlimited Pages, Products, and Email</li>
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* PWA-Hybrid App Design */}
                        <div className="bg-gray-800 text-white border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-80">
                            <FaMobileAlt className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">PWA-Hybrid App Design</h3>
                            <p className="mb-4">Contact us for pricing</p>
                            <ul className="mb-4">
                                <li>Custom Template Design</li>
                                <li>WebOne Content Management System</li>
                                <li>Free Consultation Sessions</li>
                                <li>Android & iOS Support</li>
                                <li>Automatic Updates</li>
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* SEO Package */}
                        <div className="bg-gray-800 text-white border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-80">
                            <FaCogs className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
                            <p className="mb-4">Starting from 20,000,000 Toman</p>
                            <ul className="mb-4">
                                <li>Analysis and Strategy Recommendations</li>
                                <li>SEO Checkup and Reporting of Issues</li>
                                <li>Hourly Consultation</li>
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* UI/UX Design */}
                        <div className="bg-gray-800 text-white border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-80">
                            <FaPaintBrush className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
                            <p className="mb-4">Contact us for pricing</p>
                            <ul className="mb-4">
                                <li>UI/UX Design Without Backend Coding</li>
                                <li>Implementation According to Core Web Vitals Principles</li>
                                <li>Separate Mobile and Desktop Designs</li>
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* Website Analysis */}
                        <div className="bg-gray-800 text-white border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-80">
                            <FaRocket className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Website Analysis</h3>
                            <p className="mb-4">Starting from 7,000,000 Toman</p>
                            <ul className="mb-4">
                                <li>Analysis with Ahrefs (Best Analysis Tool)</li>
                                <li>Design, Coding, and More Review by WebOne</li>
                                <li>Summary, Written Report, and Recommendations</li>
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* Consulting & Proposal */}
                        <div className="bg-gray-800 text-white border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-80">
                            <FaTools className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Consulting, Proposals & Supervision</h3>
                            <p className="mb-4">Contact us for pricing</p>
                            <ul className="mb-4">
                                <li>Analysis and Strategy Recommendations</li>
                                <li>SEO Checkup and Reporting of Issues</li>
                                <li>SEO and Digital Marketing Staff Training</li>
                                <li>Hourly Consultation</li>
                                <li>Business Growth Supervision</li>
                                <li>Network Infrastructure Setup with VOIP</li>
                                <li>Supervision of Implementation</li>
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* Digital Marketing */}
                        <div className="bg-gray-800 text-white border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-80">
                            <FaLanguage className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
                            <p className="mb-4">Starting from 250,000,000 Toman</p>
                            <ul className="mb-4">
                                <li>Online Advertising</li>
                                <li>SMS Campaigns</li>
                                <li>SEO Consultation</li>
                                <li>Social Media Management</li>
                                <li>App and Website Development</li>
                                <li>Motion Graphics and Teasers</li>
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* Affiliate Marketing */}
                        <div className="bg-gray-800 text-white border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 w-80">
                            <FaTools className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Affiliate Marketing</h3>
                            <p className="mb-4">Starting from 1% of Sales</p>
                            <ul className="mb-4">
                                <li>Suitable for Well-Known Brands</li>
                                <li>Setup and Development by WebOne</li>
                                <li>Full Marketing and Sales Operations</li>
                                <li>WebOne Content Management System</li>
                                <li>Customization and Upgrade Options</li>
                                <li>Free NVME Hosting and Support</li>
                                <li>Unlimited Pages, Products, and Email</li>
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PackagesPage;
