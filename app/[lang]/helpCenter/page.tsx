import React from 'react';

export default function HelpCenter() {
    return (
        <section
            id="help-center"
            className="w-full min-h-screen py-28 px-6 bg-gray-100 dark:bg-gray-800"
        >
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">Help Center</h2>
                <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                        Frequently Asked Questions
                    </h3>
                    <div className="space-y-6">
                        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                How do I get started?
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                To get started, simply visit our homepage and explore our services. You can also reach out to us through our contact page for personalized assistance.
                            </p>
                        </div>
                        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                What payment methods do you accept?
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                We accept various payment methods including credit cards, PayPal, and bank transfers. For more details, please refer to our payment policy.
                            </p>
                        </div>
                        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                How can I contact support?
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                You can contact our support team via the contact form on our website or by sending us an email at support@example.com. We are here to help you.
                            </p>
                        </div>
                        {/* Add more FAQ items as needed */}
                    </div>
                </div>
            </div>
        </section>
    );
}
