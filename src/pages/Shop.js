import React, { useEffect } from 'react';
import LandingPageShared from '../components/shared-component/LandingPageShared';
import AllProducts from '../components/shop/AllProducts';

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='shop'>
      <LandingPageShared content={{ h1: 'المتجر', p: 'طازجة وعضوية' }} />
      <AllProducts />
    </div>
  );
};

export default Shop;
