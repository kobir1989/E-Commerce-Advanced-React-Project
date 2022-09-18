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
import WishListProvider from './Store/WishListProvider';
import ModalProvider from './Store/ModalProvider';
const App = () => {
  return (
    <ContextProvider>
      <WishListProvider>
        <ModalProvider>
          <Router>
            <Routes>
              <Route path='/' exact element={<LandingPage />} />
              <Route path='/home' element={<LandingPage />}></Route>
              <Route path='/login' element={<LogInPage />} />
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/products' element={<AllProductsPage />} />
              <Route path='/shopingcart' element={<ShopingCartPage />} />
              <Route
                path='/single-product/:id'
                element={<ProductDetailsPage />}
              />
              <Route path='/discount' element={<DiscoountPage />} />
            </Routes>
          </Router>
        </ModalProvider>
      </WishListProvider>
    </ContextProvider>
  );
};

export default App;
