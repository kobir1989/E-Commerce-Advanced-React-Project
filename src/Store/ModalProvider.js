import React, { useState } from 'react';
import { ModalContext } from './context';
const ModalProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [productModalData, setProductModalData] = useState();
  const addToModal = (data) => {
    setProductModalData(data);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(!showCart);
  };
  const openWishListHandler = () => {
    setOpenWishList(true);
  };
  const hideWishListHandler = () => {
    setOpenWishList(!openWishList);
  };
  const openProductHandler = () => {
    setOpenProductModal(true);
    console.log('Product Modal');
  };
  const hideProductHandler = () => {
    setOpenProductModal(!openProductModal);
  };
  const modalStates = {
    showCartHandler: showCartHandler,
    closeCartHandler: closeCartHandler,
    openWishListHandler: openWishListHandler,
    hideWishListHandler: hideWishListHandler,
    openProductHandler: openProductHandler,
    hideProductHandler: hideProductHandler,
    showCart: showCart,
    openWishList: openWishList,
    openProductModal: openProductModal,
    addToModal: addToModal,
    productModalData: productModalData,
  };
  return (
    <ModalContext.Provider value={modalStates}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
