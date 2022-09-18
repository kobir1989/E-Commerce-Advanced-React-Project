import React from 'react';
import Icons from './Icons';
const Button = (props) => {
  return (
    <button
      className='relative shadow-2xl card_design bg-red text-white
       rounded text-[1.5rem] flex items-center justify-center 
       font-medium w-[3rem] h-[3rem] text-center'
      onClick={props.onClick}
    >
      <span>
        <Icons name={'Plus'} />
      </span>
      {props.children}
    </button>
  );
};

export default Button;
