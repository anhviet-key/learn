/** @format */

import React, { useState, useEffect, useRef } from "react";
import {
  FcDepartment,
  FcCallback,
  FcInvite,
  FcBriefcase,
} from "react-icons/fc";
import { Link } from "react-router-dom";
export default function Contact() {
  const ref = useRef(false);
  const [notification, setNotification] = useState(false);
  const refOne = useRef();
  const refTwo = useRef();
  const refThree = useRef();
  const refFour = useRef();

  const handleClickNotification = () => {
    setNotification(true);
    // if (notification === false) {
    //   setNotification(true);
    // } else {
    //   setNotification(false);
    // }
  };
  const handleClickNotificationReset = () => {
    setNotification(false);
    refOne.current.value = "";
    refTwo.current.value = "";
    refThree.current.value = "";
    refFour.current.value = "";
  };
  const Notification = () => {
    return (
      <div className='notification fixed top-0 bottom-0 left-0 m-auto z-50 right-0 w-80 h-28 bg-orange-100 rounded-2xl p-5'>
        <p className='text-slate-400'>
          <span className='text-cyan-500'>Cảm ơn bạn đã liên hệ.</span>
          <br />
          Chúng tôi sẽ liên lạc lại với bạn trong thời gian sớm nhất.
        </p>
      </div>
    );
  };
  return (
    <div className='mx-32 mb-8'>
      <div className='text-5xl text-center text-slate-600 font-semibold'>
        Liên hệ
        <div className='w-max m-auto'>
          <div className='w-40 rounded-md h-2 bg-green-500'></div>
        </div>
      </div>
      <div className='col flex mt-20'>
        <div className='cl1 flex-[2]'>
          <h1 className='font-godman text-2xl pl-5 mb-10'>Liên hệ</h1>
          <form action='' id='formOne'>
            <div className='name'>
              <input
                type='text'
                id='name'
                placeholder='Name'
                className='ip-hidden'
                ref={refOne}
              />
            </div>
            <div className='email'>
              <input
                type='email'
                id='email'
                placeholder='E-mail'
                className='ip-hidden'
                ref={refTwo}
              />
            </div>
            <div className='subject'>
              <input
                type='text'
                id='subject'
                placeholder='Subject'
                className='ip-hidden'
                ref={refThree}
              />
            </div>
            <div className='area'>
              <textarea
                id='w3review'
                name='w3review'
                rows='5'
                placeholder='Message'
                className='ip-hidden'
                ref={refFour}></textarea>
            </div>
            {notification ? (
              <input
                type='button'
                value='Reset'
                className='px-5 py-3 w-20 rounded-md cursor-pointer text-red-500 bg-green-400'
                onClick={handleClickNotificationReset}
              />
            ) : (
              <input
                type='button'
                value='Gửi đi'
                className='px-5 py-3 w-20 rounded-md cursor-pointer text-white bg-green-400'
                onClick={handleClickNotification}
              />
            )}
          </form>
        </div>
        <div className='cl2 flex-[1] '>
          <h1 className='font-godman text-2xl pl-5 mb-10'>Thông tin liên hệ</h1>
          <div className='text-slate-400 w-[90%]'>
            <div className='mt-3'>
              <FcDepartment size='2rem' className='inline-block' />
              <span>Trụ sở chính</span>
              <i className='block'>
                470 Trần Đại Nghĩa, Quận Ngũ Hành Sơn, TP. Đà Nẵng
              </i>
            </div>
            <div className='my-4'>
              <FcBriefcase size='1rem' className='inline-block' />
              <span>Chi nhánh TP. Hồ Chí Minh :</span>
              <i className='block'>
                Tầng 3, Tòa nhà Viettel Complex, 285 Cách Mạng Tháng Tám, Phường
                12, Quận 10, TP. Hồ Chí Minh
              </i>
            </div>
            <div className='my-4'>
              <FcBriefcase size='1rem' className='inline-block' />
              <span>Chi nhánh Nha Trang :</span>
              <i className='block'>
                Tầng 6, Tòa nhà CTCP Điện Lực Khánh Hòa, 11 Lý Thánh Tôn, Phường
                Vạn Thạnh, TP Nha Trang, Khánh Hòa
              </i>
            </div>
            <div className='my-4'>
              <FcCallback size='2rem' className='inline-block' />
              <a href='tel:0349423372' target='_blank'>
                <span className='pl-3 hover:text-amber-300 duration-200 cursor-pointer'>
                  0349 423 372
                </span>
              </a>
            </div>
            <div className='my-4'>
              <FcInvite size='2rem' className='inline-block' />
              <a href='mailto:anhviet.key@gmail.com' target='_blank'>
                <span className='pl-3 hover:text-amber-300 duration-200 cursor-pointer'>
                  anhviet.key@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='cl2 flex-[1]'>
          <h1 className='font-godman text-2xl pl-5 mb-10'>Về chúng tôi</h1>
          <div className='text-slate-400'>
            <p>
              Chịu trách nhiệm nội dung GP ICP: Ông Nguyễn Anh Việt
              <br />
              Chịu trách nhiệm sàn GDTMĐT: Ông Vũ Triệu Vương Quy chế, quy định
              giao dịch có hiệu lực từ 23/02/2020
              <br />
              Ghi rõ nguồn khi phát hành lại thông tin từ website này.
            </p>
          </div>
        </div>
      </div>
      {notification && <Notification />}
    </div>
  );
}
