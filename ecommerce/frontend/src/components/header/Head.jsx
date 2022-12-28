import React from 'react';
export default function Head() {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor="">+00000 0000 0000</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor="">+00000 0000 0000</label>
          </div>
          <div className="right">
            <label htmlFor="">Theme FAQ`s</label>
            <label htmlFor="">Need Helps</label>
            <span>🇻🇳</span>
            <label htmlFor="">VN</label>
            <span>🇺🇸</span>
            <label htmlFor="">EN</label>
          </div>
        </div>
      </section>
    </>
  );
}
