import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
import Search from './search';
import './Header.css';
export default function Header({ cartItem }) {
  return (
    <>
      <Head />
      <Search cartItem={ cartItem } />
      <Navbar />
    </>
  );
}
