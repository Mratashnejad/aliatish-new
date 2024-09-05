import { SignOutButton } from '@/components/sign-out-button';
import {FaTachometerAlt, FaBell, FaRegCreditCard, FaSignOutAlt, FaDollarSign } from 'react-icons/fa';
import { PathButton } from '@/components/Path-button';


export const DashboardMenu: React.FC = ( ) => {
  return (
    <div className="relative ">
      <div>
        <div
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10"
        >
          <PathButton
            className="flex w-full items-center p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
            path='/'
          >
            <FaTachometerAlt className="w-5 h-5 mr-2" />
            <span>Home</span>
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
            <SignOutButton className="w-full py-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center">
              <FaSignOutAlt className="w-5 h-5 mr-2" />
              <span>Sign Out</span>
            </SignOutButton>
          </div>
        </div>
      </div>
    </div>
  );
};
