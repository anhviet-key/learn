/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { productConfig, productId } from "../../../../api";
import Detail from "./details";
export default function details() {
  const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0);
    const xa = { ...imgs };
    // useEffect(() => {
    //   setIndex(0);
    // }, [index]);
    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1);
      } else {
        setIndex(index - 1);
      }
    };
    return (
      <div className='slideshow relative'>
        <img
          className='mainImg w-full h-[500px] object-cover'
          src={`/${xa[index]}`}
          alt='not found'
        />
        <div className='actions absolute top-[50%] translate-y-[-50%] block w-full'>
          <button onClick={prev} className='ml-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[195px] w-[60px] hover:text-yellow-400 ease-out duration-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
              />
            </svg>
          </button>
          <button onClick={next} className='float-right mr-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-[195px] w-[60px] hover:text-yellow-400 ease-out duration-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [report, setReport] = useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { productsId } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    productId(productsId).then((res) => {
      console.log(res.data);
      setReport(res.data);
    });
  }, [productsId]);
  return (
    <div className='App'>
      <div className='mb-10'>
        <Slideshow imgs={report.images} />
        <div className='mt-10 ml-10 grid grid-cols-2 gap-x-5 gap-y-10 '>
          <div className='contents mt-10'>
            <div className=''>
              <h1 className='text-[42px] font-medium'>{report.title}</h1>
              <p className='mt-5'>{report.address}</p>
              <p className='mt-4'>Diện tích: {report.area}m2</p>
            </div>
            <div className='text-[100px] flex justify-center items-center font-semibold'>
              <p>
                {{ ...report.price }.from} - {{ ...report.price }.to} tỷ
              </p>
            </div>
          </div>

          <div className=''>
            <h1 className='text-[38px] font-medium mt-5'>Thông tin chi tiết</h1>
            <p className='mt-5'>{report.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
