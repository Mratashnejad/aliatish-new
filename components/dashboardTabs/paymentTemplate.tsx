'use client';
import React, { useState } from 'react';
import { FaCcMastercard } from 'react-icons/fa';
// import { GiCreditCard } from 'react-icons/gi';

export default function PaymentTemplate() {
    const [selectedCard, setSelectedCard] = useState('');

    const handleCardSelection = (cardNumber) => {
        setSelectedCard(cardNumber);
    };

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
                The Payment Way
            </h1>

            <p className="text-lg text-gray-800 dark:text-gray-200 mb-4 text-center max-w-xl">
                Dear customer, please pay the amount for your packages to the account number below and upload your payment confirmation here.
            </p>

            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Payment Methods
                </h2>
                <div className="space-y-4">
                    <div 
                        className={`cursor-pointer p-4 border rounded-md bg-yellow-400 text-black ${selectedCard === '5501040200083227' ? 'border-blue-900' : 'border-gray-300 dark:border-gray-700'}`} 
                        onClick={() => handleCardSelection('5501040200083227')}
                    >
                        <div className="flex items-center">
                            <FaCcMastercard size={40} className="mr-4" />
                            <div>
                                <p className="text-lg font-bold">5501 0402 0008 3227</p>
                                <p>MasterCard</p>
                                <p className="text-sm mt-1">Cardholder: Alireza Atashnejad</p>
                            </div>
                        </div>
                    </div>
                    <div 
                        className={`cursor-pointer p-4 border rounded-md bg-blue-500 text-white ${selectedCard === '6219861042132919' ? 'border-blue-500' : 'border-gray-300 dark:border-gray-700'}`} 
                        onClick={() => handleCardSelection('6219861042132919')}
                    >
                        <div className="flex items-center">
                            {/* <GiCreditCard size={40} className="mr-4" /> */}
                            <div>
                                <p className="text-lg font-bold">6219 8610 4213 2919</p>
                                <p>Bank Saman (for Iranian users)</p>
                                <p className="text-sm mt-1">Cardholder: Alireza Atashnejad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-md">
                <label className="block text-gray-800 dark:text-gray-200 mb-2" htmlFor="fileUpload">
                    Upload Your Payment Confirmation
                </label>
                <input 
                    type="file" 
                    id="fileUpload" 
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 mb-4" 
                />
                <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow">
                    Submit
                </button>
            </div>
        </div>
    );
}
