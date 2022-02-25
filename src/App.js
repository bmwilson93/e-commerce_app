import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

//import Product from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';

import { Products, Navbar } from './components'; // get the components from the components exported in index.js

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // returns a promise for the list of products from commerce
  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); 

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  // runs on load to fetch the products from commerce api
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
        <Navbar />
        <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  )
};

export default App;
