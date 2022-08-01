import React from 'react';
import { Link } from 'react-router-dom';
const ShopBanner = () => {
  return (
    <section className='shop-banner mt-5 py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='fw-bold lh-base'>
              <span className='d-block'> بيع ديسمبر فعال!</span>
              <span className='text-primary'> بخصم كبير</span>
            </h1>
            <div className='d-flex '>
              <div className='ms-3 fs-5'>
                <span className='d-block'>تخفيض</span>
                <span>السعر</span>
              </div>
              <h1
                className='discount 
              text-primary fw-bold ms-3'
              >
                50%
              </h1>
              <span className='align-self-center fs-5'>خصم</span>
            </div>
            <Link to='/shop' className='btn btn-primary first py-2 px-4'>
              شراء الان
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
