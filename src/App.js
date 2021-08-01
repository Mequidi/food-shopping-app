import './App.css';
import { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart'
import CartProvider from './Store/CartProvider';

function App() {

  const [showCart,setShowCart] = useState(false);

  const showCartHandler = () =>{
    setShowCart(true);
  }

  const hideCartHandler = () =>{
    setShowCart(false);
  }
  
  return (
    <CartProvider>
      {showCart && <Cart onHideCart = {hideCartHandler} />}
      <Header onShowCart = {showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
    );
  }

export default App;