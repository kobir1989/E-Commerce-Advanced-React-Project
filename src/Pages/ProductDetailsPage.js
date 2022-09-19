import React, { useContext } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import ProductsDetails from '../Components/ProductDetails/ProductsDetails';
import { ModalContext } from '../Store/context';
import WishListPopup from '../Components/PopUpModal/WishListPopUp';

const ProductDetailsPage = () => {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      <NavBar />
      {modalCtx.showCart && <Cart />}
      {modalCtx.openWishList && <WishListPopup />}

      <ProductsDetails />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
