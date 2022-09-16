import React, { useState } from 'react';
import HeroCoverOne from './HeroCoverOne';
import HeroCoverTwo from './HeroCoverTwo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BtnShopNow from '../../Utils/BtnShopNow';
import { settings } from '../../Utils/settings';
import { Link } from 'react-router-dom';
const Hero = () => {
  const [slider, setSlider] = useState();
  return (
    <section className=' lg:mt-20 mt-4 3xl:w-8/12 w-11/12 flex justify-between xl:flex-row items-center flex-col mx-auto'>
      <Slider
        {...settings}
        asSliderFor={slider}
        reference={(slider) => setSlider(slider)}
        className='xl:w-9/12 w-11/12 h-full'
      >
        <HeroCoverOne />
        <HeroCoverTwo />
      </Slider>
      <div className='xl:w-3/12 w-full flex flex-col text-white xl:ml-8'>
        <div className='hero_sub-1 lg:h-[16.5rem] h-[10rem] my-[3rem] xl:my-0 xl:mb-4 rounded flex items-center '>
          <div className='mx-4'>
            <h2 className='uppercase'>
              new arrivals
              <br />
              <span className='text-[1.5rem]'>
                summer <br /> sale 20% off
              </span>
            </h2>
            <Link to='/discount'>
              <BtnShopNow btnName={'Shop Now'} />
            </Link>
          </div>
        </div>
        <div className='hero_sub-2 lg:h-[16.5rem] h-[10rem] rounded flex items-center'>
          <div className='mx-4'>
            <h2 className='uppercase'>
              new arrivals
              <br />
              <span className='text-[1.5rem]'>
                summer <br /> sale 20% off
              </span>
            </h2>
            <Link to='/discount'>
              <BtnShopNow btnName={'Shop Now'} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
