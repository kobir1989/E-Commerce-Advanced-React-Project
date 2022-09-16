import React from 'react';
import ContextProvider from './Store/ContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LogInPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import AllProductsPage from './Pages/AllProductsPage';
import ShopingCartPage from './Pages/ShopingCartPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import DiscoountPage from './Pages/DiscountPage';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/products' element={<AllProductsPage />} />
          <Route path='/shopingcart' element={<ShopingCartPage />} />
          <Route path='/single-product/:id' element={<ProductDetailsPage />} />
          <Route path='/discount' element={<DiscoountPage />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
