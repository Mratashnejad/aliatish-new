import type { Locale } from '@/i18n.config';

const dictionaries: Record<Locale, () => Promise<Record<string, any>>> = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  hy: () => import('@/dictionaries/hy.json').then(module => module.default),
  ir: () => import('@/dictionaries/ir.json').then(module => module.default)
};

export const getDictionary = async (locale: Locale) => {
  if (dictionaries[locale]) {
    return dictionaries[locale]();
  } else {
    console.warn(`No dictionary found for locale: ${locale}`);
    // Return an empty object or default dictionary
    return {};
  }
};
