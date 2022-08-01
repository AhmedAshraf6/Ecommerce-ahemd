import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './shared-component/Footer';
import { useSelector } from 'react-redux';
import ShortCart from './shop/ShortCart';
const ShareLayout = () => {
  const { isShortCartOpen } = useSelector((store) => store.cartItems);
  return (
    <>
      {isShortCartOpen && <ShortCart />}
      <Outlet />
      <Footer />
    </>
  );
};

export default ShareLayout;
