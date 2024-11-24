'use server';
import { pool } from '@/lib/postgres';
export const getProductBySlug = async (slug: string) => {
    try {
        const result = await pool.query(
            'SELECT * FROM shop WHERE slug = $1',
            [slug]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Error fetching product');
    }
};