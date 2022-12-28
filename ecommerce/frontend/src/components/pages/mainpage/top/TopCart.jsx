import Slider from 'react-slick';
import Tdata from './Tdata';

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {Tdata.map((value, index) => {
        return (
          <div className="box" key={index}>
            <div className="product">
              <div className="nametop d_flex">
                <span className="tleft">{value.para}</span>
                <span className="tright">{value.desc}</span>
              </div>
              <div className="img">
                <img src={value.cover} alt="not found" />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default TopCart;
