import React from 'react';
import reviewData from './reviewData';
import Ratings from '../../Utils/Ratings';
const AllReview = () => {
  return (
    <div>
      <div className='mt-10'>
        <h2 className='text-[1.2rem] font-medium'>Caustomar Reviews</h2>
      </div>
      {reviewData.map((review) => (
        <div className='bg-white rounded-2xl p-6 mt-10'>
          <div className='flex items center justify-start gap-4'>
            <div className='w-[4rem] h-[4rem] mb-4'>
              <img
                className='w-full h-full rounded-full'
                src={review.imgUrl}
                alt=''
              />
            </div>
            <div className='flex flex-col items-start gap-2'>
              <h2 className='text-[1rem] font-medium'>{review.name}</h2>
              <div className='text-[#FECD70]'>
                <Ratings />
                <span className='text-gray text-[.7rem] text-gray'>
                  {review.time}
                </span>
              </div>
            </div>
          </div>
          <div className='lg:w-6/12 w-full '>
            <h2 className='text-gray text-[.8rem]'>{review.message}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllReview;
