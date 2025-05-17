'use client';
import Script from 'next/script';
import { useEffect } from 'react';

const PADDLE_VENDOR_ID = 'YOUR_VENDOR_ID'; // TODO: Replace with your Paddle Vendor ID

export default function PaddleLoader() {
  useEffect(() => {
    // This code only runs on the client
    if (window.Paddle) {
      window.Paddle.Setup({ vendor: PADDLE_VENDOR_ID });
    }
  }, []); // Empty dependency array means this runs once after component mounts

  return (
    <Script
      src="https://cdn.paddle.com/paddle/paddle.js"
      strategy="afterInteractive"
    />
  );
} 