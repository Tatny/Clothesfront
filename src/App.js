// import 'bootstrap/dist/css/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filtros from './components/filtros';
import Cards from "./components/cards";
import ClothContainer from "./components/clothesContainer";




function App() {
  return (
    <div>
      <Navbar/>
      <div className='filtros-container'>
        <ClothContainer/>
      </div>

    </div>
  );
}

export default App;
