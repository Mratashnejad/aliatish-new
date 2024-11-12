'use server';
import { signOut } from '@/lib/auth/authConfig';
export const handleSignOut = async () => {
    try {
        await signOut({
            redirectTo: '/',
        });
    } catch (error) {
        console.log('Sign-out failed', error);
        throw new Error('An error occured while signin out.');
    }
};
