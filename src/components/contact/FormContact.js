import React from 'react';
import { FaMap, FaAddressBook } from 'react-icons/fa';
import { BsAlarmFill, BsClock } from 'react-icons/bs';
const FormContact = () => {
  return (
    <section className='form-contact my-5 py-5'>
      <div className='container'>
        <div className='row gx-5 gy-3 align-items-start'>
          <div className='col-md-12 col-lg-8 '>
            <h3>هل لديك اي سؤال؟</h3>
            <p>
              من المهم جدًا أن ينتبه العميل لعملية اكتشاف الدهون. لنكن منصفين!
              من الصعب أن نفترض. التسامح الذي يبحث فيه عن شيء آخر. الجسد نفسه
              بمتعة أقل؟ الألم يولد!
            </p>
            <form className='form'>
              <div className='row gy-3'>
                <div className='col-lg-6 col-md-12'>
                  <input
                    className='form-control form-control-lg '
                    type='text'
                    placeholder='الاسم'
                  />
                </div>
                <div className='col-lg-6 col-md-12'>
                  <input
                    className='form-control form-control-lg'
                    type='email'
                    placeholder='الايميل'
                  />
                </div>
                <div className='col-lg-6 col-md-12'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='رقم الهاتف'
                  />
                </div>
                <div className='col-lg-6 col-md-12'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='العنوان'
                  />
                </div>
                <div className='col-12'>
                  <div className='form-floating'>
                    <textarea
                      className='form-control'
                      placeholder='Leave a comment here'
                      id='floatingTextarea2'
                      style={{ height: '200px' }}
                    ></textarea>
                    <label htmlFor='floatingTextarea2' className='right-0'>
                      الرسالة
                    </label>
                  </div>
                </div>
                <div className='col-12'>
                  <button
                    type='submit'
                    className='btn btn-primary py-2 px-3 first'
                  >
                    تسجيل
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className='col-md-12 col-lg-4 bg-light py-5 px-4'>
            <div className='row gy-4 '>
              <div className='col-12 d-flex align-items-start pe-none'>
                <div className='list-icon ms-2'>
                  <FaMap className='fs-2 text-primary' />
                </div>
                <div className='content'>
                  <h5>عنوان المتجر</h5>
                  <span className='text-success d-block'>
                    28 شارع اليوم السابع
                  </span>
                  <span className='text-success d-block'>المنيا سمالوط</span>
                  <span className='text-success d-block'> مصر</span>
                </div>
              </div>
              <div className='col-12 d-flex align-items-start pe-none'>
                <div className='list-icon ms-2'>
                  <BsAlarmFill className='fs-2 text-primary' />
                </div>
                <div className='content'>
                  <h5> ساعات التسوق</h5>
                  <span className='text-success d-block'>
                    الإثنين- الجمعة: 8 إلى 9 مساءً
                  </span>
                  <span className='text-success d-block'>
                    السبت - الأحد: 10 إلى 8 مساءً
                  </span>
                </div>
              </div>
              <div className='col-12 d-flex align-items-start pe-none'>
                <div className='list-icon ms-2'>
                  <FaAddressBook className='fs-2 text-primary' />
                </div>
                <div className='content'>
                  <h5> تواصل</h5>
                  <span className='text-success d-block'>
                    الهاتف: +20 0121221212
                  </span>
                  <span className='text-success d-block'>
                    البريد :ِahmed@ahmedashraf.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContact;
