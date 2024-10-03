'use server';
import { pool } from '@/lib/postgres';
import { checkIsAuthenticated } from '../auth/checkIsAuthenticated';

/**
 * Function to get all products from the database.
 * @returns {Promise<any[]>} - Returns an array of all product data.
 * @throws {Error} - Throws an error if the retrieval fails.
 */
export const getAllProducts = async (): Promise<any[]> => {
    const isAuthenticated = checkIsAuthenticated();
    // Uncomment the next line to enforce authentication
    // if (!isAuthenticated) {
    //     throw new Error('User is not authenticated');
    // }

    try {
        const query = 'SELECT * FROM shop';
        const result = await pool.query(query);
        return result.rows;

    } catch (error) {
        console.error('Error retrieving products:', error);
        throw new Error('Error retrieving products');
    }
};
