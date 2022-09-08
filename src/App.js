import React from 'react';
import './App.css';
import Hero from './Components/LandingPage/Header/Hero/Hero';
import NavBar from './Components/LandingPage/Header/NavBar/NavBar';
import InfoBanner from './Components/LandingPage/Banner/InfoBanner';
import CategoryBanner from './Components/LandingPage/Banner/CategoryBanner';
import BlackFridayBanner from './Components/LandingPage/Banner/BlackFridayBanner';
function App() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <InfoBanner />
        <CategoryBanner />
        <BlackFridayBanner />
      </main>
    </>
  );
}

export default App;
