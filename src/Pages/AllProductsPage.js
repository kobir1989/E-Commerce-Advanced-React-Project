import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import AllProducts from '../Components/FetchFromAPI/FetchProductsFromAPI';
import SectionWrapper from '../Utils/SectionWrapper';
const AllProductsPage = () => {
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
      <SectionWrapper>
        <AllProducts />
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default AllProductsPage;
