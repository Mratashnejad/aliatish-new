'use server';
import { pool } from '@/lib/postgres';
import { checkIsAuthenticated } from '../auth/checkIsAuthenticated';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generation

interface OrderData {
    id?: string; // Optional, as we'll generate this in the app
    name?: string;
    email?: string;
    phone_Number?: string;
    features?: string[];
    mode?: string;
    message?: string;
    contact_method?: string;
}

/**
 * Function to add an order in the database.
 * @param {FormData} formData - The order details to add.
 * @returns {Promise<string>} - Returns the ID of the newly added order (UUID).
 * @throws {Error} - Throws an error if the addition fails.
 */
export const addOrder = async (formData: FormData): Promise<string> => {
    // const isAuthenticated = checkIsAuthenticated();
    // if (!isAuthenticated) {
    //     throw new Error('User is not authenticated');
    // }

    const data: OrderData = {
        id: uuidv4(), // Generate UUID here in the app
        name: formData.get('name')?.toString(),
        email: formData.get('email')?.toString(),
        phone_Number: formData.get('phone_Number')?.toString(),
        features: JSON.parse(formData.get('features')?.toString() || '[]'),
        mode: formData.get('mode')?.toString(),
        message: formData.get('message')?.toString(),
        contact_method: formData.get('contact_method')?.toString() || 'Email', // Default 'Email' if not provided
    };

    const fields: string[] = [];
    const values: (string | string[] | undefined)[] = [];
    let index = 1;

    for (const [key, value] of Object.entries(data)) {
        if (value !== undefined) {
            fields.push(key);
            values.push(value);
            index++;
        }
    }

    try {
        // Construct the query string
        const query = `INSERT INTO orders (${fields.join(", ")}) 
                       VALUES (${fields.map((_, i) => `$${i + 1}`).join(", ")}) 
                       RETURNING id`;

        // Execute the query
        const result = await pool.query(query, values);

        // Return the inserted order's id (UUID)
        return result.rows[0].id;

    } catch (error) {
        console.error('Error adding order:', error);
        throw new Error('Error adding order');
    }
};
