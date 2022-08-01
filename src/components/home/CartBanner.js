import React from 'react';
import { Link } from 'react-router-dom';
import imgBanner from '../../imgs/a.jpg';

const CartBanner = () => {
  return (
    <section className='cart-banner mt-5 p-4 bg-light'>
      <div className='container'>
        <div className='row '>
          {/* Right */}
          <div className='col image-content position-relative'>
            <img src={imgBanner} alt='img-banner' />
            <div className='price-box bg-primary p-3 d-flex flex-column justify-content-center align-items-center rounded-circle border border-4  position-absolute top-0 '>
              <span className='fw-bold fs-4'>30%</span>
              <span className='text-center'>خصم لكل كيلوجرام</span>
            </div>
          </div>
          {/* Left */}
          <div className='col content mt-3'>
            <h1 className='fw-bold'>
              <span className='text-primary'>صفقة </span>
              الشهر
            </h1>
            <p className='fs-4'>هيكان الفراولة</p>
            <p className='text-success '>
              أي شخص أقل أهمية في رفضنا ، وغالبًا ما يكون الأصغر ، يهرب من أي
              شيء كهذا! طوبى لمن يتسببون بأقل قدر من المتاعب. إنهم يتهمون باللذة
              عندما يرون من أين كل هذا الخطأ المولود
            </p>
            {/* Time Countdown */}
            <div className='time-countdown mt-4'>
              <div className='container'>
                <div className='row '>
                  <div className='col ms-2 time p-2 border border-2 border-primary d-flex justify-content-center align-items-center'>
                    <h4>
                      <span className='text-primary fs-3 fw-bold d-block'>
                        00
                      </span>
                      أيام
                    </h4>
                  </div>
                  <div className='col ms-2 time p-2 border border-2 border-primary d-flex justify-content-center align-items-center'>
                    <h4>
                      <span className='text-primary fs-3 fw-bold d-block'>
                        00
                      </span>
                      أيام
                    </h4>
                  </div>
                  <div className='col ms-2 time p-2 border border-2 border-primary d-flex justify-content-center align-items-center'>
                    <h4>
                      <span className='text-primary fs-3 fw-bold d-block'>
                        00
                      </span>
                      أيام
                    </h4>
                  </div>
                  <div className='col ms-2 time p-2 border border-2 border-primary d-flex justify-content-center align-items-center'>
                    <h4>
                      <span className='text-primary fs-3 fw-bold d-block'>
                        00
                      </span>
                      أيام
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to='/shop'
              className='btn first btn-primary py-2 px-5 mt-5 ms-1 ms-md-5 rounded-pill'
            >
              اضافة الي السلة
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartBanner;
