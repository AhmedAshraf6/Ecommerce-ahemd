import React from 'react';
import avatar1 from '../../imgs/avatars/avatar1.png';
// import avatar2 from '../../imgs/avatars/avatar2.png';
import avatar3 from '../../imgs/avatars/avatar3.png';
import avatar4 from '../../imgs/avatars/avatar4.jpg';
import { FaQuoteRight } from 'react-icons/fa';
const Testimonials = () => {
  return (
    <div id='myCarousel' className='carousel slide ' data-bs-ride='carousel'>
      <div className=' carousel-inner text-center mt-3'>
        <div
          className='carousel-item text-light position-relative active mt-5'
          data-bs-interval='3000'
          style={{ height: '26rem' }}
        >
          <div className='carousel-box container position-absolute text-dark start-0 end-0 top-0 pb-3 mb-3 w-50'>
            <img
              src={avatar4}
              className='img-thumbnail w-25 rounded-circle mb-3'
              alt=''
            />
            <h3>أحمد أشرف </h3>
            <h6 className='text-success mb-3'>المدير التنفيذي</h6>
            <p className='text-success'>
              "ولكن لكي تفهم من أين ولد كل هذا الخطأ في الحقيقة ، وكما أطلق عليه
              مهندس الحياة المباركة ، وتلك الأشياء ذاتها التي أسسها ذلك المخترع
            </p>
            <FaQuoteRight className='fs-3 text-success ' />
          </div>
        </div>
        <div
          className='carousel-item text-light position-relative  mt-5'
          data-bs-interval='3000'
          style={{ height: '32rem' }}
        >
          <div className=' carousel-box container position-absolute text-dark start-0 end-0 top-0 pb-3 mb-3 w-50'>
            <img
              src={avatar1}
              className='img-thumbnail w-25 rounded-circle  mb-3'
              alt=''
            />
            <h3>سارة علي</h3>
            <h6 className='text-success mb-3'>مديرة التسويق</h6>
            <p className='text-success'>
              "ولكن لكي تفهم من أين ولد كل هذا الخطأ في الحقيقة ، وكما أطلق عليه
              مهندس الحياة المباركة ، وتلك الأشياء ذاتها التي أسسها ذلك المخترع
            </p>
            <FaQuoteRight className='fs-3 text-success ' />
          </div>
        </div>
        <div
          className='carousel-item text-light position-relative  mt-5'
          data-bs-interval='3000'
          style={{ height: '32rem' }}
        >
          <div className='carousel-box container position-absolute text-dark start-0 end-0 top-0 pb-3 mb-3 w-50'>
            <img
              src={avatar3}
              className='img-thumbnail w-25 rounded-circle  mb-3'
              alt=''
            />
            <h3>جمال محمود</h3>
            <h6 className='text-success mb-3'>مدير المبيعات</h6>
            <p className='text-success'>
              "ولكن لكي تفهم من أين ولد كل هذا الخطأ في الحقيقة ، وكما أطلق عليه
              مهندس الحياة المباركة ، وتلك الأشياء ذاتها التي أسسها ذلك المخترع
            </p>
            <FaQuoteRight className='fs-3 text-success ' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
