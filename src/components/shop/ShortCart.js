import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeCartOverlay, removeItem } from '../../features/cart/cartSlice';
const ShortCart = () => {
  const { cart, amount, total } = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();
  const detectToggle = (e) => {
    if (e.target.className === 'cart-overlay') {
      dispatch(closeCartOverlay());
    }
  };
  return (
    <div className='cart-overlay' onClick={detectToggle}>
      <div className='small-cart py-3 px-3 '>
        <button
          type='button'
          className='btn-close fw-bold fs-5'
          aria-label='Close'
          onClick={() => dispatch(closeCartOverlay())}
        ></button>
        <h4 className='text-center mb-3'>سلة مشترياتك</h4>
        {amount ? (
          <div className='items'>
            {cart.map((item) => {
              const { id, name, price, amount, image } = item;
              return (
                <section
                  className='item d-flex align-items-start justify-content-between pb-3 mb-3'
                  key={id}
                >
                  <Link
                    to={`/shop/single-product/${id}`}
                    className='ms-3 d-block d-flex text-decoration-none w-75'
                    onClick={() => dispatch(closeCartOverlay())}
                  >
                    <img
                      src={image.srcImg}
                      className=' w-25 h-25 rounded pointer ms-3'
                      alt={name}
                    />
                    <div className='d-flex flex-column justify-content-between text-dark'>
                      <h4>{name}</h4>
                      <h5>{price} جنيه</h5>
                    </div>
                  </Link>
                  <div className='d-flex flex-column align-items-center justify-content-between'>
                    <button
                      type='button'
                      className='btn-close text-success fs-6'
                      aria-label='Close'
                      onClick={() => dispatch(removeItem(id))}
                    ></button>
                    <h5 className='mt-3'>{amount} </h5>
                  </div>
                </section>
              );
            })}
            <div className='total-and-amount mt-5 py-3 border-top border-1 border-success'>
              <div className='d-flex justify-content-between'>
                <span>
                  <span className='fs-5 fw-bold'>{amount} </span>من العناصر
                </span>
                <span className='text-primary'>
                  <span className='fw-bold fs-5'>{total}</span> جنيه
                </span>
              </div>
            </div>
            <Link
              className='btn btn-primary first d-block border-none'
              to='/shop/cart'
            >
              عرض عربة التسوق
            </Link>
          </div>
        ) : (
          <h3 className='text-center'>لا يوجد عناصر في السلة</h3>
        )}
      </div>
    </div>
  );
};

export default ShortCart;
