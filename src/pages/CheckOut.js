import React, { useEffect } from 'react';
import CheckOutForm from '../components/checkout/CheckOutForm';
import LandingPageShared from '../components/shared-component/LandingPageShared';

const CheckOut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='checkout'>
      <LandingPageShared
        content={{ h1: 'اتمام شراء المنتج', p: 'طازجة وعضوية' }}
      />
      <CheckOutForm />
    </div>
  );
};

export default CheckOut;
