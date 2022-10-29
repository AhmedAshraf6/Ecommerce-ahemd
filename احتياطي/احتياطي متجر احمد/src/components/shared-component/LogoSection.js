import React from 'react';
import logo1 from '../../imgs/logos/1.png';
import logo2 from '../../imgs/logos/2.png';
import logo3 from '../../imgs/logos/3.png';
import logo4 from '../../imgs/logos/4.png';
const LogoSection = () => {
  return (
    <section className='logo-section bg-light mt-5 py-5 text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-sm-4 col-lg'>
            <img className='logo' src={logo1} alt='logo' />
          </div>
          <div className='col-6 col-sm-4 col-lg'>
            <img className='logo' src={logo2} alt='logo' />
          </div>
          <div className='col-6 col-sm-4 col-lg'>
            <img className='logo' src={logo3} alt='logo' />
          </div>
          <div className='col-6 col-sm-4 col-lg'>
            <img className='logo' src={logo4} alt='logo' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
