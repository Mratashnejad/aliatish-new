'use client';
import { checkIsAuthenticated } from '@/lib/auth/checkIsAuthenticated';
import { RxAvatar } from 'react-icons/rx';
import { SignInButton } from '@/components/sign-in-button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignOutButton } from './sign-out-button';
import { FaHome, FaTachometerAlt, FaBell, FaTasks, FaRegCreditCard, FaSignOutAlt, FaDollarSign } from 'react-icons/fa';
import { PathButton } from './Path-button';
import { motion, AnimatePresence } from 'framer-motion';

export const UserMenu = () => {
    const router = useRouter();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const authStatus = await checkIsAuthenticated();
            setIsAuthenticated(authStatus);
            setLoading(false);
        };
        checkAuth();
    }, []);

    const handleMenuBar = () => {
        setMenuVisible(!menuVisible);
    };

    const handleMenuItemClick = (path: string) => {
        router.push(path);
        setMenuVisible(false);
    };

    // if (loading) {
    //     return <div className='text-gray-900 dark:text-gray-400 text-sm'></div>;
    // }

    return (
        <div className="relative">
            {isAuthenticated ? (
                <div>
                    <RxAvatar
                        className="w-5 h-5 text-gray-700 dark:text-gray-300 cursor-pointer hover:scale-105 transition-transform"
                        onClick={handleMenuBar}
                    />
                    
                        {menuVisible && (
                            <div
                                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10"
                            >
                                <PathButton
                                    className="flex w-full items-center p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                                    path='/dashboard'
                                >
                                    <FaTachometerAlt className="w-5 h-5 mr-2" />
                                    <span>Dashboard</span>
                                </PathButton>
                                <PathButton
                                    className="flex w-full items-center p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                                    path='/notifications'
                                >
                                    <FaBell className="w-5 h-5 mr-2" />
                                    <span>Notifications</span>
                                </PathButton>
                                <PathButton
                                    className="flex w-full items-center p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                                    path='/orders'
                        
                                >
                                    <FaDollarSign className="w-5 h-5 mr-2" />
                                    <span>Orders</span>
                                </PathButton>
                                <PathButton
                                    className="flex w-full items-center p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                                    path='/payments'
                                  
                                >
                                    <FaRegCreditCard className="w-5 h-5 mr-2" />
                                    <span>Payments</span>
                                </PathButton>
                                <div className="border-t border-gray-200 dark:border-gray-700 mt-2">
                                    <SignOutButton className="w-full py-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex
                                items-center justify-center"
                                >
                                    <FaSignOutAlt className="w-5 h-5 mr-2" />
                                    <span>Sign Out</span>
                                </SignOutButton>
                            </div>
                        </div>
                    )}
                
            </div>
        ) : (
            <SignInButton className="hover:text-yellow-900 dark:text-yellow-600 dark:hover:text-yellow-400"> {"// login"}</SignInButton>
        )}
    </div>
);
}