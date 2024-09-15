'use client';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import {
    FaCheckCircle,
    FaReact,
    FaCss3Alt,
    FaHtml5,
    FaFigma,
    FaCode,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import dynamic from 'next/dynamic';
import { OrderButton } from '@/components/order-button';

const LottieAnimationWebdesignData = dynamic(
    () => import('@/components/animations/LottieAnimationWebdesignData'),
    { ssr: false }
);
const LottieAnimationUIUX = dynamic(
    () => import('@/components/animations/LottieAnimationUIUX'),
    { ssr: false }
);
const LottieAnimationSEO = dynamic(
    () => import('@/components/animations/LottieAnimationSEO'),
    { ssr: false }
);

export default function ServicesPage() {
    return (
        <>
            {/* Web Application Design Section */}
            <section className="max-w-full bg-white dark: text-gray-800 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div className=" dark: p-8  rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                                Web Application Design
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                At the forefront of modern web design, I
                                leverage the latest technologies and best
                                practices to create stunning, responsive, and
                                user-friendly websites.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Utilizing Next.js, a powerful React framework, I
                                build highly performant and scalable web
                                applications with server-side rendering, static
                                site generation, and API routes.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                I use Figma for prototyping, HTML5 and CSS3 for
                                structural design, and React for interactive
                                components, paired with Tailwind CSS for a sleek
                                and modern design aesthetic.
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            <LottieAnimationWebdesignData />
                        </div>
                    </div>

                    <div className="text-right mt-4">
                        <OrderButton className="inline-flex items-center bg-transparent text-blue-800 py-3 px-8 rounded-lg  hover:text-blue-500">
                            Get in Touch <FaArrowRight className="ml-3" />
                        </OrderButton>
                    </div>
                </div>
            </section>

            {/* UI/UX Design Section */}
            <section className="max-w-full bg-white dark: text-gray-800 dark:text-gray-200 py-2">
                <div className="mx-auto px-12">
                    <div className=" dark: p-8 rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="lg:w-1/3">
                            <LottieAnimationUIUX />
                        </div>
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                                UI/UX Design
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                I focus on creating intuitive, user-centered
                                designs that prioritize user experience. I
                                prototype and iterate with Figma to ensure
                                designs meet user needs before development.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                The final product is responsive and accessible,
                                offering a consistent and optimized experience
                                across devices.
                            </p>
                        </div>
                        
                    </div>

                    <div className="text-right mt-4">
                        <OrderButton className="inline-flex items-center bg-transparent text-blue-800 py-3 px-8 rounded-lg  hover:text-blue-500">
                            Get in Touch <FaArrowRight className="ml-3" />
                        </OrderButton>
                    </div>
                </div>
            </section>

            {/* SEO Optimization Section */}
            <section className="max-w-full bg-white dark: text-gray-800 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div className=" dark: p-8  rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                                SEO Optimization
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                I implement best SEO practices, including fast
                                page load times, well-structured content, and
                                optimized Next.js configurations, to enhance
                                visibility and drive organic traffic.
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            <LottieAnimationSEO />
                        </div>
                    </div>

                    <div className="text-right mt-4">
                        <OrderButton className="inline-flex items-center bg-transparent text-blue-800 py-3 px-8 rounded-lg  hover:text-blue-500">
                            Get in Touch <FaArrowRight className="ml-3" />
                        </OrderButton>
                    </div>
                </div>
            </section>
        </>
    );
}
