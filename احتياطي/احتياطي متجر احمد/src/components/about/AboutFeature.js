import React from 'react';
import featureImage from '../../imgs/video-image.jpg';
import { FaShippingFast, FaMoneyBillAlt } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
import { RiRefund2Fill } from 'react-icons/ri';

const AboutFeature = () => {
  return (
    <section className='list-section feature my-5 py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg mt-2'>
            <div className='content'>
              <h1 className='fw-bold'>
                لماذا <span className='text-primary'>فروتكها</span>
              </h1>
              <div className='row'>
                <div className='col-12 col-md-6 d-flex align-items-start pe-none'>
                  <div className='list-icon border border-2 border-primary rounded-circle p-3 ms-3'>
                    <FaShippingFast className='fs-2 text-primary' />
                  </div>
                  <div className='content pt-3'>
                    <h5>شحن مجاني</h5>
                    <p className='text-success'>
                      فليكن من دواعي سروري أولئك الذين يتهمون بالألم ،
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-start pe-none'>
                  <div className='list-icon border border-2 border-primary rounded-circle p-3 ms-3'>
                    <FaMoneyBillAlt className='fs-2 text-primary' />
                  </div>
                  <div className='content pt-3'>
                    <h5>افضل سعر</h5>
                    <p className='text-success'>
                      فليكن من دواعي سروري أولئك الذين يتهمون بالألم ،
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-start pe-none'>
                  <div className='list-icon border border-2 border-primary rounded-circle p-3 ms-3'>
                    <BsBagCheckFill className='fs-2 text-primary' />
                  </div>
                  <div className='content pt-3'>
                    <h5>صندوق مخصص</h5>
                    <p className='text-success'>
                      فليكن من دواعي سروري أولئك الذين يتهمون بالألم ،
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-start pe-none'>
                  <div className='list-icon border border-2 border-primary rounded-circle p-3 ms-3'>
                    <RiRefund2Fill className='fs-2 text-primary' />
                  </div>
                  <div className='content pt-3'>
                    <h5>استرداد سريع</h5>
                    <p className='text-success'>
                      فليكن من دواعي سروري أولئك الذين يتهمون بالألم ،
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg'>
            <div className='image'>
              <img src={featureImage} alt='feature image' className='w-100 ' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeature;
