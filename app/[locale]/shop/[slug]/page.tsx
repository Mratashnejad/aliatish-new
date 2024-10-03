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
  const [userDetails, setUserDetails] = useState<any>(null); // Adjust the type as needed

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
    <div className='container mx-auto p-6 bg-white rounded-lg shadow-lg'>
      <div className='flex flex-col md:flex-row md:space-x-6'>
        {/* Product Image */}
        {/* <div className='flex-shrink-0 mb-6 md:mb-0'>
          {image_url && (
            <Image
              src={image_url}
              alt={name}
              className='w-full h-64 object-cover rounded-lg'
              width={400}
              height={400}
            />
          )}
        </div> */}

        {/* Product Details */}
        <div className='flex-1'>
          <h1 className='text-2xl font-bold text-gray-900'>{name}</h1>
          <div className='flex items-center justify-between mt-2'>
            <span className='text-lg font-semibold text-gray-800'>{price} AMD</span>
            <span className='text-sm text-gray-500'>{formattedCreatedAt}</span>
          </div>
          <p className='mt-4 text-gray-700'>
            <strong>Description:</strong> {description}
          </p>
          {address && (
            <div className='mt-4'>
              <h2 className='font-semibold text-gray-800'>Address:</h2>
              <p className='text-gray-700'>{address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
