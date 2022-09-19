import React from 'react';
import SectionWrapper from '../../Utils/SectionWrapper';
import FetchProductsFromAPI from '../FetchFromAPI/FetchProductsFromAPI';
import { Link } from 'react-router-dom';
import BtnShopNow from '../../Utils/BtnShopNow';
import bestSellerImg from '../../Assets/best-seller.png';
export const BestSeller = () => {
  return (
    <SectionWrapper>
      <div className='text-center text-[2rem] mb-20'>
        <div className='flex items-center'>
          <div className='w-[6rem] h-[6rem] flex'>
            <img src={bestSellerImg} alt='' />
          </div>
          <h2 className=' text-[2.5rem]'>Best Seller</h2>
        </div>
      </div>
      <FetchProductsFromAPI />
      <div className=' float-right'>
        <BtnShopNow btnName={'View All'} />
      </div>
    </SectionWrapper>
  );
};
export default BestSeller;
