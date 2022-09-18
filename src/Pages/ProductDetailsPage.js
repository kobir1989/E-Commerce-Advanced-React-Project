import React, { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import SingleProduct from '../Components/ProductDetails/SingleProduct';
import ProductsDetails from '../Components/ProductDetails/ProductsDetails';
const ProductDetailsPage = () => {
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
      <ProductsDetails />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
