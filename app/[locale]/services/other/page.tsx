'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaUniversity, FaCreditCard, FaHandsHelping } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesComponent() {
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
            Our Services
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-md dark:border-gray-700"
            >
              <FaFileAlt size={50} className="text-blue-500 mb-2" />
              <h2 className="text-xl font-medium">US Lottery Application Assistance</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We help you fill out your applications accurately and efficiently.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-md dark:border-gray-700"
            >
              <FaUniversity size={50} className="text-blue-500 mb-2" />
              <h2 className="text-xl font-medium">University Ranking Excel Files</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Purchase comprehensive Excel files of university rankings by US News.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-md dark:border-gray-700"
            >
              <FaCreditCard size={50} className="text-blue-500 mb-2" />
              <h2 className="text-xl font-medium">Payment Facilitation</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We assist in making payments with MasterCard for educational platforms.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-md dark:border-gray-700"
            >
              <FaHandsHelping size={50} className="text-blue-500 mb-2" />
              <h2 className="text-xl font-medium">Custom Assistance</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Need help with something else? Let us know! We can handle various services.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
