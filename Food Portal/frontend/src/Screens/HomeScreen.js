import './HomeScreen.css';
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
  return (
    <div className='homescreen'>
    <div className='home-container'>
    <img src='https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=2000' alt='product name' width="60%" />
    <ul className='navbar_links'>
    <Link to='/pizza'>Pizza</Link>
    </ul>
    </div>
    <div className='home-container'>
    <img src='https://static.vecteezy.com/system/resources/thumbnails/006/034/883/small_2x/hand-drawn-big-burger-illustration-free-vector.jpg' alt='product name' width="60%" />
    <ul className='navbar_links'>
    <Link to='/burger'>Burger</Link>
    </ul>
    </div>
    </div>
  )
}

export default HomeScreen;