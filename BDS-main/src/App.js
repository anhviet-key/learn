/** @format */
import { useEffect, useState } from "react";

import Header from "./components/homepage/header";
import Footer from "./components/homepage/footer";

import Banner from "./components/homepage/banner";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./components/homepage/contents/products/details";
import Wishlist from "./components/homepage/contents/products/wishlist";
import { productConfig } from "./api";
function App() {
  // const [report, setReport] = useState([]);

  // useEffect(() => {
  //   productConfig().then((res) => {
  //     setReport(res.data);
  //   })
  // },[])
  return (
    <div className='font-robotoo'>
      <Header />
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/products/:productsId' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
