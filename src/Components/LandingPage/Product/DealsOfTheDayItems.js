import React from 'react';
import Card from '../../UI/Card';

const DealsOfTheDayItems = (props) => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      {props.product.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default DealsOfTheDayItems;
