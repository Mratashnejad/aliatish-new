import React from 'react';
import ThemeSwitch from './ThemeSwitch';
// import { SignInButton } from '@/components/sign-in-button';
import Logo from '/public/images/Logo-Aliatish.svg';
import { useRouter } from 'next/navigation';
// import { SignOutButton } from '@/components/sign-out-button';
import LocalSwitcher from './localswitcher';
import { useTranslations } from 'next-intl';
import NavbarButtonToggle from './NavbarButtonToggle';

export default function Navbar() {
    const t = useTranslations('Navigation');
    // const router = useRouter();

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-1 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-3">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a
                                aria-current="page"
                                className="flex items-center"
                                href="/"
                            >
                                <p className="sr-only">Ali Atish</p>
                            </a>
                        </div>
                        <div className="hidden md:flex ">
                            <div className="flex items-center gap-2">
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    // onClick={() => router.push('/')}
                                >
                                    {t('home')}
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    // onClick={() => router.push('/packages')}
                                >
                                    {t('packages')}
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    // onClick={() => router.push('/services')}
                                >
                                    {t('services')}
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    // onClick={() => router.push('/projects')}
                                >
                                    {t('projects')}
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    // onClick={() => router.push('/blog')}
                                >
                                    {t('blog')}
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    // onClick={() => router.push('/about')}
                                >
                                    {t('about')}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="inline-flex items-center justify-center rounded-xl bg-green-600 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
                                // onClick={() => router.push('/order')}
                            >
                                {t('submitOrder')}
                            </div>
                            <div
                                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
                            >
                                <NavbarButtonToggle/>
                            </div>
                            <ThemeSwitch />
                            <LocalSwitcher />
                        </div>
                    </div>
                </div>
            </header>
            <div className="md:hidden">Navbar</div>
        </>
    );
}
