import React from 'react';
import './Banner.css';
const BlackFridayBanner = () => {
  return (
    <section className='lg:border-none border-dashed border-[1px] border-gray mt-20 bg-black 3xl:w-8/12 lg:w-11/12 w-full flex lg:flex-row flex-col mx-auto items-center justify-between lg:h-[8rem] h-[20rem]'>
      <div className='bg-[#B7C4CF] lg:h-full h-[8rem] lg:w-4/12 w-8/12 flex justify-center items-center'>
        <h2 className='lg:text-[2rem] text-[1.5rem] uppercase  pump_ani'>
          black friday sale!
        </h2>
      </div>
      <div className='bg-black lg:w-8/12 w-full h-full p-2'>
        <div className=' flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:border-dashed lg:border-[1px] lg:border-gray h-full'>
          <div className='overflow-hidden'>
            <h2 className='text-lightGray lg:text-[2rem] text-[1.3rem] moving_ani'>
              PAY ONLY FOR YOUR LOVING ELECTRONICS
            </h2>
          </div>
          <button className='bg-lightGray w-[8rem] h-[2.3rem] lg:mr-4 mt-8 lg:mt-0'>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlackFridayBanner;
