import React from 'react';
import { useTranslations } from 'next-intl';
import { PathButton } from './Path-button';

const FooterBar = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:rounded-t-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {t('copyright')}
          </div>
          <div className="flex space-x-4">
            <PathButton
              className="rounded-lg px-3 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              path='/helpCenter'
            >
              {t('helpCenter')}
            </PathButton>
            <PathButton
              className="rounded-lg px-3 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              path='/terms'
            >
              {t('termsOfService')}
            </PathButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
