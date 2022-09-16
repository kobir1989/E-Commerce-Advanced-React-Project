import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import FetchProductsFromAPI from '../Components/FetchFromAPI/FetchProductsFromAPI';
import DiscountSlider from '../Components/DiscountSlider/DiscountSlider';
import SectionWrapper from '../Utils/SectionWrapper';
const DiscountPage = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <NavBar onShowCart={showCartHandler} />
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <DiscountSlider />
      <SectionWrapper>
        <FetchProductsFromAPI />
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default DiscountPage;
