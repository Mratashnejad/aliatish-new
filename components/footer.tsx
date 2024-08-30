'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const FooterBar = () => {
  const router = useRouter();

  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:rounded-t-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            © 2024 Ali Atish. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <button
              className="rounded-lg px-3 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => router.push('/helpCenter')}
            >
              Help Center
            </button>
            <button
              className="rounded-lg px-3 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => router.push('/terms')}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
