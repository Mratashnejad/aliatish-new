'use client'
import { GrLinkNext } from "react-icons/gr";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import React from 'react';
import dynamic from 'next/dynamic';

import { OrderButton } from "@/components/order-button";
const FireAnimation = dynamic(
    () => import('@/components/animations/fireAnimation'),
    { ssr: false }
);

export default function Home() {
    return (
        <main className="font-monocraft min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:bg-gradient-to-b dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 text-gray-800 dark:text-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center text-center lg:text-left px-6 sm:px-8 md:px-12 lg:px-20">
                {/* Text Section */}
                <div className="lg:w-2/3">
                    <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 dark:from-yellow-500 dark:to-red-600">
                        Hi, I am Ali Atish
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
                        I&apos;m a Full Stack Developer
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-4 mb-12">
                        <FaCode className="text-4xl text-blue-500 dark:text-blue-300" />
                        <FaLaptopCode className="text-4xl text-green-500 dark:text-green-300" />
                        <FaRocket className="text-4xl text-purple-500 dark:text-purple-300" />
                    </div>
                    <div>
                        <OrderButton
                            className="flex items-center justify-center lg:justify-start bg-orange-600 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform hover:scale-105"
                        >
                            Work with Me <GrLinkNext className="ml-3 text-xl" />
                        </OrderButton>
                    </div>
                </div>

                {/* Fire Animation Section */}
                <div className="lg:w-1/3 mt-8 lg:mt-0 lg:pl-8 flex justify-center lg:justify-end">
                    <div className="w-200 h-200">
                        <FireAnimation />
                    </div>
                </div>
            </div>
        </main>
    );
}
