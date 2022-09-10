import React from 'react';
import ContextProvider from '../src/Components/Store/ContextProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import LogInPage from './Components/LoginPage/LogInPage';
import SingUp from './Components/SignUp/SingUp';
const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'} replace />}></Route>
          <Route path='/home' element={<LandingPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/signup' element={<SingUp />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
