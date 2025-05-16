'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Navigation links for the sidebar
const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/orders', label: 'Orders', icon: '🛒' },
  { href: '/admin/users', label: 'Users', icon: '👥' },
  { href: '/admin/products', label: 'Products', icon: '📦' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-800 shadow-md hidden md:block">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <Link href="/admin" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Admin</span>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/admin' && pathname?.startsWith(item.href));
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile navbar */}
      <div className="md:hidden w-full fixed top-0 z-10 bg-white dark:bg-slate-800 shadow-md">
        <div className="flex items-center justify-between p-4">
          <Link href="/admin" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Admin</span>
          </Link>
          <div className="flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`p-2 rounded-lg ${
                  pathname === item.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                <span>{item.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-8 mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
} 