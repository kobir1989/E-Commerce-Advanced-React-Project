import React, { useContext } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import ShopingCartDetails from '../Components/ShopingCartPage/ShopingCartDetails';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import BroughtTogether from '../Components/RelatedProducts/BroughtTogether';
import SectionWrapper from '../Utils/SectionWrapper';
import { ModalContext } from '../Store/context';
import WishListPopup from '../Components/PopUpModal/WishListPopUp';

const ShopingCartPage = () => {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      <NavBar />
      {modalCtx.showCart && <Cart />}
      {modalCtx.openWishList && <WishListPopup />}
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
