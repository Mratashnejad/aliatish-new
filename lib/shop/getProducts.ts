'use server';
import { pool } from '@/lib/postgres';
import { checkIsAuthenticated } from '../auth/checkIsAuthenticated';

/**
 * Function to get a product by ID from the database.
 * @param {number} id - The ID of the product to retrieve.
 * @returns {Promise<any>} - Returns the product data.
 * @throws {Error} - Throws an error if the retrieval fails or product not found.
 */
export const getProductById = async (id: number): Promise<any> => {
    const isAuthenticated = checkIsAuthenticated();
    // Uncomment the next line to enforce authentication
    // if (!isAuthenticated) {
    //     throw new Error('User is not authenticated');
    // }

    try {
        const query = 'SELECT * FROM shop WHERE id = $1';
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            throw new Error('Product not found');
        }

        return result.rows[0];

    } catch (error) {
        console.error('Error retrieving product:', error);
        throw new Error('Error retrieving product');
    }
};
