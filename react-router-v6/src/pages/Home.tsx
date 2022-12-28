import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h2>Home</h2>
      <nav>
        <Link to="blog">Blog</Link> | <Link to="contact">Contact</Link> |{' '}
        {/* <Link to="/">Back</Link> */}
      </nav>
      <Outlet />
    </main>
  );
};

export default Home;
