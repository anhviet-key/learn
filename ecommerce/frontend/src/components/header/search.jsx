import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
export default function search({ cartItem }) {
  window.addEventListener('scroll', function () {
    const search = this.document.querySelector('.search');
    search.classList.toggle('active', this.window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="search-box d_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter ..." />
            <span>All catigories</span>
          </div>
          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
              </Link>
              <span>{cartItem.length}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
