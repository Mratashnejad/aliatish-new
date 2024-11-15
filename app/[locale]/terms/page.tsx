'use client'
import React from 'react';
import Head from 'next/head';

const TermsOfService = () => {

  return (
    <>
      <Head>
        <title>Terms of Service | Aliatish</title>
        <meta
          name="description"
          content="Read the Terms of Service for Aliatish.com, outlining the rules and regulations for using our website."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aliatish.com/terms-of-service" />
      </Head>

      {/* Terms of Service Section */}
      <section className="dark:bg-black text-gray-800 dark:text-gray-200 py-16">
        <div>
          <div className="dark:bg-black py-20 px-20">
            <div>
              <h3 className="text-6xl font-serif font-extrabold mb-10 text-gray-900 dark:text-yellow-400">
                Terms of Service
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed px-4">
                Please read these Terms of Service carefully before using Aliatish.com.
              </p>

              <div className="space-y-8">
                {/* Acceptance of Terms */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    By accessing or using Aliatish.com, you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, do not use the website.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    2. Changes to Terms
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We reserve the right to update or change these Terms of Service at any time. Any changes will be posted on this page with an updated effective date. You are responsible for reviewing these terms periodically to stay informed of any updates.
                  </p>
                </section>

                {/* Use of the Website */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    3. Use of the Website
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You agree to use Aliatish.com only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit the use of the website by others. You may not engage in any activity that could harm or disrupt the website.
                  </p>
                </section>

                {/* Account Registration */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    4. Account Registration
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you create an account on the website, you are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </section>

                {/* Privacy Policy */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    5. Privacy Policy
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Your use of the website is also governed by our Privacy Policy, which can be found at <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400">Privacy Policy</a>. By using the website, you consent to the practices outlined in the Privacy Policy.
                  </p>
                </section>

                {/* Content Ownership */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    6. Content Ownership
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    All content on Aliatish.com, including text, images, logos, and other materials, is the property of Aliatish.com or its content providers and is protected by copyright and intellectual property laws. You may not use, modify, or distribute any content without prior written consent.
                  </p>
                </section>

                {/* User-Generated Content */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    7. User-Generated Content
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you submit content to the website, including comments or other materials, you grant us a worldwide, royalty-free, and non-exclusive license to use, display, and distribute that content in any media, without compensation or acknowledgment.
                  </p>
                </section>

                {/* Prohibited Activities */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    8. Prohibited Activities
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Use the website to engage in illegal activities.</li>
                    <li>Harass, abuse, or harm others through the website.</li>
                    <li>Upload harmful viruses or malicious software.</li>
                    <li>Attempt to gain unauthorized access to the website or its services.</li>
                  </ul>
                </section>

                {/* Disclaimers */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    9. Disclaimers
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The website is provided without any warranties of any kind, either express or implied. We do not warrant that the website will be error-free, secure, or available at all times. We disclaim all liability for any damage to your device or data caused by using the website.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    10. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    In no event shall Aliatish.com be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use the website or services, even if we have been advised of the possibility of such damages.
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    11. Governing Law
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    These Terms of Service shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    12. Contact Information
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Email: <a href="mailto:support@aliatish.com">support@aliatish.com</a>
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

export default TermsOfService;
