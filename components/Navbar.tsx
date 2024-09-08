import React from 'react';
import { IoFlameSharp } from 'react-icons/io5'; // Import the icon
import ThemeSwitch from '@/components/ThemeSwitch';
import { PathButton } from './Path-button';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="w-full bg-white dark:bg-zinc-950 border-b border-stone-400 font-spaceMono">
            <div className="flex items-center justify-between px-20 py-2 mx-auto">
                {/* Logo with text */}
                <Link href="/" className="flex items-center space-x-2">
                    <IoFlameSharp className="text-5xl text-orange-700 dark:text-yellow-500" />
                    <span className="text-4xl font-extrabold font-spaceMono">
                        Ali Atish
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="lg:flex items-center space-x-8 text-lg text-orange-700 uppercase dark:text-yellow-500">
                    <PathButton
                        path="/services"
                        className="hover:text-yellow-900 dark:text-yellow-600"
                    >
                        <a>// services</a>
                    </PathButton>

                    <PathButton
                        path="/blog"
                        className="hover:text-yellow-900 dark:text-yellow-600"
                    >
                       <a>// blog</a>
                    </PathButton>
                    <PathButton
                        path="/about"
                        className="hover:text-yellow-900 dark:text-yellow-600"
                    >
                        <a>// about</a>
                    </PathButton>

                    <ThemeSwitch />
                </nav>
            </div>
        </header>
    );
}
