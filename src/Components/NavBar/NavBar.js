import React, { useState } from 'react';
import NavManue from './NavManue';
import NavSearch from './NavSearch';
<<<<<<< HEAD
import StickyNav from './StickyNav';
const NavBar = ({ onShowCart }) => {
=======

const NavBar = ({ onShowCart, onOpenWishList }) => {
>>>>>>> test
  const [showCategory, setShowCategory] = useState(true);
  const [showManue, setShowManue] = useState(true);
  const [showUserLogin, setShowUserLogin] = useState(true);

  const categoryHandler = () => {
    setShowCategory(!showCategory);
  };
  const manueHandler = () => {
    setShowManue(!showManue);
  };
  const loginBtnHandler = () => {
    setShowUserLogin(!showUserLogin);
  };

  return (
    <nav className='bg-white lg:py-4 py-2'>
      <NavSearch
        onManue={manueHandler}
        showManue={showManue}
        onLoginBtn={loginBtnHandler}
        showUserLogin={showUserLogin}
        onShowCart={onShowCart}
        onOpenWishList={onOpenWishList}
      />
      <NavManue
        onCategory={categoryHandler}
        showCategory={showCategory}
        showManue={showManue}
      />
      <StickyNav />
    </nav>
  );
};

export default NavBar;
