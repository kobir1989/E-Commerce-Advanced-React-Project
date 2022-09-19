import React from 'react';
import FetchProductsFromAPI from '../FetchFromAPI/FetchProductsFromAPI';
import SectionWrapper from '../../Utils/SectionWrapper';
import newArrivalImg from '../../Assets/new-arrival.png';
import { Link } from 'react-router-dom';
import BtnShopNow from '../../Utils/BtnShopNow';
const NewArrival = () => {
  return (
    <SectionWrapper>
      <div className='text-left mb-20 '>
        <div className='flex items-center'>
          <div className='w-[8rem] h-[6rem] flex'>
            <img src={newArrivalImg} alt='' />
          </div>
          <h2 className=' text-[2rem]'>New Arrival</h2>
        </div>
      </div>
      <FetchProductsFromAPI />
      <div className=' float-right'>
        <BtnShopNow btnName={'View All'} />
      </div>
    </SectionWrapper>
  );
};

export default NewArrival;
