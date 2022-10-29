import React from 'react';
import { FaShippingFast, FaPhoneVolume } from 'react-icons/fa';
import { RiRefund2Fill } from 'react-icons/ri';
const ListSection = () => {
  return (
    <div className='list-section p-5 bg-light text-dark '>
      <div className='container'>
        <div className='row '>
          <div className='aa col-lg col-md-6 d-flex align-items-center pe-none'>
            <div className='list-icon border border-2 border-primary rounded-circle p-3 ms-3'>
              <FaShippingFast className='fs-2 text-primary' />
            </div>
            <div className='content pt-3'>
              <h4 className='text-nowrap'>شحن مجاني</h4>
              <p className='text-success'>عند الطلب أكثر من 75 دولارًا</p>
            </div>
          </div>
          <div className='col-lg col-md-6 d-flex  align-items-center pe-none'>
            <div className='list-icon border border-2 border-primary rounded-circle p-3 ms-3'>
              <FaPhoneVolume className='fs-2 text-primary' />
            </div>
            <div className='content pt-3'>
              <h4 className='text-nowrap'>دعم 24 ساعة</h4>
              <p className='text-success'>احصل على الدعم طوال اليوم</p>
            </div>
          </div>
          <div className='col-lg col-md-6 d-flex  align-items-center pe-none'>
            <div className='list-icon border border-2 border-primary rounded-circle p-3 ms-3'>
              <RiRefund2Fill className='fs-2 text-primary' />
            </div>
            <div className='content pt-3'>
              <h4 className='text-nowrap'>استرداد</h4>
              <p className='text-success'>احصل على رد في غضون 3 أيام!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
