import React, { useState, useContext } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import FetchProductsFromAPI from '../Components/FetchFromAPI/FetchProductsFromAPI';
import DiscountSlider from '../Components/DiscountSlider/DiscountSlider';
import SectionWrapper from '../Utils/SectionWrapper';
import { ModalContext } from '../Store/context';
import WishListPopup from '../Components/PopUpModal/WishListPopUp';
import ProductPopUp from '../Components/PopUpModal/ProductPopUp';
const DiscountPage = () => {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      <NavBar />
      {modalCtx.showCart && <Cart />}
      {modalCtx.openWishList && <WishListPopup />}
      {modalCtx.openProductModal && <ProductPopUp />}
      <DiscountSlider />
      <SectionWrapper>
        <FetchProductsFromAPI />
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default DiscountPage;
