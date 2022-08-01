import React, { useEffect } from 'react';
import FormContact from '../components/contact/FormContact';
import GoogleMapDisplay from '../components/contact/GoogleMap';
import LandingPageShared from '../components/shared-component/LandingPageShared';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='contact'>
      <LandingPageShared content={{ h1: 'تواصل معنا', p: 'دعم 24 ساعة' }} />
      <FormContact />
      <GoogleMapDisplay />
    </div>
  );
};

export default Contact;
