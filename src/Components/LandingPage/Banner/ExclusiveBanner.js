import React from 'react';
import glass from '../../../Assets/glass.png';
import bag from '../../../Assets/bag.png';
import womenImg from '../../../Assets/women.png';
import BtnShopNow from '../../UI/BtnShopNow';

const ExclusiveBanner = () => {
  return (
    <section className='lg:w-8/12 w-full mx-auto mt-20'>
      <div className='flex lg:flex-row flex-col items-center justify-between uppercase'>
        <div className='w-full lg:w-4/12 h-[12rem] flex items-center  bg-[#F7ECDE]'>
          <div className='w-6/12 ml-6'>
            <h2 className='text-[1rem]'>
              Exclusive Collection <br />
              <span className='text-[1.3rem] mt-[1.2rem]'>sunglasses</span>
              <br />
              <span className='text-red mt-[1.2rem]'>sale up to 30%</span>
              <BtnShopNow btnName={'Shop Now'} />
            </h2>
          </div>
          <div className='w-6/12'>
            <img className='w-full h-full' src={glass} alt='' />
          </div>
        </div>
        <div className='w-full lg:w-4/12 h-[12rem] flex items-center  bg-[#16213E] lg:mx-4 my-4 lg:my-0'>
          <div className='w-6/12 ml-6'>
            <h2 className='text-white text-[1rem]'>
              Exclusive Collection <br />
              <span className='text-[1.3rem] mt-[1.2rem]'>women's clothes</span>
              <br />
              <span className='text-red mt-[1.2rem]'>sale up to 15%</span>
              <BtnShopNow btnName={'Shop Now'} />
            </h2>
          </div>
          <div className='w-6/12'>
            <img className='w-full h-[12rem]' src={womenImg} alt='' />
          </div>
        </div>
        <div className='w-full lg:w-4/12 h-[12rem] flex items-center bg-[#D7C0AE]'>
          <div className='w-6/12 ml-6'>
            <h2 className='text-[1rem]'>
              Exclusive Collection <br />
              <span className='text-[1.3rem] mt-[1.2rem]'>ladies purse</span>
              <br />
              <span className='text-red mt-[1.2rem]'>sale up to 25%</span>
              <BtnShopNow btnName={'Shop Now'} />
            </h2>
          </div>
          <div className='w-6/12 '>
            <img className='w-full h-full' src={bag} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBanner;
