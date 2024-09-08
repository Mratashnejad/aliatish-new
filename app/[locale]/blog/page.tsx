import React from 'react';

export default function BlogPage() {
    return (
        <section className="font-spaceMono min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-zinc-950 text-gray-800 dark:text-gray-200">
            <div className="text-center px-6 py-12">
                <h2 className="text-5xl font-bold mb-12 text-gray-900 dark:text-gray-100">
                    Blogs are
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Blog Post 1 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
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
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                            Effective SEO Strategies for 2024
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Discover the most effective SEO techniques to improve your website's ranking and visibility in search engines.
                        </p>
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Read More
                        </a>
                    </div>
                    {/* Blog Post 3 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
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
                <div className="mt-12">
                    <button className="flex items-center bg-orange-600 text-white py-2 px-6 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                        Explore More 
                        {/* <GrLinkNext className="ml-2" /> */}
                    </button>
                </div>
            </div>
        </section>
    );
}
