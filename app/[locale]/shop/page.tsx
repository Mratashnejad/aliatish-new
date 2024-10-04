'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAllProducts } from '@/lib/shop/getAllProducts'; // Adjust the import path as necessary
import Image from 'next/image';
import { useLocale } from 'next-intl';

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

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const locale = useLocale(); // Fallback to 'en' if locale is undefined

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (err) {
                setError('Error fetching products');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-red-600">{error}</div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg">No products found.</div>
            </div>
        );
    }

    return (
        <section className="bg-gray-100 dark:bg-zinc-950 text-gray-800 dark:text-gray-200 min-h-screen">
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-4xl font-bold text-center mb-8">Shop</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
                            onClick={() => {
                                const path = `/${locale}/shop/${product.slug}`;
                                console.log('Navigating to:', path); // Log the path
                                router.push(path);
                            }}
                        >
                            {/* {product.image_url && (
                <Image
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  height={200}
                  width={200}
                />
              )} */}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">
                                    {product.description}
                                </p>
                                <p className="mt-2 font-bold text-lg">
                                    Price: ${product.price}
                                </p>
                                {product.discount_price && (
                                    <p className="mt-1 text-red-600">
                                        Discounted Price: $
                                        {product.discount_price}
                                    </p>
                                )}
                                <a
                                    href={product.file_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                                >
                                    Buy
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
