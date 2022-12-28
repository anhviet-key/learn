import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Img1 from '../public/images/proxy.jpg';
import { RiInformationFill } from 'react-icons/ri';
import Link from 'next/link';
import Iotem from '../public/images/iotem.png';
import Landingpage from '../public/images/landingpages.png';
import Shoppi from '../public/images/shoppi.png';
import Shopnike from '../public/images/shopnike.png';
// type Props = {};

export default function Portfolio({ t }: any) {
  return (
    <>
      <Head>
        <title>Profile - {t.Portfolio.adress}</title>
      </Head>
      <main>
        <div className="mt-10">
          <div>
            <div>
              <h1 className="text-4xl font-bold">{t.Portfolio.head}</h1>
              <div className="w-16 h-1 morebtn"></div>
              <div className="w-8 mt-[2px] h-1 morebtn"></div>
            </div>
            <h1 className="text-2xl mt-10 font-bold leading-[2]">
              {t.Portfolio.title} :
            </h1>
            <div className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <div className="bg-[#fcfaff] dark:bg-[#222222] rounded-2xl border-4 border-gray-200 dark:border-gray-500 shadow-lg overflow-hidden text-center relative">
                  <div className="absolute morebtn w-14 h-14 z-20 border rounded-tr-full bottom-0 left-0">
                    <RiInformationFill className="text-3xl mt-4 ml-2 transition duration-150 ease-linear hover:text-yellow-400 cursor-pointer" />
                  </div>
                  <Link href="#">
                    <Image
                      src={Img1}
                      alt="not found"
                      className="w-full h-full transition duration-150 ease-in-out hover:brightness-50"
                    />
                  </Link>
                </div>
                <div className="bg-[#fcfaff] dark:bg-[#222222] rounded-2xl border-4 border-gray-200 dark:border-gray-500 shadow-lg overflow-hidden text-center relative">
                  <div className="absolute morebtn w-14 h-14 z-20 border rounded-tr-full bottom-0 left-0">
                    <RiInformationFill className="text-3xl mt-4 ml-2 transition duration-150 ease-linear hover:text-yellow-400 cursor-pointer" />
                  </div>
                  <Link href="#">
                    <Image
                      src={Img1}
                      alt="not found"
                      className="w-full h-full transition duration-150 ease-in-out hover:brightness-50"
                    />
                  </Link>
                </div>
                <div className="bg-[#fcfaff] dark:bg-[#222222] rounded-2xl border-4 border-gray-200 dark:border-gray-500 shadow-lg overflow-hidden text-center relative">
                  <div className="absolute morebtn w-14 h-14 z-20 border rounded-tr-full bottom-0 left-0">
                    <RiInformationFill className="text-3xl mt-4 ml-2 transition duration-150 ease-linear hover:text-yellow-400 cursor-pointer" />
                  </div>
                  <Link href="#">
                    <Image
                      src={Shopnike}
                      alt="not found"
                      className="w-full h-full transition duration-150 ease-in-out hover:brightness-50"
                    />
                  </Link>
                </div>
                <div className="bg-[#fcfaff] dark:bg-[#222222] rounded-2xl border-4 border-gray-200 dark:border-gray-500 shadow-lg overflow-hidden text-center relative">
                  <div className="absolute morebtn w-14 h-14 z-20 border rounded-tr-full bottom-0 left-0">
                    <RiInformationFill className="text-3xl mt-4 ml-2 transition duration-150 ease-linear hover:text-yellow-400 cursor-pointer" />
                  </div>
                  <Link href="#">
                    <Image
                      src={Landingpage}
                      alt="not found"
                      className="w-full h-full transition duration-150 ease-in-out hover:brightness-50"
                    />
                  </Link>
                </div>
                <div className="bg-[#fcfaff] dark:bg-[#222222] rounded-2xl border-4 border-gray-200 dark:border-gray-500 shadow-lg overflow-hidden text-center relative">
                  <div className="absolute morebtn w-14 h-14 z-20 border rounded-tr-full bottom-0 left-0">
                    <RiInformationFill className="text-3xl mt-4 ml-2 transition duration-150 ease-linear hover:text-yellow-400 cursor-pointer" />
                  </div>
                  <Link href="#">
                    <Image
                      src={Shoppi}
                      alt="not found"
                      className="w-full h-full transition duration-150 ease-in-out hover:brightness-50"
                    />
                  </Link>
                </div>
                <div className="bg-[#fcfaff] dark:bg-[#222222] rounded-2xl border-4 border-gray-200 dark:border-gray-500 shadow-lg overflow-hidden text-center relative">
                  <div className="absolute morebtn w-14 h-14 z-20 border rounded-tr-full bottom-0 left-0">
                    <RiInformationFill className="text-3xl mt-4 ml-2 transition duration-150 ease-linear hover:text-yellow-400 cursor-pointer" />
                  </div>
                  <Link href="#">
                    <Image
                      src={Iotem}
                      alt="not found"
                      className="w-full h-full transition duration-150 ease-in-out hover:brightness-50"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
