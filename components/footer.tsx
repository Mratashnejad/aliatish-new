import React from 'react';
import { useTranslations } from 'next-intl';
import { PathButton } from './Path-button';
import Link from 'next/link';
import { PiCopyrightLight } from "react-icons/pi";
import SocialMediLinks from './SocialMediLinks';

const FooterBar = () => {
    const t = useTranslations('Footer');
    return (
        <footer className=" bg-white dark:bg-zinc-950 border-t border-stone-400 font-spaceMono">
            {/* Secondary Footer with Social Media Links */}
            <div className=" bg-zinc-100 dark:bg-zinc-900 py-2">
                <div className="flex justify-center pt-2 text-zinc-600 dark:text-zinc-100">
                    <SocialMediLinks />
                </div>
            </div>

            {/* Primary Footer with Path Buttons */}
            <div className="w-full bg-white dark:bg-zinc-950 py-1">
                <div className="flex items-center justify-between px-20 mx-auto">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex items-center text-lg font-extrabold font-spaceMono">
                            <PiCopyrightLight className="text-2xl text-orange-700 dark:text-yellow-500" />
                            2024 aliatish
                        </div>
                    </Link>

                    {/* Footer Menu with PathButtons */}
                    <div className="flex space-x-4 text-sm text-zinc-500 dark:text-zinc-100">
                        <PathButton
                            path="/helpCenter"
                            className="hover:text-yellow-900 dark:text-yellow-600"
                        >
                            <a>// {t('helpCenter')}</a>
                        </PathButton>
                        <PathButton
                            path="/terms"
                            className="hover:text-yellow-900 dark:text-yellow-600"
                        >
                            <a>// {t('termsOfService')}</a>
                        </PathButton>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterBar;
