'use client';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique codes

const orders = [
    { id: 1, item: 'Product A', status: 'Shipped' },
    { id: 2, item: 'Product B', status: 'Pending' },
    { id: 3, item: 'Product C', status: 'Delivered' },
];

const generateReferralCode = () => {
    return uuidv4(); // Generate a unique code
};

const BonusTab: React.FC = () => {
    const [referralCode, setReferralCode] = useState<string | null>(null);

    const handleGenerateCode = () => {
        const code = generateReferralCode();
        setReferralCode(code);
    };

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Bonus and Referral</h1>
            
            {/* Referral Code Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Get Your Referral Code</h2>
                <button
                    onClick={handleGenerateCode}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Generate Referral Code
                </button>
                {referralCode && (
                    <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
                        <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Your Referral Code:</p>
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{referralCode}</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            Share this code with friends to get a bonus on your next payment!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BonusTab;
