'use client';
import { useState } from 'react';

// Mock orders data
const mockOrders = Array.from({ length: 20 }, (_, i) => ({
  id: `order_${i + 100}`,
  customerName: `Customer ${i + 1}`,
  customerEmail: `customer${i + 1}@example.com`,
  product: i % 3 === 0 ? 'CRM SaaS' : i % 3 === 1 ? 'Chrome Extension' : 'AI Dashboard',
  price: i % 3 === 0 ? '$19.99' : i % 3 === 1 ? '$9.99' : '$29.99',
  status: i % 4 === 0 ? 'Completed' : i % 4 === 1 ? 'Processing' : i % 4 === 2 ? 'Pending' : 'Failed',
  date: new Date(Date.now() - i * 86400000 * 2).toISOString(), // Every 2 days back
  licenseKey: i % 4 !== 3 ? `LICENSE-${Math.random().toString(36).substring(2, 10).toUpperCase()}` : null,
}));

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [productFilter, setProductFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortDir, setSortDir] = useState('desc');

  // Filter and sort orders
  const filteredOrders = mockOrders
    .filter(order => {
      // Search filter
      if (searchTerm && !order.id.includes(searchTerm) && 
          !order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Status filter
      if (statusFilter !== 'all' && order.status !== statusFilter) {
        return false;
      }
      
      // Product filter
      if (productFilter !== 'all' && order.product !== productFilter) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      // Sort logic
      if (sortBy === 'date') {
        return sortDir === 'asc' 
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      
      if (sortBy === 'price') {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return sortDir === 'asc' ? priceA - priceB : priceB - priceA;
      }
      
      // Default sort by ID
      return sortDir === 'asc' 
        ? a.id.localeCompare(b.id)
        : b.id.localeCompare(a.id);
    });

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDir('asc');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Orders</h1>
        <p className="text-slate-500 mt-1">Manage and review customer orders</p>
      </div>
      
      {/* Filters and search */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-2">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div>
          <select
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>
        
        <div>
          <select
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={productFilter}
            onChange={(e) => setProductFilter(e.target.value)}
          >
            <option value="all">All Products</option>
            <option value="CRM SaaS">CRM SaaS</option>
            <option value="Chrome Extension">Chrome Extension</option>
            <option value="AI Dashboard">AI Dashboard</option>
          </select>
        </div>
      </div>
      
      {/* Orders table */}
      <div className="bg-white dark:bg-slate-800 shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center">
                    Order ID
                    {sortBy === 'id' && (
                      <span className="ml-1">{sortDir === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Product
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('price')}
                >
                  <div className="flex items-center">
                    Price
                    {sortBy === 'price' && (
                      <span className="ml-1">{sortDir === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('date')}
                >
                  <div className="flex items-center">
                    Date
                    {sortBy === 'date' && (
                      <span className="ml-1">{sortDir === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                    <div>{order.customerName}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{order.customerEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                    {order.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500' :
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-primary hover:text-primary-dark">View</button>
                      {order.status !== 'Completed' && (
                        <button className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-400">
                          Update
                        </button>
                      )}
                      {order.licenseKey && (
                        <button className="text-green-600 hover:text-green-900 dark:text-green-500 dark:hover:text-green-400">
                          License
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination (simplified) */}
      <div className="flex justify-between items-center pt-3">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          Showing <span className="font-medium">{filteredOrders.length}</span> orders
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
            Previous
          </button>
          <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
            Next
          </button>
        </div>
      </div>
      
      <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
        <p>Note: This page displays mock data for demonstration purposes.</p>
      </div>
    </div>
  );
} 