'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localeActive = useLocale();
    const pathname = usePathname(); // Get the current path

    // Effect to handle locale on page load
    useEffect(() => {
        const storedLocale = localStorage.getItem('selectedLocale');
        if (storedLocale && storedLocale !== localeActive) {
            // Redirect to the URL with the stored locale
            const newPathname = pathname ? pathname.replace(`/${localeActive}`, '') : '';
            const newUrl = `/${storedLocale}${newPathname}`;
            router.replace(newUrl);
        }
    }, [localeActive, pathname, router]);

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        localStorage.setItem('selectedLocale', nextLocale); // Save selected locale
        startTransition(() => {
            // Construct the new URL with the updated locale while preserving the current path
            const newPathname = pathname ? pathname.replace(`/${localeActive}`, '') : '';
            const newUrl = `/${nextLocale}${newPathname}`;
            router.replace(newUrl);
        });
    };

    return (
        <select
        defaultValue={localeActive}
        onChange={onSelectChange}
        disabled={isPending}
        className="bg-transparent text-black"
    >
        <option value="en" className="bg-transparent size-5">🇺🇸</option>
        <option value="ir" className="bg-transparent size-5">🇮🇷</option>
        <option value="hy" className="bg-transparent size-5">🇦🇲</option>
    </select>
    
    );
}
