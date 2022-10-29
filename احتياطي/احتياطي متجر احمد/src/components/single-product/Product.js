import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, updateCart } from '../../features/cart/cartSlice';
const Product = () => {
  const { productid } = useParams();
  const { productsData, itemsInCart } = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();
  const { id, name, price, image, category, disc, amount } = productsData.find(
    (product) => product.id === +productid
  );
  const [valueAmount, setValueAmount] = useState(amount || 1);
  return (
    <section className='my-5 py-5'>
      <div className='container'>
        <div className='row gx-4d gy-3'>
          <div className='col-lg col-md-12'>
            <img
              src={image.srcImg}
              alt={name}
              className='w-100 h-100'
              style={{ boxShadow: '0 0 20px #ddd' }}
            />
          </div>
          <div className='col-lg col-md-12'>
            <h1>{name}</h1>
            <h5 className='text-success my-3'>لكل كيلوجرام</h5>
            <h2 className='my-2'>{price}جنيه</h2>
            <p className='my-3 text-success'>{disc}</p>
            <div className='w-100 d-flex py-2 my-2'>
              <input
                type='number'
                min='1'
                value={valueAmount}
                onChange={(e) => setValueAmount(e.target.value)}
              />
              <button
                className='btn btn-outline-primary me-2'
                onClick={() => dispatch(updateCart({ id, valueAmount }))}
              >
                تحديث
              </button>
            </div>
            <button
              type='button'
              className='btn first btn-primary'
              onClick={() => dispatch(addItemToCart(id))}
              disabled={itemsInCart.includes(id) ? true : false}
            >
              {itemsInCart.includes(id) ? 'في السلة ' : 'اضافة الي السلة'}
            </button>
            <h5 className='my-3'>
              التصنيف: <span>{category}</span>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
