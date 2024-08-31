'use client';
import { checkIsAuthenticated } from '@/lib/auth/checkIsAuthenticated';
import { RxAvatar } from 'react-icons/rx';
import { SignInButton } from '@/components/sign-in-button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignOutButton } from './sign-out-button';
import { FaHome, FaTachometerAlt, FaBell, FaTasks, FaRegCreditCard, FaSignOutAlt ,FaDollarSign} from 'react-icons/fa';
import { PathButton } from './Path-button';

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

    if (loading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="relative">
            {isAuthenticated ? (
                <div>
                    <RxAvatar
                        className="w-6 h-6 text-gray-700"
                        onClick={handleMenuBar}
                    />
                    {menuVisible && (
                        <div className="absolute w-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                            
                            <PathButton
                                className="flex w-full items-center p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                path='/dashboard'
                            >
                                <FaTachometerAlt className="w-5 h-5 mr-2" />
                                <span>Dashboard</span>
                            </PathButton>
                            <PathButton
                                className="flex w-full items-center p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                path='/notifications'
                            >
                                <FaBell className="w-5 h-5 mr-2" />
                                <span>Notifications</span>
                            </PathButton>
                            <PathButton
                                className="flex w-full items-center p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                path='/orders'
                            >
                                <FaDollarSign className="w-5 h-5 mr-2" />
                                <span>Orders</span>
                            </PathButton>
                            <PathButton
                                className="flex  w-full items-center p-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                              path='/peyments'
                              >

                                <FaRegCreditCard className="w-5 h-5 mr-2" />
                                <span>Peyments</span>
                            </PathButton>
                            <div className="border-t border-gray-200 dark:border-gray-700">
                                <SignOutButton className="w-full py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 flex items-center justify-center">
                                    <FaSignOutAlt className="w-5 h-5 mr-2" />
                                    <span>Sign Out</span>
                                </SignOutButton>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <SignInButton className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200" />
            )}
        </div>
    );
};
