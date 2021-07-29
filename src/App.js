// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';

function App() {
return (
  <Fragment>
    <Header></Header>
    <Meals></Meals>
  </Fragment>
  );
}

export default App;