import React from 'react';
import FetchProductsFromAPI from '../FetchFromAPI/FetchProductsFromAPI';
import SectionWrapper from '../../Utils/SectionWrapper';
import BtnShopNow from '../../Utils/BtnShopNow';
import bestDealImg from '../../Assets/best-deal.png';
const DealsOfTheDay = ({ openProductHandler }) => {
  return (
    <SectionWrapper>
      <div className='text-left mb-20 '>
        <div className='flex items-center'>
          <div className='w-[6rem] h-[6rem] flex'>
            <img src={bestDealImg} alt='' />
          </div>
          <h2 className=' text-[2rem]'>Deals Of The Day</h2>
        </div>
      </div>
      <FetchProductsFromAPI openProductHandler={openProductHandler} />
      <div className=' float-right'>
        <BtnShopNow btnName={'View All'} />
      </div>
    </SectionWrapper>
  );
};

export default DealsOfTheDay;
