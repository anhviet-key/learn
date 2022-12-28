import './style.css';

const Details = () => {
  return (
    <>
      <section className="background" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="heading">
            <i class="fa-solid fa-house-crack"></i>
            <span>Home</span>
            <i class="fa-solid fa-circle-chevron-right"></i>
            <span>Categories</span>
            <i class="fa-solid fa-circle-chevron-right"></i>
            <span className="actives">
              Áo Hoodie Form Rộng Unisex For jeanproo, Áo khoác Sweater Chất Nỉ
              Dày dặn
            </span>
          </div>
          <div className="contentss d_flex gap_2 mtop">
            <div className="flex_1 pll">
              <div className="lefton">
                <div className="image">
                  <img
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/47112d0a-dc23-4b74-876c-b638fecf0af2/air-jordan-1-retro-high-og-shoes-a7Zzxm.png"
                    alt=""
                  />
                  xxxxxxxxx
                </div>
              </div>
            </div>
            <div className="flex_1 plr">
              <div className="righton">
                <div className="heading">
                  <div className="navLinks uppercase">Bedroom</div>
                  <h1>College Essentials</h1>
                  <div className="rate stop">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <span>5 (328 reviews)</span>
                  </div>
                  <div className="prices mtop">
                    <p>
                      Old price :
                      <span className="actives text-through"> $ 245.00</span>
                    </p>
                    <p>
                      New price :
                      <span style={{ color: 'blue' }}> $ 239.00</span>
                      <span>
                        (<i class="fa-solid fa-arrow-down-long"></i>7%)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Details;
