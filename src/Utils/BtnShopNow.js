import React from 'react';
import Icons from './Icons';
import './BtnShopNow.css';
const BtnShopNow = (props) => {
  return (
    <button className='flex items-center mt-4 hover:text-[#FF7777]  slide_line'>
      <span>{props.btnName}</span>
      <span className='mx-4'>
        <Icons name={'ArrowBtn'} />
      </span>
    </button>
  );
};

export default BtnShopNow;
