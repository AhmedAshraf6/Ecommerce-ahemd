import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateBigCart,
  closeCartOverlay,
} from '../../features/cart/cartSlice';
const BigCart = () => {
  const { cart, total } = useSelector((store) => store.cartItems);
  const [cartState, setCartState] = useState(cart);
  const dispatch = useDispatch();
  const handleAmount = (e) => {
    const newCartState = cartState.map((product) => {
      if (product.id == e.target.name) {
        return { ...product, amount: +e.target.value };
      }
      return product;
    });
    setCartState(newCartState);
  };
  useEffect(() => {
    dispatch(closeCartOverlay());
  }, []);
  return (
    <section className='big-cart my-5 py-5'>
      <div className='container'>
        <div className='row'>
          {cart.length > 0 ? (
            <>
              <div className='col-lg-8'>
                <div className='table-responsive'>
                  <table className='table align-middle text-center table-bordered '>
                    <thead className='table-light'>
                      <tr>
                        <th scope='col'>صورة المنتج</th>
                        <th scope='col'>الأسم</th>
                        <th scope='col'>السعر</th>
                        <th scope='col'>الكمية</th>
                        <th scope='col'>اجمالي</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((product) => {
                        const { id, image, amount, price, name } = product;
                        return (
                          <tr key={id}>
                            <th scope=' d-flex justify-content-between w-100 h-100'>
                              <button
                                type='button'
                                className='btn-close text-success fs-6 ms-5'
                                aria-label='Close'
                                onClick={() => dispatch(removeItem(id))}
                              ></button>
                              <img
                                src={image.srcImg}
                                alt={name}
                                style={{ width: '80px', height: '80px' }}
                              />
                            </th>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td className='number-input w-25 px-2'>
                              <input
                                type='number'
                                min='1'
                                className='w-100'
                                name={id}
                                onChange={handleAmount}
                              />
                            </td>
                            <td>{amount}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='table-responsive'>
                  <table className='table align-middle text-center table-bordered '>
                    <thead className='table-light'>
                      <tr>
                        <th scope='col'>اجمالي</th>
                        <th scope='col'>السعر</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>الشحن</th>
                        <td>مجاني</td>
                      </tr>
                      <tr>
                        <th scope='row'>الكل</th>
                        <td>{total} جنيه</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='btns mt-2'>
                  <Link
                    to='/shop/checkout'
                    className='btn btn-primary first ms-3'
                  >
                    إتمام الشراء
                  </Link>
                  <button
                    type='button'
                    className='btn btn-primary first'
                    onClick={() => dispatch(updateBigCart(cartState))}
                  >
                    تحديث السلة
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className='text-center'>
              <h2>لا شئ في السلة</h2>
              <Link to='/shop' className='btn btn-primary first mt-3'>
                الرجوع الي المتجر
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BigCart;
