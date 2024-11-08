'use client'
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import fire from '@/public/animations/fire.json'; 

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const FireAnimation: React.FC = () => {
    const lottieRef = useRef<any>(null);  // Reference to the Lottie animation instance

    const handleComplete = () => {
        // Loop only the segment from frame 120 to 180 after the first complete run
        if (lottieRef.current) {
            lottieRef.current.playSegments([90, 180], true);  // Loop from 120 to 180
        }
    };

    useEffect(() => {
        // On initial render, play from 0 to 180
        if (lottieRef.current) {
            lottieRef.current.playSegments([0, 180], false);  // Play the full animation once
        }
    }, []);

    return (
        <Lottie 
            lottieRef={lottieRef}
            animationData={fire}
            loop={false}  // Do not loop the full animation initially
            onComplete={handleComplete}  // Trigger when the animation completes
        />
    );
};

export default FireAnimation;
