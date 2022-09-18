import React, { useState } from 'react';
import { v4 } from 'uuid';
import { settings } from '../../Utils/settings';
import Slider from 'react-slick';
import SectionWrapper from '../../Utils/SectionWrapper';
const posterData = [
  {
    id: v4(),
    imgUrl: require('../../Assets/poster-1.png'),
    title: 'Life style Collection',
    titlesm: 'Get Free Shipping on orders pver $99.00',
    titleMd: 'Crazy sell',
    saleTag: 'Up to 25% Off',
  },
  {
    id: v4(),
    imgUrl: require('../../Assets/poster-2.png'),
    title: 'Life style Collection',
    titlesm: 'Get Free Shipping on orders pver $99.00',
    titleMd: 'Weekend Sale',
    saleTag: 'Up to 25% Off',
  },
  // {
  //   id: v4(),
  //   imgUrl: require('../../Assets/poster-8.jpg'),
  //   title: 'New Arrivals',
  //   titlesm: 'Get Free Shipping on orders pver $99.00',
  //   titleMd: 'Big sell ',
  //   saleTag: 'Up to 25% Off',
  // },
  {
    id: v4(),
    imgUrl: require('../../Assets/poster-4.png'),
    title: 'Summer Collection',
    titlesm: 'Get Free Shipping on orders pver $99.00',
    titleMd: 'Summer',
    saleTag: 'Up to 25% Off',
  },
  {
    id: v4(),
    imgUrl: require('../../Assets/poster-5.png'),
    title: 'Summer Collection',
    titlesm: 'Get Free Shipping on orders pver $99.00',
    titleMd: 'Summer',
    saleTag: 'Up to 25% Off',
  },
];
const DiscountSlider = () => {
  const [posterSlider, setPosterSlider] = useState();
  return (
    <SectionWrapper>
      <Slider
        {...settings}
        asSliderFor={posterSlider}
        reference={(slider) => setPosterSlider(slider)}
      >
        {posterData.map((poster) => (
          <div
            key={poster.id}
            className='w-[100%] lg:h-[38rem] h-[30rem] relative'
          >
            <div>
              <img
                className='z-0 w-[100%] h-[100%]'
                src={poster.imgUrl}
                alt=''
              />
            </div>
            <div className='absolute z-40 lg:top-[30%] top-[40%] lg:right-10 '>
              <h1 className='text-[#0F3460] lg:text-[2.5rem] text-[1.5rem]  uppercase'>
                {poster.title}
              </h1>
              <h2 className='text-[#0F3460] lg:text-[4rem] text-[2rem] uppercase'>
                {poster.titleMd}
              </h2>
              <h2 className='text-red lg:text-[2.5rem] text-[1.5rem] uppercase'>
                {poster.saleTag}
              </h2>
              <h3 className='lg:text-[1.8rem] text-[.8rem] text-[#0F3460]'>
                {poster.titlesm}
              </h3>
              <button className='w-[12rem] h-[3rem] bg-red text-white mt-6 font-bold hover:bg-[#F24C4C]'>
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </SectionWrapper>
  );
};

export default DiscountSlider;
