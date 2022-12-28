/** @format */

import React from "react";
import Product from "./products";
import New from "./news";
import Project from "./project";
import Contact from "./contact";
export default function Connect() {
  return (
    <>
      <div className='contents'>
        <Product />
        <New />
        <Project />
        <Contact />
      </div>
    </>
  );
}
