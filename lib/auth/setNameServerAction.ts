'use server';
import { auth } from '@/lib/auth/authConfig';
import { pool } from '@/lib/postgres';

export const setName = async (name: string): Promise<boolean> => {
    // Check if the user is authenticated
    const session = await auth();
    if (!session || !session.user?.id) {
        throw new Error('Unauthorized');
    }

    const uuid: string = session.user.id;

    // Sanitize UUID input
    const uuidRegExp: RegExp =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    if (!uuidRegExp.test(uuid)) {
        throw new Error('Invalid UUID');
    }

    // Sanitize name input
    name = name.trim();
    if (name.length === 0) {
        throw new Error('Name cannot be empty');
    }
    // Update the user's name in the database
    try {
        await pool.query('UPDATE users SET name = $1 WHERE id = $2', [
            name,
            uuid,
        ]);
        return true;
    } catch (error) {
        console.error('Failed to update user name:', error);
        throw new Error('Failed to update user name');
    }
};
