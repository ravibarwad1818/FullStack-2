import './PizzaScreen.css';
import { useState, useEffect } from 'react';

export const PizzaScreen = ({ handleClick }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/pizza")
    .then((response)=>response.json())
    .then((items)=> {
      setItems(items);
    });
  }, []);

  return (
    <div className='pizzascreen'>
    <div className='title'>Tasty Pizzas</div>
    {items.map((item) => (
      <div className='pizza-container'>
      <div>
      <div className='name'>{item.name}</div>
      <div className='price'>{item.price}</div>
      <div className='description'>{item.description}</div>
      <button onClick={() => handleClick(item)}>Order Now</button>
      </div>
      <div className='img'><img src={item.image}/></div>
      </div>
    ))};
    </div>
  
  )
}

export default PizzaScreen;