import React from 'react';
import SquishyCard from '@/components/packagesCard';

const PackagesPage: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-28">
        <SquishyCard
          title="Starter"
          price="$99"
          description="Ideal for individuals or Personal or Blog projects with essential features and support."
          buttonText="Get Started"
        />
        <SquishyCard
          title="Professional"
          price="$599"
          description="For growing businesses that need additional features and extended support."
          buttonText="Contact us"
        />
        <SquishyCard
          title="Premium"
          price="$999"
          description="The ultimate package for comprehensive solutions and top-tier support."
          buttonText="Contact Us"
        />
      </div>
    </>
  );
}

export default PackagesPage;
