'use client';
import { useState, Suspense } from 'react';
import OrdersTab from '@/components/dashboardTabs/orderTab';
import PaymentTemplate from '@/components/dashboardTabs/paymentTemplate';
import BonusTab from '@/components/dashboardTabs/bonusTab';
import { SettingTab } from '@/components/dashboardTabs/settingTab';
import { Sidebar } from '@/components/dashboardTabs/sidebarDashboard';
import { FaUserCircle } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { DashboardMenu } from '@/components/dashboardTabs/dashboardMenu';
import { useRouter } from 'next/navigation';

export const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(
    () => localStorage.getItem('dashboardActiveTab') || 'orders'
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    localStorage.setItem('dashboardActiveTab', tab);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-center p-6">
          <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 shadow p-4">
          <div className="flex items-center space-x-4">
            <div>
              <FiMenu className="w-6 h-6 text-gray-500 dark:text-gray-300 cursor-pointer" />
            </div>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="relative flex items-center space-x-4">
            <FaUserCircle
              className="w-8 h-8 text-gray-500 dark:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            />
            {isMenuOpen && (
              <DashboardMenu />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 py-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            {activeTab === 'orders' && (
              <Suspense fallback={<div>Loading...</div>}>
                <OrdersTab />
              </Suspense>
            )}
            {activeTab === 'settings' && (
              <Suspense fallback={<div>Loading...</div>}>
                <SettingTab />
              </Suspense>
            )}
            {activeTab === 'payments' && (
              <Suspense fallback={<div>Loading...</div>}>
                <PaymentTemplate />
              </Suspense>
            )}
            {activeTab === 'bonus' && (
              <Suspense fallback={<div>Loading...</div>}>
                <BonusTab />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
