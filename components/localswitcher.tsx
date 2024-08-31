'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localeActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };

    return (
        <select
            defaultValue={localeActive}
            onChange={onSelectChange}
            disabled={isPending}
        >
            <option value="en">🇺🇸</option>
            <option value="ir">🇮🇷</option>
            <option value="hy">🇦🇲</option>
        </select>
    );
}
