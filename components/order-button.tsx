'use client';
import { useRouter, usePathname } from "next/navigation";

export const OrderButton = (props: { children?: React.ReactNode; className?: string }) => {
    const router = useRouter();
    const pathname = usePathname() || ''; // Provide a fallback value in case pathname is null

    // Extract the current locale from the pathname
    const locale = pathname.split('/')[1] || 'en'; // Default to 'en' or another fallback locale

    return (
        <button
            className={props.className}
            style={{ cursor: 'pointer' }}
            onClick={() => { router.push(`/${locale}/order`) }}
        >
            {props.children || 'Order Now'}
        </button>
    );
}
