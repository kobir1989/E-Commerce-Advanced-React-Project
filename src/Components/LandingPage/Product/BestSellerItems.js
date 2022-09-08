import React from 'react';
import Card from '../../UI/Card';
const BestSellerItems = (props) => {
  return (
    <div className='flex flex-wrap justify-between items-center'>
      {props.product.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default BestSellerItems;
