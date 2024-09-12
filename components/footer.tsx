import React from 'react';
import { useTranslations } from 'next-intl';
import { PathButton } from './Path-button';
import Link from 'next/link';
import { PiCopyrightLight } from "react-icons/pi";
import SocialMediLinks from './SocialMediLinks';

const FooterBar = () => {
    const t = useTranslations('Footer');
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-stone-400 font-spaceMono">
            {/* Secondary Footer with Social Media Links */}
            <div className="bg-zinc-100 dark:bg-zinc-900 py-4">
                <div className="flex justify-center text-zinc-600 dark:text-zinc-100">
                    <SocialMediLinks />
                </div>
            </div>

            {/* Primary Footer with Path Buttons */}
            <div className="bg-white dark:bg-zinc-950 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                        <Link href="/" className="flex items-center space-x-2 mb-4 lg:mb-0">
                            <div className="flex items-center text-lg font-extrabold font-spaceMono">
                                <PiCopyrightLight className="text-2xl text-orange-700 dark:text-yellow-500" />
                                <span>2024 aliatish</span>
                            </div>
                        </Link>

                        {/* Footer Menu with PathButtons */}
                        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-sm text-zinc-500 dark:text-zinc-100">
                            <PathButton
                                path="/helpCenter"
                                className="hover:text-yellow-900 dark:hover:text-yellow-600"
                            >
                                <span>// {t('helpCenter')}</span>
                            </PathButton>
                            <PathButton
                                path="/terms"
                                className="hover:text-yellow-900 dark:hover:text-yellow-600"
                            >
                                <span>// {t('termsOfService')}</span>
                            </PathButton>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterBar;
