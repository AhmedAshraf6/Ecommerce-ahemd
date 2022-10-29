import React, { useEffect } from 'react';
import AboutFeature from '../components/about/AboutFeature';
import OurTeam from '../components/about/OurTeam';
import LandingPageShared from '../components/shared-component/LandingPageShared';
import ShopBanner from '../components/shared-component/ShopBanner';
import Testimonials from '../components/shared-component/Testimonials';
import LogoSection from '../components/shared-component/LogoSection';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='about'>
      <LandingPageShared
        content={{ h1: 'من نحن', p: 'نبيع الفواكه الطازجة' }}
      />
      <AboutFeature />
      <ShopBanner />
      <OurTeam />
      <Testimonials />
      <LogoSection />
    </div>
  );
};

export default About;
