import React, { useState } from 'react';
import Hero from './Header/Hero/Hero';
import NavBar from './Header/NavBar/NavBar';
import InfoBanner from './Banner/InfoBanner';
import CategoryBanner from './Banner/CategoryBanner';
import BlackFridayBanner from './Banner/BlackFridayBanner';
import DealsOfTheDay from './Product/DealsOfTheDay';
import SaleBanner from './Banner/SaleBanner';
import NewArrival from './Product/NewArrival';
import ExclusiveBanner from './Banner/ExclusiveBanner';
import BestSeller from './Product/BestSeller';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';

const LandingPage = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <header>
        <NavBar onShowCart={showCartHandler} />
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
};

export default LandingPage;
