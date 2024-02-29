import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import AppNavbar from './components/Navbar/Navbar'; // Uppdaterad import
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import {CartProvider}from './components/Cart/CartContext';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <AppNavbar /> 
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Cart" element={<Cart/>} /> 
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
