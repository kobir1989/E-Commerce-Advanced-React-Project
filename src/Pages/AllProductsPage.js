import React, { useState, useContext } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import AllProducts from '../Components/AllProducts/AllProducts';
import { ModalContext } from '../Store/context';
import WishListPopup from '../Components/PopUpModal/WishListPopUp';
import ProductPopUp from '../Components/PopUpModal/ProductPopUp';
const AllProductsPage = () => {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      <NavBar />
      {modalCtx.showCart && <Cart />}
      {modalCtx.openWishList && <WishListPopup />}
      {modalCtx.openProductModal && <ProductPopUp />}
      <AllProducts />
      <Footer />
    </>
  );
};

export default AllProductsPage;
