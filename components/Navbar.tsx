'use client';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import { SignInButton } from '@/components/sign-in-button';
import Logo from '@/public/images/Logo-Aliatish.svg'; // Adjust the path if needed
import { useRouter } from 'next/navigation';
import { SignOutButton } from './sign-out-button';
import { useSession } from 'next-auth/react'; // Import useSession

export default function Navbar() {
    const { data: session, status } = useSession(); // Get session and status from useSession
    const router = useRouter();

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
                                <Logo
                                    className="h-7 w-auto"
                                    alt="Website Title"
                                />
                                <p className="sr-only">Ali Atish</p>
                            </a>
                        </div>
                        <div className="hidden md:flex ">
                            <div className="flex items-center gap-2">
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    onClick={() => router.push('/')}
                                >
                                    Home
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    onClick={() => router.push('/packages')}
                                >
                                    Packages
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    onClick={() => router.push('/services')}
                                >
                                    Services
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    onClick={() => router.push('/projects   ')}
                                >
                                    Projects
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    onClick={() => router.push('/blog')}
                                >
                                    Blog
                                </div>
                                <div
                                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                    onClick={() => router.push('/about')}
                                >
                                    About
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="inline-flex items-center justify-center rounded-xl bg-green-600 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
                                onClick={() => router.push('/order')}
                            >
                                Submit Order
                            </div>
                            <div
                                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-1 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
                            >
                                {status === 'authenticated' ? <SignOutButton /> : <SignInButton />}
                            </div>
                            <ThemeSwitch />
                        </div>
                    </div>
                </div>
            </header>
            <div className="md:hidden">Navbar</div>
        </>
    );
}
