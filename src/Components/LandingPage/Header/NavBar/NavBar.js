import React, { useState } from 'react';
import NavManue from './NavManue';
import NavSearch from './NavSearch';
const NavBar = () => {
  const [showCategory, setShowCategory] = useState(true);
  const [showManue, setShowManue] = useState(true);

  const categoryHandler = () => {
    setShowCategory(!showCategory);
  };
  const manueHandler = () => {
    setShowManue(!showManue);
  };
  return (
    <nav className='bg-white lg:py-4 py-2'>
      <NavSearch onManue={manueHandler} showManue={showManue} />
      <NavManue
        onCategory={categoryHandler}
        showCategory={showCategory}
        showManue={showManue}
      />
    </nav>
  );
};

export default NavBar;
