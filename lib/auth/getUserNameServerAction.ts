'use server';
import { auth } from '@/lib/auth/authConfig';

/**
 * Function to get the user's name from the current session.
 * @returns {Promise<string | undefined>} - Returns the user's name if the session is valid, otherwise undefined.
 */
export const getUserName = async (): Promise<string | undefined> => {
    // Get the current session
    const session = await auth();
    
    // Check if session and session.user exist
    if (session && session.user) {
        // Return the user's name, or undefined if the name is null
        return session.user.name ?? undefined;
    }
    
    // If session is not valid, return undefined
    return undefined;
};
