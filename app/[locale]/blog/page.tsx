import React from 'react';

export default function BlogPage() {
    return (
        <section
            id="blog"
            className="w-full min-h-screen py-28 px-4 bg-gradient-to-r from-teal-500 via-blue-600 to-purple-500 dark:from-teal-900 dark:via-blue-800 dark:to-purple-900"
        >
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    Blogs are
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Post 1 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Understanding Web Design Trends
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Stay updated with the latest trends and best practices in web design. Learn how to enhance user experience and drive engagement.
                        </p>
                        <a
                            href="#"
                            className="text-teal-600 dark:text-teal-400 hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                    {/* Blog Post 2 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Effective SEO Strategies for 2024
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Discover the most effective SEO techniques to improve your website&aposs ranking and visibility in search engines.
                        </p>
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                    {/* Blog Post 3 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Maximizing User Engagement
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Learn strategies to increase user engagement and keep your audience coming back for more.
                        </p>
                        <a
                            href="#"
                            className="text-purple-600 dark:text-purple-400 hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
