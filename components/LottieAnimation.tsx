// components/LottieAnimation.tsx
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import webdesignData from '@/public/images/webdesign.json'; // Adjust the path if necessary

const LottieAnimation: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    setAnimationData(webdesignData);
  }, []);

  if (!animationData) return null;

  return <Lottie animationData={animationData} loop={true} />;
};

export default LottieAnimation;
