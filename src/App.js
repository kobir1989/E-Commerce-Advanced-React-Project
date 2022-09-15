import React from 'react';
import ContextProvider from '../src/Components/Store/ContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import LogInPage from './Components/LoginPage/LogInPage';
import SingUp from './Components/SignUp/SingUp';
import Allproducts from './Components/AllProductsPage/Allproducts';
import ShopingCartPage from './Components/ShopingCartPage/ShopingCartPage';
import SingleProductPage from './Components/SingleProductPage/SingleProductPage';
import DiscountPage from './Components/DiscountPage/DiscountPage';
const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/signup' element={<SingUp />} />
          <Route path='/products' element={<Allproducts />} />
          <Route path='/shopingcart' element={<ShopingCartPage />} />
          <Route path='/single-product/:id' element={<SingleProductPage />} />
          <Route path='/discount' element={<DiscountPage />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
