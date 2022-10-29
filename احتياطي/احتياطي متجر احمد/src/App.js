import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShareLayout from './components/ShareLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import CheckOut from './pages/CheckOut';
import Cart from './pages/Cart';
import Error from './pages/Error';
import About from './pages/About';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCategories } from './features/cart/cartSlice';

const App = () => {
  const { cart } = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShareLayout />}>
          <Route index element={<Home />} />
          {/* <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} /> */}
          <Route path='shop'>
            <Route index element={<Shop />} />
            <Route
              path='single-product/:productid'
              element={<SingleProduct />}
            />
            <Route path='checkout' element={<CheckOut />} />
            <Route path='cart' element={<Cart />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
