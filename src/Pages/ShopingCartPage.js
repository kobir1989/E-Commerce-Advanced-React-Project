import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import ShopingCartDetails from '../Components/ShopingCartPage/ShopingCartDetails';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import BroughtTogether from '../Components/RelatedProducts/BroughtTogether';
import SectionWrapper from '../Utils/SectionWrapper';
const ShopingCartPage = () => {
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
      <ShopingCartDetails />
      <SectionWrapper>
        <BroughtTogether />
        <RelatedProducts />
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default ShopingCartPage;
