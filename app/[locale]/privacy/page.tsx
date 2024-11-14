import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Aliatish</title>
        <meta
          name="description"
          content="Read the privacy policy of Aliatish.com, detailing how we collect, use, and protect your data."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aliatish.com/privacy-policy" />
      </Head>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
            Your privacy is important to us. This privacy policy outlines the data we collect and how we use and protect it.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Personal Information:</strong> This includes your name, email address, phone number, or other information you provide through forms or communication on our site.</li>
                <li><strong>Usage Data:</strong> This includes information on how you access and use the site, such as your IP address, browser type, time spent on pages, and other diagnostic data.</li>
                <li><strong>Cookies and Tracking Data:</strong> We may use cookies and similar tracking technologies to enhance user experience, analyze site traffic, and provide tailored content. You can manage cookies through your browser settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>To provide, maintain, and improve our website and services.</li>
                <li>To communicate with you, including responding to inquiries or sending updates about our services.</li>
                <li>To monitor and analyze usage trends and site performance.</li>
                <li>To comply with legal obligations and protect our rights and interests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                3. Sharing Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We do not sell, rent, or share your personal data with third parties, except in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist with site operations, analytics, or other services (e.g., hosting, payment processing). These providers are obligated to maintain the confidentiality of your information.</li>
                <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or if we believe such action is necessary to comply with legal processes, protect our rights, or investigate potential violations of our policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We implement reasonable security measures to protect your personal data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Access, update, or delete your personal information.</li>
                <li>Object to or restrict the processing of your data.</li>
                <li>Withdraw consent at any time (where processing is based on consent).</li>
                <li>Request data portability.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                To exercise these rights, please contact us at <span className="text-blue-600">[support@aliatish.com]</span>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                6. Third-Party Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our website may contain links to other websites. We are not responsible for the privacy practices or content of these external sites. Please review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our website is not intended for individuals under the age of 13, and we do not knowingly collect personal data from children. If we become aware that we have inadvertently collected personal data from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated Effective Date. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="text-blue-600 dark:text-blue-400">
                Email: <a href="mailto:support@aliatish.com">support@aliatish.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
