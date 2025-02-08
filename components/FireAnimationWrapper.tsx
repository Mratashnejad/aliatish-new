"use client";

import dynamic from "next/dynamic";

const FireAnimation = dynamic(() => import("@/components/animations/fireAnimation"), {
  ssr: false,
});

export default function FireAnimationWrapper() {
  return <FireAnimation />;
}
