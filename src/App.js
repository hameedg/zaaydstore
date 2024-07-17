// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.objectID !== id));
  };

  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Hero addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
