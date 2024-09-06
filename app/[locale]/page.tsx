'use client'
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
    // const t = useTranslations('HeroSection');

    return (
        <main className="relative h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            <div className="container flex flex-col items-center justify-center h-full px-6 py-12 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-4xl font-bold tracking-wide text-gray-800 dark:text-white sm:text-6xl">
                        {/* {t('title', 'The React Framework for Production')} */}test
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:text-2xl">
                        {/* {t('description', 'Next.js provides you with the tools you need for production, including hybrid static and server rendering, TypeScript support, smart bundling, and more. No configuration needed.')} */}
                    test
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link href="#">
                            <div className="px-5 py-3 text-md font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                                test
                                {/* {t('getStarted', 'Get Started')} */}
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="px-5 py-3 text-md font-semibold text-indigo-600 bg-white border border-indigo-600 rounded-lg hover:bg-indigo-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                                test
                                {/* {t('documentation', 'Documentation')} */}
                            </div>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="relative mt-12 md:mt-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src="/images/12.svg"
                        width={1080}
                        height={920}
                        className="mx-auto max-w-xs md:max-w-2xl"
                        alt="Next.js features illustration"
                    />
                </motion.div>
            </div>
        </main>
    );
}
