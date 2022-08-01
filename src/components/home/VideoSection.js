import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPlayFill } from 'react-icons/bs';
const VideoSection = () => {
  return (
    <section className='video-section mt-3'>
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-lg col-md-12'>
            <span className='text-success'>منذ عام 1999</span>
            <h1 className='fw-bold my-3'>
              نحن
              <span className='text-primary '> فروتكها</span>
            </h1>
            <p className='fs-5 lh-base text-dark'>
              حتى المبتذلة كدعاية أو أعضاء. في solludicinum ، لا كتلة شركة
              الطيران ولا بقية الصناعة. الاستثمار العقاري يحتاج إلى أن يوضع موضع
              التنفيذ. من أجل التغلب على الألم ، تغلبه الحكمة ، لكنه يريد ذلك
              أحيانًا. لموظفي كرة القدم.
            </p>
            <p className='fs-5 lh-base text-dark'>
              من المهم جدًا أن ينتبه العميل لعملية اكتشاف الدهون. بحكمة ، من
              السهل عليه أن يرفض الحقيقة الأقل ، وبجهد أقل المرونة التي نقودها.
            </p>
            <Link to='/about' className='btn btn-primary py-2 px-3  first'>
              لمعرفة المزيد
            </Link>
          </div>
          <div className='col-lg col-md-12'>
            <div className='video position-relative '>
              <div className='overlay'></div>
              <button
                type='button'
                className='video-icon rounded-circle btn btn-primary first start-50 translate-middle position-absolute top-50 d-flex justify-content-center align-items-center '
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                <BsFillPlayFill className='fs-3 ' />
              </button>
              {/* Modal */}
              <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div className='modal-body'>
                      <iframe
                        className='video-iframe w-100'
                        title='Youtube player'
                        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                        src='https://www.youtube.com/embed/UF8uR6Z6KLc'
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
