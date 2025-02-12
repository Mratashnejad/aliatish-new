'use client';
import { useRouter, usePathname } from "next/navigation";

interface PathButtonProps {
    children?: React.ReactNode;
    className?: string;
    path?: string;
    onClick?: () => void; // Include onClick in the props type
}

export const PathButton: React.FC<PathButtonProps> = ({ children, className, path, onClick }) => {
    const router = useRouter();
    const pathname = usePathname() || ''; // Provide a fallback value in case pathname is null

    // Extract the current locale from the pathname
    const locale = pathname.split('/')[1] || 'en'; // Default to 'en' or another fallback locale

    const handleClick = () => {
        if (path) {
            router.push(`/${path}`); // Use router.push instead of router.replace
        }
        if (onClick) {
            onClick(); // Call the onClick prop if provided
        }
    };

    return (
        <button
            className={className}
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
        >
            {children || 'Item'}
        </button>
    );
}