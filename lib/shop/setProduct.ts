'use server';
import { pool } from '@/lib/postgres';
import { checkIsAuthenticated } from '../auth/checkIsAuthenticated';

interface ProductData {
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

/**
 * Function to add a product to the database.
 * @param {FormData} formData - The product details to add.
 * @returns {Promise<number>} - Returns the ID of the newly added product.
 * @throws {Error} - Throws an error if the addition fails.
 */
export const addProduct = async (formData: FormData): Promise<number> => {
    const isAuthenticated = checkIsAuthenticated();
    // Uncomment the next lines to enforce authentication
    // if (!isAuthenticated) {
    //     throw new Error('User is not authenticated');
    // }

    const data: ProductData = {
        name: formData.get('name')?.toString() || '',
        slug: formData.get('slug')?.toString() || '',
        description: formData.get('description')?.toString(),
        address: formData.get('address')?.toString(),
        image_url: formData.get('image_url')?.toString(),
        price: parseFloat(formData.get('price')?.toString() || '0'),
        discount_price: parseFloat(formData.get('discount_price')?.toString() || '0'),
        file_type: formData.get('file_type')?.toString(),
        file_url: formData.get('file_url')?.toString() || '',
    };

    const fields: string[] = [];
    const values: (string | number | undefined)[] = [];
    let index = 1;

    for (const [key, value] of Object.entries(data)) {
        if (value !== undefined && value !== '') {
            fields.push(key);
            values.push(value);
            index++;
        }
    }

    try {
        const query = `INSERT INTO shop (${fields.join(", ")}) VALUES (${fields.map((_, i) => `$${i + 1}`).join(", ")}) RETURNING id`;
        const result = await pool.query(query, values);
        return result.rows[0].id;

    } catch (error) {
        console.error('Error adding product:', error);
        throw new Error('Error adding product');
    }
};
