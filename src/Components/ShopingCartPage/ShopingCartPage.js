import React, { useState } from 'react';
import Footer from '../LandingPage/Footer/Footer';
import NavBar from '../LandingPage/Header/NavBar/NavBar';
import Cart from '../LandingPage/Cart/Cart';
const ShopingCartPage = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(!showCart);
  };
  return (
    <section>
      <NavBar onShowCart={showCartHandler} />
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <section className='3xl:w-8/12 lg:W-11/12 w-full mx-auto  mt-20'></section>
      <Footer />
    </section>
  );
};

export default ShopingCartPage;
