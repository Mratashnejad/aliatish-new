// app/layout.tsx
import RootLayout from '@/components/layouts/RootLayout';  // Adjust the path as needed

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout params={{ locale: 'en' }} showNavbar={true} showFooter={true}>
      {children}
    </RootLayout>
  );
}
