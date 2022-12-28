/** @format */

import React, { useEffect, useRef, useState } from "react";
import banner from "../../../assets/bg-hero_2x.webp";
import Content from "../contents";
export default function Banner() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkOutSide = (e) => {
      if (
        (active || active2) &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setActive(false);
        setActive2(false);
      }
    };
    document.addEventListener("mousedown", checkOutSide);
    return () => {
      document.removeEventListener("mousedown", checkOutSide);
    };
  }, [active, active2]);
  return (
    <>
      <div className='banner relative'>
        <img src={banner} alt='not found' className='w-full h-full' ref={ref} />
        <div className='banner__title absolute top-48 text-white text-[78px] font-bold ml-[100px]'>
          Sàn giao dịch bất động sản
        </div>
        <div className='banner__groupip absolute bottom-32 w-[1040px] h-48 rounded-2xl bg-[#7e365c] bg-opacity-70 ml-[100px] flex items-center'>
          <div className='banner__ipone p-0 m-0 max-w-[300px] w-[280px] ml-10'>
            <h1 className='text-[24px] mb-2 text-white'>Tỉnh</h1>
            <div
              className='cursor-pointer selected relative bg-white rounded-md p-4'
              onClick={() => setActive((pre) => !pre)}>
              Chọn tỉnh
            </div>
            <div
              className={`select-box shadow-xl absolute max-w-[300px] w-[280px] bg-white mt-2 rounded-md ${
                active ? "active" : "close"
              }`}>
              <div className='options p-3 hover:bg-slate-300'>
                <input type='radio' className='radio' id='danang' name='ip' />
                <label htmlFor='danang'>Đà Nẵng</label>
              </div>
              <div className='options p-3 hover:bg-slate-300'>
                <input type='radio' className='radio' id='hanoi' name='ip' />
                <label htmlFor='hanoi'>Hà Nội</label>
              </div>
              <div className='options p-3 hover:bg-slate-300'>
                <input type='radio' className='radio' id='hcm' name='ip' />
                <label htmlFor='hcm'>TP Hồ Chí Minh</label>
              </div>
            </div>
          </div>
          <div className='banner__ipone p-0 m-0 max-w-[300px] w-[280px] ml-10'>
            <h1 className='text-[24px] mb-2 text-white'>Chọn diện tích</h1>
            <div
              className='cursor-pointer selected-two relative bg-white rounded-md p-4'
              onClick={() => setActive2((pre) => !pre)}>
              Diện tích
            </div>
            <div
              className={`select-box-two absolute max-w-[300px] shadow-xl w-[280px] bg-white mt-2 rounded-md ${
                active2 ? "active" : "close"
              }`}>
              <div className='options p-3 hover:bg-slate-300'>
                <input type='radio' className='radio' id='danang' name='ip' />
                <label htmlFor='danang' className='flex items-center'>
                  {"<"}
                  30 m2
                </label>
              </div>
              <div className='options p-3 hover:bg-slate-300'>
                <input type='radio' className='radio' id='danang' name='ip' />
                <label htmlFor='danang' className='flex items-center'>
                  30 - 45 m2
                </label>
              </div>
              <div className='options p-3 hover:bg-slate-300'>
                <input type='radio' className='radio' id='danang' name='ip' />
                <label htmlFor='danang' className='flex items-center'>
                  45 - 60 m2
                </label>
              </div>
              <div className='options p-3 hover:bg-slate-300'>
                <input type='radio' className='radio' id='danang' name='ip' />
                <label htmlFor='danang' className='flex items-center'>
                  {">"}
                  60 m2
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-1 justify-end mr-12 text-white'>
            <form
              action=''
              className='formOne flex justify-center items-center text-[32px] circle w-[200px] h-[100px] rounded-[60px] bg-[#38274b]'>
              <input
                type='text'
                placeholder='Tìm kiếm ...'
                className='ip_search pl-5 pr-12'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon-search cursor-pointer h-12 w-12 z-10'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
              <p className='text'>Tìm kiếm</p>
            </form>
          </div>
        </div>
      </div>
      <Content />
    </>
  );
}
