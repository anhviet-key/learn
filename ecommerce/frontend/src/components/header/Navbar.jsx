import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catigories c_flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              catigories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          <div className="navlink capitalize">
            <ul
              onClick={() => setMobileMenu(false)}
              className={
                MobileMenu ? 'nav-links-MobileMenu' : 'link d_flex capitalze'
              }>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">shop</NavLink>
              </li>
              <li>
                <NavLink to="/tracking">tracking</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/feature">feature</NavLink>
              </li>

              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? (
                <i className="fas fa-times close home-bth"></i>
              ) : (
                <i className="fa fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
