import React from 'react';
import SectionWrapper from '../../Utils/SectionWrapper';
import FetchProductsFromAPI from '../FetchFromAPI/FetchProductsFromAPI';
export const BestSeller = () => {
  return (
    <SectionWrapper>
      <div className='text-center text-[2.5rem] mb-8'>
        <h2>Best Seller</h2>
      </div>
      <FetchProductsFromAPI />
    </SectionWrapper>
  );
};
export default BestSeller;
