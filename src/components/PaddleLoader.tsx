'use client';
import Script from 'next/script';
import { useEffect } from 'react';

// Get vendor ID from environment variable - will be provided at runtime
const PADDLE_VENDOR_ID = process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID || '';
// Set to true to use sandbox environment for testing
const USE_SANDBOX = true;

export default function PaddleLoader() {
  useEffect(() => {
    // This code only runs on the client
    if (window.Paddle) {
      window.Paddle.Setup({ 
        vendor: PADDLE_VENDOR_ID
      });
    }
  }, []); // Empty dependency array means this runs once after component mounts

  return (
    <Script
      src={USE_SANDBOX ? "https://cdn.paddle.com/paddle/paddle.js" : "https://cdn.paddle.com/paddle/paddle.js"}
      strategy="afterInteractive"
    />
  );
} 