import React from 'react';
import ContextProvider from '../src/Components/Store/ContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import LogInPage from './Components/LoginPage/LogInPage';
import SingUp from './Components/SignUp/SingUp';
import AllProduct from './Components/ProductPage/AllProduct';
const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/signup' element={<SingUp />} />
          <Route path='/products' element={<AllProduct />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
