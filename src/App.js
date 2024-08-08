import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Shop from './Pages/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Component/Footer/Footer';
import men_banner from './Component/Asset/banner_mens.png';
import women_banner from './Component/Asset/banner_women.png';
import kids_banner from './Component/Asset/banner_kids.png';
import { Product } from './Pages/Product';
import ShopContextProvider from './Context/ShopContext'; // Import ShopContextProvider

function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider> {/* Wrap the application with ShopContextProvider */}
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route exact path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route exact path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route exact path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/login' element={<LoginSignup />} />
          <Route exact path='/Product/:id' element={<Product />} /> {/* Dynamic Product route */}
        </Routes>
        <Footer />
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
