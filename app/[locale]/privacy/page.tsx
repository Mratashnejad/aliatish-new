'use client';
import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {

    return (
        <>
            <Head>
                <title>Privacy Policy | Aliatish</title>
                <meta
                    name="description"
                    content="Read the Privacy Policy for Aliatish.com, outlining how we collect, use, and protect your data."
                />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://aliatish.com/privacy-policy"
                />
            </Head>

            {/* Privacy Policy Section */}
            <section className="dark:bg-black text-gray-800 dark:text-gray-200 py-16">
                <div>
                    <div className="dark:bg-black py-20 px-20">
                        <div>
                            <h3 className="text-6xl font-serif font-extrabold mb-10 text-gray-900 dark:text-yellow-400">
                                Privacy Policy
                            </h3>
                            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4">
                                Your privacy is important to us. This Privacy
                                Policy outlines how we collect, use, and protect
                                your personal data.
                            </p>

                            <div className="space-y-8">
                                {/* Information We Collect */}
                                <section>
                                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                        1. Information We Collect
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        We may collect the following types of
                                        information:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>
                                            <strong>
                                                Personal Information:
                                            </strong>{' '}
                                            Includes name, email, phone number,
                                            and other information you provide
                                            through forms or communication.
                                        </li>
                                        <li>
                                            <strong>Usage Data:</strong>{' '}
                                            Includes information on how you
                                            access and use the site, such as IP
                                            address and time spent on pages.
                                        </li>
                                        <li>
                                            <strong>
                                                Cookies and Tracking Data:
                                            </strong>{' '}
                                            We may use cookies to improve user
                                            experience. You can manage cookies
                                            in your browser settings.
                                        </li>
                                    </ul>
                                </section>

                                {/* How We Use Your Information */}
                                <section>
                                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                        2. How We Use Your Information
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        We use your information for the
                                        following purposes:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>
                                            To improve our website and services.
                                        </li>
                                        <li>
                                            To communicate with you and respond
                                            to inquiries.
                                        </li>
                                        <li>
                                            To analyze usage trends and site
                                            performance.
                                        </li>
                                        <li>
                                            To comply with legal obligations.
                                        </li>
                                    </ul>
                                </section>

                                {/* Sharing Your Information */}
                                <section>
                                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                        3. Sharing Your Information
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        We do not sell your personal
                                        information, but may share it in the
                                        following cases:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>
                                            <strong>Service Providers:</strong>{' '}
                                            We may share your data with
                                            third-party services that assist in
                                            website operations.
                                        </li>
                                        <li>
                                            <strong>Legal Compliance:</strong>{' '}
                                            We may disclose your information if
                                            required by law.
                                        </li>
                                    </ul>
                                </section>

                                {/* Data Security */}
                                <section>
                                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                        4. Data Security
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        We implement reasonable security
                                        measures, but cannot guarantee absolute
                                        security over the internet.
                                    </p>
                                </section>

                                {/* Your Rights */}
                                <section>
                                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                        5. Your Rights
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Depending on your location, you may have
                                        the right to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                        <li>
                                            Access, update, or delete your
                                            personal information.
                                        </li>
                                        <li>
                                            Object to or restrict data
                                            processing.
                                        </li>
                                        <li>
                                            Withdraw consent or request data
                                            portability.
                                        </li>
                                    </ul>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        To exercise your rights, contact us at{' '}
                                        <span className="text-blue-600">
                                            [support@aliatish.com]
                                        </span>
                                        .
                                    </p>
                                </section>

                                {/* Changes to This Privacy Policy */}
                                <section>
                                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                        6. Changes to This Privacy Policy
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        We may update this policy from time to
                                        time, and any changes will be posted
                                        here.
                                    </p>
                                </section>

                                {/* Contact Us */}
                                <section>
                                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                        7. Contact Us
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        If you have questions, reach us at:
                                    </p>
                                    <p className="text-blue-600 dark:text-blue-400">
                                        Email:{' '}
                                        <a href="mailto:support@aliatish.com">
                                            support@aliatish.com
                                        </a>
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
