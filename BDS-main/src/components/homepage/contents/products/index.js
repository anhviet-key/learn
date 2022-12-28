/** @format */

import React, { useEffect, useState } from "react";
import Selects from "./selects";
import { productConfig } from "../../../../api";

export default function Content() {
  const [productType, setProductType] = useState();
  const [active, setActive] = useState("All");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productConfig().then((res) => {
      setProducts(res.data);
    });
  }, []);
  let allProducts = [];
  const toggleTab = (index) => {
    setActive(index);
  };
  return (
    <>
      <div className='mt-16 mx-32 mb-8'>
        <div className='top ml-4 mb-8'>
          <h1 className='text-[38px] font-semibold'>SẢN PHẨM</h1>
        </div>
        <div className='mb-10 flex gap-5'>
          <div
            onClick={(e) => {
              products.map((product) => {
                if (product.type.name) {
                  allProducts.push(product);
                }
              });
              toggleTab("All");
              setProductType(allProducts);
            }}
            className={` bg-gray-200 btns cursor-pointer w-44 rounded-lg text-center py-3 px-4 font-medium text-[24px] ${
              active === "All" ? "activeBtn" : ""
            }`}>
            Tất cả
          </div>
          <div
            onClick={(e) => {
              products.map((product) => {
                if (product.type.name === "Chung cư") {
                  allProducts.push(product);
                }
              });
              toggleTab("Chung cư");

              setProductType(allProducts);
            }}
            className={`bg-gray-200 btns cursor-pointer w-44 rounded-lg text-center py-3 px-4 font-medium text-[24px] ${
              active === "Chung cư" ? "activeBtn" : ""
            }`}>
            Chung cư
          </div>
          <div
            onClick={() => {
              products.map((product) => {
                if (product.type.name === "Biệt thự") {
                  allProducts.push(product);
                }
              });
              toggleTab("Biệt thự");

              setProductType(allProducts);
            }}
            className={`bg-gray-200 btns cursor-pointer w-44 rounded-lg text-center py-3 px-4 font-medium text-[24px] ${
              active === "Biệt thự" ? "activeBtn" : ""
            }`}>
            Biệt thự
          </div>
          <div
            onClick={() => {
              products.map((product) => {
                if (product.type.name === "Shophouse") {
                  allProducts.push(product);
                }
              });
              toggleTab("Shophouse");

              setProductType(allProducts);
            }}
            className={`bg-gray-200 btns cursor-pointer w-44 rounded-lg text-center py-3 px-4 font-medium text-[24px] ${
              active === "Shophouse" ? "activeBtn" : ""
            }`}>
            Shophouse
          </div>
          <div
            onClick={() => {
              products.map((product) => {
                if (product.type.name === "Condotel") {
                  allProducts.push(product);
                }
              });
              toggleTab("Condotel");
              setProductType(allProducts);
            }}
            className={`bg-gray-200 btns cursor-pointer w-44 rounded-lg text-center py-3 px-4 font-medium text-[24px] ${
              active === "Condotel" ? "activeBtn" : ""
            }`}>
            Condotel
          </div>
        </div>
        <Selects products={productType || products} productType={active} />
      </div>
    </>
  );
}
