'use client'
import React, { useState } from 'react';
import { IoFlameSharp } from 'react-icons/io5'; 
import ThemeSwitch from '@/components/ThemeSwitch';
import { PathButton } from './Path-button';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5'; 

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="w-full bg-white dark:bg-zinc-950 border-b border-stone-400 font-spaceMono">
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-2 mx-auto">
                {/* Logo with text */}
                <Link href="/" className="flex items-center space-x-2">
                    <IoFlameSharp className="text-5xl text-orange-700 dark:text-yellow-500" />
                    <span className="text-4xl font-extrabold font-spaceMono">
                        Ali Atish
                    </span>
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    className="lg:hidden text-3xl text-orange-700 dark:text-yellow-500"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <IoClose /> : <IoMenu />}
                </button>

                {/* Desktop Menu */}
                <nav className={`hidden lg:flex items-center space-x-8 text-lg text-orange-700 uppercase dark:text-yellow-500`}>
                    <PathButton
                        path="/services"
                        className="hover:text-yellow-900 dark:text-yellow-600"
                    >
                        // services
                    </PathButton>

                    <PathButton
                        path="/blog"
                        className="hover:text-yellow-900 dark:text-yellow-600"
                    >
                        // blog
                    </PathButton>
                    
                    <PathButton
                        path="/about"
                        className="hover:text-yellow-900 dark:text-yellow-600"
                    >
                        // who am i?
                    </PathButton>

                    <ThemeSwitch />
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white dark:bg-zinc-950 border-t border-stone-400`}>
                <nav className="flex flex-col items-center space-y-4 py-4">
                    <PathButton
                        path="/services"
                        className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600"
                        onClick={toggleMenu} // Handle closing the menu
                    >
                        // services
                    </PathButton>

                    <PathButton
                        path="/blog"
                        className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600"
                        onClick={toggleMenu} // Handle closing the menu
                    >
                        // blog
                    </PathButton>

                    <PathButton
                        path="/about"
                        className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600"
                        onClick={toggleMenu} // Handle closing the menu
                    >
                        // about
                    </PathButton>

                    <ThemeSwitch />
                </nav>
            </div>
        </header>
    );
}
