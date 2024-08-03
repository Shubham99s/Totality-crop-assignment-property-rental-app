import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Cart from './pages/Cart';
import Context from './context/Context';
import './styles/style.css';

const App = () => {
  const [cartList, setCartList] = useState([]);

  const removeAllCartItems = () => {
    setCartList([]);
  };

  const incrementCartItemQuantity = (id) => {
    setCartList(
      cartList.map((each) => {
        if (id === each.id) {
          const updatedDays = each.days + 1;
          return { ...each, days: updatedDays };
        }
        return each;
      })
    );
  };

  const decrementCartItemQuantity = (id) => {
    const itemObject = cartList.find((each) => each.id === id);
    if (itemObject.days > 1) {
      setCartList(
        cartList.map((each) => {
          if (id === each.id) {
            const updatedDays = each.days - 1;
            return { ...each, days: updatedDays };
          }
          return each;
        })
      );
    } else {
      removeCartItem(id);
    }
  };

  const removeCartItem = (id) => {
    const updatedCartList = cartList.filter((each) => each.id !== id);
    setCartList(updatedCartList);
  };

  const addCartItem = (item) => {
    const itemPresent = cartList.find((each) => each.id === item.id);

    if (itemPresent) {
      setCartList(
        cartList.map((each) => {
          if (item.id === each.id) {
            const updatedDays = item.days + cartList.days;
            return { ...each, days: updatedDays };
          }
          return each;
        })
      );
    } else {
      const newCartList = [...cartList, item];
      setCartList(newCartList);
    }
  };

  return (
    <Context.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/properties" element={<Properties />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
