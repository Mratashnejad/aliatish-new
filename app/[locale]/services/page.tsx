'use client';
import React from 'react';
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
import { OrderButton } from '@/components/order-button';

const LottieAnimationWebdesignData = dynamic(() => import('@/components/animations/LottieAnimationWebdesignData'), { ssr: false });
const LottieAnimationUIUX = dynamic(() => import('@/components/animations/LottieAnimationUIUX'), { ssr: false });
const LottieAnimationSEO = dynamic(() => import('@/components/animations/LottieAnimationSEO'), { ssr: false });

export default function ServicesPage() {
  return (
    <>
      {/* Web Application Design Section */}
      <section className="max-w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16">
        <div className="mx-auto px-12">
          <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="lg:w-2/3 lg:pr-8">
              <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Web Application Design
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                At the forefront of modern web design, I leverage the latest technologies and best practices to create stunning, responsive, and user-friendly websites.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Utilizing Next.js, a powerful React framework, I build highly performant and scalable web applications with server-side rendering, static site generation, and API routes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I use Figma for prototyping, HTML5 and CSS3 for structural design, and React for interactive components, paired with Tailwind CSS for a sleek and modern design aesthetic.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500 mr-2" />
                  Custom Layouts
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500 mr-2" />
                  Responsive Design
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-teal-500 mr-2" />
                  SEO Optimization
                </div>
                <div className="flex items-center">
                  <FaHtml5 className="text-orange-600 mr-2" />
                  HTML5
                </div>
                <div className="flex items-center">
                  <FaCss3Alt className="text-blue-600 mr-2" />
                  CSS3
                </div>
                <div className="flex items-center">
                  <SiTailwindcss className="text-blue-500 mr-2" />
                  Tailwind CSS
                </div>
                <div className="flex items-center">
                  <FaReact className="text-blue-500 mr-2" />
                  React
                </div>
                <div className="flex items-center">
                  <FaFigma className="text-pink-500 mr-2" />
                  Figma
                </div>
                <div className="flex items-center">
                  <FaCode className="text-green-500 mr-2" />
                  Modern Technologies
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <LottieAnimationWebdesignData />
            </div>
          </div>

          <div className="text-right mt-8">
            <OrderButton className="inline-flex items-center bg-orange-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
              Get in Touch <FaArrowRight className="ml-3" />
            </OrderButton>
          </div>
        </div>
      </section>

      {/* UI/UX Design Section */}
      <section className="max-w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16">
        <div className="mx-auto px-12">
          <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="lg:w-2/3 lg:pr-8">
              <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                UI/UX Design
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I focus on creating intuitive, user-centered designs that prioritize user experience. I prototype and iterate with Figma to ensure designs meet user needs before development.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The final product is responsive and accessible, offering a consistent and optimized experience across devices.
              </p>
            </div>
            <div className="lg:w-1/3">
              <LottieAnimationUIUX />
            </div>
          </div>

          <div className="text-right mt-8">
            <OrderButton className="inline-flex items-center bg-orange-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
              Get in Touch <FaArrowRight className="ml-3" />
            </OrderButton>
          </div>
        </div>
      </section>

      {/* SEO Optimization Section */}
      <section className="max-w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16">
        <div className="mx-auto px-12">
          <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="lg:w-2/3 lg:pr-8">
              <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                SEO Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I implement best SEO practices, including fast page load times, well-structured content, and optimized Next.js configurations, to enhance visibility and drive organic traffic.
              </p>
            </div>
            <div className="lg:w-1/3">
              <LottieAnimationSEO />
            </div>
          </div>

          <div className="text-right mt-8">
            <OrderButton className="inline-flex items-center bg-orange-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300">
              Get in Touch <FaArrowRight className="ml-3" />
            </OrderButton>
          </div>
        </div>
      </section>
    </>
  );
}
