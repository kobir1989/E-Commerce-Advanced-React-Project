import React from 'react';
import glass from '../../Assets/glass.png';
import bag from '../../Assets/bag.png';
import womenImg from '../../Assets/women.png';
import BtnShopNow from '../../Utils/BtnShopNow';
import { Link } from 'react-router-dom';
const ExclusiveBanner = () => {
  return (
    <section className='3xl:w-8/12 lg:w-11/12 w-full mx-auto mt-20'>
      <div
        className='flex lg:flex-row flex-col items-center 
      justify-between uppercase'
      >
        <div
          className='w-full lg:w-4/12 h-[12rem] flex items-center  
       bg-gradient-to-r from-[#FCF8E8] to-[#CDC2AE] rounded-xl '
        >
          <div className='w-6/12 ml-6'>
            <h2 className='text-[1rem]'>
              Exclusive Collection <br />
              <span className='text-[1.3rem] mt-[1.2rem]'>sunglasses</span>
              <br />
              <span className='text-red mt-[1.2rem]'>sale up to 30%</span>
              <Link to='/discount'>
                <BtnShopNow btnName={'Shop Now'} />
              </Link>
            </h2>
          </div>
          <div className='w-6/12 drop-shadow-lg'>
            <img className='w-full h-full' src={glass} alt='' />
          </div>
        </div>
        <div
          className='w-full lg:w-4/12 h-[12rem] flex items-center  
       bg-gradient-to-r from-[#16213E] to-[#4D4C7D] rounded-xl lg:mx-4 my-4 lg:my-0'
        >
          <div className='w-6/12 ml-6'>
            <h2 className='text-white text-[1rem]'>
              Exclusive Collection <br />
              <span className='text-[1.3rem] mt-[1.2rem]'>women's clothes</span>
              <br />
              <span className='text-red mt-[1.2rem]'>sale up to 15%</span>
              <Link to='/discount'>
                <BtnShopNow btnName={'Shop Now'} />
              </Link>
            </h2>
          </div>
          <div className='w-6/12 drop-shadow-lg'>
            <img className='w-full h-[12rem]' src={womenImg} alt='' />
          </div>
        </div>
        <div
          className='w-full lg:w-4/12 h-[12rem] flex items-center
         bg-gradient-to-r from-[#FCF8E8] to-[#D7C0AE] rounded-xl '
        >
          <div className='w-6/12 ml-6'>
            <h2 className='text-[1rem]'>
              Exclusive Collection <br />
              <span className='text-[1.3rem] mt-[1.2rem]'>ladies purse</span>
              <br />
              <span className='text-red mt-[1.2rem]'>sale up to 25%</span>
              <Link to='/discount'>
                <BtnShopNow btnName={'Shop Now'} />
              </Link>
            </h2>
          </div>
          <div className='w-6/12 drop-shadow-lg'>
            <img className='w-full h-full' src={bag} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBanner;
