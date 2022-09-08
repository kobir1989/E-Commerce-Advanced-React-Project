import React from 'react';
import './App.css';
import Hero from './Components/LandingPage/Header/Hero/Hero';
import NavBar from './Components/LandingPage/Header/NavBar/NavBar';
import InfoBanner from './Components/LandingPage/Banner/InfoBanner';
import CategoryBanner from './Components/LandingPage/Banner/CategoryBanner';
import BlackFridayBanner from './Components/LandingPage/Banner/BlackFridayBanner';
import DealsOfTheDay from './Components/LandingPage/Product/DealsOfTheDay';
import SaleBanner from './Components/LandingPage/Banner/SaleBanner';
import NewArrival from './Components/LandingPage/Product/NewArrival';
import ExclusiveBanner from './Components/LandingPage/Banner/ExclusiveBanner';
import BestSeller from './Components/LandingPage/Product/BestSeller';
import Footer from './Components/LandingPage/Footer/Footer';
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
        <DealsOfTheDay />
        <SaleBanner />
        <NewArrival />
        <ExclusiveBanner />
        <BestSeller />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
