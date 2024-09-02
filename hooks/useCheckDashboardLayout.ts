//hooks/
'use client'
import { usePathname } from 'next/navigation';

export function useCheckDashboardLayout() {
    const pathname = usePathname();
    return pathname !== '/dashboard'; // Return true if the path is not '/dashboard'
}
