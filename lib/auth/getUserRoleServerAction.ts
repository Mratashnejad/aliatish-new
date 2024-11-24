'use server';
import { auth } from '@/lib/auth/authConfig';
import { pool } from '@/lib/postgres';

export const getUserRole = async (): Promise<string | undefined> => {
    const session = await auth();
    
    // Check if session and session.user.id exist
    if (session && session.user?.id) {
        const uuid: string = session.user.id;

        // Sanitize input
        const uuidRegExp: RegExp =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
        if (!uuidRegExp.test(uuid)) {
            throw new Error("Invalid UUID");
        }

        // Query the database for the user's role
        const { rows } = await pool.query("SELECT role FROM users WHERE id = $1", [uuid]);

        // If a role is found, return it; otherwise, return undefined
        return rows[0]?.role ?? undefined;
    }

    // If no session or user id, return undefined
    return undefined;
};
