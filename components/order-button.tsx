'use client';
import { useRouter } from 'next/navigation';

export const OrderButton = (props: {
    children?: React.ReactNode;
    className?: string;
}) => {
    const router = useRouter();

    return (
        <button
            className={props.className}
            style={{ cursor: 'pointer' }}
            onClick={() => {
                router.push('/order');
            }}
        >
            {props.children || 'Order Now'}
        </button>
    );
};
