import React from 'react';
import PizzaScreen from '../Screens/PizzaScreen';
import BurgerScreen from '../Screens/BurgerScreen';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';
import {Routes, Route} from 'react-router-dom';

export const Routing = ({handleClick}) => {
  return (
    <div>
    <Routes>
    <Route path="/" exact element={<HomeScreen/>} />
    <Route path="/pizza" exact element={<PizzaScreen handleClick={handleClick}/>} />
    <Route path="/burger" exact element={<BurgerScreen handleClick={handleClick}/>} />
    </Routes>
    </div>
  )
}
export default Routing;