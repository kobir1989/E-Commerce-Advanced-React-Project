import React from 'react';

const Button = (props) => {
  return (
    <button
      className='hover:bg-black hover:text-white bg-white  border border-[1px] border-lightGray font-medium w-[8rem] h-[3em] text-cen'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
