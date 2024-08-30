'use client'
import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import { SignInButton } from '@/components/sign-in-button';
import Logo from '@/public/images/Logo-Aliatish.svg'; // Adjust the path if needed
import { Locale } from '@/i18n.config';
import LocaleSwitcher from '@/components/locale-switcher';
import Link from 'next/link';

interface NavbarProps {
    lang: Locale;
    navigation: {
        home: string;
        packages: string;
        services: string;
        blog: string;
        about: string;
    };
}
export default function NavbarClient({ lang, navigation }: NavbarProps) {
    const defaultNavigation = {
        home: 'Home',
        packages: 'Packages',
        services: 'Services',
        blog: 'Blog',
        about: 'About'
    };

    const nav = { ...defaultNavigation, ...navigation };

    return (
        <div>
            <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-1 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">
                                <Logo className="h-7 w-auto" alt="Website Title" />
                                <p className="sr-only">Ali Atish</p>
                            </a>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <Link href="/">
                                <div className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                                    {nav.home}
                                </div>
                            </Link>
                            <Link href="/packages">
                                <div className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                                    {nav.packages}
                                </div>
                            </Link>
                            <Link href="/services">
                                <div className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                                    {nav.services}
                                </div>
                            </Link>
                            <Link href="/blog">
                                <div className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                                    {nav.blog}
                                </div>
                            </Link>
                            <Link href="/about">
                                <div className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                                    {nav.about}
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <ThemeSwitch />
                            <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/signin">
                                <SignInButton />
                            </a>
                        </div>
                        <LocaleSwitcher />
                    </div>
                </div>
            </header>
            <div className="md:hidden">Navbar</div>
        </div>
    );
}
