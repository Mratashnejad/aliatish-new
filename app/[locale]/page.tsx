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
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:px-40  text-center lg:text-left px-6 sm:px-8 md:px-12 w-full">
                
                {/* Text Section */}
                <div className="lg:w-2/3 lg:flex lg:flex-col lg:justify-center mt-8 lg:mt-0">
                    <div className="lg:text-6xl sm:text-3xl md:text-4xl font-extrabold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 dark:from-yellow-500 dark:to-red-600">
                        Hi, I am Ali Atish
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
                        I&apos;m a Full Stack Developer
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                        <FaCode className="text-3xl sm:text-4xl text-blue-500 dark:text-blue-300" />
                        <FaLaptopCode className="text-3xl sm:text-4xl text-green-500 dark:text-green-300" />
                        <FaRocket className="text-3xl sm:text-4xl text-purple-500 dark:text-purple-300" />
                    </div>
                  
                </div>

                {/* Fire Animation Section */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                    <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex items-center">
                        <FireAnimation />
                    </div>
                </div>
            </div>
        </main>
    );
}
