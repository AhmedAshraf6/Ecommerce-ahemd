import React from 'react';
import NavBar from '../shared-component/NavBar';

const LandingPage = () => {
  return (
    <section className='landing-page position-relative'>
      <div className='overlay'></div>
      <NavBar />
      <div className='container'>
        <header className='header position-absolute top-50 start-50 text-center translate-middle'>
          <p className='text-primary fs-3 fw-bold'>طازج وعضوي</p>
          <h1 className='fw-bold text-light text-nowrap'>فواكه موسمية لذيذة</h1>
          <div className='btns mt-5 d-flex  flex-column flex-md-row justify-content-center text-light'>
            <button
              type='button'
              className='btn first btn-primary py-2 px-5 ms-1 ms-md-5 rounded-pill'
            >
              المتجر
            </button>
            <button
              type='button'
              className='btn second btn-outline-primary py-2 px-5 mt-3 mt-md-0 border-primary text-light rounded-pill'
            >
              تواصل معنا
            </button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default LandingPage;
