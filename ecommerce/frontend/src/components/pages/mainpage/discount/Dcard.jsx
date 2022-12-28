import Ddata from './Ddata';
import Slider from 'react-slick';
import { useState } from 'react';

const Dcard = ({ addToCard, cartItem }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {Ddata.map((value, index) => {
        return (
          <div className="box" key={index}>
            <div className="product onActive">
              <div className="img">
                <img src={value.cover} alt="not found" />
                <h4>{value.name}</h4>
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
    </Slider>
  );
};
export default Dcard;
