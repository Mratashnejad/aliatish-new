'use server';
import { auth } from '@/lib/auth/authConfig';
import { pool } from '@/lib/postgres';

interface OrderDetails {
    id?: string;
    name?: string;
    email?: string;
    phone_number?: string;
    features?: string;
    mode?: string;
    message?: string;
    contact_method?: string;
    created_at?: string;
    updated_at?: string;
}

export const getOrderDetails = async (): Promise<OrderDetails[] | null > => {
    try {
        const session = await auth();
        
        const userEmail = session?.user?.email;
        if (!userEmail) {
            return null;
        }
        console.log("User email from session:", userEmail);  // Debugging: Log the email

        const query = `
        SELECT id , name, email, features, mode, message, phone_number, contact_method, created_at, updated_at
        FROM  orders 
        WHERE email = $1 
      `;
        const result = await pool.query(query, [userEmail]);
        return result.rows.length > 0 ? result.rows : null;
        
    } catch (error) {
        console.error('Failed to fetch Orders with email', error);
        return null;
    }
};
