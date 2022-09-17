import React from 'react';
import Icons from './Icons';
import './Card.css';

const Card = (props) => {
  return (
    <div
      className='cart-back rounded-br-3xl rounded-xl relative card
     bg-white flex flex-col items-center
     hover:shadow-xl  w-[15rem] h-[22rem]'
    >
      <div
        className='flex flex-col wish_btn absolute top-4 
      right-4 text-red text-[1.5rem] z-40'
      >
        <button className='mb-4'>
          <span onClick={props.navigate}>
            <Icons name={'Eye'} />
          </span>
        </button>
        <button onClick={props.addToWishList}>
          <span>
            <Icons name={'Heart'} />
          </span>
        </button>
      </div>
      <div className='relative w-full h-full flex flex-col justify-between'>
        <div
          className='bg-red w-[4.5rem] h-[2rem] rounded-2xl absolute left-2 flex
             justify-center items-center'
        >
          <p className='text-white font-meduim text-[1rem]'>15% off</p>
        </div>
        <div className='w-[100%] h-[60%] mx-auto p-4'>
          <img className='w-full h-full' src={props.img} alt='' />
        </div>
        <div className='pl-4'>
          <h2 className='text-[1rem] text-gray font-medium mb-4'>
            {props.title}...
          </h2>
          <h2 className='text-[1.5rem] text-red'>${props.price}</h2>
        </div>
        <div className='flex justify-between items-center'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
