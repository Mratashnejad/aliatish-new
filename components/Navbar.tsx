'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import LocaleSwitcher from '@/components/localswitcher';
import ThemeSwitch from '@/components/ThemeSwitch';
import { useLocale } from 'next-intl';
import { IoFlameSharp, IoMenu, IoClose } from 'react-icons/io5';
import { UserMenu } from './userMenu';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);
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

                <nav className="hidden lg:flex items-center justify-center flex-1 space-x-4 text-lg text-orange-700 uppercase dark:text-yellow-500">
                    <div className="relative hover:text-yellow-900 dark:hover:text-yellow-400" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link href={`/${locale}/services`}>
                            {'// services'}
                        </Link>
                        <FaChevronDown className="inline ml-1 text-orange-700 dark:text-yellow-500" />
                        {isDropdownOpen && (
                            <div className="absolute bg-white dark:bg-zinc-950 mt-2 py-2 w-48 border border-stone-400">
                                <Link href={`/${locale}/services/web-applications`} className="block px-4 py-2 hover:bg-stone-200 dark:hover:bg-stone-700">Web Applications</Link>
                                <Link href={`/${locale}/services/ui-ux-design`} className="block px-4 py-2 hover:bg-stone-200 dark:hover:bg-stone-700">UI/UX Design</Link>
                                <Link href={`/${locale}/services/seo`} className="block px-4 py-2 hover:bg-stone-200 dark:hover:bg-stone-700">SEO</Link>
                            </div>
                        )}
                    </div>
                    <Link href={`/${locale}/blog`} className="hover:text-yellow-900 dark:hover:text-yellow-400">
                        {' // blog'}
                    </Link>
                    <Link href={`/${locale}/packages`} className="hover:text-yellow-900 dark:hover:text-yellow-400">
                        {' // packages'}
                    </Link>
                    <Link href={`/${locale}/about`} className="hover:text-yellow-900 dark:hover:text-yellow-400">
                        {' // Who Am I?'}
                    </Link>
                </nav>

                <div className="flex items-center gap-2 text-orange-700 dark:text-yellow-500">
                    <LocaleSwitcher />
                    <ThemeSwitch/>
                    <UserMenu/>
                </div>

                <button
                    className="lg:hidden text-3xl text-orange-700 dark:text-yellow-500"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>

            <div
                className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white dark:bg-zinc-950 border-t border-stone-400 z-50`}
            >
                <nav className="flex flex-col items-center space-y-4 py-4">
                    <div className="relative hover:text-yellow-900 dark:text-yellow-600 dark:hover:text-yellow-400">
                        <Link href={`/${locale}/services`} onClick={toggleMenu}>
                            {'services'}
                        </Link>
                        <FaChevronDown className="inline ml-1 text-orange-700 dark:text-yellow-500" />
                        {isDropdownOpen && (
                            <div className="absolute bg-white dark:bg-zinc-950 mt-2 py-2 w-48 border border-stone-400">
                                <Link href={`/${locale}/services/web-applications`} className="block px-4 py-2 hover:bg-stone-200 dark:hover:bg-stone-700">Web Applications</Link>
                                <Link href={`/${locale}/services/ui-ux-design`} className="block px-4 py-2 hover:bg-stone-200 dark:hover:bg-stone-700">UI/UX Design</Link>
                                <Link href={`/${locale}/services/seo`} className="block px-4 py-2 hover:bg-stone-200 dark:hover:bg-stone-700">SEO</Link>
                            </div>
                        )}
                    </div>
                    <Link href={`/${locale}/blog`} className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600" onClick={toggleMenu}>
                        {'blog'}
                    </Link>
                    <Link href={`/${locale}/packages`} className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600" onClick={toggleMenu}>
                        {'packages'}
                    </Link>
                    <Link href={`/${locale}/about`} className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600" onClick={toggleMenu}>
                        {'about'}
                    </Link>
                    <div className="flex justify-center gap-4 mt-4">
                        <ThemeSwitch />
                        <LocaleSwitcher/>
                        <UserMenu />
                    </div>
                </nav>
            </div>
        </header>
    );
}
