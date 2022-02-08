import React from 'react';

//import Product from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';

import { Products, Navbar } from './components'; // get the components from the components exported in index.js

const App = () => {
  return (
    <div>
        <Navbar />
        <Products />
    </div>
  )
};

export default App;
