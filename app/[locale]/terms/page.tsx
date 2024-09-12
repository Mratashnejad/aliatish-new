import React from 'react';

export default function Term() {
    return (
        <section
            id="terms-of-service"
            className="min-h-screen bg-gray-100 dark:bg-zinc-950 flex flex-col items-center justify-center text-gray-800 dark:text-gray-200"
        >
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
                    Terms of Service
                </h2>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Welcome to Aliatish Web Development Company. By using our services, you agree to the following terms and conditions. Please read them carefully.
                    </p>

                    {/* Section 1 */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            1. Acceptance of Terms
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            2. Changes to Terms
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            We reserve the right to modify these terms at any time. Changes will be effective when posted. Your continued use of our services constitutes your acceptance of the revised terms.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            3. User Responsibilities
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account information.
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            4. Limitation of Liability
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            We are not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our liability is limited to the maximum extent permitted by law.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            5. Governing Law
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            These terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these terms will be resolved in the courts of [Your Jurisdiction].
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
