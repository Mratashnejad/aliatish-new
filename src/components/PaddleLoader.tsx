'use client';
import Script from 'next/script';

const PADDLE_VENDOR_ID = 'YOUR_VENDOR_ID'; // TODO: Replace with your Paddle Vendor ID

export default function PaddleLoader() {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/paddle.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== "undefined" && window.Paddle) {
          window.Paddle.Setup({ vendor: PADDLE_VENDOR_ID });
        }
      }}
    />
  );
} 