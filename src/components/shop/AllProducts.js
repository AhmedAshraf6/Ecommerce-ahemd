import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, menuItemsInShop } from '../../features/cart/cartSlice';
const AllProducts = () => {
  const { productsData, itemsInCart, cateogries, activeCategory, menuItems } =
    useSelector((store) => store.cartItems);
  const dispatch = useDispatch();
  return (
    <section className='shop-products my-5 py-5'>
      <div className='container'>
        {/* Display Categories */}
        <div className='categories d-flex justify-content-center flex-wrap text-center'>
          {cateogries.map((cat, index) => {
            return (
              <button
                className={
                  activeCategory === cat
                    ? 'category-btn btn btn-outline-primary ms-4 rounded-pill py-2 px-3 mt-2 active'
                    : 'category-btn btn btn-outline-primary ms-4 rounded-pill py-2 px-3 mt-2'
                }
                key={index}
                onClick={() => dispatch(menuItemsInShop(cat))}
              >
                {cat}
              </button>
            );
          })}
        </div>
        {/* Display Products */}
        <div className='row mt-3 gy-3'>
          {menuItems.map((product) => {
            const { id, name, price, image } = product;
            return (
              <div className='col-lg-4 col-md-6 text-center' key={id}>
                <div className='card'>
                  <Link to={`single-product/${id}`}>
                    <img
                      src={image.srcImg}
                      className='card-img-top pointer'
                      alt={name}
                    />
                  </Link>
                  <div className='card-body'>
                    <h5 className='card-title fw-bold fs-4'>{name}</h5>
                    <p className='card-text text-success mt-3 fs-6'>لكل كجم</p>
                    <h5 className='card-title fw-bold mb-2 fs-3'>
                      {price} جنيه
                    </h5>
                    <button
                      type='button'
                      className='btn first btn-primary'
                      onClick={() => dispatch(addItemToCart(product.id))}
                      disabled={itemsInCart.includes(id) ? true : false}
                    >
                      {itemsInCart.includes(id)
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

export default AllProducts;
