import React from 'react';
import RatingStar from '../../Utils/RatingStar';
const ReviewForm = () => {
  return (
    <div className=''>
      <div className='mb-6 mt-10'>
        <h2 className='text-[1.2rem] font-medium'>
          Write a Review for this Product
        </h2>
      </div>
      <div className='text-gray'>
        <span className='text-[.9rem]'> Your Rating</span>
        <span className='text-red'> *</span>
        <RatingStar />
      </div>
      <form className='my-4'>
        <div className='mb-2'>
          <label htmlFor='comment' className='text-[.9rem] text-gray '>
            Your Comment <span className='text-red'>*</span>
          </label>
        </div>
        <div className=' rounded text-[.9rem] text-gray '>
          <textarea
            rows='4'
            cols='50'
            name='comment'
            form='userform'
            placeholder='Write your Comment here'
            className='p-4 outline-red mb-6 border-[1px] border-[#EAE3D2] w-11/12 lg:w-4/12'
          ></textarea>
        </div>
        <div
          className='w-[10rem] flex items-center justify-center hover:shadow-xl rounded
         h-[3rem] text-white text-[1.2rem] bg-red'
        >
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
