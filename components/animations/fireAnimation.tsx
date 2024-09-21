import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import fire from '@/public/animations/fire.json'; 

const FireAnimation: React.FC = () => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        setAnimationData(fire);
    }, []);

    if (!animationData) return null;

    return <Lottie animationData={animationData} loop={true} />;
};

export default FireAnimation;
