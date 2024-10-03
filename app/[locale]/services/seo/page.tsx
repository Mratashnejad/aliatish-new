'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaChartLine, FaUserCheck } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SEOService() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="dark:bg-black text-gray-800 dark:text-gray-200 py-1"
    >
      <div>
        <motion.div
          className="dark:bg-black py-12 px-8"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-8 text-gray-900 dark:text-yellow-700 text-center"
          >
            SEO Optimization
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center px-4"
            variants={itemVariants}
          >
            I implement best SEO practices, including fast page load times, well-structured content, and optimized Next.js configurations, to enhance visibility and drive organic traffic.
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <FaRocket size={50} className="text-blue-500 mb-2" />
              <p className="text-lg font-medium">Fast Load Times</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <FaCode size={50} className="text-blue-500 mb-2" />
              <p className="text-lg font-medium">Well-Structured Content</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <FaChartLine size={50} className="text-blue-500 mb-2" />
              <p className="text-lg font-medium">Optimized Analytics</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <FaUserCheck size={50} className="text-blue-500 mb-2" />
              <p className="text-lg font-medium">User-Centric Strategies</p>
            </motion.div>
          </div>

          <h2 className="text-2xl font-semibold mb-2 text-center">Why SEO Matters</h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center px-4"
            variants={itemVariants}
          >
            SEO is crucial for enhancing the visibility of your website in search engines. By optimizing various aspects of your site, you not only improve your rankings but also enhance user experience, leading to higher engagement and conversion rates. Implementing effective SEO strategies ensures that your target audience can find you easily, thereby driving organic traffic and achieving your business goals.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
