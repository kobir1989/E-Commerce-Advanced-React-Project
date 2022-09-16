import React from 'react';
import FetchProductsFromAPI from '../FetchFromAPI/FetchProductsFromAPI';
import SectionWrapper from '../../Utils/SectionWrapper';
const NewArrival = () => {
  return (
    <SectionWrapper>
      <div className='text-center text-[2.5rem] mb-8'>
        <h2>New Arrival</h2>
      </div>
      <FetchProductsFromAPI />
    </SectionWrapper>
  );
};

export default NewArrival;
