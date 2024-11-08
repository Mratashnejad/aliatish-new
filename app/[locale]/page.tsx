
import { FaCode} from "react-icons/fa";
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { OrderButton } from "@/components/order-button"; 
import { useTranslations } from 'next-intl'; 

const FireAnimation = dynamic(
    () => import('@/components/animations/fireAnimation'),
    { ssr: false }
);

export default function Home() {
    const t = useTranslations('HeroSection');  
    const isPersian = t('locale') === 'ir';  

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <html lang={isPersian ? 'ir' : 'en'} dir={isPersian ? 'rtl' : 'ltr'} />
                <title>Ali Atish - Web development - Full stack - Order website</title>
                <meta
                    name="description"
                    content="Full Stack Developer specializing in building scalable web applications with modern technologies. Order your web application now."
                />
                <meta
                    name="keywords"
                    content="Full Stack Developer, Web Development, Ali Atish, React, Node.js, JavaScript, HTML, CSS"
                />
                <meta
                    name="robots"
                    content="index, follow"
                />
                <meta
                    property="og:title"
                    content="Ali Atish - Full Stack Developer"
                />
                <meta
                    property="og:description"
                    content="Discover my work as a Full Stack Developer, exploring innovative solutions and technologies."
                />
                <meta
                    property="og:url"
                    content="https://aliatish.com"
                />
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main
                dir={isPersian ? 'rtl' : 'ltr'} // Set the direction dynamically
                className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:bg-gradient-to-b dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 text-gray-800 dark:text-gray-200"
            >
                <div
                    className={`flex ${isPersian ? 'flex-col-reverse' : 'flex-col lg:flex-row'} lg:items-center lg:justify-between lg:px-40 text-center lg:text-left px-6 sm:px-8 md:px-12 w-full`}
                >
                    {/* Text Section */}
                    <div
                        className={`lg:w-2/3 lg:flex lg:flex-col lg:justify-center mt-8 lg:mt-0 ${isPersian ? 'text-right' : 'text-left'}`}
                    >
                        <h1 className="lg:text-5xl sm:text-3xl md:text-4xl font-extrabold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 dark:from-yellow-500 dark:to-red-600">
                            {t('title')}
                        </h1>
                        <h2 className="text-2xl sm:text-2xl md:text-2xl font-semibold mb-6">
                            {t('description')}
                        </h2>
                        <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                            <FaCode className="text-3xl sm:text-3xl text-blue-500 dark:text-blue-300" />
                            <OrderButton className="text-3xl sm:text-2xl text-blue-500 dark:text-blue-300">
                                {t('cta')}
                            </OrderButton>
                        </div>
                    </div>

                    {/* Fire Animation Section */}
                    <div
                        className={`w-full lg:w-1/3 flex ${isPersian ? 'justify-end' : 'justify-center'} sm:justify-center`}
                    >
                        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex items-center">
                            <FireAnimation />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
