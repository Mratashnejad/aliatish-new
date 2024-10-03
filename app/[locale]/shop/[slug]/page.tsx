// app/[locale]/shop/[slug]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductById } from '@/lib/shop/getProducts'; // Adjust the import path as necessary

interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    address?: string;
    image_url?: string;
    price: number;
    discount_price?: number;
    file_type?: string;
    file_url: string;
}

export default function ProductDetails({
    product,
}: {
    product: Product | null;
}) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Set loading to false since product is already fetched in getServerSideProps
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen">
                Product not found.
            </div>
        );
    }

    return (
        <div>
            <h1>{product.name}</h1>
            {product.image_url && (
                <img src={product.image_url} alt={product.name} />
            )}
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            {product.discount_price && (
                <p>Discounted Price: ${product.discount_price.toFixed(2)}</p>
            )}
            <a
                href={product.file_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                Download
            </a>
        </div>
    );
}
