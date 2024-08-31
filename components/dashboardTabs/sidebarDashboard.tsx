'use client';
import React, { useState } from 'react';
import { FaCog, FaDollarSign, FaGift, FaRegCreditCard } from 'react-icons/fa';
import { SignOutButton } from '@/components/sign-out-button';

// Sidebar component
export const Sidebar: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        window.location.hash = tab;
    };

    return (
        <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-600 p-4 py-8 flex flex-col h-screen">
            <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Menu</h2>
                <div className="space-y-2">
                    <button
                        onClick={() => handleTabClick('orders')}
                        className={`flex items-center p-2 rounded-lg w-full text-left ${activeTab === 'orders' ? 'bg-blue-600 text-white' : 'text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                        <FaDollarSign className="w-5 h-5 mr-3" />
                        Orders
                    </button>
                    <button
                        onClick={() => handleTabClick('payments')}
                        className={`flex items-center p-2 rounded-lg w-full text-left ${activeTab === 'payments' ? 'bg-blue-600 text-white' : 'text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                        <FaRegCreditCard className="w-5 h-5 mr-3" />
                        Payments
                    </button>
                    <button
                        onClick={() => handleTabClick('settings')}
                        className={`flex items-center p-2 rounded-lg w-full text-left ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                        <FaCog className="w-5 h-5 mr-3" />
                        Settings
                    </button>
                    <button
                        onClick={() => handleTabClick('bonus')}
                        className={`flex items-center p-2 rounded-lg w-full text-left ${activeTab === 'bonus' ? 'bg-blue-600 text-white' : 'text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                        <FaGift className="w-5 h-5 mr-3" />
                        Referral Bonus
                    </button>
                </div>
            </div>
            <SignOutButton className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 mt-auto" />
        </div>
    );
};
