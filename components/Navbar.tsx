'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import LocaleSwitcher from '@/components/localswitcher';
import ThemeSwitch from '@/components/ThemeSwitch';
import { useLocale } from 'next-intl';
import { IoFlameSharp, IoMenu, IoClose } from 'react-icons/io5';
import { UserMenu } from './userMenu';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const locale = useLocale();

    return (
        <header className="w-full bg-white dark:bg-zinc-950 border-b border-stone-400 font-spaceMono z-50">
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-2 mx-auto relative">
                <Link href="/" className="flex items-center space-x-2">
                    <IoFlameSharp className="text-3xl text-orange-700 dark:text-yellow-500" />
                    <span className="text-3xl font-extrabold font-spaceMono text-orange-700 dark:text-yellow-500">
                        Atish
                    </span>
                </Link>

                <button
                    className="lg:hidden text-3xl text-orange-700 dark:text-yellow-500"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <IoClose /> : <IoMenu />}
                </button>

                <nav className="hidden lg:flex items-center space-x-4 text-lg text-orange-700 uppercase dark:text-yellow-500">
                    <Link href={`/${locale}/services`} className="hover:text-yellow-900 dark:text-yellow-600 dark:hover:text-yellow-400">
                        {'// services'}
                    </Link>
                    <Link href={`/${locale}/blog`} className="hover:text-yellow-900 dark:text-yellow-600 dark:hover:text-yellow-400">
                        {' // blog'}
                    </Link>
                    <Link href={`/${locale}/about`} className="hover:text-yellow-900 dark:text-yellow-600 dark:hover:text-yellow-400">
                        {' // Who Am I?'}
                    </Link>
                    <div className="flex items-center ml-auto gap-2">
                    <UserMenu/>
                        <ThemeSwitch />
                        <LocaleSwitcher />
                        
                    </div>
                </nav>
            </div>

            <div
                className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white dark:bg-zinc-950 border-t border-stone-400 z-50`}
            >
                <nav className="flex flex-col items-center space-y-4 py-4">
                    <Link href={`/${locale}/services`} className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600" onClick={toggleMenu}>
                        {'services'}
                    </Link>
                    <Link href={`/${locale}/blog`} className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600" onClick={toggleMenu}>
                        {'blog'}
                    </Link>
                    <Link href={`/${locale}/about`} className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600" onClick={toggleMenu}>
                        {'about'}
                    </Link>
                    <div className="flex justify-center gap-4 mt-4">
                        <ThemeSwitch />
                        <LocaleSwitcher />
                        <UserMenu/>
                    </div>
                </nav>
            </div>
        </header>
    );
}
