import { redirect } from 'next/navigation';
import SignInPage from './sign-in/page';
import { checkIsAuthenticated } from '@/lib/auth/checkIsAuthenticated';

const Dashboard: React.FC = async () => {
    const isAuthenticated = await checkIsAuthenticated();
    if (!isAuthenticated) {
        redirect('/auth/sign-in');
    } else {
        return <SignInPage />;
    }
};

export default Dashboard;
