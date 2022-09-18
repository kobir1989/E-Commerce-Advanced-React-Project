import React, { useState } from 'react';
import { WishContext } from './context';
const WishListProvider = (props) => {
  const [wishList, setWishList] = useState([]);
  const addToWishList = (list) => {
    setWishList((prev) => {
      let updatedWishList = [...prev, list];
      return updatedWishList;
    });
  };
  const wishMethod = {
    wishList: wishList,
    addToWishList: addToWishList,
  };
  return (
    <WishContext.Provider value={wishMethod}>
      {props.children}
    </WishContext.Provider>
  );
};

export default WishListProvider;
