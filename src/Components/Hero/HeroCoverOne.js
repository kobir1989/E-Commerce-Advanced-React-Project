import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
const HeroCoverOne = () => {
  return (
    <div className='z-0 hero__section h-[35rem] justify-center lg:justify-start w-full flex items-center xl:w-full slide_anim '>
      <div className=' lg:ml-20 text-center lg:text-left'>
        <h1 className='uppercase lg:text-[2rem] text-[1.5rem] leading-snug'>
          lifestyle collection <br />
          <span className='lg:text-[4rem] text-[3rem]'>men</span> <br />
          sale up to
          <span className='text-red text-[2rem]'> 30% off</span>
        </h1>
        <p className='mt-6 lg:mt-0 lg:text-[1.5rem] text-[1.2rem]'>
          Get Free Shipping on orders <br /> over $99.00
        </p>
        <Link to='/discount'>
          <button className='bg-black text-white w-[10rem] p-3 hover:bg-[#3A3845] mt-8'>
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroCoverOne;
