import React, { useState } from "react";
import Navbar from "./components/navbar";
import CartScreen from "./Screens/CartScreen";
import Routes from './Routes/Routes'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <Router>
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Routes handleClick={handleClick} />
      ) : (
        <CartScreen cart={cart} setCart={setCart} />
      )}
    </React.Fragment>
    </Router>
  );
};

export default App;