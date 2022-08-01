import React, { useEffect } from 'react';
import LandingPageShared from '../components/shared-component/LandingPageShared';
import Product from '../components/single-product/Product';

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='single-product'>
      <LandingPageShared
        content={{ h1: 'منتج واحد', p: ' مزيد من التفاصيل عن المنتج' }}
      />
      <Product />
    </div>
  );
};

export default SingleProduct;
