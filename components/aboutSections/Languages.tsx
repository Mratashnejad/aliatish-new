'use client'
import React from 'react';

export default function Languages() {
    return (
        <section
            id="languages"
            className="py-16 bg-zinc-50 text-gray-800 dark:bg-black dark:text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
                    Languages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Language Card 1 */}
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            English
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            <strong>Proficiency:</strong> Advanced
                        </p>
                    </div>
                    {/* Language Card 2 */}
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Armenian
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            <strong>Proficiency:</strong> Fluent
                        </p>
                    </div>
                    {/* Language Card 3 */}
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Persian/Farsi
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            <strong>Proficiency:</strong> Native
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
