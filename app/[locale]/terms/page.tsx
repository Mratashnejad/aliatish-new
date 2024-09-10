import React from 'react';

export default function Term() {
    return (
        <section
            id="terms-of-service"
            className="w-full min-h-screen py-28 px-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
        >
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">
                    Terms of Service
                </h2>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto transition-transform transform hover:scale-105">
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Welcome to Aliatish Web Development Company. By using our services, you agree to the following terms and conditions. Please read them carefully.
                    </p>

                    {/* Section 1 */}
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        1. Acceptance of Terms
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
                    </p>

                    {/* Section 2 */}
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        2. Changes to Terms
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        We reserve the right to modify these terms at any time. Changes will be effective when posted. Your continued use of our services constitutes your acceptance of the revised terms.
                    </p>

                    {/* Section 3 */}
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        3. User Responsibilities
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account information.
                    </p>

                    {/* Section 4 */}
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        4. Limitation of Liability
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        We are not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our liability is limited to the maximum extent permitted by law.
                    </p>

                    {/* Section 5 */}
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        5. Governing Law
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        These terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these terms will be resolved in the courts of [Your Jurisdiction].
                    </p>
                </div>
            </div>
        </section>
    );
}
