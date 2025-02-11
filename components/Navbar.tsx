'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import LocaleSwitcher from '@/components/localswitcher';
import ThemeSwitch from '@/components/ThemeSwitch';
import { useLocale } from 'next-intl';
import { IoFlameSharp, IoMenu, IoClose } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { UserMenu } from './userMenu';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setIsDropdownOpen(false);

    const locale = useLocale();

    return (
        <header className="w-full bg-white dark:bg-zinc-950 border-b border-stone-400 font-spaceMono z-50">
            <div className="container flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-2 mx-auto relative">
                <Link href="/" className="flex items-center space-x-2">
                    <IoFlameSharp className="text-3xl text-orange-700 dark:text-yellow-500" />
                    <span className="text-3xl font-extrabold font-spaceMono text-orange-700 dark:text-yellow-500">
                        Atish
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center justify-center flex-1 space-x-4 text-lg text-orange-700 uppercase dark:text-yellow-500">
                    <div className="relative hover:text-yellow-900 dark:hover:text-yellow-400">
                        <button
                            className="flex items-center"
                            onClick={toggleDropdown}
                        >
                            {' // SERVICES'}
                            <FaChevronDown className="inline ml-1 text-orange-700 dark:text-yellow-500" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute -left-5 mt-4 py-2 w-64 bg-white dark:bg-zinc-950 border border-stone-400 z-50">
                                <Link
                                    href={`/${locale}/services/webapplications`}
                                    className="block px-4 py-2 hover:bg-stone-200 dark:hover:bg-stone-700"
                                    onClick={closeDropdown}
                                >
                                    {' /// Web Applications'}
                                </Link>
                                <Link
                                    href={`/${locale}/services/design`}
                                    className="block px-4 py-2 hover:bg-stone-200 dark:hover:bg-stone-700"
                                    onClick={closeDropdown}
                                >
                                    {' /// UI/UX Design'}
                                </Link>
                                <Link
                                    href={`/${locale}/services/seo`}
                                    className="block px-4 py-2 hover:bg-stone-200 dark:hover:bg-stone-700"
                                    onClick={closeDropdown}
                                >
                                    {' /// SEO'}
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        href={`/${locale}/blog`}
                        className="hover:text-yellow-900 dark:hover:text-yellow-400"
                    >
                        {' // blog'}
                    </Link>
                    <Link
                        href={`/${locale}/packages`}
                        className="hover:text-yellow-900 dark:hover:text-yellow-400"
                    >
                        {' // packages'}
                    </Link>
                </nav>

                {/* Only show these in large screens */}
                <div className="hidden lg:flex items-center gap-2 text-orange-700 dark:text-yellow-500">
                    <ThemeSwitch />
                    <LocaleSwitcher />
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

            {/* Mobile Menu */}
            <div
                className={`lg:hidden ${
                    isMenuOpen ? 'block' : 'hidden'
                } absolute top-12 left-0 w-full bg-white dark:bg-zinc-950 border-t border-stone-400 z-50`}
            >
                <nav className="flex flex-col items-center space-y-4 py-4">
                    <div className="relative">
                        <button
                            className="flex items-center justify-between w-full px-4 py-2 text-orange-700 dark:text-yellow-500"
                            onClick={toggleDropdown}
                        >
                            Services
                            <FaChevronDown className="inline ml-2 text-orange-700 dark:text-yellow-500" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute -left-14 mt-2 py-2 w-60  bg-white dark:bg-zinc-950 border border-stone-400 z-50">
                                <Link
                                    href={`/${locale}/services/webapplications`}
                                    className="block px-4 py-2 text-center text-orange-700 dark:text-yellow-500 hover:bg-stone-200 dark:hover:bg-stone-700"
                                    onClick={() => {
                                        toggleMenu();
                                        closeDropdown();
                                    }}
                                >
                                    Web Applications
                                </Link>
                                <Link
                                    href={`/${locale}/services/design`}
                                    className="block px-4 py-2 text-center text-orange-700 dark:text-yellow-500 hover:bg-stone-200 dark:hover:bg-stone-700"
                                    onClick={() => {
                                        toggleMenu();
                                        closeDropdown();
                                    }}
                                >
                                    UI/UX Design
                                </Link>
                                <Link
                                    href={`/${locale}/services/seo`}
                                    className="block px-4 py-2 text-center text-orange-700 dark:text-yellow-500 hover:bg-stone-200 dark:hover:bg-stone-700"
                                    onClick={() => {
                                        toggleMenu();
                                        closeDropdown();
                                    }}
                                >
                                    SEO
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        href={`/${locale}/blog`}
                        className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600"
                        onClick={toggleMenu}
                    >
                        Blogs
                    </Link>
                    <Link
                        href={`/${locale}/packages`}
                        className="text-lg text-orange-700 dark:text-yellow-500 hover:text-yellow-900 dark:hover:text-yellow-600"
                        onClick={toggleMenu}
                    >
                        Pricing
                    </Link>
                    {/* ThemeSwitch and LocaleSwitcher in Mobile Menu */}
                    <div className="flex items-center gap-4 mt-4 text-orange-700 dark:text-yellow-500">
                        <ThemeSwitch />
                        <LocaleSwitcher />
                    </div>
                </nav>
            </div>
        </header>
    );
}
