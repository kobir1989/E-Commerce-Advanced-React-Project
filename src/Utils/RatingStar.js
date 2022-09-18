import React from 'react';
import ReactStars from 'react-rating-stars-component';

const star = {
  size: 30,
  value: 0,
  edit: true,
};

const RatingStar = () => {
  return (
    <div>
      <ReactStars {...star} />
    </div>
  );
};
export default RatingStar;
