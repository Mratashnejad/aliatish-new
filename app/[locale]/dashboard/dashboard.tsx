'use client';
import { useState, Suspense, lazy } from 'react';
import { Sidebar } from '@/components/dashboardTabs/sidebarDashboard';
import OrdersTab from '@/components/dashboardTabs/orderTab';
import { SettingTab } from '@/components/dashboardTabs/settingTab';
import BonusTab from '@/components/dashboardTabs/bonusTab';
import PaymentTab from '@/components/dashboardTabs/paymentTab';

export const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(
        () => localStorage.getItem('dashboardActiveTab') || 'orders'
    );

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        localStorage.setItem('dashboardActiveTab', tab);
    };

    return (
            <div className="flex min-h-screen bg-gray-100 ">
                {/* Sidebar */}
                <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-600 p-6 ">
                    <div className="flex items-center mb-8">
                        <Sidebar
                            activeTab={activeTab}
                            setActiveTab={handleTabChange}
                        />
                    </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 p-6 py-28">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                    
                        {activeTab === 'orders' && (
                            <Suspense fallback={<div>Loading ..</div>}>
                                <OrdersTab />
                            </Suspense>
                        )}
                        {activeTab === 'settings' && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <SettingTab/>
                            </Suspense>
                        )}
                        {activeTab === 'payments' && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <PaymentTab/>
                            </Suspense>
                        )}
                        {activeTab === 'bonus' && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <BonusTab/>
                            </Suspense>
                        )}
                    </div>
                </div>
            </div>
    );
};

export default DashboardPage;
