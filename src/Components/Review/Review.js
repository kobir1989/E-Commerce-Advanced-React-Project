import React, { useState } from 'react';
import AllReview from './AllReview';
import ReviewForm from './ReviewForm';
const Review = () => {
  const [showReview, setShowReview] = useState(false);
  const revieFormwHandler = () => {
    setShowReview(true);
  };
  const AllReviewHandler = () => {
    setShowReview(!showReview);
  };
  return (
    <div className='mt-20 p-6 lg:p-0'>
      <div className={'flex gap-8 border-b-[1px] border-[#EAE3D2]'}>
        <button
          className={
            !showReview
              ? 'p-2 border-b-[2px] border-red text-[.9rem] font-medium'
              : 'p-2  text-[.9rem] font-medium'
          }
          onClick={AllReviewHandler}
        >
          Customar Review (3)
        </button>
        <button
          className={
            showReview
              ? 'p-2 border-b-[2px] border-red text-[.9rem] font-medium'
              : 'p-2  text-[.9rem] font-medium'
          }
          onClick={revieFormwHandler}
        >
          Write a Review
        </button>
      </div>
      {!showReview ? <AllReview /> : <ReviewForm />}
    </div>
  );
};

export default Review;
