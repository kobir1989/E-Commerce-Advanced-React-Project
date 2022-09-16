import React from 'react';
import watch from '../../Assets/watch.png';
import nikeShoe from '../../Assets/shoes1.png';
import { Link } from 'react-router-dom';
const SaleBanner = () => {
  return (
    <Link to='/discount'>
      <section className='3xl:w-8/12 lg:w-11/12 w-full mx-auto mt-20'>
        <div className='flex lg:flex-row flex-col items-center justify-between'>
          <div className='lg:w-6/12 w-full h-[15rem] bg-black flex justify-evenly items-center md:mb-20 mb-4 xl:mb-0'>
            <div className='w-4/12'>
              <img className='w-[100%] h-[100%]' src={watch} alt='' />
            </div>
            <div className=''>
              <h2 className='text-white text-[1.2rem]'>
                Final Reduction <br />
                <span className='text-[2rem] border-b'>Sale up to 20% Off</span>
                <br />
                Only From
                <span className='text-red text-[2rem]'> $270.00</span>
              </h2>
            </div>
          </div>
          <div className='lg:w-6/12 w-full h-[15rem] bg-[#F5EDDC] flex justify-evenly items-center'>
            <div className='w-8/12 rotate-45'>
              <img className='w-[100%] h-[100%]' src={nikeShoe} alt='' />
            </div>
            <div>
              <h2 className='text-[1.2rem]'>
                Weekend Sale <br />
                <span className='text-[2rem] border-b'>Nike Shoes</span>
                <br />
                Starting at
                <span className='text-red text-[2rem]'> $185.00</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default SaleBanner;
