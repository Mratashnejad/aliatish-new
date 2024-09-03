'use client';
import React, { useEffect, useState } from 'react';
import { getOrderDetails } from '@/lib/order/getOrders';

interface OrderDetails {
    id?: string;
    name?: string;
    email?: string;
    phone_number?: string;
    features?: string;
    mode?: string;
    message?: string;
    contact_method?: string;
    created_at?: string;
    updated_at?: string;
}

const OrdersTab: React.FC = () => {
    const [userDetails, setUserDetails] = useState<OrderDetails[] | null>(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            const details = await getOrderDetails();
            setUserDetails(details);
        };
        fetchOrderData();
    }, []);

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Orders
            </h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Order Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Features
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                mode
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                message
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                contact with
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {userDetails && userDetails.length > 0 ? (
                            userDetails.map((order) => (
                                <tr key={order.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                        {order.name}
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                        {order.features}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        {order.mode}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        {order.message}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        {order.contact_method}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100 text-center"
                                >
                                    No order details available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersTab;
