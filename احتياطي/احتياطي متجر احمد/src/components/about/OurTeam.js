import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
// import team1 from '../../imgs/team-1.jpg';
// import team2 from '../../imgs/team-2.jpg';
// import team3 from '../../imgs/team-3.jpg';
const OurTeam = () => {
  return (
    <section className='our-team my-5 pt-5'>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-12 text-center'>
            <div>
              <h1 className='fw-bold pb-2 title-with-border-bottom '>
                فري
                <span className='text-primary'>قنا</span>
              </h1>
              <p className='text-success fs-6 mt-3'>
                جميع المنتجات التي لدينا طازجة وبأعلي جودة وبامكانك استرجعها في
                أي وقت تريده لمدة 3 أيام
              </p>
            </div>
          </div>
        </div>
        <div className='row gy-3 justify-content-center'>
          <div className='col-lg col-md-6'>
            <div className='single-box single-box-1 w-100 d-flex align-items-end justify-content-center rounded'>
              <div className='social mb-2'>
                <Link
                  to='/about'
                  className='btn btn-primary py-1 px-2 first ms-2'
                >
                  <AiFillFacebook />
                </Link>
                <Link
                  to='/about'
                  className='btn btn-primary py-1 px-2 first ms-2'
                >
                  <AiFillLinkedin />
                </Link>
                <Link to='/about' className='btn btn-primary py-1 px-2 first'>
                  <AiFillGithub />
                </Link>
              </div>
            </div>
            <div className='single-box-content text-center mt-2'>
              <h4 className='fw-bold'>علي علي</h4>
              <p className='text-success'>مزارع</p>
            </div>
          </div>
          <div className='col-lg col-md-6'>
            <div className='single-box single-box-2 w-100 d-flex align-items-end justify-content-center rounded'>
              <div className='social mb-2'>
                <Link
                  to='/about'
                  className='btn btn-primary py-1 px-2 first ms-2'
                >
                  <AiFillFacebook />
                </Link>
                <Link
                  to='/about'
                  className='btn btn-primary py-1 px-2 first ms-2'
                >
                  <AiFillLinkedin />
                </Link>
                <Link to='/about' className='btn btn-primary py-1 px-2 first'>
                  <AiFillGithub />
                </Link>
              </div>
            </div>
            <div className='single-box-content text-center mt-2'>
              <h4 className='fw-bold'>سماح جمال</h4>
              <p className='text-success'>مزارعة</p>
            </div>
          </div>
          <div className='col-lg col-md-6'>
            <div className='single-box single-box-3 w-100 d-flex align-items-end justify-content-center rounded'>
              <div className='social mb-2'>
                <Link
                  to='/about'
                  className='btn btn-primary py-1 px-2 first ms-2'
                >
                  <AiFillFacebook />
                </Link>
                <Link
                  to='/about'
                  className='btn btn-primary py-1 px-2 first ms-2'
                >
                  <AiFillLinkedin />
                </Link>
                <Link to='/about' className='btn btn-primary py-1 px-2 first'>
                  <AiFillGithub />
                </Link>
              </div>
            </div>
            <div className='single-box-content text-center mt-2'>
              <h4 className='fw-bold'>كامل خلف </h4>
              <p className='text-success'>مزارع</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
