import './CartScreen.css';
import { useEffect, useState } from 'react';

export const CartScreen = ({ cart, setCart }) => {

  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleClear = () => {
    setCart([]);
  }

  useEffect(() => {
    handlePrice();
  });


  return (
    <div>
    <div className='cartscreen'>
    <div className='title'> You Have Ordered</div>
    {cart.map((item) => (
    <div className='cart-container'>
    <div>
    <div className='name'>{item.name}</div>
    <div className='price'>{item.price}</div>
    <div className='description'>{item.description}</div>
    <button onClick={() => handleRemove(item.id)}>Remove</button>
    </div>
    <div className='img'><img src={item.image}/>
    </div>
    </div>
    ))}
    <button onClick={handleClear}>Place Order</button>
    </div>
    </div>
  
  )
}

export default CartScreen;