import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Halo } from '../api/data';

const BLog = () => {
  return (
    <main>
      <h2>Blog</h2>
      <Link to="Hawai">back</Link>

      <div className="">
        {Halo.map((Val) => (
          <Link to={Val.id.toString()} key={Val.id}>
            {Val.name}
          </Link>
        ))}
      </div>
      <Outlet />
    </main>
  );
};

export default BLog;
