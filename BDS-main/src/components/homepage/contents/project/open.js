/** @format */

import React, { useState, useRef, useEffect } from "react";
import { FcPrevious, FcNext, FcCalendar, FcVip } from "react-icons/fc";
import { projectConfig } from "../../../../api";
export default function Open() {
  const [active, setActive] = useState();
  const [project, setProject] = useState([]);
  const refOne = useRef();
  const refNum = useRef(0);
  useEffect(() => {
    projectConfig().then((res) => {
      setProject(res.data);
    });
  }, []);
  const handleClick = () => {
    if (refNum.current === 0) {
      refNum.current = (refOne.current.children.length - 4) * 310;
      refOne.current.style.marginLeft = `${-refNum.current}px`;
    } else {
      refNum.current -= 310;
      refOne.current.style.marginLeft = `${-refNum.current}px`;
    }
  };
  const handleClickTwo = () => {
    if (refNum.current >= (refOne.current.children.length - 4) * 310) {
      refNum.current = 0;
      refOne.current.style.marginLeft = "0px";
    } else {
      refNum.current += 310;
      refOne.current.style.marginLeft = `${-refNum.current}px`;
    }
  };
  // setInterval(() => {
  //   if (refNum.current >= (refOne.current.children.length - 4) * 310) {
  //     refNum.current = 0;
  //     refOne.current.style.marginLeft = `${refNum.current}px`;
  //     console.log("1");
  //   } else {
  //     refNum.current = refOne.current + 310;
  //     refOne.current.style.marginLeft = `${-refNum.current}px`;
  //     console.log("2");
  //   }
  // }, 1000);
  return (
    <>
      <div className='my-32'>
        <div className='text-5xl text-center text-slate-600 font-semibold'>
          Dự án sắp mở bán
          <div className='w-max m-auto'>
            <div className='w-40 rounded-md h-2 bg-green-500'></div>
          </div>
        </div>
        <div className='mt-20 flex'>
          <div className='ml-[-4rem] flex items-center' onClick={handleClick}>
            <FcPrevious size='3rem' className='ii' />
          </div>
          <div className='nows'>
            <div className='card-slide' ref={refOne}>
              {project.map((pj, i) => {
                return (
                  <div
                    key={i}
                    className='flex-1 bg-[#fff] border-[1px] cursor-pointer card-items-slide border-[#cb6074]'>
                    <div className='images'>
                      <img
                        src={`/${pj.avatar}`}
                        alt=''
                        width='100%'
                        height='100%'
                      />
                    </div>
                    <div className='text-des'>
                      <div className='title-des pb-4 flex '>
                        <div className='colOne flex-1 flex items-center justify-center font-semibold text-rose-600'>
                          Sắp mở bán
                        </div>
                        <div className='colTwo flex-1 flex items-center justify-center text-slate-600'>
                          <FcCalendar className='inline' />
                          <span>&nbsp;{pj.date}</span>
                        </div>
                      </div>
                      <div className='description text-center'>
                        <div className='top font-semibold text-lg'>
                          {pj.title}
                        </div>
                        <div className='mains opacity-60'>{pj.des}</div>
                        <div className='bg-[#cb6074] p-1 inline-block text-white rounded-md ease-out duration-300 hover:bg-fuchsia-700'>
                          Chi tiết
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className='mr-[-4rem] flex items-center'
            onClick={handleClickTwo}>
            <FcNext size='3rem' className='ii' />
          </div>
        </div>
      </div>
    </>
  );
}
