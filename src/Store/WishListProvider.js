import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { WishContext } from './context';
const WishListProvider = (props) => {
  const [wishList, setWishList] = useState([]);
  console.log(wishList);
  const addToWishList = (list) => {
    const isInTheWishList = wishList.findIndex((i) => {
      return i.id === list.id;
    });

    if (isInTheWishList !== -1) {
      toast('Already Added to Wish List', { type: 'error' });
      return;
    }
    setWishList([...wishList, list]);
    toast('Added to Wish List', { type: 'success' });
  };
  const removeWishList = (item) => {
    console.log(item);
    setWishList(wishList.filter((list) => list.id !== item.id));
  };
  const wishMethod = {
    wishList: wishList,
    addToWishList: addToWishList,
    removeWishList: removeWishList,
  };
  return (
    <WishContext.Provider value={wishMethod}>
      {props.children}
    </WishContext.Provider>
  );
};

export default WishListProvider;
