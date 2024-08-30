import React from 'react';

export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center h-screen py-28    px-6 z-10 w-full bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
                <div className="relative z-10 text-center mt-16 px-6">
                    <h1 className="text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        <span className="block">Elevate Your</span>
                        <span className="block">Digital Presence</span>
                    </h1>
                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        Discover unparalleled elegance in every detail. From sleek websites to cutting-edge applications, let’s craft an extraordinary digital experience tailored just for you.
                    </p>
                    <a
                        href="#contact"
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Connect with Me
                    </a>
                </div>
            </section>
        </div>
    );
}
