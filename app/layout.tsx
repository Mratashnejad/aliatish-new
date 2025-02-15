import FooterBar from '@/components/footer';
import { Providers } from '@/components/layouts/ThemeProvider';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

interface RootLayoutProps {
    children: React.ReactNode;
    showNavbar?: boolean;
    showFooter?: boolean;
}

export default function RootLayout({
    children,
    showNavbar = true,
    showFooter = true,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="flex flex-col  bg-white dark:bg-zinc-950">
                <Providers>
                    {/* Ensure Navbar is always visible */}
                    {showNavbar && <Navbar />}
                    <main className="flex-grow ">{children}</main>
                    {/* Ensure Footer is below content */}
                    {showFooter && <FooterBar />}
                </Providers>
                {/* </SessionProvider> */}
            </body>
        </html>
    );
}
