'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getProductBySlug } from '@/lib/shop/getProducts'; // Adjust the import path as necessary
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  address?: string;
  image_url?: string;
  price: number;
  discount_price?: number;
  postedby?: string;
  createdat: string;
}

export default function ProductBySlug() {
  const router = useRouter();
  const { slug } = useParams();
  const [productDetails, setProductDetails] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductBySlug = async () => {
      try {
        const details = await getProductBySlug(slug); // Fetch product details by slug
        setProductDetails(details);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };

    if (slug) {
      fetchProductBySlug();
    }
  }, [slug]);

  if (!productDetails) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-lg'>Loading...</div>
      </div>
    );
  }

  const { name, description, price, address, createdat, image_url } = productDetails;
  const formattedCreatedAt = new Date(createdat).toLocaleDateString();

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-zinc-950 flex flex-col justify-center text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          {name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          {/* <div className="flex justify-center items-center">
            {image_url && (
              <Image
                src={image_url}
                alt={name}
                className='w-full h-80 object-cover rounded-lg shadow-md'
                width={500}
                height={500}
              />
            )}
          </div> */}

          {/* Product Details */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {name} AMD
              </span>
              <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {price} AMD
              </span>
              <span className="text-sm text-gray-500">*****</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>Description:</strong> {description}
            </p>
            {address && (
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Address:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{address}</p>
              </div>
            )}
            <div className="mt-6 text-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
