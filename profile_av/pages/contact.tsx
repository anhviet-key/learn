import Head from 'next/head';
import React from 'react';
import { FaPhone, FaGithubAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

export default function Contact({ t }: any) {
  return (
    <>
      <Head>
        <title>Profile - {t.Contact.adress}</title>
      </Head>
      <main>
        <div className="mt-10">
          <div>
            <div>
              <h1 className="text-4xl font-bold">{t.Contact.head}</h1>
              <div className="w-16 h-1 morebtn"></div>
              <div className="w-8 mt-[2px] h-1 morebtn"></div>
            </div>
            <div className="mt-10 w-full text-center">
              <h3 className="color-items text-2xl font-semibold">
                {t.Contact.address}
              </h3>
              <div> {t.Contact.desOne}</div>
            </div>
            <div
              className="text-center py-8 mt-10 border bg-[#fcfaff] dark:bg-[#222222] mx-[-40px] flex flex-wrap gap-10 justify-around lg:gap-40
             lg:justify-center">
              <div className="w-40">
                <i>
                  <FaPhone className="w-full color-items text-2xl" />
                </i>
                <h2 className="font-semibold my-2">Call Us On</h2>
                <p className="text-gray-500 dark:text-slate-400">
                  +84 349423372
                </p>
              </div>
              <div className="w-40">
                <i>
                  <ImLocation2 className="w-full color-items text-2xl" />
                </i>
                <h2 className="font-semibold my-2">Office</h2>
                <p className="text-gray-500 dark:text-slate-400">
                  Nghia Hanh, Quang Ngai
                </p>
              </div>
              <div className="w-40">
                <i>
                  <MdEmail className="w-full color-items text-2xl" />
                </i>
                <h2 className="font-semibold my-2">Email</h2>
                <p className="text-gray-500 dark:text-slate-400">
                  anhviet.key@gmail.com
                </p>
              </div>
              <div className="w-40">
                <i>
                  <FaGithubAlt className="w-full color-items text-2xl" />
                </i>
                <h2 className="font-semibold my-2">Github</h2>
                <p className="text-gray-500 dark:text-slate-400">
                  github.com/anhviet-key
                </p>
              </div>
            </div>
            <div className="mt-10 w-full text-center">
              <h3 className="color-items text-2xl font-semibold">
                {t.Contact.headingTwo}
              </h3>
              <div>{t.Contact.desTwo}</div>
            </div>
            <div className="mt-10 w-full">
              <form action="" className="form">
                <div className="flex gap-10 flex-col sm:flex-row">
                  <div className="flex-1">
                    <input
                      required
                      type="text"
                      className="w-full h-14 outlineCustome border rounded-full py-2 px-6 text-xl"
                      placeholder={t.Contact.inputOne}
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      required
                      type="email"
                      className="w-full h-14 outlineCustome border rounded-full py-2 px-6 text-xl"
                      placeholder={t.Contact.inputThree}
                    />
                  </div>
                </div>
                <div>
                  <input
                    required
                    type="text"
                    className="w-full h-14 outlineCustome border rounded-full py-2 px-6 text-xl mt-6"
                    placeholder={t.Contact.inputFour}
                  />
                  <textarea
                    className="w-full outlineCustome border rounded-2xl py-2 px-6 text-xl mt-6"
                    cols={40}
                    placeholder={t.Contact.inputFive}
                    rows={5}></textarea>
                </div>
                <button
                  type="submit"
                  className="morebtn active:translate-y-0.5 morebtn font-semibold py-2 px-10 w-max rounded-full mt-2 text-white cursor-pointer">
                  {t.Contact.button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
