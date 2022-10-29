import React, { useEffect } from 'react';
import BigCart from '../components/cart/BigCart';
import LandingPageShared from '../components/shared-component/LandingPageShared';
const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='cart-page'>
      <LandingPageShared content={{ h1: 'السلة', p: 'طازجة وعضوية' }} />
      <BigCart />
    </div>
  );
};

export default Cart;
