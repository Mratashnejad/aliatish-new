// TEMP: Mock data for admin preview (no database connection required)
export const dynamic = 'force-dynamic'; // Ensure SSR

// Sample statistics
const stats = [
  { label: 'Total Orders', value: '124', icon: '🛒', change: '+12%', changeType: 'positive' },
  { label: 'Active Users', value: '847', icon: '👥', change: '+5%', changeType: 'positive' },
  { label: 'Revenue', value: '$12,580', icon: '💰', change: '+8%', changeType: 'positive' },
  { label: 'Products', value: '35', icon: '📦', change: 'No change', changeType: 'neutral' },
];

// Recent orders for the activity table
const recentOrders = [
  {
    order_id: 'order_123',
    product_slug: 'crm-saas',
    user_email: 'user1@example.com',
    status: 'paid',
    created_at: new Date().toISOString(),
    amount: '$19',
  },
  {
    order_id: 'order_456',
    product_slug: 'chrome-extension',
    user_email: 'user2@example.com',
    status: 'paid',
    created_at: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    amount: '$9',
  },
  {
    order_id: 'order_789',
    product_slug: 'ai-dashboard',
    user_email: 'user3@example.com',
    status: 'pending',
    created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    amount: '$29',
  },
  {
    order_id: 'order_101',
    product_slug: 'crm-saas',
    user_email: 'user4@example.com',
    status: 'paid',
    created_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    amount: '$19',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-500">Welcome to your admin dashboard. Here&apos;s an overview of your business.</p>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div className={`mt-2 text-sm ${
              stat.changeType === 'positive' ? 'text-green-500' : 
              stat.changeType === 'negative' ? 'text-red-500' : 
              'text-slate-500'
            }`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent activity */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {recentOrders.map((order) => (
                <tr key={order.order_id} className="hover:bg-slate-50 dark:hover:bg-slate-800/70">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">{order.order_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">{order.product_slug}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">{order.user_email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">{new Date(order.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'paid' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500' :
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
        <p>Note: This page displays mock data for demonstration purposes.</p>
      </div>
    </div>
  );
} 