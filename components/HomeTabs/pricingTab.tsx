'use client'
import { FaCheckCircle } from 'react-icons/fa';

export default function PricingTab() {
  return (
    <section
      id="pricing"
      className="w-full h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 relative z-10 bg-cover bg-center"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Basic Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Basic Plan
            </h3>
            <p className="text-gray-800 dark:text-gray-300 mb-4 text-lg">
              $500 - Basic web application with up to 5 pages.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Responsive Design
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Basic SEO
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                1 Month Free Support
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Contact Form
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Basic Analytics
              </li>
            </ul>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Order Now
            </a>
          </div>
          {/* Standard Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Standard Plan
            </h3>
            <p className="text-gray-800 dark:text-gray-300 mb-4 text-lg">
              $1000 - Advanced web application with up to 10 pages.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Responsive Design
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Advanced SEO
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                3 Months Free Support
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Contact Form
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Advanced Analytics
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Blog Integration
              </li>
            </ul>
            <a
              href="#contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
            >
              Order Now
            </a>
          </div>
          {/* Premium Plan */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Premium Plan
            </h3>
            <p className="text-gray-800 dark:text-gray-300 mb-4 text-lg">
              $2000 - Comprehensive web application with unlimited pages.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Responsive Design
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Premium SEO
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                6 Months Free Support
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Contact Form
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Advanced Analytics
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Blog Integration
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                E-commerce Integration
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Custom Features
              </li>
            </ul>
            <a
              href="#contact"
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
