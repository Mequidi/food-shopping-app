// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart'

function App() {
return (
  <Fragment>
    <Header></Header>
    <Meals></Meals>
    <Cart></Cart>
  </Fragment>
  );
}

export default App;