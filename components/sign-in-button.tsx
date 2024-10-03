'use client';
import { useRouter, usePathname } from "next/navigation";

export const SignInButton = (props: { children?: React.ReactNode; className?: string }) => {
    const router = useRouter();
    const pathname = usePathname() || '';

    // Extract the current locale from the pathname
    const locale = pathname.split('/')[1] || 'en'; 

    return (
        <button
            className={props.className}
            style={{ cursor: 'pointer' }}
            onClick={() => { router.push(`/${locale}/auth/sign-in`) }}
        >
            {props.children || 'Sign In'}
        </button>
    );
}
