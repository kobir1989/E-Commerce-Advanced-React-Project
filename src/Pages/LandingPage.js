import React, { useState } from 'react';
import Hero from '../Components/Hero/Hero';
import NavBar from '../Components/NavBar/NavBar';
import InfoBanner from '../Components/Banner/InfoBanner';
import CategoryBanner from '../Components/Banner/CategoryBanner';
import BlackFridayBanner from '../Components/Banner/BlackFridayBanner';
import SaleBanner from '../Components/Banner/SaleBanner';
import ExclusiveBanner from '../Components/Banner/ExclusiveBanner';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import BestSeller from '../Components/BestSeller/BestSeller';
import DealsOfTheDay from '../Components/DealsOfTheDay/DealsOfTheDay';
import NewArrival from '../Components/NewArrival/NewArrival';
import WishListPopUp from '../Components/PopUpModal/WishListPopUp';
const LandingPage = () => {
  const [showCart, setShowCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(!showCart);
  };
  const openWishListHandler = () => {
    setOpenWishList(true);
    console.log('clicked');
  };
  const hideWishListHandler = () => {
    setOpenWishList(!openWishList);
  };
  return (
    <>
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      {openWishList && <WishListPopUp onCloseWishList={hideWishListHandler} />}
      <header>
        <NavBar
          onShowCart={showCartHandler}
          onOpenWishList={openWishListHandler}
        />
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
