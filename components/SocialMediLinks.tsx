'use client'
import React from 'react';
import { FaGithub, FaStackOverflow, FaKaggle, FaLinkedin, FaYoutube, FaDiscord, } from 'react-icons/fa';

import Link from 'next/link';

const SocialMediLinks = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4">
       <Link
        href="https://www.youtube.com/channel/UCKsYwB9gQu_pvewAmRqlyKA?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
      >
        <FaYoutube size={24} />
      </Link>
      
      <Link
        href="https://github.com/mratashnejad"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
      >
        <FaGithub size={24} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/alirezaatashnejad/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
      >
        <FaLinkedin size={24} />
      </Link>
      <Link
        href="https://stackoverflow.com/users/13326869/alireza-atashnejad"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
      >
        <FaStackOverflow size={24} />
      </Link>
      <Link
        href="https://discord.com/1041300172174536734"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
      >
        <FaDiscord size={24} />
      </Link>
      <Link
        href="https://www.kaggle.com/alirezaatashnejad"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"
      >
        <FaKaggle size={24} />
      </Link>
    </div>
  );
};

export default SocialMediLinks;
