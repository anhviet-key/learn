/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./details";
export default function selects({ products, productType }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [wishlist, setWishlist] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [check, setCheck] = useState(() => {
    const str = JSON.parse(localStorage.getItem("Wishlist"));
    return str ?? [];
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [checked, setChecked] = useState(() => {
    const str = JSON.parse(localStorage.getItem("Wishlist"));
    return str ?? [];
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleClickWish = (id) => {
    setChecked((pre) => {
      const newWish = [...pre, id];
      const after = Array.from(new Set(newWish));
      localStorage.setItem("Wishlist", JSON.stringify(after));
      return newWish;
    });
    setCheck((pre) => {
      const isChecked = check.includes(id);
      if (isChecked) {
        const str = JSON.parse(localStorage.getItem("Wishlist"));
        str.map((value, i) => {
          if (value === id) {
            return str.splice(i, 1);
          }
        });
        return check.filter((item) => item !== id);
      } else {
        return [...pre, id];
      }
    });
  };
  //eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {}, []);
  //eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    localStorage.removeItem("Wishlist");
    localStorage.setItem("Wishlist", JSON.stringify(check));
  }, [check]);
  return (
    <div className='products-container'>
      <div className='grid grid-cols-4 gap-x-5 gap-y-10'>
        {products.map((products, i) => {
          return (
            <div key={i} className='relative flex'>
              {check.includes(products.id) ? (
                <div>
                  <div className='title-nof z-40 border-l-4 border-indigo-500 fixed top-0 right-0 text-white m-4 bg-[#7e365c] py-5 px-5'>
                    <span className='text-sky-500'>{products.title} </span>
                    đã thêm vào danh sách ưu thích 💓
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                className='absolute top-3 right-3 z-10'
                onClick={() => {
                  handleClickWish(products.id);
                }}>
                {check.includes(products.id) ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 cursor-pointer activeHeart'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 cursor-pointer'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='#db5474'
                      strokeWidth='2'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                      />
                    </svg>
                  </>
                )}
              </div>
              <Link to={`/products/${products.id}`} key={i} className='flex'>
                <div className='cards flex flex-col'>
                  <div className='imgs relative flex-shrink-0 h-[195px]'>
                    <img
                      src={`/${products.avatar}`}
                      alt='not found'
                      className='w-full h-full'
                    />
                    <div className='absolute text-center font-medium shadow-sm text-white bg-[#7e365c] w-[100px] rounded-xl opacity-60 h-6 top-3 left-3'>
                      {products.type.name}
                    </div>
                  </div>
                  <div className='card-footer flex-1 p-4 shadow-xl'>
                    <h3 className='font-medium text-[20px]'>
                      {products.title}
                    </h3>
                    <p className='text-gray-400'>{products.address}</p>
                    <p className='inline text-gray-400'>Giá từ : </p>
                    <span className='font-semibold'>
                      {products.price.from} - {products.price.to} tỷ
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
