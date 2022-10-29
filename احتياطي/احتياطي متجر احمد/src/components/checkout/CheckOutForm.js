import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CheckOutForm = () => {
  const { cart, total, amount } = useSelector((store) => store.cartItems);

  return (
    <section className='checkout-form my-5 py-4'>
      <div className='container'>
        <div className='row gx-5 gy-3'>
          <div className='col-md-5 col-lg-4 order-md-last'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
              <span className='text-success'>عربة التسوق</span>
              <span className='badge bg-secondary rounded-pill'>{amount}</span>
            </h4>
            <ul className='list-group mb-3 pe-0'>
              {cart &&
                cart.map((product) => {
                  const { id, name, amount, price } = product;
                  return (
                    <li
                      className='list-group-item d-flex justify-content-between lh-sm'
                      key={id}
                    >
                      <div>
                        <h6 className='my-0'>{name}</h6>
                        <small className='text-muted'>{amount}</small>
                      </div>
                      <span className='text-muted'>{price}</span>
                    </li>
                  );
                })}
              <li className='list-group-item d-flex justify-content-between'>
                <span>مجموع (جنيه)</span>
                <strong>{total}</strong>
              </li>
            </ul>

            <form className='card p-2'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='كوبون كود '
                />
                <button type='submit' className='btn btn-secondary'>
                  تحقق
                </button>
              </div>
            </form>
          </div>
          <div className='col-md-7 col-lg-8'>
            <h4 className='mb-3'>عنوان الفوترة</h4>
            <form className='needs-validation'>
              <div className='row g-3'>
                <div className='col-sm-6'>
                  <label htmlFor='firstName' className='form-label'>
                    الاسم الأول
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    placeholder=''
                    required
                  />
                  <div className='invalid-feedback'>
                    يرجى إدخال اسم أول صحيح.
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='lastName' className='form-label'>
                    اسم العائلة
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    placeholder=''
                    required
                  />
                  <div className='invalid-feedback'>
                    يرجى إدخال اسم عائلة صحيح.
                  </div>
                </div>

                <div className='col-12'>
                  <label htmlFor='username' className='form-label'>
                    اسم المستخدم
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>@</span>
                    <input
                      type='text'
                      className='form-control'
                      id='username'
                      placeholder='اسم المستخدم'
                      required
                    />
                    <div className='invalid-feedback'>
                      اسم المستخدم الخاص بك مطلوب.
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <label htmlFor='email' className='form-label'>
                    البريد الإلكتروني{' '}
                    <span className='text-muted'>(اختياري)</span>
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='you@example.com'
                  />
                  <div className='invalid-feedback'>
                    يرجى إدخال عنوان بريد إلكتروني صحيح لتصلكم تحديثات الشحن.
                  </div>
                </div>

                <div className='col-12'>
                  <label htmlFor='address' className='form-label'>
                    العنوان
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    placeholder='1234 الشارع الأول'
                    required
                  />
                  <div className='invalid-feedback'>
                    يرجى إدخال عنوان الشحن الخاص بك.
                  </div>
                </div>

                <div className='col-12'>
                  <label htmlFor='address2' className='form-label'>
                    عنوان 2 <span className='text-muted'>(اختياري)</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address2'
                    placeholder='شقة 24'
                  />
                </div>

                <div className='col-md-5'>
                  <label htmlFor='country' className='form-label'>
                    البلد
                  </label>
                  <select className='form-select' id='country' required>
                    <option>اختر...</option>
                    <option>مصر</option>
                    <option>الامارات</option>
                    <option>السعودية</option>
                  </select>
                  <div className='invalid-feedback'>يرجى اختيار بلد صحيح.</div>
                </div>

                <div className='col-md-4'>
                  <label htmlFor='state' className='form-label'>
                    المنطقة
                  </label>
                  <select className='form-select' id='state' required>
                    <option>اختر...</option>
                    <option>المنيا</option>
                    <option>القاهرة</option>
                    <option>الاسكندرية</option>
                  </select>
                  <div className='invalid-feedback'>
                    يرجى اختيار اسم منطقة صحيح.
                  </div>
                </div>

                <div className='col-md-3'>
                  <label htmlFor='zip' className='form-label'>
                    الرمز البريدي
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='zip'
                    placeholder=''
                    required
                  />
                  <div className='invalid-feedback'>الرمز البريدي مطلوب.</div>
                </div>
              </div>
              <hr className='my-4' />

              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='same-address'
                />
                <label className='form-check-label' htmlFor='same-address'>
                  عنوان الشحن هو نفس عنوان الفوترة الخاص بي
                </label>
              </div>

              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='save-info'
                />
                <label className='form-check-label' htmlFor='save-info'>
                  احفظ هذه المعلومات في المرة القادمة
                </label>
              </div>

              <hr className='my-4' />
              <h4 className='mb-3'>طريقة الدفع</h4>

              <div className='my-3'>
                <div className='form-check'>
                  <input
                    id='credit'
                    name='paymentMethod'
                    type='radio'
                    className='form-check-input'
                    required
                  />
                  <label className='form-check-label' htmlFor='credit'>
                    بطاقة ائتمان
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    id='cash'
                    name='paymentMethod'
                    type='radio'
                    className='form-check-input'
                    required
                  />
                  <label className='form-check-label' htmlFor='cash'>
                    نقد
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    id='paypal'
                    name='paymentMethod'
                    type='radio'
                    className='form-check-input'
                    required
                  />
                  <label className='form-check-label' htmlFor='paypal'>
                    PayPal
                  </label>
                </div>
              </div>

              <div className='row gy-3'>
                <div className='col-md-6'>
                  <label htmlFor='cc-name' className='form-label'>
                    الاسم على البطاقة
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='cc-name'
                    placeholder=''
                    required
                  />
                  <small className='text-muted'>
                    الاسم الكامل كما هو معروض على البطاقة
                  </small>
                  <div className='invalid-feedback'>
                    الاسم على البطاقة مطلوب
                  </div>
                </div>

                <div className='col-md-6'>
                  <label htmlFor='cc-number' className='form-label'>
                    رقم البطاقة
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='cc-number'
                    placeholder=''
                    required
                  />
                  <div className='invalid-feedback'>
                    رقم بطاقة الائتمان مطلوب
                  </div>
                </div>

                <div className='col-md-3'>
                  <label htmlFor='cc-expiration' className='form-label'>
                    تاريخ انتهاء الصلاحية
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='cc-expiration'
                    placeholder=''
                    required
                  />
                  <div className='invalid-feedback'>
                    تاريخ انتهاء الصلاحية مطلوب
                  </div>
                </div>

                <div className='col-md-3'>
                  <label htmlFor='cc-cvv' className='form-label'>
                    الرمز الثلاثي (CVV)
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='cc-cvv'
                    placeholder=''
                    required
                  />
                  <div className='invalid-feedback'>رمز الحماية مطلوب</div>
                </div>
              </div>
              <hr className='my-4' />

              <button className='w-100 btn btn-primary btn-lg' type='submit'>
                الاستمرار بالدفع
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutForm;
