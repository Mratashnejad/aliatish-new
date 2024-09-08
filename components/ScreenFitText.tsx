import React, { useEffect, useRef } from "react";

export const ScreenFitText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = (fulltext:string , className : string) => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="w-full items-center justify-center bg-slate-950"
      ref={containerRef}
    >
      <span
        className="whitespace-nowrap text-center font-bold uppercase text-white"
        ref={textRef}
      >
        WEB APPLICATION WEBSITES
      </span>
    </div>
  );
};
