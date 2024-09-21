import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import loading from '@/public/animations/loading.json'; 

const LoadingAnimation: React.FC = () => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        setAnimationData(loading);
    }, []);

    if (!animationData) return null;

    return <Lottie animationData={animationData} loop={true} />;
};

export default LoadingAnimation;
