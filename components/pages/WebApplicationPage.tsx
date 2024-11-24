'use client';
import {
    FaShoppingCart,
    FaBriefcase,
    FaRocket,
    FaCrown,
    FaNodeJs,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { OrderButton } from '@/components/order-button';
import Image from 'next/image';

export default function WebApplicationsPage() {
    return (
        <>
            <section className="dark:bg-black text-gray-800 dark:text-gray-200 py-16">
                <div>
                    <div className="dark:bg-black py-20 px-20">
                        <div>
                            <h3 className="text-6xl font-serif font-extrabold mb-10 text-gray-900 dark:text-yellow-400">
                                Web Application Development
                            </h3>
                            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4">
                                Web applications are the backbone of modern
                                digital experiences, providing fast, reliable,
                                and scalable solutions. I create robust,
                                high-performance web applications tailored to
                                meet your business&apos;s unique needs, no
                                matter the size or industry.
                            </p>
                            {/* Packages Benefit Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-10">
                                {/* Basic Package */}
                                <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <FaBriefcase
                                        className="text-yellow-400 mr-10"
                                        size={80}
                                    />
                                    <div>
                                        <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                            Basic Package: Simple, Effective,
                                            Affordable
                                        </h4>
                                        <p className="text-lg text-gray-300 mb-6">
                                            The Basic package is perfect for
                                            personal portfolios or small
                                            business websites. You get up to 5
                                            pages, responsive design, and basic
                                            SEO optimization. It&apos;s a
                                            cost-effective way to get a
                                            professional online presence without
                                            the heavy cost.
                                        </p>
                                    </div>
                                </div>

                                {/* Pro Package */}
                                <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <FaRocket
                                        className="text-yellow-500 mr-10"
                                        size={80}
                                    />
                                    <div>
                                        <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                            Pro Package: Boost Your Business
                                            Online
                                        </h4>
                                        <p className="text-lg text-gray-300 mb-6">
                                            With the Pro package, you get up to
                                            10 pages, advanced SEO, CMS
                                            integration, and custom animations.
                                            This package is ideal for growing
                                            businesses that need more advanced
                                            features and customization to stand
                                            out from the competition.
                                        </p>
                                    </div>
                                </div>

                                {/* Premium Package */}
                                <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <FaCrown
                                        className="text-purple-600 mr-10"
                                        size={80}
                                    />
                                    <div>
                                        <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                            Premium Package: Tailored, Scalable,
                                            High-Performance
                                        </h4>
                                        <p className="text-lg text-gray-300 mb-6">
                                            The Premium package offers unlimited
                                            pages, full customization, advanced
                                            animations, API integration, and
                                            priority support. It&apos;s designed
                                            for businesses that need a
                                            high-performance web application
                                            with enterprise-level features and
                                            scalability.
                                        </p>
                                    </div>
                                </div>

                                {/* Online Shop Package */}
                                <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <FaShoppingCart
                                        className="text-orange-600 mr-10"
                                        size={100}
                                    />
                                    <div>
                                        <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                            Online Shop Package: Launch Your
                                            E-Commerce Store
                                        </h4>
                                        <p className="text-lg text-gray-300 mb-6">
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
                                </div>
                            </div>

                            {/* Companies Using Our Technologies Section */}
                            <div className="py-20">
                                <h4 className="text-4xl font-serif font-semibold mb-10 text-center text-gray-900 dark:text-white">
                                    Companies Using Our Technologies
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

                            {/* Technologies Used Section */}
                            <div className="gap-10 py-20 px-10">
                                <div>
                                    <h4 className="flex items-center text-4xl font-serif font-semibold mb-6 text-gray-900 dark:text-white">
                                        <FaNodeJs
                                            className="text-green-600 mr-6"
                                            size={80}
                                        />
                                        Node.js: Fast and Scalable
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        Node.js is ideal for back-end
                                        development, offering fast, scalable,
                                        and efficient handling of server-side
                                        processes.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="flex items-center text-4xl font-serif font-semibold mb-6 text-gray-900 dark:text-white">
                                        <SiTypescript
                                            className="text-blue-600 mr-6"
                                            size={80}
                                        />
                                        TypeScript: Reliable and Bug-Free
                                    </h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                        TypeScript ensures more reliable,
                                        maintainable code with its static
                                        typing, helping prevent bugs and
                                        improving the overall development
                                        experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
                <div className="container mx-auto px-6 lg:px-16">
                    <h3 className="text-5xl font-extrabold text-center mb-12 text-gray-100 dark:text-white">
                        Pricing Packages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Personal Website Plan */}
                        <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-2xl rounded-xl p-8 transform transition-all hover:scale-105">
                            <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                Personal Website
                            </h4>
                            <p className="text-lg text-gray-300 mb-6">
                                Ideal for personal portfolios, showcasing your
                                resume, and highlighting your social presence.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                <li>Up to 5 Pages</li>
                                <li>Responsive Design</li>
                                <li>Basic SEO Optimization</li>
                                <li>Contact Form Integration</li>
                                <li>Email Support</li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                $290
                            </div>
                            <OrderButton className="bg-blue-600 text-white py-3 px-8 rounded-lg w-full hover:bg-blue-700 transition-all">
                                Choose Package
                            </OrderButton>
                        </div>

                        {/* Online Shop Package */}
                        <div className="bg-gradient-to-b from-yellow-500 to-orange-500 shadow-2xl rounded-xl p-8 transform scale-105 transition-all hover:scale-110">
                            <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                Online Shop Package
                            </h4>
                            <p className="text-lg text-gray-300 mb-6">
                                Perfect for setting up an online store with
                                essential e-commerce features.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                <li>Shop and Product Details Pages</li>
                                <li>Admin Panel Integration</li>
                                <li>Email Authentication</li>
                                <li>Payment Gateway Integration</li>
                                <li>Inventory Management</li>
                                <li>SEO Optimization</li>
                                <li>Mobile-Friendly Design</li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                $600
                            </div>
                            <OrderButton className="bg-orange-600 text-white py-3 px-8 rounded-lg w-full hover:bg-orange-700 transition-all">
                                Choose Online Shop
                            </OrderButton>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-gradient-to-b from-purple-700 to-purple-900 shadow-2xl rounded-xl p-8 transform transition-all hover:scale-105">
                            <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                Premium
                            </h4>
                            <p className="text-lg text-gray-300 mb-6">
                                For businesses requiring a high-performance,
                                custom web application with enterprise-level
                                features.
                            </p>
                            <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                <li>Unlimited Pages</li>
                                <li>Full Customization</li>
                                <li>API Integration</li>
                                <li>Advanced Animations</li>
                                <li>Priority Support</li>
                                <li>Web App Security Features</li>
                                <li>Performance Optimization</li>
                                <li>Scalable Architecture</li>
                            </ul>
                            <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                $2900
                            </div>
                            <OrderButton className="bg-purple-800 text-white py-3 px-8 rounded-lg w-full hover:bg-purple-900 transition-all">
                                Choose Premium
                            </OrderButton>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-blue-100 dark:bg-gray-800 p-16 rounded-lg mt-12 border-l-8 border-yellow-500">
                <h4 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                    Important Notes:
                </h4>
                <ul className="list-none pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-4">
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        All websites are fully responsive, optimized for both
                        desktop and mobile devices.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        SEO, UI/UX Design, and OTP (One-Time Password)
                        Integration are not included.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        Hosting and domain costs are not included.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        Mention any customization options if available.
                    </li>
                    <li className="relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-2xl before:top-1/2 before:transform before:-translate-y-1/2 pl-6">
                        Ongoing website maintenance and updates are available at
                        an additional cost.
                    </li>
                </ul>
            </div>
        </>
    );
}
