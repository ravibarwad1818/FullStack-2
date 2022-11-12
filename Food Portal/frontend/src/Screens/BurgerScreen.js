import './BurgerScreen.css';
import { useState, useEffect} from 'react';

export const BurgerScreen = ({ handleClick }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/burger")
    .then((response)=>response.json())
    .then((items)=> {
      setItems(items);
    });
  }, []);

  return (
    <div className='burgerscreen'>
    <div className='title'>Crispy Burgers</div>
    {items.map((item) => (
      <div className='burger-container'>
      <div>
      <div className='name'>{item.name}</div>
      <div className='price'>{item.price}</div>
      <div className='description'>{item.description}</div>
      <button onClick={() => handleClick(item)}>Order Now</button>
      </div>
      <div className='img'><img src={item.image}/>
      </div>
      </div>
    ))};
    </div>
  
  )
}

export default BurgerScreen;