import React from 'react';
import SectionWrapper from '../../Utils/SectionWrapper';
import FetchProductsFromAPI from '../FetchFromAPI/FetchProductsFromAPI';
import { Link } from 'react-router-dom';
import BtnShopNow from '../../Utils/BtnShopNow';
export const BestSeller = () => {
  return (
    <SectionWrapper>
      <div className='text-center text-[2.5rem] mb-8'>
        <h2>Best Seller</h2>
      </div>
      <FetchProductsFromAPI />
      <div className='flex items-center justify-center my-10'>
        <Link to='/products'>
          <BtnShopNow btnName={'Browse More'} />
        </Link>
      </div>
    </SectionWrapper>
  );
};
export default BestSeller;
