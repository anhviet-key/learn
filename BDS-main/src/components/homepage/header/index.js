/** @format */

import React, { useRef } from "react";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className='header flex h-16 items-center text-2xl'>
        <div className='header__logo w-14 ml-10'>
          <Link to='/'>
            <img src={logo} alt='not found' className='max-w-full' />
          </Link>
        </div>
        <div className='header__name relative font-godman ml-10'>
          <span className='text-red-500'>D</span>ITAGIS
          <span className='text-blue-500'>R</span>ENT
        </div>
        <div className='header__wishlist flex flex-1 items-center justify-end mr-16 text-pink-500 font-bold'>
          <div className='text-gray-500 mr-4'>Phone +034 942 3372</div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              clipRule='evenodd'
            />
          </svg>
          <Link to='/wishlist'>
            <span className='hover:text-red-500'>Ưu thích</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
