import Cdata from './Cdata.js';
const Categories = () => {
  return (
    <div className="category">
      {Cdata.map((value, index) => {
        return (
          <div className="box f_flex" key={index}>
            <img src={value.cateImg} alt="not found" />
            <span>{value.cateName}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;
