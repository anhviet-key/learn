import { useState } from 'react';

const ShopCart = ({ productItems, addToCard }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {productItems.map((value, index) => {
        return (
          <div className="box" key={index}>
            <div className="product onActive mtop">
              <div className="img">
                <span className="discount">{value.discount} % off</span>
                <img src={value.cover} alt="not found" />
                <div className="product-like">
                  <label>{value.qty}</label>
                  <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{value.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{`$ ${value.price}`}</h4>
                  <button onClick={() => addToCard(value)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ShopCart;
