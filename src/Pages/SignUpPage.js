import React, { useContext } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Cart from '../Components/CartModal/Cart';
import SingUpForm from '../Components/SignUpForm/SingUpForm';
import { ModalContext } from '../Store/context';
import WishListPopup from '../Components/PopUpModal/WishListPopUp';
const SignUpPage = () => {
  const modalCtx = useContext(ModalContext);
  return (
    <>
      <NavBar />
      {modalCtx.showCart && <Cart />}
      {modalCtx.openWishList && <WishListPopup />}
      <SingUpForm />
      <Footer />
    </>
  );
};

export default SignUpPage;
