'use client';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Head from 'next/head';

export default function BlogPage() {
    return (
        <>
         <Head>
                <title>Latest Blog Posts | AliAtish</title>
                <meta
                    name="description"
                    content="Discover the latest insights and tutorials on web development, SEO, machine learning, and more. Stay up-to-date with our curated blog posts."
                />
                <meta name="keywords" content="web development, SEO, machine learning, programming, Next.js, PostgreSQL" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://aliatish.com/blog" />
                <meta property="og:title" content="Latest Blog Posts | YourWebsite" />
                <meta
                    property="og:description"
                    content="Discover the latest insights and tutorials on web development, SEO, machine learning, and more. Stay up-to-date with our curated blog posts."
                />
                <meta property="og:url" content="https://aliatish.com/blog" />
                <meta property="og:type" content="website" />
            </Head>
        
        
        
        <section className="min-h-screen bg-gray-100 dark:bg-zinc-950 flex flex-col items-center text-gray-800 dark:text-gray-200">
            <div className="max-w-4xl w-full px-4 py-12">
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
                    Latest Blog Posts
                </h2>
                <div className="flex flex-col space-y-8">
                    {/* Blog Post 1 */}
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                Understanding Web Design Trends
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Stay updated with the latest trends and best
                                practices in web design. Learn how to enhance
                                user experience and drive engagement.
                            </p>
                            <a
                                href="#"
                                className="text-teal-600 dark:text-teal-400 mt-3 inline-block hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    {/* Repeat this block for each blog post */}
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                Effective SEO Strategies for 2024
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Discover the most effective SEO techniques to
                                improve your website`&apos;s ranking and visibility in
                                search engines.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 mt-3 inline-block hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Maximizing User Engagement
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Learn strategies to increase user engagement and
                                keep your audience coming back for more.
                            </p>
                            <a
                                href="#"
                                className="text-purple-600 dark:text-purple-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Getting Started with Next.js
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                A beginner`&apos;s guide to setting up and configuring
                                a Next.js application from scratch.
                            </p>
                            <a
                                href="#"
                                className="text-teal-600 dark:text-teal-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Optimizing Performance in Next.js
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Essential techniques to boost the speed and
                                efficiency of your Next.js applications.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Setting Up PostgreSQL with Docker
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Learn how to use Docker for a reliable and
                                isolated PostgreSQL development environment.
                            </p>
                            <a
                                href="#"
                                className="text-purple-600 dark:text-purple-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Writing Efficient Queries in PostgreSQL
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Improve query performance and data retrieval
                                with efficient PostgreSQL query techniques.
                            </p>
                            <a
                                href="#"
                                className="text-teal-600 dark:text-teal-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Using PostgreSQL JSON Fields
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Explore the flexibility of JSONB data types for
                                storing semi-structured data in PostgreSQL.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Event-Driven Architecture in Web Development
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Understand how event-driven design enhances
                                scalability and real-time interactivity in
                                modern applications.
                            </p>
                            <a
                                href="#"
                                className="text-purple-600 dark:text-purple-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Functional Programming in JavaScript
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Discover functional programming principles like
                                immutability, pure functions, and higher-order
                                functions.
                            </p>
                            <a
                                href="#"
                                className="text-teal-600 dark:text-teal-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Introduction to Machine Learning
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Learn the basics of machine learning, including
                                supervised, unsupervised, and reinforcement
                                learning.
                            </p>
                            <a
                                href="#"
                                className="text-teal-600 dark:text-teal-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Getting Started with Kaggle Competitions
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                An essential guide to competing on Kaggle,
                                including tips for beginners and how to approach
                                datasets.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Popular Machine Learning Algorithms
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Explore the most widely-used machine learning
                                algorithms and their real-world applications.
                            </p>
                            <a
                                href="#"
                                className="text-purple-600 dark:text-purple-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Deep Learning Basics
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Understand the fundamentals of deep learning,
                                neural networks, and how they drive advancements
                                in AI.
                            </p>
                            <a
                                href="#"
                                className="text-teal-600 dark:text-teal-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Natural Language Processing with Python
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                A beginner`&apos;s guide to natural language
                                processing (NLP) techniques using Python.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Image Classification with CNNs
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Learn how Convolutional Neural Networks (CNNs)
                                are used for image classification tasks in
                                computer vision.
                            </p>
                            <a
                                href="#"
                                className="text-purple-600 dark:text-purple-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Data Preprocessing Techniques in ML
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Explore methods for preparing raw data for
                                machine learning models, including normalization
                                and feature selection.
                            </p>
                            <a
                                href="#"
                                className="text-teal-600 dark:text-teal-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Data Preprocessing Techniques in ML
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Explore methods for preparing raw data for
                                machine learning models, including normalization
                                and feature selection.
                            </p>
                            <a
                                href="#"
                                className="text-teal-600 dark:text-teal-400 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <button className="flex items-center justify-center bg-orange-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
                            Explore More
                            <FaArrowRight className="ml-3" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
