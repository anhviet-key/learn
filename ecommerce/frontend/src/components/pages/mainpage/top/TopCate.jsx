import TopCart from './TopCart';
import './style.css';

const TopCate = () => {
  return (
      <section className="topCart background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex heading">
              <i className="fa fa-border-all"></i>
              <h2>Top catigories</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
  );
};
export default TopCate;
