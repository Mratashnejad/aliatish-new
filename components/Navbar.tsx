import React, { useState } from 'react';
import Image from 'next/image';
import ThemeSwitch from '@/components/ThemeSwitch';
import Logo from '/public/images/Logo-Aliatish.svg';
import LocalSwitcher from '@/components/localswitcher';
import { useTranslations } from 'next-intl';
import NavbarButtonToggle from './NavbarButtonToggle';
import { PathButton } from './Path-button';
import Link from 'next/link';

export default function Navbar() {
    const t = useTranslations('Navigation');
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-30 w-full bg-white dark:bg-gray-900 ">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <div className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                            <Image src={Logo} alt="Aliatish Logo" width={50} height={50} />
                        </div>
                    </Link>
                </div>
                
                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center space-x-6 text-lg text-gray-800 uppercase dark:text-white">
                    <Link href="/" className="hover:text-indigo-500">
                        Home
                    </Link>
                    <PathButton path="/packages" className="hover:text-indigo-500">
                        {t('packages')}
                    </PathButton>
                    <PathButton path="/services" className="hover:text-indigo-500">
                        {t('services')}
                    </PathButton>
                    <PathButton path="/projects" className="hover:text-indigo-500">
                        {t('projects')}
                    </PathButton>
                    <PathButton path="/blog" className="hover:text-indigo-500">
                        {t('blog')}
                    </PathButton>
                    <NavbarButtonToggle />
                    <ThemeSwitch />
                    <LocalSwitcher />
                </nav>

                {/* Mobile Menu Button */}
                <button className="lg:hidden">
                    <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white transition-all"></span>
                    <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white transition-all"></span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white transition-all"></span>
                </button>
            </div>

            {/* Mobile Menu
            {isOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-900">
                    <nav className="flex flex-col items-center space-y-4 py-4 text-lg text-gray-800 uppercase dark:text-white">
                        <Link href="/" className="hover:text-indigo-500" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <PathButton path="/packages" className="hover:text-indigo-500" onClick={() => setIsOpen(false)}>
                            {t('packages')}
                        </PathButton>
                        <PathButton path="/services" className="hover:text-indigo-500" onClick={() => setIsOpen(false)}>
                            {t('services')}
                        </PathButton>
                        <PathButton path="/projects" className="hover:text-indigo-500" onClick={() => setIsOpen(false)}>
                            {t('projects')}
                        </PathButton>
                        <PathButton path="/blog" className="hover:text-indigo-500" onClick={() => setIsOpen(false)}>
                            {t('blog')}
                        </PathButton>
                        <NavbarButtonToggle />
                        <ThemeSwitch />
                        <LocalSwitcher />
                    </nav>
                </div>
            )} */}
        </header>
    );
}
