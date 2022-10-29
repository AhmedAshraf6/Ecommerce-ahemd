import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../../features/cart/cartSlice';
const ProductSection = () => {
  const { productsData, itemsInCart } = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();
  return (
    <section className='product-section mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <div>
              <h1 className='fw-bold pb-2 title-with-border-bottom '>
                منتجا
                <span className='text-primary'>تنا</span>
              </h1>
              <p className='text-success fs-6 mt-3'>
                جميع المنتجات التي لدينا طازجة وبأعلي جودة وبامكانك استرجعها في
                أي وقت تريده لمدة 3 أيام
              </p>
            </div>
          </div>
        </div>
        <div className='row mt-3 gy-3'>
          {productsData.slice(0, 3).map((product) => {
            return (
              <div className='col-lg-4 col-md-6 text-center' key={product.id}>
                <div className='card'>
                  <Link to={`/shop/single-product/${product.id}`}>
                    <img
                      src={product.image.srcImg}
                      className='card-img-top'
                      alt={product.name}
                    />
                  </Link>
                  <div className='card-body'>
                    <h5 className='card-title fw-bold fs-4'>{product.name}</h5>
                    <p className='card-text text-success mt-3 fs-6'>لكل كجم</p>
                    <h5 className='card-title fw-bold mb-2 fs-3'>
                      {product.price} جنيه
                    </h5>
                    <button
                      type='button'
                      className='btn first btn-primary'
                      onClick={() => dispatch(addItemToCart(product.id))}
                      disabled={itemsInCart.includes(product.id) ? true : false}
                    >
                      {itemsInCart.includes(product.id)
                        ? 'في السلة '
                        : 'اضافة الي السلة'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
