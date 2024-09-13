'use client'
import React from 'react';
import { useTranslations } from 'next-intl';
import { OrderButton } from '@/components/order-button';
import { FaArrowRight } from 'react-icons/fa';
import {
  FaCheckCircle,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaFigma,
  FaCode,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(() => import('@/components/LottieAnimation'), {
  ssr: false,
});

export default function ServicesPage() {
  //   const t = useTranslations('ServicesPage');

  return (
    <>
      <section className="max-w-full dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="mx-auto px-12 py-8">
          <div className="bg-white dark:bg-gray-800 p-8 flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-2/3 lg:pr-8">
              <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Web Design
              </h3>
              <div className="flex justify-between mb-8 items-center lg:hidden">
                <LottieAnimation />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                At the forefront of modern web design, I leverage the latest technologies and best practices to create stunning, responsive, and user-friendly websites. My approach focuses on delivering a seamless experience across devices, ensuring that every design element enhances the overall user experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Utilizing Next.js, a powerful React framework, I build highly performant and scalable web applications. With server-side rendering, static site generation, and API routes, Next.js ensures optimal performance and SEO benefits. Coupled with Tailwind CSS, I achieve a sleek, modern design aesthetic while maintaining flexibility and responsiveness.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                My web design process integrates user-centric principles and cutting-edge technologies. I use tools like Figma for prototyping and design, HTML5 and CSS3 for structural and stylistic elements, and React for interactive components. Tailwind CSS allows for rapid and consistent styling, making it easy to adjust designs on the fly and adhere to design systems.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <li className="flex items-center mb-2">
                  <FaCheckCircle className="text-teal-500 mr-2" />
                  Custom Layouts
                </li>
                <li className="flex items-center mb-2">
                  <FaCheckCircle className="text-teal-500 mr-2" />
                  Responsive Design
                </li>
                <li className="flex items-center mb-2">
                  <FaCheckCircle className="text-teal-500 mr-2" />
                  SEO Optimization
                </li>
                <li className="flex items-center mb-2">
                  <FaHtml5 className="text-orange-600 mr-2" />
                  HTML5
                </li>
                <li className="flex items-center mb-2">
                  <FaCss3Alt className="text-blue-600 mr-2" />
                  CSS3
                </li>
                <li className="flex items-center mb-2">
                  <SiTailwindcss className="text-blue-500 mr-2" />
                  Tailwind CSS
                </li>
                <li className="flex items-center mb-2">
                  <FaReact className="text-blue-500 mr-2" />
                  React
                </li>
                <li className="flex items-center mb-2">
                  <FaFigma className="text-pink-500 mr-2" />
                  Figma
                </li>
                <li className="flex items-center mb-2">
                  <FaCode className="text-green-500 mr-2" />
                  Modern Technologies
                </li>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/3 lg:pl-8">
              <LottieAnimation />
            </div>
          </div>

          <div className="py-8 mt-12 text-center">
            <OrderButton className="flex items-center justify-center bg-orange-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
              Get in Touch <FaArrowRight className="ml-3" />
            </OrderButton>
          </div>
        </div>
      </section>
    </>
  );
}
