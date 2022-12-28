import Categories from './category/Categories.jsx';
import Slide from './category/Slide';
import './Home.css';
import FlashDeals from './flashDeals/FlashDeals';
import TopCate from './top/TopCate';
import NewArrivals from './newArrivals/NewArrivals';
import Discount from './discount/Discount';
import Wrapper from './wrapper/Wrapper';
import Adv from '../advertisement/Adv';

const Home = ({ productItems, addToCard, cartItem }) => {
  return (
    <section className="home">
      <div className="container d_flex">
        <Categories />
        <Slide />
      </div>
      <FlashDeals
        productItems={productItems}
        addToCard={addToCard}
      />
      <TopCate />
      <NewArrivals />
      <Discount addToCard={addToCard} cartItem={cartItem} />
      <Adv />
      <Wrapper />
    </section>
  );
};
export default Home;
