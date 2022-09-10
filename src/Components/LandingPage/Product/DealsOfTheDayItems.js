import React, { useContext } from 'react';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import Ratings from '../../UI/Ratings';
import { Context } from '../../Store/context';
const DealsOfTheDayItems = (props) => {
  const ctx = useContext(Context);
  const addItemHandler = (item) => {
    console.log(console.log(item));
    ctx.addItems({
      title: item.title,
      price: item.price,
      id: item.id,
      img: item.img,
      qntt: 1,
    });
  };
  return (
    <div className='flex flex-wrap items-center justify-center'>
      {props.product.map((item) => (
        <Card key={item.id}>
          <div className='flex flex-col items-center justify-center h-full w-full'>
            <img
              src={item.img}
              alt='img'
              className='w-[10rem] h-[12rem] mb-4 card'
            />
            <h2 className=' mb-2 text-[.9rem]'>{item.title}</h2>
            <h2 className=' mb-4 text-[1.5rem] text-red '>${item.price}</h2>
            <div className='mb-4 flex text-red'>
              <Ratings />
              <span className='text-[.7rem] text-gray mx-2'>{item.rating}</span>
            </div>
            <Button
              onClick={() => {
                addItemHandler(item);
              }}
            >
              Add To Cart
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DealsOfTheDayItems;
