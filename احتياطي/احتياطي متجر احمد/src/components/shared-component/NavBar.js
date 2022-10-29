import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import logo from '../../imgs/logo.png';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const { amount } = useSelector((store) => store.cartItems);

  // useState 76pxH
  const [navbar, setNavbar] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  return (
    <nav
      className={
        navbar
          ? 'navbar navbar-expand-lg navbar-light fixed-top active'
          : 'navbar navbar-expand-lg navbar-light fixed-top'
      }
    >
      <div className='container'>
        <button
          className='navbar-toggler '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navContent'
          aria-controls='navContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FaBars className='navbar-toggler-icon text-light' />
        </button>

        <Link className='navbar-brand logo' to='/'>
          <img src={logo} height='50' alt='logo' />
        </Link>
        <Link
          className=' navbar-icons d-inline d-lg-none position-relative'
          to='/shop/cart'
        >
          {amount > 0 && (
            <span className='position-absolute translate-middle badge rounded-pill bg-primary'>
              {amount}
              <span className='visually-hidden'>unread messages</span>
            </span>
          )}
          <BsFillCartFill
            role='button'
            className='icon ms-1 text-light fw-bold'
          />
        </Link>
        <div className='collapse navbar-collapse' id='navContent'>
          <ul className='navbar-nav me-auto mx-auto mb-2 mb-lg-0'>
            <li className='nav-item ms-4'>
              <NavLink className='nav-link' to='/'>
                الرئيسية
              </NavLink>
            </li>
            <li className='nav-item ms-4'>
              <NavLink className='nav-link' to='/about'>
                معلومات عنا
              </NavLink>
            </li>
            <li className='nav-item ms-4'>
              <NavLink className='nav-link' to='/shop'>
                المتجر
              </NavLink>
            </li>
            <li className='nav-item '>
              <NavLink className='nav-link' to='/contact'>
                تواصل معنا
              </NavLink>
            </li>
          </ul>
          <Link
            className='navbar-brand navbar-icons d-none d-lg-block position-relative'
            to='/shop/cart'
          >
            {amount > 0 && (
              <span className='position-absolute translate-middle badge rounded-pill bg-primary'>
                {amount}
                <span className='visually-hidden'>unread messages</span>
              </span>
            )}
            <BsFillCartFill
              role='button'
              className='icon ms-3 text-light fw-bold position-relative'
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
