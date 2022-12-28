import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/mainpage/Home';
import Data from './components/pages/mainpage/flashDeals/Data';
import Cart from './components/pages/cart/Cart';
import Shop from './components/pages/shoppage/Shop';
import Footer from './components/footer/Footer';
import Details from './components/pages/details/Details';

function App() {
  const [productItems, setProductItems] = useState(Data.productItems);
  // const { productItems } = Data;
  // const { shopItems } = Sdata;

  const [cartItem, setCartItem] = useState([]);
  const addToCard = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }

    const cartNum = productItems.find((item) => item.id === product.id);
    if (cartNum) {
      setProductItems(
        productItems.map((item) =>
          item.id === product.id ? { ...cartNum, qty: cartNum.qty + 1 } : item
        )
      );
    } else {
      // eslint-disable-next-line no-unused-expressions
      setProductItems([...productItems, { ...product, qty: 1 }]);
    }
  };
  // console.log(cartItem);
  // console.log('1', productItems);
  // console.log('2', Data.productItems);

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  const removeCard = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(cartItem.filter((item) => item.id !== productExit.id));
    } else {
      setCartItem([...cartItem]);
    }
  };
  return (
    <div className="App">
      <Header cartItem={cartItem} />
      <main>
        <Routes>
          <Route path="*" element={<>Chọn sản phẩm phù hơp</>} />
          <Route
            path="/"
            element={
              <Home
                productItems={productItems}
                cartItem={cartItem}
                addToCard={addToCard}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cartItem={cartItem}
                addToCard={addToCard}
                decreaseQty={decreaseQty}
                removeCard={removeCard}
              />
            }
          />
          <Route
            path="shop"
            element={<Shop productItems={productItems} addToCard={addToCard} />}
          />
          <Route path="details" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
