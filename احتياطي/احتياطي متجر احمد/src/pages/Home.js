import React, { useEffect } from 'react';
//import compoents
import ProductSection from '../components/home/ProductSection';
import CartBanner from '../components/home/CartBanner';
import ListSection from '../components/home/ListSection';
import LandingPage from '../components/home/LandingPage';
import Testimonials from '../components/shared-component/Testimonials';
import VideoSection from '../components/home/VideoSection';
import ShopBanner from '../components/shared-component/ShopBanner';
import LogoSection from '../components/shared-component/LogoSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home'>
      {/* Landing Page */}
      <LandingPage />
      {/* List Section */}
      <ListSection />
      {/* Our Product  */}
      <ProductSection />
      {/* Cart Banner */}
      <CartBanner />
      {/* Testimonials */}
      <Testimonials />
      {/* Video Section */}
      <VideoSection />
      {/* Shop Banner */}
      <ShopBanner />
      {/* Logo Section */}
      <LogoSection />
    </div>
  );
};

export default Home;
