import React from 'react';
import NavBar from './NavBar';

const LandingPageShared = ({ content }) => {
  const { h1, p } = content;
  return (
    <section className='landpage-shared position-relative'>
      <NavBar />
      <div className='overlay'></div>
      <div className='land-content position-absolute  top-50 start-50 text-center translate-middle '>
        <p className='text-primary fs-5'>{p}</p>
        <h1 className='text-light fw-bold'>{h1}</h1>
      </div>
    </section>
  );
};

export default LandingPageShared;
