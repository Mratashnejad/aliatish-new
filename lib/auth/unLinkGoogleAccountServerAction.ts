'use server';
import { auth } from '@/lib/auth/authConfig';
import { pool } from '@/lib/postgres';

/**
 * Function to unlink a Google account from the user's profile.
 * @returns {Promise<boolean>} - Returns true if the account was successfully unlinked, otherwise false.
 * @throws {Error} - Throws an error if unauthorized or if the UUID is invalid.
 */
export const unlinkGoogleAccount = async (): Promise<boolean> => {
    // Get the current session
    const session = await auth();
    
    // Check if session and session.user.id exist
    if (!session || !session.user?.id) {
        throw new Error('Unauthorized: No session or user ID found'); // Throw error if no session or user ID
    }

    const uuid: string = session.user.id;

    // Sanitize and validate UUID input
    const uuidRegExp: RegExp =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/; // Regular expression for UUID validation
    if (!uuidRegExp.test(uuid)) {
        throw new Error('Invalid UUID'); // Throw error if UUID is invalid
    }

    try {
        // Execute SQL query to delete the Google account for the given user ID
        const result = await pool.query(
            "DELETE FROM accounts WHERE provider = 'google' AND \"userId\" = $1",
            [uuid]
        );
        
        // Check if any rows were affected by the query
        if (result.rowCount === 0) {
            console.warn("No Google account found for the given user ID");
            return false; // Return false if no rows were affected
        }
        
        // Return true if the account was successfully unlinked
        return true;
    } catch (error) {
        // Log error if the database query fails
        console.error("Failed to unlink Google account:", error);
        throw new Error("Failed to unlink Google account: " + error.message); // Re-throw with a specific error message
    }
};
