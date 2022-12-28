/** @format */

import React from "react";
import {
  FcCustomerSupport,
  FcFactoryBreakdown,
  FcDocument,
} from "react-icons/fc";
import Open from "./open";
export default function Project() {
  return (
    <div className='mx-32 mb-8'>
      <div className='w-[40%] text-5xl text-slate-600 font-semibold'>
        Sàn giao dịch bất động sản uy tín và chất lượng.
      </div>
      <div className='flex mt-10 gap-10'>
        <div className='flex-1 p-8 bg-slate-300'>
          <i className='inline-block bg-[#6246fa] rounded-full p-2'>
            <FcCustomerSupport size='3rem' />
          </i>
          <div className=''>
            <div className='title text-2xl py-4'>Dễ dàng và an toàn</div>
            <div className='des opacity-70'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className='flex-1 p-8 bg-[#6246fa]'>
          <i className='inline-block bg-white rounded-full p-2'>
            <FcFactoryBreakdown size='3rem' />
          </i>
          <div className='text-white'>
            <div className='title text-2xl py-4'>
              {" "}
              Quan hệ đối tác đáng tin cậy
            </div>
            <div className='des opacity-70'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className='flex-1 p-8 bg-pink-500'>
          <i className='inline-block bg-white rounded-full p-2'>
            <FcDocument size='3rem' />
          </i>
          <div className='text-white'>
            <div className='title text-2xl py-4'>Giấy phép và hợp đồng</div>
            <div className='des opacity-70'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
      <Open />
    </div>
  );
}
