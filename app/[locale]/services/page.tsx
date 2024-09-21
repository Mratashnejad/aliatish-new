'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { PathButton } from '@/components/Path-button';

// Dynamic imports for Lottie animations
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

// Static loading fallback component
const LoadingFallback = () => <div className="text-center py-6">Loading animation...</div>;

export default function ServicesPage() {
    const [isLoadingWebdesign, setIsLoadingWebdesign] = useState(true);
    const [isLoadingUIUX, setIsLoadingUIUX] = useState(true);
    const [isLoadingSEO, setIsLoadingSEO] = useState(true);

    useEffect(() => {
        // Simulate loading for Webdesign animation
        setTimeout(() => {
            setIsLoadingWebdesign(false);
        }, 1000); 

        // Simulate loading for UI/UX animation
        setTimeout(() => {
            setIsLoadingUIUX(false);
        }, 1000); 

        // Simulate loading for SEO animation
        setTimeout(() => {
            setIsLoadingSEO(false);
        }, 1000); 
    }, []);

    return (
        <>
            {/* Web Application Design Section */}
            <section className="max-w-full bg-white dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div className="dark:bg-black p-8 rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                                Web Application Design
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                At the forefront of modern web design, I leverage the latest technologies and best
                                practices to create stunning, responsive, and user-friendly websites.
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                Utilizing Next.js, a powerful React framework, I build highly performant and scalable web
                                applications with server-side rendering, static site generation, and API routes.
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                I use Figma for prototyping, HTML5 and CSS3 for structural design, and React for interactive
                                components, paired with Tailwind CSS for a sleek and modern design aesthetic.
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            {isLoadingWebdesign ? (
                                <LoadingFallback />
                            ) : (
                                <LottieAnimationWebdesignData />
                            )}
                        </div>
                    </div>

                    <div className="text-right mt-4">
                        <PathButton className="inline-flex items-center bg-transparent text-blue-800 dark:text-blue-400 py-3 px-8 rounded-lg hover:text-blue-500 dark:hover:text-blue-300"
                        path='/services/webapplications'>
                            Learn More ... <FaArrowRight className="ml-3" />
                        </PathButton>
                    </div>
                </div>
            </section>

            {/* UI/UX Design Section */}
            <section className="max-w-full bg-white dark:bg-black text-gray-900 dark:text-gray-200 py-16">
                <div className="mx-auto px-12">
                    <div className="dark:bg-black p-8 rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="lg:w-1/3">
                            {isLoadingUIUX ? (
                                <LoadingFallback />
                            ) : (
                                <LottieAnimationUIUX />
                            )}
                        </div>
                        <div className="lg:w-2/3 lg:pr-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
                                UI/UX Design
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                I focus on creating intuitive, user-centered designs that prioritize user experience.
                                I prototype and iterate with Figma to ensure designs meet user needs before development.
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                The final product is responsive and accessible, offering a consistent and optimized
                                experience across devices.
                            </p>
                        </div>
                    </div>

                    <div className="text-right mt-4">
                        <PathButton className="inline-flex items-center bg-transparent text-blue-800 dark:text-blue-400 py-3 px-8 rounded-lg hover:text-blue-500 dark:hover:text-blue-300"
                        path='/services/UIUX'>
                            Get in Touch <FaArrowRight className="ml-3" />
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
                                SEO Optimization
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">
                                I implement best SEO practices, including fast page load times, well-structured content,
                                and optimized Next.js configurations, to enhance visibility and drive organic traffic.
                            </p>
                        </div>
                        <div className="lg:w-1/3">
                            {isLoadingSEO ? (
                                <LoadingFallback />
                            ) : (
                                <LottieAnimationSEO />
                            )}
                        </div>
                    </div>

                    <div className="text-right mt-4">
                        <PathButton className="inline-flex items-center bg-transparent text-blue-800 dark:text-blue-400 py-3 px-8 rounded-lg hover:text-blue-500 dark:hover:text-blue-300"
                        path='services/seo'>
                            Get in Touch <FaArrowRight className="ml-3" />
                        </PathButton>
                    </div>
                </div>
            </section>
        </>
    );
}
