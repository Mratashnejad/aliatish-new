'use client';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
    useEffect(() => setMounted(true), []);

    if (!mounted) return (<FiSun/>);

    if (resolvedTheme === 'dark') {
        return <FiSun className='size-6 hover:text-yellow-400' onClick={() => setTheme('light')} />;
    }

    if (resolvedTheme === 'light') {
        return <FiMoon className='size-6 hover:text-yellow-900' onClick={() => setTheme('dark')} />;
    }
}
