'use client';
import { FaDesktop, FaCogs } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { OrderButton } from '@/components/order-button';
import Image from 'next/image';

export default function UIUXDesign() {
    return (
        <section className="dark:bg-black text-gray-800 dark:text-gray-200 py-16">
            <div>
                <div className="dark:bg-black py-20 px-20">
                    <div>
                        <h3 className="text-6xl font-serif font-extrabold mb-10 text-gray-900 dark:text-yellow-400">
                            UI/UX Design Services
                        </h3>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4">
                            UI/UX design is key to providing exceptional user
                            experiences. I offer a full range of design services
                            to help bring your digital product vision to life
                            with visually stunning and user-friendly designs.
                        </p>

                        {/* Design Packages Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-10">
                            {/* Basic Design Package */}
                            <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                <FaDesktop
                                    className="text-yellow-400 mr-10"
                                    size={80}
                                />
                                <div>
                                    <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                        Basic Design: Elegant Simplicity
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        The Basic Design package is perfect for
                                        personal projects or startups. It
                                        includes simple user interface design,
                                        wireframes, and prototyping. Ideal for
                                        those looking to create a sleek and
                                        functional design on a budget.
                                    </p>
                                </div>
                            </div>

                            {/* Advanced Design Package */}
                            <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                <FaCogs
                                    className="text-yellow-500 mr-10"
                                    size={80}
                                />
                                <div>
                                    <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                        Advanced Design: Customized &
                                        Feature-Rich
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        The Advanced Design package includes
                                        UI/UX customization, user flows,
                                        responsive design elements, and
                                        high-fidelity prototypes. Ideal for
                                        businesses that need more complex and
                                        tailored digital experiences.
                                    </p>
                                </div>
                            </div>

                            {/* Premium Design Package */}
                            <div className="flex items-center bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                                <FaRocket
                                    className="text-purple-600 mr-10"
                                    size={80}
                                />
                                <div>
                                    <h4 className="text-4xl font-serif font-semibold mb-6 text-white">
                                        Premium Design: Complete Digital
                                        Overhaul
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        The Premium Design package covers
                                        everything from in-depth research,
                                        branding, and custom UI/UX design to
                                        user testing and continuous
                                        optimization. The perfect choice for
                                        large businesses or digital products
                                        that need exceptional design.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Companies Using Our Technologies Section */}
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
                                Design Pricing Packages
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {/* Basic Design Plan */}
                                <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-2xl rounded-xl p-8 transform transition-all hover:scale-105">
                                    <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                        Basic Design
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        Perfect for personal websites and small
                                        projects looking for basic but effective
                                        design solutions.
                                    </p>
                                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                        <li>Wireframe Design</li>
                                        <li>Basic UI/UX Design</li>
                                        <li>Responsive Layout</li>
                                        <li>Prototype</li>
                                    </ul>
                                    <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                        $299
                                    </div>
                                    <OrderButton className="bg-blue-600 text-white py-3 px-8 rounded-lg w-full hover:bg-blue-700 transition-all">
                                        Choose Basic Design
                                    </OrderButton>
                                </div>

                                {/* Advanced Design Plan */}
                                <div className="bg-gradient-to-b from-yellow-500 to-orange-500 shadow-2xl rounded-xl p-8 transform scale-105 transition-all hover:scale-110">
                                    <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                        Advanced Design
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        For businesses needing custom branding,
                                        UI/UX design, and fully responsive
                                        websites.
                                    </p>
                                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                        <li>Custom UI Design</li>
                                        <li>Responsive Design</li>
                                        <li>User Flows & Journeys</li>
                                        <li>High-Fidelity Prototypes</li>
                                    </ul>
                                    <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                        $799
                                    </div>
                                    <OrderButton className="bg-orange-600 text-white py-3 px-8 rounded-lg w-full hover:bg-orange-700 transition-all">
                                        Choose Advanced Design
                                    </OrderButton>
                                </div>

                                {/* Premium Design Plan */}
                                <div className="bg-gradient-to-b from-purple-700 to-purple-900 shadow-2xl rounded-xl p-8 transform transition-all hover:scale-105">
                                    <h4 className="text-3xl font-semibold mb-4 text-gray-100 dark:text-white">
                                        Premium Design
                                    </h4>
                                    <p className="text-lg text-gray-300 mb-6">
                                        The ultimate design package for brands
                                        and businesses seeking a top-tier
                                        digital presence.
                                    </p>
                                    <ul className="list-disc pl-6 text-lg text-gray-300 space-y-3 mb-6">
                                        <li>Full Branding</li>
                                        <li>In-depth UI/UX Design</li>
                                        <li>User Testing & Optimization</li>
                                        <li>Interactive Prototypes</li>
                                        <li>Ongoing Support</li>
                                    </ul>
                                    <div className="text-4xl font-bold mb-6 text-gray-100 dark:text-white">
                                        $1499
                                    </div>
                                    <OrderButton className="bg-purple-800 text-white py-3 px-8 rounded-lg w-full hover:bg-purple-900 transition-all">
                                        Choose Premium Design
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
                                Each design package can be customized based on
                                your unique business needs. Contact me for a
                                tailored design strategy!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
