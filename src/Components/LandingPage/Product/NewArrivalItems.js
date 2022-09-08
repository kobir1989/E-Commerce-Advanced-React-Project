import React from 'react';
import Card from '../../UI/Card';
const NewArrivalItems = ({ jwProduct }) => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {jwProduct.map((item) => (
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

export default NewArrivalItems;
