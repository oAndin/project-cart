import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Catalog from './components/Catalog/Index';
import Cart from './components/Cart/Index';
import Thanks from './components/Thanks/Index';
import { useState } from 'react';

function App() {
  // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  // useEffect(() => {
  //   localStorage.setItems("cartItems", JSON.stringify(cartItems))
  // }, [cartItems])
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExist = prevItems.find((item) => item.id === product.id);
      if (itemExist) {
        return prevItems.map((item) => item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
        );
      }
      else {
        return [...prevItems, { ...product, quantity }]
      }
    }
    )
  }
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to='/'>
            Catálogo
          </Link>
          <Link to='/cart'>
            Carrinho
          </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Catalog onAddToCart={handleAddCart} />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
          <Route path='/thank-you' element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
