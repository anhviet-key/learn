import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BLog from './pages/BLog';
import Contact from './pages/Contact';
import Hawai from './pages/Hawai';
import Home from './pages/Home';
import Param from './pages/Param';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Contact />} />
        <Route path="/home" element={<Home />}>
          <Route path="blog" element={<BLog />}>
            <Route index element={<>Chọn sản phẩm phù hơp</>} />
            <Route path=":idblog" element={<Param />} />
            <Route path="Hawai" element={<Hawai />} />
          </Route>
          <Route path="contact" element={<Contact />} index />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
