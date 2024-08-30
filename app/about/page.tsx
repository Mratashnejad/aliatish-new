import React from 'react';
import { FaGithub, FaStackOverflow, FaKaggle } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function AboutPage() {
    return (
        <section
            id="about"
            className="w-full min-h-screen py-28 px-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
        >
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">About Us</h2>

                {/* Social Media Links */}
                <div className="mb-12">
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Connect with Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            <FaGithub size={32} />
                        </a>
                        <a
                            href="https://stackoverflow.com/users/youruserid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            <FaStackOverflow size={32} />
                        </a>
                        <a
                            href="https://kaggle.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            <FaKaggle size={32} />
                        </a>
                    </div>
                </div>

                {/* About Content */}
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Story</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        We are a passionate team dedicated to creating stunning web experiences. Our journey began with a simple idea: to deliver exceptional digital solutions that empower businesses and inspire creativity. With years of experience and a commitment to excellence, we transform ideas into impactful realities.
                    </p>
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Mission</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        As a full-stack developer, my mission is to achieve the following goals:
                        <ul className="list-disc list-inside mt-4">
                            <li>Deliver 100 personal websites, each tailored to the unique needs of individuals and businesses.</li>
                            <li>Create 10 online shops that drive e-commerce success through innovative design and functionality.</li>
                        </ul>
                        I am committed to advancing my skills and achieving these goals, continually pushing the boundaries of what's possible in web development.
                    </p>
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Values</h3>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                        <li>Innovation: We embrace creativity and strive to push boundaries.</li>
                        <li>Integrity: We value transparency and honesty in all our interactions.</li>
                        <li>Customer Satisfaction: Your success is our success. We prioritize your needs and work to exceed your expectations.</li>
                    </ul>

                    {/* Resume Download Section */}
                    <div className="mt-12">
                        <a
                            href="/path/to/your-resume.pdf"
                            download
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                        >
                            <HiDownload className="mr-2" size={20} />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
