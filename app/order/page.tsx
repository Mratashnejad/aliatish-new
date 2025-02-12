import { Metadata } from 'next';
import OrderPage from '@/components/pages/OrderPage';
export const metadata: Metadata = {
    title: "Order Your Custom Website Using Modern Technology",
    description: "Fill out our easy-to-use order form to start your custom website project with Ali Atish. Choose your preferred package, add features, and provide project details to get started.",
    keywords:"order website, custom website, website design, web development, Ali Atish, website packages, order custom website, build a website, website project, web design order",
};
const Order = () => <OrderPage />;
export default Order;
