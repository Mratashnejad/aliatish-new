import React from 'react';
import Image from 'next/image';
import ThemeSwitch from './ThemeSwitch';
import Logo from '/public/images/Logo-Aliatish.svg';
import LocalSwitcher from './localswitcher';
import { useTranslations } from 'next-intl';
import NavbarButtonToggle from './NavbarButtonToggle';
import { PathButton } from './Path-button';
import Link from 'next/link';

export default function Navbar() {
    const t = useTranslations('Navigation');

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-1 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-3">
                    <div className="flex items-center justify-between">
                        {/* Left Side */}
                        <div className="flex shrink-0">
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    alt="Ali Atish Logo"
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        </div>

                        {/* Centered Items */}
                        <div className="hidden md:flex flex-grow justify-center">
                            <div className="flex items-center gap-2">
                                <PathButton
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    path="/packages"
                                >
                                    {t('packages')}
                                </PathButton>
                                <PathButton
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    path="/services"
                                >
                                    {t('services')}
                                </PathButton>
                                <PathButton
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    path="/projects"
                                >
                                    {t('projects')}
                                </PathButton>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-2">
                            <PathButton
                                className="inline-flex items-center justify-center rounded-xl bg-green-600 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
                                path="/order"
                            >
                                {t('submitOrder')}
                            </PathButton>
                            <div className="inline-flex items-center justify-center rounded-xl px-1 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer">
                                <NavbarButtonToggle />
                            </div>
                            <ThemeSwitch />
                            <LocalSwitcher />
                        </div>
                    </div>
                </div>
            </header>

            {/* Placeholder for mobile navbar or other elements */}
            <div className="md:hidden">Navbar</div>
        </>
    );
}
