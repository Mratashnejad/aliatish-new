import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from 'framer-motion';
import React, { useRef } from 'react';

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ['-45deg', '45deg']
  ); // Inverted skew for right-to-left scrolling
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -4000]
  ); // Inverted x values for right-to-left scrolling
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  ); // Add a y value for looping effect
  const y = useSpring(yRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section
      ref={targetRef}
      className="text-neutral-950 dark:text-white"
    >
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.p
          style={{ skewX, x, y }}
          className="origin-bottom-left text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
        >
          Facebook, Instagram, TikTok
        </motion.p>
      </div>
    </section>
  );
};
