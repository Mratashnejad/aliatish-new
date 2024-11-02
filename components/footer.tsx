'use client';
import React from 'react';
import Link from 'next/link';
import { PiCopyrightLight } from 'react-icons/pi';
import SocialMediLinks from '@/components/SocialMediLinks';

const FooterBar = () => {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t font-spaceMono">
            <div className="py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                        <Link href="/" className="flex items-center space-x-2 mb-4 lg:mb-0">
                            <div className="flex items-center text-lg font-extrabold font-spaceMono">
                                <PiCopyrightLight className="text-2xl text-orange-700 dark:text-yellow-500" />
                                <span>2024 aliatish</span>
                            </div>
                        </Link>
                        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-sm text-zinc-500 dark:text-zinc-100">
                            <SocialMediLinks />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterBar;
