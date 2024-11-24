'use client';
import { FaChartLine, FaTrophy, FaSearch } from 'react-icons/fa';
import { OrderButton } from '@/components/order-button';
import Image from 'next/image';

export default function SEOService() {
    return (
        <section className="dark:bg-black text-gray-800 dark:text-gray-200 py-16">
            <div>
                <div className="dark:bg-black py-20 px-20">
                    <div>
                        <h3 className="text-6xl font-serif font-extrabold mb-10 text-gray-900 dark:text-yellow-400">
                            SEO Services
                        </h3>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4">
                            SEO is crucial for improving your website`&apos;`s
                            visibility on search engines and attracting organic
                            traffic. I offer a range of SEO services tailored to
                            boost your website`&apos;`s rankings, drive more
                            visitors, and grow your business online.
                        </p>
                        {/* SEO Packages Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-10">
                            {/* Basic SEO Package */}
                            <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                <FaSearch
                                    className="text-yellow-400 mr-10"
                                    size={80}
                                />
                                <div>
                                    <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                        Basic SEO: Boost Your Search Visibility
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        The Basic SEO package is ideal for small
                                        businesses or personal websites. It
                                        includes keyword optimization, basic
                                        on-page SEO, and a basic SEO audit.
                                        Perfect for those who want to improve
                                        their online visibility without breaking
                                        the bank.
                                    </p>
                                </div>
                            </div>

                            {/* Advanced SEO Package */}
                            <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                <FaChartLine
                                    className="text-yellow-500 mr-10"
                                    size={80}
                                />
                                <div>
                                    <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                        Advanced SEO: Maximize Your Reach
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        The Advanced SEO package is designed for
                                        growing businesses. It includes on-page
                                        and off-page SEO, content marketing
                                        strategies, and detailed performance
                                        reports. It`&apos;`s perfect for
                                        businesses looking to expand their
                                        online presence and dominate search
                                        results.
                                    </p>
                                </div>
                            </div>

                            {/* Premium SEO Package */}
                            <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                <FaTrophy
                                    className="text-purple-600 mr-10"
                                    size={80}
                                />
                                <div>
                                    <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                        Premium SEO: Complete Optimization for
                                        Your Website
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        The Premium SEO package includes
                                        everything from the Advanced SEO package
                                        plus custom content creation, competitor
                                        analysis, ongoing SEO optimization, and
                                        more. This package is ideal for
                                        businesses looking for top-tier results
                                        and long-term growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SEO Using Our Technologies Section */}
                        <div className="py-20">
                            <h4 className="text-4xl font-serif font-semibold mb-10 text-center text-gray-900 dark:text-white">
                                Tools and Technologies We Use
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
                        </div>

                        {/* Pricing Section */}
                        <div className="py-20">
                            <h3 className="text-5xl font-extrabold text-center mb-12 text-gray-100 dark:text-white">
                                SEO Pricing Packages
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {/* Basic SEO Plan */}
                                <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-2xl rounded-xl p-8 transform transition-all hover:scale-105">
                                    <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                        Basic SEO
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        Ideal for personal websites and small
                                        businesses looking to boost their online
                                        presence.
                                    </p>
                                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                        <li>Keyword Research</li>
                                        <li>On-Page Optimization</li>
                                        <li>SEO Audit</li>
                                        <li>Performance Report</li>
                                    </ul>
                                    <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                        $199
                                    </div>
                                    <OrderButton className="bg-blue-600 text-white py-3 px-8 rounded-lg w-full hover:bg-blue-700 transition-all">
                                        Choose Basic SEO
                                    </OrderButton>
                                </div>

                                {/* Advanced SEO Plan */}
                                <div className="bg-gradient-to-b from-yellow-500 to-orange-500 shadow-2xl rounded-xl p-8 transform scale-105 transition-all hover:scale-110">
                                    <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                        Advanced SEO
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        For businesses looking to expand their
                                        reach with advanced SEO techniques and
                                        strategies.
                                    </p>
                                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                        <li>On-Page & Off-Page SEO</li>
                                        <li>Competitor Analysis</li>
                                        <li>Content Strategy</li>
                                        <li>Monthly Performance Reports</li>
                                    </ul>
                                    <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                        $499
                                    </div>
                                    <OrderButton className="bg-orange-600 text-white py-3 px-8 rounded-lg w-full hover:bg-orange-700 transition-all">
                                        Choose Advanced SEO
                                    </OrderButton>
                                </div>

                                {/* Premium SEO Plan */}
                                <div className="bg-gradient-to-b from-purple-700 to-purple-900 shadow-2xl rounded-xl p-8 transform transition-all hover:scale-105">
                                    <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                        Premium SEO
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        The best choice for large businesses
                                        seeking high-impact SEO solutions.
                                    </p>
                                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                        <li>Complete SEO Audit</li>
                                        <li>Content Creation</li>
                                        <li>API Integration</li>
                                        <li>Competitor Monitoring</li>
                                        <li>Ongoing Optimization</li>
                                    </ul>
                                    <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                        $899
                                    </div>
                                    <OrderButton className="bg-purple-800 text-white py-3 px-8 rounded-lg w-full hover:bg-purple-900 transition-all">
                                        Choose Premium SEO
                                    </OrderButton>
                                </div>
                            </div>
                        </div>

                        {/* Important Notes */}
                        <div className="bg-blue-100 dark:bg-gray-800 p-16 rounded-lg mt-12 border-l-8 border-yellow-500">
                            <h4 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                                Important Notes:
                            </h4>
                            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                                Each SEO package can be customized based on your
                                unique business needs. Contact me for a tailored
                                SEO strategy!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
