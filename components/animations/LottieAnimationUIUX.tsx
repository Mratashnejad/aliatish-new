import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import webdesignData from '@/public/animations/ui.json'; // Adjust the path if necessary

const LottieAnimationUIUX: React.FC = () => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        setAnimationData(webdesignData);
    }, []);

    if (!animationData) return null;

    return <Lottie animationData={animationData} loop={true} />;
};

export default LottieAnimationUIUX;
