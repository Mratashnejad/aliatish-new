import { GrLinkNext } from "react-icons/gr";
import React from 'react';
import { OrderButton } from "@/components/order-button";

export default function Home() {
    return (
        <main className="font-monocraft min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 justify-center bg-gray-100 dark:bg-zinc-950 text-gray-800 dark:text-gray-200">
            <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    <a className="hover:underline">Hi, I am Ali Atish,</a>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl mb-6">
                    <a className="hover:underline">and I&apos;m a Full Stack Developer</a>
                </div>
                <div>
                    <OrderButton 
                        className="flex items-center bg-orange-600 text-white py-2 px-4 sm:py-2 sm:px-6 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform hover:scale-105"
                    >
                        Work with Me <GrLinkNext className="ml-2" />
                    </OrderButton>
                </div>
            </div>
        </main>
    );
}
