
import RootLayout from '@/components/layouts/RootLayout';  // Adjust the path as needed
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <RootLayout params={{ locale: 'en' }} showNavbar={false} showFooter={false}>
      {children}
    </RootLayout>
  );
}
