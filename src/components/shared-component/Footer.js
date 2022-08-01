import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowLeft } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <section className='footer bg-dark text-light'>
      <div className='container'>
        <div className='row first-row'>
          <div className='col-lg col-md-6'>
            <div className='box'>
              <h4 className='fw-bold mb-4 position-relative'>معلومات عنا</h4>
              <p className='lh-lg text-success'>
                لكي ترى على الأقل من أين كل هذا الخطأ المولود ، من أولئك الذين
                يتهمون اللذة والحمد بالألم ، سأفتح الأمر برمته ، وتلك الأشياء
                نفسها.
              </p>
            </div>
          </div>
          <div className='col-lg col-md-6'>
            <div className='box'>
              <h4 className='fw-bold position-relative mb-4'>ابقى على تواصل</h4>
              <div className='lh-lg text-success'>
                <span className='d-block'>الجيزة القاهرة</span>
                <span className='d-block'>supp@s.com</span>
                <span className='d-block'> 342344343 +20</span>
              </div>
            </div>
          </div>
          <div className='col-lg col-md-6'>
            <div className='box'>
              <h4 className='fw-bold position-relative mb-4'>الصفحات</h4>
              <div className='lh-lg w-50'>
                <Link
                  to='/'
                  className='d-flex fw-bold align-items-center text-success text-decoration-none lh-lg'
                >
                  <MdArrowLeft className='text-primary fs-5' />
                  <span className='page '>الرئيسية</span>
                </Link>
                <Link
                  to='/about'
                  className='d-flex fw-bold align-items-center text-success text-decoration-none lh-lg'
                >
                  <MdArrowLeft className='text-primary fs-5' />
                  <span className='page '>من نحن</span>
                </Link>
                <Link
                  to='/shop'
                  className='d-flex fw-bold align-items-center text-success text-decoration-none lh-lg'
                >
                  <MdArrowLeft className='text-primary fs-5' />
                  <span className='page '>المتجر</span>
                </Link>
                <Link
                  to='/contact'
                  className='d-flex fw-bold align-items-center text-success text-decoration-none lh-lg'
                >
                  <MdArrowLeft className='text-primary fs-5' />
                  <span className='page '>تواصل</span>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg col-md-6'>
            <div className='box'>
              <h4 className='fw-bold position-relative mb-4'>اشترك</h4>
              <p className='lh-lg text-success'>
                اشترك في قائمتنا البريدية للحصول على آخر التحديثات.
              </p>
              <div className='subscribe input-group input-group-lg '>
                <input
                  type='text'
                  className='form-control py-3 ms-2'
                  aria-label='Sizing example input '
                  aria-describedby='inputGroup-sizing-lg'
                  placeholder='البريد الالكتروني'
                  dirname='right'
                />
                <span
                  className='input-group-text text-primary '
                  id='inputGroup-sizing-lg'
                  role='button'
                >
                  <FaTelegramPlane />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='bg-light text-light mb-2 ' />
      <div className='container'>
        <div className='row py-3'>
          <div className='col d-flex flex-column flex-sm-row justify-content-between align-items-center '>
            <h5 className='lh-base'>
              تصميم وبرمجة بواسطة
              <span className='text-primary me-2'>أحمد أشرف </span>
              <span className='d-block'> جميع الحقوق محفوظة</span>
            </h5>
            <div className='social-links d-flex justify-content-center align-items-center'>
              <a
                href='https://www.linkedin.com/in/ahmed-ashraf6/'
                rol='noopener'
                target='_blank'
                className='icon text-success fs-4 ms-2'
              >
                <AiFillLinkedin />
              </a>
              <a
                href='https://github.com/AhmedAshraf6'
                rol='noopener'
                target='_blank'
                className='icon text-success fs-4 ms-2'
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
