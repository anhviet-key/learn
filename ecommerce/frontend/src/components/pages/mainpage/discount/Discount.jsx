import Dcard from './Dcard';

const Discount = ({ addToCard, cartItem }) => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex heading">
              <img
                src="https://img.icons8.com/windows/32/fa314a/gift.png"
                alt="not found"
              />
              <h2>Big Discounts</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <Dcard addToCard={addToCard} cartItem={cartItem} />
        </div>
      </section>
    </>
  );
};
export default Discount;
