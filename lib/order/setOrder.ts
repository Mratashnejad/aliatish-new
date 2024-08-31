'use server';

import { pool } from '@/lib/postgres';

interface OrderData {
    name?: string;
    email?: string;
    phone_Number?: string;
    features?: string[];
    mode?: string;
    message?: string;
    contact_method?: string;
}

/**
 * Function to add a task in the database.
 * @param {FormData} formData - The task details to add.
 * @returns {Promise<number>} - Returns the ID of the newly added order.
 * @throws {Error} - Throws an error if the addition fails.
 */
export const addOrder = async (formData: FormData): Promise<number> => {
    const data: OrderData = {
        name: formData.get('name')?.toString(),
        email: formData.get('email')?.toString(),
        phone_Number: formData.get('phone_Number')?.toString(),
        features: JSON.parse(formData.get('features')?.toString() || '[]'),
        mode: formData.get('mode')?.toString(),
        message: formData.get('message')?.toString(),
        contact_method: formData.get('contact_method')?.toString(),
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
        const query = `INSERT INTO orders (${fields.join(", ")}) VALUES (${fields.map((_, i) => `$${i + 1}`).join(", ")}) RETURNING id`;
        const result = await pool.query(query, values);
        return result.rows[0].id;

    } catch (error) {
        console.error('Error adding order:', error);
        throw new Error('Error adding order');
    }
};
