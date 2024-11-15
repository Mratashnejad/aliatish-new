import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const FireAnimation = dynamic(
    () => import('@/components/animations/fireAnimation'),
    { ssr: false }
);

const HeroSection = () => {
    const t = useTranslations('HeroSection');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-black text-gray-800 dark:text-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-1 text-center lg:text-start px-6 sm:px-8 md:px-12 w-full">
                {/* Text Content */}
                <div className="lg:w-2/3 lg:pl-36 lg:flex lg:flex-col lg:mt-2 text-center lg:text-start">
                    <h1 className="text-4xl lg:text-6xl sm:text-4xl md:text-4xl font-extrabold mb-4 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 dark:from-yellow-500 dark:to-red-600">
                        {t('title')}
                    </h1>

                    <h2 className="text-2xl sm:text-2xl md:text-2xl font-semibold mb-6">
                        {t('description')}
                    </h2>
                </div>

                {/* Fire Animation */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex items-center">
                        <FireAnimation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
