'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaMobileAlt, FaLaptop, FaTools } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function UIUXDesign() {
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
            UI/UX Design
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center px-4"
            variants={itemVariants}
          >
            I focus on creating intuitive, user-centered designs that prioritize user experience. I prototype and iterate with Figma to ensure designs meet user needs before development.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center px-4"
            variants={itemVariants}
          >
            The final product is responsive and accessible, offering a consistent and optimized experience across devices.
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <FaUserFriends size={50} className="text-blue-500 mb-2" />
              <p className="text-lg font-medium">User-Centered</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <FaMobileAlt size={50} className="text-blue-500 mb-2" />
              <p className="text-lg font-medium">Responsive</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <FaLaptop size={50} className="text-blue-500 mb-2" />
              <p className="text-lg font-medium">Cross-Device</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <FaTools size={50} className="text-blue-500 mb-2" />
              <p className="text-lg font-medium">Prototyping</p>
            </motion.div>
          </div>

          <h2 className="text-2xl font-semibold mb-2 text-center">About Figma</h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center px-4"
            variants={itemVariants}
          >
            Figma is a web-based UI/UX design application, popular for its collaboration features. It allows multiple users to work on a design project in real-time, making it easy to share feedback and iterate on designs quickly. Figma’s versatile tools cater to wireframing, prototyping, and high-fidelity design, providing a seamless experience from concept to completion. Its integration with various plugins further enhances the design workflow, making it a go-to tool for modern design teams.
          </motion.p>

          <h2 className="text-2xl font-semibold mb-2 text-center">Understanding UI/UX Design</h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center px-4"
            variants={itemVariants}
          >
            UI (User Interface) and UX (User Experience) design are critical components of creating a successful digital product. UI design focuses on the visual aspects, ensuring the interface is aesthetically pleasing and functional. On the other hand, UX design emphasizes the overall experience of the user, ensuring that interactions are intuitive, accessible, and enjoyable. Both disciplines work together to create products that not only look good but also meet the needs and expectations of users.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
