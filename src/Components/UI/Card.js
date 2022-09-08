import React from 'react';
import Button from './Button';
import Icons from './Icons';
import Ratings from './Ratings';
import './Card.css';
const Card = (props) => {
  return (
    <div className='relative card p-4 bg-white m-8 flex flex-col items-center justify-center hover:shadow-xl  w-[15rem] h-[25rem] rounded'>
      <div className='flex flex-col wish_btn absolute top-4 right-4 text-red text-[1.5rem]'>
        <button className='mb-4'>
          <span>
            <Icons name={'Eye'} />
          </span>
        </button>
        <button>
          <span>
            <Icons name={'Heart'} />
          </span>
        </button>
      </div>
      <img src={props.img} alt='img' className='w-[50%] h-[45%] mb-4 card' />
      <h2 className=' mb-2 text-[.9rem]'>{props.title}</h2>
      <h2 className=' mb-4 text-[1.5rem] text-red '>${props.price}</h2>
      <div className='mb-4 flex text-red'>
        <Ratings />
        <span className='text-[.7rem] text-gray mx-2'>{props.rating}</span>
      </div>
      <Button>Add To Cart</Button>
    </div>
  );
};

export default Card;
