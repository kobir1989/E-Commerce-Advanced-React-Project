import React, { useReducer } from 'react';
import { Context } from '../Store/context';
const initialState = {
  items: [],
  totalPrice: 0,
};
const reducer = (state, action) => {
  //Add items

  if (action.type === 'ADD') {
    const totalAmount =
      state.totalPrice + action.items.price * action.items.qntt;

    const cartItemIndex = state.items.findIndex(
      (val) => val.id === action.items.id
    );
    const existingCartItem = state.items[cartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        qntt: existingCartItem.qntt + action.items.qntt,
      };
      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.items);
    }
    return {
      items: updatedItems,
      totalPrice: totalAmount,
    };
  }

  //Remove items
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalPrice - existingItem.price;
    let updatedItems;
    if (existingItem.qntt === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, qntt: existingItem.qntt - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalAmount,
    };
  }
  return initialState;
};
const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTocartHandler = (item) => {
    dispatch({
      type: 'ADD',
      items: item,
    });
  };
  const removeFromCart = (id) => {
    dispatch({
      type: 'REMOVE',
      id: id,
    });
  };

  const contextData = {
    items: state.items,
    apiData: state.apiData,
    totalPrice: state.totalPrice,
    addItems: addTocartHandler,
    removeItem: removeFromCart,
  };
  return (
    <Context.Provider value={contextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
