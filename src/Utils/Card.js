import React from 'react';
import Icons from './Icons';
import './Card.css';
const Card = (props) => {
  return (
    <div className='relative card p-4 bg-white m-8 flex flex-col items-center justify-center hover:shadow-xl  w-[15rem] h-[25rem] rounded'>
      <div className='flex flex-col wish_btn absolute top-4 right-4 text-red text-[1.5rem] z-40'>
        <button className='mb-4'>
          <span onClick={props.navigate}>
            <Icons name={'Eye'} />
          </span>
        </button>
        <button>
          <span>
            <Icons name={'Heart'} />
          </span>
        </button>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
