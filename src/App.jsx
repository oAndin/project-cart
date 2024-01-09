import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Catalog from './components/Catalog/Index';
import Cart from './components/Cart/Index';
import Thanks from './components/Thanks/Index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // useEffect(() => {
  //   localStorage.setItems("cartItems", JSON.stringify(cartItems))
  // }, [cartItems])
  // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  const [cartItems, setCartItems] = useState([]);
  const handleAddCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExist = prevItems.find((item) => item.id === product.id);
      if (itemExist) {
        toast.info(`${product.name} adicionado!`)
        return prevItems.map((item) => item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
        );
      }
      else {
        toast.success(`${product.name} adicionado com sucesso!`)
        return [...prevItems, { ...product, quantity }]
      }
    }
    )
  }

  const handleUpdateCart = (product, quantity) => {
    toast.info(`${product.name} quantidade atualizada`)
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === product.id ?
          { ...item, quantity: + quantity }
          : item
      );
    });
  };

  const handleRemoveFromCart = (product) => {
    toast.error(`${product.name} removido do carrinho!`)
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id))
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
        <div className='container'>
          <Routes>
            <Route path='/' element={<Catalog onAddToCart={handleAddCart} />} />
            <Route path='/cart' element={<Cart cartItems={cartItems} onUpdateCart={handleUpdateCart} handleRemoveFromCart={handleRemoveFromCart} />} />
            <Route path='/thank-you' element={<Thanks />} />
          </Routes>
        </div>
        <ToastContainer
          position='top-center'
          autoClose={3000}
          hideProgressBar={false}
          pauseOnFocusLoss
          closeOnClick>
        </ToastContainer>

      </BrowserRouter>
    </>
  );
}

export default App;
