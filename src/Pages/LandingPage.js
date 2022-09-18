import React from 'react';
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
import ProductPopUp from '../Components/PopUpModal/ProductPopUp';
import { ModalContext } from '../Store/context';
import { useContext } from 'react';
const LandingPage = () => {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      {modalCtx.openProductModal && <ProductPopUp />}
      {modalCtx.showCart && <Cart />}
      {modalCtx.openWishList && <WishListPopUp />}
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
};

export default LandingPage;
