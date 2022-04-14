import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
//import Products from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';
import {Products, Navbar, Cart} from './components';

import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  

  return (
    <BrowserRouter>
        <Navbar totalItems={cart.total_items}/>
        <Routes>
            <Route path="/" element={<App/>}>
            <Route path="products" element={<Products/>} onAddToCart={handleAddToCart}/>
            <Route path="cart" element={<Cart/>}/>
            </Route>
            </Routes>
      </BrowserRouter>
  );
};

export default App;
