'use client';
import React from 'react';
import Link from 'next/link';
import { PiCopyrightLight } from 'react-icons/pi';
import { FaGithub, FaDiscord, FaKaggle, FaYoutube, FaLink } from 'react-icons/fa';
import SocialMediLinks from '@/components/SocialMediLinks';
import { useLocale } from 'next-intl';

const FooterBar = () => {
  const locale = useLocale();
  return (
    <footer className="bg-white dark:bg-zinc-950 text-black dark:text-white py-12 font-spaceMono mt-auto">
      <div className="container mx-auto px-6 sm:px-8 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        <div className="flex flex-col col-span-2 lg:col-span-2">
          <h3 className="text-xl font-semibold text-orange-600 mb-4 flex items-center space-x-2">
            <FaGithub className="text-2xl" />
            <span>About Us</span>
          </h3>
          <p className="text-md text-gray-500 dark:text-gray-300">
            Aliatish is a leading provider of web solutions, offering cutting-edge design and development services for clients worldwide. Our mission is to innovate and create exceptional digital experiences that drive success.
          </p>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h4 className="text-xl font-semibold text-orange-600 mb-2">Pages</h4>
          <div className="flex flex-col space-y-1 text-md text-gray-500 dark:text-gray-300">
            <Link href={`/${locale}/`} className="hover:text-orange-600 dark:hover:text-orange-400">Home</Link>
            <Link href={`/${locale}/services`} className="hover:text-orange-600 dark:hover:text-orange-400">Services</Link>
            <Link href={`/${locale}/packages`} className="hover:text-orange-600 dark:hover:text-orange-400">Packages</Link>
            <Link href={`/${locale}/blog`} className="hover:text-orange-600 dark:hover:text-orange-400">Blog</Link>
            <Link href={`/${locale}/about`} className="hover:text-orange-600 dark:hover:text-orange-400">About</Link>
            <Link href={`/${locale}/shop`} className="hover:text-orange-600 dark:hover:text-orange-400">Shop</Link>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-xl font-semibold text-orange-600 mb-2">Work with Us</h4>
          <div className="flex flex-col space-y-1 text-md text-gray-500 dark:text-gray-300">
            <Link href={`/${locale}/career`} className="hover:text-orange-600 dark:hover:text-orange-400">Career</Link>
            <Link href={`/${locale}/terms`} className="hover:text-orange-600 dark:hover:text-orange-400">Terms of Service</Link>
            <Link href={`/${locale}/privacy`} className="hover:text-orange-600 dark:hover:text-orange-400">Privacy Policy</Link>
            <Link href={`/${locale}/faq`} className="hover:text-orange-600 dark:hover:text-orange-400">FAQ</Link>
            <Link href={`/${locale}/partnership`} className="hover:text-orange-600 dark:hover:text-orange-400">Partnership</Link>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-orange-600 mb-4 flex items-center space-x-2">
            <FaDiscord className="text-2xl" />
            <span>Contact Info</span>
          </h3>
          <div className="space-y-2 text-md text-gray-500 dark:text-gray-300">
            <p className="flex items-center space-x-1">
              <span>Email: <a href="mailto:support@aliatish.com" className="hover:text-orange-600 dark:hover:text-orange-400">support@aliatish.com</a></span>
            </p>
            <p className="flex items-center space-x-1">
              <span>Phone: <a href="tel:+37491165863" className="hover:text-orange-600 dark:hover:text-orange-400">+37491165863</a></span>
            </p>
            <p className="flex items-center space-x-1">
              <span>Address: Vilnus st, Yerevan, Armenia</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-20 flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="text-md text-gray-500 dark:text-gray-300 flex items-center">
          <PiCopyrightLight className="inline text-orange-600" /> 2024 Aliatish. All Rights Reserved.
        </p>
        <div className="text-md text-gray-500 dark:text-gray-300">
          <SocialMediLinks />
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
