import React from 'react';
import { useTranslations } from 'next-intl';
import { PathButton } from './Path-button';
import Link from 'next/link';
import { PiCopyrightLight } from "react-icons/pi";

const FooterBar = () => {
    const t = useTranslations('Footer');
    return (
        <footer className="w-full bg-white dark:bg-zinc-950 border-t border-stone-400 font-spaceMono">
            <div className="flex items-center justify-between px-20 py-2 mx-auto">
                <Link href="/" className=" items-center space-x-2">
                    <div className="flex items-center text-lg font-extrabold font-spaceMono">
                         <PiCopyrightLight className="text-2xl text-orange-700 dark:text-yellow-500"/>
                         2023 aliatish
                    </div>
                </Link>

                {/* Footer Menu */}
                <div className="flex space-x-4 text-sm text-zinc-300 dark:text-zinc-100">
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
        </footer>
    );
};

export default FooterBar;
